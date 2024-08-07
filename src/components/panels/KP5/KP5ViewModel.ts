import { action, makeObservable, observable } from 'mobx';
import { GuideStep, KP5Props, KP5TransferType, KP6Props } from '../../kontur/KonturViewModel';

export class KP5ViewModel {
  private _transfer: KP5TransferType = 'ПУ';
  private _general: boolean = false;
  private _isSignEnable: boolean = false;
  private _sign: string = '';
  private _isAddressEnable: boolean = false;
  private _address: string = '';
  private _screenValue: string = '';
  private _currentGroup: number = 0;
  private _currentGroupName: string = '';
  private _groups: string[] = Array(8).fill('');
  private readonly _guideSteps: GuideStep[];

  constructor(guideSteps: GuideStep[]) {
    makeObservable<KP5ViewModel, "_transfer"
      | "_general"
      | "_isSignEnable"
      | "_isAddressEnable"
      | "_sign"
      | "_groups"
      | "_currentGroupName"
      | "_currentGroup"
      | "_address"
      | "_screenValue"
    >(this, {
      _transfer: observable,
      _general: observable,
      _isSignEnable: observable,
      _sign: observable,
      _address: observable,
      _currentGroup: observable,
      _groups: observable,
      _screenValue: observable,
      _currentGroupName: observable,
      _isAddressEnable: observable,
      setDefault: action.bound,
      onChangeTransfer: action.bound,
      onChangeGeneral: action.bound,
      onChangeSignEnable: action.bound,
      onChangeAddressEnable: action.bound,
      onChangeScreenValue: action.bound,
      onChangeCurrentGroup: action.bound,
      onChangeCurrentGroupName: action.bound,
      onChangeOff: action.bound,
      onChangeKk: action.bound,
      onChangeInfo: action.bound,
      onChangeIncome: action.bound
    });
    this._guideSteps = guideSteps;
  }

  public get data(): KP5Props {
    return {
      transfer: this._transfer,
      onChangeTransfer: this.onChangeTransfer,
      general: this._general,
      onChangeGeneral: this.onChangeGeneral,
      isSignEnable: this._isSignEnable,
      onChangeSignEnable: this.onChangeSignEnable,
      isAddressEnable: this._isAddressEnable,
      onChangeAddressEnable: this.onChangeAddressEnable,
      screenValue: this._screenValue,
      onChangeScreenValue: this.onChangeScreenValue,
      currentGroup: this._currentGroup,
      currentGroupName: this._currentGroupName,
      onChangeCurrentGroup: this.onChangeCurrentGroup,
      onChangeCurrentGroupName: this.onChangeCurrentGroupName,
      onChangeOff: this.onChangeOff,
      onChangeKk: this.onChangeKk,
      onChangeInfo: this.onChangeInfo,
      onChangeIncome: this.onChangeIncome,
      controlLampActive: this._guideSteps[9].isCompleted
    }
  }

  public get KP6Props(): KP6Props {
    return {
      transferIsEnable: this._transfer === 'МТК' && this._guideSteps[0].isCompleted
    }
  }

  public setDefault() {
    this._general = false
    this._isSignEnable = false
    this._isAddressEnable = false
    this._address = ''
    this._sign = ''
    this._screenValue = ''
    this._groups = []
    this._currentGroup = 0
  }

  public onChangeCurrentGroup() {
    this._groups[this._currentGroup - 1] = this._screenValue
    this._screenValue = ''
    this._currentGroup = this._currentGroup + 1
    if (this._currentGroup > 8) {
      this._currentGroup = 0
      if (this._groups.every((value) => value.length === 3)) {
        this._guideSteps[7].isCompleted = true
      }
    }
  }

  public onChangeCurrentGroupName(value: string) {
    if (this._currentGroup > 0 && this._guideSteps[0].isCompleted && this._guideSteps[7].isCompleted) {
      if (!value) {
        this._currentGroupName = ''
        return
      }
      if (this._currentGroupName.length == 3) {
        this._currentGroupName = value
      } else {
        this._currentGroupName = this._currentGroupName + value
      }
    }
  }

  public onChangeAddressEnable() {
    if (this._isAddressEnable) {
      this._address = this._screenValue
      this._screenValue = ''
    }
    this._isAddressEnable = !this._isAddressEnable
    if (this._guideSteps[0].isCompleted && this._guideSteps[5].isCompleted && this._address.length === 3 && this._address == this._sign) {
      this._guideSteps[6].isCompleted = true
    }
  }

  public onChangeTransfer() {
    if (this._transfer === 'ПУ') {
      this._transfer = 'МТК'
    } else {
      this._transfer = 'ПУ'
    }
    if (this._guideSteps[0].isCompleted && this._guideSteps[1].isCompleted) {
      this._guideSteps[2].isCompleted = this._transfer === 'МТК'
    }
  }

  public onChangeGeneral() {
    this._general = !this._general
    if (this._guideSteps[0].isCompleted && this._guideSteps[2].isCompleted) {
      this._guideSteps[3].isCompleted = true
    }
    if (this._guideSteps[17].isCompleted) {
      this._guideSteps[18].isCompleted = true
    }
  }

  public onChangeSignEnable() {
    if (this._isSignEnable) {
      this._sign = this._screenValue
      this._screenValue = ''
    }
   this._isSignEnable = !this._isSignEnable
   if (this._guideSteps[0].isCompleted && this._guideSteps[3].isCompleted && this._sign.length == 3) {
     this._guideSteps[4].isCompleted = true;
   }
  }

  public onChangeOff() {
    if (this._guideSteps[0].isCompleted && this._guideSteps[4].isCompleted) {
      this._guideSteps[5].isCompleted = true
    }
    if (this._guideSteps[0].isCompleted && this._guideSteps[12].isCompleted) {
      this._guideSteps[13].isCompleted = true
    }
  }

  public onChangeIncome() {
    if (this._guideSteps[0].isCompleted && this._guideSteps[9].isCompleted) {
      this._guideSteps[10].isCompleted = true
    }
  }

  public onChangeKk() {
    if (this._guideSteps[0].isCompleted && this._guideSteps[10].isCompleted) {
      this._guideSteps[11].isCompleted = true
    }
  }

  public onChangeInfo() {
    if (this._guideSteps[0].isCompleted && this._guideSteps[11].isCompleted) {
      this._guideSteps[12].isCompleted = true
    }
  }

  public onChangeScreenValue(value?: string) {
    if ((this._isSignEnable || this._isAddressEnable || this._currentGroup > 0) && this._guideSteps[0]) {
      if (!value) {
        this._screenValue = ''
        return
      }
      if (this._screenValue.length == 3) {
        this._screenValue = value
      } else {
        this._screenValue = this._screenValue + value
      }
    }
  }
}
