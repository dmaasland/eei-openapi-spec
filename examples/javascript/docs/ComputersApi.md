# EsetEnterpriseInspector.ComputersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integrateComputer**](ComputersApi.md#integrateComputer) | **POST** /api/v1/machines/{computerId}/integrate | Integrate a computer back into the network
[**isolateComputer**](ComputersApi.md#isolateComputer) | **POST** /api/v1/machines/{computerId}/isolate | Isolate a computer from the network



## integrateComputer

> IsolateResponse integrateComputer(computerId, opts)

Integrate a computer back into the network

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';
let defaultClient = EsetEnterpriseInspector.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EsetEnterpriseInspector.ComputersApi();
let computerId = "computerId_example"; // String | Computer ID or UUID
let opts = {
  'idType': "idType_example" // String | if $idType=uuid {id} in URL is interpreted as uuid
};
apiInstance.integrateComputer(computerId, opts, (error, data, response) => {
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
 **computerId** | **String**| Computer ID or UUID | 
 **idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

[**IsolateResponse**](IsolateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## isolateComputer

> IsolateResponse isolateComputer(computerId, opts)

Isolate a computer from the network

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';
let defaultClient = EsetEnterpriseInspector.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EsetEnterpriseInspector.ComputersApi();
let computerId = "computerId_example"; // String | Computer ID or UUID
let opts = {
  'idType': "idType_example" // String | if $idType=uuid {id} in URL is interpreted as uuid
};
apiInstance.isolateComputer(computerId, opts, (error, data, response) => {
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
 **computerId** | **String**| Computer ID or UUID | 
 **idType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

[**IsolateResponse**](IsolateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

