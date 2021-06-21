# ExclusionsApi

All URIs are relative to *https://eei.example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createExclusion**](ExclusionsApi.md#createExclusion) | **POST** /api/v1/exclusions | Creates a new exclusion
[**deleteExclusion**](ExclusionsApi.md#deleteExclusion) | **DELETE** /api/v1/exclusions/{exclusionId} | Deletes an exclusion
[**editExclusion**](ExclusionsApi.md#editExclusion) | **PUT** /api/v1/exclusions/{exclusionId} | Edits exclusion body
[**getExclusionDetails**](ExclusionsApi.md#getExclusionDetails) | **GET** /api/v1/exclusions/{exclusionId} | Gets a single exclusion
[**getExclusionsByRule**](ExclusionsApi.md#getExclusionsByRule) | **GET** /api/v1/exclusions/rule/{ruleId} | Get exclusions associated with a rule
[**listExclusions**](ExclusionsApi.md#listExclusions) | **GET** /api/v1/exclusions | List exclusions


<a name="createExclusion"></a>
# **createExclusion**
> ExclusionDetailsResponse createExclusion(ExclusionCreateRequest)

Creates a new exclusion

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ExclusionCreateRequest** | [**ExclusionCreateRequest**](../Models/ExclusionCreateRequest.md)|  |

### Return type

[**ExclusionDetailsResponse**](../Models/ExclusionDetailsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteExclusion"></a>
# **deleteExclusion**
> deleteExclusion(exclusionId, $idType)

Deletes an exclusion

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exclusionId** | **String**| Exclusion ID or UUID | [default to null]
 **$idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] [default to null] [enum: uuid]

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="editExclusion"></a>
# **editExclusion**
> ExclusionDetailsResponse editExclusion(exclusionId, ExclusionCreateRequest, $idType)

Edits exclusion body

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exclusionId** | **String**| Exclusion ID or UUID | [default to null]
 **ExclusionCreateRequest** | [**ExclusionCreateRequest**](../Models/ExclusionCreateRequest.md)|  |
 **$idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] [default to null] [enum: uuid]

### Return type

[**ExclusionDetailsResponse**](../Models/ExclusionDetailsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getExclusionDetails"></a>
# **getExclusionDetails**
> ExclusionDetailsResponse getExclusionDetails(exclusionId, $idType)

Gets a single exclusion

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exclusionId** | **String**| Exclusion ID or UUID | [default to null]
 **$idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] [default to null] [enum: uuid]

### Return type

[**ExclusionDetailsResponse**](../Models/ExclusionDetailsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getExclusionsByRule"></a>
# **getExclusionsByRule**
> List getExclusionsByRule(ruleId, $idType)

Get exclusions associated with a rule

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleId** | **String**| Rule ID or UUID | [default to null]
 **$idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] [default to null] [enum: uuid]

### Return type

[**List**](../Models/integer.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listExclusions"></a>
# **listExclusions**
> ExclusionListResponse listExclusions($top, $skip, $count, $orderBy, $filter)

List exclusions

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **$top** | **Integer**| system query option requests the number of items in the queried collection to be included in the result | [optional] [default to null]
 **$skip** | **Integer**| system query option requests the number of items in the queried collection that are to be skipped and not included in the result | [optional] [default to null]
 **$count** | **Integer**| system query option allows clients to request a count of the matching resources included with the resources in the response. if set to $count&#x3D;1, the number of detections is returned. | [optional] [default to null] [enum: 0, 1]
 **$orderBy** | **String**| system query option allows clients to request resources in either ascending order using asc or descending order using desc. If not specified the order is in ascending way | [optional] [default to null]
 **$filter** | **String**| system query option allows clients to filter a collection of resources that are addressed by a request URL. The query supports the following operators eq, ne, gt, ge, lt, le, and, or, and (). Operators can be combined with values to filter data. For instance, “resolved eq 0” will report only unresolved detections. | [optional] [default to null]

### Return type

[**ExclusionListResponse**](../Models/ExclusionListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

