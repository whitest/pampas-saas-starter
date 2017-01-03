import angular from 'angular';
import routerLink from 'routerLink';
import * as C from 'core';
import template from './[__FILENAME].html'

const myDirective = ($rootScope[__INJECT]) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        replace: true,
        scope:{},
        link: ($scope) => {

        },
        [__ISCONTROLLER]
    };
};

export default myDirective;
