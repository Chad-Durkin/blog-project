'use strict';

define('desktop/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint.\n');
  });
});
define('desktop/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('desktop/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/destroy-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint.\n');
  });
});
define('desktop/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'desktop/tests/helpers/start-app', 'desktop/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _desktopTestsHelpersStartApp, _desktopTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _desktopTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _desktopTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('desktop/tests/helpers/module-for-acceptance.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/module-for-acceptance.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint.\n');
  });
});
define('desktop/tests/helpers/resolver', ['exports', 'desktop/resolver', 'desktop/config/environment'], function (exports, _desktopResolver, _desktopConfigEnvironment) {

  var resolver = _desktopResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _desktopConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _desktopConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('desktop/tests/helpers/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint.\n');
  });
});
define('desktop/tests/helpers/start-app', ['exports', 'ember', 'desktop/app', 'desktop/config/environment'], function (exports, _ember, _desktopApp, _desktopConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var attributes = _ember['default'].merge({}, _desktopConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    return _ember['default'].run(function () {
      var application = _desktopApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('desktop/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/start-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint.\n');
  });
});
define('desktop/tests/models/game.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/game.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/game.js should pass ESLint.\n');
  });
});
define('desktop/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint.\n');
  });
});
define('desktop/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - router.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint.\n');
  });
});
define('desktop/tests/routes/about.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/about.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass ESLint.\n');
  });
});
define('desktop/tests/routes/contact.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/contact.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contact.js should pass ESLint.\n');
  });
});
define('desktop/tests/routes/index.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/index.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint.\n');
  });
});
define('desktop/tests/test-helper', ['exports', 'desktop/tests/helpers/resolver', 'ember-qunit'], function (exports, _desktopTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_desktopTestsHelpersResolver['default']);
});
define('desktop/tests/test-helper.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - test-helper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint.\n');
  });
});
define('desktop/tests/unit/models/board-game-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('board-game', 'Unit | Model | board game', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('desktop/tests/unit/models/board-game-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/board-game-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/board-game-test.js should pass ESLint.\n');
  });
});
define('desktop/tests/unit/models/card-game-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('card-game', 'Unit | Model | card game', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('desktop/tests/unit/models/card-game-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/card-game-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/card-game-test.js should pass ESLint.\n');
  });
});
define('desktop/tests/unit/models/console-game-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('console-game', 'Unit | Model | console game', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('desktop/tests/unit/models/console-game-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/console-game-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/console-game-test.js should pass ESLint.\n');
  });
});
define('desktop/tests/unit/routes/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('desktop/tests/unit/routes/about-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/about-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass ESLint.\n');
  });
});
define('desktop/tests/unit/routes/contact-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:contact', 'Unit | Route | contact', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('desktop/tests/unit/routes/contact-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/contact-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass ESLint.\n');
  });
});
define('desktop/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('desktop/tests/unit/routes/index-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/index-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint.\n');
  });
});
require('desktop/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
