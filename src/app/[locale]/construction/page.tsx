import React from "react";
import Image from "next/image";

export default function Construction() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <label className="text-4xl font-bold">Under construction</label>
      <div className="m-8">
        <Image
          src={"/assets/under-construction.png"}
          width={500}
          height={500}
          alt="Under construction"
        />
      </div>
    </div>
  );
}
