import { Request, Response } from "express";
import BlogPostModel from "../models/BlogPost";

const createBlogPost = async (req: Request, res: Response) => {
  try {
    const { title, content, user } = req.body;

    const newBlogPost = new BlogPostModel({ title, content, author: user });
    await newBlogPost.save();

    res.status(201).json({ message: "Blog post created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllBlogPosts = async (_req: Request, res: Response) => {
  try {
    const blogPosts = await BlogPostModel.find().populate("author", "-password");

    res.status(200).json(blogPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteBlogPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await BlogPostModel.findByIdAndDelete(id);

    res.status(200).json({ message: "Blog post deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateBlogPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedBlogPost = await BlogPostModel.findByIdAndUpdate(id, { title, content }, { new: true });

    res.status(200).json({ message: "Blog post updated successfully", updatedBlogPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getBlogPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const blogPost = await BlogPostModel.findById(id).populate("author", "-password");

    res.status(200).json(blogPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { createBlogPost, getAllBlogPosts };
