// Company.js
import dbConnect from "../../../utils/dbConnect";
import Company from "../../../models/company";

dbConnect();

export default async function handler(req, res) {
  const fields = ['name', 'email', 'social', 'doneOn'];
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const companies = await Company.find();
        res.status(200).json(companies);
      } catch (error) {
        res.status(500).json({ message: "Error fetching company details", error: error.message });
      }
      break;
    case "POST":
      try {
        const newCompanyData = {};
        fields.map(field=>{
          if(body[field]){
            newCompanyData[field]=body[field]
          }
        })
        const newCompany = new Company(newCompanyData);
        await newCompany.save();
        res.status(201).json({ message: "Company created successfully", newCompany });
      } catch (error) {
        res.status(500).json({ message: "Error creating company", error: error.message });
      }
      break;
    case "PUT":
        try {
          const updatedCompanyData = {};
          fields.forEach((field) => {
            if (body[field] !== undefined) {
              if (field === 'social') {
                Object.keys(body['social']).map(item=>{
                  if(body['social'][item]){
                    updatedCompanyData['social'][item] = body['social'][item]
                  }
                })
              } else {
                updatedCompanyData[field] = body[field];
              }
            }
          });
          const updatedCompany = await Company.findOneAndUpdate(
            { _id: body._id },
            { $set: updatedCompanyData },
            { new: true }
          );
      
          res.status(200).json({ message: "Company updated successfully", updatedCompany });
        } catch (error) {
          res.status(500).json({ message: "Error updating company", error: error.message });
        }
        break;
    case "DELETE":
      if(!body){
        try {
          await Company.deleteMany({});
          res.status(200).json({ message: "All companies deleted successfully" });
        } catch (error) {
          res.status(500).json({ message: "Error deleting all companies", error: error.message });
        }      
      }else{
        try {
          const deletedFields = {};
          fields.forEach((field) => {
            if (body[field] !== undefined) {
              if (field === 'social') {
                deletedFields['social'] = {};
                Object.keys(body['social']).forEach((socialField) => {
                  deletedFields['social'][socialField] = '';
                });
              } else {
                deletedFields[field] = '';
              }
            }
          });
          const updatedCompany = await Company.findOneAndUpdate(
            { _id: body._id },
            { $unset: deletedFields },
            { new: true }
          );
  
          res.status(200).json({ message: "Fields deleted successfully", updatedCompany });
        } catch (error) {
          res.status(500).json({ message: "Error deleting fields", error: error.message });
        }
      }
      break;
    default:
      res.status(405).json({ message: `Method ${method} not allowed` });
      break;
  }
}
