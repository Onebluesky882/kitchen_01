import { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import { transformKeysToCamelCase } from "../utils/string";
import { OrderTable } from "../types/order";
import { Table } from "../types/table";
import { getMenuItem, menu as id } from "../data/Menu";

const defaultTable: Table = [
  {
    tableNo: "A1",
    status: "AVAILABLE",
  },
];

const useOrder = () => {
  const [order, setOrder] = useState<OrderTable[]>([]);
  const [table, setTable] = useState<Table>(defaultTable);

  useEffect(() => {
    getOrder();
  }, []);

  const changeTableStatus = async (status: string, tableNo: string) => {
    await supabase.from("tables").update({ status }).eq("tableNo", tableNo);
  };

  const getTable = async () => {
    const { data } = await supabase
      .from("tables")
      .select()
      .eq("table_no", table.tableNo);
    if (data) {
      const tableNo = data.map((table) => transformKeysToCamelCase(table));
    }
  };

  const getOrder = async (tableNo: string) => {
    const { data } = await supabase
      .from("orders")
      .select()
      .eq("table_no", tableNo);

    if (data) {
      const dataItem = data.map((item) => transformKeysToCamelCase(item));
      const newMenu: OrderTable[] = dataItem.map((order: OrderTable) => {
        const menu = id.find((item) => item.id === order.menuId);

        if (!menu) {
          console.error(`Menu item not found for menuId: ${order.menuId}`);
          return {
            ...order,
            name: "Menu item not found",
            price: 0,
            image: "no image",
            category: "general",
          };
        }

        const item = getMenuItem(menu.id);
        return {
          ...order,
          name: item.name,
          price: item.price,
          image: item.image,
          category: item.category,
        };
      });

      setOrder([...order, ...newMenu]);
    }

    return { order, setOrder, getOrder, table, getTable };
  };
};
export const defaultOrderProvider = {
  order: {} as OrderTable[],
  table: defaultTable,
  setOrder: () => null,
  getOrder: () => Promise.resolve(),
  getOrderTable: () => Promise.resolve(),
  getTable: () => Promise.resolve(),
};
export default useOrder;
