import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../UserContext/userContext";
import img3 from "../../asset/Img/bandarban.jpg";

const SingleBlogPage = () => {
  const id = useParams()?.id;
  const { blogs } = useContext(UserContext);
  const [blog, setBlog] = useState({});
  useEffect(() => {
    const blog = blogs.find((blog) => blog._id === id);
    setBlog(blog);
  }, [id, blogs]);
  return (
    <div className="pt-10  mt-10">
      <div class="bg-gray-800 text-white py-4">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-4xl font-bold">Blog Details</h1>
        </div>
      </div>

      <div class="container mx-auto my-8 px-4">
        <div class="bg-white shadow-lg rounded-lg p-8">
          <h2 class="text-3xl font-bold mb-4">{blog?.title}</h2>
          <p class="text-gray-600 mb-4">
            Published on <span class="font-bold">June 13, 2023</span> by{" "}
            <span class="font-bold">
              {blog?.author && blog?.author[0]?.firstName}{" "}
              {blog?.author && blog?.author[0]?.lastName}
            </span>
          </p>
          <img src={blog?.coverImage} alt="" className="w-full mb-6 rounded-lg h-[400px]" />
          <p class="text-gray-700 leading-7 text-justify">{blog?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
