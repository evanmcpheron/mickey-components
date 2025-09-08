// Font.tsx
import React, {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementType,
} from "react";
import { StyledFont } from "./font.styled";

type AsProp<C extends ElementType> = { as?: C };
type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

export type PolymorphicComponentProp<C extends ElementType, Props> = Props &
  AsProp<C> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithoutRef<C>["ref"];

export type FontVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "button"
  | "caption"
  | "overline";

export type FontAlign = "inherit" | "left" | "center" | "right" | "justify";
export type FontTone =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "muted";
export type FontWeight = number | "light" | "regular" | "medium" | "bold";

type FontOwnProps = {
  variant?: FontVariant;
  align?: FontAlign;
  gutterBottom?: boolean;
  paragraph?: boolean;
  noWrap?: boolean;
  clamp?: number;
  tone?: FontTone;
  weight?: FontWeight;
  uppercase?: boolean;
  children?: React.ReactNode;
};

// Default element is "span"
export type FontProps<C extends ElementType> = PolymorphicComponentProp<
  C,
  FontOwnProps
>;

const defaultComponentByVariant = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  button: "span",
  caption: "span",
  overline: "span",
};

// Define a callable polymorphic component type
type FontComponent = <C extends ElementType = "span">(
  props: FontProps<C> & { ref?: PolymorphicRef<C> }
) => React.ReactElement | null;

const FontInner = <C extends ElementType = "span">(
  {
    as,
    variant = "body1",
    align = "inherit",
    gutterBottom = false,
    paragraph = false,
    noWrap = false,
    clamp,
    tone = "inherit",
    weight,
    uppercase = false,
    children,
    ...rest
  }: FontProps<C>,
  ref: PolymorphicRef<C>
) => {
  const Component =
    (as as C) || ((paragraph ? "p" : defaultComponentByVariant[variant]) as C);

  return (
    <StyledFont
      as={Component as any}
      ref={ref as any}
      $variant={variant}
      $align={align}
      $gutterBottom={gutterBottom}
      $paragraph={paragraph}
      $noWrap={noWrap}
      $clamp={clamp}
      $tone={tone}
      $weight={weight}
      $uppercase={uppercase}
      {...rest}
    >
      {children}
    </StyledFont>
  );
};

export const Font = forwardRef(FontInner) as FontComponent;
