"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _medusa = require("@medusajs/medusa");
var _fs = _interopRequireDefault(require("fs"));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(value) { var ret = this.s["return"]; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, "throw": function _throw(value) { var thr = this.s["return"]; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }
var http = require("https");
var axios = require("axios");
var PrestashopProductService = /*#__PURE__*/function (_TransactionBaseServi) {
  (0, _inherits2["default"])(PrestashopProductService, _TransactionBaseServi);
  var _super = _createSuper(PrestashopProductService);
  // downloadFile = (url) =>
  //   axios({ url, responseType: "arraybuffer" }).then((res) => res.data);

  function PrestashopProductService(container, options) {
    var _this;
    (0, _classCallCheck2["default"])(this, PrestashopProductService);
    _this = _super.call(this, container);
    _this.manager_ = container.manager;
    _this.options_ = options;
    _this.productService_ = container.productService;
    _this.prestashopClientService_ = container.prestashopClientService;
    _this.currencyService_ = container.currencyService;
    _this.fileService_ = container.fileService;
    _this.productVariantService_ = container.productVariantService;
    _this.productCollectionService_ = container.productCollectionService;
    _this.shippingProfileService_ = container.shippingProfileService;
    _this.storeServices_ = container.storeService;
    _this.currencies = [];
    _this.defaultShippingProfileId = "";
    return _this;
  }
  (0, _createClass2["default"])(PrestashopProductService, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(productData) {
        var _this2 = this;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this.atomicPhase_( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(manager) {
                    var _productData$data$pro, _productData$data$pro2;
                    var existingProduct, existingVariant, normalizedProduct, stockValue, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, productImages, product, _iteratorAbruptCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _item, _iteratorAbruptCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _iteratorAbruptCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, variantData, productImagesFileService, _iteratorAbruptCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, element, res, response;
                    return _regenerator["default"].wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return _this2.productService_.withTransaction(manager).retrieveByExternalId(productData.data.product.id, {
                              relations: ["variants", "options", "images"]
                            })["catch"](function () {
                              return undefined;
                            });
                          case 2:
                            existingProduct = _context4.sent;
                            if (!existingProduct) {
                              _context4.next = 7;
                              break;
                            }
                            return _context4.abrupt("return", _this2.update(productData, existingProduct));
                          case 7:
                            _context4.next = 9;
                            return _this2.productVariantService_.withTransaction(manager).retrieveBySKU(productData.data.product.reference)["catch"](function () {
                              return undefined;
                            });
                          case 9:
                            existingVariant = _context4.sent;
                            if (!existingVariant) {
                              _context4.next = 12;
                              break;
                            }
                            return _context4.abrupt("return", _this2.updateVariant(productData, existingVariant));
                          case 12:
                            _context4.next = 14;
                            return _this2.getCurrencies();
                          case 14:
                            normalizedProduct = _this2.normalizeProduct(productData);
                            _context4.next = 17;
                            return _this2.getDefaultShippingProfile();
                          case 17:
                            normalizedProduct.profile_id = _context4.sent;
                            _context4.prev = 18;
                            if (!productData.data.product.associations.categories) {
                              _context4.next = 22;
                              break;
                            }
                            _context4.next = 22;
                            return _this2.setCategory(productData.data.product.associations.categories, normalizedProduct, manager);
                          case 22:
                            _context4.next = 27;
                            break;
                          case 24:
                            _context4.prev = 24;
                            _context4.t0 = _context4["catch"](18);
                            console.log(_context4.t0);
                          case 27:
                            _context4.next = 29;
                            return _this2.prestashopClientService_.retrieveStockValues(productData.data.product.associations.stock_availables[0].id);
                          case 29:
                            stockValue = _context4.sent;
                            if (!(((_productData$data$pro = productData.data.product.associations.product_option_values) === null || _productData$data$pro === void 0 ? void 0 : _productData$data$pro.length) >= 1)) {
                              _context4.next = 59;
                              break;
                            }
                            _iteratorAbruptCompletion = false;
                            _didIteratorError = false;
                            _context4.prev = 33;
                            _iterator = _asyncIterator(productData.data.product.associations.product_option_values);
                          case 35:
                            _context4.next = 37;
                            return _iterator.next();
                          case 37:
                            if (!(_iteratorAbruptCompletion = !(_step = _context4.sent).done)) {
                              _context4.next = 43;
                              break;
                            }
                            item = _step.value;
                            return _context4.delegateYield( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
                              var optionValue, optionData;
                              return _regenerator["default"].wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      _context.next = 2;
                                      return _this2.prestashopClientService_.retrieveOptionValues(item.id);
                                    case 2:
                                      optionValue = _context.sent;
                                      _context.next = 5;
                                      return _this2.prestashopClientService_.retrieveOption(optionValue.data.product_option_value.id_attribute_group);
                                    case 5:
                                      optionData = _context.sent;
                                      if (!normalizedProduct.options.some(function (ele) {
                                        return ele.metadata.prestashop_id == optionData.data.product_option.id;
                                      })) {
                                        normalizedProduct.options.push(_this2.normalizeOption(optionData.data.product_option));
                                      }
                                    case 7:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee);
                            })(), "t1", 40);
                          case 40:
                            _iteratorAbruptCompletion = false;
                            _context4.next = 35;
                            break;
                          case 43:
                            _context4.next = 49;
                            break;
                          case 45:
                            _context4.prev = 45;
                            _context4.t2 = _context4["catch"](33);
                            _didIteratorError = true;
                            _iteratorError = _context4.t2;
                          case 49:
                            _context4.prev = 49;
                            _context4.prev = 50;
                            if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
                              _context4.next = 54;
                              break;
                            }
                            _context4.next = 54;
                            return _iterator["return"]();
                          case 54:
                            _context4.prev = 54;
                            if (!_didIteratorError) {
                              _context4.next = 57;
                              break;
                            }
                            throw _iteratorError;
                          case 57:
                            return _context4.finish(54);
                          case 58:
                            return _context4.finish(49);
                          case 59:
                            productImages = normalizedProduct.images;
                            delete normalizedProduct.images;

                            //create product
                            _context4.prev = 61;
                            _context4.next = 64;
                            return _this2.productService_.withTransaction(manager).create(normalizedProduct);
                          case 64:
                            product = _context4.sent;
                            _context4.next = 70;
                            break;
                          case 67:
                            _context4.prev = 67;
                            _context4.t3 = _context4["catch"](61);
                            console.log(_context4.t3);
                          case 70:
                            if (!(((_productData$data$pro2 = productData.data.product.associations.combinations) === null || _productData$data$pro2 === void 0 ? void 0 : _productData$data$pro2.length) >= 1)) {
                              _context4.next = 105;
                              break;
                            }
                            _context4.next = 73;
                            return _this2.productService_.withTransaction(manager).retrieve(product.id, {
                              relations: ["options"]
                            });
                          case 73:
                            product = _context4.sent;
                            //attached option id to normalized options
                            normalizedProduct.options = normalizedProduct.options.map(function (option) {
                              var productOption = product.options.find(function (o) {
                                return o.title === option.title;
                              });
                              return _objectSpread(_objectSpread({}, option), {}, {
                                id: productOption.id
                              });
                            });

                            // //retrieve simple products as variants
                            // const variants = await this.magentoClientService_
                            //   .retrieveSimpleProductsAsVariants(productData.extension_attributes?.configurable_product_links);
                            _iteratorAbruptCompletion2 = false;
                            _didIteratorError2 = false;
                            _context4.prev = 77;
                            _iterator2 = _asyncIterator(productData.data.product.associations.combinations);
                          case 79:
                            _context4.next = 81;
                            return _iterator2.next();
                          case 81:
                            if (!(_iteratorAbruptCompletion2 = !(_step2 = _context4.sent).done)) {
                              _context4.next = 87;
                              break;
                            }
                            _item = _step2.value;
                            return _context4.delegateYield( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
                              var combinationValues, options, optionValueId, stockAvailabe, variantData;
                              return _regenerator["default"].wrap(function _callee3$(_context3) {
                                while (1) {
                                  switch (_context3.prev = _context3.next) {
                                    case 0:
                                      _context3.next = 2;
                                      return _this2.prestashopClientService_.retrieveCombinationValues(_item.id);
                                    case 2:
                                      combinationValues = _context3.sent;
                                      options = [];
                                      _iteratorAbruptCompletion3 = false;
                                      _didIteratorError3 = false;
                                      _context3.prev = 6;
                                      _iterator3 = _asyncIterator(combinationValues.data.combination.associations.product_option_values);
                                    case 8:
                                      _context3.next = 10;
                                      return _iterator3.next();
                                    case 10:
                                      if (!(_iteratorAbruptCompletion3 = !(_step3 = _context3.sent).done)) {
                                        _context3.next = 16;
                                        break;
                                      }
                                      optionValueId = _step3.value;
                                      return _context3.delegateYield( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
                                        var optionValues;
                                        return _regenerator["default"].wrap(function _callee2$(_context2) {
                                          while (1) {
                                            switch (_context2.prev = _context2.next) {
                                              case 0:
                                                _context2.next = 2;
                                                return _this2.prestashopClientService_.retrieveOptionValues(optionValueId.id);
                                              case 2:
                                                optionValues = _context2.sent;
                                                normalizedProduct.options.map(function (element) {
                                                  if (element.metadata.prestashop_id == optionValues.data.product_option_value.id_attribute_group) {
                                                    var option = {
                                                      option_id: element.id,
                                                      value: optionValues.data.product_option_value.name,
                                                      metadata: {
                                                        prestashop_id: optionValues.data.product_option_value.id
                                                      }
                                                    };
                                                    options.push(option);
                                                  }
                                                });
                                              case 4:
                                              case "end":
                                                return _context2.stop();
                                            }
                                          }
                                        }, _callee2);
                                      })(), "t0", 13);
                                    case 13:
                                      _iteratorAbruptCompletion3 = false;
                                      _context3.next = 8;
                                      break;
                                    case 16:
                                      _context3.next = 22;
                                      break;
                                    case 18:
                                      _context3.prev = 18;
                                      _context3.t1 = _context3["catch"](6);
                                      _didIteratorError3 = true;
                                      _iteratorError3 = _context3.t1;
                                    case 22:
                                      _context3.prev = 22;
                                      _context3.prev = 23;
                                      if (!(_iteratorAbruptCompletion3 && _iterator3["return"] != null)) {
                                        _context3.next = 27;
                                        break;
                                      }
                                      _context3.next = 27;
                                      return _iterator3["return"]();
                                    case 27:
                                      _context3.prev = 27;
                                      if (!_didIteratorError3) {
                                        _context3.next = 30;
                                        break;
                                      }
                                      throw _iteratorError3;
                                    case 30:
                                      return _context3.finish(27);
                                    case 31:
                                      return _context3.finish(22);
                                    case 32:
                                      _iteratorAbruptCompletion4 = false;
                                      _didIteratorError4 = false;
                                      _context3.prev = 34;
                                      _iterator4 = _asyncIterator(productData.data.product.associations.stock_availables);
                                    case 36:
                                      _context3.next = 38;
                                      return _iterator4.next();
                                    case 38:
                                      if (!(_iteratorAbruptCompletion4 = !(_step4 = _context3.sent).done)) {
                                        _context3.next = 47;
                                        break;
                                      }
                                      stockAvailabe = _step4.value;
                                      if (!(stockAvailabe.id_product_attribute == _item.id)) {
                                        _context3.next = 44;
                                        break;
                                      }
                                      _context3.next = 43;
                                      return _this2.prestashopClientService_.retrieveStockValues(stockAvailabe.id);
                                    case 43:
                                      stockValue = _context3.sent;
                                    case 44:
                                      _iteratorAbruptCompletion4 = false;
                                      _context3.next = 36;
                                      break;
                                    case 47:
                                      _context3.next = 53;
                                      break;
                                    case 49:
                                      _context3.prev = 49;
                                      _context3.t2 = _context3["catch"](34);
                                      _didIteratorError4 = true;
                                      _iteratorError4 = _context3.t2;
                                    case 53:
                                      _context3.prev = 53;
                                      _context3.prev = 54;
                                      if (!(_iteratorAbruptCompletion4 && _iterator4["return"] != null)) {
                                        _context3.next = 58;
                                        break;
                                      }
                                      _context3.next = 58;
                                      return _iterator4["return"]();
                                    case 58:
                                      _context3.prev = 58;
                                      if (!_didIteratorError4) {
                                        _context3.next = 61;
                                        break;
                                      }
                                      throw _iteratorError4;
                                    case 61:
                                      return _context3.finish(58);
                                    case 62:
                                      return _context3.finish(53);
                                    case 63:
                                      if (stockValue.data.stock_available.out_of_stock == 0) {
                                        combinationValues.data.combination.allow_backorder = false;
                                      } else {
                                        combinationValues.data.combination.allow_backorder = true;
                                      }
                                      combinationValues.data.combination.inventory_quantity = parseInt(stockValue.data.stock_available.quantity);
                                      _context3.next = 67;
                                      return _this2.normalizeVariant(combinationValues.data.combination, options);
                                    case 67:
                                      variantData = _context3.sent;
                                      _context3.prev = 68;
                                      _context3.next = 71;
                                      return _this2.productVariantService_.withTransaction(manager).create(product.id, variantData);
                                    case 71:
                                      _context3.next = 76;
                                      break;
                                    case 73:
                                      _context3.prev = 73;
                                      _context3.t3 = _context3["catch"](68);
                                      console.log(_context3.t3);
                                    case 76:
                                    case "end":
                                      return _context3.stop();
                                  }
                                }
                              }, _callee3, null, [[6, 18, 22, 32], [23,, 27, 31], [34, 49, 53, 63], [54,, 58, 62], [68, 73]]);
                            })(), "t4", 84);
                          case 84:
                            _iteratorAbruptCompletion2 = false;
                            _context4.next = 79;
                            break;
                          case 87:
                            _context4.next = 93;
                            break;
                          case 89:
                            _context4.prev = 89;
                            _context4.t5 = _context4["catch"](77);
                            _didIteratorError2 = true;
                            _iteratorError2 = _context4.t5;
                          case 93:
                            _context4.prev = 93;
                            _context4.prev = 94;
                            if (!(_iteratorAbruptCompletion2 && _iterator2["return"] != null)) {
                              _context4.next = 98;
                              break;
                            }
                            _context4.next = 98;
                            return _iterator2["return"]();
                          case 98:
                            _context4.prev = 98;
                            if (!_didIteratorError2) {
                              _context4.next = 101;
                              break;
                            }
                            throw _iteratorError2;
                          case 101:
                            return _context4.finish(98);
                          case 102:
                            return _context4.finish(93);
                          case 103:
                            _context4.next = 117;
                            break;
                          case 105:
                            //insert a default variant for a simple product
                            if (stockValue.data.stock_available.out_of_stock == 0) {
                              productData.data.product.allow_backorder = false;
                            } else {
                              productData.data.product.allow_backorder = true;
                            }
                            productData.data.product.inventory_quantity = parseInt(stockValue.data.stock_available.quantity);
                            variantData = _this2.normalizeVariant(productData.data.product, []);
                            variantData.title = "Default";
                            _context4.prev = 109;
                            _context4.next = 112;
                            return _this2.productVariantService_.withTransaction(manager).create(product.id, variantData);
                          case 112:
                            _context4.next = 117;
                            break;
                          case 114:
                            _context4.prev = 114;
                            _context4.t6 = _context4["catch"](109);
                            console.log(_context4.t6);
                          case 117:
                            productImages = (0, _toConsumableArray2["default"])(new Set(productImages));
                            productImagesFileService = [];
                            if (!(productData.data.product.images != undefined)) {
                              _context4.next = 158;
                              break;
                            }
                            _iteratorAbruptCompletion5 = false;
                            _didIteratorError5 = false;
                            _context4.prev = 122;
                            _iterator5 = _asyncIterator(productImages);
                          case 124:
                            _context4.next = 126;
                            return _iterator5.next();
                          case 126:
                            if (!(_iteratorAbruptCompletion5 = !(_step5 = _context4.sent).done)) {
                              _context4.next = 140;
                              break;
                            }
                            element = _step5.value;
                            _context4.next = 130;
                            return _this2.prestashopClientService_.downloadFile(element);
                          case 130:
                            res = _context4.sent;
                            _context4.next = 133;
                            return _fs["default"].writeFileSync("./uploads/tempImage.jpg", res);
                          case 133:
                            _context4.next = 135;
                            return _this2.fileService_.upload({
                              fieldname: "files",
                              originalname: productData.data.product.link_rewrite + ".jpeg",
                              encoding: "7bit",
                              mimetype: "image/jpeg",
                              destination: "uploads/",
                              filename: productData.data.product.link_rewrite + ".jpeg",
                              path: "./uploads/tempImage.jpg",
                              size: 52370
                            });
                          case 135:
                            response = _context4.sent;
                            productImagesFileService.push(response.url);
                          case 137:
                            _iteratorAbruptCompletion5 = false;
                            _context4.next = 124;
                            break;
                          case 140:
                            _context4.next = 146;
                            break;
                          case 142:
                            _context4.prev = 142;
                            _context4.t7 = _context4["catch"](122);
                            _didIteratorError5 = true;
                            _iteratorError5 = _context4.t7;
                          case 146:
                            _context4.prev = 146;
                            _context4.prev = 147;
                            if (!(_iteratorAbruptCompletion5 && _iterator5["return"] != null)) {
                              _context4.next = 151;
                              break;
                            }
                            _context4.next = 151;
                            return _iterator5["return"]();
                          case 151:
                            _context4.prev = 151;
                            if (!_didIteratorError5) {
                              _context4.next = 154;
                              break;
                            }
                            throw _iteratorError5;
                          case 154:
                            return _context4.finish(151);
                          case 155:
                            return _context4.finish(146);
                          case 156:
                            _context4.next = 158;
                            return _this2.productService_.withTransaction(manager).update(product.id, {
                              images: productImagesFileService
                            });
                          case 158:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, null, [[18, 24], [33, 45, 49, 59], [50,, 54, 58], [61, 67], [77, 89, 93, 103], [94,, 98, 102], [109, 114], [122, 142, 146, 156], [147,, 151, 155]]);
                  }));
                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }()));
              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function create(_x) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(productData, existingProduct) {
        var _this3 = this;
        return _regenerator["default"].wrap(function _callee15$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                return _context16.abrupt("return", this.atomicPhase_( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(manager) {
                    var _productData$data$pro3, _productData$data$pro4;
                    var optionsPrestashop, optionsValuePrestashop, normalizedProduct, productOptions, stockValue, _iteratorAbruptCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, item, optionsToDelete, productImages, _iteratorAbruptCompletion7, _didIteratorError7, _iteratorError7, _loop, _iterator7, _step7, _iteratorAbruptCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, _iteratorAbruptCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, _iteratorAbruptCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, _iteratorAbruptCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, variantData, productImagesFileService, _iteratorAbruptCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, element, res, response, update, _i, _Object$keys, key;
                    return _regenerator["default"].wrap(function _callee14$(_context15) {
                      while (1) {
                        switch (_context15.prev = _context15.next) {
                          case 0:
                            //retrieve store's currencies
                            optionsPrestashop = [];
                            optionsValuePrestashop = [];
                            _context15.next = 4;
                            return _this3.getCurrencies();
                          case 4:
                            normalizedProduct = _this3.normalizeProduct(productData);
                            productOptions = existingProduct.options;
                            if (!productData.data.product.associations.categories) {
                              _context15.next = 9;
                              break;
                            }
                            _context15.next = 9;
                            return _this3.setCategory(productData.data.product.associations.categories, normalizedProduct, manager);
                          case 9:
                            _context15.next = 11;
                            return _this3.prestashopClientService_.retrieveStockValues(productData.data.product.associations.stock_availables[0].id);
                          case 11:
                            stockValue = _context15.sent;
                            _context15.next = 14;
                            return _this3.productService_.withTransaction(manager).retrieveByExternalId(productData.data.product.id, {
                              relations: ["options", "options.values"]
                            });
                          case 14:
                            productOptions = _context15.sent.options;
                            if (!(((_productData$data$pro3 = productData.data.product.associations.product_option_values) === null || _productData$data$pro3 === void 0 ? void 0 : _productData$data$pro3.length) >= 1)) {
                              _context15.next = 49;
                              break;
                            }
                            // retrieve options
                            _iteratorAbruptCompletion6 = false;
                            _didIteratorError6 = false;
                            _context15.prev = 18;
                            _iterator6 = _asyncIterator(productData.data.product.associations.product_option_values);
                          case 20:
                            _context15.next = 22;
                            return _iterator6.next();
                          case 22:
                            if (!(_iteratorAbruptCompletion6 = !(_step6 = _context15.sent).done)) {
                              _context15.next = 28;
                              break;
                            }
                            item = _step6.value;
                            return _context15.delegateYield( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
                              var optionValue, existingOption, option, normalizedOption;
                              return _regenerator["default"].wrap(function _callee6$(_context6) {
                                while (1) {
                                  switch (_context6.prev = _context6.next) {
                                    case 0:
                                      _context6.next = 2;
                                      return _this3.prestashopClientService_.retrieveOptionValues(item.id);
                                    case 2:
                                      optionValue = _context6.sent;
                                      optionsValuePrestashop.push(optionValue.data);
                                      existingOption = productOptions.find(function (o) {
                                        return o.metadata.prestashop_id == optionValue.data.product_option_value.id_attribute_group;
                                      });
                                      _context6.next = 7;
                                      return _this3.prestashopClientService_.retrieveOption(optionValue.data.product_option_value.id_attribute_group);
                                    case 7:
                                      option = _context6.sent;
                                      optionsPrestashop.push(option.data);
                                      if (existingOption) {
                                        _context6.next = 12;
                                        break;
                                      }
                                      _context6.next = 12;
                                      return _this3.productService_.withTransaction(manager).addOption(existingProduct.id, option.data.product_option.name);
                                    case 12:
                                      //update option and its values
                                      normalizedOption = _this3.normalizeOption(option.data.product_option);
                                      delete normalizedOption.values;
                                      _context6.next = 16;
                                      return _this3.productService_.withTransaction(manager).updateOption(existingProduct.id, existingOption.id, normalizedOption);
                                    case 16:
                                    case "end":
                                      return _context6.stop();
                                  }
                                }
                              }, _callee6);
                            })(), "t0", 25);
                          case 25:
                            _iteratorAbruptCompletion6 = false;
                            _context15.next = 20;
                            break;
                          case 28:
                            _context15.next = 34;
                            break;
                          case 30:
                            _context15.prev = 30;
                            _context15.t1 = _context15["catch"](18);
                            _didIteratorError6 = true;
                            _iteratorError6 = _context15.t1;
                          case 34:
                            _context15.prev = 34;
                            _context15.prev = 35;
                            if (!(_iteratorAbruptCompletion6 && _iterator6["return"] != null)) {
                              _context15.next = 39;
                              break;
                            }
                            _context15.next = 39;
                            return _iterator6["return"]();
                          case 39:
                            _context15.prev = 39;
                            if (!_didIteratorError6) {
                              _context15.next = 42;
                              break;
                            }
                            throw _iteratorError6;
                          case 42:
                            return _context15.finish(39);
                          case 43:
                            return _context15.finish(34);
                          case 44:
                            //check if there are options that should be deleted
                            optionsToDelete = productOptions.filter(function (o) {
                              return !optionsPrestashop.find(function (prestashop_option) {
                                return prestashop_option.product_option.id == o.metadata.prestashop_id;
                              });
                            });
                            optionsToDelete.forEach( /*#__PURE__*/function () {
                              var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(option) {
                                return _regenerator["default"].wrap(function _callee7$(_context7) {
                                  while (1) {
                                    switch (_context7.prev = _context7.next) {
                                      case 0:
                                        _context7.next = 2;
                                        return _this3.productService_.withTransaction(manager).deleteOption(existingProduct.id, option.id);
                                      case 2:
                                      case "end":
                                        return _context7.stop();
                                    }
                                  }
                                }, _callee7);
                              }));
                              return function (_x6) {
                                return _ref3.apply(this, arguments);
                              };
                            }());

                            //re-retrieve product options
                            _context15.next = 48;
                            return _this3.productService_.withTransaction(manager).retrieveByExternalId(productData.data.product.id, {
                              relations: ["options", "options.values"]
                            });
                          case 48:
                            productOptions = _context15.sent.options;
                          case 49:
                            // it would be neccesary that ImageRepo will store metadata image_id of prestashop in order to check if the image is already uploaded.
                            // let productImages = existingProduct.images.map((image) => image.url);
                            productImages = normalizedProduct.images;
                            delete normalizedProduct.images;
                            if (!(((_productData$data$pro4 = productData.data.product.associations.combinations) === null || _productData$data$pro4 === void 0 ? void 0 : _productData$data$pro4.length) >= 1)) {
                              _context15.next = 84;
                              break;
                            }
                            //attach values to the options

                            productOptions = productOptions.map(function (productOption) {
                              var productDataOption = optionsValuePrestashop.find(function (o) {
                                return productOption.metadata.prestashop_id == o.product_option_value.id_attribute_group;
                              });
                              if (productDataOption) {
                                productOption.values = _this3.normalizeOptionValues(productDataOption).values;
                              }
                              return productOption;
                            });

                            // delete combinations

                            existingProduct.variants.map( /*#__PURE__*/function () {
                              var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(variant, key) {
                                var existsVariant;
                                return _regenerator["default"].wrap(function _callee8$(_context8) {
                                  while (1) {
                                    switch (_context8.prev = _context8.next) {
                                      case 0:
                                        _context8.next = 2;
                                        return _this3.prestashopClientService_.retrieveCombinationValues(variant.metadata.prestashop_id);
                                      case 2:
                                        existsVariant = _context8.sent;
                                        if (!(existsVariant === null)) {
                                          _context8.next = 13;
                                          break;
                                        }
                                        _context8.prev = 4;
                                        _context8.next = 7;
                                        return _this3.productVariantService_.withTransaction(manager)["delete"](variant.id);
                                      case 7:
                                        delete existingProduct.variants[key];
                                        _context8.next = 13;
                                        break;
                                      case 10:
                                        _context8.prev = 10;
                                        _context8.t0 = _context8["catch"](4);
                                        console.log(_context8.t0);
                                      case 13:
                                      case "end":
                                        return _context8.stop();
                                    }
                                  }
                                }, _callee8, null, [[4, 10]]);
                              }));
                              return function (_x7, _x8) {
                                return _ref4.apply(this, arguments);
                              };
                            }());

                            // //retrieve simple products as variants
                            // const variants = await this.magentoClientService_
                            //   .retrieveSimpleProductsAsVariants(productData.extension_attributes?.configurable_product_links);
                            _iteratorAbruptCompletion7 = false;
                            _didIteratorError7 = false;
                            _context15.prev = 56;
                            _loop = /*#__PURE__*/_regenerator["default"].mark(function _loop() {
                              var item, existingVariant;
                              return _regenerator["default"].wrap(function _loop$(_context14) {
                                while (1) {
                                  switch (_context14.prev = _context14.next) {
                                    case 0:
                                      item = _step7.value;
                                      existingVariant = existingProduct.variants.find( /*#__PURE__*/function () {
                                        var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(variant) {
                                          return _regenerator["default"].wrap(function _callee9$(_context9) {
                                            while (1) {
                                              switch (_context9.prev = _context9.next) {
                                                case 0:
                                                  return _context9.abrupt("return", variant.metadata.prestashop_id + "" === item.id);
                                                case 1:
                                                case "end":
                                                  return _context9.stop();
                                              }
                                            }
                                          }, _callee9);
                                        }));
                                        return function (_x9) {
                                          return _ref5.apply(this, arguments);
                                        };
                                      }());
                                      if (!(existingVariant != null)) {
                                        _context14.next = 6;
                                        break;
                                      }
                                      return _context14.delegateYield( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
                                        var combinationValues, options, optionValueId, stockAvailabe, variantData;
                                        return _regenerator["default"].wrap(function _callee11$(_context11) {
                                          while (1) {
                                            switch (_context11.prev = _context11.next) {
                                              case 0:
                                                _context11.next = 2;
                                                return _this3.prestashopClientService_.retrieveCombinationValues(item.id);
                                              case 2:
                                                combinationValues = _context11.sent;
                                                options = [];
                                                _iteratorAbruptCompletion8 = false;
                                                _didIteratorError8 = false;
                                                _context11.prev = 6;
                                                _iterator8 = _asyncIterator(combinationValues.data.combination.associations.product_option_values);
                                              case 8:
                                                _context11.next = 10;
                                                return _iterator8.next();
                                              case 10:
                                                if (!(_iteratorAbruptCompletion8 = !(_step8 = _context11.sent).done)) {
                                                  _context11.next = 16;
                                                  break;
                                                }
                                                optionValueId = _step8.value;
                                                return _context11.delegateYield( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
                                                  var optionValues;
                                                  return _regenerator["default"].wrap(function _callee10$(_context10) {
                                                    while (1) {
                                                      switch (_context10.prev = _context10.next) {
                                                        case 0:
                                                          _context10.next = 2;
                                                          return _this3.prestashopClientService_.retrieveOptionValues(optionValueId.id);
                                                        case 2:
                                                          optionValues = _context10.sent;
                                                          productOptions.map(function (element) {
                                                            if (element.metadata.prestashop_id == optionValues.data.product_option_value.id_attribute_group) {
                                                              var option = {
                                                                option_id: element.id,
                                                                value: optionValues.data.product_option_value.name,
                                                                metadata: {
                                                                  prestashop_id: optionValues.data.product_option_value.id
                                                                }
                                                              };
                                                              options.push(option);
                                                            }
                                                          });
                                                        case 4:
                                                        case "end":
                                                          return _context10.stop();
                                                      }
                                                    }
                                                  }, _callee10);
                                                })(), "t0", 13);
                                              case 13:
                                                _iteratorAbruptCompletion8 = false;
                                                _context11.next = 8;
                                                break;
                                              case 16:
                                                _context11.next = 22;
                                                break;
                                              case 18:
                                                _context11.prev = 18;
                                                _context11.t1 = _context11["catch"](6);
                                                _didIteratorError8 = true;
                                                _iteratorError8 = _context11.t1;
                                              case 22:
                                                _context11.prev = 22;
                                                _context11.prev = 23;
                                                if (!(_iteratorAbruptCompletion8 && _iterator8["return"] != null)) {
                                                  _context11.next = 27;
                                                  break;
                                                }
                                                _context11.next = 27;
                                                return _iterator8["return"]();
                                              case 27:
                                                _context11.prev = 27;
                                                if (!_didIteratorError8) {
                                                  _context11.next = 30;
                                                  break;
                                                }
                                                throw _iteratorError8;
                                              case 30:
                                                return _context11.finish(27);
                                              case 31:
                                                return _context11.finish(22);
                                              case 32:
                                                _iteratorAbruptCompletion9 = false;
                                                _didIteratorError9 = false;
                                                _context11.prev = 34;
                                                _iterator9 = _asyncIterator(productData.data.product.associations.stock_availables);
                                              case 36:
                                                _context11.next = 38;
                                                return _iterator9.next();
                                              case 38:
                                                if (!(_iteratorAbruptCompletion9 = !(_step9 = _context11.sent).done)) {
                                                  _context11.next = 47;
                                                  break;
                                                }
                                                stockAvailabe = _step9.value;
                                                if (!(stockAvailabe.id_product_attribute == item.id)) {
                                                  _context11.next = 44;
                                                  break;
                                                }
                                                _context11.next = 43;
                                                return _this3.prestashopClientService_.retrieveStockValues(stockAvailabe.id);
                                              case 43:
                                                stockValue = _context11.sent;
                                              case 44:
                                                _iteratorAbruptCompletion9 = false;
                                                _context11.next = 36;
                                                break;
                                              case 47:
                                                _context11.next = 53;
                                                break;
                                              case 49:
                                                _context11.prev = 49;
                                                _context11.t2 = _context11["catch"](34);
                                                _didIteratorError9 = true;
                                                _iteratorError9 = _context11.t2;
                                              case 53:
                                                _context11.prev = 53;
                                                _context11.prev = 54;
                                                if (!(_iteratorAbruptCompletion9 && _iterator9["return"] != null)) {
                                                  _context11.next = 58;
                                                  break;
                                                }
                                                _context11.next = 58;
                                                return _iterator9["return"]();
                                              case 58:
                                                _context11.prev = 58;
                                                if (!_didIteratorError9) {
                                                  _context11.next = 61;
                                                  break;
                                                }
                                                throw _iteratorError9;
                                              case 61:
                                                return _context11.finish(58);
                                              case 62:
                                                return _context11.finish(53);
                                              case 63:
                                                combinationValues.data.combination.inventory_quantity = parseInt(stockValue.data.stock_available.quantity);
                                                if (stockValue.data.stock_available.out_of_stock == 0) {
                                                  combinationValues.data.combination.allow_backorder = false;
                                                } else {
                                                  combinationValues.data.combination.allow_backorder = true;
                                                }
                                                _context11.next = 67;
                                                return _this3.normalizeVariant(combinationValues.data.combination, options, productData.data.product.price);
                                              case 67:
                                                variantData = _context11.sent;
                                                variantData.options.forEach(function (element, key) {
                                                  if (Object.is(variantData.options.length - 1, key)) {
                                                    variantData.title = element.value;
                                                  } else {
                                                    variantData.title = element.value + " - ";
                                                  }
                                                });
                                                _context11.prev = 69;
                                                _context11.next = 72;
                                                return _this3.productVariantService_.withTransaction(manager).update(existingVariant.id, variantData);
                                              case 72:
                                                _context11.next = 77;
                                                break;
                                              case 74:
                                                _context11.prev = 74;
                                                _context11.t3 = _context11["catch"](69);
                                                console.log(_context11.t3);
                                              case 77:
                                              case "end":
                                                return _context11.stop();
                                            }
                                          }
                                        }, _callee11, null, [[6, 18, 22, 32], [23,, 27, 31], [34, 49, 53, 63], [54,, 58, 62], [69, 74]]);
                                      })(), "t0", 4);
                                    case 4:
                                      _context14.next = 7;
                                      break;
                                    case 6:
                                      return _context14.delegateYield( /*#__PURE__*/_regenerator["default"].mark(function _callee13() {
                                        var combinationValues, options, optionValueId, stockAvailabe, variantData;
                                        return _regenerator["default"].wrap(function _callee13$(_context13) {
                                          while (1) {
                                            switch (_context13.prev = _context13.next) {
                                              case 0:
                                                _context13.next = 2;
                                                return _this3.prestashopClientService_.retrieveCombinationValues(item.id);
                                              case 2:
                                                combinationValues = _context13.sent;
                                                options = [];
                                                _iteratorAbruptCompletion10 = false;
                                                _didIteratorError10 = false;
                                                _context13.prev = 6;
                                                _iterator10 = _asyncIterator(combinationValues.data.combination.associations.product_option_values);
                                              case 8:
                                                _context13.next = 10;
                                                return _iterator10.next();
                                              case 10:
                                                if (!(_iteratorAbruptCompletion10 = !(_step10 = _context13.sent).done)) {
                                                  _context13.next = 16;
                                                  break;
                                                }
                                                optionValueId = _step10.value;
                                                return _context13.delegateYield( /*#__PURE__*/_regenerator["default"].mark(function _callee12() {
                                                  var optionValues;
                                                  return _regenerator["default"].wrap(function _callee12$(_context12) {
                                                    while (1) {
                                                      switch (_context12.prev = _context12.next) {
                                                        case 0:
                                                          _context12.next = 2;
                                                          return _this3.prestashopClientService_.retrieveOptionValues(optionValueId.id);
                                                        case 2:
                                                          optionValues = _context12.sent;
                                                          productOptions.map(function (element) {
                                                            if (element.metadata.prestashop_id == optionValues.data.product_option_value.id_attribute_group) {
                                                              var option = {
                                                                option_id: element.id,
                                                                value: optionValues.data.product_option_value.name,
                                                                metadata: {
                                                                  prestashop_id: optionValues.data.product_option_value.id
                                                                }
                                                              };
                                                              options.push(option);
                                                            }
                                                          });
                                                        case 4:
                                                        case "end":
                                                          return _context12.stop();
                                                      }
                                                    }
                                                  }, _callee12);
                                                })(), "t0", 13);
                                              case 13:
                                                _iteratorAbruptCompletion10 = false;
                                                _context13.next = 8;
                                                break;
                                              case 16:
                                                _context13.next = 22;
                                                break;
                                              case 18:
                                                _context13.prev = 18;
                                                _context13.t1 = _context13["catch"](6);
                                                _didIteratorError10 = true;
                                                _iteratorError10 = _context13.t1;
                                              case 22:
                                                _context13.prev = 22;
                                                _context13.prev = 23;
                                                if (!(_iteratorAbruptCompletion10 && _iterator10["return"] != null)) {
                                                  _context13.next = 27;
                                                  break;
                                                }
                                                _context13.next = 27;
                                                return _iterator10["return"]();
                                              case 27:
                                                _context13.prev = 27;
                                                if (!_didIteratorError10) {
                                                  _context13.next = 30;
                                                  break;
                                                }
                                                throw _iteratorError10;
                                              case 30:
                                                return _context13.finish(27);
                                              case 31:
                                                return _context13.finish(22);
                                              case 32:
                                                _iteratorAbruptCompletion11 = false;
                                                _didIteratorError11 = false;
                                                _context13.prev = 34;
                                                _iterator11 = _asyncIterator(productData.data.product.associations.stock_availables);
                                              case 36:
                                                _context13.next = 38;
                                                return _iterator11.next();
                                              case 38:
                                                if (!(_iteratorAbruptCompletion11 = !(_step11 = _context13.sent).done)) {
                                                  _context13.next = 47;
                                                  break;
                                                }
                                                stockAvailabe = _step11.value;
                                                if (!(stockAvailabe.id_product_attribute == item.id)) {
                                                  _context13.next = 44;
                                                  break;
                                                }
                                                _context13.next = 43;
                                                return _this3.prestashopClientService_.retrieveStockValues(stockAvailabe.id);
                                              case 43:
                                                stockValue = _context13.sent;
                                              case 44:
                                                _iteratorAbruptCompletion11 = false;
                                                _context13.next = 36;
                                                break;
                                              case 47:
                                                _context13.next = 53;
                                                break;
                                              case 49:
                                                _context13.prev = 49;
                                                _context13.t2 = _context13["catch"](34);
                                                _didIteratorError11 = true;
                                                _iteratorError11 = _context13.t2;
                                              case 53:
                                                _context13.prev = 53;
                                                _context13.prev = 54;
                                                if (!(_iteratorAbruptCompletion11 && _iterator11["return"] != null)) {
                                                  _context13.next = 58;
                                                  break;
                                                }
                                                _context13.next = 58;
                                                return _iterator11["return"]();
                                              case 58:
                                                _context13.prev = 58;
                                                if (!_didIteratorError11) {
                                                  _context13.next = 61;
                                                  break;
                                                }
                                                throw _iteratorError11;
                                              case 61:
                                                return _context13.finish(58);
                                              case 62:
                                                return _context13.finish(53);
                                              case 63:
                                                if (stockValue.data.stock_available.out_of_stock == 0) {
                                                  combinationValues.data.combination.allow_backorder = false;
                                                } else {
                                                  combinationValues.data.combination.allow_backorder = true;
                                                }
                                                combinationValues.data.combination.inventory_quantity = parseInt(stockValue.data.stock_available.quantity);
                                                _context13.next = 67;
                                                return _this3.normalizeVariant(combinationValues.data.combination, options, productData.data.product.price);
                                              case 67:
                                                variantData = _context13.sent;
                                                variantData.options.forEach(function (element, key) {
                                                  if (Object.is(variantData.options.length - 1, key)) {
                                                    variantData.title = element.value;
                                                  } else {
                                                    variantData.title = element.value + " - ";
                                                  }
                                                });
                                                _context13.prev = 69;
                                                _context13.next = 72;
                                                return _this3.productVariantService_.withTransaction(manager).create(existingProduct.id, variantData);
                                              case 72:
                                                _context13.next = 77;
                                                break;
                                              case 74:
                                                _context13.prev = 74;
                                                _context13.t3 = _context13["catch"](69);
                                                console.log(_context13.t3);
                                              case 77:
                                              case "end":
                                                return _context13.stop();
                                            }
                                          }
                                        }, _callee13, null, [[6, 18, 22, 32], [23,, 27, 31], [34, 49, 53, 63], [54,, 58, 62], [69, 74]]);
                                      })(), "t1", 7);
                                    case 7:
                                    case "end":
                                      return _context14.stop();
                                  }
                                }
                              }, _loop);
                            });
                            _iterator7 = _asyncIterator(productData.data.product.associations.combinations);
                          case 59:
                            _context15.next = 61;
                            return _iterator7.next();
                          case 61:
                            if (!(_iteratorAbruptCompletion7 = !(_step7 = _context15.sent).done)) {
                              _context15.next = 66;
                              break;
                            }
                            return _context15.delegateYield(_loop(), "t2", 63);
                          case 63:
                            _iteratorAbruptCompletion7 = false;
                            _context15.next = 59;
                            break;
                          case 66:
                            _context15.next = 72;
                            break;
                          case 68:
                            _context15.prev = 68;
                            _context15.t3 = _context15["catch"](56);
                            _didIteratorError7 = true;
                            _iteratorError7 = _context15.t3;
                          case 72:
                            _context15.prev = 72;
                            _context15.prev = 73;
                            if (!(_iteratorAbruptCompletion7 && _iterator7["return"] != null)) {
                              _context15.next = 77;
                              break;
                            }
                            _context15.next = 77;
                            return _iterator7["return"]();
                          case 77:
                            _context15.prev = 77;
                            if (!_didIteratorError7) {
                              _context15.next = 80;
                              break;
                            }
                            throw _iteratorError7;
                          case 80:
                            return _context15.finish(77);
                          case 81:
                            return _context15.finish(72);
                          case 82:
                            _context15.next = 107;
                            break;
                          case 84:
                            //insert a default variant for a simple product
                            if (stockValue.data.stock_available.out_of_stock == 0) {
                              productData.data.product.allow_backorder = false;
                            } else {
                              productData.data.product.allow_backorder = true;
                            }
                            productData.data.product.inventory_quantity = parseInt(stockValue.data.stock_available.quantity);
                            variantData = _this3.normalizeVariant(productData.data.product, []);
                            variantData.title = "Default";

                            // checks if there is just one variant so it's a simple product.
                            // if it's equal 1 it means that is the same variant so it will update it
                            // otherwise it will create it. 
                            if (!(existingProduct.variants.length == 1)) {
                              _context15.next = 99;
                              break;
                            }
                            _context15.prev = 89;
                            _context15.next = 92;
                            return _this3.productVariantService_.withTransaction(manager).update(existingProduct.variants[0].id, variantData);
                          case 92:
                            _context15.next = 97;
                            break;
                          case 94:
                            _context15.prev = 94;
                            _context15.t4 = _context15["catch"](89);
                            console.log(_context15.t4);
                          case 97:
                            _context15.next = 107;
                            break;
                          case 99:
                            _context15.prev = 99;
                            _context15.next = 102;
                            return _this3.productVariantService_.withTransaction(manager).create(existingProduct.id, variantData);
                          case 102:
                            _context15.next = 107;
                            break;
                          case 104:
                            _context15.prev = 104;
                            _context15.t5 = _context15["catch"](99);
                            console.log(_context15.t5);
                          case 107:
                            productImages = (0, _toConsumableArray2["default"])(new Set(productImages));
                            productImagesFileService = [];
                            if (!(productData.data.product.images != undefined)) {
                              _context15.next = 148;
                              break;
                            }
                            _iteratorAbruptCompletion12 = false;
                            _didIteratorError12 = false;
                            _context15.prev = 112;
                            _iterator12 = _asyncIterator(productImages);
                          case 114:
                            _context15.next = 116;
                            return _iterator12.next();
                          case 116:
                            if (!(_iteratorAbruptCompletion12 = !(_step12 = _context15.sent).done)) {
                              _context15.next = 130;
                              break;
                            }
                            element = _step12.value;
                            _context15.next = 120;
                            return _this3.prestashopClientService_.downloadFile(element);
                          case 120:
                            res = _context15.sent;
                            _context15.next = 123;
                            return _fs["default"].writeFileSync("./uploads/tempImage.jpg", res);
                          case 123:
                            _context15.next = 125;
                            return _this3.fileService_.upload({
                              fieldname: "files",
                              originalname: productData.data.product.link_rewrite + ".jpeg",
                              encoding: "7bit",
                              mimetype: "image/jpeg",
                              destination: "uploads/",
                              filename: productData.data.product.link_rewrite + ".jpeg",
                              path: "./uploads/tempImage.jpg",
                              size: 52370
                            });
                          case 125:
                            response = _context15.sent;
                            productImagesFileService.push(response.url);
                          case 127:
                            _iteratorAbruptCompletion12 = false;
                            _context15.next = 114;
                            break;
                          case 130:
                            _context15.next = 136;
                            break;
                          case 132:
                            _context15.prev = 132;
                            _context15.t6 = _context15["catch"](112);
                            _didIteratorError12 = true;
                            _iteratorError12 = _context15.t6;
                          case 136:
                            _context15.prev = 136;
                            _context15.prev = 137;
                            if (!(_iteratorAbruptCompletion12 && _iterator12["return"] != null)) {
                              _context15.next = 141;
                              break;
                            }
                            _context15.next = 141;
                            return _iterator12["return"]();
                          case 141:
                            _context15.prev = 141;
                            if (!_didIteratorError12) {
                              _context15.next = 144;
                              break;
                            }
                            throw _iteratorError12;
                          case 144:
                            return _context15.finish(141);
                          case 145:
                            return _context15.finish(136);
                          case 146:
                            _context15.next = 148;
                            return _this3.productService_.withTransaction(manager).update(existingProduct.id, {
                              images: productImagesFileService
                            });
                          case 148:
                            //update product
                            delete normalizedProduct.options;
                            delete normalizedProduct.images;
                            update = {};
                            for (_i = 0, _Object$keys = Object.keys(normalizedProduct); _i < _Object$keys.length; _i++) {
                              key = _Object$keys[_i];
                              if (normalizedProduct[key] !== existingProduct[key]) {
                                update[key] = normalizedProduct[key];
                              }
                            }

                            // normalizedProduct.images = productImages;
                            if (!Object.values(update).length) {
                              _context15.next = 155;
                              break;
                            }
                            _context15.next = 155;
                            return _this3.productService_.withTransaction(manager).update(existingProduct.id, update);
                          case 155:
                          case "end":
                            return _context15.stop();
                        }
                      }
                    }, _callee14, null, [[18, 30, 34, 44], [35,, 39, 43], [56, 68, 72, 82], [73,, 77, 81], [89, 94], [99, 104], [112, 132, 136, 146], [137,, 141, 145]]);
                  }));
                  return function (_x5) {
                    return _ref2.apply(this, arguments);
                  };
                }()));
              case 1:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee15, this);
      }));
      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "updateVariant",
    value: function () {
      var _updateVariant = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(productData, existingVariant) {
        var _this4 = this;
        return _regenerator["default"].wrap(function _callee17$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                return _context18.abrupt("return", this.atomicPhase_( /*#__PURE__*/function () {
                  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(manager) {
                    var variantData, update, _i2, _Object$keys2, key;
                    return _regenerator["default"].wrap(function _callee16$(_context17) {
                      while (1) {
                        switch (_context17.prev = _context17.next) {
                          case 0:
                            _context17.next = 2;
                            return _this4.getCurrencies();
                          case 2:
                            _context17.next = 4;
                            return _this4.normalizeVariant(productData.data.product, []);
                          case 4:
                            variantData = _context17.sent;
                            delete variantData.options;
                            delete variantData.prestashop_id;
                            update = {};
                            for (_i2 = 0, _Object$keys2 = Object.keys(variantData); _i2 < _Object$keys2.length; _i2++) {
                              key = _Object$keys2[_i2];
                              if (variantData[key] !== existingVariant[key]) {
                                update[key] = variantData[key];
                              }
                            }
                            if (!Object.values(update).length) {
                              _context17.next = 12;
                              break;
                            }
                            _context17.next = 12;
                            return _this4.productVariantService_.withTransaction(manager).update(existingVariant.id, variantData);
                          case 12:
                          case "end":
                            return _context17.stop();
                        }
                      }
                    }, _callee16);
                  }));
                  return function (_x12) {
                    return _ref6.apply(this, arguments);
                  };
                }()));
              case 1:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee17, this);
      }));
      function updateVariant(_x10, _x11) {
        return _updateVariant.apply(this, arguments);
      }
      return updateVariant;
    }()
  }, {
    key: "getCurrencies",
    value: function () {
      var _getCurrencies = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18() {
        var _this$currencies, _defaultStore$currenc, _defaultStore$default;
        var defaultStore;
        return _regenerator["default"].wrap(function _callee18$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (!this.currencies.length) {
                  _context19.next = 2;
                  break;
                }
                return _context19.abrupt("return");
              case 2:
                _context19.next = 4;
                return this.storeServices_.retrieve({
                  relations: ["currencies", "default_currency"]
                });
              case 4:
                defaultStore = _context19.sent;
                this.currencies = [];
                (_this$currencies = this.currencies).push.apply(_this$currencies, (0, _toConsumableArray2["default"])(((_defaultStore$currenc = defaultStore.currencies) === null || _defaultStore$currenc === void 0 ? void 0 : _defaultStore$currenc.map(function (currency) {
                  return currency.code;
                })) || []));
                this.currencies.push((_defaultStore$default = defaultStore.default_currency) === null || _defaultStore$default === void 0 ? void 0 : _defaultStore$default.code);
              case 8:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee18, this);
      }));
      function getCurrencies() {
        return _getCurrencies.apply(this, arguments);
      }
      return getCurrencies;
    }()
  }, {
    key: "getDefaultShippingProfile",
    value: function () {
      var _getDefaultShippingProfile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19() {
        return _regenerator["default"].wrap(function _callee19$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                if (this.defaultShippingProfileId.length) {
                  _context20.next = 4;
                  break;
                }
                _context20.next = 3;
                return this.shippingProfileService_.retrieveDefault();
              case 3:
                this.defaultShippingProfileId = _context20.sent;
              case 4:
                return _context20.abrupt("return", this.defaultShippingProfileId);
              case 5:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee19, this);
      }));
      function getDefaultShippingProfile() {
        return _getDefaultShippingProfile.apply(this, arguments);
      }
      return getDefaultShippingProfile;
    }()
  }, {
    key: "setCategory",
    value: function () {
      var _setCategory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(categories, product, manager) {
        var _yield$this$productCo, _yield$this$productCo2, _, count, existingCollections, _existingCollections$;
        return _regenerator["default"].wrap(function _callee20$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return this.productCollectionService_.withTransaction(manager).listAndCount();
              case 2:
                _yield$this$productCo = _context21.sent;
                _yield$this$productCo2 = (0, _slicedToArray2["default"])(_yield$this$productCo, 2);
                _ = _yield$this$productCo2[0];
                count = _yield$this$productCo2[1];
                _context21.next = 8;
                return this.productCollectionService_.withTransaction(manager).list({}, {
                  skip: 0,
                  take: count
                });
              case 8:
                existingCollections = _context21.sent;
                if (existingCollections.length) {
                  product.collection_id = (_existingCollections$ = existingCollections.find(function (collection) {
                    var _iterator13 = _createForOfIteratorHelper(categories),
                      _step13;
                    try {
                      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                        var category = _step13.value;
                        if (collection.metadata.prestashop_id == category.id) {
                          return true;
                        }
                      }
                    } catch (err) {
                      _iterator13.e(err);
                    } finally {
                      _iterator13.f();
                    }
                    return false;
                  })) === null || _existingCollections$ === void 0 ? void 0 : _existingCollections$.id;
                }
                return _context21.abrupt("return", product);
              case 11:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee20, this);
      }));
      function setCategory(_x13, _x14, _x15) {
        return _setCategory.apply(this, arguments);
      }
      return setCategory;
    }()
  }, {
    key: "normalizeProduct",
    value: function normalizeProduct(product) {
      var _product$data$product;
      product.data.product.meta_keywords = product.data.product.meta_keywords.split(',');
      product.data.product.meta_keywords = product.data.product.meta_keywords.filter(function (element) {
        if (element === "" || element === " ") {
          return false;
        } else {
          return true;
        }
      });
      return {
        title: product.data.product.name,
        // profile_id: "sp_01GKH5C2YCXY22RA9NP28DFR6D",
        handle: product.data.product.link_rewrite,
        is_giftcard: false,
        discountable: true,
        description: product.data.product.description,
        subtitle: product.data.product.description_short,
        weight: parseFloat(product.data.product.weight),
        height: parseFloat(product.data.product.height),
        lenght: parseFloat(product.data.product.depth),
        width: parseFloat(product.data.product.width),
        // type: {
        //   value: product.type_id
        // },
        external_id: product.data.product.id,
        status: product.data.product.active == 1 ? _medusa.ProductStatus.PUBLISHED : _medusa.ProductStatus.DRAFT,
        images: ((_product$data$product = product.data.product.images) === null || _product$data$product === void 0 ? void 0 : _product$data$product.map(function (img) {
          return img.href;
        })) || [],
        // images:
        // product.data.product.images?.map(
        //   (img) => img.href + "/&ws_key=FZQX58LATQZGXAEVUTU4PMSNVT19QASS"
        // ) || [],

        // // thumbnail: product.media_gallery_entries?.find((img) => img.types.includes('thumbnail'))?.url,
        options: [],
        // // collection_id: product.data.product.associations.categories[0].id
        collection_id: null,
        // tags: product.data.product.meta_keywords.map((value) => ({
        //   value: value
        // })),
        metadata: {
          prestashop_id: product.data.product.id,
          reference: product.data.product.reference,
          manufacter_name: product.data.product.manufacturer_name,
          date_upd: product.data.product.date_upd,
          meta_keywords: product.data.product.meta_keywords
        }
      };
    }
  }, {
    key: "normalizeVariant",
    value: function normalizeVariant(variant, options, itemPrice) {
      var _this5 = this;
      var total = parseFloat(itemPrice) + parseFloat(variant.price);
      return {
        title: variant.id,
        prices: this.currencies.map(function (currency) {
          return {
            amount: itemPrice != undefined ? _this5.parsePrice(total) : _this5.parsePrice(variant.price),
            currency_code: currency
          };
        }),
        sku: variant.reference === "" ? null : variant.reference,
        barcode: variant.ean13 === "" ? null : variant.ean13,
        ean: variant.ean13 === "" ? null : variant.ean13,
        upc: variant.upc === "" ? null : variant.upc,
        inventory_quantity: variant.inventory_quantity,
        allow_backorder: variant.allow_backorder,
        // dependes_on_stock is deprecated in Prestashop  https://devdocs.prestashop-project.org/1.7/modules/core-updates/1.7.8/
        // The way it works is if the quantity of inventory is greater than 1, manage inventory is enabled      
        manage_inventory: variant.inventory_quantity > 0 ? true : false,
        weight: ~~variant.weight || 0,
        options: options,
        metadata: {
          prestashop_id: variant.id,
          isbn: variant.isbn,
          supplier_reference: variant.supplier_reference,
          location: variant.location
        }
      };
    }
  }, {
    key: "normalizeOption",
    value: function normalizeOption(option) {
      return {
        title: option.name,
        values: option.associations.product_option_values.map(function (value) {
          return {
            value: value.id,
            metadata: {
              prestashop_value: value.id
            }
          };
        }),
        metadata: {
          prestashop_id: option.id
        }
      };
    }
  }, {
    key: "normalizeOptionValues",
    value: function normalizeOptionValues(option) {
      return {
        values: {
          value: option.product_option_value.name,
          metadata: {
            prestashop_value: option.product_option_value.id
          }
        }
      };
    }
  }, {
    key: "parsePrice",
    value: function parsePrice(price) {
      return parseInt((parseFloat(Number(price).toFixed(2)) * 100).toString());
    }
  }, {
    key: "removeHtmlTags",
    value: function removeHtmlTags(str) {
      if (str === null || str === "") {
        return "";
      }
      str = str.toString();

      // Regular expression to identify HTML tags in
      // the input string. Replacing the identified
      // HTML tag with a null string.
      return str.replace(/(<([^>]+)>)/gi, "");
    }
  }]);
  return PrestashopProductService;
}(_medusa.TransactionBaseService);
var _default = PrestashopProductService;
exports["default"] = _default;