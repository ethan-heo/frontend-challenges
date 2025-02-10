import { useSyncExternalStore } from "react";
import data from "../assets/data.json";

export interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

let listeners: (() => void)[] = [];
let user: User | undefined;

const emitChange = () => {
  listeners.forEach((listener) => listener());
};

export const userModule = {
  async init() {
    user = await new Promise((resolve) => resolve(data.currentUser));

    emitChange();
  },
  subscribe(listener: () => void) {
    listeners = [listener, ...listeners];

    return () => {
      listeners = listeners.filter((_listener) => _listener !== listener);
    };
  },
  getSnapshot() {
    return user;
  },
};

function useUserStore<T extends (user?: User) => any>(
  selector: T,
): ReturnType<T>;
function useUserStore(): User;
function useUserStore<T extends (user?: User) => any>(
  selector?: T,
): ReturnType<T> {
  const user = useSyncExternalStore(
    userModule.subscribe,
    userModule.getSnapshot,
  );

  return selector ? selector(user) : user;
}

export default useUserStore;
