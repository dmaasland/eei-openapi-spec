# ExclusionListResponse
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **Int32** |  | [optional] 
**Value** | [**ExclusionListResponseValue[]**](ExclusionListResponseValue.md) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ExclusionListResponse = Initialize-PSOpenAPIToolsExclusionListResponse  -Count null `
 -Value null
```

- Convert the resource to JSON
```powershell
$ExclusionListResponse | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

