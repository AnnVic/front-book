import styled from 'styled-components';

type ButtonProps = {
  $backgroundColor?: string;
  $color?: string;
  $onhoverBackgroundColor?: string;
  $onhoverColor?: string;
};
export const Button = styled.button<ButtonProps>`
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || 'var(--color-primary-dark)'};
  color: ${({ $color }) => $color || 'var(--color-white)'};
  padding: 12px 8px;
  border-radius: 6px;
  font-weight: 600;
  width: 200px;
  font-size: inherit;
  cursor: pointer;
  outline: none;
  border: none;
  transition: background-color 0.2s ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ $onhoverBackgroundColor }) =>
      $onhoverBackgroundColor || 'var(--color-primary-medium)'};
    color: ${({ $onhoverColor }) => $onhoverColor || 'var(--color-white)'};
  }
`;
