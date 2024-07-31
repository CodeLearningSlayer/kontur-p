import path from 'path';
import { db } from '../../../main/main';

export async function checkIfUserNew(name: string) {
  const sql = 'select count(*) from users where name = ?';
  const params = [name];
  const result = await db.get(sql, params);
  return result > 0
}
