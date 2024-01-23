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
        const company_data = await Company.find()
        res.status(200).json(company_data);
        //res.status(200).json(company_data[0]);
      } catch (error) {
        res.status(500).json({ message: "Error fetching company details", error: error.message });
      }
      break;
    case "POST":
      try {
        const existingCompany = await Company.findOne();
        if (existingCompany) {
          return res.status(500).json({ message: "Company exist" });
        } else {
          const newCompanyData = {};
          fields.forEach((field) => {
            if (body[field]) {
              console.log(field, ': ', body[field])
              newCompanyData[field] = body[field];
            }
          });
          newCompanyData['doneOn'] = new Date();
          console.log('data: ', newCompanyData)
          const newCompany = new Company(newCompanyData);
          console.log('newCompany: ', newCompany)
          await newCompany.save();
          return res.status(201).json({ message: "Company created successfully", newCompany });
        }
      } catch (error) {
        return res.status(500).json({ message: "Error creating/updating company", error: error.message });
      }
    case "DELETE":
      try {
        await Company.deleteMany({});
        return res.status(200).json({ message: "All companies deleted successfully" });
      } catch (error) {
        return res.status(500).json({ message: "Error deleting all companies", error: error.message });
      }
    default:
      return res.status(405).json({ message: `Method ${method} not allowed` });
  }
}
