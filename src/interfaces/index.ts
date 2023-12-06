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
