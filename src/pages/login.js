import {
  Loading3QuartersOutlined,
  LockOutlined,
  RedoOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Spin } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl: router.query.callbackUrl ?? "/dashboard",
    });
  };

  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center">
      <div className="bg-white sm:w-[600px] h-[500px] m-auto p-5">
        <img className="block m-auto" src="/logo.jpg" />
        <div className="w-6/12 m-auto my-5">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email or Phone"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <div className=" flex justify-between gap-5">
              <div>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </div>

              <div>
                <Link
                  href={"/asdf"}
                  className="bg-red-400 text-white px-2 rounded hover:text-black"
                >
                  Forgot password{" "}
                </Link>
              </div>
            </div>
            <br />
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button px-5"
              >
                {isLoading ? (
                  <Spin
                    className="px-2"
                    indicator={
                      <RedoOutlined
                        style={{
                          fontSize: 20,
                          color: "white",
                          fontWeight: "bolder",
                        }}
                        spin
                        fullscreen
                      />
                    }
                  />
                ) : (
                  "Log in"
                )}
              </Button>
              <br />
              Or{" "}
              <Link className="text-blue-600" href="/register">
                register now!
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
