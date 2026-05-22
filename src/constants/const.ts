import type { IconType } from "react-icons";
import { BsJavascript, BsTypescript } from "react-icons/bs";
import { IoCodeSlashOutline, IoLogoReact } from "react-icons/io5";
import { SiNodedotjs } from "react-icons/si";

export const navIcon: Record<string, IconType> = {
  default: IoCodeSlashOutline,
  javascript: BsJavascript,
  react: IoLogoReact,
  node: SiNodedotjs,
  typescript: BsTypescript,
};
