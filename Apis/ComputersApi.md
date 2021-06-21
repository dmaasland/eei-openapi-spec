# ComputersApi

All URIs are relative to *https://eei.example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integrateComputer**](ComputersApi.md#integrateComputer) | **POST** /api/v1/machines/{computerId}/integrate | Integrate a computer back into the network
[**isolateComputer**](ComputersApi.md#isolateComputer) | **POST** /api/v1/machines/{computerId}/isolate | Isolate a computer from the network


<a name="integrateComputer"></a>
# **integrateComputer**
> IsolateResponse integrateComputer(computerId, $idType)

Integrate a computer back into the network

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **computerId** | **String**| Computer ID or UUID | [default to null]
 **$idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] [default to null] [enum: uuid]

### Return type

[**IsolateResponse**](../Models/IsolateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="isolateComputer"></a>
# **isolateComputer**
> IsolateResponse isolateComputer(computerId, $idType)

Isolate a computer from the network

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **computerId** | **String**| Computer ID or UUID | [default to null]
 **$idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] [default to null] [enum: uuid]

### Return type

[**IsolateResponse**](../Models/IsolateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

