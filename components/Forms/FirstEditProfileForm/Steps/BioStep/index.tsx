import { useEffect, useState } from 'react';

import { Header } from '../../Header';
import { BioInputControl } from './BioInputControl';

import { Footer } from '../../Footer';
import { Div, Section } from './styles';

interface IProps {
  handleStep: (value: number | ((value: number) => number)) => void
  handleFormValues: any
  bioValue: string
}

export const BioStep = ({
  handleStep,
  handleFormValues,
  bioValue
}: IProps) => {

  const [inputError, setInputError] = useState('');
  const [stepComplete, setStepComplete] = useState(false);

  useEffect(() => {
    if (bioValue != null) {
      setStepComplete(false);
    } if (bioValue?.length < 160) {
      setStepComplete(true);
    }
  }, [bioValue]);

  return (
    <>
      <Div className="bioStep">
        <Header 
          title="Describe yourself"
          content="What makes you special? Don't think too hard, just have fun with it."
        />
        <Section>
          <BioInputControl 
            value={bioValue}
            handleInputValue={handleFormValues}
            inputError={inputError}
            handleInputErrorValue={setInputError}
          />
        </Section>
        <Footer
          stepCompleted={stepComplete}
          handleStep={() => handleStep((prev: number) => (prev + 1))}
        />
      </Div>
    </>
  );
};
