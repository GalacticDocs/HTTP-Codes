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

/** Redirection Messages Responses */
const Responses: {
    300: IResponse;
    301: IResponse;
    302: IResponse;
    303: IResponse;
    304: IResponse;
    305: IResponse;
    306: IResponse;
    307: IResponse;
    308: IResponse;
};

export = {
    RedirectionMessages: Responses
};