// Appointment.js
import dbConnect from "../../../utils/dbConnect";
import the_handler from "../get_post";
import Items from "../../../models/items";

dbConnect();

export default function handler(req, res) {
  const fields = ['name','image','category','amount','seller','buyer', 'description','added_date', 'status', 'doneOn']  
  the_handler('booking', Items, fields, req, res);
}
