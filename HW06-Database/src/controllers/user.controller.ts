import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";

type createUserBody = {
  email: string;
  firstName: string;
  lastName: string;
};

const createUser = async (c: Context) => {
  try {
    const body = await c.req.json<createUserBody>();
    if (!body.email || !body.firstName || !body.lastName) {
      return c.json({ success: false, msg: "Missing required fields" }, 400);
    }
    if (await userModel.isDuplicate(body.email)) {
      return c.json({ success: false, msg: "User already exists" }, 409);
    }
    const user = await userModel.createUser(body.email, body.firstName, body.lastName);
    return c.json({ success: true, data: user });
  } catch (e) {
    return c.json({ success: false, msg: `${e}` }, 500);
  }
};

const getAllUsers = async (c: Context) => {
  try {
    const users = await userModel.getAllUsers();
    return c.json({ success: true, data: users });
  } catch (e) {
    return c.json({ success: false, msg: `${e}` }, 500);
  }
};

const updateUserName = async (c: Context) => {
  try {
    const id = parseInt(c.req.param("id"));
    const body = await c.req.json<{ firstName: string; lastName: string }>();
    const updated = await userModel.updateUserName(id, body.firstName, body.lastName);
    return c.json({ success: true, data: updated });
  } catch (e) {
    return c.json({ success: false, msg: `${e}` }, 500);
  }
};

export { createUser, getAllUsers, updateUserName };