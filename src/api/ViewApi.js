(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/DataSetRelease', '../model/DataElement', '../model/Subscription', '../model/DataSetView'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DataSetRelease'), require('../model/DataElement'), require('../model/Subscription'), require('../model/DataSetView'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.ViewApi = factory(root.MimirDataHubApi.ApiClient, root.MimirDataHubApi.DataSetRelease, root.MimirDataHubApi.DataElement, root.MimirDataHubApi.Subscription, root.MimirDataHubApi.DataSetView);
  }
}(this, function(ApiClient, DataSetRelease, DataElement, Subscription, DataSetView) {
  'use strict';

  /**
   * View service.
   * @module api/ViewApi
   * @version 0.0.10
   */

  /**
   * Constructs a new ViewApi. 
   * @alias module:api/ViewApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getDataSetReleases operation.
     * @callback module:api/ViewApi~getDataSetReleasesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DataSetRelease>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns releases for a given data set
     * @param {String} apiKey The user api key
     * @param {String} userId The user id that owns the data set
     * @param {String} dataset The id of the data set
     * @param {module:api/ViewApi~getDataSetReleasesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/DataSetRelease>}
     */
    this.getDataSetReleases = function(apiKey, userId, dataset, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling getDataSetReleases";
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling getDataSetReleases";
      }

      // verify the required parameter 'dataset' is set
      if (dataset == undefined || dataset == null) {
        throw "Missing the required parameter 'dataset' when calling getDataSetReleases";
      }


      var pathParams = {
        'userId': userId,
        'dataset': dataset
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
      var returnType = [DataSetRelease];

      return this.apiClient.callApi(
        '/view/releases/{userId}/{dataset}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReleaseElements operation.
     * @callback module:api/ViewApi~getReleaseElementsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DataElement>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the element information for a given release
     * @param {String} apiKey The user api key
     * @param {String} userId 
     * @param {String} dataset 
     * @param {String} release 
     * @param {module:api/ViewApi~getReleaseElementsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/DataElement>}
     */
    this.getReleaseElements = function(apiKey, userId, dataset, release, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling getReleaseElements";
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling getReleaseElements";
      }

      // verify the required parameter 'dataset' is set
      if (dataset == undefined || dataset == null) {
        throw "Missing the required parameter 'dataset' when calling getReleaseElements";
      }

      // verify the required parameter 'release' is set
      if (release == undefined || release == null) {
        throw "Missing the required parameter 'release' when calling getReleaseElements";
      }


      var pathParams = {
        'userId': userId,
        'dataset': dataset,
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
      var returnType = [DataElement];

      return this.apiClient.callApi(
        '/view/elements/{userId}/{dataset}/{release}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserSubscriptions operation.
     * @callback module:api/ViewApi~getUserSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Subscription>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} apiKey The user api key
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page The page of results to return
     * @param {module:api/ViewApi~getUserSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Subscription>}
     */
    this.getUserSubscriptions = function(apiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling getUserSubscriptions";
      }


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page']
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Subscription];

      return this.apiClient.callApi(
        '/view/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserViews operation.
     * @callback module:api/ViewApi~getUserViewsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DataSetView>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns view information for datasets of a user
     * @param {String} apiKey The user api key
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page The page of results to return
     * @param {module:api/ViewApi~getUserViewsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/DataSetView>}
     */
    this.getUserViews = function(apiKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling getUserViews";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': apiKey,
        'page': opts['page']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [DataSetView];

      return this.apiClient.callApi(
        '/view/getUserViews', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
