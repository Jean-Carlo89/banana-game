/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entities/Game.ts":
/*!******************************!*\
  !*** ./src/entities/Game.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar player_1 = __webpack_require__(/*! ./player */ \"./src/entities/player.ts\");\nvar Game = /** @class */ (function () {\n    function Game(canvas) {\n        this.canvas = canvas;\n        this.context = canvas.getContext(\"2d\");\n    }\n    Game.prototype.start = function () {\n        var _this = this;\n        this.canvas.width = 350;\n        this.canvas.height = 500;\n        this.player = new player_1.default(this.canvas.width / 2, 380, this.context);\n        this.drawLine();\n        this.player.drawPlayer();\n        clearInterval(this.gameIntervalId);\n        this.gameIntervalId = window.setInterval(function () { return _this.gameLoop(); }, 1000 / 60);\n    };\n    Game.prototype.gameLoop = function () {\n        this.clearScreen();\n        this.player.drawPlayer();\n        this.drawLine();\n    };\n    Game.prototype.drawLine = function () {\n        this.context.beginPath();\n        this.context.moveTo(25, 450);\n        this.context.lineTo(325, 450);\n        this.context.strokeStyle = \"white\";\n        this.context.stroke();\n    };\n    Game.prototype.clearScreen = function () {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    };\n    Game.prototype.movePlayer = function (e) {\n        if (e.key === \"ArrowRight\" && this.player.x + 5 <= 325) {\n            this.player.moveTo(5);\n            console.log('direita');\n        }\n        if (e.key !== \"ArrowRight\" && this.player.x - 5 > 20) {\n            this.player.moveTo(-5);\n            console.log('esquerda');\n        }\n    };\n    return Game;\n}());\nexports.default = Game;\n\n\n//# sourceURL=webpack://Banana-game/./src/entities/Game.ts?");

/***/ }),

/***/ "./src/entities/player.ts":
/*!********************************!*\
  !*** ./src/entities/player.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n//let alien = require('../sprites/alien.png') \nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Player = /** @class */ (function () {\n    function Player(initialx, initialy, context) {\n        this.context = context;\n        this._x = initialx;\n        this._y = initialy;\n        //this.context.fillStyle='red'\n        this.width = 50;\n        this.height = 70;\n    }\n    Player.prototype.drawPlayer = function () {\n        this.context.strokeStyle = \"#FF3399\";\n        // console.log(typeof(alien))\n        this.context.drawImage(alien, this._x - 25, this._y, this.width, this.height);\n        this.context.strokeRect(this._x - 25, this._y, this.width, this.height);\n        // this.context.rect(this._x-25,this._y,this.width, this.height);\n    };\n    Player.prototype.moveTo = function (x) {\n        if (x > 0) {\n            alien.src = \"../src/sprites/alien.png\";\n        }\n        else {\n            alien.src = \"../src/sprites/alien-2.png\";\n        }\n        console.log('move');\n        this._x += x;\n        console.log(this.x);\n    };\n    Object.defineProperty(Player.prototype, \"x\", {\n        get: function () {\n            return this._x;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return Player;\n}());\nexports.default = Player;\nvar alien = new Image();\nalien.src = \"../src/sprites/alien.png\";\n\n\n//# sourceURL=webpack://Banana-game/./src/entities/player.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Game_1 = __webpack_require__(/*! ./entities/Game */ \"./src/entities/Game.ts\");\nvar canvas = document.querySelector(\"#canvas\");\nvar game = new Game_1.default(canvas);\ngame.start();\n//player.drawPlayer()\n// ===>Game mouse move\nwindow.addEventListener(\"keydown\", function (e) {\n    game.movePlayer(e);\n});\nwindow.addEventListener(\"click\", function (e) {\n    game.start();\n});\n// //game loop\n// const gameIntervalId = setInterval(() => gameLoop(), 1000 / 60);\n// function gameLoop(){\n//     renderGame() \n// }\n// function renderGame(){\n//         clearScreen();\n//         player.drawPlayer();\n//        // console.log('draw and clear')\n//        // enemies.forEach((enemy) => enemy.draw());\n//         //friends.forEach((friend) => friend.draw());\n// }\n// function clearScreen(){\n//     context.clearRect(0, 0, canvas.width, canvas.height);\n// }\n\n\n//# sourceURL=webpack://Banana-game/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;