import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const HurricaneIcon: React.FC<
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
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M0 208C0 104.4 75.7 18.5 174.9 2.6c9.1-1.4 17.1 6 17.1 15.3v63.3c0 8.4 6.5 15.3 14.7 16.5C307 112.5 384 199 384 303.4c0 103.6-75.7 189.5-174.9 205.4-9.2 1.5-17.1-5.9-17.1-15.2v-63.4c0-8.4-6.5-15.3-14.7-16.5C77 398.9 0 312.4 0 208m288 48a96 96 0 1 0-192 0 96 96 0 1 0 192 0m-96-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 208c0-74.5 51-137.2 120-155v52.4c0 21.2 16 37.1 34.6 40.2C278.3 158.3 336 224.1 336 303.4c0 74.5-51 137.2-120 155V406c0-21.2-16-37.1-34.6-40.2C105.7 353.1 48 287.3 48 208M216 42.1c0-22.7-20.1-43.4-45.6-38.7C73.5 21.1 0 105.9 0 208c0 101.2 72.3 185.5 168 204.2v57.1c0 22.7 20.1 43.4 45.6 38.7C310.5 490.3 384 405.5 384 303.4c0-101.2-72.3-185.5-168-204.2zM176 256a16 16 0 1 1 32 0 16 16 0 1 1-32 0m80 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M32 208c0-89.1 66.2-162.7 152-174.4v65.2c0 16.4 12.1 29.1 26.8 32.1C291.3 147 352 218.1 352 303.4c0 89.1-66.2 162.7-152 174.4v-65.2c0-16.4-12.1-29.1-26.8-32.1C92.7 364.4 32 293.3 32 208M216 32.8C216 15 200.9-.8 181.4 1.7 79.1 14.8 0 102.2 0 208c0 100.8 71.7 184.9 166.9 203.9.5.1.8.3 1 .5l.1.1v65.9c0 17.8 15.1 33.6 34.6 31.1C304.9 496.6 384 409.3 384 303.4c0-100.8-71.7-184.9-166.9-203.9-.5-.1-.8-.3-1-.5-.1-.1-.1-.2-.1-.2zM240 256a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-48-80a80 80 0 1 0 0 160 80 80 0 1 0 0-160"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M200 24c0-4.6-3.6-7.7-7.4-7.4C93.8 24.4 16 107.1 16 208c0 91 63.4 167.3 148.4 187 10.9 2.5 19.6 12.1 19.6 24.1v68.3c0 4.6 3.6 7.7 7.4 7.4C290.2 487 368 404.3 368 303.4c0-91-63.4-167.3-148.4-187-10.9-2.5-19.6-12.1-19.6-24.1zM191.4.7C205.2-.4 216 10.9 216 24v68.3c0 3.8 2.8 7.5 7.2 8.5C315.3 122.2 384 204.7 384 303.4c0 109.3-84.3 198.9-191.4 207.3-13.9 1.1-24.6-10.3-24.6-23.3v-68.3c0-3.8-2.8-7.5-7.2-8.5C68.7 389.2 0 306.7 0 208 0 98.7 84.3 9.1 191.4.7M192 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0-176a96 96 0 1 1 0 192 96 96 0 1 1 0-192m16 96a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M174.9 2.6C75.7 18.5 0 104.4 0 208c0 104.4 77 190.9 177.3 205.7 8.3 1.2 14.7 8.1 14.7 16.5v63.3c0 9.3 8 16.7 17.1 15.2C308.3 492.9 384 407 384 303.4c0-104.4-77-190.9-177.3-205.8-8.3-1.2-14.7-8.1-14.7-16.5V17.9c0-9.3-8-16.7-17.1-15.2zM192 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192"
                />
                <path
                  className="aps-icon-foreground"
                  d="M192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0-128a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
