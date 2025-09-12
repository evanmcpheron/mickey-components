import { filterProps } from "@/helpers/types/style.types";
import { css } from "styled-components";
import type { ButtonProps } from "./button.types";
import { styles } from "@/helpers";

const sizeStyles = {
  "xx-small": css`
    padding: 0.25em 0.5em;
    font-size: 0.775rem;
  `,

  "x-small": css`
    padding: 0.25em 0.5em;
    font-size: 0.875rem;
  `,
  small: css`
    padding: 0.25em 0.5em;
    font-size: 0.975rem;
  `,
  medium: css`
    padding: 0.5em 1em;
    font-size: 1rem;
  `,
  large: css`
    padding: 0.75em 1.5em;
    font-size: 1.125rem;
  `,
};

const sizeWidthHeightStyles = (
  size: "xx-small" | "x-small" | "small" | "medium" | "large",
  type: "width" | "height"
) => {
  switch (size) {
    case "xx-small":
      return type === "width" ? "auto" : "26px";
    case "x-small":
      return type === "width" ? "auto" : "30px";
    case "small":
      return type === "width" ? "100px" : "36px";
    case "medium":
      return type === "width" ? "150px" : "50px";
    case "large":
      return type === "width" ? "200px" : "60px";
    default:
      return "auto";
  }
};

const radiusStyles = {
  partial: "8px",
  rounded: "50px",
  full: "50%",
};

const RoleStyles = {
  primary: {
    backgroundColor: styles.color.primary.main,
    color: styles.color.primary.contrast,
    border: `1px solid ${styles.color.primary.main}`,
    active: {
      backgroundColor: styles.color.primary.dark,
      border: `1px solid ${styles.color.primary.dark}`,
      color: styles.color.primary.contrast,
    },
    hover: {
      backgroundColor: styles.color.primary.dark,
      color: styles.color.primary.contrast,
      border: `1px solid ${styles.color.primary.dark}`,
    },
    inactive: {
      backgroundColor: styles.color.primary.main,
      color: styles.color.primary.contrast,
      border: `1px solid ${styles.color.primary.main}`,
      hoverBgColor: styles.color.primary.dark,
      hoverColor: styles.color.primary.contrast,
    },
  },
  primarylight: {
    backgroundColor: "transparent",
    color: styles.color.primary.main,
    border: `0px solid ${styles.color.primary.light}`,
    active: {
      backgroundColor: styles.color.primary.light,
      border: `0px solid ${styles.color.primary.main}`,
      color: styles.color.primary.dark,
    },
    hover: {
      backgroundColor: styles.color.primary.light,
      color: styles.color.primary.dark,
      border: `0px solid ${styles.color.primary.dark}`,
    },
    inactive: {
      backgroundColor: "transparent",
      color: styles.color.primary.dark,
      border: `0px solid ${styles.color.primary.light}`,
      hoverBgColor: styles.color.primary.light,
      hoverColor: styles.color.primary.dark,
    },
  },
  select: {
    backgroundColor: "transparent",
    color: styles.color.primary.main,
    border: `1px solid ${styles.color.primary.main}`,
    active: {
      backgroundColor: styles.color.primary.dark,
      border: `1px solid ${styles.color.primary.dark}`,
      color: styles.color.primary.contrast,
    },
    hover: {
      backgroundColor: "transparent",
      color: styles.color.success.main,
      border: `1px solid ${styles.color.success.main}`,
    },
    inactive: {
      backgroundColor: "transparent",
      border: `1px solid ${styles.color.neutral[0]}`,
      color: styles.color.primary.main,
      hoverBgColor: "transparent",
      hoverColor: styles.color.success.contrast,
    },
  },
  action: {
    backgroundColor: "transparent",
    color: styles.color.primary.main,
    border: `1px solid ${styles.color.primary.main}`,
    active: {
      backgroundColor: styles.color.primary.dark,
      border: `1px solid ${styles.color.primary.dark}`,
      color: styles.color.primary.contrast,
    },
    hover: {
      backgroundColor: styles.color.primary.main,
      color: styles.color.primary.contrast,
      border: `1px solid ${styles.color.primary.main}`,
    },
    inactive: {
      backgroundColor: styles.color.neutral[0],
      border: `1px solid ${styles.color.neutral[0]}`,
      color: styles.color.primary.main,
      hoverBgColor: styles.color.primary.main,
      hoverColor: styles.color.primary.contrast,
    },
  },
  secondary: {
    backgroundColor: styles.color.secondary.main,
    color: styles.color.secondary.contrast,
    border: `1px solid ${styles.color.secondary.main}`,
    active: {
      backgroundColor: styles.color.secondary.dark,
      border: `1px solid ${styles.color.secondary.dark}`,
      color: styles.color.secondary.contrast,
    },
    hover: {
      backgroundColor: styles.color.secondary.dark,
      color: styles.color.secondary.contrast,
      border: `1px solid ${styles.color.secondary.dark}`,
    },
    inactive: {
      backgroundColor: styles.color.secondary.main,
      color: styles.color.secondary.contrast,
      border: `1px solid ${styles.color.secondary.main}`,
      hoverBgColor: styles.color.secondary.dark,
      hoverColor: styles.color.secondary.contrast,
    },
  },
  destructive: {
    backgroundColor: styles.color.error.light,
    color: styles.color.error.contrast,
    border: `1px solid ${styles.color.error.light}`,
    active: {
      backgroundColor: styles.color.error.main,
      border: `1px solid ${styles.color.error.main}`,
      color: styles.color.error.contrast,
    },
    hover: {
      backgroundColor: styles.color.error.main,
      color: styles.color.error.contrast,
      border: `1px solid ${styles.color.error.main}`,
    },
    inactive: {
      backgroundColor: styles.color.error.light,
      color: styles.color.error.contrast,
      border: `1px solid ${styles.color.error.light}`,
      hoverBgColor: styles.color.error.main,
      hoverColor: styles.color.error.contrast,
    },
  },

  cancel: {
    backgroundColor: styles.color.neutral[700],
    color: styles.color.primary.contrast,
    border: `1px solid ${styles.color.neutral[700]}`,
    active: {
      backgroundColor: styles.color.neutral[700],
      border: `1px solid ${styles.color.neutral[700]}`,
      color: styles.color.primary.contrast,
    },
    hover: {
      backgroundColor: styles.color.neutral[1000],
      color: styles.color.neutral[0],
      border: `1px solid ${styles.color.neutral[1000]}`,
    },
    inactive: {
      backgroundColor: styles.color.neutral[0],
      border: `1px solid ${styles.color.neutral[0]}`,
      color: styles.color.neutral[600],
      hoverBgColor: styles.color.neutral[1000],
      hoverColor: styles.color.neutral[0],
    },
  },
};

export const ButtonStyled = filterProps<ButtonProps>("button")`
  display: flex;
  align-items: center;
  justify-content: ${({ align }) =>
    align === "left"
      ? "flex-start"
      : align === "right"
      ? "flex-end"
      : "center"};
  gap: 10px;
  font-weight: 600;
  
   ${({ role = "primary" }) => css`
     background-color: ${RoleStyles[role].backgroundColor};
   `}

  border: none;
  cursor: pointer;
  transition: none;
  
  &.btn-loaded{
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }
    
  -webkit-touch-callout: none !important;
  -webkit-text-size-adjust: none !important;
   user-select: none !important;
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -o-user-select: none !important;
  user-select: none !important;

  & * {
    -webkit-touch-callout: none !important;
    -webkit-text-size-adjust: none !important;
    cursor: pointer !important;
    user-select: none !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -o-user-select: none !important;
    user-select: none !important;
  }

  border-radius: ${({ radius }) => radiusStyles[radius!]}; 
  ${({ size }) => sizeStyles[size || "small"]}
  
  width: ${({ dimensions, size }) =>
    dimensions?.width
      ? dimensions.width
      : sizeWidthHeightStyles(size || "small", "width")};
  height: ${({ dimensions, size }) =>
    dimensions?.height
      ? dimensions.height
      : sizeWidthHeightStyles(size || "small", "height")};
  
  &:disabled {
    background-color: ${styles.color.neutral[500]} !important;
    border-color: ${styles.color.neutral[500]} !important;
    color: ${styles.color.neutral[300]} !important;
    pointer-events:none !important;
    touch-action:none !important;
    cursor: default !important;

    & .mickey-icon-svg {
      color: ${styles.color.neutral[300]} !important;
      fill: ${styles.color.neutral[300]} !important;
    cursor: default !important;
    }

    &.mickey-hover {
      pointer-events:none !important;
      touch-action:none !important;
      background-color: ${styles.color.neutral[500]} !important;
      border-color: ${styles.color.neutral[500]} !important;
      color: ${styles.color.neutral[300]} !important;
      cursor: default !important;

      & .mickey-icon-svg {
        color: ${styles.color.neutral[300]} !important;
        fill: ${styles.color.neutral[300]} !important;
    	cursor: default !important;
      }
    }
  }

  ${({ role = "primary" }) => {
    return css`
      background-color: ${RoleStyles[role].backgroundColor};
      color: ${RoleStyles[role].color};
      border: ${RoleStyles[role].border};

      & .mickey-icon-svg {
        color: ${RoleStyles[role].color};
        fill: ${RoleStyles[role].color};
      }

      &.mickey-hover.mickey-select-button:not(.mickey-group-active) {
        background-color: ${RoleStyles[role].hover.backgroundColor};
        border: ${RoleStyles[role].hover.border};
        color: ${RoleStyles[role].hover.color};

        & .mickey-icon-svg {
          color: ${RoleStyles[role].hover.color};
          fill: ${RoleStyles[role].hover.color};
        }
      }

      &.mickey-hover:not(.mickey-select-button):not(.mickey-group-active) {
        background-color: ${RoleStyles[role].hover.backgroundColor};
        border: ${RoleStyles[role].hover.border};
        color: ${RoleStyles[role].hover.color};

        & .mickey-icon-svg {
          color: ${RoleStyles[role].hover.color};
          fill: ${RoleStyles[role].hover.color};
        }
      }

      &.btn-selected:not(.mickey-group-active) {
        background-color: ${RoleStyles[role].active.backgroundColor} !important;
        border: ${RoleStyles[role].active.border} !important;
        color: ${RoleStyles[role].active.color} !important;

        & .mickey-icon-svg {
          color: ${RoleStyles[role].active.color} !important;
          fill: ${RoleStyles[role].active.color} !important;
        }
      }

      &[mickey-gid]:not(.mickey-group-active) {
        background-color: ${RoleStyles[role].inactive.backgroundColor};
        color: ${RoleStyles[role].inactive.color};

        & .mickey-icon-svg {
          color: ${RoleStyles[role].inactive.color};
          fill: ${RoleStyles[role].inactive.color};
        }

        &:hover {
          background-color: ${RoleStyles[role].hover.backgroundColor};
          color: ${RoleStyles[role].hover.color};

          & .mickey-icon-svg {
            color: ${RoleStyles[role].hover.color};
            fill: ${RoleStyles[role].hover.color};
          }
        }
      }

      &[active="true"] {
        background-color: ${RoleStyles[role].active.backgroundColor};
        color: ${RoleStyles[role].active.color};

        & .mickey-icon-svg {
          color: ${RoleStyles[role].color};
          fill: ${RoleStyles[role].color};
        }

        &:hover {
          background-color: ${RoleStyles[role].hover.backgroundColor};
          color: ${RoleStyles[role].hover.color};

          & .mickey-icon-svg {
            color: ${RoleStyles[role].hover.color};
            fill: ${RoleStyles[role].hover.color};
          }
        }
      }

      &.mickey-active-hover:not(.mickey-group-active):not(
          .mickey-active-force
        ):not(.mickey-select-button) {
        background-color: ${RoleStyles[role].inactive.hoverBgColor};
        color: ${RoleStyles[role].inactive.hoverColor};

        & .mickey-icon-svg {
          color: ${RoleStyles[role].inactive.hoverColor};
          fill: ${RoleStyles[role].inactive.hoverColor};
        }
      }

      &.mickey-active-force:not(.mickey-group-active):not(
          .mickey-select-button
        ) {
        background-color: ${RoleStyles[role].backgroundColor} !important;
        color: ${RoleStyles[role].color} !important;

        & * {
          color: ${RoleStyles[role].color} !important;
        }

        & .mickey-icon-svg {
          color: ${RoleStyles[role].color} !important;
          fill: ${RoleStyles[role].color} !important;
        }
      }
    `;
  }}
`;
