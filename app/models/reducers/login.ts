interface ILoginState {
  isLoggedIn: boolean;
  token: string | null;
  username: string | null;
  password: string | null;
}

export type { ILoginState };
