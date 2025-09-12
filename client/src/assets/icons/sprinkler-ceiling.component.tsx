import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const SprinklerCeilingIcon: React.FC<
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
                  d="M0 0v96c0 15.3 10.8 28.4 25.7 31.4L128 147.8V82.6L64 69.8V0zm256 82.6v65.3l102.3-20.5c15-3 25.7-16.1 25.7-31.4V0h-64v69.8zM160 344a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-48 64a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-88 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48m248-152a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-80 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-32 40a24 24 0 1 0-48 0 24 24 0 1 0 48 0m136-40a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-24 40a24 24 0 1 0-48 0 24 24 0 1 0 48 0m88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48M224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v128H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64z"
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
                  d="M0 0v96c0 11.5 8.2 21.4 19.5 23.6L128 140.2V91.4L48 76.1V0zm256 91.4v48.9l108.5-20.7c11.3-2.2 19.5-12.1 19.5-23.6V0h-48v76.1zM160 344a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-48 64a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-88 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48m248-152a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-80 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-32 40a24 24 0 1 0-48 0 24 24 0 1 0 48 0m136-40a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-24 40a24 24 0 1 0-48 0 24 24 0 1 0 48 0m88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48M216 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v152H88c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80z"
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
                  d="M0 0h32v83.8l96 26.2v33.2L11.8 111.4C4.8 109.5 0 103.2 0 96zm256 110 96-26.2V0h32v96c0 7.2-4.8 13.5-11.8 15.4L256 143.1zm-64-78c8.8 0 16 7.2 16 16v176h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h96V48c0-8.8 7.2-16 16-16m-48 288a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-64 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32m144-48a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-32 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-64 80a16 16 0 1 1 32 0 16 16 0 1 1-32 0m112-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m112 16a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-48-80a16 16 0 1 1 0 32 16 16 0 1 1 0-32M0 464a16 16 0 1 1 32 0 16 16 0 1 1-32 0"
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
                  d="M0 0v96c0 3.6 2.5 6.8 6 7.7l122 31.8V119L16 89.8V0zm256 119v16.5l122-31.8c3.5-.9 6-4.1 6-7.7V0h-16v89.8zm-64-71c8.8 0 16 7.2 16 16v176h-32V64c0-8.8 7.2-16 16-16m32 192V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v176H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h240c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-80 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32m-64 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32m176-80a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-64 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m-32 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0m80 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m144-16a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-80-48a16 16 0 1 0 0-32 16 16 0 1 0 0 32M32 464a16 16 0 1 0-32 0 16 16 0 1 0 32 0"
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
                  d="M112 344a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-48 64a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-40 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48m200-104a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-32 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-80 88a24 24 0 1 1 48 0 24 24 0 1 1-48 0m184-88a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-72 88a24 24 0 1 1 48 0 24 24 0 1 1-48 0m136-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
                />
                <path
                  className="aps-icon-foreground"
                  d="M0 96c0 15.3 10.8 28.4 25.7 31.4L128 147.8V82.6L64 69.8V0H0zm256 51.8 102.3-20.5c15-3 25.7-16.1 25.7-31.4V0h-64v69.8l-64 12.8v65.3zM224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v128H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64z"
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
