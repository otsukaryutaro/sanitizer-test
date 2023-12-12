import { describe, expect, test } from 'vitest';
import sanitizeHtml from 'sanitize-html';

describe('sanitize-htmlの学習テスト', () => {
  test('aタグにjs', () => {
    const html = sanitizeHtml(
      "<a href=javascript:alert('xss')>リンクをクリック</a>"
    );
    expect(html).toEqual('<a>リンクをクリック</a>');
  });
  test('imageタグ', () => {
    const html = sanitizeHtml("<img src='x' onerror='alert(1)'>");
    expect(html).toEqual('');
  });

  test('scriptタグ', () => {
    const html = sanitizeHtml("<script>alert('hello world')</script>");
    expect(html).toEqual('');
  });
});
