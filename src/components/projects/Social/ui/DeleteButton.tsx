import MainButton from '@/components/ui/MainButton';

type Props = {
    label: string;
    disabled?: boolean;
    size?: 'sm' | 'md';
    onClick: () => void;
};

export default function DeleteButton({ label, disabled = false, size = 'md', onClick }: Props) {
    return (
        <MainButton
            label={label}
            style="text-white border-red-500 bg-red-500"
            disabled={disabled}
            rounded
            shadow
            size={size}
            onClick={onClick}
        />
    );
}
