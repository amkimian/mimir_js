(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.DataElementDisplayInfo = factory(root.MimirDataHubApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DataElementDisplayInfo model module.
   * @module model/DataElementDisplayInfo
   * @version 0.0.10
   */

  /**
   * Constructs a new <code>DataElementDisplayInfo</code>.
   * @alias module:model/DataElementDisplayInfo
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>DataElementDisplayInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataElementDisplayInfo} obj Optional instance to populate.
   * @return {module:model/DataElementDisplayInfo} The populated <code>DataElementDisplayInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('chartTitle')) {
        obj['chartTitle'] = ApiClient.convertToType(data['chartTitle'], 'String');
      }
      if (data.hasOwnProperty('chartType')) {
        obj['chartType'] = ApiClient.convertToType(data['chartType'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} chartTitle
   */
  exports.prototype['chartTitle'] = undefined;

  /**
   * @member {String} chartType
   */
  exports.prototype['chartType'] = undefined;




  return exports;
}));
