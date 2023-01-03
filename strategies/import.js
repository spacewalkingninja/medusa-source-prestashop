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
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _medusa = require("@medusajs/medusa");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(value) { var ret = this.s["return"]; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, "throw": function _throw(value) { var thr = this.s["return"]; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }
var ImportStrategy = /*#__PURE__*/function (_AbstractBatchJobStra) {
  (0, _inherits2["default"])(ImportStrategy, _AbstractBatchJobStra);
  var _super = _createSuper(ImportStrategy);
  function ImportStrategy(container) {
    var _this;
    (0, _classCallCheck2["default"])(this, ImportStrategy);
    _this = _super.call(this, container);
    _this.manager_ = container.manager;
    _this.storeService_ = container.storeService;
    _this.prestashopClientService_ = container.prestashopClientService;
    _this.prestashopCategoryService_ = container.prestashopCategoryService;
    _this.prestashopProductService_ = container.prestashopProductService;
    _this.productVariantService = container.productVariantService;
    _this.logger_ = container.logger;
    _this.batchJobService_ = container.batchJobService;
    return _this;
  }
  (0, _createClass2["default"])(ImportStrategy, [{
    key: "preProcessBatchJob",
    value: function () {
      var _preProcessBatchJob = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(batchJobId) {
        var _this2 = this;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.atomicPhase_( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(transactionManager) {
                    var batchJob;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _this2.batchJobService_.withTransaction(transactionManager).retrieve(batchJobId);
                          case 2:
                            batchJob = _context.sent;
                            _context.next = 5;
                            return _this2.batchJobService_.withTransaction(transactionManager).update(batchJob, {
                              result: {
                                progress: 0
                              }
                            });
                          case 5:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));
                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }());
              case 2:
                return _context2.abrupt("return", _context2.sent);
              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function preProcessBatchJob(_x) {
        return _preProcessBatchJob.apply(this, arguments);
      }
      return preProcessBatchJob;
    }()
  }, {
    key: "processJob",
    value: function () {
      var _processJob = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(batchJobId) {
        var _this3 = this;
        var batchJob, store, lastUpdatedTime, categories, getCategories, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, category, products, _iterator2, _step2, product, productData;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.batchJobService_.retrieve(batchJobId);
              case 2:
                batchJob = _context4.sent;
                _context4.prev = 3;
                _context4.next = 6;
                return this.storeService_.retrieve();
              case 6:
                store = _context4.sent;
                _context4.next = 13;
                break;
              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](3);
                this.logger_.info('Skipping Prestashop import since no store is created in Medusa.');
                return _context4.abrupt("return");
              case 13:
                this.logger_.info('Importing categories from Prestashop...');
                _context4.next = 16;
                return this.getBuildTime(store);
              case 16:
                lastUpdatedTime = _context4.sent;
                getCategories = /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return _this3.prestashopClientService_.retrieveCategories(lastUpdatedTime);
                          case 2:
                            categories = _context3.sent;
                          case 3:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));
                  return function getCategories() {
                    return _ref2.apply(this, arguments);
                  };
                }();
                _context4.next = 20;
                return getCategories();
              case 20:
                // await categories.data.categories.map(async (category) => {
                _iteratorAbruptCompletion = false;
                _didIteratorError = false;
                _context4.prev = 22;
                _iterator = _asyncIterator(categories.data.categories);
              case 24:
                _context4.next = 26;
                return _iterator.next();
              case 26:
                if (!(_iteratorAbruptCompletion = !(_step = _context4.sent).done)) {
                  _context4.next = 37;
                  break;
                }
                category = _step.value;
                _context4.t1 = this.prestashopCategoryService_;
                _context4.next = 31;
                return this.prestashopClientService_.retrieveCategory(category.id);
              case 31:
                _context4.t2 = _context4.sent;
                _context4.next = 34;
                return _context4.t1.create.call(_context4.t1, _context4.t2);
              case 34:
                _iteratorAbruptCompletion = false;
                _context4.next = 24;
                break;
              case 37:
                _context4.next = 43;
                break;
              case 39:
                _context4.prev = 39;
                _context4.t3 = _context4["catch"](22);
                _didIteratorError = true;
                _iteratorError = _context4.t3;
              case 43:
                _context4.prev = 43;
                _context4.prev = 44;
                if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
                  _context4.next = 48;
                  break;
                }
                _context4.next = 48;
                return _iterator["return"]();
              case 48:
                _context4.prev = 48;
                if (!_didIteratorError) {
                  _context4.next = 51;
                  break;
                }
                throw _iteratorError;
              case 51:
                return _context4.finish(48);
              case 52:
                return _context4.finish(43);
              case 53:
                if (categories.data.categories.length) {
                  this.logger_.info("".concat(categories.data.categories.length, " categories have been imported or updated successfully."));
                } else {
                  this.logger_.info("No categories have been imported or updated.");
                }
                this.logger_.info('Importing products from Prestashop...');

                //retrieve configurable products
                _context4.next = 57;
                return this.prestashopClientService_.retrieveProducts();
              case 57:
                products = _context4.sent;
                // const optionsId = await this.prestashopClientService_.retrieveOptionsDefaults()
                // console.log(optionsId.data)
                // const options = []
                // for await (const id of optionsId.data.product_options) {
                //   console.log(id.id)
                //   let option = await this.prestashopClientService_.retrieveOption(id.id)
                //   options.push(option.data.product_option)
                // }
                // console.log("product has combinations")
                // console.log(options)
                _iterator2 = _createForOfIteratorHelper(products.data.products);
                _context4.prev = 59;
                _iterator2.s();
              case 61:
                if ((_step2 = _iterator2.n()).done) {
                  _context4.next = 73;
                  break;
                }
                product = _step2.value;
                _context4.next = 65;
                return this.prestashopClientService_.retrieveProduct(product.id);
              case 65:
                productData = _context4.sent;
                _context4.next = 68;
                return this.prestashopClientService_.retrieveImages(product.id);
              case 68:
                productData.data.product.images = _context4.sent;
                _context4.next = 71;
                return this.prestashopProductService_.create(productData);
              case 71:
                _context4.next = 61;
                break;
              case 73:
                _context4.next = 78;
                break;
              case 75:
                _context4.prev = 75;
                _context4.t4 = _context4["catch"](59);
                _iterator2.e(_context4.t4);
              case 78:
                _context4.prev = 78;
                _iterator2.f();
                return _context4.finish(78);
              case 81:
                // Not necessary because there is no way to request Simple Products or Products with combinations. Just above retrieve all
                // the products and if there are combinations they will be created/updated.

                // //retrieve simple products to insert those that don't belong to a configurable product
                // const simpleProducts = await this.magentoClientService_.retrieveProducts(MagentoProductTypes.SIMPLE, lastUpdatedTime);

                // for (let product of simpleProducts) {
                //   await this.magentoProductService_
                //     .create(product);
                // }

                if (products.data.products.length) {
                  this.logger_.info("".concat(products.data.products.length, " products have been imported or updated successfully."));
                } else {
                  this.logger_.info("No products have been imported or updated.");
                }
                _context4.next = 84;
                return this.updateBuildTime(store);
              case 84:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 9], [22, 39, 43, 53], [44,, 48, 52], [59, 75, 78, 81]]);
      }));
      function processJob(_x3) {
        return _processJob.apply(this, arguments);
      }
      return processJob;
    }()
  }, {
    key: "getBuildTime",
    value: function () {
      var _getBuildTime = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(store) {
        var _store$metadata;
        var buildtime;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                buildtime = null;
                _context5.prev = 1;
                if (store) {
                  _context5.next = 6;
                  break;
                }
                _context5.next = 5;
                return this.storeService_.retrieve();
              case 5:
                store = _context5.sent;
              case 6:
                _context5.next = 11;
                break;
              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](1);
                return _context5.abrupt("return", null);
              case 11:
                if ((_store$metadata = store.metadata) !== null && _store$metadata !== void 0 && _store$metadata.source_prestashop_bt) {
                  buildtime = store.metadata.source_prestashop_bt;
                }
                if (buildtime) {
                  _context5.next = 14;
                  break;
                }
                return _context5.abrupt("return", null);
              case 14:
                return _context5.abrupt("return", buildtime);
              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 8]]);
      }));
      function getBuildTime(_x4) {
        return _getBuildTime.apply(this, arguments);
      }
      return getBuildTime;
    }()
  }, {
    key: "updateBuildTime",
    value: function () {
      var _updateBuildTime = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(store) {
        var payload;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                if (store) {
                  _context6.next = 5;
                  break;
                }
                _context6.next = 4;
                return this.storeService_.retrieve();
              case 4:
                store = _context6.sent;
              case 5:
                _context6.next = 10;
                break;
              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                return _context6.abrupt("return", null);
              case 10:
                payload = {
                  metadata: {
                    source_prestashop_bt: new Date().toISOString()
                  }
                };
                _context6.next = 13;
                return this.storeService_.update(payload);
              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 7]]);
      }));
      function updateBuildTime(_x5) {
        return _updateBuildTime.apply(this, arguments);
      }
      return updateBuildTime;
    }()
  }, {
    key: "shouldRetryOnProcessingError",
    value: function () {
      var _shouldRetryOnProcessingError = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(batchJob, err) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", true);
              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));
      function shouldRetryOnProcessingError(_x6, _x7) {
        return _shouldRetryOnProcessingError.apply(this, arguments);
      }
      return shouldRetryOnProcessingError;
    }()
  }, {
    key: "buildTemplate",
    value: function buildTemplate() {
      throw new Error('Method not implemented.');
    }
  }]);
  return ImportStrategy;
}(_medusa.AbstractBatchJobStrategy);
(0, _defineProperty2["default"])(ImportStrategy, "identifier", 'import-prestashop-strategy');
(0, _defineProperty2["default"])(ImportStrategy, "batchType", 'import-prestashop');
var _default = ImportStrategy;
exports["default"] = _default;