import 'babel-polyfill';
import './commands';

cy.server({
    onAnyRequest: function (route,  proxy) {
        proxy.xhr.setRequestHeader('Origin',  'https://wallet.trezor.io');
    }
});