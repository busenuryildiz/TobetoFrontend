  import React, { useRef, useEffect, useState } from 'react';
  import EditorJS, { EditorConfig } from '@editorjs/editorjs';
  import  Header from '@editorjs/header';
  import  Paragraph from '@editorjs/paragraph';
  import  List  from '@editorjs/list';
  import  Quote  from '@editorjs/quote';
  import  Embed  from '@editorjs/embed';
  import SimpleImage from "@editorjs/simple-image";
import { BASE_API_URL } from '../../../enviroment/enviroment';

  const BlogAndMediaPostManagementPanel = () => {
    const editorInstance = useRef<EditorJS | null>(null);
    const [title, setTitle] = useState("");
    const [imagePath, setImagePath] = useState("");
    const [content, setContent] = useState("");
    const [isBlog, setIsBlog] = useState(true); 

    const handleAddItem  = async () => {
      try {
        const editorData = await editorInstance.current?.save();
        const contentString = JSON.stringify(editorData);

        const endpoint = isBlog ? `${BASE_API_URL}Blogs/Add` : `${BASE_API_URL}MediaPosts/Add`;

        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title,
            imagePath,
            content: contentString 
          })
        });
        const data = await response.json();
        console.log("Content added successfully:", data);
      } catch (error) {
        console.error("Error adding content:", error);
      }
    };

    useEffect(() => {
      if (!editorInstance.current) {
        editorInstance.current = new EditorJS({
          holder: 'editorjs',
          placeholder: 'Buraya yazın...',
          onChange: (api: any) => {
            api.saver.save().then((outputData: any) => {
              console.log('Editor.js output:', outputData);

            });
          },
          onReady: () => {
            console.log('Editor.js is ready to work!');
          },
          onError: (error: Error) => {
            console.error('Editor.js error:', error);
          },
          tools: {
            header: {
              class: Header,
              config: {
                placeholder: 'Enter a header',
                levels: [2, 3, 4],
                defaultLevel: 3
              },
              inlineToolbar: true
            },
            paragraph: {
              class: Paragraph,
              inlineToolbar: true
            },
            list: {
              class: List,
              inlineToolbar: true
            },
            quote: {
              class: Quote,
              inlineToolbar: true
            },
            embed: {
              class: Embed,
              inlineToolbar: true
            },
            simpleImage: {
              class: SimpleImage,
            }
            
          }
        } as unknown as EditorConfig);
      }

      return () => {
        if (editorInstance.current) {
          editorInstance.current.destroy();
        }
      };
    }, []);

    return (
    <div>
      <input
        type="text"
        placeholder="İçerik Başlığı"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Resim URL"
        value={imagePath}
        onChange={(e) => setImagePath(e.target.value)}
      />
      <div id="editorjs" />
<button onClick={handleAddItem}>{isBlog ? "Blog Ekle" : "Haber Ekle"}</button>
      <button onClick={() => setIsBlog(!isBlog)}>{isBlog ? "Şu an Blog Ekleme Modundasınız, değiştirmek için lütfen tıklayın" : "Şu an Haber Ekleme Modundasınız, değiştirmek için lütfen tıklayın"}</button>    </div>
  );
};

export default BlogAndMediaPostManagementPanel;