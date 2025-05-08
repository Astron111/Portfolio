declare module '@react-three/fiber' {
  import { Object3D, Material, Mesh, Light } from 'three';
  
  export function extend(objects: { [key: string]: any }): void;
  export function Canvas(props: any): JSX.Element;
  
  export namespace JSX {
    interface IntrinsicElements {
      group: { [key: string]: any };
      mesh: { [key: string]: any };
      ambientLight: { [key: string]: any };
      directionalLight: { [key: string]: any };
      pointLight: { [key: string]: any };
    }
  }
} 