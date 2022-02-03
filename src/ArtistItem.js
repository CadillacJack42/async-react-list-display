import React from 'react';

export default function ArtistItem({ name, style, country, life }) {
  return <div>
    <p>
      {`${name} was an artist from ${country} who lived from ${life}. Their works are described as being ${style}.`}
    </p>
  </div>;
}
