import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const MarsStrokeRightIcon: React.FC<
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
                  d="M208 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224m174.4-88c-11.7 85.8-85.3 152-174.4 152-97.2 0-176-78.8-176-176S110.8 80 208 80c89.1 0 162.7 66.2 174.4 152H416v-56c0-13.3 10.7-24 24-24s24 10.7 24 24v56h32v-56c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-6.9 6.9-17.2 8.9-26.2 5.2S496 345.6 496 335.9V280h-32v56c0 13.3-10.7 24-24 24s-24-10.7-24-24v-56z"
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
                  d="M80 256a128 128 0 1 1 256 0 128 128 0 1 1-256 0m302.4-24C370.7 146.2 297.1 80 208 80c-97.2 0-176 78.8-176 176s78.8 176 176 176c89.1 0 162.7-66.2 174.4-152H416v48c0 13.3 10.7 24 24 24s24-10.7 24-24v-48h78.1l-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9l-72-72c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31H464V184c0-13.3-10.7-24-24-24s-24 10.7-24 24v48z"
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
                  d="M64 256a144 144 0 1 1 288 0 144 144 0 1 1-288 0m319.3-16C375.2 150.3 299.8 80 208 80c-97.2 0-176 78.8-176 176s78.8 176 176 176c91.8 0 167.2-70.3 175.3-160H432v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h89.4l-52.7 52.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l80-80c6.2-6.2 6.2-16.4 0-22.6l-80-80c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l52.7 52.7H464v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48z"
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
                  d="M48 256a160 160 0 1 1 320 0 160 160 0 1 1-320 0m335.8-8C379.6 154.5 302.5 80 208 80c-97.2 0-176 78.8-176 176s78.8 176 176 176c94.5 0 171.6-74.5 175.8-168H448v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h116.7l-74.3 74.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l88-88c3.1-3.1 3.1-8.2 0-11.3l-88-88c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l74.3 74.4H464v-56c0-4.4-3.6-8-8-8s-8 3.6-8 8v56z"
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
                  d="M128 256a80 80 0 1 1 160 0 80 80 0 1 1-160 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M208 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224m174.4-88c-11.7 85.8-85.3 152-174.4 152-97.2 0-176-78.8-176-176S110.8 80 208 80c89.1 0 162.7 66.2 174.4 152H416v-56c0-13.3 10.7-24 24-24s24 10.7 24 24v56h32v-56c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-6.9 6.9-17.2 8.9-26.2 5.2S496 345.6 496 335.9V280h-32v56c0 13.3-10.7 24-24 24s-24-10.7-24-24v-56z"
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
