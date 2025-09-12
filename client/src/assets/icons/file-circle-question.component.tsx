import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FileCircleQuestionIcon: React.FC<
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
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v38.6c-73.9 20.9-128 88.8-128 169.4 0 59.1 29.1 111.3 73.7 143.3-3.2.5-6.4.7-9.7.7H64c-35.3 0-64-28.7-64-64zm384 64H256V0zm48 96a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 240a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-64-142.4v6.4c0 8.8 7.2 16 16 16s16-7.2 16-16v-6.4c0-5.3 4.3-9.6 9.6-9.6h40.5c7.7 0 13.9 6.2 13.9 13.9 0 5.2-2.9 9.9-7.4 12.3l-32 16.8c-5.3 2.8-8.6 8.2-8.6 14.2V384c0 8.8 7.2 16 16 16s16-7.2 16-16v-5.1l23.5-12.3C486.6 358.7 496 343 496 326c0-25.4-20.6-45.9-45.9-45.9h-40.5c-23 0-41.6 18.6-41.6 41.6z"
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
                  d="M64 464h220.5c12 18.4 27.4 34.5 45.3 47.3-3.2.5-6.4.7-9.7.7H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h165.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3v44.1c-17.2 4.9-33.4 12.3-48 21.8V160h-80c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16m368-240a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 240a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-64-142.4v6.4c0 8.8 7.2 16 16 16s16-7.2 16-16v-6.4c0-5.3 4.3-9.6 9.6-9.6h40.5c7.7 0 13.9 6.2 13.9 13.9 0 5.2-2.9 9.9-7.4 12.3l-32 16.8c-5.3 2.8-8.6 8.2-8.6 14.2V384c0 8.8 7.2 16 16 16s16-7.2 16-16v-5.1l23.5-12.3C486.6 358.7 496 343 496 326c0-25.4-20.6-45.9-45.9-45.9h-40.5c-23 0-41.6 18.6-41.6 41.6z"
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
                  d="M64 480h232.2c9.8 11.8 21 22.3 33.5 31.3-3.2.5-6.4.7-9.7.7H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h156.1C232.8 0 245 5.1 254 14.1l115.9 115.8c9 9 14.1 21.2 14.1 33.9v34.7c-11.2 3.2-21.9 7.4-32 12.6V192H240c-26.5 0-48-21.5-48-48V32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32m287.5-320c-.7-2.8-2.1-5.4-4.2-7.4L231.4 36.7c-2.1-2.1-4.6-3.5-7.4-4.2V144c0 8.8 7.2 16 16 16zM544 368a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-256 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-64-86.4c0-23 18.6-41.6 41.6-41.6h40.5c25.4 0 45.9 20.6 45.9 45.9 0 17.1-9.5 32.7-24.5 40.6L447.8 387c-1.4 7.4-7.9 12.9-15.7 12.9-8.8 0-16-7.2-16-16v-6.8c0-5.9 3.3-11.4 8.6-14.2l32-16.8c4.6-2.4 7.4-7.2 7.4-12.3 0-7.7-6.2-13.9-13.9-13.9h-40.6c-5.3 0-9.6 4.3-9.6 9.6v6.5c0 8.8-7.2 16-16 16s-16-7.2-16-16z"
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
                  d="M64 496h247.2c5.8 5.5 12 10.6 18.5 15.3-3.2.5-6.4.7-9.7.7H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h140.1C216.8 0 229 5.1 238 14.1l131.9 131.8c9 9 14.1 21.2 14.1 33.9v18.7c-5.4 1.5-10.8 3.3-16 5.4v-24c0-1.3-.1-2.6-.2-3.9H248c-22.1 0-40-17.9-40-40V16.2c-1.3-.2-2.6-.2-3.9-.2H64c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48m297.1-336q-1.2-1.5-2.4-2.7l-132-131.9q-1.35-1.35-2.7-2.4v113c0 13.3 10.7 24 24 24zM560 368a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-272 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-64-90.1c0-20.9 17-37.9 37.9-37.9H454c23.2 0 42 18.8 42 42v8h-.8c-2.6 13.2-11.4 24.6-24 30.3L440 382.4v9.6c0 4.4-3.6 8-8 8s-8-3.6-8-8v-14.8c0-3.1 1.8-6 4.7-7.3l36-16.2c9.3-4.2 15.3-13.4 15.3-23.7 0-14.4-11.6-26-26-26h-48.1c-12.1 0-21.9 9.8-21.9 21.9v2.1c0 4.4-3.6 8-8 8s-8-3.6-8-8z"
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
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v38.6c-73.9 20.9-128 88.8-128 169.4 0 59.1 29.1 111.3 73.7 143.3-3.2.5-6.4.7-9.7.7H64c-35.3 0-64-28.7-64-64z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M384 160 224 0v128c0 17.7 14.3 32 32 32zm48 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-96a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-64-94.4c0-23 18.6-41.6 41.6-41.6h40.5c25.4 0 45.9 20.6 45.9 45.9 0 17.1-9.5 32.7-24.5 40.6L448 378.9v5.1c0 8.8-7.2 16-16 16s-16-7.2-16-16v-14.8c0-5.9 3.3-11.4 8.6-14.2l32-16.8c4.6-2.4 7.4-7.2 7.4-12.3 0-7.7-6.2-13.9-13.9-13.9h-40.5c-5.3 0-9.6 4.3-9.6 9.6v6.4c0 8.8-7.2 16-16 16s-16-7.2-16-16z"
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
