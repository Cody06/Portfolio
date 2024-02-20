interface Props {
    id: string;
    label: string;
    name: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const Input: React.FC<Props> = ({ id, label, name, type, value, onChange, error }) => {
    /*  Input comes with floating label:
        - label takes the placeholder position when "placeholder is shown" (placeholder is transparent)
        - when placeholder goes away or there's focus, label floats to the top
    */

    return (
        // pt to prevent clipping with other elements
        <div className="pt-3">
            <div className="relative border-2 bg-white border-grey-110 rounded-lg">
                <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    placeholder={label}
                    onChange={onChange}
                    className="peer placeholder-transparent w-full px-2 py-3
                        bg-white rounded-lg focus:outline-none"
                />
                {/* label needs to be after input for peer selector to work */}
                <label
                    htmlFor={id}
                    className="absolute left-1 -top-3.5 text-sm p-1 text-grey-110 
                        bg-white rounded-t-md
                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base
                        peer-focus:-top-3.5 peer-focus:text-sm
                        transition-all"
                >
                    {label}
                </label>
            </div>
            <p className="pl-2 text-sm text-red">{error}</p>
        </div>
    );
};

export default Input;
