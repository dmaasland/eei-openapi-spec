# DetectionListResponse
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **Int32** |  | [optional] 
**Value** | [**DetectionListResponseValue[]**](DetectionListResponseValue.md) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$DetectionListResponse = Initialize-PSOpenAPIToolsDetectionListResponse  -Count null `
 -Value null
```

- Convert the resource to JSON
```powershell
$DetectionListResponse | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

