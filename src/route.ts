import type { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

export const routes: (RouteDefinition & { name?: string })[] = [
  {
    name: "Accordion",
    path: ["/", "/accordion"],
    component: lazy(() => import("./pages/accordion")),
  },
  {
    name: "Alert",
    path: "/alert",
    component: lazy(() => import("./pages/alert")),
  },
  {
    name: "AlertDialog",
    path: "/alert-dialog",
    component: lazy(() => import("./pages/alert-dialog")),
  },
  {
    name: "AspectRatio",
    path: "/aspect-ratio",
    component: lazy(() => import("./pages/aspect-ratio")),
  },
  {
    name: "Avatar",
    path: "/avatar",
    component: lazy(() => import("./pages/avatar")),
  },
  {
    name: "Badge",
    path: "/badge",
    component: lazy(() => import("./pages/badge")),
  },
  {
    name: "Button",
    path: "/button",
    component: lazy(() => import("./pages/button")),
  },
  {
    name: "ButtonGroup",
    path: "/button-group",
    component: lazy(() => import("./pages/button-group")),
  },
  {
    name: "Card",
    path: "/card",
    component: lazy(() => import("./pages/card")),
  },
  {
    name: "Carousel",
    path: "/carousel",
    component: lazy(() => import("./pages/carousel")),
  },
  {
    name: "Field",
    path: "/field",
    component: lazy(() => import("./pages/field")),
  },
  {
    name: "Input",
    path: "/input",
    component: lazy(() => import("./pages/input")),
  },
  {
    name: "InputGroup",
    path: "/input-group",
    component: lazy(() => import("./pages/input-group")),
  },
  {
    name: "Item",
    path: "/item",
    component: lazy(() => import("./pages/item")),
  },
  {
    name: "Pagination",
    path: "/pagination",
    component: lazy(() => import("./pages/pagination")),
  },
  {
    name: "Progress",
    path: "/progress",
    component: lazy(() => import("./pages/progress")),
  },
  {
    name: "Separator",
    path: "/separator",
    component: lazy(() => import("./pages/separator")),
  },
  {
    name: "ScrollArea",
    path: "/scrollArea",
    component: lazy(() => import("./pages/scroll-area")),
  },
  {
    name: "Skeleton",
    path: "/skeleton",
    component: lazy(() => import("./pages/skeleton")),
  },
  {
    name: "Slider",
    path: "/slider",
    component: lazy(() => import("./pages/slider")),
  },
  {
    name: "Switch",
    path: "/switch",
    component: lazy(() => import("./pages/switch")),
  },
  {
    name: "Toast",
    path: "/toast",
    component: lazy(() => import("./pages/toast")),
  },
  {
    name: "Tooltip",
    path: "/tooltip",
    component: lazy(() => import("./pages/tooltip")),
  },
];
