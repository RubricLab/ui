"use client";

import { useState } from "react";
import { Highlight, themes, type PrismTheme } from "prism-react-renderer";
import Prism from "prismjs";
import { cn } from "../utils/cn";

(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-python");
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-json");

const CodeBlock = ({
  language,
  children,
  fileName,
  className,
  headerClassName,
  theme = themes.github,
}: {
  language: string;
  children: string;
  fileName?: string;
  className?: string;
  headerClassName?: string;
  theme?: PrismTheme;
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="overflow-hidden rounded-lg border border-rubricui-contrast/10">
      {fileName && (
        <div
          className={cn(
            "flex justify-between items-center px-4 py-2 bg-rubricui-contrast/10 text-rubricui-contrast",
            headerClassName
          )}
        >
          <span className="text-xs font-mono">{fileName}</span>
          <button
            onClick={copyToClipboard}
            className="text-sm text-rubricui-contrast p-1 rounded-sm hover:bg-rubricui-contrast/10 focus:outline-none transition-colors duration-rubricui-duration"
          >
            {copied ? (
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                  className="fill-rubricui-contrast"
                ></path>
              </svg>
            ) : (
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                  className="fill-rubricui-contrast"
                ></path>
              </svg>
            )}
          </button>
        </div>
      )}
      <Highlight theme={theme} code={children} language={language} prism={Prism}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cn(
              "p-4 m-0 text-sm overflow-x-auto dark:invert",
              className
            )}
          >
            <code>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} className="table-row">
                  <span className="table-cell text-right pr-4 select-none opacity-50">
                    {i + 1}
                  </span>
                  <span className="table-cell">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
};

CodeBlock.displayName = "CodeBlock";

export { CodeBlock };
