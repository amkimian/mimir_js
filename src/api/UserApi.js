(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/User', '../model/GeneralError', '../model/ModelDate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/User'), require('../model/GeneralError'), require('../model/ModelDate'));
  } else {
    // Browser globals (root is window)
    if (!root.MimirDataHubApi) {
      root.MimirDataHubApi = {};
    }
    root.MimirDataHubApi.UserApi = factory(root.MimirDataHubApi.ApiClient, root.MimirDataHubApi.User, root.MimirDataHubApi.GeneralError, root.MimirDataHubApi.ModelDate);
  }
}(this, function(ApiClient, User, GeneralError, ModelDate) {
  'use strict';

  /**
   * User service.
   * @module api/UserApi
   * @version 0.0.10
   */

  /**
   * Constructs a new UserApi. 
   * @alias module:api/UserApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback module:api/UserApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.adminKey The admin user api key
     * @param {String} opts.apiKey The user api key
     * @param {module:api/UserApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUser = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteUser";
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
        'admin_key': opts['adminKey'],
        'api_key': opts['apiKey']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/admin/user/{userId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUser operation.
     * @callback module:api/UserApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} userId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.adminKey The admin user api key
     * @param {String} opts.apiKey The user api key
     * @param {module:api/UserApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/User}
     */
    this.getUser = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling getUser";
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
        'admin_key': opts['adminKey'],
        'api_key': opts['apiKey']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/admin/user/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserByEmail operation.
     * @callback module:api/UserApi~getUserByEmailCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} adminKey The admin user api key
     * @param {String} email The email to search for
     * @param {module:api/UserApi~getUserByEmailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/User}
     */
    this.getUserByEmail = function(adminKey, email, callback) {
      var postBody = null;

      // verify the required parameter 'adminKey' is set
      if (adminKey == undefined || adminKey == null) {
        throw "Missing the required parameter 'adminKey' when calling getUserByEmail";
      }

      // verify the required parameter 'email' is set
      if (email == undefined || email == null) {
        throw "Missing the required parameter 'email' when calling getUserByEmail";
      }


      var pathParams = {
      };
      var queryParams = {
        'email': email
      };
      var headerParams = {
        'admin_key': adminKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/admin/getUserByEmail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserByTag operation.
     * @callback module:api/UserApi~getUserByTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} adminKey The admin user api key
     * @param {String} tagName The tag field to search (e.g. github)
     * @param {String} tagValue The tag value to search
     * @param {module:api/UserApi~getUserByTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/User}
     */
    this.getUserByTag = function(adminKey, tagName, tagValue, callback) {
      var postBody = null;

      // verify the required parameter 'adminKey' is set
      if (adminKey == undefined || adminKey == null) {
        throw "Missing the required parameter 'adminKey' when calling getUserByTag";
      }

      // verify the required parameter 'tagName' is set
      if (tagName == undefined || tagName == null) {
        throw "Missing the required parameter 'tagName' when calling getUserByTag";
      }

      // verify the required parameter 'tagValue' is set
      if (tagValue == undefined || tagValue == null) {
        throw "Missing the required parameter 'tagValue' when calling getUserByTag";
      }


      var pathParams = {
      };
      var queryParams = {
        'tagName': tagName,
        'tagValue': tagValue
      };
      var headerParams = {
        'admin_key': adminKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/admin/getUserByTag', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserByToken operation.
     * @callback module:api/UserApi~getUserByTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} adminKey The admin user api key
     * @param {String} token The token passed by an email
     * @param {module:model/ModelDate} expiry The latest date for which the token is valid
     * @param {module:api/UserApi~getUserByTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/User}
     */
    this.getUserByToken = function(adminKey, token, expiry, callback) {
      var postBody = null;

      // verify the required parameter 'adminKey' is set
      if (adminKey == undefined || adminKey == null) {
        throw "Missing the required parameter 'adminKey' when calling getUserByToken";
      }

      // verify the required parameter 'token' is set
      if (token == undefined || token == null) {
        throw "Missing the required parameter 'token' when calling getUserByToken";
      }

      // verify the required parameter 'expiry' is set
      if (expiry == undefined || expiry == null) {
        throw "Missing the required parameter 'expiry' when calling getUserByToken";
      }


      var pathParams = {
      };
      var queryParams = {
        'token': token,
        'expiry': expiry
      };
      var headerParams = {
        'admin_key': adminKey
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/admin/getUserByToken', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putUser operation.
     * @callback module:api/UserApi~putUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} userId 
     * @param {module:model/User} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey The user api key
     * @param {module:api/UserApi~putUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putUser = function(userId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling putUser";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling putUser";
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/admin/user/{userId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
