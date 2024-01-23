// users/[id].js
import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/users";
import put_delete from "../put_delete";
import get_item from "../get_item";

dbConnect();

export default async function handler(req, res) {
  const { method, query: { id } } = req;
  const fields = ["name", "email", "password", "phoneNumb", "firstName","lastName","password","cart","wishlist"]
  console.log("id: ", id)

  if (method === "GET") {
    get_item('user', User, id, res)
  }  else{
    put_delete('user', User, fields, req, res);
  } 
}
