# RulesApi

All URIs are relative to *https://eei.example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRule**](RulesApi.md#createRule) | **POST** /api/v1/rules | Creates a new rule
[**deleteRule**](RulesApi.md#deleteRule) | **DELETE** /api/v1/rules/{id} | Deletes a rule
[**editRule**](RulesApi.md#editRule) | **PUT** /api/v1/rules/{id} | Edits rule body
[**getRuleDetails**](RulesApi.md#getRuleDetails) | **GET** /api/v1/rules/{id} | Gets a single rule
[**listRules**](RulesApi.md#listRules) | **GET** /api/v1/rules | List rules
[**updateRule**](RulesApi.md#updateRule) | **PATCH** /api/v1/rules/{id} | Updates particular rule


<a name="createRule"></a>
# **createRule**
> RuleCreateResponse createRule(RuleCreateRequest)

Creates a new rule

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **RuleCreateRequest** | [**RuleCreateRequest**](../Models/RuleCreateRequest.md)|  |

### Return type

[**RuleCreateResponse**](../Models/RuleCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/xml
- **Accept**: application/json

<a name="deleteRule"></a>
# **deleteRule**
> deleteRule(id, $idType)

Deletes a rule

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or UUID | [default to null]
 **$idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] [default to null] [enum: uuid]

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="editRule"></a>
# **editRule**
> RuleDetailsResponse editRule(id, $idType)

Edits rule body

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or UUID | [default to null]
 **$idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] [default to null] [enum: uuid]

### Return type

[**RuleDetailsResponse**](../Models/RuleDetailsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRuleDetails"></a>
# **getRuleDetails**
> RuleDetailsResponse getRuleDetails(id, $idType)

Gets a single rule

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or UUID | [default to null]
 **$idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] [default to null] [enum: uuid]

### Return type

[**RuleDetailsResponse**](../Models/RuleDetailsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listRules"></a>
# **listRules**
> RuleListResponse listRules($top, $skip, $count, $orderBy, $filter)

List rules

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **$top** | **Integer**| system query option requests the number of items in the queried collection to be included in the result | [optional] [default to null]
 **$skip** | **Integer**| system query option requests the number of items in the queried collection that are to be skipped and not included in the result | [optional] [default to null]
 **$count** | **Integer**| system query option allows clients to request a count of the matching resources included with the resources in the response. if set to $count&#x3D;1, the number of detections is returned. | [optional] [default to null] [enum: 0, 1]
 **$orderBy** | **String**| system query option allows clients to request resources in either ascending order using asc or descending order using desc. If not specified the order is in ascending way | [optional] [default to null]
 **$filter** | **String**| system query option allows clients to filter a collection of resources that are addressed by a request URL. The query supports the following operators eq, ne, gt, ge, lt, le, and, or, and (). Operators can be combined with values to filter data. For instance, “resolved eq 0” will report only unresolved detections. | [optional] [default to null]

### Return type

[**RuleListResponse**](../Models/RuleListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateRule"></a>
# **updateRule**
> updateRule(id, $idType, RuleUpdateRequest)

Updates particular rule

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or UUID | [default to null]
 **$idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] [default to null] [enum: uuid]
 **RuleUpdateRequest** | [**RuleUpdateRequest**](../Models/RuleUpdateRequest.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

