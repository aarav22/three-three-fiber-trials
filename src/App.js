import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { React, Suspense } from "react";
import Model from "./TestLionGITF.js";

export default function App() {
    return (
        <div className="App">
            <Canvas>
                <Suspense fallback={null}>
                    <Model />
                    <OrbitControls />
                    <Environment preset="sunset" background />
                </Suspense>
            </Canvas>
        </div>
    );
}
