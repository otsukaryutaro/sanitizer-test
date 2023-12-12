import { describe, expect, test } from 'vitest';
import DOMPurify from 'isomorphic-dompurify';

describe('Dompurifyの学習テスト', () => {
  test('aタグにjs', () => {
    const clean = DOMPurify.sanitize("<a href=javascript:alert('xss')>リンクをクリック</a>");   
     expect(clean).toEqual('<a>リンクをクリック</a>');
  });
  test('imageタグ', () => {
    const clean = DOMPurify.sanitize("<img src=x onerror=alert(1)//>");   
     expect(clean).toEqual('<img src="x">');
  });
  test('pタグにjs', () => {
    const clean = DOMPurify.sanitize("<p>abc<iframe//src=jAva&Tab;script:alert(3)>def</p>");   
     expect(clean).toEqual('<p>abc</p>');
  });
  test('table', () => {
    const clean = DOMPurify.sanitize("<TABLE><tr><td>HELLO</tr></TABL>");   
     expect(clean).toEqual('<table><tbody><tr><td>HELLO</td></tr></tbody></table>');
  });
  test('pタグにjs', () => {
    const clean = DOMPurify.sanitize("<UL><li><A HREF=//google.com>click</UL>");   
     expect(clean).toEqual('<ul><li><a href="//google.com">click</a></li></ul>');
  });
});
