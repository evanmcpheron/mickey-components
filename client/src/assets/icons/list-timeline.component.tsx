import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ListTimelineIcon: React.FC<
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
                  d="M16 96a48 48 0 1 1 96 0 48 48 0 1 1-96 0m48 112a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 160a48 48 0 1 1 0 96 48 48 0 1 1 0-96M191.5 54.4c5.5-4.2 12.3-6.4 19.2-6.4H424c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H210.7c-6.9 0-13.7-2.2-19.2-6.4l-38.4-28.8c-8.5-6.4-8.5-19.2 0-25.6zm-38.4 188.8 38.4-28.8c5.5-4.2 12.3-6.4 19.2-6.4H488c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H210.7c-6.9 0-13.7-2.2-19.2-6.4l-38.4-28.8c-8.5-6.4-8.5-19.2 0-25.6m0 160 38.4-28.8c5.5-4.2 12.3-6.4 19.2-6.4H424c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H210.7c-6.9 0-13.7-2.2-19.2-6.4l-38.4-28.8c-8.5-6.4-8.5-19.2 0-25.6"
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
                  d="M219.9 112H400V80H219.9l-16 16zm-72.6-4.7c-6.2-6.2-6.2-16.4 0-22.6l43.3-43.3c6-6 14.1-9.4 22.6-9.4H416c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H213.3c-8.5 0-16.6-3.4-22.6-9.4l-43.3-43.3zM64 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0 160a32 32 0 1 1 0-64 32 32 0 1 1 0 64M32 416a32 32 0 1 1 64 0 32 32 0 1 1-64 0m187.9 16H400v-32H219.9l-16 16zm-72.6-4.7c-6.2-6.2-6.2-16.4 0-22.6l43.3-43.3c6-6 14.1-9.4 22.6-9.4H416c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H213.3c-8.5 0-16.6-3.4-22.6-9.4l-43.3-43.3zM203.9 256l16 16H464v-32H219.9zm-13.3 54.6-43.3-43.3c-6.2-6.2-6.2-16.4 0-22.6l43.3-43.3c6-6 14.1-9.4 22.6-9.4H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H213.3c-8.5 0-16.6-3.4-22.6-9.4z"
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
                  d="M213.3 128H416V64H213.3l-32 32zm-22.7-86.6c6-6 14.1-9.4 22.6-9.4H416c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H213.3c-8.5 0-16.6-3.4-22.6-9.4l-43.3-43.3c-6.2-6.2-6.2-16.4 0-22.6l43.3-43.3zM64 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0 160a32 32 0 1 1 0-64 32 32 0 1 1 0 64M32 416a32 32 0 1 1 64 0 32 32 0 1 1-64 0m181.3 32H416v-64H213.3l-32 32zm-22.6-86.6c6-6 14.1-9.4 22.6-9.4H416c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H213.3c-8.5 0-16.6-3.4-22.6-9.4l-43.3-43.3c-6.2-6.2-6.2-16.4 0-22.6zM181.3 256l32 32H480v-64H213.3zm-33.9-11.3 43.3-43.3c6-6 14.1-9.4 22.6-9.4H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H213.3c-8.5 0-16.6-3.4-22.6-9.4l-43.3-43.3c-6.2-6.2-6.2-16.4 0-22.6"
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
                  d="m158.6 96 43.3 43.3c3 3 7.1 4.7 11.3 4.7H416c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H213.3c-4.2 0-8.3 1.7-11.3 4.7zm32-54.6c6-6 14.1-9.4 22.6-9.4H416c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H213.3c-8.5 0-16.6-3.4-22.6-9.4l-43.3-43.3c-6.2-6.2-6.2-16.4 0-22.6l43.3-43.3zM96 96a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-80 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0m80 160a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-80 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0m48 128a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0 80a48 48 0 1 1 0-96 48 48 0 1 1 0 96m94.6-48 43.3 43.3c3 3 7.1 4.7 11.3 4.7H416c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H213.3c-4.2 0-8.3 1.7-11.3 4.7zm32-54.6c6-6 14.1-9.4 22.6-9.4H416c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H213.3c-8.5 0-16.6-3.4-22.6-9.4l-43.3-43.3c-6.2-6.2-6.2-16.4 0-22.6l43.3-43.3zm11.3-148.7L158.6 256l43.3 43.3c3 3 7.1 4.7 11.3 4.7H480c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H213.3c-4.2 0-8.3 1.7-11.3 4.7zm-54.6 32 43.3-43.3c6-6 14.1-9.4 22.6-9.4H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H213.3c-8.5 0-16.6-3.4-22.6-9.4l-43.3-43.3c-6.2-6.2-6.2-16.4 0-22.6z"
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
                  d="M153.1 83.2c-8.5 6.4-8.5 19.2 0 25.6l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4H424c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H210.7c-6.9 0-13.7 2.2-19.2 6.4zm38.4 131.2-38.4 28.8c-8.5 6.4-8.5 19.2 0 25.6l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4H488c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24H210.7c-6.9 0-13.7 2.2-19.2 6.4m0 160-38.4 28.8c-8.5 6.4-8.5 19.2 0 25.6l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4H424c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24H210.7c-6.9 0-13.7 2.2-19.2 6.4"
                />
                <path
                  className="aps-icon-foreground"
                  d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96m48 112a48 48 0 1 0-96 0 48 48 0 1 0 96 0m0 160a48 48 0 1 0-96 0 48 48 0 1 0 96 0"
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
