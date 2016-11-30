import angular from 'angular';
import routerLink from 'routerLink';
import template from './[__FILENAME].html'

const myDirective = ($rootScope[__INJECT]) => {
    'ngInject';
    return {
        restrict: 'EA',
        template,
        link: ($scope) => {

        },
    };
};

export default myDirective;
