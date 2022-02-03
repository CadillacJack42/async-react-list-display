import React from 'react';

export default function BeatlesMember({
  name,
  instrument,
  life,
  alive,
}) {
  return <div>
    <h3>{name}</h3>
    <p>{name} played {instrument} and {alive ? 'is still ' : 'is no longer '} alive</p>
    <p>{name} lived from {life}</p>
  </div>;
}
