import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const JetFighterUpIcon: React.FC<
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
                  d="M270.7 9.7C268.2 3.8 262.4 0 256 0s-12.2 3.8-14.7 9.7l-44.1 102.9c-3.4 8-5.2 16.5-5.2 25.2v77l-144 84V280c0-13.3-10.7-24-24-24S0 266.7 0 280v112c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h144v32.7L133.5 468c-3.5 3-5.5 7.4-5.5 12v16c0 8.8 7.2 16 16 16h96v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v64h96c8.8 0 16-7.2 16-16v-16c0-4.6-2-9-5.5-12L320 416.7V384h144v8c0 13.3 10.7 24 24 24s24-10.7 24-24V280c0-13.3-10.7-24-24-24s-24 10.7-24 24v18.8l-144-84v-77c0-8.7-1.8-17.2-5.2-25.2z"
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
                  d="M277.2 12.8C273.1 4.9 264.9 0 256 0s-17.1 4.9-21.2 12.8l-66.4 125.4c-5.5 10.4-8.4 21.9-8.4 33.7v31.6L48 281.9V248c0-13.3-10.7-24-24-24S0 234.7 0 248v144c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h112v1.1l-41.9 66.3c-4 6.3-6.1 13.6-6.1 21.1 0 21.8 17.7 39.5 39.5 39.5h209c21.8 0 39.5-17.7 39.5-39.5 0-7.5-2.1-14.8-6.1-21.1L352 385.1V384h112v8c0 13.3 10.7 24 24 24s24-10.7 24-24V248c0-13.3-10.7-24-24-24s-24 10.7-24 24v33.9l-112-78.4v-31.6c0-11.7-2.9-23.3-8.4-33.7zM457.6 336H352v-73.9zM304 360v32c0 4.5 1.3 9 3.7 12.8l37.4 59.2H280v-56c0-13.3-10.7-24-24-24s-24 10.7-24 24v56h-65.1l37.4-59.2c2.4-3.8 3.7-8.3 3.7-12.8V171.9c0-3.9 1-7.8 2.8-11.2L256 75.3l45.2 85.4c1.8 3.5 2.8 7.3 2.8 11.2V360m-144-24H54.4L160 262.1z"
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
                  d="M270.6 9.5C268.1 3.7 262.3 0 256 0s-12.1 3.7-14.6 9.5l-59.9 134.7c-3.6 8.2-5.5 17-5.5 26v40l-.4.3L32 299.3V272c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h144v3.4l-42.2 66.8c-3.8 6-5.8 13-5.8 20.1 0 20.8 16.9 37.7 37.7 37.7h180.6c20.8 0 37.7-16.9 37.7-37.7 0-7.1-2-14.1-5.8-20.1L336 387.4V384h144v16c0 8.8 7.2 16 16 16s16-7.2 16-16V272c0-8.8-7.2-16-16-16s-16 7.2-16 16v27.3l-143.6-88.9-.4-.3v-40c0-9-1.9-17.8-5.5-26zM480 352H336V247.8l144 89.1zm-304 0H32v-15.1l144-89.1zm34.8-194.8L256 55.4l45.2 101.8c1.8 4.1 2.8 8.5 2.8 13V392c0 3 .9 6 2.5 8.5l44.6 70.7c.6.9.9 2 .9 3.1 0 3.2-2.6 5.7-5.7 5.7H272v-64c0-8.8-7.2-16-16-16s-16 7.2-16 16v64h-74.3c-3.2 0-5.7-2.6-5.7-5.7 0-1.1.3-2.1.9-3.1l44.6-70.7c1.6-2.6 2.5-5.5 2.5-8.5V170.2c0-4.5.9-8.9 2.8-13"
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
                  d="M263.2 4.6a7.934 7.934 0 0 0-14.4 0l-57.9 123c-4.5 9.6-6.9 20.1-6.9 30.7V216c-1.4 0-2.8.4-4.1 1.1L16 314v-50c0-4.4-3.6-8-8-8s-8 3.6-8 8v144c0 4.4 3.6 8 8 8s8-3.6 8-8v-24h168v5.1l-50.5 61.4c-3.5 4.3-5.5 9.7-5.5 15.3V488c0 13.3 10.7 24 24 24h208c13.3 0 24-10.7 24-24v-22.3c0-5.6-1.9-11-5.5-15.3L328 389.1V384h168v24c0 4.4 3.6 8 8 8s8-3.6 8-8V264c0-4.4-3.6-8-8-8s-8 3.6-8 8v50l-163.9-96.9c-1.3-.8-2.7-1.1-4.1-1.1v-57.7c0-10.6-2.3-21.1-6.9-30.7zM264 496v-80c0-4.4-3.6-8-8-8s-8 3.6-8 8v80h-96c-4.4 0-8-3.6-8-8v-22.3c0-1.9.6-3.7 1.8-5.1l52.4-63.6c1.2-1.4 1.8-3.2 1.8-5.1V158.3c0-8.2 1.8-16.4 5.3-23.8L256 26.8l50.7 107.7c3.5 7.5 5.3 15.6 5.3 23.8V392c0 1.9.6 3.7 1.8 5.1l52.4 63.6c1.2 1.4 1.8 3.2 1.8 5.1V488c0 4.4-3.6 8-8 8zm232-128H328V233.3l168 99.3zm-312 0H16v-35.4l168-99.3z"
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
                  d="M48 384v-88l144-80v168zm416 0H320V216l144 80z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M270.7 9.7C268.2 3.8 262.4 0 256 0s-12.2 3.8-14.7 9.7l-44.1 102.9c-3.4 8-5.2 16.5-5.2 25.2v278.9L133.5 468c-3.5 3-5.5 7.4-5.5 12v16c0 8.8 7.2 16 16 16h96v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v64h96c8.8 0 16-7.2 16-16v-16c0-4.6-2-9-5.5-12L320 416.7V137.9c0-8.7-1.8-17.2-5.2-25.2zM24 256c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V280c0-13.3-10.7-24-24-24m488 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24z"
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
