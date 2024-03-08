declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const Component: DefineComponent<{}, {}, any>
  export default Component
}

declare module 'ant-design-vue' {
  import Antd from 'ant-design-vue'
  export default Antd
}
