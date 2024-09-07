import "dotenv/config";

import fs from "fs";
import { FileforgeClient } from '@fileforge/client';
import { compile } from "@fileforge/react-print";
import React from "react";

import { Document } from "./Document";

const ff = new FileforgeClient({
  apiKey: process.env.FILEFORGE_API_KEY,
});

(async () => {
  try {
    const HTML = await compile(<Document name="World" />)

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