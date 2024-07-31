import React from 'react';
import lampOnGreen from '../../assets/images/components/lamp/lampOnGreen.png';

const LampActive = ({ className }: { className?: string }) => {
  return (
    <div>
      <img
        src={lampOnGreen}
        style={{
          width: 28,
          height: 28,
        }}
        className={className}
        alt="lamp-active"
      />
    </div>
  );
};

export default LampActive;
