"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MagentoProductTypes = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _axios = _interopRequireDefault(require("axios"));
var _medusaCoreUtils = require("medusa-core-utils");
// var _magento = require("./magento");
var _medusa = require("@medusajs/medusa");
var _axiosOauth = _interopRequireDefault(require("axios-oauth-1.0a"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var MagentoProductTypes;
exports.MagentoProductTypes = MagentoProductTypes;
(function (MagentoProductTypes) {
  MagentoProductTypes["CONFIGURABLE"] = "configurable";
  MagentoProductTypes["SIMPLE"] = "simple";
})(MagentoProductTypes || (exports.MagentoProductTypes = MagentoProductTypes = {}));
var MagentoClientService = /*#__PURE__*/function (_TransactionBaseServi) {
  (0, _inherits2["default"])(MagentoClientService, _TransactionBaseServi);
  var _super = _createSuper(MagentoClientService);
  function MagentoClientService(container, options) {
    var _this;
    (0, _classCallCheck2["default"])(this, MagentoClientService);
    _this = _super.call(this, container);
    _this.manager_ = container.manager;
    _this.logger_ = container.logger;
    _this.options_ = options;
    _this.apiBaseUrl_ = "".concat(options.magento_url, "/rest/default/V1");
    _this.client_ = _axios["default"].create({
      headers: {
        'Accept': 'application/json'
      }
    });
    (0, _axiosOauth["default"])(_this.client_, {
      algorithm: 'HMAC-SHA256',
      key: options.consumer_key,
      secret: options.consumer_secret,
      token: options.access_token,
      tokenSecret: options.access_token_secret
    });
    _this.client_.interceptors.request.use(null, function (error) {
      var _error$response, _error$response$data, _error$request, _error$request$data;
      console.log(error);
      throw new _medusaCoreUtils.MedusaError(_medusaCoreUtils.MedusaError.Types.UNEXPECTED_STATE, ((_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || ((_error$request = error.request) === null || _error$request === void 0 ? void 0 : (_error$request$data = _error$request.data) === null || _error$request$data === void 0 ? void 0 : _error$request$data.message) || error.message || "An error occurred while sending the request.");
    });
    _this.client_.interceptors.response.use(null, function (error) {
      var _error$response2, _error$response2$data, _error$request2, _error$request2$data;
      console.log(error);
      throw new _medusaCoreUtils.MedusaError(_medusaCoreUtils.MedusaError.Types.UNEXPECTED_STATE, ((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message) || ((_error$request2 = error.request) === null || _error$request2 === void 0 ? void 0 : (_error$request2$data = _error$request2.data) === null || _error$request2$data === void 0 ? void 0 : _error$request2$data.message) || error.message || "An error occurred while sending the request.");
    });
    _this.defaultImagePrefix_ = options.image_prefix;
    return _this;
  }
  (0, _createClass2["default"])(MagentoClientService, [{
    key: "retrieveProducts",
    value: function () {
      var _retrieveProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(type, lastUpdatedTime, filters) {
        var _this2 = this;
        var searchCriteria;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                searchCriteria = {
                  currentPage: 1,
                  filterGroups: []
                };
                if (type) {
                  searchCriteria.filterGroups.push([{
                    field: 'type_id',
                    value: type,
                    condition_type: 'eq'
                  }]);
                }
                if (lastUpdatedTime) {
                  searchCriteria.filterGroups.push([{
                    field: 'updated_at',
                    value: lastUpdatedTime,
                    condition_type: 'gt'
                  }]);
                }
                if (filters) {
                  filters.forEach(function (filterGroup) {
                    var newFilterGroup = filterGroup.map(function (filter) {
                      return {
                        field: filter.field,
                        value: filter.value,
                        condition_type: filter.condition_type || 'eq'
                      };
                    });
                    searchCriteria.filterGroups.push(newFilterGroup);
                  });
                }
                return _context2.abrupt("return", this.sendRequest("/products?".concat(this.formatSearchCriteriaQuery(searchCriteria))).then( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
                    var data, options, i, _data$items$i$media_g, _data$items$i$extensi, _data$items$i$extensi2, response;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            data = _ref.data;
                            _context.next = 3;
                            return _this2.retrieveDefaultConfigs();
                          case 3:
                            if (!(type === MagentoProductTypes.CONFIGURABLE)) {
                              _context.next = 7;
                              break;
                            }
                            _context.next = 6;
                            return _this2.retrieveOptions();
                          case 6:
                            options = _context.sent;
                          case 7:
                            i = 0;
                          case 8:
                            if (!(i < data.items.length)) {
                              _context.next = 19;
                              break;
                            }
                            data.items[i].media_gallery_entries = (_data$items$i$media_g = data.items[i].media_gallery_entries) === null || _data$items$i$media_g === void 0 ? void 0 : _data$items$i$media_g.map(function (entry) {
                              entry.url = "".concat(_this2.defaultImagePrefix_).concat(entry.file);
                              return entry;
                            });
                            if ((_data$items$i$extensi = data.items[i].extension_attributes) !== null && _data$items$i$extensi !== void 0 && _data$items$i$extensi.configurable_product_options) {
                              (_data$items$i$extensi2 = data.items[i].extension_attributes) === null || _data$items$i$extensi2 === void 0 ? void 0 : _data$items$i$extensi2.configurable_product_options.forEach(function (option) {
                                var _options$find;
                                option.values = ((_options$find = options.find(function (o) {
                                  return o.attribute_id == option.attribute_id;
                                })) === null || _options$find === void 0 ? void 0 : _options$find.options) || [];
                              });
                            }
                            if (!(type === MagentoProductTypes.SIMPLE)) {
                              _context.next = 16;
                              break;
                            }
                            _context.next = 14;
                            return _this2.retrieveInventoryData(data.items[i].sku);
                          case 14:
                            response = _context.sent;
                            data.items[i].stockData = response.data;
                          case 16:
                            i++;
                            _context.next = 8;
                            break;
                          case 19:
                            return _context.abrupt("return", data.items);
                          case 20:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));
                  return function (_x4) {
                    return _ref2.apply(this, arguments);
                  };
                }()));
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function retrieveProducts(_x, _x2, _x3) {
        return _retrieveProducts.apply(this, arguments);
      }
      return retrieveProducts;
    }()
  }, {
    key: "retrieveProductImages",
    value: function () {
      var _retrieveProductImages = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(items) {
        var _yield$this$sendReque, data;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(!this.defaultStoreId_ || !this.defaultCurrencyCode_)) {
                  _context3.next = 2;
                  break;
                }
                throw new _medusaCoreUtils.MedusaError(_medusaCoreUtils.MedusaError.Types.INVALID_DATA, "Default Store ID and Default Currency Code must be set first.");
              case 2:
                _context3.next = 4;
                return this.sendRequest("/products-render-info?".concat(this.formatSearchCriteriaQuery({
                  currentPage: 1,
                  filterGroups: [[{
                    field: 'entity_id',
                    value: items.map(function (item) {
                      return item.id;
                    }).join(','),
                    condition_type: 'in'
                  }]],
                  storeId: this.defaultStoreId_,
                  currencyCode: this.defaultCurrencyCode_
                })));
              case 4:
                _yield$this$sendReque = _context3.sent;
                data = _yield$this$sendReque.data;
                return _context3.abrupt("return", items.map(function (item) {
                  var itemData = data.items.find(function (i) {
                    return i.id == item.id;
                  });
                  if (itemData) {
                    item.images = itemData.images || [];
                  }
                  return item;
                }));
              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function retrieveProductImages(_x5) {
        return _retrieveProductImages.apply(this, arguments);
      }
      return retrieveProductImages;
    }()
  }, {
    key: "retrieveDefaultConfigs",
    value: function () {
      var _retrieveDefaultConfigs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var _yield$this$sendReque2, data, defaultStore;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this.defaultImagePrefix_) {
                  _context4.next = 2;
                  break;
                }
                return _context4.abrupt("return");
              case 2:
                _context4.next = 4;
                return this.sendRequest("/store/storeConfigs");
              case 4:
                _yield$this$sendReque2 = _context4.sent;
                data = _yield$this$sendReque2.data;
                defaultStore = data.length ? data.find(function (store) {
                  return store.code === 'default';
                }) : data;
                if (!this.defaultImagePrefix_) {
                  this.defaultImagePrefix_ = "".concat(defaultStore.base_media_url, "catalog/product");
                }
              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function retrieveDefaultConfigs() {
        return _retrieveDefaultConfigs.apply(this, arguments);
      }
      return retrieveDefaultConfigs;
    }()
  }, {
    key: "retrieveOptionValues",
    value: function () {
      var _retrieveOptionValues = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(title) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this.sendRequest("/products/attributes/".concat(title)).then(function (_ref3) {
                  var data = _ref3.data;
                  return data.options.filter(function (values) {
                    return values.value.length > 0;
                  });
                }));
              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function retrieveOptionValues(_x6) {
        return _retrieveOptionValues.apply(this, arguments);
      }
      return retrieveOptionValues;
    }()
  }, {
    key: "retrieveOptions",
    value: function () {
      var _retrieveOptions = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var searchCriteria;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                searchCriteria = {
                  currentPage: 1
                };
                return _context6.abrupt("return", this.sendRequest("/products/attributes?".concat(this.formatSearchCriteriaQuery(searchCriteria))).then(function (_ref4) {
                  var data = _ref4.data;
                  return data.items;
                }));
              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function retrieveOptions() {
        return _retrieveOptions.apply(this, arguments);
      }
      return retrieveOptions;
    }()
  }, {
    key: "retrieveInventoryData",
    value: function () {
      var _retrieveInventoryData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(sku) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.sendRequest("/stockItems/".concat(sku)));
              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
      function retrieveInventoryData(_x7) {
        return _retrieveInventoryData.apply(this, arguments);
      }
      return retrieveInventoryData;
    }()
  }, {
    key: "retrieveSimpleProductsAsVariants",
    value: function () {
      var _retrieveSimpleProductsAsVariants = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(productIds) {
        var _this3 = this;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.retrieveProducts(MagentoProductTypes.SIMPLE, null, [[{
                  field: 'entity_id',
                  value: productIds.join(','),
                  condition_type: 'in'
                }]]).then( /*#__PURE__*/function () {
                  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(products) {
                    return _regenerator["default"].wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            _context9.next = 2;
                            return Promise.all(products.map( /*#__PURE__*/function () {
                              var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(variant) {
                                var _yield$_this3$retriev, data;
                                return _regenerator["default"].wrap(function _callee8$(_context8) {
                                  while (1) {
                                    switch (_context8.prev = _context8.next) {
                                      case 0:
                                        _context8.next = 2;
                                        return _this3.retrieveInventoryData(variant.sku);
                                      case 2:
                                        _yield$_this3$retriev = _context8.sent;
                                        data = _yield$_this3$retriev.data;
                                        return _context8.abrupt("return", _objectSpread(_objectSpread({}, variant), {}, {
                                          stockData: data
                                        }));
                                      case 5:
                                      case "end":
                                        return _context8.stop();
                                    }
                                  }
                                }, _callee8);
                              }));
                              return function (_x10) {
                                return _ref6.apply(this, arguments);
                              };
                            }()));
                          case 2:
                            return _context9.abrupt("return", _context9.sent);
                          case 3:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));
                  return function (_x9) {
                    return _ref5.apply(this, arguments);
                  };
                }()));
              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
      function retrieveSimpleProductsAsVariants(_x8) {
        return _retrieveSimpleProductsAsVariants.apply(this, arguments);
      }
      return retrieveSimpleProductsAsVariants;
    }()
  }, {
    key: "retrieveCategories",
    value: function () {
      var _retrieveCategories = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(lastUpdatedTime) {
        var searchCriteria;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                searchCriteria = {
                  currentPage: 1,
                  filterGroups: [[{
                    field: 'name',
                    value: 'Root Catalog,Default Category',
                    condition_type: 'nin'
                  }]]
                };
                if (lastUpdatedTime) {
                  searchCriteria.filterGroups.push([{
                    field: 'updated_at',
                    value: lastUpdatedTime,
                    condition_type: 'gt'
                  }]);
                }
                return _context11.abrupt("return", this.sendRequest("/categories/list?".concat(this.formatSearchCriteriaQuery(searchCriteria))));
              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
      function retrieveCategories(_x11) {
        return _retrieveCategories.apply(this, arguments);
      }
      return retrieveCategories;
    }()
  }, {
    key: "sendRequest",
    value: function () {
      var _sendRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(path) {
        var method,
          data,
          _args12 = arguments;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                method = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : 'GET';
                data = _args12.length > 2 ? _args12[2] : undefined;
                return _context12.abrupt("return", this.client_.request({
                  url: "".concat(this.apiBaseUrl_).concat(path),
                  method: method,
                  data: data
                }));
              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
      function sendRequest(_x12) {
        return _sendRequest.apply(this, arguments);
      }
      return sendRequest;
    }()
  }, {
    key: "formatSearchCriteriaQuery",
    value: function formatSearchCriteriaQuery(searchCriteria) {
      var _searchCriteria$filte;
      var query = "searchCriteria[currentPage]=".concat(searchCriteria.currentPage);
      if ((_searchCriteria$filte = searchCriteria.filterGroups) !== null && _searchCriteria$filte !== void 0 && _searchCriteria$filte.length) {
        searchCriteria.filterGroups.map(function (filterGroup, index) {
          filterGroup.map(function (filter, filterIndex) {
            query += "&searchCriteria[filterGroups][".concat(index, "][filters][").concat(filterIndex, "][field]=").concat(filter.field, "&searchCriteria[filterGroups][").concat(index, "][filters][").concat(filterIndex, "][value]=").concat(filter.value, "&searchCriteria[filterGroups][").concat(index, "][filters][").concat(filterIndex, "][condition_type]=").concat(filter.condition_type);
          });
        });
      }
      if (searchCriteria.storeId) {
        query += "&storeId=".concat(searchCriteria.storeId);
      }
      if (searchCriteria.currencyCode) {
        query += "&currencyCode=".concat(searchCriteria.currencyCode);
      }
      return query;
    }
  }]);
  return MagentoClientService;
}(_medusa.TransactionBaseService);
var _default = MagentoClientService;
exports["default"] = _default;