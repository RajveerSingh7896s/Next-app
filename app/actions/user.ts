"use server"
import client from "@/lib/prisma";

export async function signup(username: string, password: string) {
  //store in db
  try {
    await client.user.create({
      data: {
        username,
        password,
      },
    });
    return true;
  } catch (e) {
    return false;
  }
}
