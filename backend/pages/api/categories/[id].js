import dbConnect from "../../../utils/dbConnect";
import put_delete from "../put_delete";
import Company from "../../../models/company";
import Categories from "../../../models/categories";

dbConnect();

export default async function handler(req, res) {
  const { method, query: { id } } = req;
  const fields = ['email', 'social']  
  console.log("id: ", id)
  
  if (method === "GET") {
    get_item('categories', Categories, id, res)
  }  else{
    put_delete('categories', Categories, fields, req, res);
  } 
}
