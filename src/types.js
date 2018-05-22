// @flow

export type User = {
  id: string,
  email: string,
  firstname: string,
  lastname: string,
} | null;

export type onLogin = (string, string) => Promise<*>;
export type onSocialLogin = (string) => Promise<*>;

export type onLogout = () => Promise<*>;
