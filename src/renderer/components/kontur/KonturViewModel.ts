import { makeObservable, observable } from 'mobx';

interface PanelKP1Props {
  signControl: boolean,
  channel10: boolean,
  channel11: boolean,
  control: boolean
}

interface PanelKP2Props {
  reception: boolean,
  firstInfo: number,
  secondInfo: number,
  group: number,
  shift1: boolean,
  shift10: boolean,
  control1: boolean,
  control2: boolean
}

export class KonturViewModel {
  private readonly _panelKP1: PanelKP1Props;
  private readonly _panelKP2: PanelKP2Props;
  constructor() {
    makeObservable<KonturViewModel, "_panelKP1" | "_panelKP2">(this, {
      _panelKP1: observable,
      _panelKP2: observable,
    });
  }
}
