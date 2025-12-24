import mongoose from "mongoose";

const hostelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        code: {
            type: String,          // "HMS_MAIN"
            required: true,
            unique: true,
            uppercase: true
        },

        blocks: {
            type: [String],        // ["a", "b", "c"]
            required: true,
            lowercase: true
        },

        floors_per_block: {
            type: Number,
            required: true,
            min: 1
        },

        rooms_per_floor: {
            type: Number,
            required: true,
            min: 1
        },

        is_active: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
);

const Hostel = mongoose.model("Hostel", hostelSchema);

export default Hostel;