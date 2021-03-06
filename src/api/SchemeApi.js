/**
 * DataHub API
 * DataHub API
 *
 * OpenAPI spec version: 0.0.11
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
    define(['ApiClient', 'model/GeneralStatus', 'model/Scheme'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GeneralStatus'), require('../model/Scheme'));
  } else {
    // Browser globals (root is window)
    if (!root.DataHubApi) {
      root.DataHubApi = {};
    }
    root.DataHubApi.SchemeApi = factory(root.DataHubApi.ApiClient, root.DataHubApi.GeneralStatus, root.DataHubApi.Scheme);
  }
}(this, function(ApiClient, GeneralStatus, Scheme) {
  'use strict';

  /**
   * Scheme service.
   * @module api/SchemeApi
   * @version 0.0.11
   */

  /**
   * Constructs a new SchemeApi. 
   * @alias module:api/SchemeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createScheme operation.
     * @callback module:api/SchemeApi~createSchemeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GeneralStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a scheme
     * @param {String} adminKey The admin api key
     * @param {String} id The id of the scheme
     * @param {module:model/Scheme} body DataSet object that defines the element
     * @param {module:api/SchemeApi~createSchemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GeneralStatus}
     */
    this.createScheme = function(adminKey, id, body, callback) {
      var postBody = body;

      // verify the required parameter 'adminKey' is set
      if (adminKey == undefined || adminKey == null) {
        throw "Missing the required parameter 'adminKey' when calling createScheme";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling createScheme";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createScheme";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'admin_key': adminKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = GeneralStatus;

      return this.apiClient.callApi(
        '/scheme/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteScheme operation.
     * @callback module:api/SchemeApi~deleteSchemeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GeneralStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a scheme
     * 
     * @param {String} adminKey The admin key
     * @param {String} id The id of the scheme
     * @param {module:api/SchemeApi~deleteSchemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GeneralStatus}
     */
    this.deleteScheme = function(adminKey, id, callback) {
      var postBody = null;

      // verify the required parameter 'adminKey' is set
      if (adminKey == undefined || adminKey == null) {
        throw "Missing the required parameter 'adminKey' when calling deleteScheme";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling deleteScheme";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'admin_key': adminKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GeneralStatus;

      return this.apiClient.callApi(
        '/scheme/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getScheme operation.
     * @callback module:api/SchemeApi~getSchemeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Scheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * retrieve a scheme
     * @param {String} apiKey user api key
     * @param {String} id The id of the scheme
     * @param {module:api/SchemeApi~getSchemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Scheme}
     */
    this.getScheme = function(apiKey, id, callback) {
      var postBody = null;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling getScheme";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getScheme";
      }


      var pathParams = {
        'id': id
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
      var returnType = Scheme;

      return this.apiClient.callApi(
        '/scheme/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSchemes operation.
     * @callback module:api/SchemeApi~getSchemesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Scheme>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve schemes
     * @param {String} adminKey The admin api key
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page The page of schemes to return
     * @param {Integer} opts.limit The limit of schemes to return (the page size)
     * @param {module:api/SchemeApi~getSchemesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Scheme>}
     */
    this.getSchemes = function(adminKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'adminKey' is set
      if (adminKey == undefined || adminKey == null) {
        throw "Missing the required parameter 'adminKey' when calling getSchemes";
      }


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
        'admin_key': adminKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [Scheme];

      return this.apiClient.callApi(
        '/schemes/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateScheme operation.
     * @callback module:api/SchemeApi~updateSchemeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GeneralStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing scheme.
     * Update scheme
     * @param {String} apiKey The user api key
     * @param {String} id The id of the scheme
     * @param {module:model/Scheme} body Scheme object that defines the element
     * @param {module:api/SchemeApi~updateSchemeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GeneralStatus}
     */
    this.updateScheme = function(apiKey, id, body, callback) {
      var postBody = body;

      // verify the required parameter 'apiKey' is set
      if (apiKey == undefined || apiKey == null) {
        throw "Missing the required parameter 'apiKey' when calling updateScheme";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling updateScheme";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateScheme";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'api_key': apiKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GeneralStatus;

      return this.apiClient.callApi(
        '/scheme/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
