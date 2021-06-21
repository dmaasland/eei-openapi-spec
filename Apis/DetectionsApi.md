# DetectionsApi

All URIs are relative to *https://eei.example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDetectionDetails**](DetectionsApi.md#getDetectionDetails) | **GET** /api/v1/detections/{id} | Get detection details
[**listDetections**](DetectionsApi.md#listDetections) | **GET** /api/v1/detections | List of detections
[**updateDetection**](DetectionsApi.md#updateDetection) | **PATCH** /api/v1/detections/{id} | Update detection


<a name="getDetectionDetails"></a>
# **getDetectionDetails**
> DetectionDetailsResponse getDetectionDetails(id, $idType)

Get detection details

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or UUID | [default to null]
 **$idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] [default to null] [enum: uuid]

### Return type

[**DetectionDetailsResponse**](../Models/DetectionDetailsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listDetections"></a>
# **listDetections**
> DetectionListResponse listDetections($top, $skip, $count, $orderBy, $filter)

List of detections

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **$top** | **Integer**| system query option requests the number of items in the queried collection to be included in the result | [optional] [default to null]
 **$skip** | **Integer**| system query option requests the number of items in the queried collection that are to be skipped and not included in the result | [optional] [default to null]
 **$count** | **Integer**| system query option allows clients to request a count of the matching resources included with the resources in the response. if set to $count&#x3D;1, the number of detections is returned. | [optional] [default to null] [enum: 0, 1]
 **$orderBy** | **String**| system query option allows clients to request resources in either ascending order using asc or descending order using desc. If not specified the order is in ascending way | [optional] [default to null]
 **$filter** | **String**| system query option allows clients to filter a collection of resources that are addressed by a request URL. The query supports the following operators eq, ne, gt, ge, lt, le, and, or, and (). Operators can be combined with values to filter data. For instance, “resolved eq 0” will report only unresolved detections. | [optional] [default to null]

### Return type

[**DetectionListResponse**](../Models/DetectionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateDetection"></a>
# **updateDetection**
> updateDetection(id, DetectionUpdateRequest, $idType)

Update detection

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or UUID | [default to null]
 **DetectionUpdateRequest** | [**DetectionUpdateRequest**](../Models/DetectionUpdateRequest.md)|  |
 **$idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] [default to null] [enum: uuid]

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

