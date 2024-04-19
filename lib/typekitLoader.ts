"use client";

import { useEffect } from "react";

export default function TypekitLoader() {
  useEffect(() => {
    (function (d) {
      const config = {
        kitId: "mng4evd",
        scriptTimeout: 3000,
        async: true,
      };
      const h = d.documentElement;
      const t = setTimeout(function () {
        h.className =
          h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
      }, config.scriptTimeout);
      const tk = d.createElement("script");
      const s = d.getElementsByTagName("script")[0];

      h.className += " wf-loading";
      tk.src = "https://use.typekit.net/" + config.kitId + ".js";
      tk.async = true;
      tk.onload = function () {
        clearTimeout(t);
        try {
          (window as any).Typekit.load(config);
        } catch (e) {}
      };

      s.parentNode!.insertBefore(tk, s);
    })(document);
  }, []);

  return null;
}
