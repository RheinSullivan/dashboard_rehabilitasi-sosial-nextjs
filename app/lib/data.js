import { User } from "./models";
import { connectToDB } from "./utils";

export const fecthUser = async (search, pages) => {
  const regex = new RegExp(search, "i");

  const itemsPerpages = 5;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).countDocuments();
    const users = await User.find({ username: { $regex: regex } })
      .sort({ isAdmin: -1, username: 1 })
      .limit(itemsPerpages)
      .skip(itemsPerpages * (pages - 1));
    return { users, count };
  } catch (err) {
    console.log(err);
    throw new Error("Gagal untuk fetch users!");
  }
};
