import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
  border: 1px solid black;
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  background-color: #a64262;
  color: white;
`;

export const HeadTableData = styled.th`
  padding: 10px 0;
  outline: 1px solid #b7b7b7;
`;

export const TableRow = styled.tr`
  background-color: #0ee681;
  &:nth-of-type(2n) {
    background-color: #09ebc9;
  }
`;

export const TableData = styled.td`
  font-size: 14px;
  padding: 10px 0;
  outline: 1px solid var(--bg-grey);
`;
