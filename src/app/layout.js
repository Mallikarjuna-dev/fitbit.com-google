"use client";
import { Provider } from "react-redux";
import store from "@/redux/store";
import "./globals.css";

import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
    </Provider>
  );
}
