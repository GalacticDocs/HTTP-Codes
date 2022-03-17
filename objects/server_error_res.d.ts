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

/** Server Error Responses */
const Responses: {
    500: IResponse;
    501: IResponse;
    502: IResponse;
    503: IResponse;
    504: IResponse;
    505: IResponse;
    506: IResponse;
    507: IResponse;
    508: IResponse;
    510: IResponse;
    511: IResponse;
};

export = {
    ServerError: Responses
};