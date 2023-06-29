// Typescript:
export enum STATUS {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE'
}

export interface SuccessfulReturnable<T> {
  status: STATUS.SUCCESS
  payload: T
}

export interface FailedReturnable<T> {
  status: STATUS.FAILURE
  payload: null | Error
}

export type Returnable<T> = SuccessfulReturnable<T> | FailedReturnable<T>


// Functions:
const createReturnable = <T>(): Returnable<T> => {
  return {
    status: STATUS.FAILURE,
    payload: null
  }
}


// Exports:
export default createReturnable
