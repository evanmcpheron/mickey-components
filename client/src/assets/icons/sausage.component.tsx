import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SausageIcon: React.FC<
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
                  d="M320 160c0-42 26.9-77.7 64.5-90.7l-15.3-41.9c-.8-2.2-1.2-4.6-1.2-7C368 9.1 377.1 0 388.4 0h55.2C454.9 0 464 9.1 464 20.4c0 2.4-.4 4.7-1.2 7l-15.3 41.9C485.1 82.3 512 118 512 160c0 194.4-157.6 352-352 352-42 0-77.7-26.9-90.7-64.5l-41.9 15.3c-2.2.8-4.6 1.2-7 1.2C9.1 464 0 454.9 0 443.6v-55.2C0 377.1 9.1 368 20.4 368c2.4 0 4.7.4 7 1.2l41.9 15.2C82.3 346.9 118 320 160 320c88.4 0 160-71.6 160-160m80 0c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 114.9-93.1 208-208 208-8.8 0-16 7.2-16 16s7.2 16 16 16c132.5 0 240-107.5 240-240"
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
                  d="m447.5 69.3 15.2-41.9c.8-2.2 1.2-4.6 1.2-7C464 9.1 454.9 0 443.6 0h-55.2C377.1 0 368 9.1 368 20.4c0 2.4.4 4.7 1.2 7l15.2 41.9C346.9 82.3 320 118 320 160c0 88.4-71.6 160-160 160-42 0-77.7 26.9-90.7 64.5l-41.9-15.3c-2.2-.8-4.6-1.2-7-1.2C9.1 368 0 377.1 0 388.4v55.2C0 454.9 9.1 464 20.4 464c2.4 0 4.7-.4 7-1.2l41.9-15.2C82.3 485.1 118 512 160 512c194.4 0 352-157.6 352-352 0-42-26.9-77.7-64.5-90.7M112 416c0-26.5 21.5-48 48-48 114.9 0 208-93.1 208-208 0-26.5 21.5-48 48-48s48 21.5 48 48c0 167.9-136.1 304-304 304-26.5 0-48-21.5-48-48"
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
                  d="M400 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zM32 400c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16zm448-240c0 176.7-143.3 320-320 320-35.3 0-64-28.7-64-64s28.7-64 64-64c106 0 192-86 192-192 0-35.3 28.7-64 64-64s64 28.7 64 64m32 0c0-53-43-96-96-96s-96 43-96 96c0 88.4-71.6 160-160 160-53 0-96 43-96 96s43 96 96 96c194.4 0 352-157.6 352-352m-112 0c-8.8 0-16 7.2-16 16 0 114.9-93.1 208-208 208-8.8 0-16 7.2-16 16s7.2 16 16 16c132.5 0 240-107.5 240-240 0-8.8-7.2-16-16-16"
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
                  d="M369.2 3.8c1.5-2.4 4-3.8 6.8-3.8h96c2.8 0 5.3 1.4 6.8 3.8s1.6 5.3.3 7.8l-16 32c-2 4-6.8 5.6-10.7 3.6s-5.6-6.8-3.6-10.7L459.1 16h-70.2l10.2 20.4c2 4 .4 8.8-3.6 10.7s-8.8.4-10.7-3.6l-16-32c-1.2-2.5-1.1-5.4.3-7.8zM16 400v59.1l20.4-10.2c4-2 8.8-.4 10.7 3.6s.4 8.8-3.6 10.7l-32 16c-2.5 1.2-5.4 1.1-7.8-.3s-3.8-4-3.8-6.8V376c0-2.8 1.4-5.3 3.8-6.8s5.3-1.6 7.8-.3l32 16c4 2 5.6 6.8 3.6 10.7s-6.8 5.6-10.7 3.6L16 388.9v11zM424 80c-39.8 0-72 32.2-72 72 0 48.6-22.8 99-61.9 138.1S200.6 352 152 352c-39.8 0-72 32.2-72 72s32.2 72 72 72c92.8 0 178.4-42.5 239.9-104.1S496 244.8 496 152c0-39.8-32.2-72-72-72m0-16c48.6 0 88 39.4 88 88 0 97.7-44.7 187.2-108.8 251.2S249.7 512 152 512c-48.6 0-88-39.4-88-88s39.4-88 88-88c43.7 0 90.2-20.6 126.8-57.2S336 195.7 336 152c0-48.6 39.4-88 88-88m-24 104c0 128.1-103.9 232-232 232-4.4 0-8-3.6-8-8s3.6-8 8-8c119.3 0 216-96.7 216-216 0-4.4 3.6-8 8-8s8 3.6 8 8"
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
                  d="M320 160c0-42 26.9-77.7 64.5-90.7l-15.3-41.9c-.8-2.2-1.2-4.6-1.2-7C368 9.1 377.1 0 388.4 0h55.2C454.9 0 464 9.1 464 20.4c0 2.4-.4 4.7-1.2 7l-15.3 41.9C485.1 82.3 512 118 512 160c0 194.4-157.6 352-352 352-42 0-77.7-26.9-90.7-64.5l-41.9 15.3c-2.2.8-4.6 1.2-7 1.2C9.1 464 0 454.9 0 443.6v-55.2C0 377.1 9.1 368 20.4 368c2.4 0 4.7.4 7 1.2l41.9 15.2C82.3 346.9 118 320 160 320c88.4 0 160-71.6 160-160m80 0c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 114.9-93.1 208-208 208-8.8 0-16 7.2-16 16s7.2 16 16 16c132.5 0 240-107.5 240-240"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 144c8.8 0 16 7.2 16 16 0 132.5-107.5 240-240 240-8.8 0-16-7.2-16-16s7.2-16 16-16c114.9 0 208-93.1 208-208 0-8.8 7.2-16 16-16"
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
