import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular'
import uirouter from 'angular-ui-router';
import routing from './app.config'

const ngModule = angular.module('app', [uirouter]).config(routing);

import headerComponent from './components/header';
headerComponent(ngModule);

import kcdDirective from './components/kcd';
kcdDirective(ngModule);

import mainCtrl from './features/main';
mainCtrl(ngModule);

import homeCtrl from './features/home';
homeCtrl(ngModule);

import footerComponent from './components/footer';
footerComponent(ngModule);
