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
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var MagentoProductService = /*#__PURE__*/function (_TransactionBaseServi) {
  (0, _inherits2["default"])(MagentoProductService, _TransactionBaseServi);
  var _super = _createSuper(MagentoProductService);
  function MagentoProductService(container, options) {
    var _this;
    (0, _classCallCheck2["default"])(this, MagentoProductService);
    _this = _super.call(this, container);
    _this.manager_ = container.manager;
    _this.options_ = options;
    _this.productService_ = container.productService;
    _this.magentoClientService_ = container.magentoClientService;
    _this.currencyService_ = container.currencyService;
    _this.productVariantService_ = container.productVariantService;
    _this.productCollectionService_ = container.productCollectionService;
    _this.shippingProfileService_ = container.shippingProfileService;
    _this.storeServices_ = container.storeService;
    _this.currencies = [];
    _this.defaultShippingProfileId = "";
    return _this;
  }
  (0, _createClass2["default"])(MagentoProductService, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(productData) {
        var _this2 = this;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.atomicPhase_( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(manager) {
                    var _productData$extensio, _productData$extensio3, _productData$extensio5;
                    var existingProduct, existingVariant, normalizedProduct, _productData$extensio2, _productData$extensio4, productImages, product, _productData$extensio6, variants, _iterator, _step, v, variantData, _productImages, _variantData;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _this2.productService_.withTransaction(manager).retrieveByExternalId(productData.id, {
                              relations: ["variants", "options", "images"]
                            })["catch"](function () {
                              return undefined;
                            });
                          case 2:
                            existingProduct = _context.sent;
                            if (!existingProduct) {
                              _context.next = 7;
                              break;
                            }
                            return _context.abrupt("return", _this2.update(productData, existingProduct));
                          case 7:
                            _context.next = 9;
                            return _this2.productVariantService_.withTransaction(manager).retrieveBySKU(productData.sku)["catch"](function () {
                              return undefined;
                            });
                          case 9:
                            existingVariant = _context.sent;
                            if (!existingVariant) {
                              _context.next = 12;
                              break;
                            }
                            return _context.abrupt("return", _this2.updateVariant(productData, existingVariant));
                          case 12:
                            _context.next = 14;
                            return _this2.getCurrencies();
                          case 14:
                            normalizedProduct = _this2.normalizeProduct(productData);
                            _context.next = 17;
                            return _this2.getDefaultShippingProfile();
                          case 17:
                            normalizedProduct.profile_id = _context.sent;
                            if (!((_productData$extensio = productData.extension_attributes) !== null && _productData$extensio !== void 0 && _productData$extensio.category_links)) {
                              _context.next = 21;
                              break;
                            }
                            _context.next = 21;
                            return _this2.setCategory((_productData$extensio2 = productData.extension_attributes) === null || _productData$extensio2 === void 0 ? void 0 : _productData$extensio2.category_links, normalizedProduct, manager);
                          case 21:
                            if ((_productData$extensio3 = productData.extension_attributes) !== null && _productData$extensio3 !== void 0 && _productData$extensio3.configurable_product_options) {
                              //retrieve options
                              (_productData$extensio4 = productData.extension_attributes) === null || _productData$extensio4 === void 0 ? void 0 : _productData$extensio4.configurable_product_options.map(function (item) {
                                normalizedProduct.options.push(_this2.normalizeOption(item));
                              });
                            }
                            productImages = normalizedProduct.images;
                            delete normalizedProduct.images;

                            //create product
                            _context.next = 26;
                            return _this2.productService_.withTransaction(manager).create(normalizedProduct);
                          case 26:
                            product = _context.sent;
                            if (!((_productData$extensio5 = productData.extension_attributes) !== null && _productData$extensio5 !== void 0 && _productData$extensio5.configurable_product_links)) {
                              _context.next = 56;
                              break;
                            }
                            _context.next = 30;
                            return _this2.productService_.withTransaction(manager).retrieve(product.id, {
                              relations: ['options']
                            });
                          case 30:
                            product = _context.sent;
                            //attached option id to normalized options
                            normalizedProduct.options = normalizedProduct.options.map(function (option) {
                              var productOption = product.options.find(function (o) {
                                return o.title === option.title;
                              });
                              return _objectSpread(_objectSpread({}, option), {}, {
                                id: productOption.id
                              });
                            });

                            //retrieve simple products as variants
                            _context.next = 34;
                            return _this2.magentoClientService_.retrieveSimpleProductsAsVariants((_productData$extensio6 = productData.extension_attributes) === null || _productData$extensio6 === void 0 ? void 0 : _productData$extensio6.configurable_product_links);
                          case 34:
                            variants = _context.sent;
                            _iterator = _createForOfIteratorHelper(variants);
                            _context.prev = 36;
                            _iterator.s();
                          case 38:
                            if ((_step = _iterator.n()).done) {
                              _context.next = 46;
                              break;
                            }
                            v = _step.value;
                            variantData = _this2.normalizeVariant(v, normalizedProduct.options);
                            _context.next = 43;
                            return _this2.productVariantService_.withTransaction(manager).create(product.id, variantData);
                          case 43:
                            if (v.media_gallery_entries) {
                              //update products images with variant's images
                              (_productImages = productImages).push.apply(_productImages, (0, _toConsumableArray2["default"])(v.media_gallery_entries.map(function (entry) {
                                return entry.url;
                              })));
                            }
                          case 44:
                            _context.next = 38;
                            break;
                          case 46:
                            _context.next = 51;
                            break;
                          case 48:
                            _context.prev = 48;
                            _context.t0 = _context["catch"](36);
                            _iterator.e(_context.t0);
                          case 51:
                            _context.prev = 51;
                            _iterator.f();
                            return _context.finish(51);
                          case 54:
                            _context.next = 59;
                            break;
                          case 56:
                            //insert a default variant for a simple product
                            _variantData = _this2.normalizeVariant(productData, []);
                            _context.next = 59;
                            return _this2.productVariantService_.withTransaction(manager).create(product.id, _variantData);
                          case 59:
                            //insert product images
                            productImages = (0, _toConsumableArray2["default"])(new Set(productImages));
                            _context.next = 62;
                            return _this2.productService_.withTransaction(manager).update(product.id, {
                              images: productImages
                            });
                          case 62:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[36, 48, 51, 54]]);
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
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(productData, existingProduct) {
        var _this3 = this;
        return _regenerator["default"].wrap(function _callee7$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.atomicPhase_( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(manager) {
                    var _productData$extensio7, _productData$extensio9, _productData$extensio11;
                    var normalizedProduct, productOptions, _productData$extensio8, optionsToDelete, productImages, variants, _iterator2, _step2, _loop, variantsToDelete, variantData, update, _i, _Object$keys, key;
                    return _regenerator["default"].wrap(function _callee6$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return _this3.getCurrencies();
                          case 2:
                            normalizedProduct = _this3.normalizeProduct(productData);
                            productOptions = existingProduct.options;
                            if (!((_productData$extensio7 = productData.extension_attributes) !== null && _productData$extensio7 !== void 0 && _productData$extensio7.category_links)) {
                              _context7.next = 7;
                              break;
                            }
                            _context7.next = 7;
                            return _this3.setCategory((_productData$extensio8 = productData.extension_attributes) === null || _productData$extensio8 === void 0 ? void 0 : _productData$extensio8.category_links, normalizedProduct, manager);
                          case 7:
                            if (!((_productData$extensio9 = productData.extension_attributes) !== null && _productData$extensio9 !== void 0 && _productData$extensio9.configurable_product_options)) {
                              _context7.next = 14;
                              break;
                            }
                            //retrieve options
                            productData.extension_attributes.configurable_product_options.forEach( /*#__PURE__*/function () {
                              var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(item) {
                                var existingOption, normalizedOption;
                                return _regenerator["default"].wrap(function _callee3$(_context3) {
                                  while (1) {
                                    switch (_context3.prev = _context3.next) {
                                      case 0:
                                        existingOption = productOptions.find(function (o) {
                                          return o.metadata.magento_id == item.id;
                                        });
                                        if (existingOption) {
                                          _context3.next = 4;
                                          break;
                                        }
                                        _context3.next = 4;
                                        return _this3.productService_.withTransaction(manager).addOption(existingProduct.id, item.label);
                                      case 4:
                                        //update option and its values
                                        normalizedOption = _this3.normalizeOption(item);
                                        delete normalizedOption.values;
                                        _context3.next = 8;
                                        return _this3.productService_.withTransaction(manager).updateOption(existingProduct.id, existingOption.id, normalizedOption);
                                      case 8:
                                      case "end":
                                        return _context3.stop();
                                    }
                                  }
                                }, _callee3);
                              }));
                              return function (_x6) {
                                return _ref3.apply(this, arguments);
                              };
                            }());

                            //check if there are options that should be deleted
                            optionsToDelete = productOptions.filter(function (o) {
                              var _productData$extensio10;
                              return !((_productData$extensio10 = productData.extension_attributes) !== null && _productData$extensio10 !== void 0 && _productData$extensio10.configurable_product_options.find(function (magento_option) {
                                return magento_option.id == o.metadata.magento_id;
                              }));
                            });
                            optionsToDelete.forEach( /*#__PURE__*/function () {
                              var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(option) {
                                return _regenerator["default"].wrap(function _callee4$(_context4) {
                                  while (1) {
                                    switch (_context4.prev = _context4.next) {
                                      case 0:
                                        _context4.next = 2;
                                        return _this3.productService_.withTransaction(manager).deleteOption(existingProduct.id, option.id);
                                      case 2:
                                      case "end":
                                        return _context4.stop();
                                    }
                                  }
                                }, _callee4);
                              }));
                              return function (_x7) {
                                return _ref4.apply(this, arguments);
                              };
                            }());

                            //re-retrieve product options
                            _context7.next = 13;
                            return _this3.productService_.withTransaction(manager).retrieveByExternalId(productData.id, {
                              relations: ["options", "options.values"]
                            });
                          case 13:
                            productOptions = _context7.sent.options;
                          case 14:
                            productImages = existingProduct.images.map(function (image) {
                              return image.url;
                            });
                            if (!((_productData$extensio11 = productData.extension_attributes) !== null && _productData$extensio11 !== void 0 && _productData$extensio11.configurable_product_links)) {
                              _context7.next = 40;
                              break;
                            }
                            //attach values to the options
                            productOptions = productOptions.map(function (productOption) {
                              var productDataOption = productData.options.find(function (o) {
                                return productOption.metadata.magento_id == o.id;
                              });
                              if (productDataOption) {
                                productOption.values = _this3.normalizeOption(productDataOption).values;
                              }
                              return productOption;
                            });

                            //retrieve simple products as variants
                            _context7.next = 19;
                            return _this3.magentoClientService_.retrieveSimpleProductsAsVariants(productData.extension_attributes.configurable_product_links);
                          case 19:
                            variants = _context7.sent;
                            _iterator2 = _createForOfIteratorHelper(variants);
                            _context7.prev = 21;
                            _loop = /*#__PURE__*/_regenerator["default"].mark(function _loop() {
                              var v, variantData, existingVariant, _productImages2;
                              return _regenerator["default"].wrap(function _loop$(_context6) {
                                while (1) {
                                  switch (_context6.prev = _context6.next) {
                                    case 0:
                                      v = _step2.value;
                                      _context6.next = 3;
                                      return _this3.normalizeVariant(v, productOptions);
                                    case 3:
                                      variantData = _context6.sent;
                                      //check if variant exists
                                      existingVariant = existingProduct.variants.find(function (variant) {
                                        return variant.metadata.magento_id === v.id;
                                      });
                                      if (!existingVariant) {
                                        _context6.next = 10;
                                        break;
                                      }
                                      _context6.next = 8;
                                      return _this3.productVariantService_.withTransaction(manager).update(existingVariant.id, variantData);
                                    case 8:
                                      _context6.next = 12;
                                      break;
                                    case 10:
                                      _context6.next = 12;
                                      return _this3.productVariantService_.withTransaction(manager).create(existingProduct.id, variantData);
                                    case 12:
                                      if (v.media_gallery_entries) {
                                        (_productImages2 = productImages).push.apply(_productImages2, (0, _toConsumableArray2["default"])(v.media_gallery_entries.map(function (entry) {
                                          return entry.url;
                                        })));
                                      }
                                    case 13:
                                    case "end":
                                      return _context6.stop();
                                  }
                                }
                              }, _loop);
                            });
                            _iterator2.s();
                          case 24:
                            if ((_step2 = _iterator2.n()).done) {
                              _context7.next = 28;
                              break;
                            }
                            return _context7.delegateYield(_loop(), "t0", 26);
                          case 26:
                            _context7.next = 24;
                            break;
                          case 28:
                            _context7.next = 33;
                            break;
                          case 30:
                            _context7.prev = 30;
                            _context7.t1 = _context7["catch"](21);
                            _iterator2.e(_context7.t1);
                          case 33:
                            _context7.prev = 33;
                            _iterator2.f();
                            return _context7.finish(33);
                          case 36:
                            //check if any variants should be deleted
                            variantsToDelete = existingProduct.variants.filter(function (v) {
                              return productData.extension_attributes.configurable_product_links.indexOf(v.metadata.magento_id) === -1;
                            });
                            variantsToDelete.forEach( /*#__PURE__*/function () {
                              var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(variant) {
                                return _regenerator["default"].wrap(function _callee5$(_context5) {
                                  while (1) {
                                    switch (_context5.prev = _context5.next) {
                                      case 0:
                                        _context5.next = 2;
                                        return _this3.productVariantService_.withTransaction(manager)["delete"](variant.id);
                                      case 2:
                                      case "end":
                                        return _context5.stop();
                                    }
                                  }
                                }, _callee5);
                              }));
                              return function (_x8) {
                                return _ref5.apply(this, arguments);
                              };
                            }());
                            _context7.next = 50;
                            break;
                          case 40:
                            _context7.next = 42;
                            return _this3.normalizeVariant(productData, []);
                          case 42:
                            variantData = _context7.sent;
                            if (!existingProduct.variants.length) {
                              _context7.next = 48;
                              break;
                            }
                            _context7.next = 46;
                            return _this3.productVariantService_.withTransaction(manager).update(existingProduct.variants[0].id, variantData);
                          case 46:
                            _context7.next = 50;
                            break;
                          case 48:
                            _context7.next = 50;
                            return _this3.productVariantService_.withTransaction(manager).create(existingProduct.id, variantData);
                          case 50:
                            productImages = (0, _toConsumableArray2["default"])(new Set(productImages));

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
                            normalizedProduct.images = productImages;
                            if (!Object.values(update).length) {
                              _context7.next = 59;
                              break;
                            }
                            _context7.next = 59;
                            return _this3.productService_.withTransaction(manager).update(existingProduct.id, update);
                          case 59:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee6, null, [[21, 30, 33, 36]]);
                  }));
                  return function (_x5) {
                    return _ref2.apply(this, arguments);
                  };
                }()));
              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee7, this);
      }));
      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "updateVariant",
    value: function () {
      var _updateVariant = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(productData, existingVariant) {
        var _this4 = this;
        return _regenerator["default"].wrap(function _callee9$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.atomicPhase_( /*#__PURE__*/function () {
                  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(manager) {
                    var variantData, update, _i2, _Object$keys2, key;
                    return _regenerator["default"].wrap(function _callee8$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            _context9.next = 2;
                            return _this4.getCurrencies();
                          case 2:
                            _context9.next = 4;
                            return _this4.normalizeVariant(productData, []);
                          case 4:
                            variantData = _context9.sent;
                            delete variantData.options;
                            delete variantData.magento_id;
                            update = {};
                            for (_i2 = 0, _Object$keys2 = Object.keys(variantData); _i2 < _Object$keys2.length; _i2++) {
                              key = _Object$keys2[_i2];
                              if (variantData[key] !== existingVariant[key]) {
                                update[key] = variantData[key];
                              }
                            }
                            if (!Object.values(update).length) {
                              _context9.next = 12;
                              break;
                            }
                            _context9.next = 12;
                            return _this4.productVariantService_.withTransaction(manager).update(existingVariant.id, variantData);
                          case 12:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee8);
                  }));
                  return function (_x11) {
                    return _ref6.apply(this, arguments);
                  };
                }()));
              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee9, this);
      }));
      function updateVariant(_x9, _x10) {
        return _updateVariant.apply(this, arguments);
      }
      return updateVariant;
    }()
  }, {
    key: "getCurrencies",
    value: function () {
      var _getCurrencies = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
        var _this$currencies, _defaultStore$currenc, _defaultStore$default;
        var defaultStore;
        return _regenerator["default"].wrap(function _callee10$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (!this.currencies.length) {
                  _context11.next = 2;
                  break;
                }
                return _context11.abrupt("return");
              case 2:
                _context11.next = 4;
                return this.storeServices_.retrieve({
                  relations: ['currencies', 'default_currency']
                });
              case 4:
                defaultStore = _context11.sent;
                this.currencies = [];
                (_this$currencies = this.currencies).push.apply(_this$currencies, (0, _toConsumableArray2["default"])(((_defaultStore$currenc = defaultStore.currencies) === null || _defaultStore$currenc === void 0 ? void 0 : _defaultStore$currenc.map(function (currency) {
                  return currency.code;
                })) || []));
                this.currencies.push((_defaultStore$default = defaultStore.default_currency) === null || _defaultStore$default === void 0 ? void 0 : _defaultStore$default.code);
              case 8:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee10, this);
      }));
      function getCurrencies() {
        return _getCurrencies.apply(this, arguments);
      }
      return getCurrencies;
    }()
  }, {
    key: "getDefaultShippingProfile",
    value: function () {
      var _getDefaultShippingProfile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
        return _regenerator["default"].wrap(function _callee11$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (this.defaultShippingProfileId.length) {
                  _context12.next = 4;
                  break;
                }
                _context12.next = 3;
                return this.shippingProfileService_.retrieveDefault();
              case 3:
                this.defaultShippingProfileId = _context12.sent;
              case 4:
                return _context12.abrupt("return", this.defaultShippingProfileId);
              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee11, this);
      }));
      function getDefaultShippingProfile() {
        return _getDefaultShippingProfile.apply(this, arguments);
      }
      return getDefaultShippingProfile;
    }()
  }, {
    key: "setCategory",
    value: function () {
      var _setCategory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(categories, product, manager) {
        var _yield$this$productCo, _yield$this$productCo2, _, count, existingCollections, _existingCollections$;
        return _regenerator["default"].wrap(function _callee12$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                //Magento supports multiple categories for a product
                //since Medusa supports only one collection for a product, we'll
                //use the category with the highest position

                categories.sort(function (a, b) {
                  if (a.position > b.position) {
                    return 1;
                  }
                  return a.position < b.position ? -1 : 0;
                });

                //retrieve Medusa collection using magento ID
                _context13.next = 3;
                return this.productCollectionService_.withTransaction(manager).listAndCount();
              case 3:
                _yield$this$productCo = _context13.sent;
                _yield$this$productCo2 = (0, _slicedToArray2["default"])(_yield$this$productCo, 2);
                _ = _yield$this$productCo2[0];
                count = _yield$this$productCo2[1];
                _context13.next = 9;
                return this.productCollectionService_.withTransaction(manager).list({}, {
                  skip: 0,
                  take: count
                });
              case 9:
                existingCollections = _context13.sent;
                if (existingCollections.length) {
                  product.collection_id = (_existingCollections$ = existingCollections.find(function (collection) {
                    var _iterator3 = _createForOfIteratorHelper(categories),
                      _step3;
                    try {
                      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                        var category = _step3.value;
                        if (collection.metadata.magento_id == category.category_id) {
                          return true;
                        }
                      }
                    } catch (err) {
                      _iterator3.e(err);
                    } finally {
                      _iterator3.f();
                    }
                    return false;
                  })) === null || _existingCollections$ === void 0 ? void 0 : _existingCollections$.id;
                }
                return _context13.abrupt("return", product);
              case 12:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee12, this);
      }));
      function setCategory(_x12, _x13, _x14) {
        return _setCategory.apply(this, arguments);
      }
      return setCategory;
    }()
  }, {
    key: "normalizeProduct",
    value: function normalizeProduct(product) {
      var _product$custom_attri, _product$custom_attri2, _product$custom_attri3, _product$custom_attri4, _product$media_galler, _product$media_galler2, _product$media_galler3;
      return {
        title: product.name,
        handle: (_product$custom_attri = product.custom_attributes) === null || _product$custom_attri === void 0 ? void 0 : (_product$custom_attri2 = _product$custom_attri.find(function (attribute) {
          return attribute.attribute_code === 'url_key';
        })) === null || _product$custom_attri2 === void 0 ? void 0 : _product$custom_attri2.value,
        description: this.removeHtmlTags(((_product$custom_attri3 = product.custom_attributes) === null || _product$custom_attri3 === void 0 ? void 0 : (_product$custom_attri4 = _product$custom_attri3.find(function (attribute) {
          return attribute.attribute_code === 'description';
        })) === null || _product$custom_attri4 === void 0 ? void 0 : _product$custom_attri4.value) || ''),
        type: {
          value: product.type_id
        },
        external_id: product.id,
        status: product.status == 1 ? _medusa.ProductStatus.PUBLISHED : _medusa.ProductStatus.DRAFT,
        images: ((_product$media_galler = product.media_gallery_entries) === null || _product$media_galler === void 0 ? void 0 : _product$media_galler.map(function (img) {
          return img.url;
        })) || [],
        thumbnail: (_product$media_galler2 = product.media_gallery_entries) === null || _product$media_galler2 === void 0 ? void 0 : (_product$media_galler3 = _product$media_galler2.find(function (img) {
          return img.types.includes('thumbnail');
        })) === null || _product$media_galler3 === void 0 ? void 0 : _product$media_galler3.url,
        options: [],
        collection_id: null
      };
    }
  }, {
    key: "normalizeVariant",
    value: function normalizeVariant(variant, options) {
      var _this5 = this;
      return {
        title: variant.name,
        prices: this.currencies.map(function (currency) {
          return {
            amount: _this5.parsePrice(variant.price),
            currency_code: currency
          };
        }),
        sku: variant.sku,
        inventory_quantity: variant.stockData.qty,
        allow_backorder: variant.stockData.backorders > 0,
        manage_inventory: variant.stockData.manage_stock,
        weight: variant.weight || 0,
        options: options === null || options === void 0 ? void 0 : options.map(function (option) {
          var _variant$custom_attri;
          var variantOption = (_variant$custom_attri = variant.custom_attributes) === null || _variant$custom_attri === void 0 ? void 0 : _variant$custom_attri.find(function (attribute) {
            return attribute.attribute_code.toLowerCase() === option.title.toLowerCase();
          });
          if (variantOption) {
            var _option$values$find;
            return {
              option_id: option.id,
              value: (_option$values$find = option.values.find(function (value) {
                var _value$metadata;
                return ((_value$metadata = value.metadata) === null || _value$metadata === void 0 ? void 0 : _value$metadata.magento_value) === variantOption.value;
              })) === null || _option$values$find === void 0 ? void 0 : _option$values$find.value
            };
          }
        }),
        metadata: {
          magento_id: variant.id
        }
      };
    }
  }, {
    key: "normalizeOption",
    value: function normalizeOption(option) {
      return {
        title: option.label,
        values: option.values.map(function (value) {
          return {
            value: value.label,
            metadata: {
              magento_value: value.value
            }
          };
        }),
        metadata: {
          magento_id: option.id
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
      if (str === null || str === '') {
        return '';
      }
      str = str.toString();

      // Regular expression to identify HTML tags in 
      // the input string. Replacing the identified 
      // HTML tag with a null string.
      return str.replace(/(<([^>]+)>)/ig, '');
    }
  }]);
  return MagentoProductService;
}(_medusa.TransactionBaseService);
var _default = MagentoProductService;
exports["default"] = _default;