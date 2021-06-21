# PSOpenAPITools.PSOpenAPITools/Api.RemediationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Block-Executable**](RemediationApi.md#Block-Executable) | **POST** /api/v1/executables/{id}/block | Block an executable
[**Unblock-Executable**](RemediationApi.md#Unblock-Executable) | **POST** /api/v1/executables/{id}/unblock | Unblock an executable


<a name="Block-Executable"></a>
# **Block-Executable**
> void Block-Executable<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-IdType] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ExecutableBlockRequest] <PSCustomObject><br>

Block an executable

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$Id = "Id_example" # String | ID or SHA1
$IdType = "sha1" # String | if $idType=sha1 {id} in URL is interpreted as SHA1 (optional)
$ExecutableBlockRequest = (Initialize-ExecutableBlockRequest -Clean $false -Note "Note_example") # ExecutableBlockRequest |  (optional)

# Block an executable
try {
     $Result = Block-Executable -Id $Id -IdType $IdType -ExecutableBlockRequest $ExecutableBlockRequest
} catch {
    Write-Host ("Exception occured when calling Block-Executable: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | **String**| ID or SHA1 | 
 **IdType** | **String**| if $idType&#x3D;sha1 {id} in URL is interpreted as SHA1 | [optional] 
 **ExecutableBlockRequest** | [**ExecutableBlockRequest**](ExecutableBlockRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Unblock-Executable"></a>
# **Unblock-Executable**
> void Unblock-Executable<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Id] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-IdType] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ExecutableUnblockRequest] <PSCustomObject><br>

Unblock an executable

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$Id = "Id_example" # String | ID or SHA1
$IdType = "sha1" # String | if $idType=sha1 {id} in URL is interpreted as SHA1 (optional)
$ExecutableUnblockRequest = (Initialize-ExecutableUnblockRequest -Note "Note_example") # ExecutableUnblockRequest |  (optional)

# Unblock an executable
try {
     $Result = Unblock-Executable -Id $Id -IdType $IdType -ExecutableUnblockRequest $ExecutableUnblockRequest
} catch {
    Write-Host ("Exception occured when calling Unblock-Executable: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Id** | **String**| ID or SHA1 | 
 **IdType** | **String**| if $idType&#x3D;sha1 {id} in URL is interpreted as SHA1 | [optional] 
 **ExecutableUnblockRequest** | [**ExecutableUnblockRequest**](ExecutableUnblockRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

