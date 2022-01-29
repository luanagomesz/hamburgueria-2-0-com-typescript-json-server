import { InputStyled } from "./style";

interface Input {
  placeholder: string;
}

export const Input = ({ placeholder }: Input) => {
  return (
    <>
      <InputStyled placeholder={placeholder}></InputStyled>
    </>
  );
};
