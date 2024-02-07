interface Props {
    itemsInCart?: string[];
}

const Cart: React.FC<Props> = ({ itemsInCart }) => (
    <div className="content-max-width mx-auto border">
        <h2>Shopping Cart</h2>
        <div>
            {itemsInCart ? (
                itemsInCart.map((item) => <div key={item}>{item}</div>)
            ) : (
                <h3>Your cart is empty</h3>
            )}
        </div>
    </div>
);

export default Cart;
