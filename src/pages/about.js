import Layout from "@/components/shared/layout/layout";
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-200">
      <Layout>
        <div className="w-[1200px] m-auto pt-32">
          <div className="bg-white p-10 text-lg">
            How it Works Using Expert Plumbers is easy and simple. Start by
            following the steps below.
            <br />
            <br />
            <b>1. Search Plumbers : </b> <br /> Go to our home page and enter
            your city or zipcode to find plumbers in your area. You can also
            search by service category. It&apos;s easy to search and find
            best-rated plumbers near you. Find the right local plumber for your
            needs by comparing quotes, reviews, and full profiles. Do you have a
            specific plumber in mind? Yes, we got that taken care of. You can go
            to the top right corner of the home page and typer the name of the
            plumber you are looking for.
            <br />
            <br />
            <b> 2. Compare Plumbers : </b> <br /> After searching for plumbers,
            you are presented with the list of top-rated plumbers sorted based
            on the reviews and experience. Click on &quot;Quote&quot; icon to
            contact as many plumbers as you wish with the push of a button. You
            can also save time by using our Quick Quote feature to be contacted
            personally by multiple top local plumbers in our network, so you can
            shop around and receive multiple quotes all with a click of a
            button. More local plumber options equals better service for you.
            <br />
            <br />
            <b> 3. Connect with Plumbers : </b> <br /> Once you find plumbers
            that you like, contact them to get more information. Our members are
            always happy to hear from you!
            <br />
            <br />
            <b> 4. Review and Share Your Experience : </b> <br /> Submit a
            review and improve the LocalPlumbers.com plumbing community. The
            more honest and fair reviews that are submitted, the better plumbing
            becomes for all future clients. This will help others decide which
            local plumber to use, so they too can have a positive experience.
            <br />
            <br />
            Make the plumbing world a better place! We are always looking for
            ways to improve, so thanks again for your business, support and
            feedback.
            <br /> <br /> <br /> <br />
            <button className="bg-green-500 rounded text-white font-bold block m-auto text-xl px-10 py-2">
              Call Now
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AboutUs;
