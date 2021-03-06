import EmberRouter from '@ember/routing/router';
import config from 'unigen/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('base64gen');
  this.route('manualeditor');
  this.route('support');
});
