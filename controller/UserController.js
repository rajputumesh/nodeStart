const User = require('../models/User');

const userGet = async (req, res) =>{
    var id = req.query.id;
    try {
        const detials = await User.findById(id);
        res.status(200).json({data:detials, message:"Profile fetched successfully", success:true});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
const userStore = async (req, res) =>{
    console.log(req.body);
    const myData = new User(req.body);
    try {
        const details = await myData.save();
        res.status(200).json({data:details, message:"registered successfully", success:true});
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
}

const userUpdate = async (req, res) =>{
    var id = req.query.user_id;
    await User.findByIdAndUpdate(id, req.body);
    try {
            const detials = await User.findById(id);
            res.status(200).json({data:detials, message:"Profile updated successfully", success:true});
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
}

const userDelete = async (req, res) =>{
    var id = req.query.id;
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({message:"Profile deleted successfully", success:true});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const userSearch = async (req, res) => {
    const key = req.query.key;
    console.log(key);
    try {
        let result = await User.find({
            "$and": [
                {
                    name: { $regex: key }  
                },
                {
                    eamil: { $regex: key }
                }
            ]
        });
        res.status(200).json({data:result, message:"Users fetched successfully", success:true});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {userGet, userStore, userUpdate, userDelete, userSearch};