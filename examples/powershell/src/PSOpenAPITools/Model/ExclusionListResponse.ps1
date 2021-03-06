#
# ESET Enterprise Inspector
# ESET Enterprise Inspector REST API definition
# Version: 1.6-oas3
# Generated by OpenAPI Generator: https://openapi-generator.tech
#

<#
.SYNOPSIS

No summary available.

.DESCRIPTION

No description available.

.PARAMETER Count
No description available.
.PARAMETER Value
No description available.
.OUTPUTS

ExclusionListResponse<PSCustomObject>
#>

function Initialize-ExclusionListResponse {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Int32]]
        ${Count},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [PSCustomObject[]]
        ${Value}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => ExclusionListResponse' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug


        $PSO = [PSCustomObject]@{
            "count" = ${Count}
            "value" = ${Value}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to ExclusionListResponse<PSCustomObject>

.DESCRIPTION

Convert from JSON to ExclusionListResponse<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

ExclusionListResponse<PSCustomObject>
#>
function ConvertFrom-JsonToExclusionListResponse {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => ExclusionListResponse' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in ExclusionListResponse
        $AllProperties = ("count", "value")
        foreach ($name in $JsonParameters.PsObject.Properties.Name) {
            if (!($AllProperties.Contains($name))) {
                throw "Error! JSON key '$name' not found in the properties: $($AllProperties)"
            }
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "count"))) { #optional property not found
            $Count = $null
        } else {
            $Count = $JsonParameters.PSobject.Properties["count"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "value"))) { #optional property not found
            $Value = $null
        } else {
            $Value = $JsonParameters.PSobject.Properties["value"].value
        }

        $PSO = [PSCustomObject]@{
            "count" = ${Count}
            "value" = ${Value}
        }

        return $PSO
    }

}

