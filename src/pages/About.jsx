import React from "react";
//import Layout from "../Components/layout/layout";
import Layout from "../Components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://ovaisabayacollection.in/cdn/shop/files/IMG_7312_1.png?v=1716046408&width=3000"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            KH Islamic Store contains a wide range of modest collections ranging
            from abaya, hijab and accessories at a reasonable prize. You can
            explore and purchase as per your choice. Get free shipping on your
            first order.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
