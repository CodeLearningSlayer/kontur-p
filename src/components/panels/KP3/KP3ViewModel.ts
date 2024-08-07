import { action, makeObservable, observable } from 'mobx';
import { GuideStep, KP3Props } from '../../kontur/KonturViewModel';

export class KP3ViewModel {
  private _control12: boolean = false;
  private _guideSteps: GuideStep[];

  constructor(guideSteps: GuideStep[]) {
    makeObservable<KP3ViewModel, "_control12">(this, {
      _control12: observable,
      onChangeControl12: action.bound,
    });
    this._guideSteps = guideSteps;
  }

  public get data(): KP3Props {
    return {
      control12: this._control12,
      onChangeControl12: this.onChangeControl12,
    }
  }

  public setDefault() {
    this._control12 = false
  }

  public onChangeControl12() {
    if (this._guideSteps[13].isCompleted) {
      this._control12 = !this._control12
      this._guideSteps[14].isCompleted = true
    }
  }
}
