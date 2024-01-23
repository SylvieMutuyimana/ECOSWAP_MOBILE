import Items from "../../../models/items";
import dbConnect from "../../../utils/dbConnect";
import get_item from "../get_item";
import put_delete from "../put_delete";

dbConnect();

export default async function handler(req, res) {
  const { method, query: { id } } = req;
  const fields = ['name','image','category','amount','seller','buyer', 'description','added_date', 'status', 'doneOn']  
  console.log("id: ", id)
  
  if (method === "GET") {
    get_item('items', Items, id, res)
  }  else{
    put_delete('items', Items, fields, req, res);
  } 
}