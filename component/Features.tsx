"use client"
import { Canvas } from "@react-three/fiber";
import StudioLight from "./three/StudioLight";
import { features } from "@/constants";
import clsx from "clsx";

const Features = () => {
  return <section id="features">
    <h2>See it all in a light.</h2>

    <Canvas id="f-canvas" camera={{}}>
      <StudioLight />
      <ambientLight intensity={0.5} />
      {/* 3D Model */}

    </Canvas>

    <div className="absolute inset-0">
      {features.map((feature, index,) => (
        <div key={index} className={clsx('box', `box${index + 1}`, feature.styles)}>{feature.text}</div>
      ))}
    </div>
  </section>;
};

export default Features;
