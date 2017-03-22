"use strict";



define('desktop/app', ['exports', 'ember', 'desktop/resolver', 'ember-load-initializers', 'desktop/config/environment'], function (exports, _ember, _desktopResolver, _emberLoadInitializers, _desktopConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _desktopConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _desktopConfigEnvironment['default'].podModulePrefix,
    Resolver: _desktopResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _desktopConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('desktop/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('desktop/helpers/app-version', ['exports', 'ember', 'desktop/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _desktopConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _desktopConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('desktop/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('desktop/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('desktop/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'desktop/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _desktopConfigEnvironment) {
  var _config$APP = _desktopConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('desktop/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('desktop/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('desktop/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('desktop/initializers/export-application-global', ['exports', 'ember', 'desktop/config/environment'], function (exports, _ember, _desktopConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_desktopConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _desktopConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_desktopConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('desktop/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('desktop/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('desktop/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("desktop/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('desktop/models/game', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        category: _emberData['default'].attr(),
        tag: _emberData['default'].attr(),
        name: _emberData['default'].attr(),
        description: _emberData['default'].attr(),
        playerCount: _emberData['default'].attr(),
        image: _emberData['default'].attr(),
        review: _emberData['default'].attr()
    });
});
define('desktop/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('desktop/router', ['exports', 'ember', 'desktop/config/environment'], function (exports, _ember, _desktopConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _desktopConfigEnvironment['default'].locationType,
    rootURL: _desktopConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('about');
    this.route('contact');
  });

  exports['default'] = Router;
});
define('desktop/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('desktop/routes/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('desktop/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('desktop/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("desktop/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ekruHDoy", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Welcome to a Blog about Gaming\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Authors\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Chad Durkin\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Derek Villars\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Inspiration\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"We do this because we have to.\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "desktop/templates/about.hbs" } });
});
define("desktop/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "YKi3jboX", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"header\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"index\"],null,3],[\"close-element\"],[\"text\",\"\\n    \"],[\"comment\",\" <h3>{{#link-to 'console'}}Console Games{{/link-to}} | {{#link-to 'board'}}Board Games{{/link-to}} | {{#link-to 'card'}}Card Games{{/link-to}}</h3> \"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Search by tags can go here\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n  \"],[\"open-element\",\"footer\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"block\",[\"link-to\"],[\"contact\"],null,2],[\"text\",\"\\n    \"],[\"block\",[\"link-to\"],[\"about\"],null,1],[\"text\",\"\\n    \"],[\"block\",[\"link-to\"],[\"index\"],null,0],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Home Page\"]],\"locals\":[]},{\"statements\":[[\"text\",\"About Us\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Contact Us\"]],\"locals\":[]},{\"statements\":[[\"text\",\"The Gaming Blog\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "desktop/templates/application.hbs" } });
});
define("desktop/templates/contact", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "E1ut4xBq", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"If you have any comments and questions...\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Dont contact us at\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Chaddurkin@gmail.com\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Derekvillars@gmail.com\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "desktop/templates/contact.hbs" } });
});
define("desktop/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "P5HvR+zN", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"This will be a wall with our blog feed, unorganized to start\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"example 1\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"example 2\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"example 3\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "desktop/templates/index.hbs" } });
});


define('desktop/config/environment', ['ember'], function(Ember) {
  var prefix = 'desktop';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("desktop/app")["default"].create({"name":"desktop","version":"0.0.0+e5133960"});
}
//# sourceMappingURL=desktop.map
