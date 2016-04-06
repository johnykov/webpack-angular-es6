import "./home.css";
import homeRouting from "./home.routes";
import HomeController from "./home.controller";

export default ngModule => {
  ngModule.config(homeRouting)
    .controller('HomeController', HomeController);
};