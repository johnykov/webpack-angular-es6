import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular'
import uirouter from 'angular-ui-router';
import routing from './app.config'

const ngModule = angular.module('app', [uirouter]).config(routing);

import directives from './directives';
directives(ngModule);

import homeContr from './features/home';
homeContr(ngModule);