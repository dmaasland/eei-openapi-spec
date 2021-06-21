# EsetEnterpriseInspector.AuthenticationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticatePost**](AuthenticationApi.md#authenticatePost) | **POST** /api/v1/authenticate | Authentication
[**authenticatePut**](AuthenticationApi.md#authenticatePut) | **PUT** /api/v1/authenticate | Authentication



## authenticatePost

> authenticatePost(authenticateRequest)

Authentication

Authenticate

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';

let apiInstance = new EsetEnterpriseInspector.AuthenticationApi();
let authenticateRequest = new EsetEnterpriseInspector.AuthenticateRequest(); // AuthenticateRequest | 
apiInstance.authenticatePost(authenticateRequest, (error, data, response) => {
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
 **authenticateRequest** | [**AuthenticateRequest**](AuthenticateRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authenticatePut

> authenticatePut(authenticateRequest)

Authentication

Authenticate

### Example

```javascript
import EsetEnterpriseInspector from 'eset_enterprise_inspector';

let apiInstance = new EsetEnterpriseInspector.AuthenticationApi();
let authenticateRequest = new EsetEnterpriseInspector.AuthenticateRequest(); // AuthenticateRequest | 
apiInstance.authenticatePut(authenticateRequest, (error, data, response) => {
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
 **authenticateRequest** | [**AuthenticateRequest**](AuthenticateRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

