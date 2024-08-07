import { action, makeObservable, observable } from 'mobx';
import { KP7ViewModel } from '../panels/KP7/KP7ViewModel';
import { KP5ViewModel } from '../panels/KP5/KP5ViewModel';
import { KP4ViewModel } from '../panels/KP4/KP4ViewModel';
import { KP3ViewModel } from '../panels/KP3/KP3ViewModel';
import { KP2ViewModel } from '../panels/KP2/KP2ViewModel';
import { useRef } from 'react';
import { KonturPanelsProps } from './Kontur';

export interface KP2Props {
  control: number
  onChangeControl: () => void
  infoBegin: boolean
  onChangeInfoBegin: () => void
  phase1: boolean
  onChangePhase1: () => void
}

export interface KP3Props {
  control12: boolean
  onChangeControl12: () => void
}

export interface KP4Props {
  circleSelectPosition: number
  onChangeCircleSelectPosition: (position: number) => void
  control: boolean
  onChangeControl: () => void
}

export interface KP5Props {
  transfer: KP5TransferType
  onChangeTransfer: () => void
  general: boolean
  onChangeGeneral: () => void
  isSignEnable: boolean
  onChangeSignEnable: () => void
  isAddressEnable: boolean
  onChangeAddressEnable: () => void
  screenValue: string
  onChangeScreenValue: (value: string) => void
  currentGroup: number
  currentGroupName: string
  onChangeCurrentGroup: () => void
  onChangeCurrentGroupName: (value: string) => void
  onChangeOff: () => void
  onChangeKk: () => void
  onChangeInfo: () => void
  onChangeIncome: () => void
  controlLampActive: boolean
}

export interface KP6Props {
  transferIsEnable: boolean
}

export interface KP7Props {
  isActive: boolean,
  onChangeActive: VoidFunction,
  powerCircleSelectPosition: number,
  onChangePowerCircleSelectPosition: (position: number) => void
}

export type KP5TransferType = 'МТК' | 'ПУ'

export interface GuideStep {
  title: string
  isCompleted: boolean
}

export class KonturViewModel {
  //private readonly _KP1: KP1Props;
  private readonly _KP2: KP2ViewModel;
  private readonly _KP3: KP3ViewModel;
  private readonly _KP4: KP4ViewModel;
  private readonly _KP5: KP5ViewModel;
  private readonly _KP7: KP7ViewModel;
  private _guideSteps: GuideStep[] = []

  constructor() {
    makeObservable<KonturViewModel, "_KP2" | "_KP3" | "_KP4" | "_KP5" | "_KP7" | "_guideSteps" | "setGuideStepsToStart" | "setPanelsToDefault">(this, {
      _KP2: observable,
      _KP3: observable,
      _KP4: observable,
      _KP5: observable,
      _KP7: observable,
      _guideSteps: observable,
      setGuideStepsToStart: action.bound,
      setPanelsToDefault: action.bound,
      initGuideSteps: action.bound
    });
    this._guideSteps = this.initGuideSteps();
    this._KP2 = new KP2ViewModel(this._guideSteps)
    this._KP3 = new KP3ViewModel(this._guideSteps)
    this._KP4 = new KP4ViewModel(this._guideSteps)
    this._KP5 = new KP5ViewModel(this._guideSteps)
    this._KP7 = new KP7ViewModel(this._guideSteps, this.setGuideStepsToStart)
  }

  public get data(): KonturPanelsProps {
    return {
      KP2: this._KP2.data,
      KP3: this._KP3.data,
      KP4: this._KP4.data,
      KP5: this._KP5.data,
      KP6: this._KP5.KP6Props,
      KP7: this._KP7.data
    }
  }

  public get guideSteps() {
    return this._guideSteps
  }

  public get currentIndex() {
    return this._guideSteps.findIndex(step => !step.isCompleted)
  }

  public get KP2(): KP2Props {
    return this._KP2.data
  }

  public get KP3(): KP3Props {
    return this._KP3.data
  }

  public get KP4(): KP4Props {
    return this._KP4.data
  }

  public get KP5(): KP5Props {
    return this._KP5.data
  }

  public get KP7(): KP7Props {
    return this._KP7.data
  }

  private setGuideStepsToStart() {
    if (!this._guideSteps[0]) {
      this._guideSteps[1].isCompleted = false
      this._guideSteps[3].isCompleted = false
      this._guideSteps[4].isCompleted = false
      //todo
      this.setPanelsToDefault();
    }
  }

  private setPanelsToDefault() {
    this._KP2.setDefault()
    this._KP3.setDefault()
    this._KP4.setDefault()
    this._KP5.setDefault()
    this._KP7.setDefault()
  }

  private initGuideSteps(): GuideStep[] {
    return [
      {
        title: 'На блоке КП7 тумблер СЕТЬ в положение ВКЛ',
        isCompleted: false,
      },
      {
        title:
          'На блоке КП7 изменяя переключатель КОНТРОЛЬ, от +9В до +9В резерв, убедитесь, что стрелка вольтметра находится в закрашенном секторе',
        isCompleted: false,
      },
      {
        title: 'На блоке КП5 тумблер ПЕРЕДАЧА установите в положение МТК',
        isCompleted: false,
      },
      {
        title: 'На блоке КП5 нажмите кнопку С ОБЩИЙ',
        isCompleted: false,
      },
      {
        title:
          'На блоке КП5 нажмите кнопку ПОДПИСЬ 3, нажатием кнопок 0-9 наберите трехзначную комбинацию, затем еще раз нажмите кнопку ПОДПИСЬ 3',
        isCompleted: false,
      },
      {
        title: 'На блоке КП5 нажмите кнопку ОТКЛ. ЗС',
        isCompleted: false,
      },
      {
        title:
          'На блоке КП5 нажмите кнопку АДРЕС К, нажатием кнопок 0-9 наберите трехзначную комбинацию, совпадающую с  ПОДПИСЬ 3, затем еще раз нажмите кнопку АДРЕС К',
        isCompleted: false,
      },
      {
        title:
          'На блоке КП5 последовательно нажимая кнопку ГРУППА, с помощью кнопок 0-9 наберите трехзначные комбинации для групп 1-8',
        isCompleted: false,
      },
      {
        title: 'На блоке КП4 переключатель ПРИОРИТЕТ поставьте в положение ОТКЛ',
        isCompleted: false,
      },
      {
        title: 'На блоке КП4 нажмите кнопку КОНТРОЛЬ',
        isCompleted: false,
      },
      {
        title: 'На блоке КП5 нажмите кнопку ПЕРЕДАЧА ВЫЗОВ',
        isCompleted: false,
      },
      {
        title: 'На блоке КП5 нажмите кнопку НАБОР КК',
        isCompleted: false,
      },
      {
        title: 'На блоке КП5 нажмите кнопку ПЕРЕДАЧА ИНФОРМАНЦИЯ',
        isCompleted: false,
      },
      {
        title: 'На блоке КП5 нажмите кнопку ОТКЛ. ЗС',
        isCompleted: false,
      },
      {
        title: 'На блоке КП3 нажмите кнопку КОНТРОЛЬ КАНАЛ 12',
        isCompleted: false,
      },
      {
        title: 'На блоке КП2 тумблер  КОНТРОЛЬ 1 - КОНТРОЛЬ 2 утановите в положение КОНТРОЛЬ 1',
        isCompleted: false,
      },
      {
        title: 'На блоке КП2 нажмите кнопку НАЧ. ИНФОРМ.',
        isCompleted: false,
      },
      {
        title: 'На блоке КП2 нажмите кнопку СДВИГ 1',
        isCompleted: false,
      },
      {
        title: 'На блоке КП5 нажмите кнопку С ОБЩИЙ',
        isCompleted: false,
      },
    ]
  }
}
