import { Request, Response } from "express";
import BlogPostModel from "../models/BlogPost";

const createBlogPost = async (req: Request, res: Response) => {
  try {
    const { title, content, author } = req.body;

    const newBlogPost = new BlogPostModel({ title, content, author });
    await newBlogPost.save();

    res.status(201).json({ message: "Blog post created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllBlogPosts = async (_req: Request, res: Response) => {
  try {
    const blogPosts = await BlogPostModel.find();

    res.status(200).json(blogPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { createBlogPost, getAllBlogPosts };
