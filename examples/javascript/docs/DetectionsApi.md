# EsetEnterpriseInspector.DetectionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDetectionDetails**](DetectionsApi.md#getDetectionDetails) | **GET** /api/v1/detections/{id} | Get detection details
[**listDetections**](DetectionsApi.md#listDetections) | **GET** /api/v1/detections | List of detections
[**updateDetection**](DetectionsApi.md#updateDetection) | **PATCH** /api/v1/detections/{id} | Update detection



## getDetectionDetails

> DetectionDetailsResponse getDetectionDetails(id, opts)

Get detection details

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';
let defaultClient = EsetEnterpriseInspector.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EsetEnterpriseInspector.DetectionsApi();
let id = "id_example"; // String | ID or UUID
let opts = {
  'idType': "idType_example" // String | if $idType=uuid {id} in URL is interpreted as uuid
};
apiInstance.getDetectionDetails(id, opts, (error, data, response) => {
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

[**DetectionDetailsResponse**](DetectionDetailsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDetections

> DetectionListResponse listDetections(opts)

List of detections

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';
let defaultClient = EsetEnterpriseInspector.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EsetEnterpriseInspector.DetectionsApi();
let opts = {
  'top': 56, // Number | system query option requests the number of items in the queried collection to be included in the result
  'skip': 56, // Number | system query option requests the number of items in the queried collection that are to be skipped and not included in the result
  'count': 56, // Number | system query option allows clients to request a count of the matching resources included with the resources in the response. if set to $count=1, the number of detections is returned.
  'orderBy': "orderBy_example", // String | system query option allows clients to request resources in either ascending order using asc or descending order using desc. If not specified the order is in ascending way
  'filter': "filter_example" // String | system query option allows clients to filter a collection of resources that are addressed by a request URL. The query supports the following operators eq, ne, gt, ge, lt, le, and, or, and (). Operators can be combined with values to filter data. For instance, “resolved eq 0” will report only unresolved detections.
};
apiInstance.listDetections(opts, (error, data, response) => {
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

[**DetectionListResponse**](DetectionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDetection

> updateDetection(id, detectionUpdateRequest, opts)

Update detection

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';
let defaultClient = EsetEnterpriseInspector.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EsetEnterpriseInspector.DetectionsApi();
let id = "id_example"; // String | ID or UUID
let detectionUpdateRequest = new EsetEnterpriseInspector.DetectionUpdateRequest(); // DetectionUpdateRequest | 
let opts = {
  'idType': "idType_example" // String | if $idType=uuid {id} in URL is interpreted as uuid
};
apiInstance.updateDetection(id, detectionUpdateRequest, opts, (error, data, response) => {
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
 **detectionUpdateRequest** | [**DetectionUpdateRequest**](DetectionUpdateRequest.md)|  | 
 **idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

