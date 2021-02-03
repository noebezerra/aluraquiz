import styled from 'styled-components';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'type']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
