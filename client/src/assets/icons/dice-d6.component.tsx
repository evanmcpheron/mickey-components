import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DiceD6Icon: React.FC<
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
                  d="M201 10.3c14.3-7.8 31.6-7.8 46 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14v216c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8.3L25 423.1C9.6 414.7 0 398.6 0 381V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8.3s7.8 8.1 7.8 13.8V381c0 17.6-9.6 33.7-25 42.1L263.7 510c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14z"
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
                  d="M243.9 7.7C231.5.7 216.3.8 204 8L19.8 115.6C7.5 122.8 0 135.9 0 150.1v216.5c0 14.5 7.8 27.8 20.5 34.9l184 103c12.1 6.8 26.9 6.8 39.1 0l184-103c12.6-7.1 20.5-20.4 20.5-34.9V146.8c0-14.4-7.7-27.7-20.3-34.8zM71.8 140.8l152.4-89.1 152 86.2-152.4 90.3zM48 182.4l152 87.4v177.3L48 361.9zm200 264.7V269.7l152-90.1v182.3z"
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
                  d="M220.1 35.6 47.9 136.2l176 101.2L400 133 228 35.5l11.6-20.4-11.5 20.4c-2.5-1.4-5.5-1.4-8 .1M32 164v202.6c0 2.9 1.6 5.6 4.1 7L208 469.9V265.3zm208 305.9 171.9-96.3c2.5-1.4 4.1-4.1 4.1-7V160.8L240 265.1zm-36.1-462c12.3-7.2 27.5-7.3 39.9-.3L427.7 112c12.5 7.1 20.3 20.4 20.3 34.8v219.8c0 14.5-7.8 27.8-20.5 34.9l-184 103c-12.1 6.8-26.9 6.8-39.1 0l-184-103C7.8 394.4 0 381.1 0 366.6V150.1c0-14.2 7.5-27.4 19.8-34.5z"
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
                  d="M224 0c5.2 0 10.4 1.4 14.9 4.1L436.2 121c7.3 4.3 11.8 12.2 11.8 20.6v228.7c0 8.5-4.5 16.3-11.8 20.6L237.7 508.6c-3.7 2.2-7.9 3.4-12.2 3.4h-2.8c-4.3 0-8.5-1.2-12.2-3.4L11.8 391C4.5 386.6 0 378.8 0 370.3V141.7c0-8.5 4.5-16.3 11.8-20.6l197.3-117C213.6 1.4 218.8 0 224 0M27.4 130.4l196.5 116.3 193.9-118L230.7 17.8c-2-1.2-4.4-1.8-6.7-1.8s-4.7.6-6.7 1.8zM16 142.2v228.1c0 2.8 1.5 5.4 3.9 6.9L216 493.4V260.6zM222.5 496h3zm9.5-2.6 196.1-116.2c2.4-1.4 3.9-4.1 3.9-6.9V141.7c0-.9-.2-1.8-.4-2.6L232 260.5z"
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
                  d="M247 10.3c-14.3-7.8-31.6-7.8-46 0L25.7 106c-5.1 2.8-8.3 8.2-8.3 14s3.2 11.2 8.3 14l190.6 104c4.8 2.6 10.5 2.6 15.3 0l190.7-104c5.1-2.8 8.3-8.2 8.3-14s-3.2-11.2-8.3-14z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M7.8 170.2c4.9-2.9 10.9-3 15.8-.3l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8.3L25 423.1C9.6 414.7 0 398.6 0 381V184c0-5.6 3-10.9 7.8-13.8m432.3 0c4.9 2.9 7.8 8.1 7.8 13.8v197c0 17.6-9.6 33.7-25 42.1L263.7 510c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96c5-2.7 11-2.6 15.8.3z"
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
