import type { App, Plugin } from "vue";
import { each } from "lodash-es";

type SFCWithInstall<T> = T & Plugin;

// 导出一个名为 makeInstaller 的函数，该函数接受一个插件数组作为参数
export function makeInstaller(components: Plugin[]) {
  // 定义一个安装函数，该函数接受一个 Vue 应用实例作为参数
  const install = (app: App) =>
    // 使用 lodash 的 each 方法遍历 components 数组
    each(components, (c) => {
      // 对每个插件调用 app.use 方法，将插件注册到 Vue 应用中
      app.use(c);
    });

  // 返回安装函数
  return install;
}

export const withInstall = <T>(component: T) => {
  // 将传入的组件转换为带有安装方法的插件
  (component as SFCWithInstall<T>).install = (app: App) => {
    // 获取组件的名称，如果没有名称，则默认为 "UnnamedComponent"
    const name = (component as any)?.name || "UnnamedComponent";
    // 将组件注册到 Vue 应用中，使用获取到的名称
    app.component(name, component as SFCWithInstall<T>);
  };
  // 返回包装后的组件
  return component as SFCWithInstall<T>;
};
