import { type RouteConfig, index } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    { path: "thanks", file: "routes/thanks.tsx" },
] satisfies RouteConfig;
