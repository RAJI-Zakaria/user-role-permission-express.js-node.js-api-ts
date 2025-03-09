import db from "../db";

const { dbModels } = db;
const { user: MUser } = dbModels;

// get all users
const readUsers = async () => {
  try {
    const users = await MUser.findAll();
    return users;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const readUser = async (id: number) => {
  try {
    const user = await MUser.findByPk(id);
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const createUser = async (data: any) => {
  try {
    const user = await MUser.create(data);
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const updateUser = async (id: number, data: any) => {
  try {
    const user = await MUser.update(data, {
      where: {
        id,
      },
    });
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const removeUser = async (id: number) => {
  try {
    const user = await MUser.destroy({
      where: {
        id,
      },
    });
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default {
  readUser,
  readUsers,
  createUser,
  updateUser,
  removeUser,
};
