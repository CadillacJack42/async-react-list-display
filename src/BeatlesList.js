import React from 'react';
import BeatlesMember from './BeatlesMember';

export default function BeatlesList({ beatles }) {
  return <div>
    <h2>The Beatles</h2>
    {beatles.map((member, i) => {
      return (
        <BeatlesMember
          key={member + i}  
          name={member.name}
          instrument={member.instrument}
          life={member.life}
          alive={member.alive}
        />
      );
    })}
  </div>;
}
