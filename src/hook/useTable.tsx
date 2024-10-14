import { useEffect, useState } from "react";
import { Table } from "../types/table";
import supabase from "../utils/supabase";
import { transformKeysToCamelCase } from "../utils/string";

const defaultTable: Table = {
  status: "AVAILABLE",
  tableNo: "-",
};
const useTable = () => {
  const [tableNo, setTableNo] = useState<Table[]>([]);

  useEffect(() => {
    CallTable();
  }, []);

  // call table with array
  const CallTable = async () => {
    const { data } = await supabase
      .from("tables")
      .select()
      .eq("status", "UNAVAILABLE")
      .order("created_at", { ascending: true });
    if (data) {
      const tables: Table[] = data.map((item) =>
        transformKeysToCamelCase(item)
      );
      console.log("callTable : ", tables);
      setTableNo(tables);
    }
  };

  return { CallTable, tableNo };
};
export const defaultTableProvider = {
  CallTable: () => Promise.resolve(),
  tableNo: defaultTable,
};
export default useTable;
