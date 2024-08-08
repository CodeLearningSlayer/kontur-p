import { action, makeObservable, observable } from 'mobx';
import { SyntheticEvent, useContext } from 'react';
import * as electron from 'electron';
import {
  checkIfUserNew,
  insertUser,
} from '../../../renderer/components/dao/Database';

export interface User {
  name: string;
  course: number;
  troop: number;
}

export class AuthViewModel {
  private _name: string = '';

  private _course: number = 0;

  private _troop: number = 0;

  constructor() {
    makeObservable<AuthViewModel, '_name' | '_course' | '_troop'>(this, {
      _name: observable,
      _course: observable,
      _troop: observable,
      onClickAuth: action.bound,
      onChangeName: action.bound,
      onChangeCourse: action.bound,
      onChangeTroop: action.bound,
    });
  }

  public async onClickAuth(setContextUser: (user: User) => void) {
    if (this.isNameCorrect(this._name)) {
      setContextUser({
        name: this._name,
        course: this._course,
        troop: this._troop,
      });
      window.electron.ipcRenderer.sendAsyncMessage('redirect', '/menu')
      await checkIfUserNew(this._name).then((result) => {
        if (!result) return
        //insertUser(this._name, this._course, this._troop)
      })
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
    return this._name;
  }

  public get course() {
    return this._course;
  }

  public get troop() {
    return this._troop;
  }

  private isNameCorrect(name: string): boolean {
    // const regex = /[А-Я][а-я]* [А-Я]\. [А-Я]\./
    // return regex.test(name)
    return true;
  }
}
