# mimir_data_hub_api

MimirDataHubApi - JavaScript client for mimir_data_hub_api
No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.8
- Package version: 0.0.8
- Build date: 2016-10-20T15:31:14.433-07:00
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install mimir_data_hub_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var MimirDataHubApi = require('mimir_data_hub_api');

var api = new MimirDataHubApi.AdminApi()

var adminKey = "adminKey_example"; // {String} The admin user api key

var body = new MimirDataHubApi.User(); // {User} A new user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createUser(adminKey, body, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:8081/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MimirDataHubApi.AdminApi* | [**createUser**](docs/AdminApi.md#createUser) | **POST** /admin/user | 
*MimirDataHubApi.BlockApi* | [**elementsUserIdDataSetReleaseElementPost**](docs/BlockApi.md#elementsUserIdDataSetReleaseElementPost) | **POST** /elements/{userId}/{dataSet}/{release}/{element} | Add a data block to an element
*MimirDataHubApi.DatasetApi* | [**addDataSet**](docs/DatasetApi.md#addDataSet) | **POST** /datasets/{userId} | Create a new data set, associated with the given user id
*MimirDataHubApi.DatasetApi* | [**deleteDataSet**](docs/DatasetApi.md#deleteDataSet) | **DELETE** /datasets/{userId}/{dataSet} | Remove a data set and all releases and elements
*MimirDataHubApi.DatasetApi* | [**findDataSetsByTags**](docs/DatasetApi.md#findDataSetsByTags) | **GET** /marketplace/getByTag | 
*MimirDataHubApi.DatasetApi* | [**findUserDataSets**](docs/DatasetApi.md#findUserDataSets) | **GET** /user/getDataSets | 
*MimirDataHubApi.DatasetApi* | [**getDataSetById**](docs/DatasetApi.md#getDataSetById) | **GET** /datasets/{userId}/{dataSet} | Find a dataset for a user and a dataset
*MimirDataHubApi.DatasetApi* | [**getMyDataSets**](docs/DatasetApi.md#getMyDataSets) | **GET** /marketplace/getMyDataSets | 
*MimirDataHubApi.DatasetApi* | [**updateDataSet**](docs/DatasetApi.md#updateDataSet) | **PUT** /datasets/{userId} | Update an existing data set.
*MimirDataHubApi.ElementApi* | [**addElement**](docs/ElementApi.md#addElement) | **POST** /elements/{userId}/{dataSet}/{release} | Create a new open element
*MimirDataHubApi.ElementApi* | [**deleteElement**](docs/ElementApi.md#deleteElement) | **DELETE** /elements/{userId}/{dataSet}/{release}/{element} | Delete element information
*MimirDataHubApi.ElementApi* | [**elementsUserIdDataSetReleaseElementPost**](docs/ElementApi.md#elementsUserIdDataSetReleaseElementPost) | **POST** /elements/{userId}/{dataSet}/{release}/{element} | Add a data block to an element
*MimirDataHubApi.ElementApi* | [**getElement**](docs/ElementApi.md#getElement) | **GET** /elements/{userId}/{dataSet}/{release}/{element} | Get element information
*MimirDataHubApi.ReleaseApi* | [**addRelease**](docs/ReleaseApi.md#addRelease) | **POST** /releases/{userId}/{dataSet} | Create a new open release
*MimirDataHubApi.ReleaseApi* | [**deleteRelease**](docs/ReleaseApi.md#deleteRelease) | **DELETE** /releases/{userId}/{dataSet}/{release} | Get release information
*MimirDataHubApi.ReleaseApi* | [**getRelease**](docs/ReleaseApi.md#getRelease) | **GET** /releases/{userId}/{dataSet}/{release} | Get release information
*MimirDataHubApi.UserApi* | [**deleteUser**](docs/UserApi.md#deleteUser) | **DELETE** /admin/user/{userId} | 
*MimirDataHubApi.UserApi* | [**getUser**](docs/UserApi.md#getUser) | **GET** /admin/user/{userId} | 
*MimirDataHubApi.UserApi* | [**getUserByEmail**](docs/UserApi.md#getUserByEmail) | **GET** /admin/getUserByEmail | 
*MimirDataHubApi.UserApi* | [**getUserByTag**](docs/UserApi.md#getUserByTag) | **GET** /admin/getUserByTag | 
*MimirDataHubApi.UserApi* | [**getUserByToken**](docs/UserApi.md#getUserByToken) | **GET** /admin/getUserByToken | 
*MimirDataHubApi.UserApi* | [**putUser**](docs/UserApi.md#putUser) | **PUT** /admin/user/{userId} | 
*MimirDataHubApi.ViewApi* | [**getDataSetReleases**](docs/ViewApi.md#getDataSetReleases) | **GET** /view/releases/{userId}/{dataset} | 
*MimirDataHubApi.ViewApi* | [**getUserViews**](docs/ViewApi.md#getUserViews) | **GET** /view/getUserViews | 


## Documentation for Models

 - [MimirDataHubApi.DataElement](docs/DataElement.md)
 - [MimirDataHubApi.DataSet](docs/DataSet.md)
 - [MimirDataHubApi.DataSetRelease](docs/DataSetRelease.md)
 - [MimirDataHubApi.DataSetView](docs/DataSetView.md)
 - [MimirDataHubApi.GeneralError](docs/GeneralError.md)
 - [MimirDataHubApi.User](docs/User.md)
 - [MimirDataHubApi.UserProfile](docs/UserProfile.md)
 - [MimirDataHubApi.UserTokens](docs/UserTokens.md)


## Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: api_key
- **Location**: HTTP header

### admin_key

- **Type**: API key
- **API key parameter name**: api_key
- **Location**: HTTP header

