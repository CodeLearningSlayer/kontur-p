import React, { useState } from 'react';
import Kontur from '../../components/kontur/Kontur';
import { KonturViewModel } from '../../components/kontur/KonturViewModel';
import { observer } from 'mobx-react';

const TestElement = () => {
  const [vm] = useState(new KonturViewModel())
  return (
    <Kontur data={vm.data} />
  );
};
const Test = observer(TestElement)
export default Test;
