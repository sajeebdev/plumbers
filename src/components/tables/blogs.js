import { Modal, Table, Tag } from "antd";
import React, { useState } from "react";
import style from "./table.module.css";
import Link from "next/link";
import Swal from "sweetalert2";
import axios from "axios";

const BlogsList = ({ blogs, startIndex, loading, setReload, reload }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [seleceted, setSelected] = useState({});

  const showModal = (id) => {
    const seleceted = blogs.find((a) => a._id == id);
    setSelected(seleceted);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onDelete = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await axios.delete(
            `http://localhost:5000/api/blogs/${id}`
          );

          setReload(!reload);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const columns = [
    {
      title: "Count",
      dataIndex: "index",
      key: "index",
    },

    {
      title: "Title",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Category",
      dataIndex: "email",
      key: "email",
      responsive: ["md"],
    },
    {
      title: "Action",
      dataIndex: "key",
      key: "key",
      render: (key) => (
        <div className="flex gap-3">
          <button
            className="text-white rounded bg-green-600 px-2 py-1 "
            onClick={() => showModal(key)}
          >
            View Details
          </button>
          <Link
            href={`/blog-update/${key}`}
            className="text-white rounded bg-blue-500 px-2 py-1 "
          >
            Edit
          </Link>
          <button
            className="text-white rounded bg-orange-600 px-2 py-1 "
            onClick={() => onDelete(key)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const data = [];
  const datr = blogs?.map((a, index) =>
    data.push({
      key: `${a._id}`,
      index: `${index + startIndex}`,
      name: `${a?.title}`,
      email: `${a?.category}`,
      phone: `${a?.phone ?? "Empty"}`,
    })
  );

  return (
    <div>
      <Table
        columns={columns}
        pagination={false}
        dataSource={data}
        loading={loading}
      />

      <Modal
        title="Blog"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <hr className="my-2" />
        <img className="w-6/12 block m-auto" src={seleceted?.image} />
        <h1 className="text-xl">
          <b>Name :</b> {seleceted?.title}{" "}
        </h1>
        <br />
        <h1 className="text-xl">
          <b>Category :</b> {seleceted?.category}
        </h1>
        <br />
        <h1 className="text-xl">
          <b>Permalink :</b> {seleceted?.permalink}{" "}
        </h1>
        <br />
        <h1>
          <b className="text-xl">Description :</b> <br /> <br />
          <div className={style.desc}>
            <div
              className="mb-5 text-sm sm:text-lg"
              dangerouslySetInnerHTML={{
                __html: seleceted?.desc,
              }}
            ></div>
          </div>
        </h1>
      </Modal>
    </div>
  );
};

export default BlogsList;
