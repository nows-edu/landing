import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useParams, useLoaderData, useActionData, useMatches, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useState } from "react";
import { ArrowRight, Users, FolderOpen, Wallet } from "lucide-react";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        ServerRouter,
        {
          context: routerContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const stylesheet = "/assets/app-C6qSI-fz.css";
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}, {
  rel: "stylesheet",
  href: stylesheet
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const socialMediaPana$1 = "/assets/Social-media-pana-BkuUrCpX.svg";
const unimateLogo = "data:image/png;base64,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";
const FeatureCard = ({ icon: Icon, title, description, link }) => /* @__PURE__ */ jsxs("div", { className: "bg-gray-900/60 backdrop-blur-sm rounded-3xl p-8 flex flex-col items-center text-center", children: [
  /* @__PURE__ */ jsx("div", { className: "bg-gray-800 rounded-full p-4 mb-6", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-[#6D4CFF]" }) }),
  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: title }),
  /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-6", children: description }),
  /* @__PURE__ */ jsxs(
    "a",
    {
      href: link,
      className: "text-[#6D4CFF] flex items-center gap-2 hover:text-purple-300 transition-colors",
      children: [
        "Saber más ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
      ]
    }
  )
] });
const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const features = [
    {
      icon: Users,
      title: "Conéctate con tu campus y amigos",
      description: "Desde eventos hasta clubes, explora las actividades de los campus universitarios a través de nuestro mapa interactivo y mantente al tanto de lo que sucede.",
      link: "#"
    },
    {
      icon: FolderOpen,
      title: "Encuentra a tu grupo ideal",
      description: "Proveemos varios espacios en los que podrás encontrar, según tus gustos y necesidades, gente con la que compartir tus experiencias.",
      link: "#"
    },
    {
      icon: Wallet,
      title: "Apoyo y diversión de la mano",
      description: "En UNImate, cada paso que tomes en tu viaje universitario es recompensado. Participa en actividades, sigue tus objetivos y consigue premios en sorteos exclusivos. Tendrás posibilidades infinitas, ¡hazla tuya!",
      link: "#"
    }
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xpwzqyvw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen w-full bg-gradient-to-br from-emerald-900 via-gray-900 to-purple-900 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-20", children: /* @__PURE__ */ jsx("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M20 0L23.5 16.5L40 20L23.5 23.5L20 40L16.5 23.5L0 20L16.5 16.5L20 0Z",
        fill: "white",
        opacity: "0.2"
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 left-40", children: /* @__PURE__ */ jsx("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M20 0L23.5 16.5L40 20L23.5 23.5L20 40L16.5 23.5L0 20L16.5 16.5L20 0Z",
        fill: "white",
        opacity: "0.1"
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "pt-8 flex justify-center", children: /* @__PURE__ */ jsx("img", { src: unimateLogo, alt: "UNiMATE", className: "h-12" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center justify-between pt-20 pb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2 text-white space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium mb-4", children: "By students, for students" }),
          /* @__PURE__ */ jsxs("h1", { className: "text-5xl font-bold leading-tight", children: [
            "Vive la ",
            /* @__PURE__ */ jsx("span", { className: "text-[#6D4CFF]", children: "experiencia" }),
            /* @__PURE__ */ jsx("br", {}),
            "universitaria",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-[#6D4CFF]", children: "más allá" }),
            " de las clases"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-300 text-lg max-w-md", children: [
            "Descubre nuevos eventos, conecta con otros estudiantes y, sobre todo, disfruta ",
            /* @__PURE__ */ jsx("span", { className: "text-[#6D4CFF]", children: "sin límites" }),
            "."
          ] }),
          /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex items-center gap-3 mt-8 max-w-md", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                name: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                placeholder: "Introduce tu correo...",
                required: true,
                className: "w-full px-6 py-4 rounded-[24px] bg-white/10 backdrop-blur-sm \n                       border border-white/20 text-white placeholder-gray-400 \n                       focus:outline-none focus:ring-2 focus:ring-purple-500"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "p-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors flex items-center justify-center",
                children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", className: "text-white", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 12h14M12 5l7 7-7 7" }) })
              }
            )
          ] }),
          submitted && /* @__PURE__ */ jsx("div", { className: "mt-2 text-green-400", children: "¡Gracias por suscribirte!" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:w-1/2 mt-12 lg:mt-0", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: socialMediaPana$1,
            alt: "Student with megaphone",
            className: "w-full max-w-lg mx-auto"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: features.map((feature, index) => /* @__PURE__ */ jsx(
      FeatureCard,
      {
        icon: feature.icon,
        title: feature.title,
        description: feature.description,
        link: feature.link
      },
      index
    )) }) })
  ] });
};
const socialMediaPana = "/assets/social-media-pana-D_G2FKMw.svg";
const djParty = "/assets/dj-party-amico-CzCAaad0.svg";
const sportFamily = "/assets/sport-family-amico-DWzUlSMY.svg";
const swipeProfile = "/assets/swipe-profile-amico-BO7Z2p4h.svg";
const Features = () => {
  const features = [
    {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Un ",
        /* @__PURE__ */ jsx("span", { className: "text-[#6D4CFF]", children: "mapa interactivo" }),
        " interuniversitario"
      ] }),
      description: "Descubre en tiempo real todas las actividades y eventos que se realizan en las universidades, identifica puntos clave del campus y encuentra nuevos espacios para disfrutar y conectar. ¡Mantente siempre informado sobre todo lo que sucede en tu universidad y más allá!",
      imageSrc: socialMediaPana,
      imageAlt: "Interactive map illustration",
      reverse: true
    },
    {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("span", { className: "text-[#5956E9]", children: "Descubre" }),
        " fiestas, actividades y eventos"
      ] }),
      description: "El portal de eventos de UNImate te permite ver las actividades gratuitas que se ofrezcan en las universidades. Con el calendario o el buscador podrás encontrar la actividad que más se adapte a ti y buscar gente que con quien compartirlo.",
      imageSrc: djParty,
      imageAlt: "Events illustration",
      reverse: false
    },
    {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Encuentra tu ",
        /* @__PURE__ */ jsx("span", { className: "text-[#6D4CFF]", children: "comunidad" }),
        " ideal"
      ] }),
      description: "En UNImate, queremos facilitarte la conexión con otros estudiantes basándonos en tus intereses y necesidades. Con nuestro recomendador de perfiles, podrás encontrar compañeros para compartir piso o conocer a alguien con quien salir a tomar algo.",
      imageSrc: sportFamily,
      imageAlt: "Community illustration",
      reverse: true
    },
    {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("span", { className: "text-[#5956E9]", children: "Conoce" }),
        " a gente según tus necesidades"
      ] }),
      description: "En UNImate, te ayudamos a encontrar personas que compartan tus intereses. A través de nuestro recomendador de perfiles, podrás conocer a futuros compañeros de piso, amigos para salir o incluso personas con las que compartir actividades universitarias.",
      imageSrc: swipeProfile,
      imageAlt: "Community illustration",
      reverse: false
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "w-full bg-black text-white", children: features.map((feature, index) => /* @__PURE__ */ jsx(
    "section",
    {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
      children: /* @__PURE__ */ jsxs("div", { className: `flex flex-col ${feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-4`, children: [
        " ",
        /* @__PURE__ */ jsxs("div", { className: "lg:w-1/2 space-y-3", children: [
          " ",
          /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold leading-tight", children: feature.title }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-300 text-lg max-w-xl", children: [
            " ",
            feature.description
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:w-1/2 flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-sm", children: [
          " ",
          /* @__PURE__ */ jsx(
            "img",
            {
              src: feature.imageSrc,
              alt: feature.imageAlt,
              className: "w-full h-auto object-contain",
              style: { maxHeight: "300px" }
            }
          )
        ] }) })
      ] })
    },
    index
  )) });
};
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "w-full bg-black border-t border-gray-800", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ jsx(
    "img",
    {
      src: unimateLogo,
      alt: "UNImate",
      className: "h-12"
    }
  ) }) });
};
const LandingPage = () => {
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-white",
    children: [HeroSection(), Features(), Footer()]
  });
};
const home = withComponentProps(LandingPage);
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CI1sUmQy.js", "imports": ["/assets/chunk-7R3XDUXW-DIs3TCXd.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-Cp5kF1uJ.js", "imports": ["/assets/chunk-7R3XDUXW-DIs3TCXd.js", "/assets/with-props-CiSnTo55.js"], "css": [] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-Dv34s2c9.js", "imports": ["/assets/with-props-CiSnTo55.js", "/assets/chunk-7R3XDUXW-DIs3TCXd.js"], "css": [] } }, "url": "/assets/manifest-36a97eeb.js", "version": "36a97eeb" };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
