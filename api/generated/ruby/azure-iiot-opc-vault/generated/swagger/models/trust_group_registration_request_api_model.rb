# encoding: utf-8
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See License.txt in the project root for
# license information.
#
# Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.

module azure.iiot.opc.vault
  module Models
    #
    # Trust group registration request model
    #
    class TrustGroupRegistrationRequestApiModel
      # @return [String] The new name of the trust group
      attr_accessor :name

      # @return [String] The identifer of the parent trust group.
      attr_accessor :parent_id

      # @return [String] The subject name of the group as distinguished name.
      attr_accessor :subject_name

      # @return [String] The lifetime of certificates issued in the group.
      attr_accessor :issued_lifetime

      # @return [Integer] The issued certificate key size in bits.
      attr_accessor :issued_key_size

      # @return [SignatureAlgorithm] Possible values include: 'Rsa256',
      # 'Rsa384', 'Rsa512', 'Rsa256Pss', 'Rsa384Pss', 'Rsa512Pss'
      attr_accessor :issued_signature_algorithm


      #
      # Mapper for TrustGroupRegistrationRequestApiModel class as Ruby Hash.
      # This will be used for serialization/deserialization.
      #
      def self.mapper()
        {
          client_side_validation: true,
          required: false,
          serialized_name: 'TrustGroupRegistrationRequestApiModel',
          type: {
            name: 'Composite',
            class_name: 'TrustGroupRegistrationRequestApiModel',
            model_properties: {
              name: {
                client_side_validation: true,
                required: false,
                serialized_name: 'name',
                type: {
                  name: 'String'
                }
              },
              parent_id: {
                client_side_validation: true,
                required: false,
                serialized_name: 'parentId',
                type: {
                  name: 'String'
                }
              },
              subject_name: {
                client_side_validation: true,
                required: false,
                serialized_name: 'subjectName',
                type: {
                  name: 'String'
                }
              },
              issued_lifetime: {
                client_side_validation: true,
                required: false,
                serialized_name: 'issuedLifetime',
                type: {
                  name: 'String'
                }
              },
              issued_key_size: {
                client_side_validation: true,
                required: false,
                serialized_name: 'issuedKeySize',
                type: {
                  name: 'Number'
                }
              },
              issued_signature_algorithm: {
                client_side_validation: true,
                required: false,
                serialized_name: 'issuedSignatureAlgorithm',
                type: {
                  name: 'Enum',
                  module: 'SignatureAlgorithm'
                }
              }
            }
          }
        }
      end
    end
  end
end