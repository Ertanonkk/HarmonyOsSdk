/*
* Copyright (c) 2021 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * TextDecoder support full encoding in ICU data utf-8 utf-16 iso8859 must support in all device, TextEncoder takes a
 * stream of code points as input and emits a stream of UTF-8 bytes, and system help function.
 * @since 7
 * @sysCap SystemCapability.CCRuntime
 * @devices phone, tablet, tv, wearable, car
 * @import import util from '@ohos.util';
 */
declare namespace util {
    /**
     * %s: String will be used to convert all values except BigInt, Object and -0. BigInt values will be represented
     * with an n and Objects that have no user defined toString function are inspected using util.inspect() with
     * options { depth: 0, colors: false, compact: 3 }.
     * %d: Number will be used to convert all values except BigInt and Symbol.
     * %i: parseInt(value, 10) is used for all values except BigInt and Symbol.
     * %f: parseFloat(value) is used for all values except Bigint and Symbol.
     * %j: JSON. Replaced with the string '[Circular]' if the argument contains circular references.
     * %o: Object. A string representation of an object with generic JavaScript object formatting.Similar to
     * util.inspect() with options { showHidden: true, showProxy: true}. This will show the full object including
     * non-enumerable properties and proxies.
     * %O: Object. A string representation of an object with generic JavaScript object formatting.Similar to
     * util.inspect() without options. This will show the full object not including non-enumerable properties and
     * proxies.
     * %c: CSS. This specifier is ignored and will skip any CSS passed in.
     * %%: single percent sign ('%'). This does not consume an argument.Returns: <string> The formatted string.
     * @since 7
     * @sysCap SystemCapability.CCRuntime
     * @param format styled string
     * @param args data to be formatted
     * @return Return the character string formatted in a specific format
     */
    function printf(format: string, ...args: Object[]): string;
    /**
     * Get the string name of the system errno.
     * @since 7
     * @sysCap SystemCapability.CCRuntime
     * @param errno the error code generated by an error in the system
     * @return return the string name of a system errno
     */
    function getErrorString(errno: number): string;
    /**
     * Takes an async function (or a function that returns a Promise) and returns a function following the
     * error-first callback style.
     * @since 7
     * @sysCap SystemCapability.CCRuntime
     * @param original asynchronous function
     */
    function callbackWrapper(original: Function): (err: Object, value: Object) => void;
    /**
     * Takes a function following the common error-first callback style, i.e taking an (err, value) =>
     * callback as the last argument, and return a version that returns promises.
     * @since 7
     * @sysCap SystemCapability.CCRuntime
     * @param original asynchronous function
     * @return return a version that returns promises
     */
    function promiseWrapper(original: (err: Object, value: Object) => void): Object;

    class TextDecoder {
        /**
         * the source encoding's name, lowercased.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        readonly encoding: string;
        /**
         * Returns `true` if error mode is "fatal", and `false` otherwise.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        readonly fatal: boolean;
        /**
         * Returns `true` if ignore BOM flag is set, and `false` otherwise.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        readonly ignoreBOM = false;

        /**
         * the textEncoder constructor.
         * @param 7
         * @sysCap SystemCapability.CCRuntime
         * @param encoding decoding format
         */
        constructor(
            encoding?: string,
            options?: { fatal?: boolean; ignoreBOM?: boolean },
        );
        /**
         * Returns the result of running encoding's decoder.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @param input decoded numbers in accordance with the format
         * @return return decoded text
         */
        decode(input: Uint8Array, options?: { stream?: false }): string;
    }

    class TextEncoder {
        /**
         * Encoding format.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        readonly encoding = "utf-8";
        /**
         * the textEncoder constructor.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         */
        constructor();
        /**
         * Returns the result of encoder.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @param The string to be encoded.
         * @return returns the encoded text.
         */
        encode(input?: string): Uint8Array;
        /**
         * encode string, write the result to dest array.
         * @since 7
         * @sysCap SystemCapability.CCRuntime
         * @param input The string to be encoded.
         * @param dest decoded numbers in accordance with the format
         * @return returns Returns the object, where read represents
         * the number of characters that have been encoded, and written
         * represents the number of bytes occupied by the encoded characters.
         */
        encodeInto(
            input: string,
            dest: Uint8Array,
        ): { read: number; written: number };
    }
}

export default util;