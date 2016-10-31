(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/KVBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/KVBody'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.DataApi = factory(root.MimirDataHubApi.ApiClient, root.MimirDataHubApi.KVBody);
  }
}(this, function(ApiClient, KVBody) {
  'use strict';

  /**
   * Data service.
   * @module api/DataApi
   * @version 0.0.10
   */

  /**
   * Constructs a new DataApi. 
   * @alias module:api/DataApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCSVData operation.
     * @callback module:api/DataApi~getCSVDataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a block of CSV data
     * @param {String} apiKey The user api key
     * @param {String} owner The owner of the data element
     * @param {String} dataset The name of the data set
     * @param {String} release The name of the release
     * @param {String} element The element name
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.withHeader Whether to include headers (row 0)
     * @param {Integer} opts.skip which page to show
     * @param {Integer} opts.limit How many records to return
     * @param {module:api/DataApi~getCSVDataCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getCSVData = function(apiKey, owner, dataset, release, element, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling getCSVData";
      }

      // verify the required parameter 'owner' is set
      if (owner == undefined || owner == null) {
        throw "Missing the required parameter 'owner' when calling getCSVData";
      }

      // verify the required parameter 'dataset' is set
      if (dataset == undefined || dataset == null) {
        throw "Missing the required parameter 'dataset' when calling getCSVData";
      }

      // verify the required parameter 'release' is set
      if (release == undefined || release == null) {
        throw "Missing the required parameter 'release' when calling getCSVData";
      }

      // verify the required parameter 'element' is set
      if (element == undefined || element == null) {
        throw "Missing the required parameter 'element' when calling getCSVData";
      }


      var pathParams = {
        'owner': owner,
        'dataset': dataset,
        'release': release,
        'element': element
      };
      var queryParams = {
        'withHeader': opts['withHeader'],
        'skip': opts['skip'],
        'limit': opts['limit']
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain'];
      var returnType = null;

      return this.apiClient.callApi(
        '/data/{owner}/{dataset}/{release}/{element}/getCSVBlock', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putCSVData operation.
     * @callback module:api/DataApi~putCSVDataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Writes a block of CSV data
     * @param {String} apiKey The user api key
     * @param {String} owner The owner of the data element
     * @param {String} dataset The name of the data set
     * @param {String} release The name of the release
     * @param {String} element The element name
     * @param {String} data The CSV data to write
     * @param {module:api/DataApi~putCSVDataCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putCSVData = function(apiKey, owner, dataset, release, element, data, callback) {
      var postBody = data;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling putCSVData";
      }

      // verify the required parameter 'owner' is set
      if (owner == undefined || owner == null) {
        throw "Missing the required parameter 'owner' when calling putCSVData";
      }

      // verify the required parameter 'dataset' is set
      if (dataset == undefined || dataset == null) {
        throw "Missing the required parameter 'dataset' when calling putCSVData";
      }

      // verify the required parameter 'release' is set
      if (release == undefined || release == null) {
        throw "Missing the required parameter 'release' when calling putCSVData";
      }

      // verify the required parameter 'element' is set
      if (element == undefined || element == null) {
        throw "Missing the required parameter 'element' when calling putCSVData";
      }

      // verify the required parameter 'data' is set
      if (data == undefined || data == null) {
        throw "Missing the required parameter 'data' when calling putCSVData";
      }


      var pathParams = {
        'owner': owner,
        'dataset': dataset,
        'release': release,
        'element': element
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['text/plain'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/data/{owner}/{dataset}/{release}/{element}/csv', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putKVData operation.
     * @callback module:api/DataApi~putKVDataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Writes a block of key/value style data
     * @param {String} apiKey The user api key
     * @param {String} owner The owner of the data element
     * @param {String} dataset The name of the data set
     * @param {String} release The name of the release
     * @param {String} element The element name
     * @param {module:model/KVBody} fields 
     * @param {module:api/DataApi~putKVDataCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putKVData = function(apiKey, owner, dataset, release, element, fields, callback) {
      var postBody = fields;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling putKVData";
      }

      // verify the required parameter 'owner' is set
      if (owner == undefined || owner == null) {
        throw "Missing the required parameter 'owner' when calling putKVData";
      }

      // verify the required parameter 'dataset' is set
      if (dataset == undefined || dataset == null) {
        throw "Missing the required parameter 'dataset' when calling putKVData";
      }

      // verify the required parameter 'release' is set
      if (release == undefined || release == null) {
        throw "Missing the required parameter 'release' when calling putKVData";
      }

      // verify the required parameter 'element' is set
      if (element == undefined || element == null) {
        throw "Missing the required parameter 'element' when calling putKVData";
      }

      // verify the required parameter 'fields' is set
      if (fields == undefined || fields == null) {
        throw "Missing the required parameter 'fields' when calling putKVData";
      }


      var pathParams = {
        'owner': owner,
        'dataset': dataset,
        'release': release,
        'element': element
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/data/{owner}/{dataset}/{release}/{element}/kv', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
