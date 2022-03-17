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

/** Successful Responses */
const Responses: {
    200: IResponse;
    201: IResponse;
    202: IResponse;
    203: IResponse;
    204: IResponse;
    205: IResponse;
    206: IResponse;
    207: IResponse;
    208: IResponse;
    226: IResponse;
};

export = {
    Successful: Responses
};