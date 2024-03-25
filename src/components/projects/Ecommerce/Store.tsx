import { create } from 'zustand';
import { Book } from './types';
import books from './books';

type Store = {
    cartItems: Book[];
    storeItems: Book[];
    addToCart: (item: Book) => void;
    removeFromCart: (id: string) => void;
};

const useStore = create<Store>()((set) => ({
    cartItems: [],
    storeItems: books,
    addToCart: (item) =>
        set((state) => ({
            cartItems: [...state.cartItems, item],
            storeItems: state.storeItems.map((storeItem) => {
                if (storeItem.id === item.id) {
                    return {
                        ...storeItem,
                        inCart: true,
                    };
                } else {
                    return storeItem;
                }
            }),
        })),
    removeFromCart: (id) =>
        set((state) => ({
            cartItems: state.cartItems.filter((item) => item.id !== id),
            storeItems: state.storeItems.map((storeItem) => {
                if (storeItem.id === id) {
                    return {
                        ...storeItem,
                        inCart: false,
                    };
                } else {
                    return storeItem;
                }
            }),
        })),
}));

export default useStore;
