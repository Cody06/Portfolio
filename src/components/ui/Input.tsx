type Props = {
    id: string;
    label: string;
    maxLength: number;
    name: string;
    type: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    disabled?: boolean;
    error?: string;
    required?: boolean;
    shadow?: boolean;
};

export default function Input({
    id,
    label,
    maxLength,
    name,
    type,
    value,
    onChange,
    disabled = false,
    error,
    required,
    shadow = false,
}: Props) {
    /*  Input comes with floating label:
        - label takes the placeholder position when "placeholder is shown" (placeholder is transparent)
        - when placeholder goes away or there's focus, label floats to the top
    */

    const disabledStyle = 'bg-neutral-200 text-neutral-500';

    const style = `peer placeholder-transparent w-full px-2 py-3
        rounded-lg focus:outline-none 
        ${disabled ? disabledStyle : 'bg-white text-black'}
        ${shadow && 'shadow-lg'}`;

    return (
        // pt to prevent clipping with other elements
        <div className="pt-3">
            <div
                className={`relative border-2 rounded-lg
                ${disabled ? `border-neutral-400 ${disabledStyle}` : 'bg-white border-neutral-500'}`}
            >
                {type === 'textarea' ? (
                    <textarea
                        id={id}
                        name={name}
                        disabled={disabled}
                        maxLength={maxLength}
                        placeholder={label}
                        required={required}
                        value={value}
                        onChange={onChange}
                        className={style}
                        rows={2}
                    />
                ) : (
                    <input
                        type={type}
                        id={id}
                        name={name}
                        disabled={disabled}
                        maxLength={maxLength}
                        value={value}
                        placeholder={label}
                        required={required}
                        onChange={onChange}
                        className={style}
                    />
                )}
                {/* label needs to be after input for peer selector to work */}
                <label
                    htmlFor={id}
                    className={`absolute left-1 -top-3.5 text-sm p-1 text-neutral-500 
                        rounded-t-md
                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base
                        peer-focus:-top-3.5 peer-focus:text-sm
                        hover:cursor-text transition-all
                        ${disabled ? disabledStyle : 'bg-white'}`}
                >
                    {label}
                </label>
            </div>
            {/* Add height as placeholder to not move elements when there is an error */}
            <p className="pl-2 h-[1.375rem] text-sm text-red-500">{error}</p>
        </div>
    );
}
