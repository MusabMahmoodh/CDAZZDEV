import express from "express";
import { createBlogPost, getAllBlogPosts } from "../controllers/BlogPostController";
import authMiddleware from "../utils/authMiddleware";

const router = express.Router();

router.post("/create", authMiddleware, createBlogPost);
router.get("/all", getAllBlogPosts);

export default router;
