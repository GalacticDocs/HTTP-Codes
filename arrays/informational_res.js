/**
 * @typedef {Object} IResponse
 * @property {string} state - The response state that is connected to this response code.
 * @property {string} message - The response message that is connected to this response code.
 * @property {number} code - The response code.
 * @property {string} status - The status of the response.
 * @property {boolean} deprecated - If said HTTP response code is deprecated.
 * @property {boolean} experimental - If said HTTP response code is experimental.
 */

/** @type {IResponse[]} Informational Responses */
const Responses = [
    {
        state: "Continue",
        message: "This interim response indicates that the client should continue the request or ignore the response if the request is already finished.",
        code: 100,
        status: "100 | Continue",
        deprecated: false,
        experimental: false
    },
    {
        state: "Switching Protocols",
        message: "This code is sent in response to an `Upgrade` request header from the client and indicates the protocol the server is switching to.",
        code: 101,
        status: "101 | Switching Protocols",
        deprecated: false,
        experimental: false
    },
    {
        state: "Processing",
        message: "This code indicates that the server has received and is processing the request, but no response is available yet.",
        code: 102,
        status: "102 | Processing",
        deprecated: false,
        experimental: false
    },
    {
        state: "Early Hints",
        message: "This status code is primarily intended to be used with the `Link` header, letting the user agent start preloading resources while the server prepares a response.",
        code: 103,
        status: "103 | Early Hints",
        deprecated: false,
        experimental: false
    }
];

module.exports = { Informational: Responses };