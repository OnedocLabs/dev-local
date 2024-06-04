import React from "react";
import { Footnote, Tailwind } from "@fileforge/react-print";

export const Document = ({ name }: { name: string }) => {
  return (
    <>
      <Tailwind>
        <main className="text-gray-700">
          <h1 className="text-4xl text-gray-800">Hello {name}!</h1>
          <img
            className="w-full rounded-xl my-8"
            src="fileforge_cover.png"
            alt="React for documents"
          />
          <p className="my-8">
            Welcome to Fileforge, the #1 API for PDF Document Workflows.
            <Footnote>And more to come!</Footnote>
          </p>
          <p>
            Quick links:
            <ul className="my-4 mx-4">
              <li>
                <a
                  className="text-blue-500 underline"
                  href="https://docs.fileforge.com"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href="https://docs.fileforge.com/react-print/welcome/getting-started"
                >
                  React-print-pdf: our open-source library to design PDFs with React
                </a>
              </li>
            </ul>
          </p>
        </main>
      </Tailwind>
    </>
  );
};
