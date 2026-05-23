import type { IconType } from "react-icons";
import { BsDatabase, BsJavascript, BsTypescript } from "react-icons/bs";
import { IoCodeSlashOutline, IoLogoReact } from "react-icons/io5";
import { SiNodedotjs } from "react-icons/si";

export const navIcon: Record<string, IconType> = {
  default: IoCodeSlashOutline,
  javascript: BsJavascript,
  react: IoLogoReact,
  node: SiNodedotjs,
  typescript: BsTypescript,
};

export const navList = [
  {
    icon: BsJavascript,
    title: "JavaScript",
    path: "/javascript",
    children: [
      {
        icon: BsDatabase,
        title: "Memo",
        path: "/javascript/memo",
      },
    ],
  },
  {
    icon: BsTypescript,
    title: "TypeScript",
    path: "/typescript",
    children: [],
  },
  {
    icon: IoLogoReact,
    title: "React",
    path: "/react",
    children: [],
  },
  {
    icon: SiNodedotjs,
    title: "Node",
    path: "/node",
    children: [],
  },
];
