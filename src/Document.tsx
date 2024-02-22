import React from "react";
import { Footnote, Tailwind } from "@onedoc/react-print";

export const Document = ({ name }: { name: string }) => {
  return (
    <>
      <Tailwind>
        <main className="text-gray-700">
          <h1 className="text-4xl text-gray-800">Hello {name}!</h1>
          <img
            className="w-full rounded-xl my-8"
            src="/react-for-documents.jpg"
            alt="React for documents"
          />
          <p className="my-8">
            Welcome to Onedoc. Onedoc makes it easy to generate PDFs from HTML
            or Frontend frameworks like React.
            <Footnote>And more to come!</Footnote>
          </p>
          <p>
            Quick links:
            <ul className="my-4 mx-4">
              <li>
                <a
                  className="text-blue-500 underline"
                  href="https://docs.onedoclabs.com"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href="https://react.onedoclabs.com"
                >
                  React components
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500 underline"
                  href="https://react.onedoclabs.com/ui/templates"
                >
                  Prebuilt templates
                </a>
              </li>
            </ul>
          </p>
        </main>
      </Tailwind>
    </>
  );
};
