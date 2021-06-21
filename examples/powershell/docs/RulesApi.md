# PSOpenAPITools.PSOpenAPITools/Api.RulesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-Rule**](RulesApi.md#New-Rule) | **POST** /api/v1/rules | Creates a new rule
[**Invoke-DeleteRule**](RulesApi.md#Invoke-DeleteRule) | **DELETE** /api/v1/rules/{id} | Deletes a rule
[**Edit-Rule**](RulesApi.md#Edit-Rule) | **PUT** /api/v1/rules/{id} | Edits rule body
[**Get-RuleDetails**](RulesApi.md#Get-RuleDetails) | **GET** /api/v1/rules/{id} | Gets a single rule
[**Invoke-ListRules**](RulesApi.md#Invoke-ListRules) | **GET** /api/v1/rules | List rules
[**Update-Rule**](RulesApi.md#Update-Rule) | **PATCH** /api/v1/rules/{id} | Updates particular rule


<a name="New-Rule"></a>
# **New-Rule**
> RuleCreateResponse New-Rule<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-RuleCreateRequest] <PSCustomObject><br>

Creates a new rule

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$RuleCreateRequest = (Initialize-RuleCreateRequest -Definition (Initialize-RuleCreateRequest_definition -Ancestor (Initialize-RuleCreateRequest_definition_ancestor -Distance 123 -Unique $false) -Parentprocess "TODO" -VarProcess "TODO" -Operations (Initialize-RuleCreateRequest_definition_operations -Operation (Initialize-RuleCreateRequest_definition_operations_operation -Type "Type_example"))) -Description (Initialize-RuleCreateRequest_description -Name "Name_example" -Category "Category_example" -Explanation "Explanation_example" -Os "Windows" -Mitreattackid "Mitreattackid_example" -MaliciousCauses "MaliciousCauses_example" -BenignCauses "BenignCauses_example" -RecommendedActions "RecommendedActions_example") -Actions (Initialize-RuleCreateRequest_actions -Action (Initialize-RuleCreateRequest_actions_action -Name "TriggerDetection"))) # RuleCreateRequest | 

# Creates a new rule
try {
     $Result = New-Rule -RuleCreateRequest $RuleCreateRequest
} catch {
    Write-Host ("Exception occured when calling New-Rule: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **RuleCreateRequest** | [**RuleCreateRequest**](RuleCreateRequest.md)|  | 

### Return type

[**RuleCreateResponse**](RuleCreateResponse.md) (PSCustomObject)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Invoke-DeleteRule"></a>
# **Invoke-DeleteRule**
> void Invoke-DeleteRule<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-IdType] <String><br>

Deletes a rule

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$Id = "Id_example" # String | ID or UUID
$IdType = "uuid" # String | if $idType=uuid {id} in URL is interpreted as uuid (optional)

# Deletes a rule
try {
     $Result = Invoke-DeleteRule -Id $Id -IdType $IdType
} catch {
    Write-Host ("Exception occured when calling Invoke-DeleteRule: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | **String**| ID or UUID | 
 **IdType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-Rule"></a>
# **Edit-Rule**
> RuleDetailsResponse Edit-Rule<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-IdType] <String><br>

Edits rule body

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$Id = "Id_example" # String | ID or UUID
$IdType = "uuid" # String | if $idType=uuid {id} in URL is interpreted as uuid (optional)

# Edits rule body
try {
     $Result = Edit-Rule -Id $Id -IdType $IdType
} catch {
    Write-Host ("Exception occured when calling Edit-Rule: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | **String**| ID or UUID | 
 **IdType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

[**RuleDetailsResponse**](RuleDetailsResponse.md) (PSCustomObject)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Get-RuleDetails"></a>
# **Get-RuleDetails**
> RuleDetailsResponse Get-RuleDetails<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-IdType] <String><br>

Gets a single rule

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$Id = "Id_example" # String | ID or UUID
$IdType = "uuid" # String | if $idType=uuid {id} in URL is interpreted as uuid (optional)

# Gets a single rule
try {
     $Result = Get-RuleDetails -Id $Id -IdType $IdType
} catch {
    Write-Host ("Exception occured when calling Get-RuleDetails: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | **String**| ID or UUID | 
 **IdType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

[**RuleDetailsResponse**](RuleDetailsResponse.md) (PSCustomObject)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Invoke-ListRules"></a>
# **Invoke-ListRules**
> RuleListResponse Invoke-ListRules<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Top] <System.Nullable[Int32]><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Skip] <System.Nullable[Int32]><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Count] <System.Nullable[Int32]><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-OrderBy] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Filter] <String><br>

List rules

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$Top = 987 # Int32 | system query option requests the number of items in the queried collection to be included in the result (optional)
$Skip = 987 # Int32 | system query option requests the number of items in the queried collection that are to be skipped and not included in the result (optional)
$Count = 987 # Int32 | system query option allows clients to request a count of the matching resources included with the resources in the response. if set to $count=1, the number of detections is returned. (optional)
$OrderBy = "OrderBy_example" # String | system query option allows clients to request resources in either ascending order using asc or descending order using desc. If not specified the order is in ascending way (optional)
$Filter = "Filter_example" # String | system query option allows clients to filter a collection of resources that are addressed by a request URL. The query supports the following operators eq, ne, gt, ge, lt, le, and, or, and (). Operators can be combined with values to filter data. For instance, “resolved eq 0” will report only unresolved detections. (optional)

# List rules
try {
     $Result = Invoke-ListRules -Top $Top -Skip $Skip -Count $Count -OrderBy $OrderBy -Filter $Filter
} catch {
    Write-Host ("Exception occured when calling Invoke-ListRules: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Top** | **Int32**| system query option requests the number of items in the queried collection to be included in the result | [optional] 
 **Skip** | **Int32**| system query option requests the number of items in the queried collection that are to be skipped and not included in the result | [optional] 
 **Count** | **Int32**| system query option allows clients to request a count of the matching resources included with the resources in the response. if set to $count&#x3D;1, the number of detections is returned. | [optional] 
 **OrderBy** | **String**| system query option allows clients to request resources in either ascending order using asc or descending order using desc. If not specified the order is in ascending way | [optional] 
 **Filter** | **String**| system query option allows clients to filter a collection of resources that are addressed by a request URL. The query supports the following operators eq, ne, gt, ge, lt, le, and, or, and (). Operators can be combined with values to filter data. For instance, “resolved eq 0” will report only unresolved detections. | [optional] 

### Return type

[**RuleListResponse**](RuleListResponse.md) (PSCustomObject)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Update-Rule"></a>
# **Update-Rule**
> void Update-Rule<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-IdType] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-RuleUpdateRequest] <PSCustomObject><br>

Updates particular rule

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$Id = "Id_example" # String | ID or UUID
$IdType = "uuid" # String | if $idType=uuid {id} in URL is interpreted as uuid (optional)
$RuleUpdateRequest = (Initialize-RuleUpdateRequest -Enabled $false) # RuleUpdateRequest |  (optional)

# Updates particular rule
try {
     $Result = Update-Rule -Id $Id -IdType $IdType -RuleUpdateRequest $RuleUpdateRequest
} catch {
    Write-Host ("Exception occured when calling Update-Rule: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | **String**| ID or UUID | 
 **IdType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 
 **RuleUpdateRequest** | [**RuleUpdateRequest**](RuleUpdateRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

