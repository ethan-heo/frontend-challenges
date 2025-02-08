import { useSyncExternalStore } from "react";
import { ProductItem } from "./useProductStore.hook";

interface Cart {
  activeConfirm: boolean;
  orderItems: OrderItem[];
}

export interface OrderItem {
  productId: string;
  productName: string;
  productQuantity: number;
  productPrice: number;
  productImage: ProductItem["image"];
}

type Listener = () => void;

let listeners: Listener[] = [];
let cart: Cart = {
  activeConfirm: false,
  orderItems: [],
};

const emitChange = () => {
  for (const listener of listeners) {
    listener();
  }
};

export const cartStore = {
  clearOrderItems() {
    cart = {
      ...cart,
      orderItems: [],
    };

    emitChange();
  },
  toggleConfirm() {
    cart = {
      ...cart,
      activeConfirm: !cart.activeConfirm,
    };
    emitChange();
  },
  addOrderItem(productItem: ProductItem) {
    cart = {
      ...cart,
      orderItems: [
        {
          productId: productItem.id,
          productName: productItem.name,
          productPrice: productItem.price,
          productQuantity: productItem.quantity,
          productImage: productItem.image,
        },
        ...cart.orderItems,
      ],
    };

    emitChange();
  },
  updateOrderItemQuantity(productId: string, productQuantity: number) {
    cart = {
      ...cart,
      orderItems: cart.orderItems.map((orderItem) =>
        orderItem.productId === productId
          ? { ...orderItem, productQuantity }
          : orderItem,
      ),
    };

    emitChange();
  },
  removeOrderItem(productId: string) {
    cart = {
      ...cart,
      orderItems: cart.orderItems.filter(
        (orderItem) => orderItem.productId !== productId,
      ),
    };

    emitChange();
  },
  subscribe(listener: Listener) {
    listeners = [listener, ...listeners];

    return () => {
      listeners = listeners.filter((_listener) => _listener !== listener);
    };
  },
  getSnapshot() {
    return cart;
  },
};

function useCartStore<T extends (cart: Cart) => any>(
  selector: T,
): ReturnType<T>;
function useCartStore(selector?: undefined): Cart;
function useCartStore<T extends (cart: Cart) => any>(
  selector?: T,
): ReturnType<T> {
  const cart = useSyncExternalStore(cartStore.subscribe, cartStore.getSnapshot);

  return selector ? selector(cart) : cart;
}

export default useCartStore;
