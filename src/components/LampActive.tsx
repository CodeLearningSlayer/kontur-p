import React from 'react';
import lampOnGreen from '../../assets/images/components/lamp/lampOnGreen.png';

const LampActive = ({ className }: { className?: string }) => {
  return (
    <div>
      <img
        src={lampOnGreen}
        style={{
          width: 27,
          height: 27,
        }}
        className={className}
        alt="lamp-active"
      />
    </div>
  );
};

export default LampActive;
