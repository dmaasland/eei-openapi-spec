# PSOpenAPITools.PSOpenAPITools/Api.ComputersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ConvertTo-tegrateComputer**](ComputersApi.md#ConvertTo-tegrateComputer) | **POST** /api/v1/machines/{computerId}/integrate | Integrate a computer back into the network
[**Invoke-IsolateComputer**](ComputersApi.md#Invoke-IsolateComputer) | **POST** /api/v1/machines/{computerId}/isolate | Isolate a computer from the network


<a name="ConvertTo-tegrateComputer"></a>
# **ConvertTo-tegrateComputer**
> IsolateResponse ConvertTo-tegrateComputer<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ComputerId] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-IdType] <String><br>

Integrate a computer back into the network

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$ComputerId = "ComputerId_example" # String | Computer ID or UUID
$IdType = "uuid" # String | if $idType=uuid {id} in URL is interpreted as uuid (optional)

# Integrate a computer back into the network
try {
     $Result = ConvertTo-tegrateComputer -ComputerId $ComputerId -IdType $IdType
} catch {
    Write-Host ("Exception occured when calling ConvertTo-tegrateComputer: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ComputerId** | **String**| Computer ID or UUID | 
 **IdType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

[**IsolateResponse**](IsolateResponse.md) (PSCustomObject)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Invoke-IsolateComputer"></a>
# **Invoke-IsolateComputer**
> IsolateResponse Invoke-IsolateComputer<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ComputerId] <String><br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-IdType] <String><br>

Isolate a computer from the network

### Example
```powershell
# general setting of the PowerShell module, e.g. base URL, authentication, etc
$Configuration = Get-Configuration
# Configure HTTP basic authorization: bearerAuth
$Configuration.Username = "YOUR_USERNAME"
$Configuration.Password = "YOUR_PASSWORD"

$ComputerId = "ComputerId_example" # String | Computer ID or UUID
$IdType = "uuid" # String | if $idType=uuid {id} in URL is interpreted as uuid (optional)

# Isolate a computer from the network
try {
     $Result = Invoke-IsolateComputer -ComputerId $ComputerId -IdType $IdType
} catch {
    Write-Host ("Exception occured when calling Invoke-IsolateComputer: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ComputerId** | **String**| Computer ID or UUID | 
 **IdType** | **String**| if $idType&#x3D;uuid {id} in URL is interpreted as uuid | [optional] 

### Return type

[**IsolateResponse**](IsolateResponse.md) (PSCustomObject)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

