
export interface Worker{
    employeeID: any;
    name: Worker.Name; 
    address?: Worker.Address;
    identityDocument?: Worker.IdentityDocument;
    personalDetails?: Worker.PersonalDetails;
    salary?: Worker.Salary;
    department?: Worker.Departments;
    level?: string;
    role?: string;
}


export namespace Worker{
    export enum Title {Mr, Mrs,Prof, Doc,Ms};
    export enum IDType {Passport, 'Driving Licence', Other};
    export enum MaritalStatus {Single, Married, Divorced, Other};
    export enum Departments { 'Human Resources', Finance, Marketing, Sales, Delivery, Operations, Support};
    // export enum Departments { 'Human Resources', Sales};
    export enum SalaryFrequency { Monthly, Quarterly, Annual};

    export interface Name{
        formattedName?: string;
        firstName: string;
        lastName: string;
        title?: Worker.Title;
    }
    
    export interface Address{
        freeText?: string;
        houseNumber?: string;
        streetName?: string;
        postCode?: string;
        city: string;
        country: string;
    }

    export interface IdentityDocument{
        type: Worker.IDType;
        available: boolean,
        link: string;
    }
    export interface PersonalDetails{
        maritalStatus: Worker.MaritalStatus;
        dateOfBirth: string,
        deceased: boolean;
        spouse?: string;
    }

    export interface Salary{ 
      basic: number;
      bonus?: number;
      commissions?: number;
      currency: string;
      frequency: SalaryFrequency;
    }


    
}






/*
    "workers": [
      {
        "associateOID": "string",
        "workerID": {
          "idValue": "string",
          "schemeCode": {
            "codeValue": "string",
            "shortName": "string",
            "longName": "string"
          }
        },
        "person": {
          "governmentIDs": [
            {
              "idValue": "string",
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "countryCode": "string",
              "statusCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string",
                "effectiveDate": "2016-10-13"
              },
              "expirationDate": "2016-10-13",
              "itemID": "string"
            }
          ],
          "legalName": {
            "givenName": "string",
            "middleName": "string",
            "familyName1": "string",
            "familyName2": "string",
            "formattedName": "string",
            "nameCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "scriptCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "preferredSalutations": [
              {
                "salutationCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "typeCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "sequenceNumber": 0
              }
            ],
            "titlePrefixCodes": [
              {
                "affixCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "sequenceNumber": 0
              }
            ],
            "nickName": "string",
            "generationAffixCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "qualificationAffixCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "titleAffixCodes": [
              {
                "affixCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "sequenceNumber": 0
              }
            ],
            "familyName1Prefix": "string",
            "familyName2Prefix": "string",
            "initials": "string"
          },
          "legalAddress": {
            "nameCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "attentionOfName": "string",
            "careOfName": "string",
            "lineOne": "string",
            "lineTwo": "string",
            "lineThree": "string",
            "cityName": "string",
            "countrySubdivisionLevel1": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string",
              "subdivisionType": "string"
            },
            "countryCode": "string",
            "postalCode": "string",
            "geoCoordinate": {
              "latitude": 0,
              "longitude": 0
            },
            "scriptCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "lineFour": "string",
            "lineFive": "string",
            "buildingNumber": "string",
            "buildingName": "string",
            "blockName": "string",
            "streetName": "string",
            "streetTypeCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "unit": "string",
            "floor": "string",
            "stairCase": "string",
            "door": "string",
            "postOfficeBox": "string",
            "deliveryPoint": "string",
            "plotID": "string",
            "countrySubdivisionLevel2": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string",
              "subdivisionType": "string"
            },
            "sameAsAddressIndicator": true,
            "sameAsAddressLink": {
              "href": "string",
              "rel": "string",
              "canonicalUri": "string",
              "title": "string",
              "targetSchema": "string",
              "mediaType": "string",
              "method": "string",
              "encType": "string",
              "schema": "string",
              "payLoadArguments": [
                {
                  "argumentPath": "string",
                  "argumentValue": "string"
                }
              ]
            }
          },
          "communication": {
            "landlines": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "countryDialing": "string",
                "areaDialing": "string",
                "dialNumber": "string",
                "extension": "string",
                "access": "string",
                "formattedNumber": "string",
                "itemID": "string",
                "notificationIndicator": true
              }
            ],
            "mobiles": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "countryDialing": "string",
                "areaDialing": "string",
                "dialNumber": "string",
                "extension": "string",
                "access": "string",
                "formattedNumber": "string",
                "itemID": "string",
                "notificationIndicator": true
              }
            ],
            "emails": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "emailUri": "string",
                "itemID": "string",
                "notificationIndicator": true
              }
            ],
            "socialNetworks": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "uri": "string",
                "itemID": "string",
                "notificationIndicator": true
              }
            ],
            "faxes": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "countryDialing": "string",
                "areaDialing": "string",
                "dialNumber": "string",
                "extension": "string",
                "access": "string",
                "formattedNumber": "string",
                "itemID": "string",
                "notificationIndicator": true
              }
            ],
            "pagers": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "countryDialing": "string",
                "areaDialing": "string",
                "dialNumber": "string",
                "extension": "string",
                "access": "string",
                "formattedNumber": "string",
                "itemID": "string",
                "notificationIndicator": true
              }
            ],
            "internetAddresses": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "uri": "string",
                "itemID": "string"
              }
            ],
            "instantMessages": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "uri": "string",
                "itemID": "string",
                "notificationIndicator": true
              }
            ]
          },
          "birthDate": "2016-10-13",
          "deceasedIndicator": true,
          "deathDate": "2016-10-13",
          "genderCode": {
            "codeValue": "string",
            "shortName": "string",
            "longName": "string"
          },
          "genderIdentityCode": {
            "codeValue": "string",
            "shortName": "string",
            "longName": "string"
          },
          "sexualOrientationCode": {
            "codeValue": "string",
            "shortName": "string",
            "longName": "string"
          },
          "religionCode": {
            "codeValue": "string",
            "shortName": "string",
            "longName": "string"
          },
          "maritalStatusCode": {
            "codeValue": "string",
            "shortName": "string",
            "longName": "string",
            "effectiveDate": "2016-10-13"
          },
          "socialInsurancePrograms": [
            {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "countryCode": "string",
              "coveredIndicator": true,
              "coveragePeriod": {
                "startDate": "2016-10-13",
                "endDate": "2016-10-13"
              },
              "itemID": "string"
            }
          ],
          "tobaccoUserIndicator": true,
          "disabilityIdentificationDeclinedIndicator": true,
          "disabledIndicator": true,
          "disabilityTypeCodes": [
            {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            }
          ],
          "disabilityPercentage": 0,
          "studentIndicator": true,
          "studentStatusCode": {
            "codeValue": "string",
            "shortName": "string",
            "longName": "string",
            "effectiveDate": "2016-10-13"
          },
          "identityDocuments": [
            {
              "documentID": "string",
              "countryCode": "string",
              "typeCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "issuingParty": {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "address": {
                  "nameCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "attentionOfName": "string",
                  "careOfName": "string",
                  "lineOne": "string",
                  "lineTwo": "string",
                  "lineThree": "string",
                  "cityName": "string",
                  "countrySubdivisionLevel1": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string",
                    "subdivisionType": "string"
                  },
                  "countryCode": "string",
                  "postalCode": "string",
                  "geoCoordinate": {
                    "latitude": 0,
                    "longitude": 0
                  },
                  "scriptCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "lineFour": "string",
                  "lineFive": "string",
                  "buildingNumber": "string",
                  "buildingName": "string",
                  "blockName": "string",
                  "streetName": "string",
                  "streetTypeCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "unit": "string",
                  "floor": "string",
                  "stairCase": "string",
                  "door": "string",
                  "postOfficeBox": "string",
                  "deliveryPoint": "string",
                  "plotID": "string",
                  "countrySubdivisionLevel2": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string",
                    "subdivisionType": "string"
                  }
                }
              },
              "issueDate": "2016-10-13",
              "expirationDate": "2016-10-13",
              "itemID": "string"
            }
          ],
          "immigrationDocuments": [
            {
              "documentID": "string",
              "countryCode": "string",
              "typeCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "issuingParty": {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "address": {
                  "nameCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "attentionOfName": "string",
                  "careOfName": "string",
                  "lineOne": "string",
                  "lineTwo": "string",
                  "lineThree": "string",
                  "cityName": "string",
                  "countrySubdivisionLevel1": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string",
                    "subdivisionType": "string"
                  },
                  "countryCode": "string",
                  "postalCode": "string",
                  "geoCoordinate": {
                    "latitude": 0,
                    "longitude": 0
                  },
                  "scriptCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "lineFour": "string",
                  "lineFive": "string",
                  "buildingNumber": "string",
                  "buildingName": "string",
                  "blockName": "string",
                  "streetName": "string",
                  "streetTypeCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "unit": "string",
                  "floor": "string",
                  "stairCase": "string",
                  "door": "string",
                  "postOfficeBox": "string",
                  "deliveryPoint": "string",
                  "plotID": "string",
                  "countrySubdivisionLevel2": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string",
                    "subdivisionType": "string"
                  }
                }
              },
              "issueDate": "2016-10-13",
              "expirationDate": "2016-10-13",
              "authorizedStayDuration": "string",
              "reentryRequirementDuration": "string",
              "itemID": "string"
            }
          ],
          "passports": [
            {
              "documentID": "string",
              "countryCode": "string",
              "typeCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "issuingParty": {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "address": {
                  "nameCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "attentionOfName": "string",
                  "careOfName": "string",
                  "lineOne": "string",
                  "lineTwo": "string",
                  "lineThree": "string",
                  "cityName": "string",
                  "countrySubdivisionLevel1": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string",
                    "subdivisionType": "string"
                  },
                  "countryCode": "string",
                  "postalCode": "string",
                  "geoCoordinate": {
                    "latitude": 0,
                    "longitude": 0
                  },
                  "scriptCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "lineFour": "string",
                  "lineFive": "string",
                  "buildingNumber": "string",
                  "buildingName": "string",
                  "blockName": "string",
                  "streetName": "string",
                  "streetTypeCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "unit": "string",
                  "floor": "string",
                  "stairCase": "string",
                  "door": "string",
                  "postOfficeBox": "string",
                  "deliveryPoint": "string",
                  "plotID": "string",
                  "countrySubdivisionLevel2": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string",
                    "subdivisionType": "string"
                  }
                }
              },
              "issueDate": "2016-10-13",
              "expirationDate": "2016-10-13",
              "itemID": "string"
            }
          ],
          "workAuthorizationDocuments": [
            {
              "documentID": "string",
              "countryCode": "string",
              "typeCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "issuingParty": {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "address": {
                  "nameCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "attentionOfName": "string",
                  "careOfName": "string",
                  "lineOne": "string",
                  "lineTwo": "string",
                  "lineThree": "string",
                  "cityName": "string",
                  "countrySubdivisionLevel1": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string",
                    "subdivisionType": "string"
                  },
                  "countryCode": "string",
                  "postalCode": "string",
                  "geoCoordinate": {
                    "latitude": 0,
                    "longitude": 0
                  },
                  "scriptCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "lineFour": "string",
                  "lineFive": "string",
                  "buildingNumber": "string",
                  "buildingName": "string",
                  "blockName": "string",
                  "streetName": "string",
                  "streetTypeCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "unit": "string",
                  "floor": "string",
                  "stairCase": "string",
                  "door": "string",
                  "postOfficeBox": "string",
                  "deliveryPoint": "string",
                  "plotID": "string",
                  "countrySubdivisionLevel2": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string",
                    "subdivisionType": "string"
                  }
                }
              },
              "issueDate": "2016-10-13",
              "expirationDate": "2016-10-13",
              "itemID": "string"
            }
          ],
          "preferredName": {
            "givenName": "string",
            "middleName": "string",
            "familyName1": "string",
            "familyName2": "string",
            "formattedName": "string",
            "nameCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "scriptCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "preferredSalutations": [
              {
                "salutationCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "typeCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "sequenceNumber": 0
              }
            ],
            "titlePrefixCodes": [
              {
                "affixCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "sequenceNumber": 0
              }
            ],
            "nickName": "string",
            "generationAffixCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "qualificationAffixCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "titleAffixCodes": [
              {
                "affixCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "sequenceNumber": 0
              }
            ],
            "familyName1Prefix": "string",
            "familyName2Prefix": "string",
            "initials": "string"
          },
          "alternatePreferredNames": [
            {
              "givenName": "string",
              "middleName": "string",
              "familyName1": "string",
              "familyName2": "string",
              "formattedName": "string",
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "scriptCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "preferredSalutations": [
                {
                  "salutationCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "typeCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "sequenceNumber": 0
                }
              ],
              "titlePrefixCodes": [
                {
                  "affixCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "sequenceNumber": 0
                }
              ],
              "nickName": "string",
              "generationAffixCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "qualificationAffixCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "titleAffixCodes": [
                {
                  "affixCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "sequenceNumber": 0
                }
              ],
              "familyName1Prefix": "string",
              "familyName2Prefix": "string",
              "initials": "string",
              "itemID": "string",
              "languageCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              }
            }
          ],
          "formerNames": [
            {
              "givenName": "string",
              "middleName": "string",
              "familyName1": "string",
              "familyName2": "string",
              "formattedName": "string",
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "scriptCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "preferredSalutations": [
                {
                  "salutationCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "typeCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "sequenceNumber": 0
                }
              ],
              "titlePrefixCodes": [
                {
                  "affixCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "sequenceNumber": 0
                }
              ],
              "nickName": "string",
              "generationAffixCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "qualificationAffixCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "titleAffixCodes": [
                {
                  "affixCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "sequenceNumber": 0
                }
              ],
              "familyName1Prefix": "string",
              "familyName2Prefix": "string",
              "initials": "string",
              "itemID": "string",
              "typeCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              }
            }
          ],
          "birthName": {
            "givenName": "string",
            "middleName": "string",
            "familyName1": "string",
            "familyName2": "string",
            "formattedName": "string",
            "nameCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "scriptCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "preferredSalutations": [
              {
                "salutationCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "typeCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "sequenceNumber": 0
              }
            ],
            "titlePrefixCodes": [
              {
                "affixCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "sequenceNumber": 0
              }
            ],
            "nickName": "string",
            "generationAffixCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "qualificationAffixCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "titleAffixCodes": [
              {
                "affixCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "sequenceNumber": 0
              }
            ],
            "familyName1Prefix": "string",
            "familyName2Prefix": "string",
            "initials": "string"
          },
          "birthPlace": {
            "cityName": "string",
            "countrySubdivisionLevel1": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string",
              "subdivisionType": "string"
            },
            "countrySubdivisionLevel2": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string",
              "subdivisionType": "string"
            },
            "postalCode": "string",
            "countryCode": "string",
            "formattedBirthPlace": "string"
          },
          "otherPersonalAddresses": [
            {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "attentionOfName": "string",
              "careOfName": "string",
              "lineOne": "string",
              "lineTwo": "string",
              "lineThree": "string",
              "cityName": "string",
              "countrySubdivisionLevel1": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string",
                "subdivisionType": "string"
              },
              "countryCode": "string",
              "postalCode": "string",
              "geoCoordinate": {
                "latitude": 0,
                "longitude": 0
              },
              "scriptCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "lineFour": "string",
              "lineFive": "string",
              "buildingNumber": "string",
              "buildingName": "string",
              "blockName": "string",
              "streetName": "string",
              "streetTypeCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "unit": "string",
              "floor": "string",
              "stairCase": "string",
              "door": "string",
              "postOfficeBox": "string",
              "deliveryPoint": "string",
              "plotID": "string",
              "countrySubdivisionLevel2": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string",
                "subdivisionType": "string"
              },
              "sameAsAddressIndicator": true,
              "sameAsAddressLink": {
                "href": "string",
                "rel": "string",
                "canonicalUri": "string",
                "title": "string",
                "targetSchema": "string",
                "mediaType": "string",
                "method": "string",
                "encType": "string",
                "schema": "string",
                "payLoadArguments": [
                  {
                    "argumentPath": "string",
                    "argumentValue": "string"
                  }
                ]
              },
              "itemID": "string",
              "typeCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              }
            }
          ],
          "ethnicityCode": {
            "codeValue": "string",
            "shortName": "string",
            "longName": "string"
          },
          "ethnicityGroupCode": {
            "codeValue": "string",
            "shortName": "string",
            "longName": "string"
          },
          "raceCode": {
            "codeValue": "string",
            "shortName": "string",
            "longName": "string",
            "identificationMethodCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            }
          },
          "citizenshipCountryCodes": [
            {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            }
          ],
          "residencyCountryCodes": [
            {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            }
          ],
          "highestEducationLevelCode": {
            "codeValue": "string",
            "shortName": "string",
            "longName": "string"
          },
          "militaryStatusCode": {
            "codeValue": "string",
            "shortName": "string",
            "longName": "string",
            "effectiveDate": "2016-10-13"
          },
          "militaryDischargeDate": "2016-10-13",
          "militaryClassificationCodes": [
            {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            }
          ],
          "customFieldGroup": {
            "amountFields": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "categoryCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "amountValue": 0,
                "currencyCode": "string",
                "itemID": "string"
              }
            ],
            "codeFields": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "categoryCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "codeValue": "string",
                "shortName": "string",
                "longName": "string",
                "itemID": "string"
              }
            ],
            "dateFields": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "categoryCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "dateValue": "2016-10-13",
                "itemID": "string"
              }
            ],
            "dateTimeFields": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "categoryCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "dateTimeValue": "2016-10-13T11:13:00.000Z",
                "itemID": "string"
              }
            ],
            "indicatorFields": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "categoryCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "indicatorValue": true,
                "itemID": "string"
              }
            ],
            "numberFields": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "categoryCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "numberValue": 0,
                "itemID": "string"
              }
            ],
            "percentFields": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "categoryCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "percentValue": 0,
                "itemID": "string"
              }
            ],
            "stringFields": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "categoryCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "stringValue": "string",
                "itemID": "string"
              }
            ],
            "telephoneFields": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "categoryCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "countryDialing": "string",
                "areaDialing": "string",
                "dialNumber": "string",
                "extension": "string",
                "access": "string",
                "formattedNumber": "string",
                "itemID": "string"
              }
            ],
            "links": [
              {
                "href": "string",
                "rel": "string",
                "canonicalUri": "string",
                "title": "string",
                "targetSchema": "string",
                "mediaType": "string",
                "method": "string",
                "encType": "string",
                "schema": "string",
                "payLoadArguments": [
                  {
                    "argumentPath": "string",
                    "argumentValue": "string"
                  }
                ]
              }
            ]
          },
          "links": [
            {
              "href": "string",
              "rel": "string",
              "canonicalUri": "string",
              "title": "string",
              "targetSchema": "string",
              "mediaType": "string",
              "method": "string",
              "encType": "string",
              "schema": "string",
              "payLoadArguments": [
                {
                  "argumentPath": "string",
                  "argumentValue": "string"
                }
              ]
            }
          ]
        },
        "workerDates": {
          "originalHireDate": "2016-10-13",
          "rehireDate": "2016-10-13",
          "adjustedServiceDate": "2016-10-13",
          "acquisitionDate": "2016-10-13",
          "retirementDate": "2016-10-13",
          "terminationDate": "2016-10-13",
          "expectedTerminationDate": "2016-10-13"
        },
        "workerStatus": {
          "statusCode": {
            "codeValue": "string",
            "shortName": "string",
            "longName": "string"
          },
          "reasonCode": {
            "codeValue": "string",
            "shortName": "string",
            "longName": "string"
          },
          "effectiveDate": "2016-10-13"
        },
        "photos": [
          {
            "nameCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "links": [
              {
                "href": "string",
                "rel": "string",
                "canonicalUri": "string",
                "title": "string",
                "targetSchema": "string",
                "mediaType": "string",
                "method": "string",
                "encType": "string",
                "schema": "string",
                "payLoadArguments": [
                  {
                    "argumentPath": "string",
                    "argumentValue": "string"
                  }
                ]
              }
            ],
            "itemID": "string"
          }
        ],
        "businessCommunication": {
          "landlines": [
            {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "countryDialing": "string",
              "areaDialing": "string",
              "dialNumber": "string",
              "extension": "string",
              "access": "string",
              "formattedNumber": "string",
              "itemID": "string",
              "notificationIndicator": true
            }
          ],
          "mobiles": [
            {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "countryDialing": "string",
              "areaDialing": "string",
              "dialNumber": "string",
              "extension": "string",
              "access": "string",
              "formattedNumber": "string",
              "itemID": "string",
              "notificationIndicator": true
            }
          ],
          "emails": [
            {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "emailUri": "string",
              "itemID": "string",
              "notificationIndicator": true
            }
          ],
          "socialNetworks": [
            {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "uri": "string",
              "itemID": "string",
              "notificationIndicator": true
            }
          ],
          "faxes": [
            {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "countryDialing": "string",
              "areaDialing": "string",
              "dialNumber": "string",
              "extension": "string",
              "access": "string",
              "formattedNumber": "string",
              "itemID": "string",
              "notificationIndicator": true
            }
          ],
          "pagers": [
            {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "countryDialing": "string",
              "areaDialing": "string",
              "dialNumber": "string",
              "extension": "string",
              "access": "string",
              "formattedNumber": "string",
              "itemID": "string",
              "notificationIndicator": true
            }
          ],
          "internetAddresses": [
            {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "uri": "string",
              "itemID": "string"
            }
          ],
          "instantMessages": [
            {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "uri": "string",
              "itemID": "string",
              "notificationIndicator": true
            }
          ]
        },
        "workAssignments": [
          {
            "primaryIndicator": true,
            "offerExtensionDate": "2016-10-13",
            "offerAcceptanceDate": "2016-10-13",
            "hireDate": "2016-10-13",
            "seniorityDate": "2016-10-13",
            "expectedStartDate": "2016-10-13",
            "actualStartDate": "2016-10-13",
            "terminationDate": "2016-10-13",
            "expectedTerminationDate": "2016-10-13",
            "assignmentStatus": {
              "statusCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "reasonCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "effectiveDate": "2016-10-13"
            },
            "assignmentCostCenters": [
              {
                "costCenterID": "string",
                "costCenterName": "string",
                "costCenterPercentage": 0
              }
            ],
            "workerProbationIndicator": true,
            "workerProbationPeriod": {
              "startDate": "2016-10-13",
              "endDate": "2016-10-13"
            },
            "workerTypeCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "assignmentTermCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "workLevelCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "nationalityContextCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "vipIndicator": true,
            "vipTypeCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "executiveIndicator": true,
            "executiveTypeCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "officerIndicator": true,
            "officerTypeCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "managementPositionIndicator": true,
            "legalEntityID": "string",
            "highlyCompensatedIndicator": true,
            "highlyCompensatedTypeCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "stockOwnerIndicator": true,
            "stockOwnerPercentage": 0,
            "workerGroups": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "groupCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "itemID": "string"
              }
            ],
            "jobCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string",
              "effectiveDate": "2016-10-13"
            },
            "jobTitle": "string",
            "occupationalClassifications": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "classificationCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "itemID": "string"
              }
            ],
            "industryClassifications": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "classificationCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "itemID": "string"
              }
            ],
            "wageLawCoverage": {
              "wageLawNameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "coverageCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              }
            },
            "positionID": "string",
            "positionTitle": "string",
            "laborUnion": {
              "laborUnionCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "seniorityDate": "2016-10-13"
            },
            "bargainingUnit": {
              "bargainingUnitCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "seniorityDate": "2016-10-13"
            },
            "workShiftCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "workArrangementCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "standardHours": {
              "hoursQuantity": 0,
              "unitCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              }
            },
            "fullTimeEquivalenceRatio": 0,
            "homeOrganizationalUnits": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "typeCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "itemID": "string"
              }
            ],
            "assignedOrganizationalUnits": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "typeCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "itemID": "string"
              }
            ],
            "homeWorkLocation": {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "communication": {
                "landlines": [
                  {
                    "nameCode": {
                      "codeValue": "string",
                      "shortName": "string",
                      "longName": "string"
                    },
                    "countryDialing": "string",
                    "areaDialing": "string",
                    "dialNumber": "string",
                    "extension": "string",
                    "access": "string",
                    "formattedNumber": "string",
                    "itemID": "string",
                    "notificationIndicator": true
                  }
                ],
                "mobiles": [
                  {
                    "nameCode": {
                      "codeValue": "string",
                      "shortName": "string",
                      "longName": "string"
                    },
                    "countryDialing": "string",
                    "areaDialing": "string",
                    "dialNumber": "string",
                    "extension": "string",
                    "access": "string",
                    "formattedNumber": "string",
                    "itemID": "string",
                    "notificationIndicator": true
                  }
                ],
                "emails": [
                  {
                    "nameCode": {
                      "codeValue": "string",
                      "shortName": "string",
                      "longName": "string"
                    },
                    "emailUri": "string",
                    "itemID": "string",
                    "notificationIndicator": true
                  }
                ],
                "socialNetworks": [
                  {
                    "nameCode": {
                      "codeValue": "string",
                      "shortName": "string",
                      "longName": "string"
                    },
                    "uri": "string",
                    "itemID": "string",
                    "notificationIndicator": true
                  }
                ],
                "faxes": [
                  {
                    "nameCode": {
                      "codeValue": "string",
                      "shortName": "string",
                      "longName": "string"
                    },
                    "countryDialing": "string",
                    "areaDialing": "string",
                    "dialNumber": "string",
                    "extension": "string",
                    "access": "string",
                    "formattedNumber": "string",
                    "itemID": "string",
                    "notificationIndicator": true
                  }
                ],
                "pagers": [
                  {
                    "nameCode": {
                      "codeValue": "string",
                      "shortName": "string",
                      "longName": "string"
                    },
                    "countryDialing": "string",
                    "areaDialing": "string",
                    "dialNumber": "string",
                    "extension": "string",
                    "access": "string",
                    "formattedNumber": "string",
                    "itemID": "string",
                    "notificationIndicator": true
                  }
                ],
                "internetAddresses": [
                  {
                    "nameCode": {
                      "codeValue": "string",
                      "shortName": "string",
                      "longName": "string"
                    },
                    "uri": "string",
                    "itemID": "string"
                  }
                ],
                "instantMessages": [
                  {
                    "nameCode": {
                      "codeValue": "string",
                      "shortName": "string",
                      "longName": "string"
                    },
                    "uri": "string",
                    "itemID": "string",
                    "notificationIndicator": true
                  }
                ]
              },
              "address": {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "attentionOfName": "string",
                "careOfName": "string",
                "lineOne": "string",
                "lineTwo": "string",
                "lineThree": "string",
                "cityName": "string",
                "countrySubdivisionLevel1": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string",
                  "subdivisionType": "string"
                },
                "countryCode": "string",
                "postalCode": "string",
                "geoCoordinate": {
                  "latitude": 0,
                  "longitude": 0
                },
                "scriptCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "lineFour": "string",
                "lineFive": "string",
                "buildingNumber": "string",
                "buildingName": "string",
                "blockName": "string",
                "streetName": "string",
                "streetTypeCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "unit": "string",
                "floor": "string",
                "stairCase": "string",
                "door": "string",
                "postOfficeBox": "string",
                "deliveryPoint": "string",
                "plotID": "string",
                "countrySubdivisionLevel2": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string",
                  "subdivisionType": "string"
                }
              }
            },
            "assignedWorkLocations": [
              {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "communication": {
                  "landlines": [
                    {
                      "nameCode": {
                        "codeValue": "string",
                        "shortName": "string",
                        "longName": "string"
                      },
                      "countryDialing": "string",
                      "areaDialing": "string",
                      "dialNumber": "string",
                      "extension": "string",
                      "access": "string",
                      "formattedNumber": "string",
                      "itemID": "string",
                      "notificationIndicator": true
                    }
                  ],
                  "mobiles": [
                    {
                      "nameCode": {
                        "codeValue": "string",
                        "shortName": "string",
                        "longName": "string"
                      },
                      "countryDialing": "string",
                      "areaDialing": "string",
                      "dialNumber": "string",
                      "extension": "string",
                      "access": "string",
                      "formattedNumber": "string",
                      "itemID": "string",
                      "notificationIndicator": true
                    }
                  ],
                  "emails": [
                    {
                      "nameCode": {
                        "codeValue": "string",
                        "shortName": "string",
                        "longName": "string"
                      },
                      "emailUri": "string",
                      "itemID": "string",
                      "notificationIndicator": true
                    }
                  ],
                  "socialNetworks": [
                    {
                      "nameCode": {
                        "codeValue": "string",
                        "shortName": "string",
                        "longName": "string"
                      },
                      "uri": "string",
                      "itemID": "string",
                      "notificationIndicator": true
                    }
                  ],
                  "faxes": [
                    {
                      "nameCode": {
                        "codeValue": "string",
                        "shortName": "string",
                        "longName": "string"
                      },
                      "countryDialing": "string",
                      "areaDialing": "string",
                      "dialNumber": "string",
                      "extension": "string",
                      "access": "string",
                      "formattedNumber": "string",
                      "itemID": "string",
                      "notificationIndicator": true
                    }
                  ],
                  "pagers": [
                    {
                      "nameCode": {
                        "codeValue": "string",
                        "shortName": "string",
                        "longName": "string"
                      },
                      "countryDialing": "string",
                      "areaDialing": "string",
                      "dialNumber": "string",
                      "extension": "string",
                      "access": "string",
                      "formattedNumber": "string",
                      "itemID": "string",
                      "notificationIndicator": true
                    }
                  ],
                  "internetAddresses": [
                    {
                      "nameCode": {
                        "codeValue": "string",
                        "shortName": "string",
                        "longName": "string"
                      },
                      "uri": "string",
                      "itemID": "string"
                    }
                  ],
                  "instantMessages": [
                    {
                      "nameCode": {
                        "codeValue": "string",
                        "shortName": "string",
                        "longName": "string"
                      },
                      "uri": "string",
                      "itemID": "string",
                      "notificationIndicator": true
                    }
                  ]
                },
                "address": {
                  "nameCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "attentionOfName": "string",
                  "careOfName": "string",
                  "lineOne": "string",
                  "lineTwo": "string",
                  "lineThree": "string",
                  "cityName": "string",
                  "countrySubdivisionLevel1": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string",
                    "subdivisionType": "string"
                  },
                  "countryCode": "string",
                  "postalCode": "string",
                  "geoCoordinate": {
                    "latitude": 0,
                    "longitude": 0
                  },
                  "scriptCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "lineFour": "string",
                  "lineFive": "string",
                  "buildingNumber": "string",
                  "buildingName": "string",
                  "blockName": "string",
                  "streetName": "string",
                  "streetTypeCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "unit": "string",
                  "floor": "string",
                  "stairCase": "string",
                  "door": "string",
                  "postOfficeBox": "string",
                  "deliveryPoint": "string",
                  "plotID": "string",
                  "countrySubdivisionLevel2": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string",
                    "subdivisionType": "string"
                  }
                },
                "itemID": "string"
              }
            ],
            "remunerationBasisCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "payCycleCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "standardPayPeriodHours": {
              "hoursQuantity": 0,
              "unitCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              }
            },
            "baseRemuneration": {
              "hourlyRateAmount": {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "amountValue": 0,
                "currencyCode": "string"
              },
              "dailyRateAmount": {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "amountValue": 0,
                "currencyCode": "string"
              },
              "weeklyRateAmount": {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "amountValue": 0,
                "currencyCode": "string"
              },
              "monthlyRateAmount": {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "amountValue": 0,
                "currencyCode": "string"
              },
              "annualRateAmount": {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "amountValue": 0,
                "currencyCode": "string"
              },
              "commissionRatePercentage": {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "percentageValue": 0,
                "baseUnitCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                }
              },
              "recordingBasisCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "biweeklyRateAmount": {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "amountValue": 0,
                "currencyCode": "string"
              },
              "semiMonthlyRateAmount": {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "amountValue": 0,
                "currencyCode": "string"
              },
              "payPeriodRateAmount": {
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "amountValue": 0,
                "currencyCode": "string"
              },
              "associatedRateQualifiers": [
                {
                  "qualifierObjectTypeCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "qualifierObjectCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "qualifierObjectID": "string",
                  "itemID": "string"
                }
              ],
              "effectiveDate": "2016-10-13"
            },
            "additionalRemunerations": [
              {
                "typeCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "intervalCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "nameCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "rate": {
                  "amountValue": 0,
                  "currencyCode": "string",
                  "unitCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "baseUnitCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "baseMultiplierValue": 0
                },
                "associatedRateQualifiers": [
                  {
                    "qualifierObjectTypeCode": {
                      "codeValue": "string",
                      "shortName": "string",
                      "longName": "string"
                    },
                    "qualifierObjectCode": {
                      "codeValue": "string",
                      "shortName": "string",
                      "longName": "string"
                    },
                    "qualifierObjectID": "string",
                    "itemID": "string"
                  }
                ],
                "itemID": "string",
                "effectiveDate": "2016-10-13"
              }
            ],
            "reportsTo": [
              {
                "positionID": "string",
                "positionTitle": "string",
                "associateOID": "string",
                "workerID": {
                  "idValue": "string",
                  "schemeCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  }
                },
                "reportsToWorkerName": {
                  "givenName": "string",
                  "middleName": "string",
                  "familyName1": "string",
                  "familyName2": "string",
                  "formattedName": "string"
                },
                "reportsToRelationshipCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "itemID": "string"
              }
            ],
            "payrollProcessingStatusCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string",
              "effectiveDate": "2016-10-13"
            },
            "payrollGroupCode": "string",
            "annualBenefitBaseRate": {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "amountValue": 0,
              "currencyCode": "string"
            },
            "payrollScheduleGroupID": "string",
            "payrollFileNumber": "string",
            "payrollRegionCode": "string",
            "payScaleCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "payGradeCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "payGradePayRange": {
              "minimumRate": {
                "amountValue": 0,
                "currencyCode": "string",
                "unitCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "baseUnitCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "baseMultiplierValue": 0
              },
              "medianRate": {
                "amountValue": 0,
                "currencyCode": "string",
                "unitCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "baseUnitCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "baseMultiplierValue": 0
              },
              "maximumRate": {
                "amountValue": 0,
                "currencyCode": "string",
                "unitCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "baseUnitCode": {
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string"
                },
                "baseMultiplierValue": 0
              }
            },
            "compaRatio": 0,
            "payGradeStepCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "payGradeStepPayRate": {
              "amountValue": 0,
              "currencyCode": "string",
              "unitCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "baseUnitCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "baseMultiplierValue": 0
            },
            "nextPayGradeStepDate": "2016-10-13",
            "minimumPayGradeStepDuration": "string",
            "geographicPayDifferentialCode": {
              "codeValue": "string",
              "shortName": "string",
              "longName": "string"
            },
            "geographicPayDifferentialPercentage": 0,
            "customFieldGroup": {
              "amountFields": [
                {
                  "nameCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "categoryCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "amountValue": 0,
                  "currencyCode": "string",
                  "itemID": "string"
                }
              ],
              "codeFields": [
                {
                  "nameCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "categoryCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "codeValue": "string",
                  "shortName": "string",
                  "longName": "string",
                  "itemID": "string"
                }
              ],
              "dateFields": [
                {
                  "nameCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "categoryCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "dateValue": "2016-10-13",
                  "itemID": "string"
                }
              ],
              "dateTimeFields": [
                {
                  "nameCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "categoryCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "dateTimeValue": "2016-10-13T11:13:00.000Z",
                  "itemID": "string"
                }
              ],
              "indicatorFields": [
                {
                  "nameCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "categoryCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "indicatorValue": true,
                  "itemID": "string"
                }
              ],
              "numberFields": [
                {
                  "nameCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "categoryCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "numberValue": 0,
                  "itemID": "string"
                }
              ],
              "percentFields": [
                {
                  "nameCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "categoryCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "percentValue": 0,
                  "itemID": "string"
                }
              ],
              "stringFields": [
                {
                  "nameCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "categoryCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "stringValue": "string",
                  "itemID": "string"
                }
              ],
              "telephoneFields": [
                {
                  "nameCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "categoryCode": {
                    "codeValue": "string",
                    "shortName": "string",
                    "longName": "string"
                  },
                  "countryDialing": "string",
                  "areaDialing": "string",
                  "dialNumber": "string",
                  "extension": "string",
                  "access": "string",
                  "formattedNumber": "string",
                  "itemID": "string"
                }
              ],
              "links": [
                {
                  "href": "string",
                  "rel": "string",
                  "canonicalUri": "string",
                  "title": "string",
                  "targetSchema": "string",
                  "mediaType": "string",
                  "method": "string",
                  "encType": "string",
                  "schema": "string",
                  "payLoadArguments": [
                    {
                      "argumentPath": "string",
                      "argumentValue": "string"
                    }
                  ]
                }
              ]
            },
            "links": [
              {
                "href": "string",
                "rel": "string",
                "canonicalUri": "string",
                "title": "string",
                "targetSchema": "string",
                "mediaType": "string",
                "method": "string",
                "encType": "string",
                "schema": "string",
                "payLoadArguments": [
                  {
                    "argumentPath": "string",
                    "argumentValue": "string"
                  }
                ]
              }
            ],
            "itemID": "string"
          }
        ],
        "customFieldGroup": {
          "amountFields": [
            {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "categoryCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "amountValue": 0,
              "currencyCode": "string",
              "itemID": "string"
            }
          ],
          "codeFields": [
            {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "categoryCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "codeValue": "string",
              "shortName": "string",
              "longName": "string",
              "itemID": "string"
            }
          ],
          "dateFields": [
            {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "categoryCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "dateValue": "2016-10-13",
              "itemID": "string"
            }
          ],
          "dateTimeFields": [
            {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "categoryCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "dateTimeValue": "2016-10-13T11:13:00.000Z",
              "itemID": "string"
            }
          ],
          "indicatorFields": [
            {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "categoryCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "indicatorValue": true,
              "itemID": "string"
            }
          ],
          "numberFields": [
            {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "categoryCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "numberValue": 0,
              "itemID": "string"
            }
          ],
          "percentFields": [
            {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "categoryCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "percentValue": 0,
              "itemID": "string"
            }
          ],
          "stringFields": [
            {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "categoryCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "stringValue": "string",
              "itemID": "string"
            }
          ],
          "telephoneFields": [
            {
              "nameCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "categoryCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              },
              "countryDialing": "string",
              "areaDialing": "string",
              "dialNumber": "string",
              "extension": "string",
              "access": "string",
              "formattedNumber": "string",
              "itemID": "string"
            }
          ],
          "links": [
            {
              "href": "string",
              "rel": "string",
              "canonicalUri": "string",
              "title": "string",
              "targetSchema": "string",
              "mediaType": "string",
              "method": "string",
              "encType": "string",
              "schema": "string",
              "payLoadArguments": [
                {
                  "argumentPath": "string",
                  "argumentValue": "string"
                }
              ]
            }
          ]
        },
        "links": [
          {
            "href": "string",
            "rel": "string",
            "canonicalUri": "string",
            "title": "string",
            "targetSchema": "string",
            "mediaType": "string",
            "method": "string",
            "encType": "string",
            "schema": "string",
            "payLoadArguments": [
              {
                "argumentPath": "string",
                "argumentValue": "string"
              }
            ]
          }
        ]
      }
    ],
    "meta": {
      "startSequence": 0,
      "completeIndicator": true,
      "totalNumber": 0,
      "resourceSetID": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "canonicalUri": "string",
          "title": "string",
          "targetSchema": "string",
          "mediaType": "string",
          "method": "string",
          "encType": "string",
          "schema": "string",
          "payLoadArguments": [
            {
              "argumentPath": "string",
              "argumentValue": "string"
            }
          ]
        }
      ]
    },
    "confirmMessage": {
      "confirmMessageID": {
        "idValue": "string",
        "schemeName": "string",
        "schemeAgencyName": "string"
      },
      "createDateTime": "2016-10-13T11:13:00.000Z",
      "requestReceiptDateTime": "2016-10-13T11:13:00.000Z",
      "protocolStatusCode": {
        "codeValue": "string",
        "shortName": "string",
        "longName": "string"
      },
      "protocolCode": {
        "codeValue": "string",
        "shortName": "string",
        "longName": "string"
      },
      "requestID": {
        "idValue": "string",
        "schemeName": "string",
        "schemeAgencyName": "string"
      },
      "requestStatusCode": {
        "shortName": "string",
        "longName": "string",
        "codeValue": "string"
      },
      "requestMethodCode": {
        "shortName": "string",
        "longName": "string",
        "codeValue": "string"
      },
      "sessionID": {
        "idValue": "string",
        "schemeName": "string",
        "schemeAgencyName": "string"
      },
      "requestETag": "string",
      "requestLink": {
        "href": "string",
        "rel": "string",
        "canonicalUri": "string",
        "title": "string",
        "targetSchema": "string",
        "mediaType": "string",
        "method": "string",
        "encType": "string",
        "schema": "string",
        "payLoadArguments": [
          {
            "argumentPath": "string",
            "argumentValue": "string"
          }
        ]
      },
      "processingStatusCode": {
        "shortName": "string",
        "longName": "string",
        "codeValue": "string"
      },
      "processMessages": [
        {
          "processMessageID": {
            "idValue": "string",
            "schemeName": "string",
            "schemeAgencyName": "string"
          },
          "messageTypeCode": {
            "shortName": "string",
            "longName": "string",
            "codeValue": "string"
          },
          "sourceLocationExpression": "string",
          "expressionLanguageCode": {
            "shortName": "string",
            "longName": "string",
            "codeValue": "string"
          },
          "links": [
            {
              "href": "string",
              "rel": "string",
              "canonicalUri": "string",
              "title": "string",
              "targetSchema": "string",
              "mediaType": "string",
              "method": "string",
              "encType": "string",
              "schema": "string",
              "payLoadArguments": [
                {
                  "argumentPath": "string",
                  "argumentValue": "string"
                }
              ]
            }
          ],
          "userMessage": {
            "codeValue": "string",
            "title": "string",
            "messageTxt": "string",
            "links": [
              {
                "href": "string",
                "rel": "string",
                "canonicalUri": "string",
                "title": "string",
                "targetSchema": "string",
                "mediaType": "string",
                "method": "string",
                "encType": "string",
                "schema": "string",
                "payLoadArguments": [
                  {
                    "argumentPath": "string",
                    "argumentValue": "string"
                  }
                ]
              }
            ]
          },
          "developerMessage": {
            "codeValue": "string",
            "title": "string",
            "messageTxt": "string",
            "links": [
              {
                "href": "string",
                "rel": "string",
                "canonicalUri": "string",
                "title": "string",
                "targetSchema": "string",
                "mediaType": "string",
                "method": "string",
                "encType": "string",
                "schema": "string",
                "payLoadArguments": [
                  {
                    "argumentPath": "string",
                    "argumentValue": "string"
                  }
                ]
              }
            ]
          }
        }
      ],
      "resourceMessages": [
        {
          "resourceMessageID": {
            "idValue": "string",
            "schemeName": "string",
            "schemeAgencyName": "string"
          },
          "resourceStatusCode": {
            "shortName": "string",
            "longName": "string",
            "codeValue": "string"
          },
          "resourceLink": {
            "href": "string",
            "rel": "string",
            "canonicalUri": "string",
            "title": "string",
            "targetSchema": "string",
            "mediaType": "string",
            "method": "string",
            "encType": "string",
            "schema": "string",
            "payLoadArguments": [
              {
                "argumentPath": "string",
                "argumentValue": "string"
              }
            ]
          },
          "processMessages": [
            {
              "processMessageID": {
                "idValue": "string",
                "schemeName": "string",
                "schemeAgencyName": "string"
              },
              "messageTypeCode": {
                "shortName": "string",
                "longName": "string",
                "codeValue": "string"
              },
              "sourceLocationExpression": "string",
              "expressionLanguageCode": {
                "shortName": "string",
                "longName": "string",
                "codeValue": "string"
              },
              "links": [
                {
                  "href": "string",
                  "rel": "string",
                  "canonicalUri": "string",
                  "title": "string",
                  "targetSchema": "string",
                  "mediaType": "string",
                  "method": "string",
                  "encType": "string",
                  "schema": "string",
                  "payLoadArguments": [
                    {
                      "argumentPath": "string",
                      "argumentValue": "string"
                    }
                  ]
                }
              ],
              "userMessage": {
                "codeValue": "string",
                "title": "string",
                "messageTxt": "string",
                "links": [
                  {
                    "href": "string",
                    "rel": "string",
                    "canonicalUri": "string",
                    "title": "string",
                    "targetSchema": "string",
                    "mediaType": "string",
                    "method": "string",
                    "encType": "string",
                    "schema": "string",
                    "payLoadArguments": [
                      {
                        "argumentPath": "string",
                        "argumentValue": "string"
                      }
                    ]
                  }
                ]
              },
              "developerMessage": {
                "codeValue": "string",
                "title": "string",
                "messageTxt": "string",
                "links": [
                  {
                    "href": "string",
                    "rel": "string",
                    "canonicalUri": "string",
                    "title": "string",
                    "targetSchema": "string",
                    "mediaType": "string",
                    "method": "string",
                    "encType": "string",
                    "schema": "string",
                    "payLoadArguments": [
                      {
                        "argumentPath": "string",
                        "argumentValue": "string"
                      }
                    ]
                  }
                ]
              },
              "resourceStatusCode": {
                "codeValue": "string",
                "shortName": "string",
                "longName": "string"
              }
            }
          ]
        }
      ]
    }
  }

  */