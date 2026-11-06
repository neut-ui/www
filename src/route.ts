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
    name: "Attachment",
    path: "/attachment",
    component: lazy(() => import("./pages/attachment")),
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
    name: "Breadcrumb",
    path: "/breadcrumb",
    component: lazy(() => import("./pages/breadcrumb")),
  },
  {
    name: "Bubble",
    path: "/bubble",
    component: lazy(() => import("./pages/bubble")),
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
    name: "Calendar",
    path: "/calendar",
    component: lazy(() => import("./pages/calendar")),
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
    name: "Checkbox",
    path: "/checkbox",
    component: lazy(() => import("./pages/checkbox")),
  },
  {
    name: "Collapsible",
    path: "/collapsible",
    component: lazy(() => import("./pages/collapsible")),
  },
  {
    name: "Combobox",
    path: "/combobox",
    component: lazy(() => import("./pages/combobox")),
  },
  {
    name: "ContextMenu",
    path: "/context-menu",
    component: lazy(() => import("./pages/context-menu")),
  },
  {
    name: "DataTable",
    path: "/data-table",
    component: lazy(() => import("./pages/data-table")),
  },
  {
    name: "DatePicker",
    path: "/date-picker",
    component: lazy(() => import("./pages/date-picker")),
  },
  {
    name: "Dialog",
    path: "/dialog",
    component: lazy(() => import("./pages/dialog")),
  },
  {
    name: "Drawer",
    path: "/drawer",
    component: lazy(() => import("./pages/drawer")),
  },
  {
    name: "DropdownMenu",
    path: "/dropdown-menu",
    component: lazy(() => import("./pages/dropdown-menu")),
  },
  {
    name: "Empty",
    path: "/empty",
    component: lazy(() => import("./pages/empty")),
  },
  {
    name: "Field",
    path: "/field",
    component: lazy(() => import("./pages/field")),
  },
  {
    name: "HoverCard",
    path: "/hover-card",
    component: lazy(() => import("./pages/hover-card")),
  },
  {
    name: "Image",
    path: "/image",
    component: lazy(() => import("./pages/image")),
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
    name: "Kbd",
    path: "/kbd",
    component: lazy(() => import("./pages/kbd")),
  },
  {
    name: "Label",
    path: "/label",
    component: lazy(() => import("./pages/label")),
  },
  {
    name: "Marker",
    path: "/marker",
    component: lazy(() => import("./pages/marker")),
  },
  {
    name: "Message",
    path: "/message",
    component: lazy(() => import("./pages/message")),
  },
  {
    name: "MessageScroller",
    path: "/message-scroller",
    component: lazy(() => import("./pages/message-scroller")),
  },
  {
    name: "NumberInput",
    path: "/number-input",
    component: lazy(() => import("./pages/number-input")),
  },
  {
    name: "Pagination",
    path: "/pagination",
    component: lazy(() => import("./pages/pagination")),
  },
  {
    name: "Popover",
    path: "/popover",
    component: lazy(() => import("./pages/popover")),
  },
  {
    name: "Progress",
    path: "/progress",
    component: lazy(() => import("./pages/progress")),
  },
  {
    name: "Questionnaire",
    path: "/questionnaire",
    component: lazy(() => import("./pages/questionnaire")),
  },
  {
    name: "RadioGroup",
    path: "/radio-group",
    component: lazy(() => import("./pages/radio-group")),
  },
  {
    name: "Resizable",
    path: "/resizable",
    component: lazy(() => import("./pages/resizable")),
  },
  {
    name: "ScrollArea",
    path: "/scroll-area",
    component: lazy(() => import("./pages/scroll-area")),
  },
  {
    name: "ScrollArrows",
    path: "/scroll-arrows",
    component: lazy(() => import("./pages/scroll-arrows")),
  },
  {
    name: "Select",
    path: "/select",
    component: lazy(() => import("./pages/select")),
  },
  {
    name: "Separator",
    path: "/separator",
    component: lazy(() => import("./pages/separator")),
  },
  {
    name: "Sheet",
    path: "/sheet",
    component: lazy(() => import("./pages/sheet")),
  },
  {
    name: "Sidebar",
    path: "/sidebar",
    component: lazy(() => import("./pages/sidebar")),
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
    name: "Spinner",
    path: "/spinner",
    component: lazy(() => import("./pages/spinner")),
  },
  {
    name: "Switch",
    path: "/switch",
    component: lazy(() => import("./pages/switch")),
  },
  {
    name: "Table",
    path: "/table",
    component: lazy(() => import("./pages/table")),
  },
  {
    name: "Tabs",
    path: "/tabs",
    component: lazy(() => import("./pages/tabs")),
  },
  {
    name: "Textarea",
    path: "/textarea",
    component: lazy(() => import("./pages/textarea")),
  },
  {
    name: "TimePicker",
    path: "/time-picker",
    component: lazy(() => import("./pages/time-picker")),
  },
  {
    name: "Toast",
    path: "/toast",
    component: lazy(() => import("./pages/toast")),
  },
  {
    name: "Toggle",
    path: "/toggle",
    component: lazy(() => import("./pages/toggle")),
  },
  {
    name: "ToggleGroup",
    path: "/toggle-group",
    component: lazy(() => import("./pages/toggle-group")),
  },
  {
    name: "Tooltip",
    path: "/tooltip",
    component: lazy(() => import("./pages/tooltip")),
  },
];
