import React, { useContext } from "react";
import { UserContext } from "../../UserContext/userContext";
import BlogCard from "../Blogs/miniComponent/BlogCard";
import "./BlogPage.css";
import CreateBlogButton from "./CreateBlogButton";

const BlogPage = () => {
  const { blogs } = useContext(UserContext);

  return (
    <div className="bg-gray-100 mt-10 pt-10">
      <CreateBlogButton />
      <div className="container mx-auto mt-8 mb-10">
        <div className=" px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
