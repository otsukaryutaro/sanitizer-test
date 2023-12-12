import { DomPurify } from '@/components/dom-purify';
import { SanitizeHtml } from '@/components/sanitize-html';

export default function Home() {
  return (
    <>
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
        <DomPurify />
        <div style={{ paddingTop: 100 }}></div>
      </main>
    </>
  );
}
