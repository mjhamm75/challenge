import styled from "styled-components";
import { TransactionStatus } from "./state";

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

export const StatusSelect = ({
  onSelect,
}: {
  onSelect: (value: TransactionStatus) => void;
}) => {
  return (
    <Select onChange={(e) => onSelect(e.target.value as TransactionStatus)}>
      <option></option>
      <option value="pending">pending</option>
      <option value="settled">settled</option>
    </Select>
  );
};
