import MainButton from '@/components/ui/MainButton';

type Props = {
    label: string;
    disabled?: boolean;
    onClick: () => void;
};

export default function DeleteButton({ label, disabled = false, onClick }: Props) {
    return (
        <MainButton
            label={label}
            style="text-white border-red-500 bg-red-500"
            disabled={disabled}
            fullWidth
            shadow
            onClick={onClick}
        />
    );
}
