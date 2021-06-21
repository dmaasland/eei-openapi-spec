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
from openapi_client.model.isolate_response import IsolateResponse
from openapi_client.model.unauthorized_error import UnauthorizedError


class ComputersApi(object):
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

        def __integrate_computer(
            self,
            computer_id,
            **kwargs
        ):
            """Integrate a computer back into the network  # noqa: E501

            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.integrate_computer(computer_id, async_req=True)
            >>> result = thread.get()

            Args:
                computer_id (str): Computer ID or UUID

            Keyword Args:
                id_type (str): if $idType=uuid {id} in URL is interpreted as uuid. [optional] if omitted the server will use the default value of "uuid"
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
                IsolateResponse
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
            kwargs['computer_id'] = \
                computer_id
            return self.call_with_http_info(**kwargs)

        self.integrate_computer = _Endpoint(
            settings={
                'response_type': (IsolateResponse,),
                'auth': [
                    'bearerAuth'
                ],
                'endpoint_path': '/api/v1/machines/{computerId}/integrate',
                'operation_id': 'integrate_computer',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'computer_id',
                    'id_type',
                ],
                'required': [
                    'computer_id',
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

                        "UUID": "uuid"
                    },
                },
                'openapi_types': {
                    'computer_id':
                        (str,),
                    'id_type':
                        (str,),
                },
                'attribute_map': {
                    'computer_id': 'computerId',
                    'id_type': '$idType',
                },
                'location_map': {
                    'computer_id': 'path',
                    'id_type': 'query',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [],
            },
            api_client=api_client,
            callable=__integrate_computer
        )

        def __isolate_computer(
            self,
            computer_id,
            **kwargs
        ):
            """Isolate a computer from the network  # noqa: E501

            This method makes a synchronous HTTP request by default. To make an
            asynchronous HTTP request, please pass async_req=True

            >>> thread = api.isolate_computer(computer_id, async_req=True)
            >>> result = thread.get()

            Args:
                computer_id (str): Computer ID or UUID

            Keyword Args:
                id_type (str): if $idType=uuid {id} in URL is interpreted as uuid. [optional] if omitted the server will use the default value of "uuid"
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
                IsolateResponse
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
            kwargs['computer_id'] = \
                computer_id
            return self.call_with_http_info(**kwargs)

        self.isolate_computer = _Endpoint(
            settings={
                'response_type': (IsolateResponse,),
                'auth': [
                    'bearerAuth'
                ],
                'endpoint_path': '/api/v1/machines/{computerId}/isolate',
                'operation_id': 'isolate_computer',
                'http_method': 'POST',
                'servers': None,
            },
            params_map={
                'all': [
                    'computer_id',
                    'id_type',
                ],
                'required': [
                    'computer_id',
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

                        "UUID": "uuid"
                    },
                },
                'openapi_types': {
                    'computer_id':
                        (str,),
                    'id_type':
                        (str,),
                },
                'attribute_map': {
                    'computer_id': 'computerId',
                    'id_type': '$idType',
                },
                'location_map': {
                    'computer_id': 'path',
                    'id_type': 'query',
                },
                'collection_format_map': {
                }
            },
            headers_map={
                'accept': [
                    'application/json'
                ],
                'content_type': [],
            },
            api_client=api_client,
            callable=__isolate_computer
        )
