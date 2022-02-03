import React from 'react';

export default function CannaItem({ name, thc, cbd, grower }) {
  return (<div>
      Strain: {name}<br></br>
      THC: {thc}<br></br>
      CBD: {cbd}<br></br>
      Grown By: {grower}<br></br>
  </div>);
}
