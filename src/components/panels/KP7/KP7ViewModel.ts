import { action, makeObservable, observable } from 'mobx';
import { GuideStep, KP7Props } from '../../kontur/KonturViewModel';

export class KP7ViewModel {
  private readonly setGuideStepsToStart: () => void
  private _isActive: boolean = false;
  private _powerCircleSelectPosition: number = 1;
  private _guideSteps: GuideStep[];

  constructor(guideSteps: GuideStep[], setGuideStepsToStart: () => void) {
    makeObservable<KP7ViewModel, "_isActive" | "_powerCircleSelectPosition">(this, {
      _isActive: observable,
      _powerCircleSelectPosition: observable,
      onChangeActive: action.bound,
      onChangePowerCircleSelectPosition: action.bound
    });
    this._guideSteps = guideSteps;
    console.log(this._guideSteps)
    this.setGuideStepsToStart = setGuideStepsToStart
  }

  public get data(): KP7Props {
    return {
      isActive: this._isActive,
      onChangeActive: this.onChangeActive,
      powerCircleSelectPosition: this._powerCircleSelectPosition,
      onChangePowerCircleSelectPosition: this.onChangePowerCircleSelectPosition,
    }
  }

  public setDefault() {

  }

  public get isActive(): boolean {
    return this._isActive
  }

  public get powerCircleSelectPosition(): number {
    return this._powerCircleSelectPosition;
  }

  public onChangeActive() {
    this._isActive = !this._isActive
    this._guideSteps[0].isCompleted = true;
    //this._guideSteps = [{ text: this._guideSteps[0].text, isCompleted: true }, ...this._guideSteps]
    this.setGuideStepsToStart()
  }

  public onChangePowerCircleSelectPosition(position: number) {
    this._powerCircleSelectPosition = position
    if (this._guideSteps[0].isCompleted) {
      this._guideSteps[1].isCompleted = true
    }
  }
}
