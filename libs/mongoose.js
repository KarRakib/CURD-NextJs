const { default: mongoose } = require("mongoose")

const dataConnect = async()=>{
    try {
        const res = await mongoose.connect(process.env.DATABASE_URL) 
        if(!res.ok){
           
        }
        return res
    } catch (error) {
        console.log(error);
    }
}
export default dataConnect;