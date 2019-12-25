import React from "react";
import styled from "styled-components";

const InputWithLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2em !important;
  margin: 0 5px;
  min-width: 50px;
`;

const Label = styled.label`
  text-transform: uppercase;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  flex: 1;
`;

const InputWithLabel = props => {
  const {
    elementId,
    label,
    placeholder,
    value,
    type,
    min,
    max,
    onChange
  } = props;
  return (
    <InputWithLabelWrapper>
      <Label htmlFor={elementId}>{`${label}:`}</Label>
      <Input
        id={elementId}
        name={elementId}
        type={type}
        min={min}
        max={max}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputWithLabelWrapper>
  );
};

export default InputWithLabel;
