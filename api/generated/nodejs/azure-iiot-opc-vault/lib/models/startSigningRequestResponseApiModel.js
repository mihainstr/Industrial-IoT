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
 * Signing request response
 *
 */
class StartSigningRequestResponseApiModel {
  /**
   * Create a StartSigningRequestResponseApiModel.
   * @property {string} [requestId] Request id
   */
  constructor() {
  }

  /**
   * Defines the metadata of StartSigningRequestResponseApiModel
   *
   * @returns {object} metadata of StartSigningRequestResponseApiModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StartSigningRequestResponseApiModel',
      type: {
        name: 'Composite',
        className: 'StartSigningRequestResponseApiModel',
        modelProperties: {
          requestId: {
            required: false,
            serializedName: 'requestId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = StartSigningRequestResponseApiModel;