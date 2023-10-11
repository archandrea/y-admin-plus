declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const Component: DefineComponent<{}, {}, any>;
  export default Component;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
