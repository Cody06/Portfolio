import { Book } from '@/app/lib/types';
import useStore from './Store';
import PrimaryButton from './ui/PrimaryButton';

type Props = {
    item: Book;
};

export default function AddToCartButton({ item }: Props) {
    const { addToCart } = useStore();

    return <PrimaryButton label="Add to Cart" onClick={() => addToCart(item)} />;
}
