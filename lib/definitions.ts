export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
}

export type Task = {
  id: string;
  user_id: string;
  name: string;
  chore: string;
  status: 'to-do' | 'in-progress' | 'completed';
  date: string;
}