import { useEffect, useState } from "react";
import { Table } from "../types/table";
import supabase from "../utils/supabase";
import { transformKeysToCamelCase } from "../utils/string";

const defaultTable: Table[] = [
  {
    status: "AVAILABLE",
    tableNo: "-",
  },
];
const useTable = () => {
  const [tableNo, setTableNo] = useState<Table[]>([]);

  useEffect(() => {
    CallTable();

    const channels = supabase
      .channel("custom-insert-channel")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "tables",
        },
        (payload: any) => {
          const newTable = transformKeysToCamelCase(payload.new);
          if (newTable.status === "AVAILABLE") {
            setTableNo([...tableNo, newTable]);
          }
          tableNo;
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channels);
    };
  }, []);

  // call table with array
  const CallTable = async () => {
    const { data } = await supabase
      .from("tables")
      .select()
      .eq("status", "AVAILABLE")
      .order("created_at", { ascending: true });
    if (data) {
      const tables: Table[] = data.map((item) =>
        transformKeysToCamelCase(item)
      );
      console.log("callTable : ", tables);
      setTableNo([...tableNo, ...tables]);
    }
  };

  return { CallTable, tableNo };
};
export const defaultTableProvider = {
  CallTable: () => Promise.resolve(),
  tableNo: defaultTable,
};
export default useTable;
