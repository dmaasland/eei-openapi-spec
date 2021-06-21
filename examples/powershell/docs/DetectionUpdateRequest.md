# DetectionUpdateRequest
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Resolved** | **Boolean** |  | [optional] 
**Priority** | **Int32** |  | [optional] 
**Note** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$DetectionUpdateRequest = Initialize-PSOpenAPIToolsDetectionUpdateRequest  -Resolved null `
 -Priority null `
 -Note null
```

- Convert the resource to JSON
```powershell
$DetectionUpdateRequest | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

