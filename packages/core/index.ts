import { makeInstaller } from "@currying-element/utils";
import components from "./components";
import "@currying-element/theme/index.css";

const installer = makeInstaller(components);

export * from "@currying-element/components";
export default installer;
