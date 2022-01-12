import { Button } from './styles';

interface IProps {
  handleStep: (value: number | ((prev: number) => number)) => void
}

export const NextButton = ({handleStep}: IProps) => {
  return (
    <>
      <Button onClick={() => handleStep((prev: number) => prev + 1)}>
        Skip for now
      </Button>
    </>
  );
};
