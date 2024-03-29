import React, { useMemo } from "react";
import { useTable } from "react-table";
import records from "./records.json";
import { COLUMNS } from "./columns";
import "./Table.css";

const Table = ({ userData }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => records, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, rows, prepareRow } = tableInstance;

  return (
    <table {...getTableProps()}>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
