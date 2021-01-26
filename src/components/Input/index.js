import styled from 'styled-components';

const Input = styled.input`
  background: transparent;
  border: 1px solid #979797;
  color: #fff;
  padding: 12px 16px;
  border-radius: 3.5px;
  width: 100%;
  font-size: 1rem;
  margin: 5px 0 24px;
  outline: none;
  ::placeholder {
    color: #979797;
  }
  :focus,
  :hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Input;
