import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PersonSleddingIcon: React.FC<
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
                  d="M400 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96M35.1 226.7c-11.8-6.1-26.3-1.5-32.4 10.2s-1.5 26.3 10.2 32.4l383.5 199.1c27.3 14.2 59.7 14.4 87.2.7l15.2-7.6c11.9-5.9 16.7-20.3 10.7-32.2s-20.3-16.7-32.2-10.7l-15.2 7.6c-13.7 6.9-29.9 6.7-43.6-.3l-41.7-21.6c4.5-5.5 7.2-12.5 7.2-20.2V304c0-26.5-21.5-48-48-48h-34.7l59.7-59.7c25.2-25.2 7.4-68.3-28.3-68.3H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h84l-59.2 40.3c-23.6 16.1-26 44.8-13.8 64.9zM320 320v54.6L214.7 320z"
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
                  d="M400 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96M128 152c0-13.3 10.7-24 24-24h169.4c35.6 0 53.5 43.1 28.3 68.3L281.9 264H344c22.1 0 40 17.9 40 40v80c0 7.7-3.7 14.6-9.4 19l43.9 22.8c13.6 7.1 29.8 7.2 43.6.3l15.2-7.6c11.9-5.9 26.3-1.1 32.2 10.7s1.1 26.3-10.7 32.2l-15.2 7.6c-27.5 13.7-59.9 13.5-87.2-.7l-383.5-199c-11.7-6.1-16.3-20.6-10.2-32.4s20.6-16.3 32.4-10.2l124.1 64.4c-4.3-11.5-2.2-25.4 8.8-35.1l90.7-80H152c-13.3 0-24-10.7-24-24m208 160H199.3L336 383z"
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
                  d="M392 112a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112M1.7 248.8c4-7.9 13.6-11.1 21.5-7.1L419 440.6c14 7 30.3 7.9 44.9 2.4l26.5-10c8.3-3.1 17.5 1.1 20.6 9.3s-1.1 17.5-9.3 20.6l-26.5 10c-23 8.7-48.6 7.3-70.6-3.7L8.8 270.3c-7.9-4-11.1-13.6-7.1-21.5M160 144h160c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4L230.6 272H344c13.3 0 24 10.7 24 24v72c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64H230.6c-28.5 0-42.8-34.5-22.6-54.6l73.4-73.4H160c-8.8 0-16-7.2-16-16s7.2-16 16-16"
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
                  d="M289.9 244.7c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9H336c17.7 0 32 14.3 32 32v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48c0-8.8-7.2-16-16-16H211.9c-31.5 0-44-40.7-18-58.4l59.1-40.4c5.8-4 8.3-11.2 6.3-17.9S251 176 244 176h-84c-8.8 0-16-7.2-16-16s7.2-16 16-16h172.7c21.4 0 32.1 25.9 17 41L290 244.7zm71-48.4c25.2-25.2 7.4-68.3-28.3-68.3H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h84l-23.5 16-35.7 24.3c-39 26.6-20.2 87.7 27 87.7H320v48c0 17.7 14.3 32 32 32s32-14.3 32-32v-64c0-26.5-21.5-48-48-48h-34.7l16-16 43.7-43.7zM368 80a32 32 0 1 1 64 0 32 32 0 1 1-64 0m80 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0M11.5 256.8c-4-2-8.8-.3-10.7 3.6s-.3 8.8 3.6 10.7L410 471.3c18.8 9.3 40.5 10.8 60.5 4.2l36-11.9c4.2-1.4 6.5-5.9 5.1-10.1s-5.9-6.5-10.1-5.1l-36 11.9c-15.9 5.3-33.3 4-48.4-3.4z"
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
                  d="M2.7 236.9c6.1-11.8 20.6-16.3 32.4-10.2l383.4 199.1c13.6 7.1 29.8 7.2 43.6.3l15.2-7.6c11.9-5.9 26.3-1.1 32.2 10.7s1.1 26.3-10.7 32.2l-15.2 7.6c-27.5 13.7-59.9 13.5-87.2-.7l-383.5-199c-11.7-6.1-16.3-20.6-10.2-32.4"
                />
                <path
                  className="aps-icon-foreground"
                  d="M400 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-39 164.3L301.3 256H336c26.5 0 48 21.5 48 48v80c0 7.6-2.7 14.7-7.2 20.2L320 374.6V320H214.7L171 297.3c-12.2-20.2-9.8-48.8 13.8-64.9L244 192h-84c-17.7 0-32-14.3-32-32s14.3-32 32-32h172.7c35.6 0 53.5 43.1 28.3 68.3"
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
