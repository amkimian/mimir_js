/**
 * Mimir DataHub API
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.5
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.DataElement = factory(root.MimirDataHubApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DataElement model module.
   * @module model/DataElement
   * @version 0.0.5
   */

  /**
   * Constructs a new <code>DataElement</code>.
   * @alias module:model/DataElement
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>DataElement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataElement} obj Optional instance to populate.
   * @return {module:model/DataElement} The populated <code>DataElement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('dataset')) {
        obj['dataset'] = ApiClient.convertToType(data['dataset'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'String');
      }
      if (data.hasOwnProperty('release')) {
        obj['release'] = ApiClient.convertToType(data['release'], 'String');
      }
      if (data.hasOwnProperty('mimeType')) {
        obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
      }
      if (data.hasOwnProperty('schema')) {
        obj['schema'] = ApiClient.convertToType(data['schema'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
    }
    return obj;
  }

  /**
   * The id of this data element
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The data set this element relates to
   * @member {String} dataset
   */
  exports.prototype['dataset'] = undefined;
  /**
   * The user this element relates to
   * @member {String} user
   */
  exports.prototype['user'] = undefined;
  /**
   * The release this element relates to
   * @member {String} release
   */
  exports.prototype['release'] = undefined;
  /**
   * The mime type of the data element
   * @member {String} mimeType
   */
  exports.prototype['mimeType'] = undefined;
  /**
   * The underlying format of the data
   * @member {String} schema
   */
  exports.prototype['schema'] = undefined;
  /**
   * The state of this element (is it published?)
   * @member {String} state
   */
  exports.prototype['state'] = undefined;



  return exports;
}));


