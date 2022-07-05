interface IAuthState {
  isLoggedIn: boolean;
  token: string | null;
  username: string | null;
  password: string | null;
}

export type { IAuthState };
