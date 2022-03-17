type IResponse = {
    /** The response state that is connected to this response code. */
    state: string;
    /** The response message that is connected to this response code. */
    message: string;
    /** The response code. */
    code: number;
    /** The status of the response. */
    status: string;
    /** If said HTTP response code is deprecated. */
    deprecated: boolean;
    /** If said HTTP response code is experimental. */
    experimental: boolean;
};

/** Client Error Responses */
const Responses: {
    400: IResponse;
    401: IResponse;
    402: IResponse;
    403: IResponse;
    404: IResponse;
    405: IResponse;
    406: IResponse;
    407: IResponse;
    408: IResponse;
    409: IResponse;
    410: IResponse;
    411: IResponse;
    412: IResponse;
    413: IResponse;
    414: IResponse;
    415: IResponse;
    416: IResponse;
    417: IResponse;
    418: IResponse;
    421: IResponse;
    422: IResponse;
    423: IResponse;
    424: IResponse;
    425: IResponse;
    426: IResponse;
    428: IResponse;
    429: IResponse;
    431: IResponse;
    451: IResponse;
};

export = {
    ClientError: Responses
};