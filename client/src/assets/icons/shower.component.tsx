import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ShowerIcon: React.FC<
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
                  d="M64 131.9C64 112.1 80.1 96 99.9 96c9.5 0 18.6 3.8 25.4 10.5l16.2 16.2c-21 38.9-17.4 87.5 10.9 123L151 247c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L345 121c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-1.3 1.3c-35.5-28.3-84.2-31.9-123-10.9l-16.3-16.2C151.8 42.5 126.4 32 99.9 32 44.7 32 0 76.7 0 131.9V448c0 17.7 14.3 32 32 32s32-14.3 32-32zM256 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64m64 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64m64 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m0-128a32 32 0 1 0 0-64 32 32 0 1 0 0 64m64 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m32-32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
                  d="M48 123.9C48 99.6 67.6 80 91.9 80c11.6 0 22.8 4.6 31 12.9l6.7 6.7c-27.8 43.4-22.8 101.7 15.1 139.6l7 7-.8.8c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L345 121c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-.8.8-6.9-6.9-.2-.2c-37.9-37.9-96.2-43-139.6-15.1l-6.7-6.7c-17.3-17.3-40.6-27-65-27C41.1 32 0 73.1 0 123.9V456c0 13.3 10.7 24 24 24s24-10.7 24-24zm221.5-8.9 6.8 6.8-90.5 90.5-7-7c-25-25-25-65.5 0-90.5s65.5-25 90.5 0zM416 192a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-64 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m32 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64m64-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m64-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m96-96a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M32 115.9C32 87.2 55.2 64 83.9 64c13.8 0 27 5.5 36.7 15.2l28.1 28.1c.5.5 1.1 1 1.7 1.5-33 43.9-29.5 106.5 10.4 146.4l4.7 4.7-16.8 16.8c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l192-192c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-16.8 16.8-4.7-4.7c-39.9-39.9-102.5-43.4-146.4-10.4-.4-.6-.9-1.2-1.5-1.7l-28.1-28.1C127.5 40.8 106.1 32 83.9 32 37.6 32 0 69.6 0 115.9V464c0 8.8 7.2 16 16 16s16-7.2 16-16zm151.4 3.5c31.2-31.2 81.9-31.2 113.1 0l4.7 4.7-113.1 113.2-4.7-4.7c-31.2-31.2-31.2-81.9 0-113.1zM416 200a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-88 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-40 40a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-64 64a24 24 0 1 0 0-48 24 24 0 1 0 0 48m128-128a24 24 0 1 0 0-48 24 24 0 1 0 0 48m88-88a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M16 107.9C16 74.8 42.8 48 75.9 48c15.9 0 31.1 6.3 42.3 17.5l36.1 36.1c.3.3.7.6 1.1.9-38.3 44-36.5 110.8 5.4 152.6l18.3 18.3-16.8 16.8c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l192-192c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L337.5 115l-18.3-18.2c-41.9-41.9-108.6-43.7-152.6-5.4-.3-.4-.6-.7-.9-1.1l-36.2-36.1A75.85 75.85 0 0 0 75.9 32C34 32 0 66 0 107.9V472c0 4.4 3.6 8 8 8s8-3.6 8-8zm310.2 18.6L190.5 262.2l-18.3-18.3c-37.5-37.5-37.5-98.3 0-135.8s98.3-37.5 135.8 0l18.3 18.3zM416 208a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-80 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m-48 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0m80 48a16 16 0 1 0 0-32 16 16 0 1 0 0 32m-64 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32m128-128a16 16 0 1 0 0-32 16 16 0 1 0 0 32m80-80a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
                  d="M384 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-64 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-32 32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m32 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64-64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m64-64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m32-32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M99.9 96C80.1 96 64 112.1 64 131.9V448c0 17.7-14.3 32-32 32S0 465.7 0 448V131.9C0 76.7 44.7 32 99.9 32c26.5 0 51.9 10.5 70.6 29.3l16.2 16.2c38.9-21 87.5-17.4 123 10.9L311 87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L185 281c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l1.3-1.3c-28.3-35.5-31.9-84.2-10.9-123l-16.2-16.2C118.5 99.8 109.4 96 99.9 96"
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
