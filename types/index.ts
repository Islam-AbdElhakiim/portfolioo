import { ReactElement } from "react";

export interface aboutDataType {
  title: string;
  info: {
    title: string;
    company?:string,
    url?:string,
    _icons?: ReactElement[];
    stage?: string;
  }[];
}

export interface navDataType {
  name: string;
  path: string;
  icon: ReactElement;
}

export interface socialLinksType {
  name: string;
  path: string;
  icon: ReactElement;
}
