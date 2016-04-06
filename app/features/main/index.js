import mainRouting from "./main.routes";

//we are not using angular modules system, it's obsolete while having webpack
export default ngModule => {
  ngModule.config(mainRouting);
};