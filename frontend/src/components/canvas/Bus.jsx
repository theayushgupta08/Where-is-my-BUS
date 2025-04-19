import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import React, { Suspense, useEffect, useState } from 'react';
import CanvasLoader from '../Loader';

const Bus = ({ isMobile }) => {
    const bus = useGLTF('/bus/scene.gltf'); // Ensure the path is correct
    return (
        <mesh>
            <hemisphereLight intensity={1} />
            <directionalLight position={[10, 10, 5]} intensity={3} />
            <pointLight position={[0, 10, 0]} intensity={1} />
            <spotLight position={[20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
            <primitive
                object={bus.scene}
                scale={isMobile ? 0.5 : 5} // Adjusted scale for larger size
                position={isMobile ? [0, 0, 0] : [0, 0, 0]} // Adjusted position for better fit
                rotation={[0, 0, 0]}
            />
        </mesh>
    );
};

const BusCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas frameloop='demand' shadows dpr={[1, 2]} camera={{ position: [10, 2, 0], fov: 25 }} gl={{ preserveDrawingBuffer: true }} style={{ height: '100%' }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2} // This will help rotate around an axis and not up and down
                />
                <Bus isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default BusCanvas;