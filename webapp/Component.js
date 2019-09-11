sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/core/ComponentSupport"], function(UIComponent) {
  "use strict";

  return UIComponent.extend("mlauffer.ui5.deployer.app.test.Component", {
    metadata: {
      manifest: "json"
    },

    init: function() {
      UIComponent.prototype.init.apply(this, arguments);
    },

    destroy: function() {
      UIComponent.prototype.destroy.apply(this, arguments);
    }
  });
});
