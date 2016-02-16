import './home.css';
import routing from './home.routes';
import HomeController from './home.controller';

export default ngModule => {
  ngModule.config(routing)
    .controller('HomeController', HomeController);
};