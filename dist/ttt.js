(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(["exports", "react", "./ttt.styled"], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require("react"), require("./ttt.styled"));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.react, global.ttt);
		global.ttt = mod.exports;
	}
})(this, function (exports, _react, _ttt) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var Styled = _interopRequireWildcard(_ttt);

	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};

			if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}

			newObj.default = obj;
			return newObj;
		}
	}

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var _slicedToArray = function () {
		function sliceIterator(arr, i) {
			var _arr = [];
			var _n = true;
			var _d = false;
			var _e = undefined;

			try {
				for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
					_arr.push(_s.value);

					if (i && _arr.length === i) break;
				}
			} catch (err) {
				_d = true;
				_e = err;
			} finally {
				try {
					if (!_n && _i["return"]) _i["return"]();
				} finally {
					if (_d) throw _e;
				}
			}

			return _arr;
		}

		return function (arr, i) {
			if (Array.isArray(arr)) {
				return arr;
			} else if (Symbol.iterator in Object(arr)) {
				return sliceIterator(arr, i);
			} else {
				throw new TypeError("Invalid attempt to destructure non-iterable instance");
			}
		};
	}();

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Td = function (_Component) {
		_inherits(Td, _Component);

		function Td() {
			_classCallCheck(this, Td);

			return _possibleConstructorReturn(this, (Td.__proto__ || Object.getPrototypeOf(Td)).apply(this, arguments));
		}

		_createClass(Td, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					Styled.Td,
					{ onClick: this.props.onClick },
					_react2.default.createElement(
						"span",
						null,
						this.props.value
					)
				);
			}
		}]);

		return Td;
	}(_react.Component);

	var Tr = function (_Component2) {
		_inherits(Tr, _Component2);

		function Tr() {
			_classCallCheck(this, Tr);

			return _possibleConstructorReturn(this, (Tr.__proto__ || Object.getPrototypeOf(Tr)).apply(this, arguments));
		}

		_createClass(Tr, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					Styled.Tr,
					null,
					this.props.children
				);
			}
		}]);

		return Tr;
	}(_react.Component);

	var Table = function (_Component3) {
		_inherits(Table, _Component3);

		_createClass(Table, [{
			key: "getInitialState",
			value: function getInitialState() {
				var state = {
					playLast: null,
					playNext: {
						player: "X",
						squares: ["", "", "", "", "", "", "", "", ""]
					},
					winner: ""
				};
				state.gameHistory = [Object.assign({}, state.playNext)];
				return state;
			}
		}]);

		function Table() {
			_classCallCheck(this, Table);

			var _this3 = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this));

			_this3.resetGame = function () {
				_this3.setState(_this3.getInitialState());
			};

			_this3.handleMove = function (i) {
				// invalid - game was over
				if (!_this3.state.playNext) {
					return;
				}

				// prepare new state:
				var gameHistory = _this3.state.gameHistory;
				var playLast = gameHistory[gameHistory.length - 1];
				playLast.squares[i] = playLast.player;
				var playNext = Object.assign({}, playLast, { player: playLast.player === "X" ? "O" : "X" });
				gameHistory.push(playNext);

				// set state:
				if (calculateWinner(playNext.squares)) {

					// winner, stop!
					_this3.setState({
						playNext: undefined,
						playLast: playLast,
						gameHistory: gameHistory,
						winner: playLast.player
					});
				} else if (playNext.squares.indexOf("") === -1) {

					// no more empty squares, stop!
					_this3.setState({
						playNext: undefined,
						playLast: playLast,
						gameHistory: gameHistory
					});
				} else {

					// no winner, continue!
					_this3.setState({
						playNext: playNext,
						playLast: playLast,
						gameHistory: gameHistory
					});
				}
			};

			_this3.renderSquare = function (i) {
				return _react2.default.createElement(Td, {
					value: _this3.state.playLast ? _this3.state.playLast.squares[i] : "",
					onClick: function onClick() {
						_this3.handleMove(i);
					}
				});
			};

			_this3.renderButton = function () {

				// winner :)
				if (_this3.state.winner) {
					return _react2.default.createElement(
						"div",
						null,
						_this3.state.playLast.player,
						" wins! ",
						_react2.default.createElement(
							"button",
							{ onClick: _this3.resetGame },
							"Play again \xBB"
						)
					);

					// it's a tie :|
				} else if (_this3.state.playLast && !_this3.state.playNext) {
					return _react2.default.createElement(
						"div",
						null,
						"It's a tie -_- ",
						_react2.default.createElement(
							"button",
							{ onClick: _this3.resetGame },
							"Play again \xBB"
						)
					);

					// next move
				} else if (_this3.state.playLast && _this3.state.playNext) {
					return _react2.default.createElement(
						"div",
						null,
						_this3.state.playNext.player,
						" player go now!"
					);

					// intro
				} else {
					return _react2.default.createElement(
						"div",
						null,
						"Tic Tac Toe... ",
						_this3.state.playNext.player,
						" player goes first."
					);
				}
			};

			_this3.state = _this3.getInitialState();
			return _this3;
		}

		_createClass(Table, [{
			key: "render",
			value: function render() {
				console.log('this.state', JSON.parse(JSON.stringify(this.state)));

				return [_react2.default.createElement(
					Styled.Table,
					{ key: "Table",
						style: {
							height: this.props.cssWidthHeight,
							width: this.props.cssWidthHeight
						}
					},
					_react2.default.createElement(
						"tbody",
						null,
						_react2.default.createElement(
							Tr,
							null,
							this.renderSquare(0),
							this.renderSquare(1),
							this.renderSquare(2)
						),
						_react2.default.createElement(
							Tr,
							null,
							this.renderSquare(3),
							this.renderSquare(4),
							this.renderSquare(5)
						),
						_react2.default.createElement(
							Tr,
							null,
							this.renderSquare(6),
							this.renderSquare(7),
							this.renderSquare(8)
						)
					)
				), _react2.default.createElement(
					Styled.TAction,
					{ key: "TAction" },
					this.renderButton()
				)];
			}
		}]);

		return Table;
	}(_react.Component);

	var TBoard = function (_Component4) {
		_inherits(TBoard, _Component4);

		function TBoard() {
			_classCallCheck(this, TBoard);

			var _this4 = _possibleConstructorReturn(this, (TBoard.__proto__ || Object.getPrototypeOf(TBoard)).call(this));

			_this4.state = {
				cssWidthHeight: "100%"
			};
			return _this4;
		}

		_createClass(TBoard, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				this.setState({
					cssWidthHeight: Math.min(this.TBoard.offsetHeight, this.TBoard.offsetWidth) + "px"
				});
			}
		}, {
			key: "render",
			value: function render() {
				var _this5 = this;

				return _react2.default.createElement(
					Styled.TBoard,
					{
						innerRef: function innerRef(element) {
							_this5.TBoard = element;
						}
					},
					_react2.default.createElement(Table, { cssWidthHeight: this.state.cssWidthHeight })
				);
			}
		}]);

		return TBoard;
	}(_react.Component);

	exports.default = TBoard;


	/*
 	HELPER FUNCTIONS
 */
	function calculateWinner(squares) {
		var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
		for (var i = 0; i < lines.length; i++) {
			var _lines$i = _slicedToArray(lines[i], 3),
			    a = _lines$i[0],
			    b = _lines$i[1],
			    c = _lines$i[2];

			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}
		return null;
	}
});