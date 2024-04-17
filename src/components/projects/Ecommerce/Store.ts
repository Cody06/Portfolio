import { create } from 'zustand';
import { Book } from '@/app/lib/types';
import { books } from '@/app/lib/placeholder-data';

type Store = {
    cartItems: Book[];
    myBooks: Book[];
    storeItems: Book[];
    addToCart: (item: Book) => void;
    checkout: () => void;
    removeFromCart: (id: number) => void;
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
                };
            }),
        })),
}));

export default useStore;
