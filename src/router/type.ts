import { ReactNode } from "react";

export interface RouterType {
  path: string;
  element: ReactNode | null;
  children?: RouterType[];
  name: string;
  isAuth?: boolean;
}
