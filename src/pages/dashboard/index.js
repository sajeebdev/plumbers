import Layout from "@/components/shared/dashboard/layout";
import { useSession } from "next-auth/react";
import React from "react";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Layout>Dashboard</Layout>{" "}
    </div>
  );
};

export default Dashboard;
