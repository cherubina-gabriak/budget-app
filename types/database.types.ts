export type Income = { name: string; category_id: string; user_id?: string };
export type Budget = {
  category_id: string;
  comment: string;
  year: number;
  month: number;
  base_amount: number;
};
export type Category = {
  category_id: string;
  name: string;
};
