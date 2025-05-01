import { db } from "../index.ts";

const createUser = async (email: string, firstName: string, lastName: string) => {
  const user = await db.user.create({
    data: {
      email,
      firstName,
      lastName,
    },
  });
  return user;
};

const isDuplicate = async (email: string) => {
  const user = await db.user.findUnique({
    where: { email },
  });
  return user !== null;
};

const getAllUsers = async () => {
  const users = await db.user.findMany();
  return users;
};

const updateUserName = async (id: number, firstName: string, lastName: string) => {
  return await db.user.update({
    where: { id },
    data: { firstName, lastName },
  });
};

export { createUser, isDuplicate, getAllUsers, updateUserName };