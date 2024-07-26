export type CaptionSide = 'right' | 'top' | 'left' | 'bottom';

const getStyleBySide = (
  side: CaptionSide,
): 'column' | 'column-reverse' | 'row-reverse' | 'row' => {
  if (side === 'top') {
    return `column`;
  }
  if (side === 'bottom') {
    return 'column-reverse';
  }
  if (side === 'right') {
    return 'row-reverse';
  }
  return 'row';
};

export default getStyleBySide;
