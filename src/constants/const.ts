import type { IconType } from "react-icons";
import {
  BsDatabase,
  BsJavascript,
  BsListNested,
  BsTypescript,
} from "react-icons/bs";
import { CgPassword, CgSandClock } from "react-icons/cg";
import { FaBarsProgress } from "react-icons/fa6";
import {
  IoCodeSlashOutline,
  IoLogoReact,
  IoTimeOutline,
} from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import { RiInputField, RiPageSeparator } from "react-icons/ri";
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
      {
        icon: CgSandClock,
        title: "Debouncing",
        path: "/javascript/debounce",
      },
      {
        icon: IoTimeOutline,
        title: "Throttling",
        path: "/javascript/throttling",
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
      {
        title: "Pagination",
        path: "/react/pagination",
        icon: RiPageSeparator,
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
