import MainButton from '@/components/ui/MainButton';

type Props = {
    label: string;
    disabled?: boolean;
    size?: 'sm' | 'md';
    type?: 'button' | 'submit';
    onClick?: () => void;
};

export default function PrimaryButton({
    label,
    disabled = false,
    size = 'md',
    type = 'button',
    onClick,
}: Props) {
    return (
        <MainButton
            label={label}
            style="text-white border-sky-600 bg-sky-600"
            disabled={disabled}
            rounded
            shadow
            size={size}
            type={type}
            onClick={onClick}
        />
    );
}
