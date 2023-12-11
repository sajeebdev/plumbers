import { Modal, Table, Tag } from "antd";
import React, { useState } from "react";

const FollowersTable = ({ contact, startIndex, loading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [seleceted, setSelected] = useState({});
  const showModal = (id) => {
    const seleceted = contact.find((a) => a._id == id);
    setSelected(seleceted);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Count",
      dataIndex: "index",
      key: "index",
    },

    {
      title: "Followers Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      responsive: ["md"],
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      responsive: ["md"],
    },

    {
      title: "Action",
      dataIndex: "key",
      key: "key",
      render: (key) => (
        <button
          className="text-white rounded bg-orange-600 px-2 py-1 "
          onClick={() => showModal(key)}
        >
          View Details
        </button>
      ),
    },
  ];

  const data = [];
  const datr = contact?.map((a, index) =>
    data.push({
      key: `${a._id}`,
      index: `${index + startIndex}`,
      name: `${a?.name}`,
      email: `${a?.email}`,
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
        title="Contact"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <hr className="my-2" />
        <h1>
          <b>Name :</b> {seleceted?.name}{" "}
        </h1>
        <br />
        <h1>
          <b>Phone :</b> {seleceted?.phone}
        </h1>
        <br />
        <h1>
          <b>Email :</b> {seleceted?.email}{" "}
        </h1>
        <br />
        <h1>
          <b>Message :</b> <br /> {seleceted?.message}{" "}
        </h1>
      </Modal>
    </div>
  );
};

export default FollowersTable;
