import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const CucumberIcon: React.FC<
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
                  d="M37.5 474.5c47.8 47.8 124 49.9 174.3 6.3 12.6 10.3 31.1 9.6 42.9-2.2 11.6-11.6 12.4-30 2.4-42.6L436 257c12.6 10.1 31 9.3 42.6-2.4 11.7-11.7 12.5-30.3 2.2-42.9 43.6-50.3 41.5-126.5-6.3-174.3-50-50-131-50-181 0L172 159c-12.6-10.1-31-9.3-42.6 2.4s-12.4 30-2.4 42.6l-89.5 89.5c-50 50-50 131 0 181M400 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-96 160a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-184 56a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
                  d="M71.4 440.6c-31.2-31.2-31.2-81.9 0-113.1l256-256c31.2-31.2 81.9-31.2 113.1 0s31.2 81.9 0 113.1l-63 63c-4.4-4.7-10.6-7.6-17.5-7.6-13.3 0-24 10.7-24 24 0 6.9 2.9 13.1 7.6 17.5l-159 159c-31.2 31.2-81.9 31.2-113.1 0zm-33.9 33.9c47.8 47.8 124 49.9 174.3 6.3 12.6 10.3 31.1 9.6 42.9-2.2 11.6-11.6 12.4-30 2.4-42.6L436 257c12.6 10.1 31 9.3 42.6-2.4 11.7-11.7 12.5-30.3 2.2-42.9 43.6-50.3 41.5-126.5-6.3-174.3-50-50-131-50-181 0L172 159c-12.6-10.1-31-9.3-42.6 2.4s-12.4 30-2.4 42.6l-89.5 89.5c-50 50-50 131 0 181M352 152a24 24 0 1 0 0-48 24 24 0 1 0 0 48M184 320a24 24 0 1 0-48 0 24 24 0 1 0 48 0"
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
                  d="m195.9 451.9 256-256c37.5-37.5 37.5-98.3 0-135.8s-98.3-37.5-135.8 0l-256 256c-37.5 37.5-37.5 98.3 0 135.8s98.3 37.5 135.8 0m21.8 23.4c-50 49.2-130.5 48.9-180.2-.8-50-50-50-131 0-181l95.2-95.2c-7-9.4-6.2-22.7 2.3-31.2s21.9-9.3 31.2-2.3L293.5 37.5c50-50 131-50 181 0 49.7 49.7 50 130.2.8 180.2 7 9.4 6.2 22.7-2.3 31.3s-21.8 9.3-31.2 2.3L251.3 441.7c7 9.4 6.2 22.7-2.3 31.2s-21.9 9.3-31.3 2.3zM128 308a20 20 0 1 1 40 0 20 20 0 1 1-40 0m204-84a20 20 0 1 1 0 40 20 20 0 1 1 0-40m12-108a20 20 0 1 1 40 0 20 20 0 1 1-40 0"
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
                  d="M219.2 463.3c5.6 1.8 11.8.4 16.2-3.9 4.3-4.3 5.7-10.6 4-16.1-1.8-5.7-.2-11.9 4-16.1l183.8-184c4.2-4.2 10.4-5.7 16.1-4 5.5 1.7 11.8.4 16.1-4 4.4-4.4 5.7-10.6 3.9-16.2-1.7-5.4-.4-11.4 3.4-15.6 40.2-43.9 39-112.2-3.5-154.7C419.5 5 348.5 5 304.8 48.7l-124 124c-4.2 4.2-10.4 5.7-16.1 4-5.5-1.7-11.8-.4-16.1 4s-5.7 10.6-4 16.1c1.8 5.7.2 11.9-4 16.1l-92 92c-43.7 43.7-43.7 114.7 0 158.4 42.5 42.5 110.8 43.7 154.7 3.5 4.2-3.9 10.2-5.2 15.6-3.4zM474.5 37.5c48.6 48.6 49.9 126.6 4 176.8 3.5 11 .9 23.6-7.9 32.3-8.7 8.7-21.2 11.3-32.2 7.9l-183.8 184c3.4 11 .8 23.5-7.9 32.2s-21.3 11.4-32.3 7.9c-50.2 45.9-128.2 44.6-176.8-4-50-50-50-131 0-181l92-92c-3.4-11-.8-23.5 7.9-32.2s21.2-11.3 32.2-7.9l124-124c50-50 131-50 181 0zM336 128a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16 112a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-192 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M376 112a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-96 160a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-136 8a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M37.5 474.5c47.8 47.8 124 49.9 174.3 6.3 12.6 10.3 31.1 9.6 42.9-2.2 11.6-11.6 12.4-30 2.4-42.6L436 257c12.6 10.1 31 9.3 42.6-2.4 11.7-11.7 12.5-30.3 2.2-42.9 43.6-50.3 41.5-126.5-6.3-174.3-50-50-131-50-181 0L172 159c-12.6-10.1-31-9.3-42.6 2.4s-12.4 30-2.4 42.6l-89.5 89.5c-50 50-50 131 0 181M400 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-96 160a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-184 56a24 24 0 1 1 48 0 24 24 0 1 1-48 0"
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
