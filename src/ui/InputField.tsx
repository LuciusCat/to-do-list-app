type InputFieldProps = {
  className: string;
  type: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({
  className,
  type,
  value,
  placeholder,
  onChange,
}: InputFieldProps) => (
  <input
    className={className}
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default InputField;
