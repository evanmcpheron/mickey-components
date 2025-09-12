import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const GaugeHighIcon: React.FC<
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M288 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 320c35.3 0 64-28.7 64-64 0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3.2-31.6 12.3L257.9 288H256c-35.3 0-64 28.7-64 64s28.7 64 64 64m-80-272a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64m352-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m32-400a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 296c30.9 0 56-25.1 56-56 0-14-5.1-26.8-13.7-36.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3.2-31.6 12.3L254.4 296c-30.2.8-54.4 25.6-54.4 56 0 30.9 25.1 56 56 56m-64-248a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-80 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64m320-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
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
                  d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m24-416a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-56 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0c0-18.6-7.9-35.3-20.5-47l82.6-153.4c4.2-7.8 1.3-17.5-6.5-21.7s-17.5-1.3-21.7 6.5l-82.6 153.4q-7.35-1.8-15.3-1.8c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64M168 144a24 24 0 1 0-48 0 24 24 0 1 0 48 0M96 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48m344-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m16-432a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-64 272a48 48 0 1 1 96 0 48 48 0 1 1-96 0m112 0c0-22.2-11.3-41.7-28.4-53.2l83.6-167.2c2-4 .4-8.8-3.6-10.7s-8.8-.4-10.7 3.6l-83.7 167.1c-6.6-2.3-13.8-3.6-21.2-3.6-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64M160 128a16 16 0 1 0-32 0 16 16 0 1 0 32 0M96 256a16 16 0 1 0 0-32 16 16 0 1 0 0 32m336-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
                  d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M288 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32 320c35.3 0 64-28.7 64-64 0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3.2-31.6 12.3L257.9 288H256c-35.3 0-64 28.7-64 64s28.7 64 64 64m-80-272a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64m352-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0"
                />
                <path
                  className="aps-icon-foreground"
                  d="M322 142.3c5.3-12.1 19.5-17.6 31.6-12.3s17.6 19.5 12.3 31.6l-64 145.8c11.2 11.5 18.1 27.2 18.1 44.6 0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64h1.9z"
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
