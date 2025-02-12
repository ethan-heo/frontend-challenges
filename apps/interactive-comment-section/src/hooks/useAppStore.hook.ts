import { useSyncExternalStore } from "react";

export interface App {
  deleteModal: {
    active: boolean;
    parentCommentId?: number;
    commentId: number;
  };
}

let listeners: (() => void)[] = [];
let app: App = {
  deleteModal: {
    active: false,
    commentId: -1,
  },
};

const emitChange = () => {
  listeners.forEach((listener) => listener());
};

export const AppModule = {
  toggleDeleteModal(
    comment: {
      commentId: number;
      parentCommentId?: number;
    } = app.deleteModal,
  ) {
    app = {
      ...app,
      deleteModal: {
        ...app.deleteModal,
        ...comment,
        active: !app.deleteModal.active,
      },
    };
    emitChange();
  },
  subscribe(listener: () => void) {
    listeners = [listener, ...listeners];

    return () => {
      listeners = listeners.filter((_listener) => _listener !== listener);
    };
  },
  getSnapshot() {
    return app;
  },
};

function useAppStore<T extends (app: App) => any>(selector: T): ReturnType<T>;
function useAppStore(): App;
function useAppStore<T extends (app: App) => any>(selector?: T): ReturnType<T> {
  const app = useSyncExternalStore(AppModule.subscribe, AppModule.getSnapshot);

  return selector ? selector(app) : app;
}

export default useAppStore;
