# openapi_client.RulesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_rule**](RulesApi.md#create_rule) | **POST** /api/v1/rules | Creates a new rule
[**delete_rule**](RulesApi.md#delete_rule) | **DELETE** /api/v1/rules/{id} | Deletes a rule
[**edit_rule**](RulesApi.md#edit_rule) | **PUT** /api/v1/rules/{id} | Edits rule body
[**get_rule_details**](RulesApi.md#get_rule_details) | **GET** /api/v1/rules/{id} | Gets a single rule
[**list_rules**](RulesApi.md#list_rules) | **GET** /api/v1/rules | List rules
[**update_rule**](RulesApi.md#update_rule) | **PATCH** /api/v1/rules/{id} | Updates particular rule


# **create_rule**
> RuleCreateResponse create_rule(rule_create_request)

Creates a new rule

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
import time
import openapi_client
from openapi_client.api import rules_api
from openapi_client.model.unauthorized_error import UnauthorizedError
from openapi_client.model.rule_create_response import RuleCreateResponse
from openapi_client.model.rule_create_request import RuleCreateRequest
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
    api_instance = rules_api.RulesApi(api_client)
    rule_create_request = RuleCreateRequest(
        definition=RuleCreateRequestDefinition(
            ancestor=RuleCreateRequestDefinitionAncestor(
                distance=1,
                unique=True,
            ),
            parentprocess={},
            process={},
            operations=RuleCreateRequestDefinitionOperations(
                operation=RuleCreateRequestDefinitionOperationsOperation(
                    type="type_example",
                ),
            ),
        ),
        description=RuleCreateRequestDescription(
            name="name_example",
            category="category_example",
            explanation="explanation_example",
            os="Windows",
            mitreattackid="mitreattackid_example",
            malicious_causes="malicious_causes_example",
            benign_causes="benign_causes_example",
            recommended_actions="recommended_actions_example",
        ),
        actions=RuleCreateRequestActions(
            action=RuleCreateRequestActionsAction(
                name="TriggerDetection",
            ),
        ),
    ) # RuleCreateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Creates a new rule
        api_response = api_instance.create_rule(rule_create_request)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling RulesApi->create_rule: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule_create_request** | [**RuleCreateRequest**](RuleCreateRequest.md)|  |

### Return type

[**RuleCreateResponse**](RuleCreateResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Security-Token -  <br>  |
**401** | Credentials or access token missing or invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_rule**
> delete_rule(id)

Deletes a rule

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
import time
import openapi_client
from openapi_client.api import rules_api
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
    api_instance = rules_api.RulesApi(api_client)
    id = "id_example" # str | ID or UUID
    id_type = "uuid" # str | if $idType=uuid {id} in URL is interpreted as uuid (optional) if omitted the server will use the default value of "uuid"

    # example passing only required values which don't have defaults set
    try:
        # Deletes a rule
        api_instance.delete_rule(id)
    except openapi_client.ApiException as e:
        print("Exception when calling RulesApi->delete_rule: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Deletes a rule
        api_instance.delete_rule(id, id_type=id_type)
    except openapi_client.ApiException as e:
        print("Exception when calling RulesApi->delete_rule: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID or UUID |
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
**403** | Insufficient permissions to perform action |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **edit_rule**
> RuleDetailsResponse edit_rule(id)

Edits rule body

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
import time
import openapi_client
from openapi_client.api import rules_api
from openapi_client.model.unauthorized_error import UnauthorizedError
from openapi_client.model.rule_details_response import RuleDetailsResponse
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
    api_instance = rules_api.RulesApi(api_client)
    id = "id_example" # str | ID or UUID
    id_type = "uuid" # str | if $idType=uuid {id} in URL is interpreted as uuid (optional) if omitted the server will use the default value of "uuid"

    # example passing only required values which don't have defaults set
    try:
        # Edits rule body
        api_response = api_instance.edit_rule(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling RulesApi->edit_rule: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Edits rule body
        api_response = api_instance.edit_rule(id, id_type=id_type)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling RulesApi->edit_rule: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID or UUID |
 **id_type** | **str**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] if omitted the server will use the default value of "uuid"

### Return type

[**RuleDetailsResponse**](RuleDetailsResponse.md)

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

# **get_rule_details**
> RuleDetailsResponse get_rule_details(id)

Gets a single rule

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
import time
import openapi_client
from openapi_client.api import rules_api
from openapi_client.model.unauthorized_error import UnauthorizedError
from openapi_client.model.rule_details_response import RuleDetailsResponse
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
    api_instance = rules_api.RulesApi(api_client)
    id = "id_example" # str | ID or UUID
    id_type = "uuid" # str | if $idType=uuid {id} in URL is interpreted as uuid (optional) if omitted the server will use the default value of "uuid"

    # example passing only required values which don't have defaults set
    try:
        # Gets a single rule
        api_response = api_instance.get_rule_details(id)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling RulesApi->get_rule_details: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Gets a single rule
        api_response = api_instance.get_rule_details(id, id_type=id_type)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling RulesApi->get_rule_details: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID or UUID |
 **id_type** | **str**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] if omitted the server will use the default value of "uuid"

### Return type

[**RuleDetailsResponse**](RuleDetailsResponse.md)

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

# **list_rules**
> RuleListResponse list_rules()

List rules

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
import time
import openapi_client
from openapi_client.api import rules_api
from openapi_client.model.unauthorized_error import UnauthorizedError
from openapi_client.model.rule_list_response import RuleListResponse
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
    api_instance = rules_api.RulesApi(api_client)
    top = 1 # int | system query option requests the number of items in the queried collection to be included in the result (optional)
    skip = 1 # int | system query option requests the number of items in the queried collection that are to be skipped and not included in the result (optional)
    count = 0 # int | system query option allows clients to request a count of the matching resources included with the resources in the response. if set to $count=1, the number of detections is returned. (optional)
    order_by = "$orderBy_example" # str | system query option allows clients to request resources in either ascending order using asc or descending order using desc. If not specified the order is in ascending way (optional)
    filter = "$filter_example" # str | system query option allows clients to filter a collection of resources that are addressed by a request URL. The query supports the following operators eq, ne, gt, ge, lt, le, and, or, and (). Operators can be combined with values to filter data. For instance, “resolved eq 0” will report only unresolved detections. (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # List rules
        api_response = api_instance.list_rules(top=top, skip=skip, count=count, order_by=order_by, filter=filter)
        pprint(api_response)
    except openapi_client.ApiException as e:
        print("Exception when calling RulesApi->list_rules: %s\n" % e)
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

[**RuleListResponse**](RuleListResponse.md)

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

# **update_rule**
> update_rule(id)

Updates particular rule

### Example

* Bearer (JWT) Authentication (bearerAuth):
```python
import time
import openapi_client
from openapi_client.api import rules_api
from openapi_client.model.unauthorized_error import UnauthorizedError
from openapi_client.model.rule_update_request import RuleUpdateRequest
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
    api_instance = rules_api.RulesApi(api_client)
    id = "id_example" # str | ID or UUID
    id_type = "uuid" # str | if $idType=uuid {id} in URL is interpreted as uuid (optional) if omitted the server will use the default value of "uuid"
    rule_update_request = RuleUpdateRequest(
        enabled=True,
    ) # RuleUpdateRequest |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Updates particular rule
        api_instance.update_rule(id)
    except openapi_client.ApiException as e:
        print("Exception when calling RulesApi->update_rule: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Updates particular rule
        api_instance.update_rule(id, id_type=id_type, rule_update_request=rule_update_request)
    except openapi_client.ApiException as e:
        print("Exception when calling RulesApi->update_rule: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID or UUID |
 **id_type** | **str**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] if omitted the server will use the default value of "uuid"
 **rule_update_request** | [**RuleUpdateRequest**](RuleUpdateRequest.md)|  | [optional]

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

