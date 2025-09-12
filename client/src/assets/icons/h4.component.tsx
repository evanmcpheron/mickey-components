import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const H4Icon: React.FC<
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
                  d="M479 103.8 441 256h135V96c0-17.7 14.3-32 32-32s32 14.3 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96H400c-9.9 0-19.2-4.5-25.2-12.3s-8.2-17.9-5.8-27.5l48-192c4.3-17.1 21.7-27.6 38.8-23.3s27.6 21.7 23.3 38.8zM32 64c17.7 0 32 14.3 32 32v128h192V96c0-17.7 14.3-32 32-32s32 14.3 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V288H64v128c0 17.7-14.3 32-32 32S0 433.7 0 416V96c0-17.7 14.3-32 32-32"
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
                  d="m455.5 92.9-34 163.1H592V88c0-13.3 10.7-24 24-24s24 10.7 24 24v336c0 13.3-10.7 24-24 24s-24-10.7-24-24V304H392c-7.2 0-14.1-3.3-18.6-8.9s-6.3-13-4.9-20l40-192c2.7-13 15.4-21.3 28.4-18.6s21.3 15.4 18.6 28.4M24 64c13.3 0 24 10.7 24 24v136h224V88c0-13.3 10.7-24 24-24s24 10.7 24 24v336c0 13.3-10.7 24-24 24s-24-10.7-24-24V272H48v152c0 13.3-10.7 24-24 24S0 437.3 0 424V88c0-13.3 10.7-24 24-24"
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
                  d="m447.7 83-36.3 189H608V80c0-8.8 7.2-16 16-16s16 7.2 16 16v352c0 8.8-7.2 16-16 16s-16-7.2-16-16V304H392c-4.8 0-9.3-2.1-12.3-5.8s-4.3-8.5-3.4-13.2l40-208c1.7-8.7 10.1-14.4 18.7-12.7s14.4 10.1 12.7 18.7M16 64c8.8 0 16 7.2 16 16v160h256V80c0-8.8 7.2-16 16-16s16 7.2 16 16v352c0 8.8-7.2 16-16 16s-16-7.2-16-16V272H32v160c0 8.8-7.2 16-16 16s-16-7.2-16-16V80c0-8.8 7.2-16 16-16"
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
                  d="M433.5 64.1c-4.3-.8-8.5 2-9.4 6.3l-40 208c-.5 2.3.2 4.8 1.7 6.6s3.8 2.9 6.2 2.9h232V440c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-4.4-3.6-8-8-8s-8 3.6-8 8v200H401.7l38.2-198.5c.8-4.3-2-8.5-6.3-9.4zM16 72c0-4.4-3.6-8-8-8s-8 3.6-8 8v368c0 4.4 3.6 8 8 8s8-3.6 8-8V256h288v184c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-4.4-3.6-8-8-8s-8 3.6-8 8v168H16z"
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
                  d="M32 64c17.7 0 32 14.3 32 32v128h192V96c0-17.7 14.3-32 32-32s32 14.3 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V288H64v128c0 17.7-14.3 32-32 32S0 433.7 0 416V96c0-17.7 14.3-32 32-32"
                />
                <path
                  className="aps-icon-foreground"
                  d="M479 103.8c4.3-17.1-6.1-34.5-23.3-38.8s-34.5 6.1-38.8 23.3l-48 192c-2.4 9.6-.2 19.7 5.8 27.5s15.4 12.3 25.2 12.3H576v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32v160H441z"
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
