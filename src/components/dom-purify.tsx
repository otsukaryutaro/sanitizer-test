import { useState } from 'react';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

export const DomPurify = () => {
  const [text, setText] = useState('');

  const window = new JSDOM('').window;
  const purify = DOMPurify(window);
  const purifiedText = purify.sanitize(text);

  const onClick = () => {
    alert(text);
  };

  return (
    <div>
      <textarea
        name="dom-purified-text"
        rows={5}
        cols={33}
        onChange={(e) => {
          setText(e.target.value);
        }}
      >
        It was a dark and stormy night...
      </textarea>

      {/* そのままの値 */}
      <div>value: {text}</div>
      <div dangerouslySetInnerHTML={{ __html: text }} />

      {/* サニタイズした値 */}
      <div>purified-value: {purifiedText}</div>
      <div dangerouslySetInnerHTML={{ __html: purifiedText }} />

      <input type="button" onClick={onClick} value="click" />
    </div>
  );
};
