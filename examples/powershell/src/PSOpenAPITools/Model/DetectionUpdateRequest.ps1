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

.PARAMETER Resolved
No description available.
.PARAMETER Priority
No description available.
.PARAMETER Note
No description available.
.OUTPUTS

DetectionUpdateRequest<PSCustomObject>
#>

function Initialize-DetectionUpdateRequest {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${Resolved},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Int32]]
        ${Priority},
        [Parameter(Position = 2, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Note}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => DetectionUpdateRequest' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        if ($Priority -and $Priority -gt 3) {
          throw "invalid value for 'Priority', must be smaller than or equal to 3."
        }


        $PSO = [PSCustomObject]@{
            "resolved" = ${Resolved}
            "priority" = ${Priority}
            "note" = ${Note}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to DetectionUpdateRequest<PSCustomObject>

.DESCRIPTION

Convert from JSON to DetectionUpdateRequest<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

DetectionUpdateRequest<PSCustomObject>
#>
function ConvertFrom-JsonToDetectionUpdateRequest {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => DetectionUpdateRequest' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in DetectionUpdateRequest
        $AllProperties = ("resolved", "priority", "note")
        foreach ($name in $JsonParameters.PsObject.Properties.Name) {
            if (!($AllProperties.Contains($name))) {
                throw "Error! JSON key '$name' not found in the properties: $($AllProperties)"
            }
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "resolved"))) { #optional property not found
            $Resolved = $null
        } else {
            $Resolved = $JsonParameters.PSobject.Properties["resolved"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "priority"))) { #optional property not found
            $Priority = $null
        } else {
            $Priority = $JsonParameters.PSobject.Properties["priority"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "note"))) { #optional property not found
            $Note = $null
        } else {
            $Note = $JsonParameters.PSobject.Properties["note"].value
        }

        $PSO = [PSCustomObject]@{
            "resolved" = ${Resolved}
            "priority" = ${Priority}
            "note" = ${Note}
        }

        return $PSO
    }

}

