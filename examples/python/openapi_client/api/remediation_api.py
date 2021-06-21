"""
    ESET Enterprise Inspector

    ESET Enterprise Inspector REST API definition  # noqa: E501

    The version of the OpenAPI document: 1.6-oas3
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from openapi_client.api_client import ApiClient, Endpoint as _Endpoint
from openapi_client.model_utils import (  # noqa: F401
    check_allowed_values,
    check_validations,
    date,
    datetime,
    file_type,
    none_type,
    validate_and_convert_types
)
from openapi_client.model.executable_block_request import ExecutableBlockRequest
from openapi_client.model.executable_unblock_request import ExecutableUnblockRequest
from openapi_client.model.unauthorized_error import UnauthorizedError


class RemediationApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

        def __block_executable(
            self,
            id,
            **kwargs
        ):
            """Block an executable  # noqa: E501

            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.block_executable(id, async_req=True)
            >>> result = thread.get()

            Args:
                id (str): ID or SHA1

            Keyword Args:
                id_type (str): if $idType=sha1 {id} in URL is interpreted as SHA1. [optional] if omitted the server will use the default value of "sha1"
                executable_block_request (ExecutableBlockRequest): [optional]
                _return_http_data_only (bool): response data without head status
                    code and headers. Default is True.
                _preload_content (bool): if False, the urllib3.HTTPResponse object
                    will be returned without reading/decoding response data.
                    Default is True.
                _request_timeout (float/tuple): timeout setting for this request. If one
                    number provided, it will be total request timeout. It can also
                    be a pair (tuple) of (connection, read) timeouts.
                    Default is None.
                _check_input_type (bool): specifies if type checking
                    should be done one the data sent to the server.
                    Default is True.
                _check_return_type (bool): specifies if type checking
                    should be done one the data received from the server.
                    Default is True.
                _host_index (int/None): specifies the index of the server
                    that we want to use.
                    Default is read from the configuration.
                async_req (bool): execute request asynchronously

            Returns:
                None
                    If the method is called asynchronously, returns the request
                    thread.
            """
            kwargs['async_req'] = kwargs.get(
                'async_req', False
            )
            kwargs['_return_http_data_only'] = kwargs.get(
                '_return_http_data_only', True
            )
            kwargs['_preload_content'] = kwargs.get(
                '_preload_content', True
            )
            kwargs['_request_timeout'] = kwargs.get(
                '_request_timeout', None
            )
            kwargs['_check_input_type'] = kwargs.get(
                '_check_input_type', True
            )
            kwargs['_check_return_type'] = kwargs.get(
                '_check_return_type', True
            )
            kwargs['_host_index'] = kwargs.get('_host_index')
            kwargs['id'] = \
                id
            return self.call_with_http_info(**kwargs)

        self.block_executable = _Endpoint(
            settings={
                'response_type': None,
                'auth': [
                    'bearerAuth'
                ],
                'endpoint_path': '/api/v1/executables/{id}/block',
                'operation_id': 'block_executable',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'id',
                    'id_type',
                    'executable_block_request',
                ],
                'required': [
                    'id',
                ],
                'nullable': [
                ],
                'enum': [
                    'id_type',
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                    ('id_type',): {

                        "SHA1": "sha1"
                    },
                },
                'openapi_types': {
                    'id':
                        (str,),
                    'id_type':
                        (str,),
                    'executable_block_request':
                        (ExecutableBlockRequest,),
                },
                'attribute_map': {
                    'id': 'id',
                    'id_type': '$idType',
                },
                'location_map': {
                    'id': 'path',
                    'id_type': 'query',
                    'executable_block_request': 'body',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [
                    'application/json'
                ]
            },
            api_client=api_client,
            callable=__block_executable
        )

        def __unblock_executable(
            self,
            id,
            **kwargs
        ):
            """Unblock an executable  # noqa: E501

            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.unblock_executable(id, async_req=True)
            >>> result = thread.get()

            Args:
                id (str): ID or SHA1

            Keyword Args:
                id_type (str): if $idType=sha1 {id} in URL is interpreted as SHA1. [optional] if omitted the server will use the default value of "sha1"
                executable_unblock_request (ExecutableUnblockRequest): [optional]
                _return_http_data_only (bool): response data without head status
                    code and headers. Default is True.
                _preload_content (bool): if False, the urllib3.HTTPResponse object
                    will be returned without reading/decoding response data.
                    Default is True.
                _request_timeout (float/tuple): timeout setting for this request. If one
                    number provided, it will be total request timeout. It can also
                    be a pair (tuple) of (connection, read) timeouts.
                    Default is None.
                _check_input_type (bool): specifies if type checking
                    should be done one the data sent to the server.
                    Default is True.
                _check_return_type (bool): specifies if type checking
                    should be done one the data received from the server.
                    Default is True.
                _host_index (int/None): specifies the index of the server
                    that we want to use.
                    Default is read from the configuration.
                async_req (bool): execute request asynchronously

            Returns:
                None
                    If the method is called asynchronously, returns the request
                    thread.
            """
            kwargs['async_req'] = kwargs.get(
                'async_req', False
            )
            kwargs['_return_http_data_only'] = kwargs.get(
                '_return_http_data_only', True
            )
            kwargs['_preload_content'] = kwargs.get(
                '_preload_content', True
            )
            kwargs['_request_timeout'] = kwargs.get(
                '_request_timeout', None
            )
            kwargs['_check_input_type'] = kwargs.get(
                '_check_input_type', True
            )
            kwargs['_check_return_type'] = kwargs.get(
                '_check_return_type', True
            )
            kwargs['_host_index'] = kwargs.get('_host_index')
            kwargs['id'] = \
                id
            return self.call_with_http_info(**kwargs)

        self.unblock_executable = _Endpoint(
            settings={
                'response_type': None,
                'auth': [
                    'bearerAuth'
                ],
                'endpoint_path': '/api/v1/executables/{id}/unblock',
                'operation_id': 'unblock_executable',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'id',
                    'id_type',
                    'executable_unblock_request',
                ],
                'required': [
                    'id',
                ],
                'nullable': [
                ],
                'enum': [
                    'id_type',
                ],
                'validation': [
                ]
            },
            root_map={
                'validations': {
                },
                'allowed_values': {
                    ('id_type',): {

                        "SHA1": "sha1"
                    },
                },
                'openapi_types': {
                    'id':
                        (str,),
                    'id_type':
                        (str,),
                    'executable_unblock_request':
                        (ExecutableUnblockRequest,),
                },
                'attribute_map': {
                    'id': 'id',
                    'id_type': '$idType',
                },
                'location_map': {
                    'id': 'path',
                    'id_type': 'query',
                    'executable_unblock_request': 'body',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [
                    'application/json'
                ]
            },
            api_client=api_client,
            callable=__unblock_executable
        )
