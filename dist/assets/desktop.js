"use strict";



define('desktop/adapters/application', ['exports', 'emberfire/adapters/firebase'], function (exports, _emberfireAdaptersFirebase) {
  exports['default'] = _emberfireAdaptersFirebase['default'].extend({});
});
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
define('desktop/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _emberBootstrapComponentsBsAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordion['default'];
    }
  });
});
define('desktop/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _emberBootstrapComponentsBsAccordionItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItem['default'];
    }
  });
});
define('desktop/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _emberBootstrapComponentsBsAlert) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAlert['default'];
    }
  });
});
define('desktop/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _emberBootstrapComponentsBsButtonGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButtonGroup['default'];
    }
  });
});
define('desktop/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _emberBootstrapComponentsBsButtonGroupButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButtonGroupButton['default'];
    }
  });
});
define('desktop/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _emberBootstrapComponentsBsButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButton['default'];
    }
  });
});
define('desktop/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _emberBootstrapComponentsBsCollapse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsCollapse['default'];
    }
  });
});
define('desktop/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _emberBootstrapComponentsBsDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdown['default'];
    }
  });
});
define('desktop/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _emberBootstrapComponentsBsDropdownButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownButton['default'];
    }
  });
});
define('desktop/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _emberBootstrapComponentsBsDropdownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenu['default'];
    }
  });
});
define('desktop/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _emberBootstrapComponentsBsDropdownMenuDivider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenuDivider['default'];
    }
  });
});
define('desktop/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _emberBootstrapComponentsBsDropdownMenuItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenuItem['default'];
    }
  });
});
define('desktop/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _emberBootstrapComponentsBsDropdownToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownToggle['default'];
    }
  });
});
define('desktop/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _emberBootstrapComponentsBsForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsForm['default'];
    }
  });
});
define('desktop/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _emberBootstrapComponentsBsFormElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElement['default'];
    }
  });
});
define('desktop/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _emberBootstrapComponentsBsFormElementControl) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControl['default'];
    }
  });
});
define('desktop/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementControlCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlCheckbox['default'];
    }
  });
});
define('desktop/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _emberBootstrapComponentsBsFormElementControlInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlInput['default'];
    }
  });
});
define('desktop/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _emberBootstrapComponentsBsFormElementControlTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlTextarea['default'];
    }
  });
});
define('desktop/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _emberBootstrapComponentsBsFormElementErrors) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementErrors['default'];
    }
  });
});
define('desktop/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _emberBootstrapComponentsBsFormElementFeedbackIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementFeedbackIcon['default'];
    }
  });
});
define('desktop/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _emberBootstrapComponentsBsFormElementLabel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLabel['default'];
    }
  });
});
define('desktop/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _emberBootstrapComponentsBsFormElementLayoutHorizontal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutHorizontal['default'];
    }
  });
});
define('desktop/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutHorizontalCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutHorizontalCheckbox['default'];
    }
  });
});
define('desktop/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _emberBootstrapComponentsBsFormElementLayoutInline) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutInline['default'];
    }
  });
});
define('desktop/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutInlineCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutInlineCheckbox['default'];
    }
  });
});
define('desktop/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _emberBootstrapComponentsBsFormElementLayoutVertical) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutVertical['default'];
    }
  });
});
define('desktop/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutVerticalCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutVerticalCheckbox['default'];
    }
  });
});
define('desktop/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _emberBootstrapComponentsBsFormGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormGroup['default'];
    }
  });
});
define('desktop/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _emberBootstrapComponentsBsModalSimple) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalSimple['default'];
    }
  });
});
define('desktop/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _emberBootstrapComponentsBsModal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModal['default'];
    }
  });
});
define('desktop/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _emberBootstrapComponentsBsModalBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBody['default'];
    }
  });
});
define('desktop/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _emberBootstrapComponentsBsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalDialog['default'];
    }
  });
});
define('desktop/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _emberBootstrapComponentsBsModalFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalFooter['default'];
    }
  });
});
define('desktop/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _emberBootstrapComponentsBsModalHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeader['default'];
    }
  });
});
define('desktop/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _emberBootstrapComponentsBsModalHeaderClose) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeaderClose['default'];
    }
  });
});
define('desktop/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _emberBootstrapComponentsBsModalHeaderTitle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeaderTitle['default'];
    }
  });
});
define('desktop/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _emberBootstrapComponentsBsNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNav['default'];
    }
  });
});
define('desktop/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _emberBootstrapComponentsBsNavItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavItem['default'];
    }
  });
});
define('desktop/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _emberBootstrapComponentsBsNavLinkTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavLinkTo['default'];
    }
  });
});
define('desktop/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _emberBootstrapComponentsBsNavbar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbar['default'];
    }
  });
});
define('desktop/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _emberBootstrapComponentsBsNavbarContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarContent['default'];
    }
  });
});
define('desktop/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _emberBootstrapComponentsBsNavbarNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarNav['default'];
    }
  });
});
define('desktop/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _emberBootstrapComponentsBsNavbarToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarToggle['default'];
    }
  });
});
define('desktop/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _emberBootstrapComponentsBsPopover) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopover['default'];
    }
  });
});
define('desktop/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _emberBootstrapComponentsBsPopoverElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopoverElement['default'];
    }
  });
});
define('desktop/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _emberBootstrapComponentsBsProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgress['default'];
    }
  });
});
define('desktop/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _emberBootstrapComponentsBsProgressBar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgressBar['default'];
    }
  });
});
define('desktop/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _emberBootstrapComponentsBsTab) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTab['default'];
    }
  });
});
define('desktop/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _emberBootstrapComponentsBsTabPane) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTabPane['default'];
    }
  });
});
define('desktop/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _emberBootstrapComponentsBsTooltip) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltip['default'];
    }
  });
});
define('desktop/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _emberBootstrapComponentsBsTooltipElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltipElement['default'];
    }
  });
});
define('desktop/components/category-tile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      saveGame: function saveGame(params) {
        this.sendAction('saveGame', params);
      }
    }
  });
});
define('desktop/components/dash-blog-tile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      'delete': function _delete(game) {
        if (confirm('Are you sure you want to delete this game?')) {
          this.sendAction('delete', game);
        }
      }
    }
  });
});
define('desktop/components/edit-game', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    updateGameForm: false,

    actions: {
      updateGameForm: function updateGameForm() {
        this.set('updateGameForm', true);
      },

      update: function update(game) {
        var params = {
          category: this.get('category'),
          name: this.get('name'),
          description: this.get('description'),
          playerCount: this.get('playerCount'),
          image: this.get('image')
          // review: [{author: this.get('author'), note: this.get('note')}],
          // tag: [{tag: this.get('tag')}]
        };
        this.set('updateGameForm', false);
        this.sendAction('update', game, params);
      }
    }
  });
});
define('desktop/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('desktop/components/game-detail', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      'delete': function _delete(game) {
        if (confirm('do you wish to delete this game')) {
          this.sendAction('destroyGame', game);
        }
      }
    }
  });
});
define('desktop/components/game-tile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    isImageShowing: false,
    actions: {
      imageShow: function imageShow() {
        this.set('isImageShowing', true);
      },
      imageHide: function imageHide() {
        this.set('isImageShowing', false);
      },
      update: function update(game, params) {
        this.sendAction('update', game, params);
      },
      destroyGame: function destroyGame(game) {
        this.sendAction('destroyGame', game);
      }
    }

  });
});
define('desktop/components/index-blog-tile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('desktop/components/list-category-tile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('desktop/components/new-game', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    newGameForm: false,
    actions: {
      gameFormShow: function gameFormShow() {
        if (this.newGameForm) {
          this.set('newGameForm', false);
        } else {
          this.set('newGameForm', true);
        }
      },

      saveGame: function saveGame() {
        var params = {
          category: this.get('category'),
          name: this.get('name'),
          description: this.get('description'),
          playerCount: this.get('playerCount'),
          image: this.get('image')
        };
        this.set('addNewGame', false);
        this.sendAction('saveGame', params);
      }
    }
  });
});
define('desktop/components/select-box', ['exports', 'ember-select-box/components/select-box'], function (exports, _emberSelectBoxComponentsSelectBox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSelectBoxComponentsSelectBox['default'];
    }
  });
});
define('desktop/components/select-box/api', ['exports', 'ember-select-box/components/select-box/api'], function (exports, _emberSelectBoxComponentsSelectBoxApi) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSelectBoxComponentsSelectBoxApi['default'];
    }
  });
});
define('desktop/components/select-box/group', ['exports', 'ember-select-box/components/select-box/group'], function (exports, _emberSelectBoxComponentsSelectBoxGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSelectBoxComponentsSelectBoxGroup['default'];
    }
  });
});
define('desktop/components/select-box/input', ['exports', 'ember-select-box/components/select-box/input'], function (exports, _emberSelectBoxComponentsSelectBoxInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSelectBoxComponentsSelectBoxInput['default'];
    }
  });
});
define('desktop/components/select-box/native', ['exports', 'ember-select-box/components/select-box/native'], function (exports, _emberSelectBoxComponentsSelectBoxNative) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSelectBoxComponentsSelectBoxNative['default'];
    }
  });
});
define('desktop/components/select-box/native/group', ['exports', 'ember-select-box/components/select-box/native/group'], function (exports, _emberSelectBoxComponentsSelectBoxNativeGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSelectBoxComponentsSelectBoxNativeGroup['default'];
    }
  });
});
define('desktop/components/select-box/native/option', ['exports', 'ember-select-box/components/select-box/native/option'], function (exports, _emberSelectBoxComponentsSelectBoxNativeOption) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSelectBoxComponentsSelectBoxNativeOption['default'];
    }
  });
});
define('desktop/components/select-box/option', ['exports', 'ember-select-box/components/select-box/option'], function (exports, _emberSelectBoxComponentsSelectBoxOption) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSelectBoxComponentsSelectBoxOption['default'];
    }
  });
});
define('desktop/components/select-box/options', ['exports', 'ember-select-box/components/select-box/options'], function (exports, _emberSelectBoxComponentsSelectBoxOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSelectBoxComponentsSelectBoxOptions['default'];
    }
  });
});
define('desktop/components/select-box/selected-option', ['exports', 'ember-select-box/components/select-box/selected-option'], function (exports, _emberSelectBoxComponentsSelectBoxSelectedOption) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSelectBoxComponentsSelectBoxSelectedOption['default'];
    }
  });
});
define('desktop/components/select-box/selected-options', ['exports', 'ember-select-box/components/select-box/selected-options'], function (exports, _emberSelectBoxComponentsSelectBoxSelectedOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSelectBoxComponentsSelectBoxSelectedOptions['default'];
    }
  });
});
define('desktop/components/select-box/selected', ['exports', 'ember-select-box/components/select-box/selected'], function (exports, _emberSelectBoxComponentsSelectBoxSelected) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSelectBoxComponentsSelectBoxSelected['default'];
    }
  });
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
define('desktop/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _emberBootstrapHelpersBsContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains['default'];
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains.bsContains;
    }
  });
});
define('desktop/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _emberBootstrapHelpersBsEq) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq['default'];
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq.eq;
    }
  });
});
define('desktop/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('desktop/helpers/select-box-class', ['exports', 'ember-select-box/helpers/select-box-class'], function (exports, _emberSelectBoxHelpersSelectBoxClass) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSelectBoxHelpersSelectBoxClass['default'];
    }
  });
  Object.defineProperty(exports, 'selectBoxClass', {
    enumerable: true,
    get: function get() {
      return _emberSelectBoxHelpersSelectBoxClass.selectBoxClass;
    }
  });
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
define('desktop/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfireInitializersEmberfire) {
  exports['default'] = _emberfireInitializersEmberfire['default'];
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
define('desktop/initializers/load-bootstrap-config', ['exports', 'desktop/config/environment', 'ember-bootstrap/config'], function (exports, _desktopConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_desktopConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
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
define('desktop/models/category', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    category: _emberData['default'].attr(),
    games: _emberData['default'].hasMany('game', { async: true })
  });
});
define('desktop/models/game', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        name: _emberData['default'].attr(),
        description: _emberData['default'].attr(),
        playerCount: _emberData['default'].attr(),
        image: _emberData['default'].attr(),
        category: _emberData['default'].belongsTo('category', { async: true })
    });
});
// tag: DS.belongsTo('tag', {async: true})
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
    this.route('category-games', { path: '/category-games/:category_id' });
    this.route('game', { path: '/game/:game_id' });
    this.route('dash');
    this.route('update', { path: '/update/:game_id' });
  });

  exports['default'] = Router;
});
define('desktop/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('desktop/routes/category-games', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return _ember['default'].RSVP.hash({
        games: this.store.findAll('game'),
        categories: this.store.findAll('category'),
        cateogry: this.store.findRecord('category', params.category_id)
      });
    }
  });
});
define('desktop/routes/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('desktop/routes/dash', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return _ember['default'].RSVP.hash({
        games: this.store.findAll('game'),
        categories: this.store.findAll('category')
      });
    },
    actions: {
      saveGame: function saveGame(params) {
        var newGame = this.store.createRecord('game', params);
        var category = params.category;
        category.get('games').addObject(newGame);
        newGame.save().then(function () {
          return category.save();
        });
        this.transitionTo('dash');
      },

      'delete': function _delete(game) {
        // var comment_deletions = article.get('comments').map(function(comment) {
        //   return comment.destroyRecord();
        // });
        // Ember.RSVP.all(comment_deletions).then(function(){
        // return
        game.destroyRecord();
        // });
        this.transitionTo('dash');
      }
    }
  });
});
define('desktop/routes/game', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('game', params.game_id);
    }
    // actions: {
    //  saveComment(params) {
    //    var newComment = this.store.createRecord('comment', params);
    //    var article = params.article;
    //    article.get('comments').addObject(newComment);
    //    newComment.save().then(function(){
    //      return article.save();
    //    });
    //    this.transitionTo('article', article);
    //  },
    //  deleteComment(comment, article) {
    //    comment.destroyRecord();
    //    this.transitionTo('article', article);
    //  }
    // }
  });
});
define('desktop/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      // Ember.RSVP.has(
      return {
        games: this.store.findAll('game'),
        categories: this.store.findAll('category')
      };
    }
  });
});
define('desktop/routes/update', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('game', params.game_id);
    },
    actions: {
      update: function update(game) {
        // declare params variable here because not defined through component. comes directly from update route
        var params = {
          name: this.get('name'),
          playerCount: this.get('playerCount'),
          description: this.get('description'),
          image: this.get('image')
        };
        Object.keys(params).forEach(function (key) {
          if (params[key] !== undefined) {
            game.set(key, params[key]);
          }
        });
        game.save();
        this.transitionTo('dash');
      }
    }
  });
});
define('desktop/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('desktop/services/firebase-app', ['exports', 'emberfire/services/firebase-app'], function (exports, _emberfireServicesFirebaseApp) {
  exports['default'] = _emberfireServicesFirebaseApp['default'];
});
define('desktop/services/firebase', ['exports', 'emberfire/services/firebase'], function (exports, _emberfireServicesFirebase) {
  exports['default'] = _emberfireServicesFirebase['default'];
});
define("desktop/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ekruHDoy", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Welcome to a Blog about Gaming\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Authors\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Chad Durkin\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Derek Villars\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Inspiration\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"We do this because we have to.\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "desktop/templates/about.hbs" } });
});
define("desktop/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "BFsaNzL+", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"header\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"nav-bar\"],[\"flush-element\"],[\"text\",\"\\n       \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"main\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\"],[\"title\"]],3],[\"text\",\"\\n       \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"dash\"],[[\"class\"],[\"navlink\"]],2],[\"text\",\" | \"],[\"block\",[\"link-to\"],[\"about\"],[[\"class\"],[\"navlink\"]],1],[\"text\",\" |\\n      \"],[\"block\",[\"link-to\"],[\"contact\"],[[\"class\"],[\"navlink\"]],0],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n  \"],[\"open-element\",\"footer\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\" Contact\"]],\"locals\":[]},{\"statements\":[[\"text\",\" About\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Dashboard\"]],\"locals\":[]},{\"statements\":[[\"text\",\"         \"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Gaming Blog\"],[\"close-element\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "desktop/templates/application.hbs" } });
});
define("desktop/templates/category-games", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "fJF72j2h", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-8\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"category\",\"category\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"index-blog-pane\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"category\",\"games\"]]],null,0],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"categories\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"list-category-tile\"],null,[[\"categories\"],[[\"get\",[\"model\",\"categories\"]]]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"append\",[\"helper\",[\"index-blog-tile\"],null,[[\"game\"],[[\"get\",[\"game\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"game\"]}],\"hasPartials\":false}", "meta": { "moduleName": "desktop/templates/category-games.hbs" } });
});
define("desktop/templates/components/category-tile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "RJ/qZ+WN", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"categories\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"new-game\"],null,[[\"saveGame\",\"category\"],[\"saveGame\",[\"get\",[\"category\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"category\"]}],\"hasPartials\":false}", "meta": { "moduleName": "desktop/templates/components/category-tile.hbs" } });
});
define("desktop/templates/components/dash-blog-tile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "3WY6TxvK", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"game\"]]],null,1]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"button\",[]],[\"flush-element\"],[\"text\",\"Update\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"blog\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\",[\"get\",[\"blog\"]]]],[\"flush-element\"],[\"text\",\"Delete\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"block\",[\"link-to\"],[\"update\",[\"get\",[\"blog\",\"id\"]]],null,0],[\"text\",\"\\n\"]],\"locals\":[\"blog\"]}],\"hasPartials\":false}", "meta": { "moduleName": "desktop/templates/components/dash-blog-tile.hbs" } });
});
define("desktop/templates/components/edit-game", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "TC4dxNfi", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"updateGameForm\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"updateGameForm\"]],[\"flush-element\"],[\"text\",\"Update\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Edit \"],[\"append\",[\"unknown\",[\"game\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"update-game\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"form\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"name\"],[\"flush-element\"],[\"text\",\"Game Name\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"placeholder\"],[[\"get\",[\"name\"]],\"name\",[\"get\",[\"game\",\"name\"]]]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"description\"],[\"flush-element\"],[\"text\",\"Game Description\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"placeholder\"],[[\"get\",[\"description\"]],\"description\",[\"get\",[\"game\",\"description\"]]]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"playerCount\"],[\"flush-element\"],[\"text\",\"How many players can play this game?\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"placeholder\"],[[\"get\",[\"playerCount\"]],\"playerCount\",[\"get\",[\"game\",\"playerCount\"]]]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"image\"],[\"flush-element\"],[\"text\",\"Update the image link for this game\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"placeholder\"],[[\"get\",[\"image\"]],\"image\",[\"get\",[\"game\",\"image\"]]]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n\\n          \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"update\",[\"get\",[\"game\"]]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "desktop/templates/components/edit-game.hbs" } });
});
define("desktop/templates/components/game-detail", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "JWP+subB", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"game\",\"name\"]],false],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\",[\"get\",[\"game\"]]]],[\"flush-element\"],[\"text\",\"Delete?\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "desktop/templates/components/game-detail.hbs" } });
});
define("desktop/templates/components/game-tile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "YGtoJSRb", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"game-panel\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isImageShowing\"]]],null,3,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row exterior\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6 exterior-img\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"unknown\",[\"game\",\"image\"]],null],[\"dynamic-attr\",\"alt\",[\"unknown\",[\"game\",\"name\"]],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"imageShow\"]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"cold-md-6 exterior-display\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\" \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"game\",\"name\"]],false],[\"close-element\"],[\"text\",\" | \"],[\"open-element\",\"em\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"game\",\"category\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\" \\\"\"],[\"append\",[\"unknown\",[\"tag\",\"tag\"]],false],[\"text\",\"\\\" \"]],\"locals\":[\"tag\"]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"review\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Review: \"],[\"append\",[\"unknown\",[\"review\",\"note\"]],false],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                By \"],[\"append\",[\"unknown\",[\"review\",\"author\"]],false],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n        \"]],\"locals\":[\"review\"]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"interior-content\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"imageHide\"]],[\"flush-element\"],[\"text\",\"Hide Content\"],[\"close-element\"],[\"append\",[\"helper\",[\"edit-game\"],null,[[\"game\",\"update\"],[[\"get\",[\"game\"]],\"update\"]]],false],[\"append\",[\"helper\",[\"game-detail\"],null,[[\"game\",\"destroyGame\"],[[\"get\",[\"game\"]],\"destroyGame\"]]],false],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"game\",\"name\"]],false],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"game\",\"category\"]],false],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"interior-img\"],[\"dynamic-attr\",\"src\",[\"unknown\",[\"game\",\"image\"]],null],[\"dynamic-attr\",\"alt\",[\"unknown\",[\"game\",\"name\"]],null],[\"flush-element\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Description: \"],[\"append\",[\"unknown\",[\"game\",\"description\"]],false],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        Players: \"],[\"append\",[\"unknown\",[\"game\",\"playerCount\"]],false],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"game\",\"review\"]]],null,2],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Tags:\"],[\"block\",[\"each\"],[[\"get\",[\"game\",\"tag\"]]],null,1],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "desktop/templates/components/game-tile.hbs" } });
});
define("desktop/templates/components/index-blog-tile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "q8sdqJ3Y", "block": "{\"statements\":[[\"block\",[\"link-to\"],[\"game\",[\"get\",[\"game\",\"id\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"blog-posts row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-5 image-div\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"home-image\"],[\"dynamic-attr\",\"src\",[\"unknown\",[\"game\",\"image\"]],null],[\"dynamic-attr\",\"alt\",[\"unknown\",[\"game\",\"name\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\">\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-7\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"game\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Player Count: \"],[\"append\",[\"unknown\",[\"game\",\"playerCount\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"game\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "desktop/templates/components/index-blog-tile.hbs" } });
});
define("desktop/templates/components/list-category-tile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "x/cr68a1", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Categories\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"categories\"]]],null,1]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"append\",[\"unknown\",[\"category\",\"category\"]],false]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"block\",[\"link-to\"],[\"category-games\",[\"get\",[\"category\",\"id\"]]],null,0],[\"text\",\"\\n\"]],\"locals\":[\"category\"]}],\"hasPartials\":false}", "meta": { "moduleName": "desktop/templates/components/list-category-tile.hbs" } });
});
define("desktop/templates/components/new-game", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hxDMMP3T", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"newGameForm\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"gameFormShow\"]],[\"flush-element\"],[\"text\",\"New Game for \"],[\"append\",[\"unknown\",[\"category\",\"category\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"New Game under the \"],[\"append\",[\"unknown\",[\"category\",\"category\"]],false],[\"text\",\" category\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"new-game\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"form\",[]],[\"static-attr\",\"class\",\"game-form\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"tag\"],[\"flush-element\"],[\"text\",\"Add a tag to this game(i.e. strategy)\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\"],[[\"get\",[\"tag\"]],\"tag\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"name\"],[\"flush-element\"],[\"text\",\"Game Name\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\"],[[\"get\",[\"name\"]],\"name\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"description\"],[\"flush-element\"],[\"text\",\"Game Description\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\"],[[\"get\",[\"description\"]],\"description\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"playerCount\"],[\"flush-element\"],[\"text\",\"How many players can play this game?\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\"],[[\"get\",[\"playerCount\"]],\"playerCount\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"image\"],[\"flush-element\"],[\"text\",\"Add an image link for this game\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\"],[[\"get\",[\"image\"]],\"image\"]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"saveGame\"]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "desktop/templates/components/new-game.hbs" } });
});
define("desktop/templates/contact", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "E1ut4xBq", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"If you have any comments and questions...\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Dont contact us at\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Chaddurkin@gmail.com\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Derekvillars@gmail.com\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "desktop/templates/contact.hbs" } });
});
define("desktop/templates/dash", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "L6SLWw3d", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Dashboard\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Categories\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"category-tile\"],null,[[\"saveGame\",\"categories\"],[\"saveGame\",[\"get\",[\"model\",\"categories\"]]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Games\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"dash-blog-tile\"],null,[[\"game\",\"category\",\"delete\"],[[\"get\",[\"model\",\"games\"]],[\"get\",[\"model\",\"categories\"]],\"delete\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "desktop/templates/dash.hbs" } });
});
define("desktop/templates/game", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "MTCyCVYV", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"article\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"-\"],[\"append\",[\"unknown\",[\"model\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Player Count: \"],[\"append\",[\"unknown\",[\"model\",\"playerCount\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row article-image\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"unknown\",[\"model\",\"image\"]],null],[\"dynamic-attr\",\"alt\",[\"unknown\",[\"model\",\"title\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"comment\",\" <div class=\\\"row\\\">\\n    <div class=\\\"col-md-5 comments\\\">\\n{{#each model.comments as |comment|}}\\n      {{comment-tile comment=comment deleteComment='deleteComment' model=model}}\\n      {{/each}}      {{new-comment-tile saveComment=\\\"saveComment\\\" model=model}}\\n    </div>\\n  </div> \"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "desktop/templates/game.hbs" } });
});
define("desktop/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Hsxz/SB7", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-8\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"index-blog-pane\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"game\"]]],null,0],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-4\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"categories\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"list-category-tile\"],null,[[\"categories\"],[[\"get\",[\"model\",\"categories\"]]]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"append\",[\"helper\",[\"index-blog-tile\"],null,[[\"blog\"],[[\"get\",[\"blog\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"blog\"]}],\"hasPartials\":false}", "meta": { "moduleName": "desktop/templates/index.hbs" } });
});
define("desktop/templates/update", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "thBR15Z9", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Editing \"],[\"append\",[\"unknown\",[\"model\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"form\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"name\"],[\"flush-element\"],[\"text\",\"Name\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"class\"],[[\"get\",[\"model\",\"name\"]],\"name form-control\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"author\"],[\"flush-element\"],[\"text\",\"Description\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"class\"],[[\"get\",[\"model\",\"description\"]],\"description form-control\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"image\"],[\"flush-element\"],[\"text\",\"Image URL\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"class\"],[[\"get\",[\"model\",\"image\"]],\"image form-control\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"date\"],[\"flush-element\"],[\"text\",\"Player Count\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"class\"],[[\"get\",[\"model\",\"playerCount\"]],\"playerCount form-control\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"update\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "desktop/templates/update.hbs" } });
});
define('desktop/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _emberfireToriiProvidersFirebase) {
  exports['default'] = _emberfireToriiProvidersFirebase['default'];
});
define('desktop/utils/select-box/class-name', ['exports', 'ember-select-box/utils/select-box/class-name'], function (exports, _emberSelectBoxUtilsSelectBoxClassName) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSelectBoxUtilsSelectBoxClassName['default'];
    }
  });
});
define('desktop/utils/select-box/scroll-into-view', ['exports', 'ember-select-box/utils/select-box/scroll-into-view'], function (exports, _emberSelectBoxUtilsSelectBoxScrollIntoView) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberSelectBoxUtilsSelectBoxScrollIntoView['default'];
    }
  });
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
  require("desktop/app")["default"].create({"name":"desktop","version":"0.0.0+a00f8e29"});
}
//# sourceMappingURL=desktop.map
