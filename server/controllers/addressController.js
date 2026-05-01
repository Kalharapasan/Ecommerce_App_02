import Address from "../models/Address.js";

// Add Address for user [POST '/add']
export const addAddress = async (req, res)=>{
  try {
    const {address} = req.body
    const {userId} = req.auth()
    await Address.create({...address, userId})
    res.json({success:true, message: "Address created successfully"})
  } catch (error) {
    console.log(error.message)
    res.json({success:false, message: error.message})
  }
}