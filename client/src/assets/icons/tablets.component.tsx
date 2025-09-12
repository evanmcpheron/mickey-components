import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TabletsIcon: React.FC<
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
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M614.3 247c16.3-25 25.7-54.9 25.7-87C640 71.6 568.4 0 480 0c-32.1 0-61.9 9.4-87 25.7-7.9 5.2-8.5 16.2-1.8 22.9l200.2 200.2c6.7 6.7 17.8 6.2 22.9-1.8M567 294.3c7.9-5.2 8.5-16.2 1.8-22.9L368.6 71.2c-6.7-6.7-17.8-6.2-22.9 1.8-16.3 25-25.7 54.9-25.7 87 0 88.4 71.6 160 160 160 32.1 0 61.9-9.4 87-25.7M301.5 368h-283c-9.5 0-16.9 8.2-15 17.5C18.9 457.8 83.1 512 160 512s141.1-54.2 156.5-126.5c2-9.3-5.5-17.5-15-17.5m0-32c9.5 0 16.9-8.2 15-17.5C301.1 246.2 236.9 192 160 192S18.9 246.2 3.5 318.5c-2 9.3 5.5 17.5 15 17.5z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M608.8 254.9c-4.7 6.4-9.9 12.5-15.7 18.2s-11.9 11-18.2 15.7c-62.6 46.2-151.3 41-208-15.7s-62-145.4-15.7-208c4.7-6.4 9.9-12.5 15.7-18.2s11.9-11 18.2-15.7c62.6-46.2 151.3-41 208 15.7s62 145.4 15.7 208M559.2 80.8c-37.9-37.9-96.2-43-139.6-15.1l154.7 154.7c27.8-43.4 22.8-101.7-15.1-139.6m-18.8 173.5L385.7 99.6c-27.8 43.4-22.8 101.7 15.1 139.6s96.2 43 139.6 15.1M318.2 328q1.8 11.7 1.8 24c0 12.3-.6 16.2-1.8 24-11.6 77-78 136-158.2 136S13.4 453 1.8 376Q0 364.3 0 352c0-12.3.6-16.2 1.8-24 11.6-77 78-136 158.2-136s146.6 59 158.2 136M160 240c-53.6 0-98.4 37.7-109.4 88h218.8c-11-50.3-55.8-88-109.4-88m0 224c53.6 0 98.4-37.7 109.4-88H50.6c11 50.3 55.8 88 109.4 88"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M603.9 261.3c-3.4 4.1-6.9 8.1-10.8 11.9s-7.8 7.4-11.9 10.8c-62.8 51.5-155.7 47.9-214.4-10.8S304.5 121.6 356 58.8c3.4-4.1 6.9-8.1 10.8-11.9s7.8-7.4 11.9-10.8c62.8-51.5 155.7-47.9 214.4 10.8s62.3 151.6 10.8 214.4M570.5 69.5c-46.2-46.2-118.8-49.7-169-10.6l179.6 179.6c39.1-50.2 35.5-122.8-10.6-169m-12 191.6L378.9 81.5c-39.1 50.2-35.5 122.8 10.6 169s118.8 49.7 169 10.6M319.2 336c.5 5.3.8 10.6.8 16s-.3 10.7-.8 16c-8 80.9-76.2 144-159.2 144S8.8 448.9.8 368c-.5-5.3-.8-10.6-.8-16s.3-10.7.8-16C8.8 255.1 77 192 160 192s151.2 63.1 159.2 144M160 224c-65.3 0-119.1 48.9-127 112h254c-7.9-63.1-61.7-112-127-112m0 256c65.3 0 119.1-48.9 127-112H33c7.9 63.1 61.7 112 127 112"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M576 267.3 372.7 64c-22.8 25.5-36.7 59.1-36.7 96 0 79.5 64.5 144 144 144 36.9 0 70.5-13.9 96-36.7m11.3-11.3c22.8-25.5 36.7-59.1 36.7-96 0-79.5-64.5-144-144-144-36.9 0-70.5 13.9-96 36.7zM320 160a160 160 0 1 1 320 0 160 160 0 1 1-320 0m-16.2 200H16.2c4.2 75.8 67 136 143.8 136s139.6-60.2 143.8-136m0-16c-4.2-75.8-66.9-136-143.8-136S20.4 268.2 16.2 344zM160 192a160 160 0 1 1 0 320 160 160 0 1 1 0-320"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M591.4 248.8 391.2 48.6c-6.7-6.7-6.2-17.8 1.8-22.9C418.1 9.4 447.9 0 480 0c88.4 0 160 71.6 160 160 0 32.1-9.4 61.9-25.7 87-5.2 7.9-16.2 8.5-22.9 1.8m-22.6 22.6c6.7 6.7 6.2 17.8-1.8 22.9-25 16.3-54.9 25.7-87 25.7-88.4 0-160-71.6-160-160 0-32.1 9.4-61.9 25.7-87 5.2-7.9 16.2-8.5 22.9-1.8z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M316.5 385.5c2-9.3-5.5-17.5-15-17.5h-283c-9.5 0-16.9 8.2-15 17.5C18.9 457.8 83.1 512 160 512s141.1-54.2 156.5-126.5m0-66.9C301.1 246.2 236.9 192 160 192S18.9 246.2 3.5 318.5c-2 9.3 5.5 17.5 15 17.5h283c9.5 0 16.9-8.2 15-17.5z"
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
