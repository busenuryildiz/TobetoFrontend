import React, { useEffect, useState } from "react";
import Navi2 from "../../components/navbar/Navi2";
import Footer2 from "../../components/footer/Footer2";
import { useParams } from "react-router";
import SocialMediaShareButtons from "../blog/SocialMediaShareButtons";

const MediaPost = () => {
  const { id } = useParams<{ id: string }>();
  const [mediapost, setMediaPost] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [prevMediaPostId, setPrevMediaPostId] = useState<string | null>(null);
  const [nextMediaPostId, setNextMediaPostId] = useState<string | null>(null);

  useEffect(() => {
    // Belirtilen mediapostun verisini çekmek için API isteği yapın
    fetch(`http://localhost:6280/api/MediaPosts/GetById?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        // API'den gelen veriyi mediapost state'ine kaydedin
        setMediaPost(data);
        setLoading(false); // Verilerin yüklendiğini işaretleyin
        console.log(data);
      })
      .catch((error) => console.error("Error fetching mediapost:", error));

      const isMediaPostExists = (mediapostId: string): Promise<boolean> => {
        return fetch(`http://localhost:6280/api/MediaPosts/GetById?id=${mediapostId}`)
          .then((response) => response.ok)
          .catch((error) => {
            console.error("Error checking mediapost existence:", error);
            return false;
          });
      };

   // Check if the previous mediapost exists
    const prevId = parseInt(id as string) - 1;
    isMediaPostExists(prevId.toString()).then((exists) => {
      if (exists) {
        setPrevMediaPostId(prevId.toString());
      }
      else{
        setPrevMediaPostId(null);
      }
    });

    // Check if the next mediapost exists
    const nextId = parseInt(id as string) + 1;
    isMediaPostExists(nextId.toString()).then((exists) => {
      if (exists) {
        setNextMediaPostId(nextId.toString());
      } else {
        setNextMediaPostId(null);
      }
    });

  }, [id]);

  const handleButtonClick = (direction: "prev" | "next") => {
    const targetId = direction === "prev" ? prevMediaPostId : nextMediaPostId;
    if (targetId) {
      window.location.href = `/mediapost/${targetId}`;
    }
  };
  

  const renderContent = () => {
    // MediaPost yüklenene kadar "Loading..." göster
    if (loading || !mediapost) {
      return <div>Loading...</div>;
    }

    // MediaPost içeriğini al
    const content = mediapost.content;

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
                      {/* MediaPost içeriği */}
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
              disabled={prevMediaPostId ? false : true }
              onClick={() => handleButtonClick("prev")}
              className="btn btn-primary"
            >
              ← Önceki
            </button>
            <button
              disabled={nextMediaPostId ? false : true}
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

export default MediaPost;
