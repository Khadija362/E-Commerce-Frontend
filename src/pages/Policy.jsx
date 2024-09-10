import React from "react";
//import Layout from "../Components/layout/Layout";
import Layout from "../Components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ChVtHjeG4e3OlUcx4egV7ljTx5xRnM-l-w&s"
            alt="contactus"
            style={{ width: "100%", height: "70%" }}
          />
        </div>
        <div className="col-md-4">
          <p>This store's privacy policy includes the following rights:</p>
          <p>
            Right to access: You can request access to your personal
            information, including how it's used and shared.
          </p>
          <p>
            Right to delete: You can request that your personal information be
            deleted.
          </p>
          <p>
            Right to correct: You can request that inaccurate personal
            information be corrected.
          </p>
          <p>
            Right to portability: You can request a copy of your personal
            information or to transfer it to a third party.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
