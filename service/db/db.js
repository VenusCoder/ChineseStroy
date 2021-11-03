const mongoose = require('mongoose'),
dbUrl='mongodb://test:123@120.24.37.75/test?authSource=admin'
mongoose.connect(dbUrl,{
    useUnifiedTopology: true, 
    useNewUrlParser: true
}).then(()=>{
    console.log("MongoDB is ready!")
}).catch((err)=>{
    console.error("Error: ", err)
})


module.exports =mongoose;

