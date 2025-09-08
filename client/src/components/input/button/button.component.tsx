import type { Role, Variant } from "@/helpers";
import { StyledButton } from "./button.styled";
import { Font } from "@/components";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onPress?: () => void;
  variant?: Variant;
  color?: Role;
  disabled?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  onPress,
  color,
  variant,
  disabled,
  fullWidth,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      $color={color}
      $variant={variant}
      $fullWidth={fullWidth}
      disabled={disabled}
      onClick={onPress}
      {...rest}
    >
      <Font variant="button">{children}</Font>
    </StyledButton>
  );
};
