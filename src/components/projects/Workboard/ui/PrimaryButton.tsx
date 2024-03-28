import MainButton from '@/components/ui/MainButton';

type Props = {
    label: string;
    disabled?: boolean;
    type?: 'button' | 'submit';
    onClick?: () => void;
};

export default function PrimaryButton({
    label,
    disabled = false,
    type = 'button',
    onClick,
}: Props) {
    return (
        <MainButton
            label={label}
            style="text-white border-green-500 bg-green-500"
            disabled={disabled}
            fullWidth
            shadow
            type={type}
            onClick={onClick}
        />
    );
}
