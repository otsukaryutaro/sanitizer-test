import { useState } from 'react';

export const SanitizeHtml = () => {
  const [text, setText] = useState('');

  const fn = () => {
    alert(text);
  };

  return (
    <div>
      <textarea
        name="sanitized-text"
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
      <input type="button" onClick={fn} value="click" />
    </div>
  );
};
