export default ngModule => {
  ngModule.directive('kcdHello', ($log) => {
    require('./kcd-hello.styl');
    return {
      restrict: 'E',
      scope: {},
      template: require('./kcd-hello.html'),
      controllerAs: 'vm',
      controller: function () {
        const vm = this;
        $log.info("hello");
        vm.greeting = "Hello Webpack";
      },
      link: (scope, element, attrs) => {
        element.fadeOut();
      }
    }
  })
};