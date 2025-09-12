import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BoltIcon: React.FC<
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
                  d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288h111.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5z"
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
                  d="M321.7 0c19.1 0 32.9 18.3 27.6 36.6L295.8 224H381c19.3 0 34.9 15.6 34.9 34.9 0 10.3-4.5 20-12.3 26.6L144.9 505.2c-5.2 4.4-11.8 6.8-18.6 6.8-19.1 0-32.9-18.3-27.6-36.6L152.2 288H65.7C47.1 288 32 272.9 32 254.3c0-9.9 4.3-19.2 11.8-25.6L303.1 6.9c5.2-4.5 11.8-6.9 18.6-6.9m-36.1 85L104.4 240H184c7.5 0 14.6 3.5 19.2 9.5s6 13.8 3.9 21l-44.8 157L345.5 272H264c-7.5 0-14.6-3.5-19.2-9.5s-6-13.8-3.9-21z"
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
                  d="M306.8 6.3c4.6-4.1 10.5-6.3 16.6-6.3 17.2 0 29.2 17.1 23.4 33.3L278.7 224H389c14.9 0 27 12.1 27 27 0 7.8-3.3 15.1-9.1 20.3L141.1 505.8c-4.5 4-10.4 6.2-16.5 6.2-17.2 0-29.2-17.1-23.5-33.3L169.3 288H57.8C43.6 288 32 276.4 32 262.2c0-7.4 3.2-14.4 8.7-19.3zm.5 42.4L74.1 256H192c5.2 0 10.1 2.5 13.1 6.8s3.7 9.7 2 14.6l-66.5 186.2L375.8 256H256c-5.2 0-10.1-2.5-13.1-6.8s-3.7-9.7-2-14.6l66.4-186z"
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
                  d="M309.9 6.3c4.5-4.1 10.4-6.3 16.5-6.3 17.8 0 29.9 18.3 22.9 34.7L268.1 224h123.3c13.6 0 24.6 11 24.6 24.6 0 7-3 13.7-8.3 18.4L138.1 505.7c-4.6 4-10.4 6.3-16.5 6.3-17.9 0-29.9-18.3-22.9-34.7L179.9 288H55.3C42.5 288 32 277.5 32 264.7c0-6.7 2.8-13 7.8-17.4zm16.5 9.7c-2.2 0-4.3.8-5.9 2.2l-270 241c-1.6 1.4-2.5 3.4-2.5 5.5 0 4.1 3.3 7.3 7.3 7.3H192c2.7 0 5.2 1.4 6.7 3.6s1.7 5.1.7 7.6l-86 200.4c-2.5 5.9 1.8 12.4 8.2 12.4 2.2 0 4.3-.8 5.9-2.2L397.1 255c1.8-1.6 2.9-4 2.9-6.4 0-4.7-3.8-8.6-8.6-8.6H256c-2.7 0-5.2-1.4-6.7-3.6s-1.7-5.1-.7-7.6l86-200.4c2.5-5.8-1.8-12.4-8.1-12.4z"
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
                  d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288h111.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5z"
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
