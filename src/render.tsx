import "dotenv/config";

import fs from "fs";
import { FileforgeClient } from '@fileforge/client';
import { compile } from "@fileforge/react-print";
import React from "react";

import { Document } from "./Document";
import { Readable } from "stream";
import { fileFromPath } from "formdata-node/file-from-path"

const ff = new FileforgeClient({
  apiKey:"YOUR_API_KEY", // replace with your API key
});

(async () => {
  try {
    const HTML = `<!doctype html><html><body>${await compile(<Document name="World" />)}</body></html>`;

    const pdf = await ff.pdf.generate(
      [new File([HTML], "index.html", {
        type: "text/html",
      }),
       new File([fs.readFileSync(__dirname + "/images/fileforge_cover.png")], "fileforge_cover.png", {
        type: "image/png",  
       })
    ],
      {
        options: {
          host: false,
          test: false,
        },
      }
    );

    pdf.pipe(fs.createWriteStream("output.pdf"));
  } catch (error) {
    console.error("Error during PDF conversion:", error);
  }
})();