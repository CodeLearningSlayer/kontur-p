import { makeObservable, observable } from 'mobx';

interface PanelKP1Props {
  kontrolPodpisi: boolean,
  kanal10: boolean,
  kanal11: boolean,
  kontrol: boolean
}

interface PanelKP2Props {
  priem: boolean,
  firstInfo: number,
  secondInfo: number,
  group: number,
  sdvig1: boolean,
  sdvig10: boolean,
  kontrol1: boolean,
  kontrol2: boolean
}

interface PanelKP3Props {
  sboi: boolean,
  kanal10: number,
  kanal11: number,
  kanal12: number,
  kanal10Btn: boolean,
  kanal11Btn: boolean,
  kanal12Btn: boolean,
}

export class KonturViewModel {
  private readonly _panelKP1: PanelKP1Props;
  private readonly _panelKP2: PanelKP2Props;
  private readonly _panelKP3: PanelKP3Props

  constructor() {
    makeObservable<KonturViewModel, "_panelKP1" | "_panelKP2" | "_panelKP3">(this, {
      _panelKP1: observable,
      _panelKP2: observable,
      _panelKP3: observable
    });
  }
}
