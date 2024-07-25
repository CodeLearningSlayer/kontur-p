import { action, makeObservable, observable } from 'mobx';
import { SyntheticEvent } from 'react';

export interface User {
  name: string,
  course: number,
  troop: number
}

export class AuthViewModel {
  private _name: string;
  private _course: number;
  private _troop: number;

  constructor() {
    makeObservable<AuthViewModel, "_name" | "_course" | "_troop">(this, {
      _name: observable,
      _course: observable,
      _troop: observable,
      onClickAuth: action.bound,
      onChangeName: action.bound,
      onChangeCourse: action.bound,
      onChangeTroop: action.bound
    });
  }
  public onClickAuth() {
    if (this.isNameCorrect(this._name)) {
      window.electron.ipcRenderer.sendMessage('sql-insert', [this._name, this._course, this._troop])
      window.electron.ipcRenderer.sendMessage('resize-window', [1200, 700])
    }
  }

  public onChangeName(event: SyntheticEvent) {
    this._name = (event.target as HTMLInputElement).value;
  }

  public onChangeCourse(course: number) {
    this._course = course;
  }

  public onChangeTroop(troop: number) {
    this._troop = troop;
  }

  public get name() {
    return this._name
  }

  public get course() {
    return this._course
  }

  public get troop() {
    return this._troop
  }

  private isNameCorrect(name: string): boolean {
    const regex = /[А-Я][а-я]* [А-Я]\. [А-Я]\./
    return regex.test(name)
  }
}
