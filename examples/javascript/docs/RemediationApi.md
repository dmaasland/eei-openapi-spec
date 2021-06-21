# EsetEnterpriseInspector.RemediationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blockExecutable**](RemediationApi.md#blockExecutable) | **POST** /api/v1/executables/{id}/block | Block an executable
[**unblockExecutable**](RemediationApi.md#unblockExecutable) | **POST** /api/v1/executables/{id}/unblock | Unblock an executable



## blockExecutable

> blockExecutable(id, opts)

Block an executable

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';
let defaultClient = EsetEnterpriseInspector.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EsetEnterpriseInspector.RemediationApi();
let id = "id_example"; // String | ID or SHA1
let opts = {
  'idType': "idType_example", // String | if $idType=sha1 {id} in URL is interpreted as SHA1
  'executableBlockRequest': new EsetEnterpriseInspector.ExecutableBlockRequest() // ExecutableBlockRequest | 
};
apiInstance.blockExecutable(id, opts, (error, data, response) => {
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
 **id** | **String**| ID or SHA1 | 
 **idType** | **String**| if $idType&#x3D;sha1 {id} in URL is interpreted as SHA1 | [optional] 
 **executableBlockRequest** | [**ExecutableBlockRequest**](ExecutableBlockRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unblockExecutable

> unblockExecutable(id, opts)

Unblock an executable

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';
let defaultClient = EsetEnterpriseInspector.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new EsetEnterpriseInspector.RemediationApi();
let id = "id_example"; // String | ID or SHA1
let opts = {
  'idType': "idType_example", // String | if $idType=sha1 {id} in URL is interpreted as SHA1
  'executableUnblockRequest': new EsetEnterpriseInspector.ExecutableUnblockRequest() // ExecutableUnblockRequest | 
};
apiInstance.unblockExecutable(id, opts, (error, data, response) => {
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
 **id** | **String**| ID or SHA1 | 
 **idType** | **String**| if $idType&#x3D;sha1 {id} in URL is interpreted as SHA1 | [optional] 
 **executableUnblockRequest** | [**ExecutableUnblockRequest**](ExecutableUnblockRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

