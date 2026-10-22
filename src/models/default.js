const mongoose =require ('mongoose')

const schema =new mongoose.Schema({
    name:{
        type :String,
        required :[true ,'Name Is Required'],
    },
    order : {
        type : Number,
        min : [1 , 'Minimum Value Must Be Greater then 1'],
        max : [1000,'Max Value Has to Be less Then Or Equal to 1000'],
        default : 1
    },
    status:{
        type : Boolean,
        default : 1
    }
})