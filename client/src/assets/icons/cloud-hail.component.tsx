import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CloudHailIcon: React.FC<
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
                  d="M96 320c-53 0-96-43-96-96 0-42.5 27.6-78.6 65.9-91.2-1.2-6.7-1.9-13.7-1.9-20.8C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60 14.7-17.1 36.5-28 60.8-28 44.2 0 80 35.8 80 80 0 5.5-.6 10.8-1.6 16h1.6c53 0 96 43 96 96s-43 96-96 96zm0 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64M32 480a32 32 0 1 1 64 0 32 32 0 1 1-64 0m160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m96 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
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
                  d="M112 120c0-39.8 32.2-72 72-72 25.8 0 48.5 13.6 61.2 34 3.8 6.1 10.1 10.2 17.2 11.1s14.3-1.3 19.5-6.2c10-9.3 23.4-15 38.1-15 29 0 52.9 22.1 55.7 50.4 1.2 12.3 11.6 21.7 23.9 21.6h.3c35.3 0 64 28.7 64 64s-28.7 64-64 64H106.1c-.3 0-.7-.1-1-.1C73.3 270.4 48 244.2 48 212c0-28.3 19.6-52.1 46.1-58.4 11.8-2.8 19.6-13.9 18.3-25.9-.3-2.5-.4-5.1-.4-7.7M184 0C120 0 67.7 50.1 64.2 113.3 26.4 130.1 0 167.9 0 212c0 57.1 44.3 103.9 100.5 107.7 1.2.2 2.3.3 3.5.3h296c61.9 0 112-50.1 112-112 0-55.2-39.9-101.1-92.5-110.3C406.5 55 366.9 24 320 24c-18 0-34.9 4.6-49.7 12.6C248.5 14.1 217.9 0 184 0m-24 384a32 32 0 1 0-64 0 32 32 0 1 0 64 0m128 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64M96 480a32 32 0 1 0-64 0 32 32 0 1 0 64 0m96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m160-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M176 32c-44.2 0-80 35.8-80 80 0 5.4.5 10.6 1.5 15.7 1.7 8.3-3.5 16.5-11.7 18.6-31 8-53.9 36.2-53.9 69.7 0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72s-32.2-72-72-72q-3.3 0-6.6.3c-4.5.4-8.9-1.1-12.2-4.1s-5.2-7.3-5.2-11.8v-.3c0-35.3-28.7-64-64-64-17.8 0-33.9 7.2-45.5 19-3.7 3.7-9 5.4-14.1 4.5s-9.6-4.3-11.8-9C235.9 51 208.2 32 176 32m238.7 80.2C469 115.7 512 160.8 512 216c0 57.4-46.6 104-104 104H104C46.6 320 0 273.4 0 216c0-43.4 26.6-80.5 64.3-96.1-.2-2.6-.3-5.2-.3-7.9C64 50.1 114.1 0 176 0c37.9 0 71.3 18.8 91.6 47.5C282.7 37.7 300.7 32 320 32c47.6 0 87.2 34.7 94.7 80.2M96 392a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-40 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m168-72a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-40 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m168-72a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-40 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M398.7 124.8c.8-4.1 1.3-8.4 1.3-12.8 0-35.3-28.7-64-64-64-19.5 0-36.9 8.7-48.6 22.4-3.5 4-8.7 6.1-13.9 5.5s-9.9-3.8-12.4-8.5C245 36.8 212.9 16 176 16c-53 0-96 43-96 96 0 6.1.6 12.1 1.7 17.9 1.5 7.9-3.1 15.6-10.7 18.1-32 10.5-55 40.6-55 76 0 44.2 35.8 80 80 80h320c44.2 0 80-35.8 80-80s-35.8-80-80-80h-1.3c-4.8.1-9.5-2-12.6-5.8s-4.3-8.7-3.4-13.4M176 0c37.1 0 70 18.1 90.4 45.9 3.3 4.5 6.2 9.2 8.8 14.1q5.4-6.3 12-11.4C300.7 38.2 317.6 32 336 32c44.2 0 80 35.8 80 80 0 5.5-.6 10.8-1.6 16h1.6c4.9 0 9.8.4 14.5 1.1 46.2 7 81.5 46.8 81.5 94.9 0 53-43 96-96 96H96c-53 0-96-43-96-96 0-42.5 27.6-78.6 65.9-91.2-1.2-6.7-1.9-13.7-1.9-20.8C64 50.1 114.1 0 176 0m-48 368a16 16 0 1 0 0 32 16 16 0 1 0 0-32m32 16a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-96 80a16 16 0 1 0 0 32 16 16 0 1 0 0-32m32 16a32 32 0 1 1-64 0 32 32 0 1 1 64 0m144-96a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-64 48a16 16 0 1 0 0 32 16 16 0 1 0 0-32m32 16a32 32 0 1 1-64 0 32 32 0 1 1 64 0m144-96a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-64 48a16 16 0 1 0 0 32 16 16 0 1 0 0-32m32 16a32 32 0 1 1-64 0 32 32 0 1 1 64 0"
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
                  d="M128 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64m128 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64m160-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0M64 512a32 32 0 1 0 0-64 32 32 0 1 0 0 64m160-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 224c0 53 43 96 96 96h320c53 0 96-43 96-96s-43-96-96-96h-1.6c1.1-5.2 1.6-10.5 1.6-16 0-44.2-35.8-80-80-80-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0 114.1 0 64 50.1 64 112c0 7.1.7 14.1 1.9 20.8C27.6 145.4 0 181.5 0 224"
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
