import { ReactNode } from "react";

export interface SnowModalProps {
  isOpen: boolean;
  onClose?: Function;
  title?: string;
  children: ReactNode;
}
