# AuthenticateRequest
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Username** | **String** |  | 
**Password** | **String** |  | 
**Domain** | **Boolean** |  | 

## Examples

- Prepare the resource
```powershell
$AuthenticateRequest = Initialize-PSOpenAPIToolsAuthenticateRequest  -Username null `
 -Password null `
 -Domain null
```

- Convert the resource to JSON
```powershell
$AuthenticateRequest | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

