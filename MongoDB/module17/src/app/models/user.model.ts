import { Model, model, Schema } from "mongoose";
import {
  IAddress,
  IUser,
  UserInstanceMethods,
  UserStaticsMethod,
} from "../interfaces/user.interface";
import bcrypt from "bcryptjs";
import { Note } from "./notes.model";
const addressSchema = new Schema<IAddress>(
  {
    street: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: Number, required: true },
  },
  { _id: false }
);
const userSchema = new Schema<IUser, UserStaticsMethod, UserInstanceMethods>(
  {
    firstName: {
      type: String,
      required: [true, "firstName is required"],
      trim: true,
      minlength: [
        6,
        "firstName should be at least 6 characters long,got value {VALUE}",
      ],
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: [
        20,
        "lastName should be at least 6 characters long,got value {VALUE}",
      ],
    },
    age: { type: Number, required: true, min: 18, max: 60 },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: function (props) {
          return props.value + " is not a valid email";
        },
      },
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      uppercase: true,
      enum: {
        values: ["USER", "ADMIN"],
        message: "Invalid role",
      },
      default: "USER",
    },
    address: { type: addressSchema },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.method("hashPassword", async function (plainPassword: string) {
  const password = await bcrypt.hash(plainPassword, 10);
  return password;
});
userSchema.static("hashPassword", async function (plainPassword: string) {
  const password = await bcrypt.hash(plainPassword, 10);
  return password;
});
//document middleware
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
//query middleware
userSchema.post("save", async function (doc, next) {
  console.log("%s is saved", doc._id);
  next();
});
//document middleware
userSchema.pre("find", function (next, doc) {
  next();
  console.log(doc);
});
//query middleware
userSchema.post("findOneAndDelete", async function (doc, next) {
  if (doc) {
    await Note.deleteMany({ userId: doc._id });
  }
  next();
});

userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

export const User = model<IUser, UserStaticsMethod>("User", userSchema);
