import MainButton from '@/components/ui/MainButton';

type Props = {
    size?: 'sm' | 'md';
    onClick: () => void;
};

export default function CancelButton({ size, onClick }: Props) {
    console.log(size);
    return (
        <MainButton
            label="Cancel"
            style="text-neutral-800 border-neutral-300 bg-neutral-300"
            rounded
            shadow
            size={size}
            onClick={onClick}
        />
    );
}
