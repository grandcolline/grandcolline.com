import type { MetaFunction } from "@remix-run/cloudflare"
import styles from "./styles/app.css"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
})

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "manifest", href: "/manifest.json" },
    {
      rel: "apple-touch-icon",
      sizes: "192x192",
      href: "/img/icons/grandcolline_196.png",
    },
  ]
}

export default function App() {
  return (
    <html lang="ja">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
