import { useMemo, useRef, useState } from 'react';
import { createAutocomplete } from '@algolia/autocomplete-core';

import { AutocompleteItem } from './AutocompleteItem';

import SearchIcon from '../Icons/Search';
import { theme } from 'styles/theme';
import { Button, Div, Form, Input, Ul } from './styles';

export const Searchbar = (props: any) => {

  const formRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false
  });

  const autocomplete: any = useMemo(() => createAutocomplete({
    placeholder: 'Search Develotter',
    onStateChange: ({ state }: any) => setAutocompleteState(state),
    getSources: () => [{
      sourceId: 'users-develotter-api',
      getItems: async({ query }) => {
        if (!!query) {
          const resp = await fetch(`/api/user/search/${query}`);
          const body = await resp.json();
    
          return body.user;
        }
      }
    }],
    ...props
  }), [props]);

  const formProps: any = autocomplete.getFormProps({
    inputElement: inputRef.current
  });
  const inputProps: any = autocomplete.getInputProps({
    inputElement: inputRef.current
  });
  
  return (
    <>
      <Form ref={formRef} {...formProps}>
        <Button>
          <SearchIcon
            height="20px"
            fill="currentColor"
            color={theme.white}
          />
        </Button>
        <Input
          ref={inputRef}
          {...inputProps}
        />
        {
          autocompleteState.isOpen && (
            <Div ref={panelRef} {...autocomplete.getPanelProps()}>
              {
                autocompleteState.collections.map((collection, index) => {
                  const { items }: any = collection;
                  return (
                    <section key={`section-${index}`}>
                      {items.length > 0 && (
                        <Ul {...autocomplete.getListProps()}>
                          {
                            items.map((item: any) => <AutocompleteItem key={item.id} {...item} />)
                          }
                        </Ul>
                      )}
                    </section>
                  );
                })
              }
            </Div>
          )
        }
      </Form>
    </>
  );
};
