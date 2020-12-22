/* tslint:disable */
/* eslint-disable */
/**
 * 1inch API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Supported Protocols
 * @export
 * @interface Protocols
 */
export interface Protocols {
    /**
     * Supported protocols to pass to protocols
     * @type {Array<string>}
     * @memberof Protocols
     */
    protocols: Array<string>;
}

export function ProtocolsFromJSON(json: any): Protocols {
    return ProtocolsFromJSONTyped(json, false);
}

export function ProtocolsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Protocols {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'protocols': json['protocols'],
    };
}

export function ProtocolsToJSON(value?: Protocols | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'protocols': value.protocols,
    };
}


