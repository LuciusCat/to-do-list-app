type InputFieldProps = {
  className: string;
  id?: string;
  type: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const InputField = ({
  className,
  id,
  type,
  value,
  placeholder,
  onChange,
  required,
}: InputFieldProps) => (
  <input
    className={className}
    id={id}
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    required={required}
  />
);

export default InputField;
