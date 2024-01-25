export interface User {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  img: string;

  _id?: string;
}

export interface selectInterface {
  value: string;
  viewValue: string;
}
