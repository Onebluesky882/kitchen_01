export type Order = {
  tableNo: string;
  menuId: string;
  status: string;
  doneAt?: string;
  amount: number;
};
export type MenuItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};
