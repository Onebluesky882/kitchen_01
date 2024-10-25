import { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import { transformKeysToCamelCase } from "../utils/string";
import { MenuItemSupabase, OrderTable } from "../types/order";
import { Table } from "../types/table";
import { getMenuItem, menu as id } from "../data/Menu";

const useOrder = () => {
  const [order, setOrder] = useState<OrderTable[]>([]);
  const [table, setTable] = useState<Table[]>([]);

  useEffect(() => {
    getOrder();
  }, []);

  const getOrder = async () => {
    const { data } = await supabase.from("orders").select();

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
      getTable(dataItem);
    }
  };

  const getTable = (dataItem: any[]) => {
    const getTable: Table[] = dataItem.map((item) => ({
      status: item.status,
      tableNo: item.tableNo,
    }));

    //remove duplicate tableNO
    const getTables = Array.from(
      new Map(getTable.map((item) => [item.tableNo, item])).values()
    );
    setTable([...table, ...getTables]);
  };

  return { order, setOrder, getOrder, table };
};

export const defaultOrderProvider = {
  order: {} as OrderTable[],
  table: {} as Table[],
  setOrder: () => null,
  getOrder: () => Promise.resolve(),
  getOrderTable: () => Promise.resolve(),
  getTable: () => Promise.resolve(),
};
export default useOrder;
