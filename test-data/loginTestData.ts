
export type InvalidLoginCase = {
  caseName: string;
  username: string;
  password: string;
};

export const invalidLoginTestData: InvalidLoginCase[] = [
  {
    caseName: 'unknown customer username',
    username: 'unknown_customer_48292',
    password: 'WrongPassword_2026!',
  },
  {
    caseName: 'another invalid username',
    username: 'invalid_user_48291',
    password: 'NoMatch_2026!',
  },
  {
    caseName: 'nonexistent demo username',
    username: 'demo_customer_xyz_92831',
    password: 'IncorrectDemo_2026!',
  },
];
