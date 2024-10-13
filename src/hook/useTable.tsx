import { useState } from "react";
import { Table } from "../types/table";

const defaultTable: Table = {
  status: "AVAILABLE",
  tableNo: "-",
};
const useTable = () => {
  const [tableNo, setTableNo] = useState<Table>(defaultTable);

  const selectTableNo = (tableNo: string) => {
    const table = tableNo;
    console.log("useTable :", table);
    setTableNo(table as unknown as Table);
  };

  return { selectTableNo, tableNo };
};
export const defaultTableProvider = {
  selectTableNo: () => null,
  tableNo: defaultTable,
};
export default useTable;
