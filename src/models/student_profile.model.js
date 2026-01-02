import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import Room from "./room.model.js";

const studentSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      index: true,
      required: true,
    },
    room_id: {
      type: Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    sid: {
      type: String,
      unique: true,
      required: true,
      minLength: 8,
      maxLength: 8,
    },
    permanent_address: {
      type: String,
      trim: true,
      required: true,
    },
    guardian_name: {
      type: String,
      trim: true
    },
    guardian_contact: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 10,
    },
    block: {
      type: String,
      index: true,
      lowercase: true,
    },
    room_number: {
      type: String,
      index: true
    },

    leaving_date: {
      type: Date,
      default: null
    },
    branch: {
      type: String,
      required: true,
      trim: true,
    },
    room_out: {
      type: Date,
    }
  },
  {
    timestamps: true
  }
);

studentSchema.index({ branch: 1, createdAt: -1 });

studentSchema.pre("save", async function () {
  const roomDetail = this
  if (roomDetail.isModified("room_id")) {
    const room = await Room.findById(this?.room_id);
    this.block = room.block;
    this.room_number = room.room_number;
  }
});


const Student = model("Student", studentSchema);
export default Student;