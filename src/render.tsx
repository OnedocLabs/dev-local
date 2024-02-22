import "dotenv/config";

import fs from "fs";
import { Onedoc } from "@onedoc/client";
import { compile } from "@onedoc/react-print";
import React from "react";

import { Document } from "./Document";

const onedoc = new Onedoc(process.env.ONEDOC_API_KEY!);

(async () => {
  const { file } = await onedoc.render({
    html: await compile(<Document name="world" />),
    test: true,
    save: false,
    assets: [
      {
        path: "/react-for-documents.jpg",
        content: fs.readFileSync(__dirname + "/images/react-for-documents.jpg"),
      },
    ],
  });

  fs.writeFileSync("./HelloWorld.pdf", Buffer.from(file));
})();
