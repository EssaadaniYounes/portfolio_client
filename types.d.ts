import { type } from "os";

type LoginCredentials = {
  email: string;
  password: string;
};

type RegisterCredentials = LoginCredentials & {
  firstName: string | undefined;
  lastName: string | undefined;
};

type RegisterResponse = {
  token: string;
};

type UserData = {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string;
  bio: string | undefined;
  profileUrl: string | undefined;
  phone: string | undefined;
  address: string | undefined;
  city: string | undefined;
};

type AuthenticatedUser = UserData & {
  skills: string[] | undefined;
};

type Skill = {
  id: string;
  name?: string;
};
