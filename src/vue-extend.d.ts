import { RouteRecordRaw } from 'vue-router';

interface AsyncDataContextType {
  route: RouteRecordRaw;
  store: any; // 类型不决 用 any。  -.-!
}

declare module '@vue/runtime-core' {
  interface ComponentCustomOptions {
    asyncData?(context: AsyncDataContextType): Promise<any>;
  }
}
