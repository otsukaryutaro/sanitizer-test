import { useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';

export const DomPurify = () => {
  const [text, setText] = useState('');

  const clean = DOMPurify.sanitize(text);

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
      <div>purified-value: {clean}</div>
      <div dangerouslySetInnerHTML={{ __html: clean }} />

      <input type="button" onClick={onClick} value="click" />
    </div>
  );
};
