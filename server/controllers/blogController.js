import express from "express";
import blogModel from "../models/blogModel.js"
import categoryModel from "../models/categoryModel.js";
// import

class blogController {
  static getAllBlogs = async (req, res) => {
    try {
      const fetchAllBlogs = await blogModel.find({user: req.user._id});
      if(fetchAllBlogs){
        return res.status(200).json(fetchAllBlogs)
      } 
    } catch (error) {
      return res.status(400).json({message: error.message})
    }
  };
  static addNewBlog = async(req, res)=>{
    const {title, category, description} = req.body;
    try {
      if(title, category, description){
        const addBlog = new blogModel({
          title: title,
          description: description,
          category: category,
          thumbnail: req.file.filename,
          user: req.user._id
        })

        const savedBlog = await addBlog.save();
        if(savedBlog){
          return res.status(200).json({message: "Blog Succeddfully added"})
        }
        else{
          return res.status(400).json({message: "Blog not saved"})
        }
      }
      else{
        return res.status(400).json({message: "All Fields are required"})
      }
    } catch (error) {
      return res.status(400).json({message: error.message})
    }
  };
  static getSingleBlog = async(req, res)=>{
    const{id} = req.params;
    try {
      if(id){
        const fetchBlogsByUserID = await blogModel.findById(id);
        if(fetchBlogsByUserID){
          return res.status(200).json(fetchBlogsByUserID)
        }
        else{
          return res.status(400).json({message: "Blog not found"})
        }
      }
      else{
        return res.status(400).json({message: "Invalid URL"})
      }
    } catch (error) {
      return res.status(400).json({message: error.message})
    }
  };
}
export default blogController;
