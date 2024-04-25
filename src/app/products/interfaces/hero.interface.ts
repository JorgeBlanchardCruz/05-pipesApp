
export enum Color {
  Red,
  Green,
  Blue,
  Black,
  White,
  Gold,
  Yellow,
  Purple,
  Brown,
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
