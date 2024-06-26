import React from "react";
import { features } from "../services/features";

const Features = () => {
  return (
    <section className="flex justify-center items-center w-full h-[200px] gap-[30px]">
      {features.map((feature) => (
        <div
          className="flex flex-col items-center w-1/4 h-full"
          key={feature.id}
        >
          <div dangerouslySetInnerHTML={{ __html: feature.icon }}></div>
          <h3 className="font-bold">{feature.title}</h3>
          <hr className="my-[10px] w-1/4 border border-black rounded-full" />
          <p className="text-center text">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
