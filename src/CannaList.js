import React from 'react';
import CannaItem from './CannaItem';

export default function CannaList({ cannabis }) {
  return <div>
    {cannabis.map((strain, i) => {
      return (
        <CannaItem 
          key={strain.strain + i}
          name={strain.strain}
          thc={strain.thc}
          cbd={strain.cbd}
          grower={strain.grower}
        />
      );
    })}
  </div>;
}
