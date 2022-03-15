/**
 * @typedef {Object} IResponse
 * @property {string} state - The response state that is connected to this response code.
 * @property {string} message - The response message that is connected to this response code.
 * @property {number} code - The response code.
 * @property {string} status - The status of the response.
 * @property {boolean} deprecated - If said HTTP response code is deprecated.
 * @property {boolean} experimental - If said HTTP response code is experimental.
 */

/** Server Error Responses */
const Responses = {
    /** @type {IResponse[]} */
    500: {
        state: "Internal Server Error",
        message: "The server has encountered a situation it does not know how to handle.",
        code: 500,
        status: "500 | Internal Server Error",
        deprecated: false,
        experimental: false
    },
    /** @type {IResponse[]} */
    501: {
        state: "Not Implemented",
        message: "The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are `GET` and `HEAD`.",
        code: 501,
        status: "501 | Not Implemented",
        deprecated: false,
        experimental: false
    },
    /** @type {IResponse[]} */
    502: {
        state: "Bad Gateway",
        message: "This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.",
        code: 502,
        status: "502 | Bad Gateway",
        deprecated: false,
        experimental: false
    },
    /** @type {IResponse[]} */
    503: {
        state: "Service Unavailable",
        message: "The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the `Retry-After` HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.",
        code: 503,
        status: "503 | Service Unavailable",
        deprecated: false,
        experimental: false
    },
    /** @type {IResponse[]} */
    504: {
        state: "Gateway Timeout",
        message: "This error response is given when the server is acting as a gateway and cannot get a response in time.",
        code: 504,
        status: "504 | Gateway Timeout",
        deprecated: false,
        experimental: false
    },
    /** @type {IResponse[]} */
    505: {
        state: "HTTP Version Not Supported",
        message: "The HTTP version used in the request is not supported by the server.",
        code: 505,
        status: "505 | HTTP Version Not Supported",
        deprecated: false,
        experimental: false
    },
    /** @type {IResponse[]} */
    506: {
        state: "Variant Also Negotiates",
        message: "The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.",
        code: 506,
        status: "506 | Variant Also Negotiates",
        deprecated: false,
        experimental: false
    },
    /** @type {IResponse[]} */
    507: {
        state: "Insufficient Storage",
        message: "The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.",
        code: 507,
        status: "507 | Insufficient Storage",
        deprecated: false,
        experimental: false
    },
    /** @type {IResponse[]} */
    508: {
        state: "Loop Detected",
        message: "The server detected an infinite loop while processing the request.",
        code: 508,
        status: "508 | Loop Detected",
        deprecated: false,
        experimental: false
    },
    /** @type {IResponse[]} */
    510: {
        state: "Not Extended",
        message: "Further extensions to the request are required for the server to fulfill it.",
        code: 510,
        status: "510 | Not Extended",
        deprecated: false,
        experimental: false
    },
    /** @type {IResponse[]} */
    511: {
        state: "Network Authentication Required",
        message: "Indicates that the client needs to authenticate to gain network access.",
        code: 511,
        status: "511 | Network Authentication Required",
        deprecated: false,
        experimental: false
    }
};

module.exports = { ServerError: Responses };