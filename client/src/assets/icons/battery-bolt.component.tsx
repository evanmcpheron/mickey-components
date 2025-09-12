import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const BatteryBoltIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M80 96c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80h92.2c-12.9-14.5-16.1-35.6-7.2-53.5l5.3-10.5H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h139.2l80-64zm384 256H324.8l-80 64H464c44.2 0 80-35.8 80-80v-16c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32v-16c0-44.2-35.8-80-80-80h-92.2c13 14.5 16.1 35.6 7.2 53.5l-5.3 10.5H464c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16M346.1 115.6c-5.8-4.7-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8S169.2 272 176 272h70.1l-52.4 104.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1.1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7h-70.2l52.4-104.8c3.4-6.7 1.6-14.9-4.2-19.6"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M80 96c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80h92.2c-11.6-13-15.3-31.5-9.5-48H80c-17.7 0-32-14.3-32-32V176c0-17.7 14.3-32 32-32h159.2l60-48zm384 272H304.8l-60 48H464c44.2 0 80-35.8 80-80v-16c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32v-16c0-44.2-35.8-80-80-80h-92.2c11.6 13 15.3 31.5 9.5 48H464c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32M346.1 115.6c-5.8-4.7-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8S169.2 272 176 272h70.1l-52.4 104.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1.1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7h-70.2l52.4-104.8c3.4-6.7 1.6-14.9-4.2-19.6"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M80 384h66.4c1 12.1 6.2 23.4 14.4 32H80c-44.2 0-80-35.8-80-80V176c0-44.2 35.8-80 80-80h196l-33.8 32H80c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48m156 32 33.8-32H432c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48h-66.4c-1-12.1-6.2-23.4-14.4-32H432c44.2 0 80 35.8 80 80v160c0 44.2-35.8 80-80 80zm324-224c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16m-368.3 72H240c5.5 0 10.5 2.8 13.5 7.4s3.3 10.4 1 15.3l-19.4 41.9 85.2-80.6H272c-5.5 0-10.5-2.8-13.5-7.4s-3.3-10.4-1-15.3l19.4-41.9zm121.9-152c14.7 0 24.4 15.2 18.2 28.5L297 216h49.4c11.9 0 21.6 9.7 21.6 21.6 0 5.9-2.4 11.6-6.7 15.7L212.2 394.5c-3.7 3.5-8.7 5.5-13.8 5.5-14.7 0-24.4-15.2-18.2-28.5L215 296h-49.4c-11.9 0-21.6-9.7-21.6-21.6 0-5.9 2.4-11.6 6.7-15.7l149.1-141.2c3.7-3.5 8.7-5.5 13.8-5.5"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M80 96c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80h92.2c-4.2-4.7-7.4-10.2-9.5-16H80c-35.3 0-64-28.7-64-64V176c0-35.3 28.7-64 64-64h199.2l20-16zm368 304H264.8l-20 16H448c44.2 0 80-35.8 80-80v-16h16c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-16v-16c0-44.2-35.8-80-80-80h-76.2c4.2 4.7 7.4 10.2 9.5 16H448c35.3 0 64 28.7 64 64v160c0 35.3-28.7 64-64 64m96-192c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-16v-96zm-260.4 24.8c-2.5 5-2.2 10.9.7 15.6s8.1 7.6 13.6 7.6H368L208 384l52.4-104.8c2.5-5 2.2-10.9-.7-15.6s-8.1-7.6-13.6-7.6H176l160-128zm66.7-97.7c3.4-6.7 1.6-14.9-4.2-19.6s-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8s8.3 10.7 15.1 10.7h70.1l-8 16-44.4 88.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1.1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7h-70.2l8-16z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="m299.2 96-80 64H80c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h90.3l-5.3 10.5c-8.9 17.8-5.8 39 7.2 53.5H80c-44.2 0-80-35.8-80-80V176c0-44.2 35.8-80 80-80zm25.7 256H464c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16h-90.3l5.3-10.5c8.9-17.8 5.8-39-7.2-53.5H464c44.2 0 80 35.8 80 80v16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v16c0 44.2-35.8 80-80 80H244.8l80-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M350.3 135.2c3.4-6.7 1.6-14.9-4.2-19.6s-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8S169.2 272 176 272h70.1l-52.4 104.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1.1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7h-70.2z"
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
