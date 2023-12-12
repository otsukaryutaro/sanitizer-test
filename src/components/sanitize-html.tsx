import { useState } from 'react';
import sanitizeHtml from 'sanitize-html';

export const SanitizeHtml = () => {
  const [text, setText] = useState('');

  const sanitizedText = sanitizeHtml(text, {
    // FIXME: lettuceだと設定してるが、これだと意味ない
    // allowedTags: false,
    // allowedAttributes: false,
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

      {/* そのままの値 */}
      <div>value: {text}</div>
      <div dangerouslySetInnerHTML={{ __html: text }} />

      {/* サニタイズした値 */}
      <div>sanitized-value: {sanitizedText}</div>
      <div dangerouslySetInnerHTML={{ __html: sanitizedText }} />

      <input type="button" onClick={onClick} value="click" />
    </div>
  );
};
