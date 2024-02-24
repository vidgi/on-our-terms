import * as React from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route } from "react-router-dom";

import { HeaderNav } from "./components/HeaderNav";
import { MantineProvider } from "@mantine/core";
import { NotFoundPage } from "./components/NotFoundPage";
import { AboutPage } from "./pages/about/AboutPage";

import { HomePage } from "./pages/home/HomePage";
import { SamplePage } from "./pages/samples/SamplePage";
import SampleDetailPage from "./pages/samples/SampleDetailPage";
import { FormPage } from "./pages/form/FormPage";

export default function App() {
  return (
    <>
      <MantineProvider
        theme={{
          fontFamily: "Plex Mono, monospace",
          fontFamilyMonospace: "Plex Mono, monospace",
          headings: { fontFamily: "Plex Mono, monospace" },
          // colors: {
          //   brand: ["#144eff", "#144eff", "#144eff", "#144eff", "#144eff", "#144eff", "#144eff", "#144eff", "#144eff", "#144eff"],
          // },
          // primaryColor: "brand",
        }}
        // children={undefined}
      >
        <HeaderNav />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="terms" element={<SamplePage />} />
          <Route path="/term/:id" element={<SampleDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MantineProvider>
    </>
  );
}

export function renderToDom(container) {
  createRoot(container).render(<App />);
}
