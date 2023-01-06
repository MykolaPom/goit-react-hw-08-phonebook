import styled from '@emotion/styled';

export const Form = styled.form`
  width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  margin-top: 10px;
  display: block;
  padding: 10px 15px;
  width: 30%;
  font-size: 16px;
  background-color: black;
  color: white;
  border: 2px solid black;
  border-radius: 7px;
  cursor: pointer;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover {
    color: black;
    background-color: white;
  }
`;
