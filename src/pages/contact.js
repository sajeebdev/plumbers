import Layout from "@/components/shared/layout/layout";
import { Input, notification } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const { TextArea } = Input;

const Contact = () => {
  const [loading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;
    const data = { name, email, phone, message };

    const response = await axios.post(
      "http://localhost:5000/api/contact",
      data
    );
    console.log(response);
    if (response.data.status == "success") {
      notification.success({
        message: `Message Sent`,
        placement: "topRight",
        icon: (
          <FaCheckCircle
            style={{
              color: "#15cd15",
            }}
          />
        ),
      });
    }

    setTimeout(() => {
      router.reload();
    }, 1500);
  };

  return (
    <div className="bg-gray-200">
      <Layout>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="w-[800px] m-auto bg-white rounded shadow-lg">
          <br />
          <h1 className="text-center text-3xl">Contact Us</h1>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Your Name"
              className="w-8/12 block m-auto py-3"
              name="name"
            />
            <br />
            <Input
              placeholder="Your Email"
              className="w-8/12 block py-3 m-auto"
              type="email"
              name="email"
            />
            <br />
            <Input
              placeholder="Your Phone"
              className="w-8/12 py-3 block m-auto"
              type="number"
              name="phone"
            />
            <br />
            <TextArea
              placeholder="Your Message"
              rows={4}
              className="w-8/12 h-[350px] block m-auto"
              name="message"
            />
            <br />
            <button
              type="submit"
              className="bg-red-500 text-white font-bold block m-auto text-xl px-10 py-2"
            >
              {loading ? "Submitting.." : "Submit"}
            </button>
          </form>
          <br />
          <p className="text-center">-- Or --</p>
          <br />
          <button className="bg-green-500 rounded text-white font-bold block m-auto text-xl px-10 py-2">
            Call Now
          </button>
          <br />
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
