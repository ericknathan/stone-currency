import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton, StyledButtonProps } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, StyledButtonProps {
  children: ReactNode;
}

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  )
}