const mongoose=require('mongoose')
mongoose.set('strictQuery',false)

const connectDB= async()=>{
      try{
         const conn=await mongoose.connect(process.env.MONGODB_URL)
         console.log(`Databse connected ${conn.Connection.host}`)
      }

      catch(error){
        console.log(error)
      }
}


module.exports=connectDB













/*when strict option is set to true , 
Mongoose will ensure that only the fields that are specified in your Schema will be saved in the database,
 and all other fields will not be saved (if some other fields are sent). In simple term, the strict option,
 ensures that values passed to our model constructor that were not specified in our schema do not get saved to the db.
  Mongoose supports a separate strictQuery option to avoid strict mode for query filters. 
  This is because empty query filters cause Mongoose to return all documents in the model, 
which can cause issues.*/