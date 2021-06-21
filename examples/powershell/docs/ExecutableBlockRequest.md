# ExecutableBlockRequest
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Clean** | **Boolean** |  | [optional] 
**Note** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ExecutableBlockRequest = Initialize-PSOpenAPIToolsExecutableBlockRequest  -Clean null `
 -Note null
```

- Convert the resource to JSON
```powershell
$ExecutableBlockRequest | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

