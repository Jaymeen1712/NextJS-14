"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export const handleCreateSnippet = async (formState: {message: string}, formData: FormData) => {
  const title = formData.get("title");
  const code = formData.get("code");

  if(typeof title !== "string" || title.length < 3) {
    return {
      message: "Title must be longer than 3 characters"
    }
  }

  if(typeof code !== "string" || code.length < 3) {
    return {
      message: "code must be longer than 3 characters"
    }
  }

  await db.snippet.create({
    data: { title, code },
  });

  redirect("/");
};