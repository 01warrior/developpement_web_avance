import mogoose from "mongoose";

const custumerSchema=new mogoose.Schema({
   fName:{
      type:String,
      required:true
   },
   lName:{
    type:String,
    required:true
   },
   email:{
     type:String,
     required:true
   },
   password:{
    type:String,
    required:true
   },
   adresse:{
    type:String
   },
   orders:[{
    type:mogoose.Types.ObjectId,
    ref:"Order"
   }]
});

const CustumerModel=mogoose.model("Custumer",custumerSchema);
export default CustumerModel;