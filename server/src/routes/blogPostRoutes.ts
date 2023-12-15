import express from "express";
import { createBlogPost, deleteBlogPost, getAllBlogPosts } from "../controllers/BlogPostController";
import authMiddleware from "../utils/authMiddleware";

const router = express.Router();

router.post("/create", authMiddleware, createBlogPost);
router.get("/all", getAllBlogPosts);
router.delete("/:id/delete", authMiddleware, deleteBlogPost);

export default router;
