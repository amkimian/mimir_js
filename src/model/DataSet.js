(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PriceInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PriceInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.DataSet = factory(root.MimirDataHubApi.ApiClient, root.MimirDataHubApi.PriceInfo);
  }
}(this, function(ApiClient, PriceInfo) {
  'use strict';

  /**
   * The DataSet model module.
   * @module model/DataSet
   * @version 0.0.10
   */

  /**
   * Constructs a new <code>DataSet</code>.
   * @alias module:model/DataSet
   * @class
   */
  var exports = function() {










  };

  /**
   * Constructs a <code>DataSet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataSet} obj Optional instance to populate.
   * @return {module:model/DataSet} The populated <code>DataSet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
      }
      if (data.hasOwnProperty('open')) {
        obj['open'] = ApiClient.convertToType(data['open'], 'Boolean');
      }
      if (data.hasOwnProperty('relatedDataSets')) {
        obj['relatedDataSets'] = ApiClient.convertToType(data['relatedDataSets'], ['String']);
      }
      if (data.hasOwnProperty('sampleRelease')) {
        obj['sampleRelease'] = ApiClient.convertToType(data['sampleRelease'], 'String');
      }
      if (data.hasOwnProperty('sampleElement')) {
        obj['sampleElement'] = ApiClient.convertToType(data['sampleElement'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = PriceInfo.constructFromObject(data['price']);
      }
    }
    return obj;
  }


  /**
   * A short name for this dataset
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * @member {String} owner
   */
  exports.prototype['owner'] = undefined;

  /**
   * @member {Boolean} open
   */
  exports.prototype['open'] = undefined;

  /**
   * @member {Array.<String>} relatedDataSets
   */
  exports.prototype['relatedDataSets'] = undefined;

  /**
   * The id of a release that contains a sample of this data set
   * @member {String} sampleRelease
   */
  exports.prototype['sampleRelease'] = undefined;

  /**
   * The id of an element in that release that contains the data for a sample
   * @member {String} sampleElement
   */
  exports.prototype['sampleElement'] = undefined;

  /**
   * Searchable terms for this data set
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;

  /**
   * @member {module:model/PriceInfo} price
   */
  exports.prototype['price'] = undefined;




  return exports;
}));
