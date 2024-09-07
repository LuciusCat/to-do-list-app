type ButtonProps = {
  className: string;
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({ className, onClick, children }: ButtonProps) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
);

export default Button;
