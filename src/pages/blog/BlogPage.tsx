import React, { useEffect, useState } from "react";
import Navi2 from "../../components/navbar/Navi2";
import BlogInterface from "./BlogInterface";
import Footer2 from "../../components/footer/Footer2";
import { Link } from "react-router-dom";
import { BASE_API_URL } from "../../enviroment/enviroment";

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function BlogPage() {
  const [blogs, setBlogs] = useState<BlogInterface[]>([]);

  useEffect(() => {
    fetch(`${BASE_API_URL}Blogs/GetAllBlogs`)
      .then((response) => response.json())
      .then((data) => {
        const parsedData = data.map((blog: any) => ({
          ...blog,
          content: JSON.parse(blog.content)
            .blocks.map((block: any) => block.data.text)
            .join(" "),
        }));
        setBlogs(parsedData);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  function sliceContent(content: string): string {
    const words = content.split(" ").slice(0, 30);
    const slicedContent = words.join(" ") + "...";
    return slicedContent;
  }
  return (
    <>
      <Navi2 />
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

            {/* Blog kartlarını oluşturma */}
            <section className="blogcards-wrapper">
              {blogs.map((blog) => (
                <div className="blogcard-grid-space" key={blog.id}>
                  <Link
                    className="blogcard"
                    to={`/blog/${blog.id}`}
                    style={{ "--bg-img": `url(${blog.imagePath})` } as any}
                  >
                    <div>
                      <h1>{blog.title}</h1>
                      <span className="item-decsription" dangerouslySetInnerHTML={{ __html: sliceContent(blog.content) }} />


                      <div className="date">{formatDate(blog.createdDate)}</div>
                    </div>
                  </Link>
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>
      <Footer2 />
    </>
  );
}

export default BlogPage;
