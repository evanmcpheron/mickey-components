import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ShuttleSpaceIcon: React.FC<
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
                  d="M130 480c40.6 0 80.4-11 115.2-31.9L352 384H128v96zm222-352L245.2 63.9C210.4 43 170.6 32 130 32h-2v96zm-256 0V32H80c-26.5 0-48 21.5-48 48v48h8c-22.1 0-40 17.9-40 40v176c0 22.1 17.9 40 40 40h-8v48c0 26.5 21.5 48 48 48h16v-96h8c26.2 0 49.4-12.6 64-32h288c69.3 0 135-22.7 179.2-81.6 6.4-8.5 6.4-20.3 0-28.8C591 182.7 525.3 160 456 160H168c-14.6-19.4-37.8-32-64-32zm416 115.6v24.9c0 19.6-15.9 35.6-35.6 35.6-2.5 0-4.4-2-4.4-4.4v-87.3c0-2.5 2-4.4 4.4-4.4 19.6 0 35.6 15.9 35.6 35.6"
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
                  d="M32 384h-8c-13.3 0-24-10.7-24-24V152c0-13.3 10.7-24 24-24h8V80c0-26.5 21.5-48 48-48h50c40.6 0 80.4 11 115.2 31.9L405.3 160H456c69.3 0 135 22.7 179.2 81.6 6.4 8.5 6.4 20.3 0 28.8C591 329.3 525.3 352 456 352h-50.7l-160.1 96.1C210.4 469 170.6 480 130 480H80c-26.5 0-48-21.5-48-48zm280-32H168c-9.9 13.2-23.9 23.3-40 28.3V432h2c31.9 0 63.2-8.7 90.6-25.1zm0-192-91.5-54.9C193.2 88.7 161.9 80 130 80h-2v51.7c16.1 5.1 30.1 15.1 40 28.3zM48 184v152h56c12.7 0 23.8-7.4 28.9-18.3 4-8.4 12.4-13.7 21.7-13.7H456c32.6 0 62.4-5.8 88-18.5v-59c-25.6-12.6-55.4-18.5-88-18.5H154.6c-9.3 0-17.7-5.3-21.7-13.7-5.1-10.9-16.2-18.3-28.9-18.3H48zm416 40c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32c0-8.8 7.2-16 16-16"
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
                  d="M245.2 448.1 405.3 352H464c64.7 0 123.5-27.4 164.8-76.3 9.6-11.4 9.6-28 0-39.4C587.5 187.4 528.7 160 464 160h-58.7L245.2 63.9C210.4 43 170.6 32 130 32H80c-26.5 0-48 21.5-48 48v48c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32v48c0 26.5 21.5 48 48 48h50c40.6 0 80.4-11 115.2-31.9M64 384h48c5.5 0 10.8-.6 16-1.6V448H80c-8.8 0-16-7.2-16-16zm164.7 36.6c-21.2 12.7-44.5 21.2-68.7 25V368c5.5-4.2 10.5-9 14.8-14.5.6-.7 1.2-1.2 1.6-1.4.2-.1.3-.1.3-.1h166.4zM64 352H32v-80h144c8.8 0 16-7.2 16-16s-7.2-16-16-16H32v-80h80c15.3 0 28.9 7.1 37.7 18.3 5.8 7.3 15.2 13.7 27 13.7H464c54.9 0 104.4 22.9 139.5 64-35.1 41.1-84.6 64-139.5 64H176.7c-11.8 0-21.2 6.4-27 13.7-8.8 11.2-22.4 18.3-37.7 18.3zm0-224V80c0-8.8 7.2-16 16-16h48v65.6c-5.2-1.1-10.5-1.6-16-1.6zm110.8 30.5c-4.3-5.4-9.3-10.3-14.8-14.5V66.4c24.2 3.8 47.6 12.3 68.7 25L343.1 160H176.7s-.2 0-.3-.1c-.4-.2-1-.7-1.6-1.4M464 224c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16s16-7.2 16-16v-32c0-8.8-7.2-16-16-16"
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
                  d="m405.3 352-160.1 96.1C210.4 469 170.6 480 130 480H80c-26.5 0-48-21.5-48-48v-48c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32V80c0-26.5 21.5-48 48-48h50c40.6 0 80.4 11 115.2 31.9L405.3 160H456c60.5 0 128.5 31.4 170.4 76.8 10 10.9 10 27.6 0 38.5C584.5 320.6 516.5 352 456 352zm-31.1 0h-185c-5.5 0-11.2 3.1-16.1 8.5-9.7 10.6-22.6 18.4-37.2 21.7v81.7c35.6-1 70.4-11.2 101-29.6zM48 384v48c0 17.7 14.3 32 32 32h40v-80zm326.2-224L237 77.6C206.4 59.2 171.6 49.1 136 48v81.7c14.6 3.3 27.5 11 37.2 21.7 4.9 5.4 10.6 8.5 16.1 8.5h185zM80 48c-17.7 0-32 14.3-32 32v48h72V48zM16 160v88h168c4.4 0 8 3.6 8 8s-3.6 8-8 8H16v88c0 8.8 7.2 16 16 16h88c16.4 0 31.1-7 41.4-18.2 6.6-7.3 16.3-13.8 27.9-13.8H456c55.7 0 119.6-29.3 158.6-71.6 4.4-4.8 4.4-12 0-16.8-39-42.3-102.9-71.6-158.6-71.6H189.3c-11.6 0-21.3-6.5-27.9-13.8-10.3-11.2-25-18.2-41.4-18.2H32c-8.8 0-16 7.2-16 16m472 56c4.4 0 8 3.6 8 8v64c0 4.4-3.6 8-8 8s-8-3.6-8-8v-64c0-4.4 3.6-8 8-8"
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
                  d="M96 32v96H32V80c0-26.5 21.5-48 48-48zm0 352v96H80c-26.5 0-48-21.5-48-48v-48zm32 96v-99.7c16.1-5.1 30.1-15.1 40-28.3h237.3l-160.1 96.1C210.4 469 170.6 480 130 480zm0-348.3V32h2c40.6 0 80.4 11 115.2 31.9L405.3 160H168c-9.9-13.2-23.9-23.3-40-28.3"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 168c0-22.1 17.9-40 40-40h64c26.2 0 49.4 12.6 64 32h288c69.3 0 135 22.7 179.2 81.6 6.4 8.5 6.4 20.3 0 28.8C591 329.3 525.3 352 456 352H168c-14.6 19.4-37.8 32-64 32H40c-22.1 0-40-17.9-40-40V168m512 100.4v-24.8c0-19.6-15.9-35.6-35.6-35.6-2.5 0-4.4 2-4.4 4.4v87.1c0 2.5 2 4.4 4.4 4.4 19.6 0 35.6-15.9 35.6-35.6z"
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
