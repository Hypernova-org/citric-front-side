import { StateCreator } from "zustand";
import get from "lodash/get";
import { storage } from "services";

export type TTheme = "dark" | "light";
const currentUrl = window.location.href;
const pathname = new URL(currentUrl).pathname;

export interface ISystemInitialState {
  lang: any;
  theme: TTheme;
  menu: string
}

export const SystemInitialState: ISystemInitialState = {
  lang: storage.get("i18nextLng") || "uz",
  theme: "light",
  menu: pathname,
};

export interface ISystem {
  system: ISystemInitialState;
  setLang: (action: { [key: string]: any }) => void;
  setSelectedMenu: (data: string) => any
  changeTheme: (data: string) => any
}

export const systemSlice: StateCreator<ISystem, [], []> = (set): ISystem => {
  return {
    system: SystemInitialState,
    setLang: (action: { [key: string]: any }) => {
      return set((state) => {
        return {
          system: {
            ...get(state, "system"),
            lang: "uz",
          },
        };
      });
    },
    setSelectedMenu: (action: string) => {
      return set((state: any) => {
        return {
          system: {
            ...get(state, 'system'),
            menu: action,
          },
        }
      })
    },
    changeTheme: (action: string) => {
      return set((state: any) => {
        return {
          system: {
            ...get(state, 'system'),
            theme: action,
          },
        }
      })
    },
  };
};
