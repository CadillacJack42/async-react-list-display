import React from 'react';
import ArtistItem from './ArtistItem';

export default function ArtistList({ artists }) {
  console.log(artists);
  return <div>
    {artists.map((artist, i) => {
      return (<ArtistItem 
        key={artist + i}
        name={artist.name}
        style={artist.style}
        country={artist.origin_country}
        life={artist.life}
      />
      );})}
  </div>;
}
