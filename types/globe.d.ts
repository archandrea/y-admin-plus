declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const Component: DefineComponent<{}, {}, any>
  export default Component
}

declare module 'ant-design-vue' {
  import Antd from 'ant-design-vue'
  export default Antd
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
