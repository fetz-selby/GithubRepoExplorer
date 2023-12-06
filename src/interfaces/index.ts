export enum UserTypes {
  User = 'User',
  Organization = 'Organization',
}

export interface UserProps {
  id: number;
  avatar: string;
  login: string;
  reposUrl: string;
  type: UserTypes;
}

export enum TransitionStates {
  IDLE = 'idle',
  LOADING = 'loading',
  SHOWLIST = 'showlist',
  ERROR = 'error',
}

export interface AppTransitionProps {
  transitionState: TransitionStates;
}

export enum ActionEventTypes {
  SEARCH = 'SEARCH',
  SUCCESS = 'SUCCESS',
  CLEAR = 'CLEAR',
  ERROR = 'ERROR',
  SELECT_ITEM = 'SELECT_ITEM',
}

export interface SendActionEventTypes {
  type: ActionEventTypes;
}
