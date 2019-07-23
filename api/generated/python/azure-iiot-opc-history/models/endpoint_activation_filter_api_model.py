# coding=utf-8
# --------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See License.txt in the project root for
# license information.
#
# Code generated by Microsoft (R) AutoRest Code Generator 2.3.33.0
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class EndpointActivationFilterApiModel(Model):
    """Endpoint Activation Filter model.

    :param trust_lists: Certificate trust list identifiers to use for
     activation, if null, all certificates are
     trusted.  If empty list, no certificates are
     trusted which is equal to no filter.
    :type trust_lists: list[str]
    :param security_policies: Endpoint security policies to filter against.
     If set to null, all policies are in scope.
    :type security_policies: list[str]
    :param security_mode: Security mode level to activate. If null,
     then Microsoft.Azure.IIoT.OpcUa.Registry.Models.SecurityMode.Best is
     assumed. Possible values include: 'Best', 'Sign', 'SignAndEncrypt', 'None'
    :type security_mode: str or ~azure-iiot-opc-history.models.SecurityMode
    """

    _attribute_map = {
        'trust_lists': {'key': 'trustLists', 'type': '[str]'},
        'security_policies': {'key': 'securityPolicies', 'type': '[str]'},
        'security_mode': {'key': 'securityMode', 'type': 'SecurityMode'},
    }

    def __init__(self, trust_lists=None, security_policies=None, security_mode=None):
        super(EndpointActivationFilterApiModel, self).__init__()
        self.trust_lists = trust_lists
        self.security_policies = security_policies
        self.security_mode = security_mode