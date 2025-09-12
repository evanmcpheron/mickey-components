import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SwordLaserAltIcon: React.FC<
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
                  d="M505.7 40.2c8.7-9.5 8.3-24.1-.7-33.2s-23.7-9.4-33.2-.7L225.1 232h105.1zM189.3 256c-12.7 0-24.9 5.1-33.9 14.1l-49 49 27.3 27.3 32 32 27.3 27.3 122.3-122.4c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9zm-7.6 161L160 395.3 54.3 501l3.5 3.5c4.8 4.8 11.3 7.5 18.1 7.5s13.3-2.7 18.1-7.5zM43 489.7 148.7 384 128 363.3 22.3 469zm-32-32L116.7 352 95 330.3 7.5 417.9C2.7 422.7 0 429.2 0 436s2.7 13.3 7.5 18.1l3.5 3.5z"
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
                  d="M505.7 40.2c8.7-9.5 8.3-24.1-.7-33.2s-23.7-9.4-33.2-.7L225.1 232h105.1zM13.2 459.8l39 39C60.6 507.3 72.1 512 84 512s23.4-4.7 31.8-13.2L310.6 304l1.1-1.1 8.3-8.3 11.3-11.3c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9H173.3c-12.7 0-24.9 5.1-33.9 14.1L13.2 396.2C4.7 404.6 0 416.1 0 428s4.7 23.4 13.2 31.8M242.7 304l-70.1 70.1-34.7-34.7 35.4-35.4h69.5zM150 396.7l-66 66L49.3 428l66.1-66.1 34.7 34.7z"
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
                  d="M353.2 224 503.8 57.1c5.3-5.9 8.2-13.5 8.2-21.4V32c0-17.7-14.3-32-32-32h-3.7c-7.9 0-15.6 2.9-21.4 8.2L215.8 224h47.8L476.3 32h3.7v3.7L310.1 224zm-213.9 46.1L13.2 396.2C4.7 404.6 0 416.1 0 428s4.7 23.4 13.2 31.8l39 39C60.6 507.3 72.1 512 84 512s23.4-4.7 31.8-13.2l215.5-215.5c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9H173.3c-12.7 0-24.9 5.1-33.9 14.1zM281.4 288 184 385.4l-28.7-28.7-28.7-28.7 35.3-35.3c3-3 7.1-4.7 11.3-4.7zM144 390.6l17.4 17.4-68.2 68.2c-2.4 2.4-5.7 3.8-9.2 3.8s-6.7-1.4-9.2-3.8l-8.2-8.2zM121.4 368 44 445.4l-8.2-8.2c-2.4-2.4-3.8-5.7-3.8-9.2s1.4-6.7 3.8-9.2l68.2-68.2z"
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
                  d="M349.9 224 504.8 48.2c4.7-5.3 7.2-12.1 7.2-19.2 0-16-13-29-29-29-7.1 0-13.9 2.6-19.2 7.2L217.7 224h24.2L474.3 19.3c2.4-2.1 5.4-3.3 8.6-3.3 7.2 0 13 5.8 13 13 0 3.2-1.2 6.2-3.3 8.6L328.6 224zm-168.6 48h127.4L184 396.7l-34.3-34.3-34.4-34.4 49-49c4.5-4.5 10.6-7 17-7m-83 50.3-87.5 87.6a36.937 36.937 0 0 0 0 52.2l39 39c7 7 16.4 10.9 26.2 10.9s19.2-3.9 26.1-10.8l87.5-87.5 144-144c2.3-2.3 3-5.7 1.7-8.7s-4.2-4.9-7.4-4.9H181.3c-10.6 0-20.8 4.2-28.3 11.7zm45.7 57 28.7 28.7-81.9 81.9c-3.9 3.9-9.3 6.1-14.8 6.1s-10.9-2.2-14.8-6.1L47.3 476zM22.1 450.8c-3.9-3.9-6.1-9.3-6.1-14.8s2.2-10.9 6.1-14.8l81.9-81.9 28.7 28.7L36 464.7z"
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
                  d="M505 7c9.1 9.1 9.4 23.7.7 33.2L307.8 256.5c-1.2-.3-2.5-.5-3.8-.5H198.9L471.8 6.3c9.5-8.7 24.1-8.3 33.2.7"
                />
                <path
                  className="aps-icon-foreground"
                  d="M155.3 270.1c9-9 21.2-14.1 33.9-14.1H304c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4L193 405.7l-27.3-27.3-32-32-27.4-27.4 49-49zM95 330.3l21.7 21.7L11 457.7l-3.5-3.5C2.7 449.3 0 442.8 0 436s2.7-13.3 7.5-18.1zM22.3 469 128 363.3l20.7 20.7L43 489.7zm32 32L160 395.3l21.7 21.7-87.6 87.5c-4.8 4.8-11.3 7.5-18.1 7.5s-13.3-2.7-18.1-7.5z"
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
