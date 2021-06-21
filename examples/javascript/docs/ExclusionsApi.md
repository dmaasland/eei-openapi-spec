# EsetEnterpriseInspector.ExclusionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createExclusion**](ExclusionsApi.md#createExclusion) | **POST** /api/v1/exclusions | Creates a new exclusion
[**deleteExclusion**](ExclusionsApi.md#deleteExclusion) | **DELETE** /api/v1/exclusions/{exclusionId} | Deletes an exclusion
[**editExclusion**](ExclusionsApi.md#editExclusion) | **PUT** /api/v1/exclusions/{exclusionId} | Edits exclusion body
[**getExclusionDetails**](ExclusionsApi.md#getExclusionDetails) | **GET** /api/v1/exclusions/{exclusionId} | Gets a single exclusion
[**getExclusionsByRule**](ExclusionsApi.md#getExclusionsByRule) | **GET** /api/v1/exclusions/rule/{ruleId} | Get exclusions associated with a rule
[**listExclusions**](ExclusionsApi.md#listExclusions) | **GET** /api/v1/exclusions | List exclusions



## createExclusion

> ExclusionDetailsResponse createExclusion(exclusionCreateRequest)

Creates a new exclusion

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';
let defaultClient = EsetEnterpriseInspector.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EsetEnterpriseInspector.ExclusionsApi();
let exclusionCreateRequest = new EsetEnterpriseInspector.ExclusionCreateRequest(); // ExclusionCreateRequest | 
apiInstance.createExclusion(exclusionCreateRequest, (error, data, response) => {
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
 **exclusionCreateRequest** | [**ExclusionCreateRequest**](ExclusionCreateRequest.md)|  | 

### Return type

[**ExclusionDetailsResponse**](ExclusionDetailsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteExclusion

> deleteExclusion(exclusionId, opts)

Deletes an exclusion

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';
let defaultClient = EsetEnterpriseInspector.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EsetEnterpriseInspector.ExclusionsApi();
let exclusionId = "exclusionId_example"; // String | Exclusion ID or UUID
let opts = {
  'idType': "idType_example" // String | if $idType=uuid {id} in URL is interpreted as uuid
};
apiInstance.deleteExclusion(exclusionId, opts, (error, data, response) => {
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
 **exclusionId** | **String**| Exclusion ID or UUID | 
 **idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## editExclusion

> ExclusionDetailsResponse editExclusion(exclusionId, exclusionCreateRequest, opts)

Edits exclusion body

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';
let defaultClient = EsetEnterpriseInspector.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EsetEnterpriseInspector.ExclusionsApi();
let exclusionId = "exclusionId_example"; // String | Exclusion ID or UUID
let exclusionCreateRequest = new EsetEnterpriseInspector.ExclusionCreateRequest(); // ExclusionCreateRequest | 
let opts = {
  'idType': "idType_example" // String | if $idType=uuid {id} in URL is interpreted as uuid
};
apiInstance.editExclusion(exclusionId, exclusionCreateRequest, opts, (error, data, response) => {
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
 **exclusionId** | **String**| Exclusion ID or UUID | 
 **exclusionCreateRequest** | [**ExclusionCreateRequest**](ExclusionCreateRequest.md)|  | 
 **idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

[**ExclusionDetailsResponse**](ExclusionDetailsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getExclusionDetails

> ExclusionDetailsResponse getExclusionDetails(exclusionId, opts)

Gets a single exclusion

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';
let defaultClient = EsetEnterpriseInspector.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EsetEnterpriseInspector.ExclusionsApi();
let exclusionId = "exclusionId_example"; // String | Exclusion ID or UUID
let opts = {
  'idType': "idType_example" // String | if $idType=uuid {id} in URL is interpreted as uuid
};
apiInstance.getExclusionDetails(exclusionId, opts, (error, data, response) => {
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
 **exclusionId** | **String**| Exclusion ID or UUID | 
 **idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

[**ExclusionDetailsResponse**](ExclusionDetailsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExclusionsByRule

> [Number] getExclusionsByRule(ruleId, opts)

Get exclusions associated with a rule

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';
let defaultClient = EsetEnterpriseInspector.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EsetEnterpriseInspector.ExclusionsApi();
let ruleId = "ruleId_example"; // String | Rule ID or UUID
let opts = {
  'idType': "idType_example" // String | if $idType=uuid {id} in URL is interpreted as uuid
};
apiInstance.getExclusionsByRule(ruleId, opts, (error, data, response) => {
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
 **ruleId** | **String**| Rule ID or UUID | 
 **idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

**[Number]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listExclusions

> ExclusionListResponse listExclusions(opts)

List exclusions

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';
let defaultClient = EsetEnterpriseInspector.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EsetEnterpriseInspector.ExclusionsApi();
let opts = {
  'top': 56, // Number | system query option requests the number of items in the queried collection to be included in the result
  'skip': 56, // Number | system query option requests the number of items in the queried collection that are to be skipped and not included in the result
  'count': 56, // Number | system query option allows clients to request a count of the matching resources included with the resources in the response. if set to $count=1, the number of detections is returned.
  'orderBy': "orderBy_example", // String | system query option allows clients to request resources in either ascending order using asc or descending order using desc. If not specified the order is in ascending way
  'filter': "filter_example" // String | system query option allows clients to filter a collection of resources that are addressed by a request URL. The query supports the following operators eq, ne, gt, ge, lt, le, and, or, and (). Operators can be combined with values to filter data. For instance, “resolved eq 0” will report only unresolved detections.
};
apiInstance.listExclusions(opts, (error, data, response) => {
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

[**ExclusionListResponse**](ExclusionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

