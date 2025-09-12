import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FaceGrimaceIcon: React.FC<
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m96-112h-8v-40h55.3c-3.8 22.7-23.6 40-47.3 40m47.3-56H344v-40h8c23.8 0 43.5 17.3 47.3 40m-71.3 0h-64v-40h64zm0 56h-64v-40h64zm-80-96v40h-64v-40zm0 56v40h-64v-40zm-80-16h-55.3c3.8-22.7 23.6-40 47.3-40h8zm0 56h-8c-23.8 0-43.5-17.3-47.3-40H168zm-23.6-192a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M256 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416m256 208a256 256 0 1 1-512 0 256 256 0 1 1 512 0m-344 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v-48zm40 48h32v-48h-32zm96 0v-48h-32v48zm32 0h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8zm-168-80h176c30.9 0 56 25.1 56 56s-25.1 56-56 56H168c-30.9 0-56-25.1-56-56s25.1-56 56-56m-23.6-80a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
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
                  d="M256 32a224 224 0 1 0 0 448 224 224 0 1 0 0-448m256 224a256 256 0 1 1-512 0 256 256 0 1 1 512 0m-344 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h8v-48zm40 48h32v-48h-32zm96 0v-48h-32v48zm32 0h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8zm-168-80h176c30.9 0 56 25.1 56 56s-25.1 56-56 56H168c-30.9 0-56-25.1-56-56s25.1-56 56-56m-15.6-80a24 24 0 1 1 48 0 24 24 0 1 1-48 0m184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"
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
                  d="M256 16a240 240 0 1 0 0 480 240 240 0 1 0 0-480m256 240a256 256 0 1 1-512 0 256 256 0 1 1 512 0m-344 48c-22.1 0-40 17.9-40 40s17.9 40 40 40h8v-80zm24 80h56v-80h-56zm128 0v-80h-56v80zm16 0h8c22.1 0 40-17.9 40-40s-17.9-40-40-40h-8zm-168-96h176c30.9 0 56 25.1 56 56s-25.1 56-56 56H168c-30.9 0-56-25.1-56-56s25.1-56 56-56m-7.6-80a16 16 0 1 1 32 0 16 16 0 1 1-32 0m176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
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
                  d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m96-112h-8v-40h55.3c-3.8 22.7-23.6 40-47.3 40m47.3-56H344v-40h8c23.8 0 43.5 17.3 47.3 40m-71.3 0h-64v-40h64zm0 56h-64v-40h64zm-80-96v40h-64v-40zm0 56v40h-64v-40zm-80-16h-55.3c3.8-22.7 23.6-40 47.3-40h8zm0 56h-8c-23.8 0-43.5-17.3-47.3-40H168zm-23.6-192a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"
                />
                <path
                  className="aps-icon-foreground"
                  d="M176.4 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64m160 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64"
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
