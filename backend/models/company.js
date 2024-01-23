import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    social: {},
  },
  { timestamps: true }
);

const Company = mongoose.models.Company || mongoose.model("Company", companySchema);

export default Company;
