import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular'
import uirouter from 'angular-ui-router';
import routing from './app.config'

const ngModule = angular.module('app', [uirouter]).config(routing);

import header from './directives/header';
header(ngModule);

import kcdDirective from './directives/kcd';
kcdDirective(ngModule);

import homeContr from './features/home';
homeContr(ngModule);

import footer from './directives/footer';
footer(ngModule);
