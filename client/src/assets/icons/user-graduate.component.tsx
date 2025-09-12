import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const UserGraduateIcon: React.FC<
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
                  d="M219.3.5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128S96 230.7 96 160v-57.1l-48-9.6v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3S52.8 256 48 256H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64c0-11.4 8.1-21.3 19.3-23.5zM111.9 327.7c10.5-3.4 21.8.4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5 65 20.9 112 81.7 112 153.6 0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6"
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
                  d="M228.7.5c-3.1-.6-6.3-.6-9.4 0l-200 40C8.1 42.7 0 52.6 0 64c0 10.3 6.5 19.3 16 22.6v71.8L.3 236.9c-.9 4.7.3 9.6 3.3 13.3s7.6 5.9 12.4 5.9h32c4.8 0 9.3-2.1 12.4-5.9s4.3-8.6 3.3-13.3L48 158.4V93.3l171.3 34.3c3.1.6 6.3.6 9.4 0l200-40C439.9 85.3 448 75.4 448 64s-8.1-21.3-19.3-23.5zM49.3 464c5.8-37.6 30-69.2 63.3-85.1l63.6 71.5c5 5.6 10.7 10.1 16.9 13.6zm349.4 0H254.9c6.2-3.4 11.9-7.9 16.9-13.6l63.6-71.5c33.3 15.8 57.5 47.4 63.3 85.1M109.6 328.4C45.9 350 0 410.3 0 481.3c0 17 13.8 30.7 30.7 30.7h386.6c17 0 30.7-13.8 30.7-30.7 0-71-45.9-131.3-109.6-152.8-10.9-3.7-22.7.4-30.3 9l-72.1 81c-6.4 7.2-17.6 7.2-23.9 0L140 337.4c-7.6-8.6-19.4-12.7-30.3-9zM96 160c0 70.7 57.3 128 128 128s128-57.3 128-128v-24.5l-48 9.6V160c0 44.2-35.8 80-80 80s-80-35.8-80-80v-14.9l-48-9.6z"
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
                  d="M228.7.7c-3.1-.9-6.3-.9-9.4 0l-208 64C4.6 66.8 0 73 0 80s4.6 13.2 11.3 15.3l20.7 6.4v71.7L.8 266.9c-1.6 4.9-.8 10.3 2.2 14.5s7.8 6.6 13 6.6h64c5.1 0 10-2.5 13-6.6s3.8-9.5 2.2-14.4L64 173.4v-61.9l155.3 47.8c3.1.9 6.3.9 9.4 0l208-64C443.4 93.2 448 87 448 80s-4.6-13.2-11.3-15.3zM224 127.3 70.4 80 224 32.7 377.6 80zm-35.9 312.5c19.1 21.5 52.7 21.5 71.8 0l71.1-80c49.2 18 84.4 65 85 120.2H32c.5-55.2 35.7-102.3 85-120.2zm-78.5-111.4C45.9 350 0 410.3 0 481.3c0 17 13.8 30.7 30.7 30.7h386.6c17 0 30.7-13.8 30.7-30.7 0-71-45.9-131.3-109.6-152.8-10.9-3.7-22.7.4-30.3 9l-72.1 81c-6.4 7.2-17.6 7.2-23.9 0L140 337.4c-7.6-8.6-19.4-12.7-30.3-9zM48 226.6l9.8 29.4H38.2zm48-71.8V176c0 70.7 57.3 128 128 128s128-57.3 128-128v-21.2l-32 9.8V176c0 53-43 96-96 96s-96-43-96-96v-11.3l-32-9.8z"
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
                  d="M228.7 17.8c-3.1-.9-6.3-.9-9.4 0L43.2 72l176.1 54.2c3.1.9 6.3.9 9.4 0L404.8 72zM214.6 2.5c6.1-1.9 12.7-1.9 18.8 0l201 61.9c3.4 1 5.6 4.1 5.6 7.6s-2.3 6.6-5.6 7.6l-201 61.9c-6.1 1.9-12.7 1.9-18.8 0L48 90.2v76.5l31.6 94.8c.8 2.4.4 5.1-1.1 7.2S74.6 272 72 272H8c-2.6 0-5-1.2-6.5-3.3s-1.9-4.8-1.1-7.2L32 166.7V88c0-.9.1-1.8.4-2.6l-18.8-5.8C10.3 78.6 8 75.5 8 72s2.3-6.6 5.6-7.6zm1.4 444.6-4-4.5-90-101.2C60.9 358.5 16 414.7 16 481.3c0 8.1 6.6 14.7 14.7 14.7H216zm16 0V496h185.3c8.1 0 14.7-6.6 14.7-14.7 0-66.6-44.9-122.8-106-139.9l-90 101.2zm88.4-123.6C393.3 339 448 403.8 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3 0 403.8 54.7 339 127.6 323.5l85.7 96.5 10.7 12 10.7-12 85.7-96.4zM19.1 256h41.8L40 193.3zM96 176v-37.9l16 4.9v33c0 61.9 50.1 112 112 112s112-50.1 112-112v-33l16-4.9V176c0 70.7-57.3 128-128 128S96 246.7 96 176"
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
                  d="M96 160v-16h256v16c0 70.7-57.3 128-128 128S96 230.7 96 160"
                />
                <path
                  className="aps-icon-foreground"
                  d="M219.3.5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V144H96v-41.1l-48-9.6v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3S52.8 256 48 256H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64c0-11.4 8.1-21.3 19.3-23.5zM111.9 327.7c10.5-3.4 21.8.4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5 65 20.9 112 81.7 112 153.6 0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6"
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
