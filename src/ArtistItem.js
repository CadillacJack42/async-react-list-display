import React from 'react';

export default function ArtistItem({ name, style, country, life }) {
  return <div>
    <p>
      {`${name} was an artist from ${country} who lived from ${life}`}
    </p>
    Style(s):
    <ul>
      {style.map((stylo, i)=> {
        return (
          <li key={stylo + i}>{stylo}</li>
        );
      })}
    </ul>
  </div>;
}
