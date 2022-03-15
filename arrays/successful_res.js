/**
 * @typedef {Object} IResponse
 * @property {string} state - The response state that is connected to this response code.
 * @property {string} message - The response message that is connected to this response code.
 * @property {number} code - The response code.
 * @property {string} status - The status of the response.
 * @property {boolean} deprecated - If said HTTP response code is deprecated.
 * @property {boolean} experimental - If said HTTP response code is experimental.
 */

/** @type {IResponse[]} Successful Responses */
const Responses = [
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

module.exports = { Successful: Responses };