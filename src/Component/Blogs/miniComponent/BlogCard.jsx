import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-md ">
      <img
        className="w-full h-40 object-cover object-center rounded-t-lg"
        src={blog?.coverImage}
        alt={blog.title}
      />
      <div className="p-6">
        <h2 className="text-lg font-semibold">{blog.title}</h2>
        <p className="text-gray-600 mt-2">{blog.excerpt}</p>
        <Link
          to={`/blog/${blog._id}`}
          className="text-indigo-500 mt-4 inline-block"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
