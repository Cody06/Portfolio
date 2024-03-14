type Props = {
    id: string;
    label: string;
    maxLength: number;
    name: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error?: string;
    required?: boolean;
};

export default function Input({
    id,
    label,
    maxLength,
    name,
    type,
    value,
    onChange,
    error,
    required,
}: Props) {
    /*  Input comes with floating label:
        - label takes the placeholder position when "placeholder is shown" (placeholder is transparent)
        - when placeholder goes away or there's focus, label floats to the top
    */

    return (
        // pt to prevent clipping with other elements
        <div className="pt-3">
            <div className="relative border-2 bg-white border-grey-110 rounded-lg">
                {type === 'textarea' ? (
                    <textarea
                        id={id}
                        name={name}
                        maxLength={maxLength}
                        value={value}
                        placeholder={label}
                        required={required}
                        onChange={onChange}
                        className="peer placeholder-transparent w-full px-2 py-3
                        text-black bg-white rounded-lg focus:outline-none"
                        rows={2}
                    />
                ) : (
                    <input
                        type={type}
                        id={id}
                        name={name}
                        value={value}
                        maxLength={maxLength}
                        placeholder={label}
                        required={required}
                        onChange={onChange}
                        className="peer placeholder-transparent w-full px-2 py-3
                            text-black bg-white rounded-lg focus:outline-none"
                    />
                )}
                {/* label needs to be after input for peer selector to work */}
                <label
                    htmlFor={id}
                    className="absolute left-1 -top-3.5 text-sm p-1 text-grey-110 
                        bg-white rounded-t-md
                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base
                        peer-focus:-top-3.5 peer-focus:text-sm
                        hover:cursor-text transition-all"
                >
                    {label}
                </label>
            </div>
            {/* Add height as placeholder to not move elements when there is an error */}
            <p className="pl-2 h-[1.375rem] text-sm text-red">{error}</p>
        </div>
    );
}
