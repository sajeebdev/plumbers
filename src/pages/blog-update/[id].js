import Layout from "@/components/shared/dashboard/layout";
import React, { useEffect, useRef, useState } from "react";
import categories from "../../../public/category.json";
import { Editor } from "@tinymce/tinymce-react";
import Swal from "sweetalert2";
import { Modal, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { useRouter } from "next/router";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const AddBlog = () => {
  const router = useRouter();
  const editorRef = useRef(null);
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [descs, setDesc] = useState(null);
  const log = () => {
    if (editorRef.current) {
      setDesc(editorRef.current.getContent());
    }
  };
  const [blog, setBlog] = useState({});

  useEffect(() => {
    if (!router?.query?.id) {
      return;
    }
    const apiUrl = `http://localhost:5000/api/blogs/${router?.query?.id}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setBlog(response?.data?.blog);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [router?.query]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const title = e.target.title.value ?? blog?.title;
    const category = e.target.category.value ?? blog?.category;
    const permalink = e.target.permalink.value ?? blog.permalink;
    const desc = descs ?? blog.desc;
    const image = fileList?.[0]?.originFileObj ? "" : blog?.image;

    const data = { title, category, permalink, desc, image };

    if (fileList?.[0]?.originFileObj) {
      const formData = new FormData();
      formData.append("images", fileList?.[0]?.originFileObj);

      await fetch("http://localhost:5000/api/image/upload-file", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          data.image = result.payload.url;
        });
    }

    try {
      await axios
        .patch(`http://localhost:5000/api/blogs/${router?.query?.id}`, data)
        .then((res) =>
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          })
        );
      setLoading(false);
      setTimeout(() => {
        router.push("/dashboard/blog-list");
      }, 1500);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div>
      <Layout>
        <div className="p-5 bg-white">
          <h1 className="text-2xl font-bold">Update Blog</h1>
          <hr className="my-2" />
          <Upload
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            className="w-[500px]"
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
          <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <img
              alt="example"
              style={{
                width: "100%",
              }}
              src={previewImage}
            />
          </Modal>
          <form onSubmit={handleSubmit}>
            <label>
              Title : <br />
              <input
                placeholder="Title"
                name="title"
                className="p-1 w-full bg-gray-100"
                defaultValue={blog?.title}
              />
            </label>
            <br /> <br />
            <label className="">
              Category : <br />
              <select name="category" className="p-1 w-full bg-gray-100">
                <option value={blog?.category}>{blog?.category}</option>
                {categories?.map((a) => (
                  <option key={a?.id} value={a?.name}>
                    {a.name}
                  </option>
                ))}
              </select>
            </label>
            <br /> <br />
            <label>
              Permalink : <br />
              <input
                placeholder="Permalink"
                name="permalink"
                className="p-1 w-full bg-gray-100"
                defaultValue={blog?.permalink}
              />
            </label>
            <br /> <br />
            <label>
              Description : <br />
              <Editor
                onBlur={log}
                apiKey="85y33d08bi5k84w3nxa07aq607ko8v165dau2joyygooce9j"
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue={blog?.desc}
                init={{
                  height: 350,
                  menubar: false,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                  ],
                  toolbar:
                    "insertfile image media pageembed template link anchor codesample | bold italic forecolor | alignleft aligncenter " +
                    "undo redo | blocks | " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  image_caption: true,
                  image_advtab: true,
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px ;  }",
                  relative_urls: true,
                }}
              />
            </label>
            <br /> <br />
            <button
              className="bg-red-500 px-10 py-1 rounded text-white"
              type="submit"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default AddBlog;
