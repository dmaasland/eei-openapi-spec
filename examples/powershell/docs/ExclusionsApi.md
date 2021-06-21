# PSOpenAPITools.PSOpenAPITools/Api.ExclusionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-Exclusion**](ExclusionsApi.md#New-Exclusion) | **POST** /api/v1/exclusions | Creates a new exclusion
[**Invoke-DeleteExclusion**](ExclusionsApi.md#Invoke-DeleteExclusion) | **DELETE** /api/v1/exclusions/{exclusionId} | Deletes an exclusion
[**Edit-Exclusion**](ExclusionsApi.md#Edit-Exclusion) | **PUT** /api/v1/exclusions/{exclusionId} | Edits exclusion body
[**Get-ExclusionDetails**](ExclusionsApi.md#Get-ExclusionDetails) | **GET** /api/v1/exclusions/{exclusionId} | Gets a single exclusion
[**Get-ExclusionsByRule**](ExclusionsApi.md#Get-ExclusionsByRule) | **GET** /api/v1/exclusions/rule/{ruleId} | Get exclusions associated with a rule
[**Invoke-ListExclusions**](ExclusionsApi.md#Invoke-ListExclusions) | **GET** /api/v1/exclusions | List exclusions


<a name="New-Exclusion"></a>
# **New-Exclusion**
> ExclusionDetailsResponse New-Exclusion<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ExclusionCreateRequest] <PSCustomObject><br>

Creates a new exclusion

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$ExclusionCreateRequest = (Initialize-ExclusionCreateRequest -Body "Body_example" -AutoResolve $false -Name "Name_example" -RuleIds @(123) -RuleUuids @("RuleUuids_example") -Note "Note_example") # ExclusionCreateRequest | 

# Creates a new exclusion
try {
     $Result = New-Exclusion -ExclusionCreateRequest $ExclusionCreateRequest
} catch {
    Write-Host ("Exception occured when calling New-Exclusion: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ExclusionCreateRequest** | [**ExclusionCreateRequest**](ExclusionCreateRequest.md)|  | 

### Return type

[**ExclusionDetailsResponse**](ExclusionDetailsResponse.md) (PSCustomObject)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Invoke-DeleteExclusion"></a>
# **Invoke-DeleteExclusion**
> void Invoke-DeleteExclusion<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ExclusionId] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-IdType] <String><br>

Deletes an exclusion

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$ExclusionId = "ExclusionId_example" # String | Exclusion ID or UUID
$IdType = "uuid" # String | if $idType=uuid {id} in URL is interpreted as uuid (optional)

# Deletes an exclusion
try {
     $Result = Invoke-DeleteExclusion -ExclusionId $ExclusionId -IdType $IdType
} catch {
    Write-Host ("Exception occured when calling Invoke-DeleteExclusion: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ExclusionId** | **String**| Exclusion ID or UUID | 
 **IdType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Edit-Exclusion"></a>
# **Edit-Exclusion**
> ExclusionDetailsResponse Edit-Exclusion<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ExclusionId] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ExclusionCreateRequest] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-IdType] <String><br>

Edits exclusion body

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$ExclusionId = "ExclusionId_example" # String | Exclusion ID or UUID
$ExclusionCreateRequest = (Initialize-ExclusionCreateRequest -Body "Body_example" -AutoResolve $false -Name "Name_example" -RuleIds @(123) -RuleUuids @("RuleUuids_example") -Note "Note_example") # ExclusionCreateRequest | 
$IdType = "uuid" # String | if $idType=uuid {id} in URL is interpreted as uuid (optional)

# Edits exclusion body
try {
     $Result = Edit-Exclusion -ExclusionId $ExclusionId -ExclusionCreateRequest $ExclusionCreateRequest -IdType $IdType
} catch {
    Write-Host ("Exception occured when calling Edit-Exclusion: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ExclusionId** | **String**| Exclusion ID or UUID | 
 **ExclusionCreateRequest** | [**ExclusionCreateRequest**](ExclusionCreateRequest.md)|  | 
 **IdType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

[**ExclusionDetailsResponse**](ExclusionDetailsResponse.md) (PSCustomObject)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Get-ExclusionDetails"></a>
# **Get-ExclusionDetails**
> ExclusionDetailsResponse Get-ExclusionDetails<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ExclusionId] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-IdType] <String><br>

Gets a single exclusion

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$ExclusionId = "ExclusionId_example" # String | Exclusion ID or UUID
$IdType = "uuid" # String | if $idType=uuid {id} in URL is interpreted as uuid (optional)

# Gets a single exclusion
try {
     $Result = Get-ExclusionDetails -ExclusionId $ExclusionId -IdType $IdType
} catch {
    Write-Host ("Exception occured when calling Get-ExclusionDetails: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ExclusionId** | **String**| Exclusion ID or UUID | 
 **IdType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

[**ExclusionDetailsResponse**](ExclusionDetailsResponse.md) (PSCustomObject)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Get-ExclusionsByRule"></a>
# **Get-ExclusionsByRule**
> Int32[] Get-ExclusionsByRule<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-RuleId] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-IdType] <String><br>

Get exclusions associated with a rule

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$RuleId = "RuleId_example" # String | Rule ID or UUID
$IdType = "uuid" # String | if $idType=uuid {id} in URL is interpreted as uuid (optional)

# Get exclusions associated with a rule
try {
     $Result = Get-ExclusionsByRule -RuleId $RuleId -IdType $IdType
} catch {
    Write-Host ("Exception occured when calling Get-ExclusionsByRule: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **RuleId** | **String**| Rule ID or UUID | 
 **IdType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

**Int32[]**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Invoke-ListExclusions"></a>
# **Invoke-ListExclusions**
> ExclusionListResponse Invoke-ListExclusions<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Top] <System.Nullable[Int32]><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Skip] <System.Nullable[Int32]><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Count] <System.Nullable[Int32]><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-OrderBy] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Filter] <String><br>

List exclusions

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

# List exclusions
try {
     $Result = Invoke-ListExclusions -Top $Top -Skip $Skip -Count $Count -OrderBy $OrderBy -Filter $Filter
} catch {
    Write-Host ("Exception occured when calling Invoke-ListExclusions: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
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

[**ExclusionListResponse**](ExclusionListResponse.md) (PSCustomObject)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

