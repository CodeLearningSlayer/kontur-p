/*
import { db } from '../../../main/main';

export async function checkIfUserNew(name: string) {
  const sql = 'select count(*) from users where name = ?';
  const params = [name];
  const result = await db.get(sql, params);
  return result < 1
}

export async function insertUser(name: string, course: number, troop: number) {
  const sql = 'insert into users(name, course, troop) values (?, ?, ?)';
  const params = [name, course, troop];
  db.run(sql, params);
}
*/
