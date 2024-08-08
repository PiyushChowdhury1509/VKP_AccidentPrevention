import mongoose from "mongoose";

const volunteerSchema=new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
},{timestamps: true})

const Volunteer=mongoose.models.volunteer || mongoose.model("volunteer",volunteerSchema);

export default Volunteer;