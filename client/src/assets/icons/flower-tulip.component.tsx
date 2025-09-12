import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FlowerTulipIcon: React.FC<
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
                  d="M96 44v84c0 70.7 57.3 128 128 128v138.8C192.1 349.5 139.5 320 80 320H29.5C13.2 320 0 333.2 0 349.5 0 439.3 72.7 512 162.5 512h187c89.8 0 162.5-72.7 162.5-162.5 0-16.3-13.2-29.5-29.5-29.5H432c-59.5 0-112.1 29.5-144 74.8V256c70.7 0 128-57.3 128-128V44c0-6.6-5.4-12-12-12-2.6 0-5.1.8-7.2 2.4L336 80 268.8 5.3c-3-3.4-7.4-5.3-11.9-5.3h-1.7c-4.5 0-8.9 1.9-11.9 5.3L176 80l-60.8-45.6c-2.1-1.6-4.6-2.4-7.2-2.4-6.6 0-12 5.4-12 12"
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
                  d="M273.9 8.1C269.4 2.9 262.9 0 256 0s-13.4 2.9-17.9 8.1L189 63.3l-54.3-42.2c-7.2-5.6-17-6.6-25.3-2.6S96 30.8 96 40v112c0 75.1 60.9 136 136 136v85.4c-41-52-104.6-85.4-176-85.4H28c-15.5 0-28 12.5-28 28 0 108.2 87.8 196 196 196h120c108.2 0 196-87.8 196-196 0-15.5-12.5-28-28-28h-28c-71.4 0-135 33.4-176 85.4V288c75.1 0 136-60.9 136-136V40c0-9.2-5.2-17.5-13.5-21.6s-18-3-25.3 2.6L323 63.3zM280 240h-48c-48.6 0-88-39.4-88-88V89.1l33.3 25.9c10 7.8 24.3 6.5 32.7-3l46-51.9 46.1 51.8c8.4 9.5 22.7 10.8 32.7 3L368 89.1V152c0 48.6-39.4 88-88 88m-84 224c-75 0-136.9-55.7-146.7-128H56c80.6 0 148.5 54.1 169.4 128zm120 0h-29.4c20.9-73.9 88.8-128 169.4-128h6.7C452.9 408.3 391 464 316 464"
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
                  d="M268 5.4C264.9 2 260.6 0 256 0s-8.9 2-12 5.4l-54.5 61.3-68.3-47.8c-4.9-3.4-11.3-3.8-16.6-1.1S96 26 96 32v128c0 70.7 57.3 128 128 128h16v108.6C200.8 331.5 129.5 288 48 288H28c-15.5 0-28 12.5-28 28 0 108.2 87.8 196 196 196h120c108.2 0 196-87.8 196-196 0-15.5-12.5-28-28-28h-20c-81.5 0-152.8 43.5-192 108.6V288h16c70.7 0 128-57.3 128-128V32c0-6-3.3-11.4-8.6-14.2s-11.7-2.3-16.6 1.1l-68.3 47.8zM256 256h-32c-53 0-96-43-96-96V62.7l54.8 38.4c6.7 4.7 15.7 3.6 21.1-2.5l52-58.5 52 58.5c5.4 6.1 14.5 7.1 21.1 2.5l55-38.4V160c0 53-43 96-96 96zm-60 224c-89.2 0-161.8-71.3-164-160h16c95.1 0 174.1 69.2 189.3 160zm120 0h-41.3c15.2-90.8 94.2-160 189.3-160h16c-2.1 88.7-74.7 160-164 160"
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
                  d="M262 2.7C260.5 1 258.3 0 256 0s-4.5 1-6 2.7l-59 66.4-66.1-51.4c-2.4-1.9-5.7-2.2-8.4-.9S112 20.9 112 24v112c0 66.3 53.7 120 120 120h16v166.6C220.2 362 159 320 88 320H29.5C13.2 320 0 333.2 0 349.5 0 439.3 72.7 512 162.5 512h187c89.8 0 162.5-72.7 162.5-162.5 0-16.3-13.2-29.5-29.5-29.5H424c-71 0-132.2 42-160 102.6V256h16c66.3 0 120-53.7 120-120V24c0-3.1-1.7-5.8-4.5-7.2s-6-1-8.4.9L321 69.1zm-64 82.6L256 20l58 65.3c2.8 3.2 7.6 3.6 10.9 1l59.1-46V136c0 57.4-46.6 104-104 104h-48c-57.4 0-104-46.6-104-104V40.4l59.1 46c3.3 2.6 8.1 2.2 10.9-1zM88 336c88.4 0 160 71.6 160 160h-85.5C81.6 496 16 430.4 16 349.5c0-7.5 6.1-13.5 13.5-13.5zm176 160c0-88.4 71.6-160 160-160h58.5c7.5 0 13.5 6.1 13.5 13.5 0 80.9-65.6 146.5-146.5 146.5z"
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
                  d="M224 256v138.8C192.1 349.5 139.5 320 80 320H29.5C13.2 320 0 333.2 0 349.5 0 439.3 72.7 512 162.5 512h187c89.8 0 162.5-72.7 162.5-162.5 0-16.3-13.2-29.5-29.5-29.5H432c-59.5 0-112.1 29.5-144 74.8V256z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M96 128V44c0-6.6 5.4-12 12-12 2.6 0 5.1.8 7.2 2.4L176 80l67.2-74.7c3-3.4 7.4-5.3 11.9-5.3h1.7c4.5 0 8.9 1.9 11.9 5.3L336 80l60.8-45.6c2.1-1.6 4.6-2.4 7.2-2.4 6.6 0 12 5.4 12 12v84c0 70.7-57.3 128-128 128h-64c-70.7 0-128-57.3-128-128"
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
