import React from "react";
import Navi2 from "../../components/navbar/Navi2";

function Blog() {
  return (
    <>
    <Navi2/>
    <main className="bg-front-dark">
    <div>
      <div
        className="container"
        style={{
          paddingTop: "12em",
          marginBottom: "1em",
          width: "max-content",
        }}
      >
        <div className="row text-center">
          <h2 className="text-white ms-4">Blog</h2>
        </div>
        <section className="blogcards-wrapper">

        </section>
      </div>

    </div>
    </main>
    </>
  );
}

export default Blog;
