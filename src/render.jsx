import { InvoiceTemplate } from "./documents/invoice";
import React from "react";
import { renderToString } from "react-dom/server";
import { Onedoc } from "@onedoc/client";
import fs from "fs";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import postcssColorFunctionalNotation from "postcss-color-functional-notation";

(async ()=>{

  const ONEDOC_API_KEY = "" //TODO: insert your API key here

  const onedoc = new Onedoc(ONEDOC_API_KEY); 

const data = {
  "invoiceNumber": "23213146",
  "date": "January 1st, 2024",
  "BillingCompany": {
    "companyName": "OneDoc, Inc",
    "companyAddress": "1600 Pennsylvania Avenue NW",
    "city": "Washington",
    "ZIPCode": "DC 20500",
    "country": "United States of America"
  },
  "CustomerInfo": {
    "customerName": "Titouan LAUNAY",
    "customerAddress": "72 Faxcol Dr Gotham City",
    "city": "Gotham City",
    "ZIPCode": "NJ 12345",
    "country": "United States of America"
  },
  "articles": [
    {
      "description": "Onedoc subscription",
      "unitPrice": 10.0,
      "quantity": "1",
      "totalPrice": 10.0
    },
    {
      "description": "Onedoc support",
      "unitPrice": 5.0,
      "quantity": "1",
      "totalPrice": 5.0
    },
    {
      "description": "Onedoc support",
      "unitPrice": 5.0,
      "quantity": "1",
      "totalPrice": 5.0
    }
  ]
}

const html = renderToString(<InvoiceTemplate props={data} />);
const css = await postcss([
  tailwindcss({
    content: [{ raw: html, extension: "html" }],
  }),
  postcssColorFunctionalNotation,
]).process(`@tailwind base;@tailwind components;@tailwind utilities;`, {
  from: undefined,
}); // loads compiled tailwind styles

const reactPrintPath = require.resolve("@onedoc/react-print/dist/index.css");
const reactPrintStyles = fs.readFileSync(reactPrintPath); // loads styles for react-print

let doc = {
  html: html,
  title: "invoice",
  test: true,
  save: false,
  assets: [
    {
      path: "./style.css",
      content: css.toString(),
    },
    {
      path: "./react-print.css",
      content: reactPrintStyles.toString(),
    },
  ]
};

const { file, link, error, info } = await onedoc.render(doc);

fs.writeFileSync("./invoice.pdf", Buffer.from(file));

})()