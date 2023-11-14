import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/shared/layout/layout";
import Mostpopular from "@/components/compo/mostPopular/mostpopular";
import Cityarea from "@/components/compo/cityArea/cityarea";
import Statearea from "@/components/compo/stateArea/statearea";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Mostpopular></Mostpopular>
      <Cityarea></Cityarea>
      <Statearea></Statearea>
    </Layout>
  );
}
