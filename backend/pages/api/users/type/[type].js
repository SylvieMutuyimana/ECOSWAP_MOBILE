//users/[type].js
import dbConnect from "../../../../utils/dbConnect";
import User from "../../../../models/users";

dbConnect();

export default async function handler(req, res) {
  const {
    query: { type },
    method,
  } = req;

  if (method === "GET") {
    try {
      const users = await User.find({ type }).sort({ doneOn: -1 });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
