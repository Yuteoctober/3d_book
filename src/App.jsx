import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import livebg2 from './assets/livebg2.mp4';
import loadingchillguy from '../src/assets/chillmeditate.webp';

function App() {
  return (
    <div id="root">
      <video autoPlay muted loop playsInline id="background-video" disablePictureInPicture>
        <source src={livebg2} type="video/mp4" />
      </video>
      <UI />
      <Loader
        containerStyles={{
          backgroundColor: '#27211f',
          backgroundImage: `url(${loadingchillguy})`,
          backgroundSize: '80px',
          backgroundPosition: 'center calc(50% - 2rem)',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          marginBottom: '20px',
        }}
        innerStyles={{ color: 'white' }}
        barStyles={{ backgroundColor: 'white' }}
        dataStyles={{ color: 'white' }}
        dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
      />
      <Canvas
        shadows
        camera={{
          position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
          fov: 45,
        }}
      >
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
    </div>
  );
}

export default App;
