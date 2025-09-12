import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const TildeIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M99.9 192C80.1 192 64 208.1 64 227.9V320c0 17.7-14.3 32-32 32S0 337.7 0 320v-92.1C0 172.7 44.7 128 99.9 128c26.5 0 51.9 10.5 70.6 29.3l152.2 152.2c6.7 6.7 15.9 10.5 25.4 10.5 19.8 0 35.9-16.1 35.9-35.9V192c0-17.7 14.3-32 32-32s32 14.3 32 32v92.1c0 55.2-44.7 99.9-99.9 99.9-26.5 0-51.9-10.5-70.6-29.3L125.3 202.5c-6.7-6.7-15.9-10.5-25.4-10.5"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M100.5 176c-29 0-52.5 23.5-52.5 52.5V320c0 13.3-10.7 24-24 24S0 333.3 0 320v-91.5C0 173 45 128 100.5 128c29.6 0 57.6 13 76.7 35.6l130.2 153.8c10 11.8 24.6 18.6 40.1 18.6 29 0 52.5-23.5 52.5-52.5V192c0-13.3 10.7-24 24-24s24 10.7 24 24v91.5C448 339 403 384 347.5 384c-29.6 0-57.6-13-76.7-35.6L140.6 194.6c-10-11.8-24.6-18.6-40.1-18.6"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M96.8 160C61.2 160 32 188.8 32 224v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-53.2 43.9-96 96.8-96 29.4 0 57.6 13.5 75.9 36.7l128 162.8c12.1 15.4 31 24.5 50.7 24.5 35.5 0 64.8-28.8 64.8-64v-96c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 53.2-43.9 96-96.8 96-29.4 0-57.6-13.5-75.9-36.7l-128-162.9c-12.1-15.4-31-24.5-50.7-24.5z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M91.5 160C49.8 160 16 193.8 16 235.5V320c0 4.4-3.6 8-8 8s-8-3.6-8-8v-84.5C0 184.9 40.9 144 91.5 144c25.5 0 49.9 10.7 67.2 29.4l142.4 154.3c14.3 15.5 34.4 24.3 55.4 24.3 41.7 0 75.5-33.8 75.5-75.5V192c0-4.4 3.6-8 8-8s8 3.6 8 8v84.5c0 50.5-40.9 91.5-91.5 91.5-25.5 0-49.9-10.7-67.2-29.4L146.9 184.3c-14.3-15.5-34.4-24.3-55.4-24.3"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M99.9 192C80.1 192 64 208.1 64 227.9V320c0 17.7-14.3 32-32 32S0 337.7 0 320v-92.1C0 172.7 44.7 128 99.9 128c26.5 0 51.9 10.5 70.6 29.3l152.2 152.2c6.7 6.7 15.9 10.5 25.4 10.5 19.8 0 35.9-16.1 35.9-35.9V192c0-17.7 14.3-32 32-32s32 14.3 32 32v92.1c0 55.2-44.7 99.9-99.9 99.9-26.5 0-51.9-10.5-70.6-29.3L125.3 202.5c-6.7-6.7-15.9-10.5-25.4-10.5"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
