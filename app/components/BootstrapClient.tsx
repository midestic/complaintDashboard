"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    //@ts-expect-error: Dynamic import for Bootstrap JS, no types needed
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <></>;
}
