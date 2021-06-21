# openapi_client.RemediationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**block_executable**](RemediationApi.md#block_executable) | **POST** /api/v1/executables/{id}/block | Block an executable
[**unblock_executable**](RemediationApi.md#unblock_executable) | **POST** /api/v1/executables/{id}/unblock | Unblock an executable


# **block_executable**
> block_executable(id)

Block an executable

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
import time
import openapi_client
from openapi_client.api import remediation_api
from openapi_client.model.executable_block_request import ExecutableBlockRequest
from openapi_client.model.unauthorized_error import UnauthorizedError
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = remediation_api.RemediationApi(api_client)
    id = "id_example" # str | ID or SHA1
    id_type = "sha1" # str | if $idType=sha1 {id} in URL is interpreted as SHA1 (optional) if omitted the server will use the default value of "sha1"
    executable_block_request = ExecutableBlockRequest(
        clean=True,
        note="note_example",
    ) # ExecutableBlockRequest |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Block an executable
        api_instance.block_executable(id)
    except openapi_client.ApiException as e:
        print("Exception when calling RemediationApi->block_executable: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Block an executable
        api_instance.block_executable(id, id_type=id_type, executable_block_request=executable_block_request)
    except openapi_client.ApiException as e:
        print("Exception when calling RemediationApi->block_executable: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID or SHA1 |
 **id_type** | **str**| if $idType&#x3D;sha1 {id} in URL is interpreted as SHA1 | [optional] if omitted the server will use the default value of "sha1"
 **executable_block_request** | [**ExecutableBlockRequest**](ExecutableBlockRequest.md)|  | [optional]

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  * X-Security-Token -  <br>  |
**401** | Credentials or access token missing or invalid |  -  |
**403** | Insufficient permissions to perform action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unblock_executable**
> unblock_executable(id)

Unblock an executable

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
import time
import openapi_client
from openapi_client.api import remediation_api
from openapi_client.model.unauthorized_error import UnauthorizedError
from openapi_client.model.executable_unblock_request import ExecutableUnblockRequest
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = 'YOUR_BEARER_TOKEN'
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = remediation_api.RemediationApi(api_client)
    id = "id_example" # str | ID or SHA1
    id_type = "sha1" # str | if $idType=sha1 {id} in URL is interpreted as SHA1 (optional) if omitted the server will use the default value of "sha1"
    executable_unblock_request = ExecutableUnblockRequest(
        note="note_example",
    ) # ExecutableUnblockRequest |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Unblock an executable
        api_instance.unblock_executable(id)
    except openapi_client.ApiException as e:
        print("Exception when calling RemediationApi->unblock_executable: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Unblock an executable
        api_instance.unblock_executable(id, id_type=id_type, executable_unblock_request=executable_unblock_request)
    except openapi_client.ApiException as e:
        print("Exception when calling RemediationApi->unblock_executable: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID or SHA1 |
 **id_type** | **str**| if $idType&#x3D;sha1 {id} in URL is interpreted as SHA1 | [optional] if omitted the server will use the default value of "sha1"
 **executable_unblock_request** | [**ExecutableUnblockRequest**](ExecutableUnblockRequest.md)|  | [optional]

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  * X-Security-Token -  <br>  |
**401** | Credentials or access token missing or invalid |  -  |
**403** | Insufficient permissions to perform action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

