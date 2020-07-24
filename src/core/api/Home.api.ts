import Axios from 'axios-observable';
import { AxiosObservable } from 'axios-observable/dist/axios-observable.interface';
import * as logger from 'loglevel';
import { environment } from '../../environment/environment.dev';

export interface IUserData {
    name: string;
}

export function getUserData(): AxiosObservable<IUserData> {
    logger.trace("user.api.ts : getUserData : entering function")
    return Axios.get<IUserData>(`${environment.url}`)
}