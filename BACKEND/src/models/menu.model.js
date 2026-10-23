const mongosse =require('mongoose');

const menuschema = new mongoose.Schema
({
    name:
    {
        type:String,
        required:true,
    },
    price:
    {
        type:Number,
        required:true,
    },
     category:
    {
      type: String,
      required: true,
    },

})

const menumodel =mongoose.model("Menu",menuschema);

module.exports=menumodel;