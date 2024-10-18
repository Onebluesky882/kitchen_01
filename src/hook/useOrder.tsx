import { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import { transformKeysToCamelCase } from "../utils/string";
import { Order, OrderTable } from "../types/order";
import { Table } from "../types/table";
import { menu } from "../data/Menu";

const defaultTable: Table = {
  status: "UNAVAILABLE",
  tableNo: "-",
};

const useOrder = () => {
  const [order, setOrder] = useState<OrderTable[]>([]);
  const [table, setTable] = useState<Table>(defaultTable);
  useEffect(() => {
    getOrder();
  }, [table.tableNo]);

  const getOrder = async () => {
    const { data } = await supabase.from("orders").select();

    if (data) {
      const dataItem = data.map((item) => transformKeysToCamelCase(item));

      const orderTable: OrderTable[] = dataItem.map((order) => {
        const newMenu = menu.find((item) => item.id === order.menuId);

        return {
          ...order,
          name: newMenu?.name ?? "unknown",
          price: newMenu?.price ?? 0,
          image: newMenu?.image ?? "no image",
          category: newMenu?.category ?? "general",
        };
      });
      console.log(table);
      setOrder(orderTable);
    }
  };
  return { order, setOrder, getOrder };
};

export const defaultOrderProvider = {
  order: {} as Order[],
  table: defaultTable,
  setOrder: () => null,
  getOrder: () => Promise.resolve(),
  getTableOrder: () => Promise.resolve(),
};
export default useOrder;
