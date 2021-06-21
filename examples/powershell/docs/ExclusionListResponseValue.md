# ExclusionListResponseValue
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** |  | [optional] 
**Id** | **Int32** |  | [optional] 
**Name** | **String** |  | [optional] 
**Note** | **String** |  | [optional] 
**Uuid** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ExclusionListResponseValue = Initialize-PSOpenAPIToolsExclusionListResponseValue  -Enabled null `
 -Id null `
 -Name null `
 -Note null `
 -Uuid null
```

- Convert the resource to JSON
```powershell
$ExclusionListResponseValue | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

