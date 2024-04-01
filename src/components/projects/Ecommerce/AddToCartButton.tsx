import { Book } from './types';
import useStore from './Store';
import PrimaryButton from './ui/PrimaryButton';
import SecondaryButton from './ui/SecondaryButton';

type Props = {
    item: Book;
};

export default function AddToCartButton({ item }: Props) {
    const { addToCart } = useStore();

    return (
        <>
            {item.inCart ? (
                <SecondaryButton label="In Cart" href="/ecommerce/cart" />
            ) : (
                <PrimaryButton label="Add to Cart" onClick={() => addToCart(item)} />
            )}
        </>
    );
}
