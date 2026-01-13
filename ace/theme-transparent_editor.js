ace.define("ace/theme/transparent_theme", ["require","exports","module","ace/lib/dom"], function(require, exports, module) {
    exports.isDark = true;
    exports.cssClass = "ace-transparent-theme";
    exports.cssText = `
        .ace-transparent-theme .ace_gutter {
            background: transparent;
            color: #888;
        }
        .ace-transparent-theme .ace_print-margin {
            width: 1px;
            background: transparent;
        }
        .ace-transparent-theme {
            background-color: transparent;
            color: #f8f8f2;
        }
        .ace-transparent-theme .ace_cursor {
            color: #f8f8f0;
        }
        .ace-transparent-theme .ace_marker-layer .ace_selection {
            background: rgba(179, 101, 57, 0.3);
        }
        .ace-transparent-theme.ace_multiselect .ace_selection.ace_start {
            box-shadow: 0 0 3px 0px #272822;
        }
        .ace-transparent-theme .ace_marker-layer .ace_step {
            background: rgb(102, 82, 0);
        }
        .ace-transparent-theme .ace_marker-layer .ace_bracket {
            margin: -1px 0 0 -1px;
            border: 1px solid #f8f8f0;
        }
        .ace-transparent-theme .ace_marker-layer .ace_active-line {
            background: rgba(255, 255, 255, 0.05);
        }
        .ace-transparent-theme .ace_gutter-active-line {
            background-color: rgba(255, 255, 255, 0.1);
        }
        .ace-transparent-theme .ace_marker-layer .ace_selected-word {
            border: 1px solid rgba(179, 101, 57, 0.3);
        }
        .ace-transparent-theme .ace_invisible {
            color: #404040;
        }
        .ace-transparent-theme .ace_keyword,
        .ace-transparent-theme .ace_meta,
        .ace-transparent-theme .ace_storage,
        .ace-transparent-theme .ace_storage.ace_type,
        .ace-transparent-theme .ace_support.ace_type {
            color: #ff79c6;
        }
        .ace-transparent-theme .ace_constant,
        .ace-transparent-theme .ace_constant.ace_character,
        .ace-transparent-theme .ace_constant.ace_character.ace_escape,
        .ace-transparent-theme .ace_constant.ace_other {
            color: #bd93f9;
        }
        .ace-transparent-theme .ace_invalid {
            background-color: rgba(255, 0, 0, 0.3);
        }
        .ace-transparent-theme .ace_string {
            color: #f1fa8c;
        }
        .ace-transparent-theme .ace_comment {
            color: #6272a4;
            font-style: italic;
        }
    `;
    var dom = require("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
});
