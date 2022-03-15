/**
 * @typedef {Object} IResponse
 * @property {string} state - The response state that is connected to this response code.
 * @property {string} message - The response message that is connected to this response code.
 * @property {number} code - The response code.
 * @property {string} status - The status of the response.
 * @property {boolean} deprecated - If said HTTP response code is deprecated.
 * @property {boolean} experimental - If said HTTP response code is experimental.
 */

/** @type {IResponse[]} Client Error Responses */
const Responses = [
    {
        state: "Bad Request",
        message: "The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).",
        code: 400,
        status: "400 | Bad Request",
        deprecated: false,
        experimental: false
    },
    {
        state: "Unauthorized",
        message: "Although the HTTP standard specifies \"unauthorized\", semantically this response means \"unauthenticated\". That is, the client must authenticate itself to get the requested response.",
        code: 401,
        status: "401 | Unauthorized",
        deprecated: false,
        experimental: false
    },
    {
        state: "Payment Required",
        message: "This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.",
        code: 402,
        status: "402 | Payment Required",
        deprecated: false,
        experimental: true
    },
    {
        state: "Forbidden",
        message: "The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike `401 Unauthorized`, the client's identity is known to the server.",
        code: 403,
        status: "403 | Forbidden",
        deprecated: false,
        experimental: false
    },
    {
        state: "Not Found",
        message: "The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of `403 Forbidden` to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web.",
        code: 404,
        status: "404 | Not Found",
        deprecated: false,
        experimental: false
    },
    {
        state: "Method Not Allowed",
        message: "The request method is known by the server but is not supported by the target resource. For example, an API may not allow calling `DELETE` to remove a resource.",
        code: 405,
        status: "405 | Method Not Allowed",
        deprecated: false,
        experimental: false
    },
    {
        state: "Not Acceptable",
        message: "This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.",
        code: 406,
        status: "406 | Not Acceptable",
        deprecated: false,
        experimental: false
    },
    {
        state: "Proxy Authentication Required",
        message: "This is similar to `401 Unauthorized` but authentication is needed to be done by a proxy.",
        code: 407,
        status: "407 | Proxy Authentication Required",
        deprecated: false,
        experimental: false
    },
    {
        state: "Request Timeout",
        message: "This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.",
        code: 408,
        status: "408 | Request Timeout",
        deprecated: false,
        experimental: false
    },
    {
        state: "Conflict",
        message: "This response is sent when a request conflicts with the current state of the server.",
        code: 409,
        status: "409 | Conflict",
        deprecated: false,
        experimental: false
    },
    {
        state: "Gone",
        message: "This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for \"limited-time, promotional services\". APIs should not feel compelled to indicate resources that have been deleted with this status code.",
        code: 410,
        status: "410 | Gone",
        deprecated: false,
        experimental: false
    },
    {
        state: "Length Required",
        message: "Server rejected the request because the `Content-Length` header field is not defined and the server requires it.",
        code: 411,
        status: "411 | Length Required",
        deprecated: false,
        experimental: false
    },
    {
        state: "Precondition Failed",
        message: "The client has indicated preconditions in its headers which the server does not meet.",
        code: 412,
        status: "412 | Precondition Failed",
        deprecated: false,
        experimental: false
    },
    {
        state: "Payload Too Large",
        message: "Request entity is larger than limits defined by server. The server might close the connection or return an `Retry-After` header field.",
        code: 413,
        status: "413 | Payload Too Large",
        deprecated: false,
        experimental: false
    },
    {
        state: "URI Too Long",
        message: "The URI requested by the client is longer than the server is willing to interpret.",
        code: 414,
        status: "414 | URI Too Long",
        deprecated: false,
        experimental: false
    },
    {
        state: "Unsupported Media Type",
        message: "The media format of the requested data is not supported by the server, so the server is rejecting the request.",
        code: 415,
        status: "415 | Unsupported Media Type",
        deprecated: false,
        experimental: false
    },
    {
        state: "Range Not Satisfiable",
        message: "The range specified by the `Range` header field in the request cannot be fulfilled. It's possible that the range is outside the size of the target URI's data.",
        code: 416,
        status: "416 | Range Not Satisfiable",
        deprecated: false,
        experimental: false
    },
    {
        state: "Expectation Failed",
        message: "This response code means the expectation indicated by the `Expect` request header field cannot be met by the server.",
        code: 417,
        status: "417 | Expectation Failed",
        deprecated: false,
        experimental: false
    },
    {
        state: "I'm a teapot",
        message: "The HTTP `418 I'm a teapot` client error response code indicates that the server refuses to brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is temporarily out of coffee should instead return 503. This error is a reference to Hyper Text Coffee Pot Control Protocol defined in April Fools' jokes in 1998 and 2014.",
        code: 418,
        status: "418 | I'm a teapot",
        deprecated: false,
        experimental: false
    },
    {
        state: "Misdirected Request",
        message: "The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.",
        code: 421,
        status: "421 | Misdirected Request",
        deprecated: false,
        experimental: false
    },
    {
        state: "Unprocessable Entity",
        message: "The request was well-formed but was unable to be followed due to semantic errors.",
        code: 422,
        status: "422 | Unprocessable Entity",
        deprecated: false,
        experimental: false
    },
    {
        state: "Locked",
        message: "The resource that is being accessed is locked.",
        code: 423,
        status: "423 | Locked",
        deprecated: false,
        experimental: false
    },
    {
        state: "Failed Dependency",
        message: "The request failed due to failure of a previous request.",
        code: 424,
        status: "424 | Failed Dependency",
        deprecated: false,
        experimental: false
    },
    {
        state: "Too Early",
        message: "Indicates that the server is unwilling to risk processing a request that might be replayed.",
        code: 425,
        status: "425 | Too Early",
        deprecated: false,
        experimental: true
    },
    {
        state: "Upgrade Required",
        message: "The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an `Upgrade` header in a 426 response to indicate the required protocol(s).",
        code: 426,
        status: "426 | Update Required",
        deprecated: false,
        experimental: false
    },
    {
        state: "Precondition Required",
        message: "The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client `GET`s a resource's state, modifies it and `PUT`s it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.",
        code: 428,
        status: "428 | Precondition Required",
        deprecated: false,
        experimental: false
    },
    {
        state: "Too Many Requests",
        message: "The user has sent too many requests in a given amount of time (\"rate limiting\").",
        code: 429,
        status: "429 | Too Many Requests",
        deprecated: false,
        experimental: false
    },
    {
        state: "Request Header Fields Too Large",
        message: "The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.",
        code: 431,
        status: "431 | Request Header Fields Too Large",
        deprecated: false,
        experimental: false
    },
    {
        state: "Unavailable For Legal Reasons",
        message: "The user agent requested a resource that cannot legally be provided, such as a web page censored by a government.",
        code: 451,
        status: "451 | Unavailable For Legal Reasons",
        deprecated: false,
        experimental: false
    }
];

module.exports = { ClientError: Responses };