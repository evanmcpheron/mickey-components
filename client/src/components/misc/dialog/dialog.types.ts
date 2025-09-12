import type { DomProperties } from "@/helpers/types/base.types";
import type { PixelSize } from "@/helpers/types/style.types";

export interface DialogProps extends DomProperties {
  width?: string;
  height?: string;
  radius?: PixelSize;
  children: React.ReactNode;
  isDismissible?: boolean;
  headerLabel?: string;
  headerContent?: React.ReactNode;
  footerButtons?: React.ReactNode;
  showDialog: boolean;
  onDialogOpen?: () => void;
  onDialogClose?: () => void;
  scrollable?: boolean;
  disablePadding?: boolean;
  bodyClassName?: string;
  mdWidth?: string;
}

export interface DialogContainerProps extends DomProperties {
  width: string;
  height: string;
  radius?: PixelSize;
  mdWidth?: string;
}

export interface DialogBodyProps extends DomProperties {
  disablePadding?: boolean;
  scrollable?: boolean;
}

export interface DialogHeaderProps extends DomProperties {
  disablePadding?: boolean;
}
