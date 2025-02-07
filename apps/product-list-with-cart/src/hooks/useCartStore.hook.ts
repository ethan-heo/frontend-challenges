import { useSyncExternalStore } from "react";
import { ProductItem } from "./useProductStore.hook";

export interface OrderItem {
  productId: string;
  productName: string;
  productQuantity: number;
  productPrice: number;
}

type Listener = () => void;

let listeners: Listener[] = [];
let orderItems: OrderItem[] = [];

const emitChange = () => {
  for (const listener of listeners) {
    listener();
  }
};

export const cartStore = {
  addOrderItem(productItem: ProductItem) {
    orderItems.push({
      productId: productItem.id,
      productName: productItem.name,
      productPrice: productItem.price,
      productQuantity: productItem.quantity,
    });

    emitChange();
  },
  updateOrderItemQuantity(productId: string, productQuantity: number) {
    orderItems = orderItems.map((orderItem) =>
      orderItem.productId === productId
        ? { ...orderItem, productQuantity }
        : orderItem,
    );

    emitChange();
  },
  removeOrderItem(productId: string) {
    orderItems = orderItems.filter(
      (orderItem) => orderItem.productId !== productId,
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
    return orderItems;
  },
};

function useCartStore<T extends (orderItems: OrderItem[]) => any>(
  selector: T,
): ReturnType<T>;
function useCartStore(selector?: undefined): OrderItem[];
function useCartStore<T extends (orderItems: OrderItem[]) => any>(
  selector?: T,
): ReturnType<T> {
  const orderItems = useSyncExternalStore(
    cartStore.subscribe,
    cartStore.getSnapshot,
  );

  return selector ? selector(orderItems) : orderItems;
}

export default useCartStore;
