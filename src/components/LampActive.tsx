import React from 'react';
import lampOnGreen from '../../assets/images/components/lamp/lampType10OnGreen.png';

const LampActive = ({ className }: { className?: string }) => {
  return (
    <div>
      <img
        src={lampOnGreen}
        style={{
          width: 22,
          height: 22,
        }}
        className={className}
        alt="lamp-active"
      />
    </div>
  );
};

export default LampActive;
