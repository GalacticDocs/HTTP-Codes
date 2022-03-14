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
const InformationalResponses = [
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

/** @type {IResponse[]} Successful Responses */
const SuccessfulResponses = [
    {
        state: "OK",
        message: [
            "The request succeeded. The result meaning of \"success\" depends on the HTTP method:",
            "* GET: The resource has been fetched and transmitted in the message body.",
            "* HEAD: The representation headers are included in the response without any message body.",
            "* PUT or POST: The resource describing the result of the action is transmitted in the message body.",
            "* TRACE: The message body contains the request message as received by the server."].join("\n"),
        code: 200,
        status: "200 | OK",
        deprecated: false,
        experimental: false
    },
    {
        state: "Created",
        message: "The request succeeded, and a new resource was created as a result. This is typically the response sent after `POST` requests, or some `PUT` requests.",
        code: 201,
        status: "201 | Created",
        deprecated: false,
        experimental: false
    },
    {
        state: "Accepted",
        message: "The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.",
        code: 202,
        status: "202 | Accepted",
        deprecated: false,
        experimental: false
    },
    {
        state: "Non-Authoritative Information",
        message: "This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the `200 OK` response is preferred to this status.",
        code: 203,
        status: "203 | Non-Authoritative Information",
        deprecated: false,
        experimental: false
    },
    {
        state: "No Content",
        message: "There is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones.",
        code: 204,
        status: "204 | No Content",
        deprecated: false,
        experimental: false
    },
    {
        state: "Reset Content",
        message: "Tells the user agent to reset the document which sent this request.",
        code: 205,
        status: "205 | Reset Content",
        deprecated: false,
        experimental: false
    },
    {
        state: "Partial Content",
        message: "This response code is used when the `Range` header is sent from the client to request only part of a resource.",
        code: 206,
        status: "206 | Partial Content",
        deprecated: false,
        experimental: false
    },
    {
        state: "Multi-Status",
        message: "Conveys information about multiple resources, for situations where multiple status codes might be appropriate.",
        code: 207,
        status: "207 | Multi-Status",
        deprecated: false,
        experimental: false
    },
    {
        state: "Already Reported",
        message: "Used inside a `<dav:propstat>` response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.",
        code: 208,
        status: "208 | Already Reported",
        deprecated: false,
        experimental: false
    },
    {
        state: "IM Used",
        message: "The server has fulfilled a `GET` request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.",
        code: 226,
        status: "226 | IM Used",
        deprecated: false,
        experimental: false
    }
];

/** @type {IResponse[]} Redirection Messages */
const RedirectionMessages = [
    {
        state: "Multiple Choice",
        message: "The request has more than one possible response. The user agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)",
        code: 300,
        status: "300 | Multiple Choice",
        deprecated: false,
        experimental: false
    },
    {
        state: "Moved Permanently",
        message: "The URL of the requested resource has been changed permanently. The new URL is given in the response.",
        code: 301,
        status: "301 | Moved Permanently",
        deprecated: false,
        experimental: false
    },
    {
        state: "Found",
        message: "This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.",
        code: 302,
        status: "302 | Found",
        deprecated: false,
        experimental: false
    },
    {
        state: "See Other",
        message: "The server sent this response to direct the client to get the requested resource at another URI with a `GET` request.",
        code: 303,
        status: "303 | See Other",
        deprecated: false,
        experimental: false
    },
    {
        state: "Not Modified",
        message: "This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.",
        code: 304,
        status: "304 | Not Modified",
        deprecated: false,
        experimental: false
    },
    {
        state: "Use Proxy",
        message: "Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.",
        code: 305,
        status: "305 | Use Proxy",
        deprecated: true,
        experimental: false
    },
    {
        state: "Unused",
        message: "This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.",
        code: 306,
        status: "306 | Unused",
        deprecated: false,
        experimental: false
    },
    {
        state: "Temporary Redirect",
        message: "The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the `302` `Found` HTTP response code, with the exception that the user agent must not change the HTTP method used: if a `POST` was used in the first request, a `POST` must be used in the second request.",
        code: 307,
        status: "307 | Temporary Redirect",
        deprecated: false,
        experimental: false
    },
    {
        state: "Permanent Redirect",
        message: "This means that the resource is now permanently located at another URI, specified by the `Location:` HTTP Response header. This has the same semantics as the `301 Moved Permanently` HTTP response code, with the exception that the user agent must not change the HTTP method used: if a `POST` was used in the first request, a `POST` must be used in the second request.",
        code: 308,
        status: "308 | Permanent Redirect",
        deprecated: false,
        experimental: false
    }
];

/** @type {IResponse[]} Client Error Responses */
const ClientErrorResponses = [
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
    }
];

/** @type {IResponse[]} Server Error Responses */
const ServerErrorResponses = [];

module.exports = {
    /** Responses */
    Responses: {
        /** Informational Responses */
        Informational: InformationalResponses,
        /** Successful Responses */
        Successful: SuccessfulResponses,
        /** Redirection Messages */
        Redirection: RedirectionMessages,
        /** Client Error Responses */
        ClientError: ClientErrorResponses,
        /** Server Error Responses */
        ServerError: ServerErrorResponses
    }
};

/*
        state: "",
        message: "",
        code: 0,
        status: ""
*/