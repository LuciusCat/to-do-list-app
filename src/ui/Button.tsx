type ButtonProps = {
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
};

const Button = ({ className, onClick, children, type }: ButtonProps) => (
  <button type={type} onClick={onClick} className={className}>
    {children}
  </button>
);

export default Button;
