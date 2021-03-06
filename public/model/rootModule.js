import angular from 'angular';
import routerLink from 'routerLink';
import * as C from 'core';
import 'angular-route';
import '../lib/ngMomentPicker/angular-moment-picker';
import Base from '../base/base';
import Component from '../component/component';
[__IMPORT]

const [__NAME] = angular
    .module('[__NAME]', ['ngRoute', 'moment-picker', Base.name, Component.name, [__DEPENDS]])
    [__INJECT]

angular.bootstrap(document, [[__NAME].name])
