import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HelmetUnIcon: React.FC<
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
                  d="M479.5 224C471.2 98.9 367.2 0 240 0 107.5 0 0 107.5 0 240v56.3C0 344.8 39.2 384 87.7 384h127.2l128.6 121.4c4.5 4.2 10.4 6.6 16.5 6.6h96c13.3 0 24-10.7 24-24s-10.7-24-24-24h-86.5l-1.5-1.5V288h112c17.7 0 32-14.3 32-32s-14.3-32-32-32zM320 417.2l-78-73.7 32.4-55.5H320zm-34.7-314.1 34.7 52V112c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 7.1-4.6 13.3-11.4 15.3s-14-.6-17.9-6.4l-34.7-52V208c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-7.1 4.6-13.3 11.4-15.3s14 .6 17.9 6.4M160 112v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v64c0 26.5-21.5 48-48 48s-48-21.5-48-48v-64c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
                  d="M240 48c106 0 192 86 192 192H256c-9.4 0-18 5.5-21.8 14.1L196.9 336H82.4c-19 0-34.4-15.4-34.4-34.4V240c0-106 86-192 192-192m80 372.7-77.7-68.6 29.2-64.1H320zm48 42.4V288h120c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8C480 107.5 372.5 0 240 0S0 107.5 0 240v61.6C0 347.1 36.9 384 82.4 384h123.5l2.3 2 136 120c4.4 3.9 10 6 15.9 6h96c13.3 0 24-10.7 24-24s-10.7-24-24-24h-87zm-82.7-360c-3.9-5.9-11.2-8.5-17.9-6.4S256 105 256 112v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-43.2l34.7 52c3.9 5.9 11.2 8.5 17.9 6.4s11.4-8.3 11.4-15.3V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v43.2l-34.7-52zM160 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 26.5 21.5 48 48 48s48-21.5 48-48v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16z"
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
                  d="M240 32c114.9 0 208 93.1 208 208v16H256c-6.9 0-13 4.4-15.2 10.9L212.5 352H77.2c-25 0-45.2-20.2-45.2-45.2V240c0-114.9 93.1-208 208-208m96 419.4-93.6-88.1 25.1-75.3H336zm32 28.6V288h128c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v-16C480 107.5 372.5 0 240 0S0 107.5 0 240v66.8C0 349.4 34.6 384 77.2 384h140.5L349 507.7c3 2.8 6.9 4.3 11 4.3h104c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-82.7-376.9c-3.9-5.9-11.2-8.5-17.9-6.4S256 105 256 112v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-43.2l34.7 52c3.9 5.9 11.2 8.5 17.9 6.4s11.4-8.3 11.4-15.3V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v43.2l-34.7-52zM160 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 26.5 21.5 48 48 48s48-21.5 48-48v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16z"
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
                  d="M16 240v72c0 30.9 25.1 56 56 56h146.2l30.2-90.5c1.1-3.3 4.1-5.5 7.6-5.5h208v-32c0-123.7-100.3-224-224-224S16 116.3 16 240m464 0v32h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H368v208h104c4.4 0 8 3.6 8 8s-3.6 8-8 8H360c-2 0-4-.8-5.5-2.2L220.8 384H72c-39.8 0-72-32.2-72-72v-72C0 107.5 107.5 0 240 0s240 107.5 240 240m-218.2 48-28.6 85.7L352 485.5V288zm8.7-188.6L336 191v-87c0-4.4 3.6-8 8-8s8 3.6 8 8v112c0 3.5-2.2 6.6-5.6 7.6s-6.9-.1-9-3L272 129v87c0 4.4-3.6 8-8 8s-8-3.6-8-8V104c0-3.5 2.2-6.6 5.6-7.6s6.9.1 9 3zM144 104v72c0 17.7 14.3 32 32 32s32-14.3 32-32v-72c0-4.4 3.6-8 8-8s8 3.6 8 8v72c0 26.5-21.5 48-48 48s-48-21.5-48-48v-72c0-4.4 3.6-8 8-8s8 3.6 8 8"
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
                  d="m215.7 384 127.8 121.4c4.5 4.2 10.4 6.6 16.5 6.6h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-70.4l-1.6-1.5V288h-48v128.9L242.3 343l-14.6 25.1-9.3 15.9z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M479.5 224C471.2 98.9 367.2 0 240 0 107.5 0 0 107.5 0 240v56.3C0 344.8 39.2 384 87.7 384h130.7l9.3-15.9 46.7-80.1H480c17.7 0 32-14.3 32-32s-14.3-32-32-32zM285.3 103.1l34.7 52V112c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 7.1-4.6 13.3-11.4 15.3s-14-.6-17.9-6.4l-34.7-52V208c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-7.1 4.6-13.3 11.4-15.3s14 .6 17.9 6.4M160 112v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v64c0 26.5-21.5 48-48 48s-48-21.5-48-48v-64c0-8.8 7.2-16 16-16s16 7.2 16 16"
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
