import { useSyncExternalStore } from "react";
import data from "../data.json";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export interface ProductItem extends Product {
  quantity: number;
  selected: boolean;
}

type Listener = () => void;

let productItems: ProductItem[] = [];
let listeners: Listener[] = [];

const emitChange = () => {
  for (const listener of listeners) {
    listener();
  }
};

const productItemStore = {
  async init() {
    const products = await new Promise<Product[]>((resolve) => resolve(data));

    productItems = products.map((product) => ({
      ...product,
      quantity: 1,
      selected: false,
    }));
    emitChange();
  },
  selectProductItem(id: string) {
    productItems = productItems.map((productItem) =>
      productItem.id === id
        ? { ...productItem, selected: !productItem.selected }
        : productItem,
    );

    emitChange();
  },
  increaseQuantity(id: string) {
    productItems = productItems.map((productItem) =>
      productItem.id === id
        ? {
            ...productItem,
            quantity: productItem.quantity + 1,
          }
        : productItem,
    );

    emitChange();
  },
  decreaseQuantity(id: string) {
    productItems = productItems.map((productItem) =>
      productItem.id === id
        ? {
            ...productItem,
            quantity:
              productItem.quantity - 1 > 0
                ? productItem.quantity - 1
                : productItem.quantity,
          }
        : productItem,
    );

    emitChange();
  },
  subscribe(listener: Listener) {
    listeners = [listener, ...listeners];

    return () => {
      listeners = listeners.filter((_listener) => _listener !== listener);
    };
  },
  getSnapshot() {
    return productItems;
  },
};

const useProductItemStore = () => {
  const productItems = useSyncExternalStore(
    productItemStore.subscribe,
    productItemStore.getSnapshot,
  );

  return {
    productItems,
    init: () => {
      productItemStore.init();
    },
    select: (id: string) => {
      productItemStore.selectProductItem(id);
    },
    increase: (id: string) => {
      productItemStore.increaseQuantity(id);
    },
    decrease: (id: string) => {
      productItemStore.decreaseQuantity(id);
    },
  };
};

export default useProductItemStore;
