# PSOpenAPITools.PSOpenAPITools/Api.DetectionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-DetectionDetails**](DetectionsApi.md#Get-DetectionDetails) | **GET** /api/v1/detections/{id} | Get detection details
[**Invoke-ListDetections**](DetectionsApi.md#Invoke-ListDetections) | **GET** /api/v1/detections | List of detections
[**Update-Detection**](DetectionsApi.md#Update-Detection) | **PATCH** /api/v1/detections/{id} | Update detection


<a name="Get-DetectionDetails"></a>
# **Get-DetectionDetails**
> DetectionDetailsResponse Get-DetectionDetails<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-IdType] <String><br>

Get detection details

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$Id = "Id_example" # String | ID or UUID
$IdType = "uuid" # String | if $idType=uuid {id} in URL is interpreted as uuid (optional)

# Get detection details
try {
     $Result = Get-DetectionDetails -Id $Id -IdType $IdType
} catch {
    Write-Host ("Exception occured when calling Get-DetectionDetails: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | **String**| ID or UUID | 
 **IdType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

[**DetectionDetailsResponse**](DetectionDetailsResponse.md) (PSCustomObject)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Invoke-ListDetections"></a>
# **Invoke-ListDetections**
> DetectionListResponse Invoke-ListDetections<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Top] <System.Nullable[Int32]><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Skip] <System.Nullable[Int32]><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Count] <System.Nullable[Int32]><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-OrderBy] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Filter] <String><br>

List of detections

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

# List of detections
try {
     $Result = Invoke-ListDetections -Top $Top -Skip $Skip -Count $Count -OrderBy $OrderBy -Filter $Filter
} catch {
    Write-Host ("Exception occured when calling Invoke-ListDetections: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
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

[**DetectionListResponse**](DetectionListResponse.md) (PSCustomObject)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Update-Detection"></a>
# **Update-Detection**
> void Update-Detection<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-DetectionUpdateRequest] <PSCustomObject><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-IdType] <String><br>

Update detection

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$Id = "Id_example" # String | ID or UUID
$DetectionUpdateRequest = (Initialize-DetectionUpdateRequest -Resolved $false -Priority 123 -Note "Note_example") # DetectionUpdateRequest | 
$IdType = "uuid" # String | if $idType=uuid {id} in URL is interpreted as uuid (optional)

# Update detection
try {
     $Result = Update-Detection -Id $Id -DetectionUpdateRequest $DetectionUpdateRequest -IdType $IdType
} catch {
    Write-Host ("Exception occured when calling Update-Detection: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | **String**| ID or UUID | 
 **DetectionUpdateRequest** | [**DetectionUpdateRequest**](DetectionUpdateRequest.md)|  | 
 **IdType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

