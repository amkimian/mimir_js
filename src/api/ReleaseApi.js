(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/DataSetRelease'], factory);
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
   * @version 0.0.10
   */

  /**
   * Constructs a new ReleaseApi. 
   * @alias module:api/ReleaseApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
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
     * This creates a new release in a data set. The release defaults\nto the open (and therefore unpublished) state.\n
     * @param {String} userId The id of the user that this dataset is associated with
     * @param {String} dataSet The id of the data set
     * @param {module:model/DataSetRelease} body Release object that defines the element in a data set
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The user api key
     * @param {module:api/ReleaseApi~addReleaseCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addRelease = function(userId, dataSet, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling addRelease";
      }

      // verify the required parameter 'dataSet' is set
      if (dataSet == undefined || dataSet == null) {
        throw "Missing the required parameter 'dataSet' when calling addRelease";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling addRelease";
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
     * This returns information about a release\n
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
     * This returns information about a release\n
     * @param {String} userId The id of the user that this dataset is associated with
     * @param {String} dataSet The id of the data set
     * @param {String} release The id of the release
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The user api key
     * @param {module:api/ReleaseApi~getReleaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DataSetRelease}
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

    /**
     * Callback function to receive the result of the publishRelease operation.
     * @callback module:api/ReleaseApi~publishReleaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataSetRelease} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Publish a release
     * This marks a release as published\n
     * @param {String} apiKey The user api key
     * @param {String} userId The id of the user that this dataset is associated with
     * @param {String} dataSet The id of the data set
     * @param {String} release The id of the release
     * @param {module:api/ReleaseApi~publishReleaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DataSetRelease}
     */
    this.publishRelease = function(apiKey, userId, dataSet, release, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling publishRelease";
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling publishRelease";
      }

      // verify the required parameter 'dataSet' is set
      if (dataSet == undefined || dataSet == null) {
        throw "Missing the required parameter 'dataSet' when calling publishRelease";
      }

      // verify the required parameter 'release' is set
      if (release == undefined || release == null) {
        throw "Missing the required parameter 'release' when calling publishRelease";
      }


      var pathParams = {
        'userId': userId,
        'dataSet': dataSet,
        'release': release
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
      var accepts = ['application/json'];
      var returnType = DataSetRelease;

      return this.apiClient.callApi(
        '/release/publish/{userId}/{dataSet}/{release}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
