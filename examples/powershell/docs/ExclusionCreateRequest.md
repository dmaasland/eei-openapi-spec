# ExclusionCreateRequest
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Body** | **String** |  | 
**AutoResolve** | **Boolean** |  | 
**Name** | **String** |  | 
**RuleIds** | **Int32[]** |  | [optional] 
**RuleUuids** | **String[]** |  | [optional] 
**Note** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ExclusionCreateRequest = Initialize-PSOpenAPIToolsExclusionCreateRequest  -Body null `
 -AutoResolve null `
 -Name null `
 -RuleIds null `
 -RuleUuids null `
 -Note null
```

- Convert the resource to JSON
```powershell
$ExclusionCreateRequest | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

