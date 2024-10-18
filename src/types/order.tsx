// menu data
export type MenuItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};
// local type
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

//from supabase type
export type Order = {
  id: string;
  createdAt: string;
  tableNo: string;
  menuId: string;
  status: string;
  doneAt?: string;
  amount: number;
};
