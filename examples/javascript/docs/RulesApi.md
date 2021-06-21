# EsetEnterpriseInspector.RulesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRule**](RulesApi.md#createRule) | **POST** /api/v1/rules | Creates a new rule
[**deleteRule**](RulesApi.md#deleteRule) | **DELETE** /api/v1/rules/{id} | Deletes a rule
[**editRule**](RulesApi.md#editRule) | **PUT** /api/v1/rules/{id} | Edits rule body
[**getRuleDetails**](RulesApi.md#getRuleDetails) | **GET** /api/v1/rules/{id} | Gets a single rule
[**listRules**](RulesApi.md#listRules) | **GET** /api/v1/rules | List rules
[**updateRule**](RulesApi.md#updateRule) | **PATCH** /api/v1/rules/{id} | Updates particular rule



## createRule

> RuleCreateResponse createRule(ruleCreateRequest)

Creates a new rule

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';
let defaultClient = EsetEnterpriseInspector.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EsetEnterpriseInspector.RulesApi();
let ruleCreateRequest = new EsetEnterpriseInspector.RuleCreateRequest(); // RuleCreateRequest | 
apiInstance.createRule(ruleCreateRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleCreateRequest** | [**RuleCreateRequest**](RuleCreateRequest.md)|  | 

### Return type

[**RuleCreateResponse**](RuleCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/xml
- **Accept**: application/json


## deleteRule

> deleteRule(id, opts)

Deletes a rule

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';
let defaultClient = EsetEnterpriseInspector.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EsetEnterpriseInspector.RulesApi();
let id = "id_example"; // String | ID or UUID
let opts = {
  'idType': "idType_example" // String | if $idType=uuid {id} in URL is interpreted as uuid
};
apiInstance.deleteRule(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or UUID | 
 **idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## editRule

> RuleDetailsResponse editRule(id, opts)

Edits rule body

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';
let defaultClient = EsetEnterpriseInspector.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EsetEnterpriseInspector.RulesApi();
let id = "id_example"; // String | ID or UUID
let opts = {
  'idType': "idType_example" // String | if $idType=uuid {id} in URL is interpreted as uuid
};
apiInstance.editRule(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or UUID | 
 **idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

[**RuleDetailsResponse**](RuleDetailsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRuleDetails

> RuleDetailsResponse getRuleDetails(id, opts)

Gets a single rule

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';
let defaultClient = EsetEnterpriseInspector.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EsetEnterpriseInspector.RulesApi();
let id = "id_example"; // String | ID or UUID
let opts = {
  'idType': "idType_example" // String | if $idType=uuid {id} in URL is interpreted as uuid
};
apiInstance.getRuleDetails(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or UUID | 
 **idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

[**RuleDetailsResponse**](RuleDetailsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRules

> RuleListResponse listRules(opts)

List rules

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';
let defaultClient = EsetEnterpriseInspector.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EsetEnterpriseInspector.RulesApi();
let opts = {
  'top': 56, // Number | system query option requests the number of items in the queried collection to be included in the result
  'skip': 56, // Number | system query option requests the number of items in the queried collection that are to be skipped and not included in the result
  'count': 56, // Number | system query option allows clients to request a count of the matching resources included with the resources in the response. if set to $count=1, the number of detections is returned.
  'orderBy': "orderBy_example", // String | system query option allows clients to request resources in either ascending order using asc or descending order using desc. If not specified the order is in ascending way
  'filter': "filter_example" // String | system query option allows clients to filter a collection of resources that are addressed by a request URL. The query supports the following operators eq, ne, gt, ge, lt, le, and, or, and (). Operators can be combined with values to filter data. For instance, “resolved eq 0” will report only unresolved detections.
};
apiInstance.listRules(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **top** | **Number**| system query option requests the number of items in the queried collection to be included in the result | [optional] 
 **skip** | **Number**| system query option requests the number of items in the queried collection that are to be skipped and not included in the result | [optional] 
 **count** | **Number**| system query option allows clients to request a count of the matching resources included with the resources in the response. if set to $count&#x3D;1, the number of detections is returned. | [optional] 
 **orderBy** | **String**| system query option allows clients to request resources in either ascending order using asc or descending order using desc. If not specified the order is in ascending way | [optional] 
 **filter** | **String**| system query option allows clients to filter a collection of resources that are addressed by a request URL. The query supports the following operators eq, ne, gt, ge, lt, le, and, or, and (). Operators can be combined with values to filter data. For instance, “resolved eq 0” will report only unresolved detections. | [optional] 

### Return type

[**RuleListResponse**](RuleListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateRule

> updateRule(id, opts)

Updates particular rule

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';
let defaultClient = EsetEnterpriseInspector.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EsetEnterpriseInspector.RulesApi();
let id = "id_example"; // String | ID or UUID
let opts = {
  'idType': "idType_example", // String | if $idType=uuid {id} in URL is interpreted as uuid
  'ruleUpdateRequest': new EsetEnterpriseInspector.RuleUpdateRequest() // RuleUpdateRequest | 
};
apiInstance.updateRule(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or UUID | 
 **idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 
 **ruleUpdateRequest** | [**RuleUpdateRequest**](RuleUpdateRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

