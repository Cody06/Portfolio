interface Props {
    value: string;
    onChange: (ev: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const NewCardInput: React.FC<Props> = ({ value, onChange }) => (
    <textarea
        className="p-2 rounded-md shadow-md"
        value={value}
        onChange={onChange}
        placeholder="Enter a note"
    />
);

export default NewCardInput;
