# openapi_client.DetectionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_detection_details**](DetectionsApi.md#get_detection_details) | **GET** /api/v1/detections/{id} | Get detection details
[**list_detections**](DetectionsApi.md#list_detections) | **GET** /api/v1/detections | List of detections
[**update_detection**](DetectionsApi.md#update_detection) | **PATCH** /api/v1/detections/{id} | Update detection


# **get_detection_details**
> DetectionDetailsResponse get_detection_details(id)

Get detection details

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
import time
import openapi_client
from openapi_client.api import detections_api
from openapi_client.model.unauthorized_error import UnauthorizedError
from openapi_client.model.detection_details_response import DetectionDetailsResponse
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
    api_instance = detections_api.DetectionsApi(api_client)
    id = "id_example" # str | ID or UUID
    id_type = "uuid" # str | if $idType=uuid {id} in URL is interpreted as uuid (optional) if omitted the server will use the default value of "uuid"

    # example passing only required values which don't have defaults set
    try:
        # Get detection details
        api_response = api_instance.get_detection_details(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling DetectionsApi->get_detection_details: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Get detection details
        api_response = api_instance.get_detection_details(id, id_type=id_type)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling DetectionsApi->get_detection_details: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID or UUID |
 **id_type** | **str**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] if omitted the server will use the default value of "uuid"

### Return type

[**DetectionDetailsResponse**](DetectionDetailsResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_detections**
> DetectionListResponse list_detections()

List of detections

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
import time
import openapi_client
from openapi_client.api import detections_api
from openapi_client.model.unauthorized_error import UnauthorizedError
from openapi_client.model.detection_list_response import DetectionListResponse
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
    api_instance = detections_api.DetectionsApi(api_client)
    top = 1 # int | system query option requests the number of items in the queried collection to be included in the result (optional)
    skip = 1 # int | system query option requests the number of items in the queried collection that are to be skipped and not included in the result (optional)
    count = 0 # int | system query option allows clients to request a count of the matching resources included with the resources in the response. if set to $count=1, the number of detections is returned. (optional)
    order_by = "$orderBy_example" # str | system query option allows clients to request resources in either ascending order using asc or descending order using desc. If not specified the order is in ascending way (optional)
    filter = "$filter_example" # str | system query option allows clients to filter a collection of resources that are addressed by a request URL. The query supports the following operators eq, ne, gt, ge, lt, le, and, or, and (). Operators can be combined with values to filter data. For instance, “resolved eq 0” will report only unresolved detections. (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # List of detections
        api_response = api_instance.list_detections(top=top, skip=skip, count=count, order_by=order_by, filter=filter)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling DetectionsApi->list_detections: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **top** | **int**| system query option requests the number of items in the queried collection to be included in the result | [optional]
 **skip** | **int**| system query option requests the number of items in the queried collection that are to be skipped and not included in the result | [optional]
 **count** | **int**| system query option allows clients to request a count of the matching resources included with the resources in the response. if set to $count&#x3D;1, the number of detections is returned. | [optional]
 **order_by** | **str**| system query option allows clients to request resources in either ascending order using asc or descending order using desc. If not specified the order is in ascending way | [optional]
 **filter** | **str**| system query option allows clients to filter a collection of resources that are addressed by a request URL. The query supports the following operators eq, ne, gt, ge, lt, le, and, or, and (). Operators can be combined with values to filter data. For instance, “resolved eq 0” will report only unresolved detections. | [optional]

### Return type

[**DetectionListResponse**](DetectionListResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_detection**
> update_detection(id, detection_update_request)

Update detection

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
import time
import openapi_client
from openapi_client.api import detections_api
from openapi_client.model.unauthorized_error import UnauthorizedError
from openapi_client.model.detection_update_request import DetectionUpdateRequest
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
    api_instance = detections_api.DetectionsApi(api_client)
    id = "id_example" # str | ID or UUID
    detection_update_request = DetectionUpdateRequest(
        resolved=True,
        priority=1,
        note="note_example",
    ) # DetectionUpdateRequest | 
    id_type = "uuid" # str | if $idType=uuid {id} in URL is interpreted as uuid (optional) if omitted the server will use the default value of "uuid"

    # example passing only required values which don't have defaults set
    try:
        # Update detection
        api_instance.update_detection(id, detection_update_request)
    except openapi_client.ApiException as e:
        print("Exception when calling DetectionsApi->update_detection: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Update detection
        api_instance.update_detection(id, detection_update_request, id_type=id_type)
    except openapi_client.ApiException as e:
        print("Exception when calling DetectionsApi->update_detection: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID or UUID |
 **detection_update_request** | [**DetectionUpdateRequest**](DetectionUpdateRequest.md)|  |
 **id_type** | **str**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] if omitted the server will use the default value of "uuid"

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

