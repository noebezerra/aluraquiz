import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.contrastText};
  color: ${({ theme }) => theme.colors.contrastText};
  background: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 12px 16px;
  width: 100%;
  font-size: 1rem;
  margin: 5px 0 24px;
  outline: none;
  ::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }
  :focus,
  :hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Input = ({ onChange, placeholder, name, value, type }) => {
  return (
    <div>
      <InputBase
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        value={value}
      />
    </div>
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Input;
