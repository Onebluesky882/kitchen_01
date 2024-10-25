import { useEffect, useState } from "react";
import { MenuItem, MenuItemSupabase } from "../types/order";
import {
  transformKeysToCamelCase,
  transformKeysToSnakeCase,
} from "../utils/string";
import supabase from "../utils/supabase";
import { getMenuItem } from "../data/Menu";

const useMenu = () => {
  const [menus, setMenus] = useState<MenuItem[]>([]);

  useEffect(() => {
    getMenu();
  }, []);

  const addMenu = async ({ id }: Pick<MenuItem, "id">) => {
    const item = getMenuItem(id);
    setMenus((prev) => [...prev, item]);

    const randomNumber: number = Math.floor(
      1000000000 + Math.random() * 9000000000
    );

    // store to supabse
    const storeData: MenuItemSupabase = {
      price: item.price,
      updatedAt: new Date().toDateString(),
      category: item.category,
      createdAt: new Date().toDateString(),
      id: item.id,
      image: item.image,
      menuId: item.id,
      productId: randomNumber,
    };

    //  transform
    const transform = transformKeysToSnakeCase(storeData);
    const { error } = await supabase.from("menus").insert(transform);
    if (error) {
      console.error("Error inserting data to Supabase:", error.message);
    } else {
      console.log("Data successfully inserted into Supabase");
    }
  };

  const getMenu = async () => {
    const { data } = await supabase.from("menus").select();
    if (data) {
      const getItems: MenuItem[] = data.map((item) =>
        transformKeysToCamelCase(item)
      );

      setMenus([...menus, ...getItems]);
    }
  };

  const updateMenu = async () => {};

  return { menus, setMenus, addMenu, getMenu };
};

export const defaultMenuProvider = {
  menus: [] as MenuItem[],
  setMenus: () => null,
  addMenu: () => Promise.resolve(),
  updateMenu: () => Promise.resolve(),
  getMenu: () => Promise.resolve(),
};
export default useMenu;
