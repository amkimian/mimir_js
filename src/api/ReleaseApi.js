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
    define(['ApiClient', 'model/DataSetRelease'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DataSetRelease'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.ReleaseApi = factory(root.MimirDataHubApi.ApiClient, root.MimirDataHubApi.DataSetRelease);
  }
}(this, function(ApiClient, DataSetRelease) {
  'use strict';

  /**
   * Release service.
   * @module api/ReleaseApi
   * @version 0.0.5
   */

  /**
   * Constructs a new ReleaseApi. 
   * @alias module:api/ReleaseApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addRelease operation.
     * @callback module:api/ReleaseApi~addReleaseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new open release
     * This creates a new release in a data set. The release defaults to the open (and therefore unpublished) state. 
     * @param {String} userId The id of the user that this dataset is associated with
     * @param {String} dataSet The id of the data set
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The user api key
     * @param {module:model/DataSetRelease} opts.body Release object that defines the element in a data set
     * @param {module:api/ReleaseApi~addReleaseCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addRelease = function(userId, dataSet, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling addRelease";
      }

      // verify the required parameter 'dataSet' is set
      if (dataSet == undefined || dataSet == null) {
        throw "Missing the required parameter 'dataSet' when calling addRelease";
      }


      var pathParams = {
        'userId': userId,
        'dataSet': dataSet
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': opts['apiKey']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/releases/{userId}/{dataSet}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRelease operation.
     * @callback module:api/ReleaseApi~deleteReleaseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get release information
     * This returns information about a release 
     * @param {String} userId The id of the user that this dataset is associated with
     * @param {String} dataSet The id of the data set
     * @param {String} release The id of the release
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The user api key
     * @param {module:api/ReleaseApi~deleteReleaseCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteRelease = function(userId, dataSet, release, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteRelease";
      }

      // verify the required parameter 'dataSet' is set
      if (dataSet == undefined || dataSet == null) {
        throw "Missing the required parameter 'dataSet' when calling deleteRelease";
      }

      // verify the required parameter 'release' is set
      if (release == undefined || release == null) {
        throw "Missing the required parameter 'release' when calling deleteRelease";
      }


      var pathParams = {
        'userId': userId,
        'dataSet': dataSet,
        'release': release
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': opts['apiKey']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/releases/{userId}/{dataSet}/{release}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRelease operation.
     * @callback module:api/ReleaseApi~getReleaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataSetRelease} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get release information
     * This returns information about a release 
     * @param {String} userId The id of the user that this dataset is associated with
     * @param {String} dataSet The id of the data set
     * @param {String} release The id of the release
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The user api key
     * @param {module:api/ReleaseApi~getReleaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DataSetRelease}
     */
    this.getRelease = function(userId, dataSet, release, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling getRelease";
      }

      // verify the required parameter 'dataSet' is set
      if (dataSet == undefined || dataSet == null) {
        throw "Missing the required parameter 'dataSet' when calling getRelease";
      }

      // verify the required parameter 'release' is set
      if (release == undefined || release == null) {
        throw "Missing the required parameter 'release' when calling getRelease";
      }


      var pathParams = {
        'userId': userId,
        'dataSet': dataSet,
        'release': release
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': opts['apiKey']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DataSetRelease;

      return this.apiClient.callApi(
        '/releases/{userId}/{dataSet}/{release}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));