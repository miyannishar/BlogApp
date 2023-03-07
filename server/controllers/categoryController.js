import categoryModel from "../models/categoryModel.js"


class categoryController{
    static getAllCategories = async(req, res)=>{
       
        try {
            const fetchAllCategories = await categoryModel.find({});
            return res.status(200).json(fetchAllCategories)
        } catch (error) {
            return res.status(400).json({message: error.message})
        }

    }
    static addNewCategory = async(req, res)=>{
        
        const {title} = req.body;
        try {
            if(title){
                const isTitle = await(categoryModel.findOne({title}));
                if(!isTitle){
                    const newCategory = categoryModel({
                        title: title
                    })
                    const savedCategory = await newCategory.save()
                    if(savedCategory){
                        return res.status(200).json({message: "Category successfully registered"})
                    }
                    else{
                        return res.status(400).json({message: "Unexpected Error: Category not registered."})
                    }
                }
                else{
                    return res.status(400).json({message: "The title is already registered."})
                }
            }
            else{
                return res.status(400).json({message: "This field is required."})
            }
        } catch (error) {
            return res.status(400).json({message: error.message})
        }


    }
}

export default categoryController