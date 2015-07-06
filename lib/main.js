var ui = require("sdk/ui");
var tabs = require("sdk/tabs");

var action_button = ui.ActionButton({
  id: "my-button",
  label: "Action Button!",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: function(state) {
    tabs.open({
      url: "./converter.html",
      onOpen: function(tab) {
        tab.attach({
          contentScriptFile: [],
          onMessage: function() {}
        });
      }
    });
  }
});

