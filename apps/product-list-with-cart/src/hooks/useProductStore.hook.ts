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

export const productItemStore = {
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
  updateProductItemQuantity(id: string, quantity: number) {
    productItems = productItems.map((productItem) =>
      productItem.id === id
        ? {
            ...productItem,
            quantity,
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

function useProductItemStore<T extends (productItems: ProductItem[]) => any>(
  selector: T,
): ReturnType<T>;
function useProductItemStore(selector?: undefined): ProductItem[];
function useProductItemStore<T extends (productItems: ProductItem[]) => any>(
  selector?: T,
): any {
  const productItems = useSyncExternalStore(
    productItemStore.subscribe,
    productItemStore.getSnapshot,
  );

  return selector ? selector(productItems) : productItems;
}

export default useProductItemStore;
