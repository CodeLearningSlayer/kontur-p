const getScrewPositionBySide = (
  side: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',
) => {
  switch (side) {
    case 'bottom-left':
      return 'bottom: 0px; left: 0px;';
    case 'bottom-right':
      return 'bottom: 0px; right: 0px;';
    case 'top-left':
      return 'top: 0px; left: 0px';
    case 'top-right':
      return 'top: 0px; right: 0px;';
    default:
      return 'top: 0px; left: 0px';
  }
};

export default getScrewPositionBySide;
