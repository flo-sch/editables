/**
 * Bootstrap UI application with Vue
 */

var Vue = require('vue');
Vue.config.debug = true;

var app = new Vue(require('./app.vue'));

// Expose public API
module.exports = {
	getContent: app.getContent
}