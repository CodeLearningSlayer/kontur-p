const getCircleCaptionOffsetBySide = (
  side: 'left' | 'right' | 'top' | 'bottom',
) => {
  if (side === 'left') {
    return 'left: -42px';
  }
  if (side === 'right') {
    return 'right: -42px';
  }
  if (side === 'top') {
    return 'top: -20px; transform: translateX(-50%); left: 50%';
  }
  if (side === 'bottom') {
    return 'bottom: -20px; transform: translateX(-50%); left: 50%';
  }
  return 'left: -35px';
};

export default getCircleCaptionOffsetBySide;
