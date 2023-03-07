import mongoose from "mongoose";

const catetorySchema = new mongoose.Schema({
  title: {
    type: String
  },
});

const categoryModel = mongoose.model("categories", catetorySchema);

export default categoryModel