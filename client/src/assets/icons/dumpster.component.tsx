import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DumpsterIcon: React.FC<
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
                  d="M49.7 32c-10.5 0-19.8 6.9-22.9 16.9L.9 133c-.6 2-.9 4.1-.9 6.1C0 150.7 9.3 160 20.9 160h94l25.6-128zM272 160V32h-98.9l-25.6 128zm32 0h124.5L402.9 32H304zm157.1 0h94c11.5 0 20.9-9.3 20.9-20.9 0-2.1-.3-4.1-.9-6.1l-25.9-84.1c-3.1-10-12.4-16.9-22.9-16.9h-90.8zM32 192l4 32h-4c-17.7 0-32 14.3-32 32s14.3 32 32 32h12l20 160c0 17.7 14.3 32 32 32s32-14.3 32-32h320c0 17.7 14.3 32 32 32s32-14.3 32-32l20-160h12c17.7 0 32-14.3 32-32s-14.3-32-32-32h-4l4-32z"
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
                  d="M49.7 32c-10.5 0-19.8 6.9-22.9 16.9L.9 133c-.6 2-.9 4.1-.9 6.1C0 150.7 9.3 160 20.9 160h94l25.6-128zM272 160V32h-98.9l-25.6 128zm32 0h124.5L402.9 32H304zm157.1 0h94c11.5 0 20.9-9.3 20.9-20.9 0-2.1-.3-4.1-.9-6.1l-25.9-84.1c-3.1-10-12.4-16.9-22.9-16.9h-90.8zM86.4 240h403.2l-20 160H106.4zM112 448h352v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8l22-176h18c13.3 0 24-10.7 24-24s-10.7-24-24-24h-12l4-32H32l4 32H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h18l22 176v8c0 13.3 10.7 24 24 24s24-10.7 24-24z"
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
                  d="M423.4 32H57c-14.7 0-27.5 10-31 24.2L.9 156.6q-.9 3.45-.9 6.9C0 179.2 12.8 192 28.5 192h519c15.7 0 28.5-12.8 28.5-28.5 0-2.3-.3-4.7-.9-6.9l-25-100.4C546.5 42 533.7 32 519 32h-95.6M37.5 224l3.8 32H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h29.1L64 448.9V464c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-15.1L530.9 288H560c8.8 0 16-7.2 16-16s-7.2-16-16-16h-25.3l3.8-32h-32.3l-22.5 192H92.3L69.8 224zm490.2-64h-66.5L443 64h76l24 96h-15.2zM410.4 64l18.2 96H304V64zM272 64v96H147.3l18-96zm-139.3 0-18 96H33l24-96z"
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
                  d="M39.9 58.9C42.1 52.4 48.2 48 55.1 48h92.7l-24 96H27.5c-6.4 0-11.5-5.2-11.5-11.5 0-1.2.2-2.5.6-3.6zM164.2 48H280v96H140.2zM296 48h115.8l24 96H296zm132.2 0h92.7c6.9 0 13 4.4 15.2 10.9l23.3 69.9 15.2-5.1-23.3-69.8C546.9 40.8 534.7 32 520.9 32H55.1c-13.8 0-26 8.8-30.4 21.9L1.4 123.8c-.9 2.8-1.4 5.7-1.4 8.7C0 147.7 12.3 160 27.5 160h521c15.2 0 27.5-12.3 27.5-27.5 0-3-.5-5.9-1.4-8.7l-15.2 5.1q.6 1.8.6 3.6c0 6.4-5.2 11.5-11.5 11.5h-96.3zM47.9 198.9c-.6-4.4-4.7-7.4-9.1-6.8s-7.4 4.7-6.8 9.1l6.8 46.8H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h33.1l23 161.1c.6 3.9 3.9 6.9 7.9 6.9h24v40c0 4.4 3.6 8 8 8s8-3.6 8-8v-40h352v40c0 4.4 3.6 8 8 8s8-3.6 8-8v-40h24c4 0 7.4-2.9 7.9-6.9l23-161.1H568c4.4 0 8-3.6 8-8s-3.6-8-8-8h-30.8l6.7-46.9c.6-4.4-2.4-8.4-6.8-9.1s-8.4 2.4-9.1 6.8l-8 55.9v.3l-23 161H78.9l-23-161v-.3l-8-55.9z"
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
                  d="M140.5 32H49.7c-10.5 0-19.8 6.9-22.9 16.9L.9 133c-.6 2-.9 4.1-.9 6.1C0 150.7 9.3 160 20.9 160h94zm7 128H272V32h-98.9zM304 32v128h124.5L402.9 32zm131.5 0 25.6 128h94c11.5 0 20.9-9.3 20.9-20.9 0-2.1-.3-4.1-.9-6.1l-25.9-84.1c-3.1-10-12.4-16.9-22.9-16.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 448 44 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h4l-4-32h512l-4 32h4c17.7 0 32 14.3 32 32s-14.3 32-32 32h-12l-20 160c0 17.7-14.3 32-32 32s-32-14.3-32-32H128c0 17.7-14.3 32-32 32s-32-14.3-32-32"
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
