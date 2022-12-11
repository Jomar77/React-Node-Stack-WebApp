import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "Pisay_2021",
  database:"test"
})