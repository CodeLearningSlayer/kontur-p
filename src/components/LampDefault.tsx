import React from 'react';
import lampOnYellow from '../../assets/images/components/lamp/lampType11OnYellow.png';

const LampDefault = ({ className }: { className?: string }) => {
  return (
    <div>
      <img
        src={lampOnYellow}
        style={{
          width: 22,
          height: 22,
        }}
        className={className}
        alt=""
      />
    </div>
  );
};

export default LampDefault;
