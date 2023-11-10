import React from 'react';

function Article({ title, date, preview, minutesToRead }) {
  // Calculate the number of emojis for 'Minutes to Read'
  const emojis = [];
  if (minutesToRead) {
    const emojiType = minutesToRead < 30 ? '☕️' : '🍱';
    const emojiCount = Math.ceil(minutesToRead / (emojiType === '☕️' ? 5 : 10));
    for (let i = 0; i < emojiCount; i++) {
      emojis.push(emojiType);
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      {emojis.length > 0 && <span>{emojis.join(' ')} {minutesToRead} min read</span>}
    </article>
  );
}

export default Article;