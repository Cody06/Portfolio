import MainButton from '@/components/ui/MainButton';

type Props = {
    label: string;
    disabled?: boolean;
    href?: string;
    size?: 'sm' | 'md';
    type?: 'button' | 'submit';
    onClick?: () => void;
};

export default function PrimaryButton({
    label,
    disabled = false,
    href,
    size = 'md',
    type = 'button',
    onClick,
}: Props) {
    return (
        <MainButton
            label={label}
            style="text-black border-amber-600 bg-amber-600"
            disabled={disabled}
            href={href}
            shadow
            size={size}
            type={type}
            onClick={onClick}
        />
    );
}
