import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const StarOfDavidIcon: React.FC<
  IconProps & {
    type: "solid" | "regular" | "light" | "thin" | "duotone" | Dimensions;
  }
> = ({ type, size, color, active, className, style, ...more }) => {
  const domRef: MickeyObject = useRef(null);

  const { onPress, onOut, onMove, onUp, onDown, onOver, groupId } = more;
  const pointerEvents = {
    onPress,
    onOut,
    onMove,
    onUp,
    onDown,
    onOver,
    groupId,
  };

  usePointerEvent({ element: domRef, active: active, ...pointerEvents });

  const internalProperties = removeUndefined({
    className,
    style: { ...(style || {}) },
    active,
    size,
    color,
  });

  return (
    <StyledIcon ref={domRef} {...internalProperties}>
      {(() => {
        switch (type) {
          case "solid":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M404.2 309.5 383.1 344h42.3l-21.1-34.5zM371.4 256l-54-88H194.6l-54 88 54 88h122.8zm65.7 0 53.4 87c3.6 5.9 5.5 12.7 5.5 19.6 0 20.7-16.8 37.4-37.4 37.4H348.7l-56.2 91.5c-7.7 12.8-21.6 20.5-36.5 20.5s-28.8-7.7-36.6-20.5L163.3 400H53.4C32.8 400 16 383.2 16 362.6c0-6.9 1.9-13.7 5.5-19.6l53.4-87-53.4-87c-3.6-5.9-5.5-12.7-5.5-19.6 0-20.6 16.8-37.4 37.4-37.4h109.9l56.2-91.5C227.2 7.7 241.1 0 256 0s28.8 7.7 36.6 20.5l56.1 91.5h109.9c20.7 0 37.4 16.8 37.4 37.4 0 6.9-1.9 13.7-5.5 19.6zm-54-88 21.1 34.5 21.2-34.5zM283 112l-27-44-27 44zm-154.1 56H86.6l21.1 34.5zm-21.1 141.5L86.6 344h42.3zM229 400l27 44 27-44z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M408.9 301.9 378.2 352h61.5zM380.8 256l-58.9-96H190.1l-58.9 96 58.9 96h131.8zm56.3 0 53.4 87c3.6 5.9 5.5 12.7 5.5 19.6 0 20.7-16.8 37.4-37.4 37.4H348.7l-56.2 91.5c-7.7 12.8-21.6 20.5-36.5 20.5s-28.8-7.7-36.6-20.5L163.3 400H53.4C32.8 400 16 383.2 16 362.6c0-6.9 1.9-13.7 5.5-19.6l53.4-87-53.4-87c-3.6-5.9-5.5-12.7-5.5-19.6 0-20.6 16.8-37.4 37.4-37.4h109.9l56.2-91.5C227.2 7.7 241.1 0 256 0s28.8 7.7 36.6 20.5l56.1 91.5h109.9c20.7 0 37.4 16.8 37.4 37.4 0 6.9-1.9 13.7-5.5 19.6zm-58.9-96 30.7 50.1 30.8-50.1zm-85.8-48L256 52.7 219.6 112zm-158.6 48H72.3l30.8 50.1zm-30.7 141.9L72.3 352h61.5L103 301.9zM219.6 400l36.4 59.3 36.4-59.3z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="m418.3 286.6-50 81.4h90.2a5.378 5.378 0 0 0 4.6-8.2l-44.9-73.1zM399.5 256l-68.7-112H181.2l-68.7 112 68.7 112h149.6zm37.5 0 53.4 87c3.6 5.9 5.5 12.7 5.5 19.6 0 20.7-16.8 37.4-37.4 37.4H348.7l-56.2 91.5c-7.7 12.8-21.6 20.5-36.5 20.5s-28.8-7.7-36.6-20.5L163.3 400H53.4C32.8 400 16 383.2 16 362.6c0-6.9 1.9-13.7 5.5-19.6l53.4-87-53.4-87c-3.6-5.9-5.5-12.7-5.5-19.6 0-20.6 16.8-37.4 37.4-37.4h109.9l56.2-91.5C227.2 7.7 241.1 0 256 0s28.8 7.7 36.6 20.5l56.1 91.5h109.9c20.7 0 37.4 16.8 37.4 37.4 0 6.9-1.9 13.7-5.5 19.6l-53.4 87zm-68.6-112 50 81.4 44.9-73.1c.5-.9.8-1.8.8-2.8 0-3-2.4-5.4-5.4-5.4h-90.3zm-57.2-32-45.9-74.8c-2-3.2-5.5-5.2-9.3-5.2s-7.3 2-9.3 5.2L200.8 112zm-167.6 32H53.4a5.378 5.378 0 0 0-4.6 8.2l44.9 73.1 50-81.4zm-50 142.6-44.8 73.1c-.5.9-.8 1.8-.8 2.8 0 3 2.4 5.4 5.4 5.4h90.2l-50-81.4zM200.8 400l45.9 74.8c2 3.2 5.5 5.2 9.3 5.2s7.3-2 9.3-5.2l45.9-74.8z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M256 0c14.9 0 28.8 7.7 36.6 20.5l56.1 91.5h109.9c20.7 0 37.4 16.8 37.4 37.4 0 6.9-1.9 13.7-5.5 19.6l-53.4 87 53.4 87c3.6 5.9 5.5 12.7 5.5 19.6 0 20.7-16.8 37.4-37.4 37.4H348.7l-56.2 91.5c-7.7 12.8-21.6 20.5-36.5 20.5s-28.8-7.7-36.6-20.5L163.3 400H53.4C32.8 400 16 383.2 16 362.6c0-6.9 1.9-13.7 5.5-19.6l53.4-87-53.4-87c-3.6-5.9-5.5-12.7-5.5-19.6 0-20.6 16.8-37.4 37.4-37.4h109.9l56.2-91.5C227.2 7.7 241.1 0 256 0M153.5 128H53.4c-11.8 0-21.4 9.6-21.4 21.4 0 4 1.1 7.8 3.2 11.2l49.1 80.1zM93.7 256l78.5 128h167.6l78.5-128-78.5-128H172.2zm-9.4 15.3-49.1 80.1c-2.1 3.4-3.2 7.3-3.2 11.2 0 11.8 9.6 21.4 21.4 21.4h100zM182 400l51 83.2c4.9 8 13.6 12.8 22.9 12.8s18-4.9 22.9-12.8L330 400zm176.5-16h100c11.8 0 21.4-9.6 21.4-21.4 0-4-1.1-7.8-3.2-11.2l-49.1-80.1zm69.2-143.3 49.1-80.1c2.1-3.4 3.2-7.3 3.2-11.2 0-11.8-9.6-21.4-21.4-21.4h-100l69.2 112.7zM330 112l-51-83.2c-5-7.9-13.7-12.8-23-12.8s-18 4.9-22.9 12.8L182 112z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="m229 400 27 44 115.4-188 32.9 53.5-111.7 182c-7.8 12.8-21.7 20.5-36.6 20.5s-28.8-7.7-36.6-20.5L163.3 400zm-100.1-56L21.5 169c-3.6-5.9-5.5-12.7-5.5-19.6 0-20.6 16.8-37.4 37.4-37.4h109.9l-34.4 56H86.6l108 176zM229 112h229.6c20.7 0 37.4 16.8 37.4 37.4 0 6.9-1.9 13.7-5.5 19.6l-53.4 87-32.9-53.5 21.2-34.5H194.6z"
                />
                <path
                  className="aps-icon-foreground"
                  d="m283 112-27-44-115.4 188-32.9-53.5 111.7-182C227.2 7.7 241.1 0 256 0s28.8 7.7 36.6 20.5l56.1 91.5zm100.1 56 107.4 175c3.6 5.9 5.5 12.7 5.5 19.6 0 20.7-16.8 37.4-37.4 37.4H348.7l34.4-56h42.3l-108-176zM283 400H53.4C32.8 400 16 383.2 16 362.6c0-6.9 1.9-13.7 5.5-19.6l53.4-87 32.9 53.5L86.6 344h230.8z"
                />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
