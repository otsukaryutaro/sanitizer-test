import { useState } from 'react';

export const DomPurify = () => {
  const [text, setText] = useState('');

  const onClick = () => {
    alert(text);
  };

  return (
    <div>
      <textarea
        name="dompurifyed-text"
        rows={5}
        cols={33}
        onChange={(e) => {
          setText(e.target.value);
        }}
      >
        It was a dark and stormy night...
      </textarea>
      <div style={{ color: 'black' }}>value: {text}</div>
      <div
        style={{ color: 'black' }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <input type="button" onClick={onClick} value="click" />
    </div>
  );
};
