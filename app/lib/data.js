import { Pendataan, User } from "./models";
import { connectToDB } from "./utils";

export const fecthUser = async (search, pages) => {
  const regex = new RegExp(search, "i");

  const itemsPerpages = 10;

  try {
    connectToDB();
    const count = await User.find({ casedata: { $regex: regex } }).countDocuments();
    const users = await User.find({ casedata: { $regex: regex } })
      .sort({ isAdmin: -1, casedata: 1 })
      .limit(itemsPerpages)
      .skip(itemsPerpages * (pages - 1));
    return { users, count };
  } catch (err) {
    console.log(err);
    throw new Error("Gagal untuk fetch users!");
  }
};

export const fecthPendataan = async (search, pages) => {
  const regex = new RegExp(search, "i");

  const itemsPerpages = 10;

  try {
    connectToDB();
    const count = await Pendataan.find({ casedata: { $regex: regex } }).countDocuments();
    const pendataan = await Pendataan.find({ casedata: { $regex: regex } })
      .sort({ date: -1 })
      .limit(itemsPerpages)
      .skip(itemsPerpages * (pages - 1));

      console.log("Data fetched from DB:", pendataan);

    return { pendataan, count };
  } catch (err) {
    console.log(err);
    throw new Error("Gagal untuk fetch data!");
  }
};
