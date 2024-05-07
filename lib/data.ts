import { sql } from '@vercel/postgres';
import { User, Task } from './definitions';

export async function fetchUserTasks(userId: string, status: Task["status"]) {
  try {
    const data = await sql<Task>`
      SELECT * FROM tasks WHERE user_id=${userId} AND status=${status}
    `;

    const tasks = data.rows;
    return tasks;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all tasks.');
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}