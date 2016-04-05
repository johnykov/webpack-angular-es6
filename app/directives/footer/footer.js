export default ngModule => {
  ngModule.directive('footerDir', ($log) => {
    require('./footer.css');
    return {
      restrict: 'E',
      scope: {},
      template: require('./footer.html')
    }
  })
};