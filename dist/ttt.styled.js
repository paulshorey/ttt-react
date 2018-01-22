(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(["exports", "styled-components"], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require("styled-components"));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.styledComponents);
		global.tttStyled = mod.exports;
	}
})(this, function (exports, _styledComponents) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Td = exports.Tr = exports.Table = exports.TAction = exports.TBoard = undefined;

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var _templateObject = _taggedTemplateLiteral(["\n\tdisplay:flex;\n\tflex-direction: column;\n\twidth:calc(100% - 3rem);\n\theight:calc(100% - 3rem);\n\tpadding:2rem;\n"], ["\n\tdisplay:flex;\n\tflex-direction: column;\n\twidth:calc(100% - 3rem);\n\theight:calc(100% - 3rem);\n\tpadding:2rem;\n"]),
	    _templateObject2 = _taggedTemplateLiteral(["\n\tcolor:black;\n\theight:1rem;\n\tfont-size:1rem;\n\tline-height:1rem;\n"], ["\n\tcolor:black;\n\theight:1rem;\n\tfont-size:1rem;\n\tline-height:1rem;\n"]),
	    _templateObject3 = _taggedTemplateLiteral(["\n\twidth:100%;\n\theight:100%;\n\tborder:1px solid grey;\n\tbackground: grey;\n\tborder-collapse: separate;\n\tborder-spacing: 1px;\n\tposition:relative;\n\ttop:-1rem;\n"], ["\n\twidth:100%;\n\theight:100%;\n\tborder:1px solid grey;\n\tbackground: grey;\n\tborder-collapse: separate;\n\tborder-spacing: 1px;\n\tposition:relative;\n\ttop:-1rem;\n"]),
	    _templateObject4 = _taggedTemplateLiteral(["\n\theight:33.33%;\n"], ["\n\theight:33.33%;\n"]),
	    _templateObject5 = _taggedTemplateLiteral(["\n\twidth:33.33%;\n\ttext-align:center;\n\tbackground:white;\n"], ["\n\twidth:33.33%;\n\ttext-align:center;\n\tbackground:white;\n"]);

	function _taggedTemplateLiteral(strings, raw) {
		return Object.freeze(Object.defineProperties(strings, {
			raw: {
				value: Object.freeze(raw)
			}
		}));
	}

	var TBoard = exports.TBoard = _styledComponents2.default.div(_templateObject);
	var TAction = exports.TAction = _styledComponents2.default.div(_templateObject2);

	var Table = exports.Table = _styledComponents2.default.table(_templateObject3);

	var Tr = exports.Tr = _styledComponents2.default.tr(_templateObject4);
	var Td = exports.Td = _styledComponents2.default.td(_templateObject5);
});