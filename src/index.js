// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Expression from './components/Expression';
import {ExpressionApp} from './components/Expression';

var components = [
    Expression
];
export default {
    install(Vue) {
        components.map(function(component) {
            Vue.component(component.name, component);
        });
    },
};
export { Expression,ExpressionApp};



