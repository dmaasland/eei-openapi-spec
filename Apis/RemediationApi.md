# RemediationApi

All URIs are relative to *https://eei.example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blockExecutable**](RemediationApi.md#blockExecutable) | **POST** /api/v1/executables/{id}/block | Block an executable
[**unblockExecutable**](RemediationApi.md#unblockExecutable) | **POST** /api/v1/executables/{id}/unblock | Unblock an executable


<a name="blockExecutable"></a>
# **blockExecutable**
> blockExecutable(id, $idType, ExecutableBlockRequest)

Block an executable

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or SHA1 | [default to null]
 **$idType** | **String**| if $idType&#x3D;sha1 {id} in URL is interpreted as SHA1 | [optional] [default to null] [enum: sha1]
 **ExecutableBlockRequest** | [**ExecutableBlockRequest**](../Models/ExecutableBlockRequest.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="unblockExecutable"></a>
# **unblockExecutable**
> unblockExecutable(id, $idType, ExecutableUnblockRequest)

Unblock an executable

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or SHA1 | [default to null]
 **$idType** | **String**| if $idType&#x3D;sha1 {id} in URL is interpreted as SHA1 | [optional] [default to null] [enum: sha1]
 **ExecutableUnblockRequest** | [**ExecutableUnblockRequest**](../Models/ExecutableUnblockRequest.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

