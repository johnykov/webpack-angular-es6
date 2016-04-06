import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular'
import uirouter from 'angular-ui-router';
import routing from './app.config'

const ngModule = angular.module('app', [uirouter]).config(routing);

import header from './directives/header';
header(ngModule);

import kcdDirective from './directives/kcd';
kcdDirective(ngModule);

import mainCtrl from './features/main';
mainCtrl(ngModule);

import homeCtrl from './features/home';
homeCtrl(ngModule);

import footer from './directives/footer';
footer(ngModule);
