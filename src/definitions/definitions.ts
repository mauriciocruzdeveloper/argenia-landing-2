export type User = {
  id: string;
  name: string;
  email: string;
  // emailVerified: Date;
  password: string;
};

export type SystemColors =
  | 'argPrimary1'
  | 'argPrimary2'
  | 'argSecondary1'
  | 'argSecondary2'
  | 'argSecondary3'
  | 'argSecondary4'
  | 'white'
  | 'black';