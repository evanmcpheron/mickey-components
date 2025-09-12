import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FileWordIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0zm192 0v128h128zM111 257.1l26.8 89.2 31.6-90.3c3.4-9.6 12.5-16.1 22.7-16.1s19.3 6.4 22.7 16.1l31.6 90.3 26.6-89.2c3.8-12.7 17.2-19.9 29.9-16.1s19.9 17.2 16.1 29.9l-48 160c-3 10-12 16.9-22.4 17.1s-19.8-6.2-23.2-16.1L192 336.6l-33.3 95.3c-3.4 9.8-12.8 16.3-23.2 16.1s-19.5-7.1-22.4-17.1l-48-160c-3.8-12.7 3.4-26.1 16.1-29.9s26.1 3.4 29.9 16.1z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 448V64c0-8.8 7.2-16 16-16h160v80c0 17.7 14.3 32 32 32h80v288c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3l-90.6-90.5C262.7 6.7 246.5 0 229.5 0zm55 241.1c-3.8-12.7-17.2-19.9-29.9-16.1S69.2 242.2 73 254.9l48 160c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l25-83.4 25 83.4c3 10.2 12.4 17.1 23 17.1s19.9-7 23-17.1l48-160c3.8-12.7-3.4-26.1-16.1-29.9s-26.1 3.4-29.9 16.1l-25 83.4-25-83.4c-3-10.2-12.4-17.1-23-17.1s-19.9 7-23 17.1l-25 83.4z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M320 480H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h128v112c0 26.5 21.5 48 48 48h112v256c0 17.7-14.3 32-32 32m-80-320c-8.8 0-16-7.2-16-16V32.5c2.8.7 5.4 2.1 7.4 4.2l115.9 115.9c2.1 2.1 3.5 4.6 4.2 7.4zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V163.9c0-12.7-5.1-24.9-14.1-33.9L254.1 14.1c-9-9-21.2-14.1-33.9-14.1zm39.2 235.1c-2.7-8.4-11.7-13.1-20.1-10.4S70 236.4 72.7 244.8l56 176c2.2 6.8 8.5 11.3 15.6 11.1s13.2-4.9 15.1-11.8L192 300.8l32.6 119.4c1.9 6.8 8 11.6 15.1 11.8s13.4-4.4 15.6-11.1l56-176c2.7-8.4-2-17.4-10.4-20.1s-17.4 2-20.1 10.4l-39.6 124.3-33.8-123.7c-1.9-7-8.2-11.8-15.4-11.8s-13.5 4.8-15.4 11.8l-33.8 123.7z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M16 448V64c0-26.5 21.5-48 48-48h140.1c1.3 0 2.6.1 3.9.2V136c0 22.1 17.9 40 40 40h119.8c.2 1.3.2 2.6.2 3.9V448c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48m342.6-290.7q1.35 1.35 2.4 2.7H248c-13.3 0-24-10.7-24-24V22.9q1.5 1.2 2.7 2.4zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V179.9c0-12.7-5.1-24.9-14.1-33.9L238.1 14.1c-9-9-21.2-14.1-33.9-14.1zm23.7 245.8c-1.2-4.2-5.7-6.7-9.9-5.4s-6.7 5.7-5.4 9.9l56 192c1 3.4 4.1 5.8 7.7 5.8s6.7-2.3 7.7-5.8L192 276.6l48.3 165.7c1 3.4 4.1 5.8 7.7 5.8s6.7-2.3 7.7-5.8l56-192c1.2-4.2-1.2-8.7-5.4-9.9s-8.7 1.2-9.9 5.4L248 411.4l-48.3-165.6c-1-3.4-4.1-5.8-7.7-5.8s-6.7 2.3-7.7 5.8L136 411.4z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm111 193.1c-3.8-12.7-17.2-19.9-29.9-16.1S61.2 258.2 65 270.9l48 160c3 10 12 16.9 22.4 17.1s19.8-6.2 23.2-16.1l33.4-95.3 33.3 95.3c3.4 9.8 12.8 16.3 23.2 16.1s19.5-7.1 22.4-17.1l48-160c3.8-12.7-3.4-26.1-16.1-29.9s-26.1 3.4-29.9 16.1l-26.8 89.2-31.6-90.3c-3.4-9.6-12.5-16.1-22.7-16.1s-19.3 6.4-22.7 16.1l-31.6 90.3z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 160 224 0v128c0 17.7 14.3 32 32 32zm-273 97.1c-3.8-12.7-17.2-19.9-29.9-16.1S61.2 258.2 65 270.9l48 160c3 10 12 16.9 22.4 17.1s19.8-6.2 23.2-16.1l33.4-95.3 33.3 95.3c3.4 9.8 12.8 16.3 23.2 16.1s19.5-7.1 22.4-17.1l48-160c3.8-12.7-3.4-26.1-16.1-29.9s-26.1 3.4-29.9 16.1l-26.8 89.2-31.6-90.3c-3.4-9.6-12.5-16.1-22.7-16.1s-19.3 6.4-22.7 16.1l-31.6 90.3z"
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
