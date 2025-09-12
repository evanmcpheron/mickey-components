import React, { useRef } from "react";
import { Container } from "./press.styled";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";
import { getClassName } from "@/helpers/style/style.helpers";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { OnPressProps } from "./press.types";

export const OnPress: React.FC<OnPressProps> = ({
  children,
  active,
  className,
  style,
  disabled,
  ...more
}) => {
  const domRef: MickeyObject = useRef(null);

  const { onPress, onOut, onMove, onUp, onDown, onOver, groupId } = more;
  const handleOnOver = () => {
    if (domRef.current) {
      const childrenElements = domRef.current.children;
      for (let i = 0; i < childrenElements.length; i++) {
        childrenElements[i].classList.add("mickey-hover");
      }
    }
  };

  const handleOnOut = () => {
    if (domRef.current) {
      const childrenElements = domRef.current.children;
      for (let i = 0; i < childrenElements.length; i++) {
        childrenElements[i].classList.remove("mickey-hover");
      }
    }
  };

  const pointerEvents = !disabled
    ? {
        onPress,
        onOut: (e: MickeyObject) => {
          if (onOut) {
            onOut(e);
          }
          handleOnOut();
        },
        onMove,
        onUp,
        onDown,
        onOver: (e: MickeyObject) => {
          if (onOver) {
            onOver(e);
          }
          handleOnOver();
        },
        groupId,
      }
    : {};

  usePointerEvent({ element: domRef, active: active, ...pointerEvents });

  const internalProperties = removeUndefined({
    className: getClassName("mickey-press", className),
    style: { ...(style || {}) },
  });

  return (
    <Container ref={domRef} disabled={disabled} {...internalProperties}>
      {children}
    </Container>
  );
};
