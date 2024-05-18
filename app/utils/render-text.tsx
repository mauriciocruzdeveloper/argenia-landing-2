import React from "react";

export function RenderText({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </>
  );
}
