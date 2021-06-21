# openapi_client.AuthenticationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticate_post**](AuthenticationApi.md#authenticate_post) | **POST** /api/v1/authenticate | Authentication
[**authenticate_put**](AuthenticationApi.md#authenticate_put) | **PUT** /api/v1/authenticate | Authentication


# **authenticate_post**
> authenticate_post(authenticate_request)

Authentication

Authenticate

### Example

```python
import time
import openapi_client
from openapi_client.api import authentication_api
from openapi_client.model.unauthorized_error import UnauthorizedError
from openapi_client.model.authenticate_request import AuthenticateRequest
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = authentication_api.AuthenticationApi(api_client)
    authenticate_request = AuthenticateRequest(
        username="username_example",
        password="password_example",
        domain=True,
    ) # AuthenticateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Authentication
        api_instance.authenticate_post(authenticate_request)
    except openapi_client.ApiException as e:
        print("Exception when calling AuthenticationApi->authenticate_post: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticate_request** | [**AuthenticateRequest**](AuthenticateRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Security-Token -  <br>  |
**401** | Credentials or access token missing or invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authenticate_put**
> authenticate_put(authenticate_request)

Authentication

Authenticate

### Example

```python
import time
import openapi_client
from openapi_client.api import authentication_api
from openapi_client.model.unauthorized_error import UnauthorizedError
from openapi_client.model.authenticate_request import AuthenticateRequest
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = authentication_api.AuthenticationApi(api_client)
    authenticate_request = AuthenticateRequest(
        username="username_example",
        password="password_example",
        domain=True,
    ) # AuthenticateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Authentication
        api_instance.authenticate_put(authenticate_request)
    except openapi_client.ApiException as e:
        print("Exception when calling AuthenticationApi->authenticate_put: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticate_request** | [**AuthenticateRequest**](AuthenticateRequest.md)|  |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Security-Token -  <br>  |
**401** | Credentials or access token missing or invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

