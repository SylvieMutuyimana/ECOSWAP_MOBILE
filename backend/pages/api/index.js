//Index.js

import dbConnect from "../../utils/dbConnect";
dbConnect();
export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            res.status(200).json('Connection successful');
        } catch (error) {
            res.status(500).json({ message: 'Error connecting to dataset'});
        }
    }else {
        res.status(405).json({ message: "Error connesction to database" });
    }
}
