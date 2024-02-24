import * as React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Loader, Html, OrbitControls } from "@react-three/drei";

import sampleData from "../samples/samples.json";
const length = Object.keys(sampleData).length;

const randomVector = (r) => [r / 2 - Math.random() * r, r / 2 - Math.random() * r, r / 2 - Math.random() * r];
const randomEuler = () => [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI];
const data = Array.from({ length: length }, (r = 15) => ({ random: Math.random(), position: randomVector(r), rotation: randomEuler() }));
export function ViewerPage(props) {
  return (
    <div>
      <Canvas
        camera={{ position: [-15, 0, 0] }}
        style={{ position: "absolute", top: "0em", right: "0em", height: "145vh", width: "calc(63vw)" }}
      >
        <Suspense fallback={null}>
          <Samples viewOnly={props.viewOnly} data={data} />
          {props.viewOnly ? (
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate={true} autoRotateSpeed={1} />
          ) : (
            <OrbitControls enablePan={false} minDistance={10} maxDistance={30} autoRotate={true} autoRotateSpeed={0.05} />
          )}
        </Suspense>
        <ambientLight />
      </Canvas>
      <Loader />
    </div>
  );
}

function Samples({ viewOnly, data }) {
  return (
    <group position={[0, 0, 0]}>
      {data.map((props, key) => (
        <Float
          key={key}
          rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        >
          <ImageSample viewOnly={viewOnly} key={key} {...props} index={key} />
        </Float>
      ))}
    </group>
  );
}

function ImageSample({ random, ...props }) {
  const index = Object.keys(sampleData)[props.index];
  const file = sampleData[index].file;
  const type = sampleData[index].type;

  return (
    <group {...props}>
      <Html transform>
        {props.viewOnly ? (
          <>
            {type === "Image" ? <img src={file} alt={"term #" + index} width={500 / 4} /> : <></>}

            {type === "Video" ? (
              <div style={{ height: "10vw" }}>
                <video loop muted autoPlay controls src={file}></video>
              </div>
            ) : (
              <></>
            )}

            {type === "Audio" ? (
              <div style={{ width: "25vw" }}>
                <audio controls src={file}></audio>
              </div>
            ) : (
              <></>
            )}
          </>
        ) : (
          <a href={"../term/" + index}>
            {type === "Image" ? (
              <img
                className="viewer"
                style={{
                  cursor: "pointer",
                }}
                src={file}
                alt={"term " + index}
                width={500 / 5}
              />
            ) : (
              <></>
            )}

            {type === "Video" ? (
              <div style={{ height: "10vw" }}>
                <video loop muted autoPlay controls src={file}></video>
              </div>
            ) : (
              <></>
            )}

            {type === "Audio" ? (
              <div style={{ width: "25vw" }}>
                <audio controls src={file}></audio>
              </div>
            ) : (
              <></>
            )}
          </a>
        )}
      </Html>
    </group>
  );
}
