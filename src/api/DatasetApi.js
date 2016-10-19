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
    define(['ApiClient', 'model/DataSet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DataSet'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.DatasetApi = factory(root.MimirDataHubApi.ApiClient, root.MimirDataHubApi.DataSet);
  }
}(this, function(ApiClient, DataSet) {
  'use strict';

  /**
   * Dataset service.
   * @module api/DatasetApi
   * @version 0.0.5
   */

  /**
   * Constructs a new DatasetApi. 
   * @alias module:api/DatasetApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addDataSet operation.
     * @callback module:api/DatasetApi~addDataSetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new data set, associated with the given user id
     * This creates a new data set that can then be added to 
     * @param {String} userId The id of the user that this dataset is associated with
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The user api key
     * @param {module:model/DataSet} opts.body DataSet object that defines the element
     * @param {module:api/DatasetApi~addDataSetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addDataSet = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling addDataSet";
      }


      var pathParams = {
        'userId': userId
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
        '/datasets/{userId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the datasetsUserIdDataSetDelete operation.
     * @callback module:api/DatasetApi~datasetsUserIdDataSetDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a data set and all releases and elements
     * 
     * @param {String} userId The id of the user owning this dataset
     * @param {String} dataSet The id of the dataset
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The user api key
     * @param {module:api/DatasetApi~datasetsUserIdDataSetDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.datasetsUserIdDataSetDelete = function(userId, dataSet, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling datasetsUserIdDataSetDelete";
      }

      // verify the required parameter 'dataSet' is set
      if (dataSet == undefined || dataSet == null) {
        throw "Missing the required parameter 'dataSet' when calling datasetsUserIdDataSetDelete";
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
      var contentTypes = [];
      var accepts = ['application/json', 'application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/datasets/{userId}/{dataSet}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findDataSetsByTags operation.
     * @callback module:api/DatasetApi~findDataSetsByTagsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DataSet>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The user api key
     * @param {Array.<String>} opts.tags Tags to filter by
     * @param {Integer} opts.page Page to return (defaults to zero)
     * @param {module:api/DatasetApi~findDataSetsByTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DataSet>}
     */
    this.findDataSetsByTags = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'tags': this.apiClient.buildCollectionParam(opts['tags'], 'multi'),
        'page': opts['page']
      };
      var headerParams = {
        'api_key': opts['apiKey']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [DataSet];

      return this.apiClient.callApi(
        '/marketplace/getByTag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findUserDataSets operation.
     * @callback module:api/DatasetApi~findUserDataSetsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DataSet>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The user api key
     * @param {Array.<String>} opts.tags Tags to filter by
     * @param {Integer} opts.page Page to return (defaults to zero)
     * @param {Boolean} opts.subscribed If true, also return subscribed data sets
     * @param {module:api/DatasetApi~findUserDataSetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DataSet>}
     */
    this.findUserDataSets = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'tags': this.apiClient.buildCollectionParam(opts['tags'], 'multi'),
        'page': opts['page'],
        'subscribed': opts['subscribed']
      };
      var headerParams = {
        'api_key': opts['apiKey']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [DataSet];

      return this.apiClient.callApi(
        '/user/getDataSets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDataSetById operation.
     * @callback module:api/DatasetApi~getDataSetByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataSet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find a dataset for a user and a dataset
     * Returns a data set
     * @param {String} userId The id of the user owning this dataset
     * @param {String} dataSet The id of the dataset
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The user api key
     * @param {module:api/DatasetApi~getDataSetByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DataSet}
     */
    this.getDataSetById = function(userId, dataSet, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling getDataSetById";
      }

      // verify the required parameter 'dataSet' is set
      if (dataSet == undefined || dataSet == null) {
        throw "Missing the required parameter 'dataSet' when calling getDataSetById";
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DataSet;

      return this.apiClient.callApi(
        '/datasets/{userId}/{dataSet}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDataSet operation.
     * @callback module:api/DatasetApi~updateDataSetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing data set.
     * 
     * @param {String} userId The id of the user that this dataset is associated with
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The user api key
     * @param {module:model/DataSet} opts.body DataSet object that defines the element
     * @param {module:api/DatasetApi~updateDataSetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateDataSet = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling updateDataSet";
      }


      var pathParams = {
        'userId': userId
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
        '/datasets/{userId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));