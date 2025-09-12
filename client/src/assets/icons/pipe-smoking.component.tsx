import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const PipeSmokingIcon: React.FC<
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
                  d="M575.2 64c-32.1 0-62.1 16-79.9 42.7l-61.8 92.7c-3.9-4.8-8.6-9.1-14-12.7l-24-16c-4.7-3.2-9.7-5.6-14.9-7.4L442 71.2C471.7 26.7 521.7 0 575.2 0H608c17.7 0 32 14.3 32 32s-14.3 32-32 32zM333.4 206.2c9.8-14.7 29.7-18.7 44.4-8.9l24 16c14.7 9.8 18.7 29.7 8.9 44.4L287.8 442.1c-29.2 43.7-78.2 69.9-130.7 69.9C70.3 512 0 441.7 0 354.9V272c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v50.3z"
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
                  d="M586.8 48c-36.4 0-70.1 19-89 50.2l-85.7 141.6c13 16 14.6 39.3 2.4 57.2l-95.8 141.3c-31.3 46.1-83.3 73.7-139 73.7H168C75.2 512 0 436.8 0 344V232c0-30.9 25.1-56 56-56h160c30.9 0 56 25.1 56 56v9.4l23-29.9c12.3-16 32.9-22.2 51.4-16.9l111.2-138C486.4 20.8 529.9 0 575.9 0H616c13.3 0 24 10.7 24 24s-10.7 24-24 24zM56 224c-4.4 0-8 3.6-8 8v112c0 66.3 53.7 120 120 120h11.7c39.8 0 77-19.7 99.3-52.6l95.9-141.3-41.9-29.3-66 85.8c-6.3 8.1-17 11.4-26.8 8.1s-16.3-12.4-16.3-22.7v-80c0-4.4-3.6-8-8-8z"
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
                  d="M586.6 32c-35.2 0-68.4 16.6-89.5 44.7L395 212.5c18.2 15.5 22.4 42.4 8.9 62.8L296 439.8c-29.5 45.1-79.8 72.2-133.7 72.2H160C71.6 512 0 440.4 0 352v-72c0-30.9 25.1-56 56-56h144c28.4 0 51.9 21.2 55.5 48.6l49.5-66c14.9-19.9 42.5-25 63.5-12.1l103-137C498.7 21.3 541.3 0 586.6 0H624c8.8 0 16 7.2 16 16s-7.2 16-16 16zm-256 193.8-77.8 103.8c-4.1 5.5-11.3 7.8-17.9 5.6S224 326.9 224 320v-40c0-13.3-10.7-24-24-24H56c-13.3 0-24 10.7-24 24v72c0 70.7 57.3 128 128 128h2.3c43.1 0 83.4-21.7 107-57.8l107.9-164.4c4.8-7.3 2.8-17.2-4.5-22.1l-20.4-13.6c-7.1-4.7-16.6-3.1-21.7 3.7"
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
                  d="M573.8 0C524 0 477 23.2 446.7 62.8L270.4 293.6c-4.6 6.1-14.4 2.8-14.4-4.9V264c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40v96c0 83.9 68.1 152 152 152h9.8c51.5 0 99.5-26.1 127.5-69.3L509 104.1c16.2-25 44-40.1 73.8-40.1H608c17.7 0 32-14.3 32-32S625.7 0 608 0zM459.4 72.6C486.6 36.9 528.9 16 573.8 16H608c8.8 0 16 7.2 16 16s-7.2 16-16 16h-25.2c-35.2 0-68.1 17.8-87.2 47.4l-84.8 130.7-43.7-32.8zM357.4 206l44.7 33.5L275.9 434c-25.1 38.7-68 62-114.1 62H152c-75.1 0-136-60.9-136-136v-96c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24v24.7c0 23 29.1 32.8 43.1 14.6z"
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
                  d="M495.3 106.7C513.1 80 543.1 64 575.2 64H608c17.7 0 32-14.3 32-32S625.7 0 608 0h-32.8C521.7 0 471.7 26.7 442 71.2L361.5 192c5.6.3 11.2 2 16.2 5.3l24 16c5.8 3.9 9.9 9.3 12.2 15.4l81.3-122z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M377.8 197.4c-14.7-9.8-34.6-5.8-44.4 8.9l-77.4 116V272c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v82.9C0 441.7 70.3 512 157.1 512c52.5 0 101.6-26.2 130.7-69.9l122.8-184.3c9.8-14.7 5.8-34.6-8.9-44.4l-24-16z"
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
