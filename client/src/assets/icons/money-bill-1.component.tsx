import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MoneyBill1Icon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm64 320H64v-64c35.3 0 64 28.7 64 64M64 192v-64h64c0 35.3-28.7 64-64 64m384 192c0-35.3 28.7-64 64-64v64zm64-192c-35.3 0-64-28.7-64-64h64zm-336 64a112 112 0 1 1 224 0 112 112 0 1 1-224 0m76-48c0 9.7 6.9 17.7 16 19.6V276h-4c-11 0-20 9-20 20s9 20 20 20h48c11 0 20-9 20-20s-9-20-20-20h-4v-68c0-11-9-20-20-20h-16c-11 0-20 9-20 20"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M112 112c0 35.3-28.7 64-64 64v160c35.3 0 64 28.7 64 64h352c0-35.3 28.7-64 64-64V176c-35.3 0-64-28.7-64-64zM0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm176 128a112 112 0 1 1 224 0 112 112 0 1 1-224 0m80-48c0 8.8 7.2 16 16 16v64h-8c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-8v-80c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M512 96c17.7 0 32 14.3 32 32v32c-35.3 0-64-28.7-64-64zm-384 0h320c0 53 43 96 96 96v128c-53 0-96 43-96 96H128c0-53-43-96-96-96V192c53 0 96-43 96-96M32 352c35.3 0 64 28.7 64 64H64c-17.7 0-32-14.3-32-32zm448 64c0-35.3 28.7-64 64-64v32c0 17.7-14.3 32-32 32zM96 96c0 35.3-28.7 64-64 64v-32c0-17.7 14.3-32 32-32zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm192 144c0 8.8 7.2 16 16 16v64h-8c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-8v-80c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16m-64 48a96 96 0 1 1 192 0 96 96 0 1 1-192 0m224 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M512 80c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm480 112c0-4.4-3.6-8-8-8h-8c-30.9 0-56-25.1-56-56v-8c0-4.4-3.6-8-8-8s-8 3.6-8 8v8c0 39.8 32.2 72 72 72h8c4.4 0 8-3.6 8-8m-504 8h8c39.8 0 72-32.2 72-72v-8c0-4.4-3.6-8-8-8s-8 3.6-8 8v8c0 30.9-25.1 56-56 56h-8c-4.4 0-8 3.6-8 8s3.6 8 8 8m504 152c0-4.4-3.6-8-8-8h-8c-39.8 0-72 32.2-72 72v8c0 4.4 3.6 8 8 8s8-3.6 8-8v-8c0-30.9 25.1-56 56-56h8c4.4 0 8-3.6 8-8m-504-8c-4.4 0-8 3.6-8 8s3.6 8 8 8h8c30.9 0 56 25.1 56 56v8c0 4.4 3.6 8 8 8s8-3.6 8-8v-8c0-39.8-32.2-72-72-72zm248-184a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 240a128 128 0 1 0 0-256 128 128 0 1 0 0 256m-16-184c-4.4 0-8 3.6-8 8s3.6 8 8 8h8v80h-16c-4.4 0-8 3.6-8 8s3.6 8 8 8h48c4.4 0 8-3.6 8-8s-3.6-8-8-8h-16v-88c0-4.4-3.6-8-8-8z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M448 128H128c0 35.3-28.7 64-64 64v128c35.3 0 64 28.7 64 64h320c0-35.3 28.7-64 64-64V192c-35.3 0-64-28.7-64-64m-160 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128 0c0 35.3-28.7 64-64 64v128c35.3 0 64 28.7 64 64h320c0-35.3 28.7-64 64-64V192c-35.3 0-64-28.7-64-64zm144 60h16c11 0 20 9 20 20v68h4c11 0 20 9 20 20s-9 20-20 20h-48c-11 0-20-9-20-20s9-20 20-20h4v-48.4c-9.1-1.9-16-9.9-16-19.6 0-11 9-20 20-20"
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
