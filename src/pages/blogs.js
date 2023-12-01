import OurBlogs from "@/components/ourblogs/ourBlogs";
import Layout from "@/components/shared/layout/layout";
import React from "react";

const Blogs = () => {
  return (
    <div className="bg-gray-200">
      <Layout>
        <OurBlogs />
      </Layout>
    </div>
  );
};

export default Blogs;
