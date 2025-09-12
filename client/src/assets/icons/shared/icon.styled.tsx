import { filterProps } from "@/helpers/types/style.types";
import { getIconSize } from "../../helpers/icon.helpers";
import type { IconBaseProps } from "./icon.types";
import { styles } from "@/helpers";

export const StyledIcon = filterProps<IconBaseProps>("div")`
  display: ${(props) => props.display || "inline-block"};

  ${(props) => getIconSize(props)};
  
  & > svg {
    ${(props) => getIconSize(props)};
    fill: ${styles.color.primary.main};
  }

  & .mickey-icon-svg {}
  & .mickey-icon-foreground {}
  & .mickey-icon-background {
    opacity: 0.4;
    color: red;
  }
`;
