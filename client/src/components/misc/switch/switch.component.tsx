import React, { Children, isValidElement } from "react";
import type { SwitchProps, CaseProps, DefaultProps } from "./switch.types";

const Switch: React.FC<SwitchProps> & {
  Case: React.FC<CaseProps>;
  Default: React.FC<DefaultProps>;
} = ({ children }) => {
  let match = false;

  const isCaseElement = (
    node: React.ReactNode
  ): node is React.ReactElement<CaseProps> =>
    isValidElement(node) && node.type === Switch.Case;

  const isDefaultElement = (
    node: React.ReactNode
  ): node is React.ReactElement<DefaultProps> =>
    isValidElement(node) && node.type === Switch.Default;

  const cases = Children.toArray(children).map((child) => {
    if (isCaseElement(child) && child.props.condition) {
      match = true;
      return child;
    }
    if (isDefaultElement(child) && !match) {
      return child;
    }
    return null;
  });

  return <>{cases}</>;
};

Switch.Case = ({ condition, children }: CaseProps) =>
  condition ? <>{children}</> : null;

Switch.Default = ({ children }: DefaultProps) => <>{children}</>;

Switch.displayName = "Switch";
Switch.Case.displayName = "Switch.Case";
Switch.Default.displayName = "Switch.Default";

export { Switch };
