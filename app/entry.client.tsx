import { RemixBrowser } from "@remix-run/react"
import { hydrate } from "react-dom"

hydrate(<RemixBrowser />, document)

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker.register("/sw.js");
//   });
// }
