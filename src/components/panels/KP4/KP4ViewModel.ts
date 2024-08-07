import { action, makeObservable, observable } from 'mobx';
import { GuideStep, KP4Props } from '../../kontur/KonturViewModel';

export class KP4ViewModel {
  private _control: boolean = false;
  private _circleSelectPosition: number = 1;
  private _guideSteps: GuideStep[];

  constructor(guideSteps: GuideStep[]) {
    makeObservable<KP4ViewModel, "_control" | "_circleSelectPosition">(this, {
      _control: observable,
      _circleSelectPosition: observable,
      onChangeControl: action.bound,
      onChangeCircleSelectPosition: action.bound
    });
    this._guideSteps = guideSteps;
  }

  public get data(): KP4Props {
    return {
      control: this._control,
      onChangeControl: this.onChangeControl,
      circleSelectPosition: this._circleSelectPosition,
      onChangeCircleSelectPosition: this.onChangeCircleSelectPosition,
    }
  }

  public setDefault() {
    this._control = false
  }

  public onChangeControl() {
    if (this._guideSteps[8].isCompleted) {
      this._control = !this._control
      this._guideSteps[9].isCompleted = true
    }
  }

  public onChangeCircleSelectPosition(position: number) {
    this._circleSelectPosition = position
    if (position == 0 && this._guideSteps[7].isCompleted) {
      this._guideSteps[8].isCompleted = true
    } else {
      this._guideSteps[8].isCompleted = false
    }
  }
}
