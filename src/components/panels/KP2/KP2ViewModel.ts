import { action, makeObservable, observable } from 'mobx';
import { GuideStep, KP2Props, KP3Props } from '../../kontur/KonturViewModel';

export class KP2ViewModel {
  private _control: number = 2;
  private _infoBegin: boolean = false
  private _phase1: boolean = false
  private _guideSteps: GuideStep[];

  constructor(guideSteps: GuideStep[]) {
    makeObservable<KP2ViewModel, "_control" | "_phase1" | "_infoBegin">(this, {
      _control: observable,
      _phase1: observable,
      _infoBegin: observable,
      onChangeControl: action.bound,
      onChangeInfoBegin: action.bound,
      onChangePhase1: action.bound
    });
    this._guideSteps = guideSteps;
  }

  public get data(): KP2Props {
    return {
      control: this._control,
      onChangeControl: this.onChangeControl,
      infoBegin: this._infoBegin,
      onChangeInfoBegin: this.onChangeInfoBegin,
      phase1: this._phase1,
      onChangePhase1: this.onChangePhase1
    }
  }

  public setDefault() {
    this._infoBegin = false
  }

  public onChangeControl() {
    this._control = this._control + 1
    if (this._control > 2) {
      this._control = 1
    }
    if (this._guideSteps[14].isCompleted && this._control == 2) {
      this._guideSteps[15].isCompleted = true
    }
  }

  public onChangeInfoBegin() {
    this._infoBegin = !this._infoBegin
    if (this._guideSteps[15].isCompleted) {
      this._guideSteps[16].isCompleted = true
    }
  }

  public onChangePhase1() {
    this._phase1 = !this._phase1
    if (this._guideSteps[16].isCompleted) {
      this._guideSteps[17].isCompleted = true
    }
  }
}
