import mogoose from "mongoose";

const booSchema=new mogoose.Schema({
    title:{type:String,required:true},
    price:{type:Number,default:0},
    date_publication:{type:Date,default:Date.now},
    author:{type:String,required:true},
    orders:[{
        type:mogoose.Types.ObjectId,
        ref:"Order"
    }]
});

const BookModel=mogoose.model("Book",booSchema);

export default BookModel;
