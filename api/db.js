import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  Password:"abc123",
  database:"test"
})