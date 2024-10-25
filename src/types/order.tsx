// from menu data
export type MenuItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

export type MenuItemSupabase = {
  id: string;
  createdAt: string;
  menuId: string;
  price: number;
  image: string;
  category: string;
  updatedAt: string;
  status?: string;
  productId: number;
};

// local + supabase
export type OrderTable = {
  id: string;
  createdAt: string;
  tableNo: string;
  menuId: string;
  status: string;
  doneAt?: string;
  amount: number;

  name: string;
  price: number;
  image: string;
  category: string;
};
