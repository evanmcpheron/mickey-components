import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const AnkhIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96 128c0-35.3 28.7-64 64-64s64 28.7 64 64c0 41.6-20.7 76.6-46.6 104.1-5.9 6.2-11.8 11.8-17.4 16.7-5.6-4.9-11.5-10.5-17.4-16.7C116.7 204.6 96 169.6 96 128M160 0C89.3 0 32 57.3 32 128c0 52.4 21.5 95.5 46.8 128H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v160c0 17.7 14.3 32 32 32s32-14.3 32-32V320h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-46.8c25.4-32.5 46.8-75.6 46.8-128C288 57.3 230.7 0 160 0"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M80 128c0 42.3 22.6 78.9 50.5 107.6 10.3 10.6 20.6 19.4 29.5 26.3 8.9-6.9 19.3-15.7 29.5-26.3C217.4 206.9 240 170.3 240 128c0-44.2-35.8-80-80-80s-80 35.8-80 80m18.9 144C66 238.9 32 189.8 32 128 32 57.3 89.3 0 160 0s128 57.3 128 128c0 61.8-34 110.9-66.9 144H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H184v168c0 13.3-10.7 24-24 24s-24-10.7-24-24V320H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 128c0 48.2 25.8 88.6 55 118.7 14.4 14.8 28.8 26.4 39.7 34.2l1.3.9 1.3-.9c10.9-7.8 25.3-19.3 39.7-34.2 29.2-30.1 55-70.5 55-118.7 0-53-43-96-96-96s-96 43-96 96m52.1 160C79.1 255.9 32 200.8 32 128 32 57.3 89.3 0 160 0s128 57.3 128 128c0 72.8-47.1 127.9-84.1 160H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176v176c0 8.8-7.2 16-16 16s-16-7.2-16-16V320H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 128c0 54.1 28.9 98.3 59.5 129.9 15.2 15.7 30.4 27.8 41.9 36 4.1 3 7.7 5.4 10.7 7.3 2.9-1.9 6.5-4.3 10.7-7.3 11.4-8.2 26.7-20.4 41.9-36C243.1 226.3 272 182.1 272 128c0-61.9-50.1-112-112-112S48 66.1 48 128m88.1 176C99 276.5 32 214.8 32 128 32 57.3 89.3 0 160 0s128 57.3 128 128c0 86.8-67 148.5-104.1 176H312c4.4 0 8 3.6 8 8s-3.6 8-8 8H168v184c0 4.4-3.6 8-8 8s-8-3.6-8-8V320H8c-4.4 0-8-3.6-8-8s3.6-8 8-8z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M192 320v160c0 17.7-14.3 32-32 32s-32-14.3-32-32V320z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 64c-35.3 0-64 28.7-64 64 0 41.6 20.7 76.6 46.6 104.1 5.9 6.2 11.8 11.8 17.4 16.7 5.6-4.9 11.5-10.5 17.4-16.7C203.3 204.6 224 169.6 224 128c0-35.3-28.7-64-64-64M32 128C32 57.3 89.3 0 160 0s128 57.3 128 128c0 52.4-21.5 95.5-46.8 128H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h46.8C53.5 223.5 32 180.4 32 128"
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
