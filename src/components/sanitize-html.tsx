import { useState } from 'react';
import sanitizeHtml from 'sanitize-html';

export const SanitizeHtml = () => {
  const [text, setText] = useState('');

  const sanitizedText = sanitizeHtml(text, {
    allowedTags: false,
    allowedAttributes: false,
  });

  const onClick = () => {
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
      <div style={{ color: 'black' }}>sanitized-value: {sanitizedText}</div>
      <div
        style={{ color: 'black' }}
        dangerouslySetInnerHTML={{ __html: sanitizedText }}
      />
      <input type="button" onClick={onClick} value="click" />
    </div>
  );
};
