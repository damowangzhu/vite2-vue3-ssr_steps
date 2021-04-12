import { RouteRecordRaw } from 'vue-router';

export interface IAsyncDataContext {
  route: RouteRecordRaw;
  store: any;
}

declare module '@vue/runtime-core' {
  interface ComponentCustomOptions {
    asyncData?(context: IAsyncDataContext): Promise<any>;
  }
}
