"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
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
var _medusa = require("@medusajs/medusa");
var _fastXmlParser = require("fast-xml-parser");
var _urlExistsDeep = _interopRequireDefault(require("url-exists-deep"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var PrestashopClientService = /*#__PURE__*/function (_TransactionBaseServi) {
  (0, _inherits2["default"])(PrestashopClientService, _TransactionBaseServi);
  var _super = _createSuper(PrestashopClientService);
  function PrestashopClientService(container, options) {
    var _this;
    (0, _classCallCheck2["default"])(this, PrestashopClientService);
    _this = _super.call(this, container);
    _this.manager_ = container.manager;
    _this.logger_ = container.logger;
    _this.options_ = options;
    _this.apiBaseUrl_ = "".concat(options.prestashop_url);
    _this.endUrl = "/&ws_key=" + options.consumer_key + "&output_format=JSON";
    _this.endUrlXML = "/&ws_key=" + options.consumer_key;

    // https://farmaciapaseo51.com/api/products/1360/&ws_key=FZQX58LATQZGXAEVUTU4PMSNVT19QASS&output_format=JSON

    _this.client_ = _axios["default"].create({
      headers: {
        Accept: "application/json"
      }
    });

    // addOAuthInterceptor(this.client_, {
    //   algorithm: 'HMAC-SHA256',
    //   key: options.consumer_key,
    //   secret: options.consumer_secret,
    //   token: options.access_token,
    //   tokenSecret: options.access_token_secret
    // });

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
  (0, _createClass2["default"])(PrestashopClientService, [{
    key: "retrieveProducts",
    value: function () {
      var _retrieveProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.sendRequest("/products/" + this.endUrl));
              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function retrieveProducts() {
        return _retrieveProducts.apply(this, arguments);
      }
      return retrieveProducts;
    }()
  }, {
    key: "downloadFile",
    value: function () {
      var _downloadFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(url2) {
        var url;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = url2 + this.endUrlXML;
                return _context2.abrupt("return", (0, _axios["default"])({
                  url: url,
                  responseType: "arraybuffer"
                }).then(function (res) {
                  return res.data;
                }));
              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function downloadFile(_x) {
        return _downloadFile.apply(this, arguments);
      }
      return downloadFile;
    }() // downloadFile = (url) =>
    // axios({ url, responseType: "arraybuffer" }).then((res) => res.data);
  }, {
    key: "retrieveImages",
    value: function () {
      var _retrieveImages = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(productId) {
        var imagesId, options, parser, images, imagesTemp;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.sendRequest("/images/products/" + productId + this.endUrlXML);
              case 3:
                imagesId = _context3.sent;
                options = {
                  ignoreAttributes: false,
                  attributeNamePrefix: "",
                  removeNSPrefix: true
                };
                parser = new _fastXmlParser.XMLParser(options);
                _context3.next = 8;
                return parser.parse(imagesId.data);
              case 8:
                images = _context3.sent;
                imagesTemp = [];
                if (images.prestashop.image.declination.length) {
                  images.prestashop.image.declination.forEach(function (element) {
                    imagesTemp.push(element);
                  });
                } else {
                  imagesTemp.push(images.prestashop.image.declination);
                }
                return _context3.abrupt("return", imagesTemp);
              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);
              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 14]]);
      }));
      function retrieveImages(_x2) {
        return _retrieveImages.apply(this, arguments);
      }
      return retrieveImages;
    }()
  }, {
    key: "retrieveProduct",
    value: function () {
      var _retrieveProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(productId) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.sendRequest("/products/" + productId + this.endUrl));
              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function retrieveProduct(_x3) {
        return _retrieveProduct.apply(this, arguments);
      }
      return retrieveProduct;
    }()
  }, {
    key: "retrieveProductImages",
    value: function () {
      var _retrieveProductImages = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(items) {
        var _yield$this$sendReque, data;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(!this.defaultStoreId_ || !this.defaultCurrencyCode_)) {
                  _context5.next = 2;
                  break;
                }
                throw new _medusaCoreUtils.MedusaError(_medusaCoreUtils.MedusaError.Types.INVALID_DATA, "Default Store ID and Default Currency Code must be set first.");
              case 2:
                _context5.next = 4;
                return this.sendRequest("/products-render-info?".concat(this.formatSearchCriteriaQuery({
                  currentPage: 1,
                  filterGroups: [[{
                    field: "entity_id",
                    value: items.map(function (item) {
                      return item.id;
                    }).join(","),
                    condition_type: "in"
                  }]],
                  storeId: this.defaultStoreId_,
                  currencyCode: this.defaultCurrencyCode_
                })));
              case 4:
                _yield$this$sendReque = _context5.sent;
                data = _yield$this$sendReque.data;
                return _context5.abrupt("return", items.map(function (item) {
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
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function retrieveProductImages(_x4) {
        return _retrieveProductImages.apply(this, arguments);
      }
      return retrieveProductImages;
    }()
  }, {
    key: "retrieveDefaultConfigs",
    value: function () {
      var _retrieveDefaultConfigs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var _yield$this$sendReque2, data, defaultStore;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!this.defaultImagePrefix_) {
                  _context6.next = 2;
                  break;
                }
                return _context6.abrupt("return");
              case 2:
                _context6.next = 4;
                return this.sendRequest("/store/storeConfigs");
              case 4:
                _yield$this$sendReque2 = _context6.sent;
                data = _yield$this$sendReque2.data;
                defaultStore = data.length ? data.find(function (store) {
                  return store.code === "default";
                }) : data;
                if (!this.defaultImagePrefix_) {
                  this.defaultImagePrefix_ = "".concat(defaultStore.base_media_url, "catalog/product");
                }
              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function retrieveDefaultConfigs() {
        return _retrieveDefaultConfigs.apply(this, arguments);
      }
      return retrieveDefaultConfigs;
    }() // async retrieveOptionValues(title: string): Promise<Record<string, any>[]> {
    //   return this.sendRequest(`/products/attributes/${title}`).then(
    //     ({ data }) => {
    //       return data.options.filter((values) => values.value.length > 0);
    //     }
    //   );
    // }
    // async retrieveOptions(): Promise<Record<string, any>[]> {
    //   const searchCriteria: SearchCriteria = {
    //     currentPage: 1,
    //   };
    //   return this.sendRequest(
    //     `/products/attributes?${this.formatSearchCriteriaQuery(searchCriteria)}`
    //   ).then(({ data }) => {
    //     return data.items;
    //   });
    // }
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
      function retrieveInventoryData(_x5) {
        return _retrieveInventoryData.apply(this, arguments);
      }
      return retrieveInventoryData;
    }()
  }, {
    key: "retrieveSimpleProductsAsVariants",
    value: function () {
      var _retrieveSimpleProductsAsVariants = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(productIds) {
        var _this2 = this;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.retrieveProducts().then( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(products) {
                    return _regenerator["default"].wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            _context9.next = 2;
                            return Promise.all(products.map( /*#__PURE__*/function () {
                              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(variant) {
                                var _yield$_this2$retriev, data;
                                return _regenerator["default"].wrap(function _callee8$(_context8) {
                                  while (1) {
                                    switch (_context8.prev = _context8.next) {
                                      case 0:
                                        _context8.next = 2;
                                        return _this2.retrieveInventoryData(variant.sku);
                                      case 2:
                                        _yield$_this2$retriev = _context8.sent;
                                        data = _yield$_this2$retriev.data;
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
                              return function (_x8) {
                                return _ref2.apply(this, arguments);
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
                  return function (_x7) {
                    return _ref.apply(this, arguments);
                  };
                }()));
              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
      function retrieveSimpleProductsAsVariants(_x6) {
        return _retrieveSimpleProductsAsVariants.apply(this, arguments);
      }
      return retrieveSimpleProductsAsVariants;
    }() //https://farmaciapaseo51.com/api/products/1360/&ws_key=FZQX58LATQZGXAEVUTU4PMSNVT19QASS&output_format=JSON
  }, {
    key: "retrieveCategories",
    value: function () {
      var _retrieveCategories = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(lastUpdatedTime) {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt("return", this.sendRequest("/categories/" + this.endUrl));
              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
      function retrieveCategories(_x9) {
        return _retrieveCategories.apply(this, arguments);
      }
      return retrieveCategories;
    }()
  }, {
    key: "retrieveOptionsDefaults",
    value: function () {
      var _retrieveOptionsDefaults = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12() {
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", this.sendRequest("/product_options/" + this.endUrl));
              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
      function retrieveOptionsDefaults() {
        return _retrieveOptionsDefaults.apply(this, arguments);
      }
      return retrieveOptionsDefaults;
    }()
  }, {
    key: "retrieveOptionsValues",
    value: function () {
      var _retrieveOptionsValues = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13() {
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt("return", this.sendRequest("/product_option_values/" + this.endUrl));
              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
      function retrieveOptionsValues() {
        return _retrieveOptionsValues.apply(this, arguments);
      }
      return retrieveOptionsValues;
    }()
  }, {
    key: "retrieveOptionValues",
    value: function () {
      var _retrieveOptionValues = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(optionId) {
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", this.sendRequest("/product_option_values/" + optionId + this.endUrl));
              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
      function retrieveOptionValues(_x10) {
        return _retrieveOptionValues.apply(this, arguments);
      }
      return retrieveOptionValues;
    }()
  }, {
    key: "retrieveStockValues",
    value: function () {
      var _retrieveStockValues = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(stockId) {
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                return _context15.abrupt("return", this.sendRequest("/stock_availables/" + stockId + this.endUrl));
              case 1:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
      function retrieveStockValues(_x11) {
        return _retrieveStockValues.apply(this, arguments);
      }
      return retrieveStockValues;
    }()
  }, {
    key: "retrieveCombinationValues",
    value: function () {
      var _retrieveCombinationValues = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(combinationId) {
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                return _context16.abrupt("return", this.sendRequest("/combinations/" + combinationId + this.endUrl));
              case 1:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));
      function retrieveCombinationValues(_x12) {
        return _retrieveCombinationValues.apply(this, arguments);
      }
      return retrieveCombinationValues;
    }()
  }, {
    key: "retrieveOption",
    value: function () {
      var _retrieveOption = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(optionId) {
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                return _context17.abrupt("return", this.sendRequest("/product_options/" + optionId + this.endUrl));
              case 1:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));
      function retrieveOption(_x13) {
        return _retrieveOption.apply(this, arguments);
      }
      return retrieveOption;
    }()
  }, {
    key: "retrieveCategory",
    value: function () {
      var _retrieveCategory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(categoryID) {
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                return _context18.abrupt("return", this.sendRequest("/categories/" + categoryID + this.endUrl));
              case 1:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));
      function retrieveCategory(_x14) {
        return _retrieveCategory.apply(this, arguments);
      }
      return retrieveCategory;
    }()
  }, {
    key: "sendRequest",
    value: function () {
      var _sendRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(path) {
        var method,
          data,
          url,
          exists,
          _args19 = arguments;
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                method = _args19.length > 1 && _args19[1] !== undefined ? _args19[1] : "GET";
                data = _args19.length > 2 ? _args19[2] : undefined;
                url = "".concat(this.apiBaseUrl_).concat(path);
                _context19.next = 5;
                return (0, _urlExistsDeep["default"])(url);
              case 5:
                exists = _context19.sent;
                if (!exists) {
                  _context19.next = 10;
                  break;
                }
                return _context19.abrupt("return", this.client_.request({
                  url: "".concat(this.apiBaseUrl_).concat(path),
                  method: method,
                  data: data
                }));
              case 10:
                return _context19.abrupt("return", null);
              case 11:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));
      function sendRequest(_x15) {
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
  return PrestashopClientService;
}(_medusa.TransactionBaseService);
var _default = PrestashopClientService;
exports["default"] = _default;