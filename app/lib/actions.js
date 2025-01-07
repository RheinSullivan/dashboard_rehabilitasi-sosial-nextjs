"use server";
import { revalidatePath } from "next/cache";
import { User, Pendataan } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

  try {
    connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Gagal untuk menambahkan user!");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addPendataan = async (formData) => {
  const { img, casedata, reporter, address, date, status } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newPendataan = new Pendataan({
      img,
      casedata,
      reporter,
      address,
      date,
      status,
    });

    await newPendataan.save();
  } catch (err) {
    console.log(err);
    throw new Error("Gagal untuk menambahkan data!");
  }
  revalidatePath("/dashboard/pendataan");
  redirect("/dashboard/pendataan");
};

export const deletePendataan = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Pendataan.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Gagal untuk menghapus data!");
  }
  revalidatePath("/dashboard/pendataan");
};
