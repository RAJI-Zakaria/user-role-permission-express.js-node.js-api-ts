import db from "../db";

const { dbModels } = db;
const { user: MUser } = dbModels;

// get all users
const getAllUsers = async () => {
  try {
    const users = await MUser.findAll();
    return users;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default { getAllUsers };
