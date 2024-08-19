import mongoose from 'mongoose';

const AccidentSchema = new mongoose.Schema({
    location: {
        type: {
            type: String,
            enum: ['Point'], 
            required: true
        },
        coordinates: {
            type: [Number], 
            required: true
        }
    },
    timestamp: {
        type: Date,
        default: Date.now,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    media: [{
        url: {
            type: String,
            required: true
        },
        type: {
            type: String,
            enum: ['image', 'video'],
            required: true
        }
    }],
    nearestHospital: {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        contactNumber: {
            type: String,
            required: true
        }
    },
    volunteers: [{
        name: {
            type: String,
            required: true
        },
        contactNumber: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    }]
});

AccidentSchema.index({ location: '2dsphere' }); 

const Accident = mongoose.models.Accident || mongoose.model('Accident', AccidentSchema);

export default Accident;
