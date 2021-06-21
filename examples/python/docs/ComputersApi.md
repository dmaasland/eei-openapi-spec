# openapi_client.ComputersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integrate_computer**](ComputersApi.md#integrate_computer) | **POST** /api/v1/machines/{computerId}/integrate | Integrate a computer back into the network
[**isolate_computer**](ComputersApi.md#isolate_computer) | **POST** /api/v1/machines/{computerId}/isolate | Isolate a computer from the network


# **integrate_computer**
> IsolateResponse integrate_computer(computer_id)

Integrate a computer back into the network

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
import time
import openapi_client
from openapi_client.api import computers_api
from openapi_client.model.unauthorized_error import UnauthorizedError
from openapi_client.model.isolate_response import IsolateResponse
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
    api_instance = computers_api.ComputersApi(api_client)
    computer_id = "computerId_example" # str | Computer ID or UUID
    id_type = "uuid" # str | if $idType=uuid {id} in URL is interpreted as uuid (optional) if omitted the server will use the default value of "uuid"

    # example passing only required values which don't have defaults set
    try:
        # Integrate a computer back into the network
        api_response = api_instance.integrate_computer(computer_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ComputersApi->integrate_computer: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Integrate a computer back into the network
        api_response = api_instance.integrate_computer(computer_id, id_type=id_type)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ComputersApi->integrate_computer: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **computer_id** | **str**| Computer ID or UUID |
 **id_type** | **str**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] if omitted the server will use the default value of "uuid"

### Return type

[**IsolateResponse**](IsolateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Security-Token -  <br>  |
**401** | Credentials or access token missing or invalid |  -  |
**403** | Insufficient permissions to perform action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **isolate_computer**
> IsolateResponse isolate_computer(computer_id)

Isolate a computer from the network

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
import time
import openapi_client
from openapi_client.api import computers_api
from openapi_client.model.unauthorized_error import UnauthorizedError
from openapi_client.model.isolate_response import IsolateResponse
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
    api_instance = computers_api.ComputersApi(api_client)
    computer_id = "computerId_example" # str | Computer ID or UUID
    id_type = "uuid" # str | if $idType=uuid {id} in URL is interpreted as uuid (optional) if omitted the server will use the default value of "uuid"

    # example passing only required values which don't have defaults set
    try:
        # Isolate a computer from the network
        api_response = api_instance.isolate_computer(computer_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ComputersApi->isolate_computer: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Isolate a computer from the network
        api_response = api_instance.isolate_computer(computer_id, id_type=id_type)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ComputersApi->isolate_computer: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **computer_id** | **str**| Computer ID or UUID |
 **id_type** | **str**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] if omitted the server will use the default value of "uuid"

### Return type

[**IsolateResponse**](IsolateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Security-Token -  <br>  |
**401** | Credentials or access token missing or invalid |  -  |
**403** | Insufficient permissions to perform action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

