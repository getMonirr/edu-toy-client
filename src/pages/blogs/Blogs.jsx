import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  // dynamic title
  useTitle("| Blogs");
  return <div>blogs</div>;
};

export default Blogs;
