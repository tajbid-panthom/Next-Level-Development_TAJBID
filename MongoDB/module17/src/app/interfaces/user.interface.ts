import { Model } from "mongoose";

export interface IAddress {
  street: string;
  city: string;
  zip: number;
}
export interface IUser {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  role: "USER" | "ADMIN";
  address: IAddress;
}

export interface UserInstanceMethods {
  hashPassword(password: string): string;
}

export interface UserStaticsMethod extends Model<IUser> {
  hashPassword(password: string): string;
}
