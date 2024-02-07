import React from "react";
import { Onedoc } from "@onedoc/client";
import { renderToString } from "react-dom/server";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import postcssColorFunctionalNotation from "postcss-color-functional-notation";
import fs from "fs";


const onedoc = new Onedoc(process.env.ONEDOC_API_KEY!);

(async () => {

  const html = "<h1>Hello World</h1>";
  const css = await postcss([
    tailwindcss({
      content: [{ raw: html, extension: "html" }],
    }),
    postcssColorFunctionalNotation,
  ]).process(`@tailwind base;@tailwind components;@tailwind utilities;`, {
    from: undefined,
  });

  // load the file in @onedoc/react-print/dist/style.css to a text string
  // first start by resolving the path to @onedoc/react-print by using the node resolution
  const reactPrintPath = require.resolve("@onedoc/react-print/dist/index.css");

  const reactPrintStyles = fs.readFileSync(reactPrintPath);

  const { file } = await onedoc.render({
    html,
    test:false,
    save:false,
    assets: [
      {
        path: "./style.css",
        content: css.toString(),
      },
      {
        path: "./react-print.css",
        content: reactPrintStyles.toString(),
      },
    ],
  });
  
  fs.writeFileSync("./HelloWorld.pdf", Buffer.from(file));

})();

