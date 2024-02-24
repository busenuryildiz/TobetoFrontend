  import React, { useRef, useEffect } from 'react';
  import EditorJS, { EditorConfig } from '@editorjs/editorjs';
  import  Header from '@editorjs/header';
  import  Paragraph from '@editorjs/paragraph';
  import  ImageTool  from '@editorjs/image';
  import  List  from '@editorjs/list';
  import  Quote  from '@editorjs/quote';
  import  Embed  from '@editorjs/embed';
  import  CodeTool  from '@editorjs/code';
  import SimpleImage from "@editorjs/simple-image";

  const BlogManagementPanel = () => {
    const editorInstance = useRef<EditorJS | null>(null);

    useEffect(() => {
      if (!editorInstance.current) {
        editorInstance.current = new EditorJS({
          holder: 'editorjs',
          placeholder: 'Buraya yazın...',
          onChange: (api: any) => {
            api.saver.save().then((outputData: any) => {
              console.log('Editor.js output:', outputData);
              // Burada editor içeriğiyle yapmak istediğiniz işlemleri gerçekleştirebilirsiniz
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
              inlineToolbar: true
            },
            paragraph: {
              class: Paragraph,
              inlineToolbar: true
            },
            // image: {
            //   class: ImageTool,
            //   config: {
            //     endpoints: {
            //       byFile: 'http://localhost:8008/uploadFile', // Your endpoint that handles file uploads
            //       byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that fetches image by URL
            //     }
            //   }
            // },
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
            code: {
              class: CodeTool,
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

    return <div id="editorjs" />;
  };

  export default BlogManagementPanel;
