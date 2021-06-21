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

.PARAMETER Clean
No description available.
.PARAMETER Note
No description available.
.OUTPUTS

ExecutableBlockRequest<PSCustomObject>
#>

function Initialize-ExecutableBlockRequest {
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, ValueFromPipelineByPropertyName = $true)]
        [System.Nullable[Boolean]]
        ${Clean},
        [Parameter(Position = 1, ValueFromPipelineByPropertyName = $true)]
        [String]
        ${Note}
    )

    Process {
        'Creating PSCustomObject: PSOpenAPITools => ExecutableBlockRequest' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug


        $PSO = [PSCustomObject]@{
            "clean" = ${Clean}
            "note" = ${Note}
        }


        return $PSO
    }
}

<#
.SYNOPSIS

Convert from JSON to ExecutableBlockRequest<PSCustomObject>

.DESCRIPTION

Convert from JSON to ExecutableBlockRequest<PSCustomObject>

.PARAMETER Json

Json object

.OUTPUTS

ExecutableBlockRequest<PSCustomObject>
#>
function ConvertFrom-JsonToExecutableBlockRequest {
    Param(
        [AllowEmptyString()]
        [string]$Json
    )

    Process {
        'Converting JSON to PSCustomObject: PSOpenAPITools => ExecutableBlockRequest' | Write-Debug
        $PSBoundParameters | Out-DebugParameter | Write-Debug

        $JsonParameters = ConvertFrom-Json -InputObject $Json

        # check if Json contains properties not defined in ExecutableBlockRequest
        $AllProperties = ("clean", "note")
        foreach ($name in $JsonParameters.PsObject.Properties.Name) {
            if (!($AllProperties.Contains($name))) {
                throw "Error! JSON key '$name' not found in the properties: $($AllProperties)"
            }
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "clean"))) { #optional property not found
            $Clean = $null
        } else {
            $Clean = $JsonParameters.PSobject.Properties["clean"].value
        }

        if (!([bool]($JsonParameters.PSobject.Properties.name -match "note"))) { #optional property not found
            $Note = $null
        } else {
            $Note = $JsonParameters.PSobject.Properties["note"].value
        }

        $PSO = [PSCustomObject]@{
            "clean" = ${Clean}
            "note" = ${Note}
        }

        return $PSO
    }

}

