import { Dispatch, SetStateAction } from 'react';
import { Book, Views } from '../types';
import SectionHeader from './SectionHeader';

type Props = {
    onDeleteItem: (id: number) => void;
    setSelectedView: Dispatch<SetStateAction<Views>>;
    itemsInCart?: Book[];
};

export default function Cart({ onDeleteItem, setSelectedView, itemsInCart }: Props) {
    let initialValue = 0;
    const total = itemsInCart?.reduce(
        (accumulator, item) => accumulator + item.price,
        initialValue,
    );

    return (
        <section className="content-max-width ml-[30%]">
            {itemsInCart?.length ? (
                <>
                    <SectionHeader title="Shopping Cart" />
                    <table className="mb-4">
                        <thead className="border-b-2 border-grey-90">
                            <tr>
                                <th>Book</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody className="border-b-2 border-grey-90">
                            {itemsInCart.map((item) => (
                                <tr key={item.id}>
                                    <td className="space-x-2">
                                        <span>{item.title}</span>
                                        <button
                                            className="text-xs text-blue-100"
                                            onClick={() => onDeleteItem(item.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                    <td>${item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Subtotal:</td>
                                <td>${total}</td>
                            </tr>
                        </tfoot>
                    </table>
                    <button
                        className="px-4 py-2 bg-orange-100 rounded-xl
                                    hover:brightness-90 active:brightness-75"
                        onClick={() => setSelectedView('checkout')}
                    >
                        Proceed to Checkout
                    </button>
                </>
            ) : (
                <SectionHeader title="Your cart is empty..." />
            )}
        </section>
    );
}
