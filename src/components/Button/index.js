import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  color: #fff;
  padding: 10px 16px;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: bold;
  line-height: 1.4;
  letter-spacing: 0.07rem;
  cursor: pointer;
  transition: opacity 0.3s;
  text-transform: uppercase;
  :hover {
    opacity: 93%;
  }
`;

export default Button;
