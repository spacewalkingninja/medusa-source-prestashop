"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _medusa = require("@medusajs/medusa");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var PrestashopCategoryService = /*#__PURE__*/function (_TransactionBaseServi) {
  (0, _inherits2["default"])(PrestashopCategoryService, _TransactionBaseServi);
  var _super = _createSuper(PrestashopCategoryService);
  function PrestashopCategoryService(container, options) {
    var _this;
    (0, _classCallCheck2["default"])(this, PrestashopCategoryService);
    _this = _super.call(this, container);
    _this.manager_ = container.manager;
    _this.prestashopClientService_ = container.prestashopClientService;
    _this.productCollectionService_ = container.productCollectionService;
    return _this;
  }
  (0, _createClass2["default"])(PrestashopCategoryService, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(category) {
        var _this2 = this;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.atomicPhase_( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(manager) {
                    var existingCollection, collectionData;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _this2.productCollectionService_.withTransaction(manager).retrieveByHandle(_this2.getHandle(category.data.category))["catch"](function () {
                              return undefined;
                            });
                          case 2:
                            existingCollection = _context.sent;
                            if (!existingCollection) {
                              _context.next = 5;
                              break;
                            }
                            return _context.abrupt("return", _this2.update(category, existingCollection));
                          case 5:
                            //create collection
                            collectionData = _this2.normalizeCollection(category.data.category);
                            _context.next = 8;
                            return _this2.productCollectionService_.withTransaction(manager).create(collectionData);
                          case 8:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));
                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }()));
              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function create(_x) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(category, existingCollection) {
        var _this3 = this;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.atomicPhase_( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(manager) {
                    var collectionData, update, _i, _Object$keys, key;
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            collectionData = _this3.normalizeCollection(category.data.category);
                            update = {};
                            for (_i = 0, _Object$keys = Object.keys(collectionData); _i < _Object$keys.length; _i++) {
                              key = _Object$keys[_i];
                              if (collectionData[key] !== existingCollection[key]) {
                                update[key] = collectionData[key];
                              }
                            }
                            if (!Object.values(update).length) {
                              _context3.next = 6;
                              break;
                            }
                            _context3.next = 6;
                            return _this3.productCollectionService_.withTransaction(manager).update(existingCollection.id, update);
                          case 6:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));
                  return function (_x5) {
                    return _ref2.apply(this, arguments);
                  };
                }()));
              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "normalizeCollection",
    value: function normalizeCollection(category) {
      return {
        title: category.name,
        handle: category.link_rewrite,
        metadata: {
          prestashop_id: category.id
        }
      };
    }
  }, {
    key: "getHandle",
    value: function getHandle(category) {
      return category.link_rewrite || '';
    }
  }]);
  return PrestashopCategoryService;
}(_medusa.TransactionBaseService);
var _default = PrestashopCategoryService;
exports["default"] = _default;