import { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import { transformKeysToCamelCase } from "../utils/string";
import { Order } from "../types/order";
import { Table } from "../types/table";

const defaultTable: Table = {
  status: "UNAVAILABLE",
  tableNo: "-",
};

const useOrder = () => {
  const [order, setOrder] = useState<Order[]>([]);
  const [table, setTable] = useState<Table>(defaultTable);
  useEffect(() => {
    getTableOrder(defaultTable.tableNo);
    // getOrder();
  }, []);
  // call table
  const getTableOrder = async (tableNo: string) => {
    const { data } = await supabase
      .from("orders")
      .select()
      .eq("table_no", tableNo);
    if (data && data.length > 0) {
      const no = transformKeysToCamelCase(data[0]);
      setTable(no);
    }
  };

  // call order   find match talbe and  fillter status
  const getOrder = async (tableNo: string) => {
    const { data } = await supabase
      .from("orders")
      .select()
      .eq("table_no", tableNo);
    if (data) {
      const orders: Order[] = data.map((item) =>
        transformKeysToCamelCase(item)
      );
      console.log("callOrder", orders);
      setOrder([...order, ...orders]);
    }
  };

  return { order, setOrder, getOrder, getTableOrder, table };
};

export const defaultOrderProvider = {
  order: {} as Order[],
  table: defaultTable,
  setOrder: () => null,
  getOrder: () => Promise.resolve(),
  getTableOrder: () => Promise.resolve(),
};
export default useOrder;
