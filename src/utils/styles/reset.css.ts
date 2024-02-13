import { globalStyle } from "@vanilla-extract/css";
import { reset } from "./layers.css.ts";

globalStyle("html", {
  "@layer": {
    [reset]: {
      MozTextSizeAdjust: "none",
      WebkitTextSizeAdjust: "none",
      textSizeAdjust: "none",
      margin: 0,
      padding: 0,
    },
  },
});

globalStyle("body", {
  "@layer": {
    [reset]: {
      margin: 0,
      padding: 0,
    },
  },
});
