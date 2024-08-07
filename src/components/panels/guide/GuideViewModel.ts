import { makeObservable } from 'mobx';
export class GuideViewModel {
  constructor() {
    makeObservable<GuideViewModel>(this, {
    });
  }
}
