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

.PARAMETER TaskUuid
No description available.
.OUTPUTS

IsolateResponse<PSCustomObject>
#>

function Initialize-IsolateResponse {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${TaskUuid}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => IsolateResponse' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug


        $PSO = [PSCustomObject]@{
            "taskUuid" = ${TaskUuid}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to IsolateResponse<PSCustomObject>

.DESCRIPTION

Convert from JSON to IsolateResponse<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

IsolateResponse<PSCustomObject>
#>
function ConvertFrom-JsonToIsolateResponse {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => IsolateResponse' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in IsolateResponse
        $AllProperties = ("taskUuid")
        foreach ($name in $JsonParameters.PsObject.Properties.Name) {
            if (!($AllProperties.Contains($name))) {
                throw "Error! JSON key '$name' not found in the properties: $($AllProperties)"
            }
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "taskUuid"))) { #optional property not found
            $TaskUuid = $null
        } else {
            $TaskUuid = $JsonParameters.PSobject.Properties["taskUuid"].value
        }

        $PSO = [PSCustomObject]@{
            "taskUuid" = ${TaskUuid}
        }

        return $PSO
    }

}

