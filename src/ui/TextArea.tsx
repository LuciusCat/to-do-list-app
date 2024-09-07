type TextAreaProps = {
  className: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({
  className,
  value,
  placeholder,
  onChange,
}: TextAreaProps) => (
  <textarea
    className={className}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default TextArea;
