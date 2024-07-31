import React from 'react';
import lampOnYellow from '../../assets/images/components/lamp/lampOnYellow.png';

const LampDefault = ({ className }: { className?: string }) => {
  return (
    <div>
      <img
        src={lampOnYellow}
        style={{
          width: 27,
          height: 27,
        }}
        className={className}
        alt=""
      />
    </div>
  );
};

export default LampDefault;
