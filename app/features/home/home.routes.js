export default function homeRoutes($stateProvider) {
  "ngInject";
  $stateProvider.state('home', {
      url: '/home',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    });
}