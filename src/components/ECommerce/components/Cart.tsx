import { Book } from '../types';

interface Props {
    onDeleteItem: (id: number) => void;
    itemsInCart?: Book[];
}

const Cart: React.FC<Props> = ({ onDeleteItem, itemsInCart }) => {
    let initialValue = 0;
    const total = itemsInCart?.reduce(
        (accumulator, item) => accumulator + item.price,
        initialValue,
    );

    return (
        <div className="content-max-width mx-auto border">
            <h2 className="text-lg font-bold">Shopping Cart</h2>

            {itemsInCart?.length ? (
                <table>
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
            ) : (
                <h2>Your cart is Empty</h2>
            )}
        </div>
    );
};

export default Cart;
