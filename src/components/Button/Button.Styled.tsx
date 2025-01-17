import styled from "styled-components";

interface IButtonProps {
  customWidth: string;
  customHeight: string;
  customPadding: string;
  customColors: string;
  customFontsize: string;
  customFontWeight: string;
  customBackground: string;
  customFontFamily: string;
  customBackgroundHover: string;
}

export const Button = styled.button<IButtonProps>`
  width: ${(props) => props.customWidth};
  height: ${(props) => props.customHeight};
  padding: ${(props) => props.customPadding};
  color: ${(props) => props.customColors};
  background: ${(props) => props.customBackground};
  font-size: ${(props) => props.customFontsize};
  font-weight: ${(props) => props.customFontWeight};
  font-family: ${(props) => props.customFontFamily};
  border: none;
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    /* background: #e3c4f9; */
    background: ${(props) => props.customBackgroundHover};
  }

  @media screen and (max-width: 768px) {
    background: #502b6b;
    color: rgba(255, 255, 255, 1);
    &:hover {
      background: #5d3579;
    }
  }
`;
