import MainButton from '@/components/ui/MainButton';

type Props = {
    onClick: () => void;
};

export default function CancelButton({ onClick }: Props) {
    return (
        <MainButton
            label="Cancel"
            style="text-neutral-800 border-neutral-300 bg-neutral-300"
            fullWidth
            shadow
            onClick={onClick}
        />
    );
}
