import mongoose, { Document, Schema } from "mongoose";

interface BlogPost extends Document {
  title: string;
  content: string;
  author: Schema.Types.ObjectId;
}

const blogPostSchema = new Schema<BlogPost>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const BlogPostModel = mongoose.model<BlogPost>("BlogPost", blogPostSchema);

export default BlogPostModel;
