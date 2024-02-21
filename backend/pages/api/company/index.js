// Company.js
import dbConnect from "../../../utils/dbConnect";
import Company from "../../../models/company";

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;
  const fields = ['name', 'email', 'social'];
  const existingCompany = await Company.findOne();

  switch (method) {
    case "GET":
      try {
        res.status(200).json(existingCompany);
      } catch (error) {
        res.status(500).json({ message: "Error fetching company details", error: error.message });
      }
      break;
    case "POST":
      if (existingCompany) {
        return res.status(500).json({ message: "Company exist" });
      } else {
        try {
          const company_data = {}
          company_data['doneOn'] = new Date();
          fields.forEach(field => company_data[field] = body[field]);
          const savedCompany = new Company(company_data);
          await savedCompany.save()
          res.status(201).json(savedCompany);
        } catch (error) {
          return res.status(500).json({ message: "Error creating company", error: error.message });
        }
      }
      break;
// PUT case in Company.js
case "PUT":
  try {
    if (!existingCompany) {
      return res.status(404).json({ message: "Company not found" });
    }

    const updatedCompanyData = { ...existingCompany._doc };

    fields.forEach((field) => {
      if (body[field] !== undefined) {
        if (field === 'social') {
          // Iterate through each social platform in the request body
          Object.keys(body['social']).forEach((socialPlatform) => {
            if (existingCompany['social'][socialPlatform]) {
              // Update existing social platform
              updatedCompanyData['social'][socialPlatform] = {
                ...existingCompany['social'][socialPlatform],
                ...body['social'][socialPlatform],
              };
            } else {
              // Add new social platform
              updatedCompanyData['social'][socialPlatform] = body['social'][socialPlatform];
            }
          });
        } else {
          updatedCompanyData[field] = body[field];
        }
      }
    });

    const updatedCompany = await Company.findByIdAndUpdate(
      existingCompany._id,
      { $set: updatedCompanyData },
      { new: true }
    );

    res.status(200).json({ message: "Company updated successfully", updatedCompany });
  } catch (error) {
    res.status(500).json({ message: "Error updating company", error: error.message });
  }
  break;


case "DELETE":
  if (!body) {
    try {
      // Delete all companies
      await Company.deleteMany({});
      res.status(200).json({ message: "All companies deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting all companies", error: error.message });
    }
  } else {
    try {
      const deletedFields = {};
      if (body.fields && Array.isArray(body.fields)) {
        body.fields.forEach((field) => {
          deletedFields[field] = '';
        });
      }
      if (body.social && Array.isArray(body.social)) {
        body.social.forEach((socialField) => {
          // Check if the social field exists before unsetting
          if (existingCompany['social'][socialField]) {
            deletedFields[`social.${socialField}`] = '';
          }
        });
      }
      // Update the company by unsetting specified fields
      const updatedCompany = await Company.findByIdAndUpdate(
        existingCompany._id,
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
      return res.status(405).json({ message: `Method ${method} not allowed` });
  }
}
