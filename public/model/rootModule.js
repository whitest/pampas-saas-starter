import angular from 'angular';
import routerLink from 'routerLink';
import * as C from 'core';
import 'angular-route';
import Base from '../base/base';
import Component from '../component/component';
[__IMPORT]

const [__NAME] = angular
    .module('[__NAME]', ['ngRoute', Base.name, Component.name, [__DEPENDS]])
    [__INJECT]

angular.bootstrap(document, [[__NAME].name])
