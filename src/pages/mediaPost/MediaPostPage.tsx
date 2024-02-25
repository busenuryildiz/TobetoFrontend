import React, { useEffect, useState } from "react";
import Navi2 from "../../components/navbar/Navi2";
import MediaPostInterface from "./MediaPostInterface";
import Footer2 from "../../components/footer/Footer2";
import { Link } from "react-router-dom";

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function MediaPostPage() {
  const [mediaPosts, setMediaPosts] = useState<MediaPostInterface[]>([]);

  useEffect(() => {
    fetch("http://localhost:6280/api/MediaPosts/GetAllMediaPosts")
      .then((response) => response.json())
      .then((data) => {
        const parsedData = data.map((mediaPost: any) => ({
          ...mediaPost,
          content: JSON.parse(mediaPost.content)
            .blocks.map((block: any) => block.data.text)
            .join(" "),
        }));
        setMediaPosts(parsedData);
      })
      .catch((error) => console.error("Error fetching MediaPosts:", error));
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
              <h2 className="text-white ms-4">Basında Biz</h2>
            </div>

            {/* Blog kartlarını oluşturma */}
            <section className="blogcards-wrapper">
              {mediaPosts.map((mediaPost) => (
                <div className="blogcard-grid-space" key={mediaPost.id}>
                  <Link
                    className="blogcard"
                    to={`/mediapost/${mediaPost.id}`}
                    style={{ "--bg-img": `url(${mediaPost.imagePath})` } as any}
                  >
                    <div>
                      <h1>{mediaPost.title}</h1>
                      <span className="item-decsription" dangerouslySetInnerHTML={{ __html: sliceContent(mediaPost.content) }} />


                      <div className="date">{formatDate(mediaPost.createdDate)}</div>
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

export default MediaPostPage;
