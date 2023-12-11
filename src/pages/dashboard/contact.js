import Layout from "@/components/shared/dashboard/layout";
import FollowersTable from "@/components/tables/contacts";
import { Pagination } from "antd";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Contact = () => {
  //

  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [startIndex, setStartIndex] = useState(1);
  const [current, setCurrent] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const apiUrl = `http://localhost:5000/api/contact?page=${current}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setOrders(response?.data?.contact);
        setTotal(response?.data?.total);
        setStartIndex(response?.data?.startIndex);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [current]);

  const onChange = (page) => {
    setCurrent(page);
  };

  return (
    <div>
      <Layout>
        <FollowersTable
          contact={orders}
          loading={loading}
          startIndex={startIndex}
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

export default Contact;
