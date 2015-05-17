Router.configure({
  layoutTemplate: 'layout',
  layoutTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('posts'); }

});

Router.route('/', {name: 'postsList'});