"use server";

import createConnection from "@/db";
import Blog from "@/schema/blog.model.js";

export const postBlog = async (data) => {
  try {
    await createConnection();

    const newBlog = await Blog.create(data);

    if (newBlog) {
      return {
        status: "success",
        message: "Blog created successfully",
      };
    } else {
      return {
        status: "error",
        message: "Blog creation failed",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: "Blog creation failed",
    };
  }
};
