import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('login');
  this.route('signup');
  this.route('confirmpasswrord');
  this.route('confirmpassword');
  this.route('accountcreated');
  this.route('about');
  this.route('contact');
  this.route('term');
  this.route('men');
  this.route('women');
});

export default Router;
