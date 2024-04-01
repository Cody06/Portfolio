import MainButton from '@/components/ui/MainButton';

type Props = {
    label: string;
    disabled?: boolean;
    href?: string;
    size?: 'sm' | 'md';
    type?: 'button' | 'submit';
    onClick?: () => void;
};

export default function SecondaryButton({
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
            style="text-white border-sky-900 bg-sky-900"
            disabled={disabled}
            href={href}
            shadow
            size={size}
            type={type}
            onClick={onClick}
        />
    );
}
