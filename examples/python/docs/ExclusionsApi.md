# openapi_client.ExclusionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_exclusion**](ExclusionsApi.md#create_exclusion) | **POST** /api/v1/exclusions | Creates a new exclusion
[**delete_exclusion**](ExclusionsApi.md#delete_exclusion) | **DELETE** /api/v1/exclusions/{exclusionId} | Deletes an exclusion
[**edit_exclusion**](ExclusionsApi.md#edit_exclusion) | **PUT** /api/v1/exclusions/{exclusionId} | Edits exclusion body
[**get_exclusion_details**](ExclusionsApi.md#get_exclusion_details) | **GET** /api/v1/exclusions/{exclusionId} | Gets a single exclusion
[**get_exclusions_by_rule**](ExclusionsApi.md#get_exclusions_by_rule) | **GET** /api/v1/exclusions/rule/{ruleId} | Get exclusions associated with a rule
[**list_exclusions**](ExclusionsApi.md#list_exclusions) | **GET** /api/v1/exclusions | List exclusions


# **create_exclusion**
> ExclusionDetailsResponse create_exclusion(exclusion_create_request)

Creates a new exclusion

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
import time
import openapi_client
from openapi_client.api import exclusions_api
from openapi_client.model.unauthorized_error import UnauthorizedError
from openapi_client.model.exclusion_details_response import ExclusionDetailsResponse
from openapi_client.model.exclusion_create_request import ExclusionCreateRequest
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
    api_instance = exclusions_api.ExclusionsApi(api_client)
    exclusion_create_request = ExclusionCreateRequest(
        body="body_example",
        auto_resolve=True,
        name="name_example",
        rule_ids=[
            1,
        ],
        rule_uuids=[
            "rule_uuids_example",
        ],
        note="note_example",
    ) # ExclusionCreateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Creates a new exclusion
        api_response = api_instance.create_exclusion(exclusion_create_request)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ExclusionsApi->create_exclusion: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exclusion_create_request** | [**ExclusionCreateRequest**](ExclusionCreateRequest.md)|  |

### Return type

[**ExclusionDetailsResponse**](ExclusionDetailsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  * Location -  <br>  * X-Security-Token -  <br>  |
**401** | Credentials or access token missing or invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_exclusion**
> delete_exclusion(exclusion_id)

Deletes an exclusion

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
import time
import openapi_client
from openapi_client.api import exclusions_api
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
    api_instance = exclusions_api.ExclusionsApi(api_client)
    exclusion_id = "exclusionId_example" # str | Exclusion ID or UUID
    id_type = "uuid" # str | if $idType=uuid {id} in URL is interpreted as uuid (optional) if omitted the server will use the default value of "uuid"

    # example passing only required values which don't have defaults set
    try:
        # Deletes an exclusion
        api_instance.delete_exclusion(exclusion_id)
    except openapi_client.ApiException as e:
        print("Exception when calling ExclusionsApi->delete_exclusion: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Deletes an exclusion
        api_instance.delete_exclusion(exclusion_id, id_type=id_type)
    except openapi_client.ApiException as e:
        print("Exception when calling ExclusionsApi->delete_exclusion: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exclusion_id** | **str**| Exclusion ID or UUID |
 **id_type** | **str**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] if omitted the server will use the default value of "uuid"

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  * X-Security-Token -  <br>  |
**401** | Credentials or access token missing or invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **edit_exclusion**
> ExclusionDetailsResponse edit_exclusion(exclusion_id, exclusion_create_request)

Edits exclusion body

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
import time
import openapi_client
from openapi_client.api import exclusions_api
from openapi_client.model.unauthorized_error import UnauthorizedError
from openapi_client.model.exclusion_details_response import ExclusionDetailsResponse
from openapi_client.model.exclusion_create_request import ExclusionCreateRequest
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
    api_instance = exclusions_api.ExclusionsApi(api_client)
    exclusion_id = "exclusionId_example" # str | Exclusion ID or UUID
    exclusion_create_request = ExclusionCreateRequest(
        body="body_example",
        auto_resolve=True,
        name="name_example",
        rule_ids=[
            1,
        ],
        rule_uuids=[
            "rule_uuids_example",
        ],
        note="note_example",
    ) # ExclusionCreateRequest | 
    id_type = "uuid" # str | if $idType=uuid {id} in URL is interpreted as uuid (optional) if omitted the server will use the default value of "uuid"

    # example passing only required values which don't have defaults set
    try:
        # Edits exclusion body
        api_response = api_instance.edit_exclusion(exclusion_id, exclusion_create_request)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ExclusionsApi->edit_exclusion: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Edits exclusion body
        api_response = api_instance.edit_exclusion(exclusion_id, exclusion_create_request, id_type=id_type)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ExclusionsApi->edit_exclusion: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exclusion_id** | **str**| Exclusion ID or UUID |
 **exclusion_create_request** | [**ExclusionCreateRequest**](ExclusionCreateRequest.md)|  |
 **id_type** | **str**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] if omitted the server will use the default value of "uuid"

### Return type

[**ExclusionDetailsResponse**](ExclusionDetailsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created |  * Location -  <br>  * X-Security-Token -  <br>  |
**401** | Credentials or access token missing or invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_exclusion_details**
> ExclusionDetailsResponse get_exclusion_details(exclusion_id)

Gets a single exclusion

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
import time
import openapi_client
from openapi_client.api import exclusions_api
from openapi_client.model.unauthorized_error import UnauthorizedError
from openapi_client.model.exclusion_details_response import ExclusionDetailsResponse
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
    api_instance = exclusions_api.ExclusionsApi(api_client)
    exclusion_id = "exclusionId_example" # str | Exclusion ID or UUID
    id_type = "uuid" # str | if $idType=uuid {id} in URL is interpreted as uuid (optional) if omitted the server will use the default value of "uuid"

    # example passing only required values which don't have defaults set
    try:
        # Gets a single exclusion
        api_response = api_instance.get_exclusion_details(exclusion_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ExclusionsApi->get_exclusion_details: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Gets a single exclusion
        api_response = api_instance.get_exclusion_details(exclusion_id, id_type=id_type)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ExclusionsApi->get_exclusion_details: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exclusion_id** | **str**| Exclusion ID or UUID |
 **id_type** | **str**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] if omitted the server will use the default value of "uuid"

### Return type

[**ExclusionDetailsResponse**](ExclusionDetailsResponse.md)

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

# **get_exclusions_by_rule**
> ExclusionByRuleResponse get_exclusions_by_rule(rule_id)

Get exclusions associated with a rule

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
import time
import openapi_client
from openapi_client.api import exclusions_api
from openapi_client.model.unauthorized_error import UnauthorizedError
from openapi_client.model.exclusion_by_rule_response import ExclusionByRuleResponse
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
    api_instance = exclusions_api.ExclusionsApi(api_client)
    rule_id = "ruleId_example" # str | Rule ID or UUID
    id_type = "uuid" # str | if $idType=uuid {id} in URL is interpreted as uuid (optional) if omitted the server will use the default value of "uuid"

    # example passing only required values which don't have defaults set
    try:
        # Get exclusions associated with a rule
        api_response = api_instance.get_exclusions_by_rule(rule_id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ExclusionsApi->get_exclusions_by_rule: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Get exclusions associated with a rule
        api_response = api_instance.get_exclusions_by_rule(rule_id, id_type=id_type)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ExclusionsApi->get_exclusions_by_rule: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule_id** | **str**| Rule ID or UUID |
 **id_type** | **str**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] if omitted the server will use the default value of "uuid"

### Return type

[**ExclusionByRuleResponse**](ExclusionByRuleResponse.md)

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

# **list_exclusions**
> ExclusionListResponse list_exclusions()

List exclusions

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
import time
import openapi_client
from openapi_client.api import exclusions_api
from openapi_client.model.exclusion_list_response import ExclusionListResponse
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
    api_instance = exclusions_api.ExclusionsApi(api_client)
    top = 1 # int | system query option requests the number of items in the queried collection to be included in the result (optional)
    skip = 1 # int | system query option requests the number of items in the queried collection that are to be skipped and not included in the result (optional)
    count = 0 # int | system query option allows clients to request a count of the matching resources included with the resources in the response. if set to $count=1, the number of detections is returned. (optional)
    order_by = "$orderBy_example" # str | system query option allows clients to request resources in either ascending order using asc or descending order using desc. If not specified the order is in ascending way (optional)
    filter = "$filter_example" # str | system query option allows clients to filter a collection of resources that are addressed by a request URL. The query supports the following operators eq, ne, gt, ge, lt, le, and, or, and (). Operators can be combined with values to filter data. For instance, “resolved eq 0” will report only unresolved detections. (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # List exclusions
        api_response = api_instance.list_exclusions(top=top, skip=skip, count=count, order_by=order_by, filter=filter)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling ExclusionsApi->list_exclusions: %s\n" % e)
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

[**ExclusionListResponse**](ExclusionListResponse.md)

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

