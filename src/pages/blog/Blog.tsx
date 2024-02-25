import React, { useEffect, useState } from "react";
import Navi2 from "../../components/navbar/Navi2";
import Footer2 from "../../components/footer/Footer2";
import { useParams } from "react-router";
import SocialMediaShareButtons from "./SocialMediaShareButtons";

const Blog = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [prevBlogId, setPrevBlogId] = useState<string | null>(null);
  const [nextBlogId, setNextBlogId] = useState<string | null>(null);

  useEffect(() => {
    // Belirtilen blogun verisini çekmek için API isteği yapın
    fetch(`http://localhost:6280/api/Blogs/GetById?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        // API'den gelen veriyi blog state'ine kaydedin
        setBlog(data);
        setLoading(false); // Verilerin yüklendiğini işaretleyin
        console.log(data);
      })
      .catch((error) => console.error("Error fetching blog:", error));

      const isBlogExists = (blogId: string): Promise<boolean> => {
        return fetch(`http://localhost:6280/api/Blogs/GetById?id=${blogId}`)
          .then((response) => response.ok)
          .catch((error) => {
            console.error("Error checking blog existence:", error);
            return false;
          });
      };

   // Check if the previous blog exists
    const prevId = parseInt(id as string) - 1;
    isBlogExists(prevId.toString()).then((exists) => {
      if (exists) {
        setPrevBlogId(prevId.toString());
      }
      else{
        setPrevBlogId(null);
      }
    });

    // Check if the next blog exists
    const nextId = parseInt(id as string) + 1;
    isBlogExists(nextId.toString()).then((exists) => {
      if (exists) {
        setNextBlogId(nextId.toString());
      } else {
        setNextBlogId(null);
      }
    });

  }, [id]);

  const handleButtonClick = (direction: "prev" | "next") => {
    const targetId = direction === "prev" ? prevBlogId : nextBlogId;
    if (targetId) {
      window.location.href = `/blog/${targetId}`;
    }
  };
  

  const renderContent = () => {
    // Blog yüklenene kadar "Loading..." göster
    if (loading || !blog) {
      return <div>Loading...</div>;
    }

    // Blog içeriğini al
    const content = blog.content;

    // İçerik boşsa uyarı göster
    if (!content) {
      return <div>No content available</div>;
    }

    // JSON veriyi JavaScript nesnesine dönüştür
    let parsedContent;
    try {
      parsedContent = JSON.parse(content);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return <div>Error parsing content</div>;
    }

    // Nesnedeki anahtarları kullanarak HTML içeriği oluşturun
    const renderBlocks = parsedContent.blocks.map(
      (block: any, index: number) => {
        switch (block.type) {
          case "header":
            return <h1 key={index}>{block.data.text}</h1>;
          case "paragraph":
            return (
              <p key={index} dangerouslySetInnerHTML={{ __html: block.data.text }} />
            );
          case "simpleImage":
            return (
              <img key={index} src={block.data.url} alt={block.data.caption} />
            );
          // case "list":
          //   return (
          //     <ul key={index}>
          //       {block.data.items.map((item: string, itemIndex: number) => (
          //         <li key={itemIndex}>{item}</li>
          //       ))}
          //     </ul>
          //   );
          case "list":
  const listItems = block.data.items.map((item: string, itemIndex: number) => (
    `<li key=${itemIndex}>${item}</li>`
  )).join(""); // Liste öğelerini birleştir
  const listHTML = `<p>${listItems}</p>`; // Liste öğelerini içeren bir paragraf HTML'i oluştur
  return (
    <div key={index} dangerouslySetInnerHTML={{ __html: listHTML }} />
  );

          // Diğer blok türlerini buraya ekleyebilirsiniz
          default:
            return null;
        }
      }
    );
    
    
  
    return renderBlocks;
    
  };

  return (
    <>
      <div>
        <Navi2 />
        <main className="bg-front-dark">
          <div className="pt-10em py-32 poistion-relative overflow-hidden">
            <div className="container blog-content">
              <div className="mw-2xl mx-auto">
                <div>
                  <SocialMediaShareButtons />
                </div>
                <section className="py-32 poistion-relative overflow-hidden">
                  <div className="container">
                    <div className="mw-2x1 mx-auto">
                      {/* Blog içeriği */}
                      {renderContent()}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginBottom: "3em",
            }}
          >
            <button
              disabled={prevBlogId ? false : true }
              onClick={() => handleButtonClick("prev")}
              className="btn btn-primary"
            >
              ← Önceki
            </button>
            <button
              disabled={nextBlogId ? false : true}
              onClick={() => handleButtonClick("next")}
              className="btn btn-primary"
            >
              Sonraki →
            </button>
          </div>
        </main>
      </div>
      <Footer2 />
    </>
  );
};

export default Blog;
