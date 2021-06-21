# PSOpenAPITools.PSOpenAPITools/Api.AuthenticationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Invoke-AuthenticatePost**](AuthenticationApi.md#Invoke-AuthenticatePost) | **POST** /api/v1/authenticate | Authentication
[**Invoke-AuthenticatePut**](AuthenticationApi.md#Invoke-AuthenticatePut) | **PUT** /api/v1/authenticate | Authentication


<a name="Invoke-AuthenticatePost"></a>
# **Invoke-AuthenticatePost**
> void Invoke-AuthenticatePost<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-AuthenticateRequest] <PSCustomObject><br>

Authentication

Authenticate

### Example
```powershell
$AuthenticateRequest = (Initialize-AuthenticateRequest -Username "Username_example" -Password "Password_example" -Domain $false) # AuthenticateRequest | 

# Authentication
try {
     $Result = Invoke-AuthenticatePost -AuthenticateRequest $AuthenticateRequest
} catch {
    Write-Host ("Exception occured when calling Invoke-AuthenticatePost: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AuthenticateRequest** | [**AuthenticateRequest**](AuthenticateRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Invoke-AuthenticatePut"></a>
# **Invoke-AuthenticatePut**
> void Invoke-AuthenticatePut<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-AuthenticateRequest] <PSCustomObject><br>

Authentication

Authenticate

### Example
```powershell
$AuthenticateRequest = (Initialize-AuthenticateRequest -Username "Username_example" -Password "Password_example" -Domain $false) # AuthenticateRequest | 

# Authentication
try {
     $Result = Invoke-AuthenticatePut -AuthenticateRequest $AuthenticateRequest
} catch {
    Write-Host ("Exception occured when calling Invoke-AuthenticatePut: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **AuthenticateRequest** | [**AuthenticateRequest**](AuthenticateRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

