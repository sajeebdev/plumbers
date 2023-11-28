import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/shared/layout/layout";
import Mostpopular from "@/components/compo/mostPopular/mostpopular";
import Cityarea from "@/components/compo/cityArea/cityarea";
import Statearea from "@/components/compo/stateArea/statearea";
import Freequotes from "@/components/free quotes/freeQuotes";
import Genericgallery from "@/components/GenericGallery/genericgallery";
import Banner from "@/components/banner/banner";
import MyGalleries from "@/components/gallery/gallery";
import Smallbanner from "@/components/smallbanner/smallbanner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Banner></Banner>
      <Mostpopular></Mostpopular>
      <Freequotes></Freequotes>
      <Cityarea></Cityarea>
      <Statearea></Statearea>
      <MyGalleries />
      {/* <Smallbanner /> */}
      <Genericgallery></Genericgallery>
    </Layout>
  );
}
