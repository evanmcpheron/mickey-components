import { Font } from "@/components/font";
import {
  StyledCard,
  StyledCardBody,
  StyledCardFooter,
  StyledCardHeader,
} from "./card.styled";

export type CardVariant = "elevated" | "outlined" | "plain";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  elevation?: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 24;
  padding?: number | string;
  radius?:
    | "none"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "pill"
    | number
    | string;
  fullWidth?: boolean;
  hoverable?: boolean;
  header?: {
    primary?: string;
    secondary?: string;
  };
  body?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card = ({
  variant = "outlined",
  elevation,
  padding = 1,
  radius = "md",
  fullWidth = false,
  hoverable = false,
  header,
  body,
  footer,
  ...rest
}: CardProps) => {
  return (
    <StyledCard
      variant={variant}
      elevation={elevation}
      padding={padding}
      radius={radius}
      fullWidth={fullWidth}
      hoverable={hoverable}
      {...rest}
    >
      {header && (
        <StyledCardHeader>
          {header?.primary && (
            <Font variant="h5" weight={500} uppercase>
              {header.primary}
            </Font>
          )}
          {header?.secondary && (
            <Font variant="body2" tone="primary">
              {header.secondary}
            </Font>
          )}
        </StyledCardHeader>
      )}
      {body && (
        <StyledCardBody>
          <Font variant="body1">{body}</Font>
        </StyledCardBody>
      )}
      {footer && (
        <StyledCardFooter>
          <Font variant="body1">{footer}</Font>
        </StyledCardFooter>
      )}
    </StyledCard>
  );
};
