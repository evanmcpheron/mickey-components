import { Label } from "@/components/font";
import {
  StyledCard,
  StyledCardBody,
  StyledCardFooter,
  StyledCardHeader,
} from "./card.styled";
import { styles } from "@/helpers";

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
  fullWidth = true,
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
      {...(hoverable && { hoverable: true })}
      {...rest}
    >
      {header && (
        <StyledCardHeader>
          {header?.primary && <Label fontType="h4">{header.primary}</Label>}
          {header?.secondary && (
            <Label color={styles.color.primary.main}>{header.secondary}</Label>
          )}
        </StyledCardHeader>
      )}
      {body && (
        <StyledCardBody>
          <Label style={{ width: "100%" }}>{body}</Label>
        </StyledCardBody>
      )}
      {footer && (
        <StyledCardFooter>
          <Label style={{ width: "100%" }}>{footer}</Label>
        </StyledCardFooter>
      )}
    </StyledCard>
  );
};
