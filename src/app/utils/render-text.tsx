import React from "react";

export interface RenderTextProps {
  children?: React.ReactNode;
}

export function RenderText({ children }: RenderTextProps) {
  if (typeof children !== "string") return <>{children}</>;

  return (
    <>
      {children.split("\n").map((line, i) => (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </>
  );
}
