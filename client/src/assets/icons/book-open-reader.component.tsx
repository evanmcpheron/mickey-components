import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BookOpenReaderIcon: React.FC<
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
                  d="M160 96a96 96 0 1 1 192 0 96 96 0 1 1-192 0m80 152v264l-48.4-24.2c-20.9-10.4-43.5-17-66.8-19.3l-96-9.6C12.5 457.2 0 443.5 0 427V224c0-17.7 14.3-32 32-32h30.3c63.6 0 125.6 19.6 177.7 56m32 264V248c52.1-36.4 114.1-56 177.7-56H480c17.7 0 32 14.3 32 32v203c0 16.4-12.5 30.2-28.8 31.8l-96 9.6c-23.2 2.3-45.9 8.9-66.8 19.3z"
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
                  d="M256 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-144a96 96 0 1 1 0 192 96 96 0 1 1 0-192m-28 279-.2-.1c-.7-.5-2.4-1.5-5.2-2.9-5.5-2.8-15.4-7.3-30.6-12.2-28-9-74.2-19.3-144-22.7v176.3c84.9 5 147.1 22.3 184 35.7V282zm52 3v171.1c36.9-13.4 99.1-30.7 184-35.7V241.1c-69.9 3.4-116 13.7-144 22.7-15.1 4.9-25 9.4-30.6 12.2-2.8 1.4-4.5 2.4-5.2 2.9l-.2.1zM32 192.5c167.2 4.9 224 47.5 224 47.5s56.8-42.6 224-47.5c17.7-.5 32 13.9 32 31.5v208c0 17.7-14.4 31.9-32 32.7-114.9 4.7-186.9 33.7-208.8 43.8-4.8 2.2-9.9 3.5-15.1 3.5s-10.4-1.3-15.1-3.5c-21.9-10.1-93.9-39.1-208.8-43.8-17.7-.7-32-15-32-32.7V224c0-17.7 14.4-32.1 32-31.5z"
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
                  d="M256 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128m0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0 48s-56.8-42.6-224-47.5c-17.6-.6-32 13.8-32 31.5v208c0 17.7 14.4 31.9 32 32.7 114.9 4.7 186.9 33.7 208.8 43.8 4.8 2.2 9.9 3.5 15.1 3.5s10.4-1.3 15.1-3.5c21.9-10.1 93.9-39.1 208.8-43.8 17.7-.7 32-15 32-32.7V224c0-17.7-14.4-32.1-32-31.5C312.8 197.4 256 240 256 240m-18.9 25.8 2.9 2.2v205.3c-34-13.8-104.4-36.4-206.7-40.6-.5 0-.9-.2-1.2-.5-.1-.1-.1-.1-.1-.2V224.5c80.5 2.4 133.2 13.9 164.9 24.1 15.9 5.1 26.7 9.9 33 13.2 3.2 1.6 5.3 2.9 6.4 3.6q.6.45.9.6zM272 268l2.9-2.2q.15-.15.9-.6c1.1-.7 3.2-1.9 6.4-3.6 6.3-3.3 17-8.1 33-13.2 31.8-10.2 84.5-21.6 164.9-24.1v207.8l-.1.1c-.3.3-.7.5-1.2.5-102.4 4.2-172.8 26.8-206.8 40.6z"
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
                  d="M256 16a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 176a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0 48s-56.8-42.6-224-47.5c-17.6-.6-32 13.8-32 31.5v208c0 17.7 14.4 31.9 32 32.7 114.9 4.7 186.9 33.7 208.8 43.8 4.8 2.2 9.9 3.5 15.1 3.5s10.4-1.3 15.1-3.5c21.9-10.1 93.9-39.1 208.8-43.8 17.7-.7 32-15 32-32.7V224c0-17.7-14.4-32.1-32-31.5C312.8 197.4 256 240 256 240m-8 14v240.2c-.1-.1-.3-.1-.4-.2-23.5-10.9-97.6-40.5-214.9-45.3-9.5-.4-16.7-8-16.7-16.7V224c0-8.9 7.2-15.8 15.6-15.5 82.3 2.4 136.8 14.1 170.2 24.9 16.7 5.4 28.3 10.5 35.4 14.2 3.6 1.8 6 3.3 7.5 4.2.7.5 1.2.8 1.5 1l.2.2zm16 240.2V254l1.5-1.1.2-.2c.3-.2.8-.5 1.5-1 1.5-.9 4-2.4 7.5-4.2 7.1-3.7 18.7-8.8 35.4-14.2 33.5-10.8 88-22.4 170.2-24.9 8.4-.2 15.6 6.6 15.6 15.5V432c0 8.7-7.2 16.3-16.7 16.7-117.2 4.8-191.3 34.4-214.8 45.3-.1.1-.3.1-.4.2"
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
                  d="M256 192a96 96 0 1 0 0-192 96 96 0 1 0 0 192"
                />
                <path
                  className="aps-icon-foreground"
                  d="M240 512V248c-52.1-36.4-114.1-56-177.7-56H32c-17.7 0-32 14.3-32 32v203c0 16.4 12.5 30.2 28.8 31.8l96 9.6c23.2 2.3 45.9 8.9 66.8 19.3zm32 0 48.4-24.2c20.9-10.4 43.5-17 66.8-19.3l96-9.6c16.4-1.6 28.8-15.4 28.8-31.8V224c0-17.7-14.3-32-32-32h-30.3c-63.6 0-125.6 19.6-177.7 56z"
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
