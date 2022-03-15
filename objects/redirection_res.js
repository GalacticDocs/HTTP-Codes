/**
 * @typedef {Object} IResponse
 * @property {string} state - The response state that is connected to this response code.
 * @property {string} message - The response message that is connected to this response code.
 * @property {number} code - The response code.
 * @property {string} status - The status of the response.
 * @property {boolean} deprecated - If said HTTP response code is deprecated.
 * @property {boolean} experimental - If said HTTP response code is experimental.
 */

/** Redirection Messages Responses */
const Responses = {
    /** @type {IResponse} */
    300: {
        state: "Multiple Choice",
        message: "The request has more than one possible response. The user agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)",
        code: 300,
        status: "300 | Multiple Choice",
        deprecated: false,
        experimental: false
    },
    /** @type {IResponse} */
    301: {
        state: "Moved Permanently",
        message: "The URL of the requested resource has been changed permanently. The new URL is given in the response.",
        code: 301,
        status: "301 | Moved Permanently",
        deprecated: false,
        experimental: false
    },
    /** @type {IResponse} */
    302: {
        state: "Found",
        message: "This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.",
        code: 302,
        status: "302 | Found",
        deprecated: false,
        experimental: false
    },
    /** @type {IResponse} */
    303: {
        state: "See Other",
        message: "The server sent this response to direct the client to get the requested resource at another URI with a `GET` request.",
        code: 303,
        status: "303 | See Other",
        deprecated: false,
        experimental: false
    },
    /** @type {IResponse} */
    304: {
        state: "Not Modified",
        message: "This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.",
        code: 304,
        status: "304 | Not Modified",
        deprecated: false,
        experimental: false
    },
    /** @type {IResponse} */
    305: {
        state: "Use Proxy",
        message: "Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.",
        code: 305,
        status: "305 | Use Proxy",
        deprecated: true,
        experimental: false
    },
    /** @type {IResponse} */
    306: {
        state: "Unused",
        message: "This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.",
        code: 306,
        status: "306 | Unused",
        deprecated: false,
        experimental: false
    },
    /** @type {IResponse} */
    307: {
        state: "Temporary Redirect",
        message: "The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the `302` `Found` HTTP response code, with the exception that the user agent must not change the HTTP method used: if a `POST` was used in the first request, a `POST` must be used in the second request.",
        code: 307,
        status: "307 | Temporary Redirect",
        deprecated: false,
        experimental: false
    },
    /** @type {IResponse} */
    308: {
        state: "Permanent Redirect",
        message: "This means that the resource is now permanently located at another URI, specified by the `Location:` HTTP Response header. This has the same semantics as the `301 Moved Permanently` HTTP response code, with the exception that the user agent must not change the HTTP method used: if a `POST` was used in the first request, a `POST` must be used in the second request.",
        code: 308,
        status: "308 | Permanent Redirect",
        deprecated: false,
        experimental: false
    }
};

module.exports = { RedirectionMessages: Responses };