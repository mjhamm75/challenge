import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  background-color: lightgrey;
  border: 1px #a4a4a4 solid;
  border-radius: 6px;
  padding-left: 8px;
  box-shadow: none;
  outline: none;
`;

const Select = styled.select`
  background-color: lightgrey;
  border: 1px #a4a4a4 solid;
  border-radius: 6px;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  margin-right: 2rem;
  appearance: none;
  padding-left: 4px;
  width: 6rem;
`;

export const DynamicSelect = ({
  values = [],
  onChange,
}: {
  values: string[];
  onChange: (value: string) => void;
}) => {
  const [isDynamic, setIsDynamic] = useState(false);
  const onUpdate = (value: string) => {
    if (value === "Other") {
      setIsDynamic(true);
    } else {
      onChange(value);
    }
  };
  return isDynamic ? (
    <Input onChange={(e) => onUpdate(e.target.value)} />
  ) : (
    <Select onChange={(e) => onUpdate(e.target.value)}>
      <option value={null}></option>
      <option>Other</option>
      {values.map((v) => (
        <option value={v}>{v}</option>
      ))}
    </Select>
  );
};
