import { ReactNode } from 'react';
import { Object3D, Mesh, Points, Clock, Group } from 'three';

declare module '@react-three/fiber' {
  export interface ThreeElements {
    mesh: JSX.IntrinsicElements['mesh'] & { args?: any[] };
    group: JSX.IntrinsicElements['group'];
    ambientLight: JSX.IntrinsicElements['ambientLight'] & { intensity?: number };
    directionalLight: JSX.IntrinsicElements['directionalLight'] & { 
      intensity?: number;
      position?: [number, number, number];
    };
    points: JSX.IntrinsicElements['points'];
  }

  export function useFrame(callback: (state: { clock: Clock }) => void): void;
  
  export function useThree(): {
    viewport: { width: number; height: number };
    mouse: { x: number; y: number };
    clock: Clock;
  };
}

declare module '@react-three/drei' {
  export const OrbitControls: React.FC<{
    enableZoom?: boolean;
    enableRotate?: boolean;
    enablePan?: boolean;
    maxPolarAngle?: number;
    minPolarAngle?: number;
    autoRotate?: boolean;
    autoRotateSpeed?: number;
  }>;
  
  export const Sphere: React.FC<{
    args?: [radius?: number, widthSegments?: number, heightSegments?: number];
    scale?: number | [number, number, number];
    children?: ReactNode;
    ref?: React.RefObject<Mesh>;
  }>;
  
  export const Torus: React.FC<{
    args?: [radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number];
    position?: [number, number, number];
    children?: ReactNode;
    ref?: React.RefObject<Mesh>;
  }>;
  
  export const Stars: React.FC<{
    radius?: number;
    depth?: number;
    count?: number;
    factor?: number;
    saturation?: number;
    fade?: boolean;
    speed?: number;
  }>;
  
  export const Text: React.FC<{
    children: ReactNode;
    position?: [number, number, number];
    fontSize?: number;
    color?: string;
    anchorX?: 'center' | 'left' | 'right';
    anchorY?: 'middle' | 'top' | 'bottom';
    ref?: React.RefObject<Mesh>;
  }>;

  export const MeshDistortMaterial: React.FC<{
    color?: string;
    attach?: string;
    distort?: number;
    speed?: number;
    roughness?: number;
    transparent?: boolean;
    opacity?: number;
    metalness?: number;
  }>;
} 