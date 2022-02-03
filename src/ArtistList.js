import React from 'react';
import ArtistItem from './ArtistItem';

export default function ArtistList({ artists }) {
  return <div>
    {artists.map((artist, i) => {
      return (<ArtistItem 
        key={artist + i}
        name={artists.name}
        style={artists.style}
        country={artists.origin_country}
        life={artists.life}
      />
      );})}
  </div>;
}
