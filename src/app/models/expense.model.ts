export interface Expense {
  id: string;
  user_id: string;
  name: string;
  color: string;
  is_deleted: boolean;
  updated_at: number;
  archived_at: number;
  created_at: number;
}
