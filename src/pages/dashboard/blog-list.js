import Layout from "@/components/shared/dashboard/layout";
import BlogsList from "@/components/tables/blogs";
import { Pagination } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import categories from "../../../public/category.json";

const BlogList = () => {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [startIndex, setStartIndex] = useState(1);
  const [current, setCurrent] = useState(1);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [cat, setCat] = useState("");

  useEffect(() => {
    setLoading(true);
    const apiUrl = `http://localhost:5000/api/blogs?page=${current}&cat=${cat}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setOrders(response?.data?.blogs);
        setTotal(response?.data?.total);
        setStartIndex(response?.data?.startIndex);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [current, cat, reload]);

  const onChange = (page) => {
    setCurrent(page);
  };
  const onselct = (e) => {
    setCat(e);
  };

  return (
    <div>
      <Layout>
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Blog List</h1>
          <select
            className="p-1 border rounded"
            onChange={(e) => onselct(e.target.value)}
          >
            <option value={""}>--Select Category--</option>
            {categories.map((a) => (
              <option key={a?.id} value={a?.name}>
                {a?.name}
              </option>
            ))}
          </select>
        </div>
        <BlogsList
          blogs={orders}
          loading={loading}
          startIndex={startIndex}
          reload={reload}
          setReload={setReload}
        />
        <br />
        <Pagination
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} items`
          }
          current={current}
          pageSize={10}
          total={total}
          onChange={onChange}
        />
      </Layout>
    </div>
  );
};

export default BlogList;
