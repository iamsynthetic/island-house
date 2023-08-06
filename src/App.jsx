import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useEffect, useState } from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { MotionConfig } from "framer-motion";
import { FramerMotionConfig } from "./config";
import { Cursor } from "./components/Cursor";

function App() {
  const [section, setSection] = useState(0)
  const [menuOpened, setMenuOpened] = useState(false)
  const [showAmountOfPages, setAmountOfPages] = useState(5)
  const tabletwidth = 768

  const amountofpages = 5;

  useEffect(() => {
    setMenuOpened(false)
  }, [section])

  useEffect(() => {

      const handleResize = () => {
          if(window.innerWidth < tabletwidth) {
            console.log('less than - ' + showAmountOfPages)
            setAmountOfPages(1)
          }
          else
          {
            console.log('more than - ' + showAmountOfPages)
            setAmountOfPages(5)
            console.log('more thant3353535 - ' + showAmountOfPages)
          }
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)

  }, [])

  return (
    <>
      <MotionConfig transition={{...FramerMotionConfig}}>
        <Canvas shadows camera={{ position: [0, 5, 14], fov: 42 }}>
          <ScrollControls pages={showAmountOfPages} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection}/> 
              <Experience section={section} menuOpened={menuOpened}/> 
            <Scroll html>
              <Interface onSectionChange={setSection} />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
        <Cursor />
      </MotionConfig>
  </>
  );
}

export default App;
