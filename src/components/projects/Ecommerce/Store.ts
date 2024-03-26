import { create } from 'zustand';
import { Book } from './types';
import books from './books';

type Store = {
    cartItems: Book[];
    myBooks: Book[];
    storeItems: Book[];
    addToCart: (item: Book) => void;
    checkout: () => void;
    removeFromCart: (id: string) => void;
};

const useStore = create<Store>()((set) => ({
    cartItems: [],
    myBooks: [],
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
    checkout: () =>
        set((state) => ({
            myBooks: state.cartItems,
            cartItems: [],
            storeItems: state.storeItems.map((storeItem) => {
                return {
                    ...storeItem,
                    inCart: false,
                };
            }),
        })),
}));

export default useStore;
