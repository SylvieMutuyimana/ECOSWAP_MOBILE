import dbConnect from "../../utils/dbConnect";
dbConnect();

export default async function get_item(name, the_module, id, res) {
    try {
        const item = await the_module.findById(id);
        if (!item) {
            return res.status(404).json({ message: `${name} not found` });
        }else{
            return res.status(200).json({item});
        }
    } catch (error) {
        res.status(500).json({
            message: `Error fetching item ${name}`,
            error: error.message,
        });
    }
}