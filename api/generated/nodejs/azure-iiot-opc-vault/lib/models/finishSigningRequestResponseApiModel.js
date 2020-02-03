/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Finish request results
 *
 */
class FinishSigningRequestResponseApiModel {
  /**
   * Create a FinishSigningRequestResponseApiModel.
   * @property {object} [request]
   * @property {string} [request.requestId] Request id
   * @property {string} [request.entityId] Application id
   * @property {string} [request.groupId] Trust group
   * @property {string} [request.state] Possible values include: 'New',
   * 'Approved', 'Rejected', 'Failure', 'Completed', 'Accepted'
   * @property {string} [request.type] Possible values include:
   * 'SigningRequest', 'KeyPairRequest'
   * @property {object} [request.errorInfo] Error diagnostics
   * @property {object} [request.submitted]
   * @property {string} [request.submitted.authorityId] User
   * @property {date} [request.submitted.time] Operation time
   * @property {object} [request.approved]
   * @property {string} [request.approved.authorityId] User
   * @property {date} [request.approved.time] Operation time
   * @property {object} [request.accepted]
   * @property {string} [request.accepted.authorityId] User
   * @property {date} [request.accepted.time] Operation time
   * @property {object} [certificate]
   * @property {string} [certificate.subject] Subject
   * @property {string} [certificate.thumbprint] Thumbprint
   * @property {string} [certificate.serialNumber] Serial number
   * @property {date} [certificate.notBeforeUtc] Not before validity
   * @property {date} [certificate.notAfterUtc] Not after validity
   * @property {object} [certificate.certificate] Raw data
   */
  constructor() {
  }

  /**
   * Defines the metadata of FinishSigningRequestResponseApiModel
   *
   * @returns {object} metadata of FinishSigningRequestResponseApiModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FinishSigningRequestResponseApiModel',
      type: {
        name: 'Composite',
        className: 'FinishSigningRequestResponseApiModel',
        modelProperties: {
          request: {
            required: false,
            serializedName: 'request',
            type: {
              name: 'Composite',
              className: 'CertificateRequestRecordApiModel'
            }
          },
          certificate: {
            required: false,
            serializedName: 'certificate',
            type: {
              name: 'Composite',
              className: 'X509CertificateApiModel'
            }
          }
        }
      }
    };
  }
}

module.exports = FinishSigningRequestResponseApiModel;