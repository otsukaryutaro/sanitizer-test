import { DomPurifyComponent } from '@/components/dom-purify';
import { SanitizeHtml } from '@/components/sanitize-html';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Home() {
  // 初期表示が成功したかをフラグで管理
  const flag = useRef(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const storedPath = localStorage.getItem("storedPath");
    
    if(storedPath === currentPath) {
      throw new Error("Same page");
    }
    
    localStorage.setItem("storedPath",currentPath); 

    // 初期表示が成功
    flag.current = true;
    
    return () => {
      localStorage.removeItem("storedPath");
    }
  } ,[])
  
  useEffect(() => {
    const handler = () => {
      // リロードやタブを閉じるときに実行される
      // ただし、初期表示で失敗した場合は実行されない
      if(flag.current) {
            localStorage.removeItem("storedPath");
        }
    }
    window.addEventListener('beforeunload', handler);
    return () => {
      window.removeEventListener('beforeunload', handler);
    }
  }, []);

  return (
    <>
      <h1>This is /hoge/index.tsx</h1>
      <Link href="/"><button type='button'>HOME</button></Link>
      <main
        style={{ backgroundColor: 'white', color: 'black', paddingLeft: 50 }}
      >
        {/* 
          NOTE: 
          <a href=javascript:alert('xss')>リンクをクリック</a>
          を埋め込むとXSS成功する 
        */}
        {/*
          NOTE: sanitize-htmlのサンプル
          const html = "<strong>hello world</strong>";
          console.log(sanitizeHtml(html));
          console.log(sanitizeHtml("<img src=x onerror=alert('img') />"));
          console.log(sanitizeHtml("console.log('hello world')"));
          console.log(sanitizeHtml("<script>alert('hello world')</script>")); 
        */}
        {/* 
          DOMPurify.sanitize('<img src=x onerror=alert(1)//>'); // becomes <img src="x">
          DOMPurify.sanitize('<svg><g/onload=alert(2)//<p>'); // becomes <svg><g></g></svg>
          DOMPurify.sanitize('<p>abc<iframe//src=jAva&Tab;script:alert(3)>def</p>'); // becomes <p>abc</p>
          DOMPurify.sanitize('<math><mi//xlink:href="data:x,<script>alert(4)</script>">'); // becomes <math><mi></mi></math>
          DOMPurify.sanitize('<TABLE><tr><td>HELLO</tr></TABL>'); // becomes <table><tbody><tr><td>HELLO</td></tr></tbody></table>
          DOMPurify.sanitize('<UL><li><A HREF=//google.com>click</UL>'); // becomes <ul><li><a href="//google.com">click</a></li></ul> 
          */}
        <div style={{ paddingTop: 100 }}></div>
        <p>SanitizeHtml</p>
        <SanitizeHtml />
        <div style={{ paddingTop: 100 }}></div>
        <p>DomPurify</p>
        <DomPurifyComponent />
        <div style={{ paddingTop: 100 }}></div>
      </main>
    </>
  );
}
