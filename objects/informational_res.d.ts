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

/** Informational Responses */
const Responses: {
    100: IResponse;
    101: IResponse;
    102: IResponse;
    103: IResponse;
};

export = {
    Informational: Responses
};