import { FramerMotionConfig } from "../config";
import { House } from "./House"
import { animate, useMotionValue } from "framer-motion";
import { useEffect } from 'react'
import { useFrame } from "@react-three/fiber";

export const Experience = (props) => {
  
  const {section, menuOpened } = props;

  const cameraPositionX = useMotionValue()
  const cameraLookAtX = useMotionValue()

  // when menu is opened and closed
  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -2.5 : 0, {
      ...FramerMotionConfig
    })
    animate(cameraLookAtX, menuOpened ? 2.5 : 0, {
      ...FramerMotionConfig
    })
  }, [menuOpened])

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get()
    state.camera.lookAt(cameraLookAtX.get(), 0, 0)
  })

  return (
    <>
      <ambientLight intensity={[.8]}/>
      <pointLight intensity={[1]} position={[100, 100, 100]} />
      <group>
        <House section={section} />
      </group>
    </>
  );
};
