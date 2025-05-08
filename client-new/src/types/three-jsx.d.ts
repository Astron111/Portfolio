import { Object3D, Mesh, Light } from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: React.DetailedHTMLProps<{ [key: string]: any }, Object3D>;
      mesh: React.DetailedHTMLProps<{ [key: string]: any }, Mesh>;
      ambientLight: React.DetailedHTMLProps<{ [key: string]: any }, Light>;
      directionalLight: React.DetailedHTMLProps<{ [key: string]: any }, Light>;
      pointLight: React.DetailedHTMLProps<{ [key: string]: any }, Light>;
    }
  }
} 