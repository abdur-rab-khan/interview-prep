import type { IconType } from "react-icons";
import {
  BsDatabase,
  BsJavascript,
  BsListNested,
  BsTypescript,
} from "react-icons/bs";
import { CgPassword } from "react-icons/cg";
import { FaBarsProgress } from "react-icons/fa6";
import { IoCodeSlashOutline, IoLogoReact } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import { RiInputField } from "react-icons/ri";
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
    children: [
      {
        title: "Chip",
        path: "/react/chip",
        icon: RiInputField,
      },
      {
        title: "Otp Input",
        path: "/react/otp-input",
        icon: CgPassword,
      },
      {
        title: "Todo App",
        path: "/react/todo",
        icon: LuListTodo,
      },
      {
        title: "Nested Checkbox",
        path: "/react/nested-checkbox",
        icon: BsListNested,
      },
      {
        title: "Progress Bar",
        path: "/react/progress-bar",
        icon: FaBarsProgress,
      },
    ],
  },
  {
    icon: SiNodedotjs,
    title: "Node",
    path: "/node",
    children: [],
  },
];
