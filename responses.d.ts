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
}

const InformationalResponses: IResponse[];
const SuccessfulResponses: IResponse[];
const RedirectionMessages: IResponse[];
const ClientErrorResponses: IResponse[];
const ServerErrorResponses: IResponse[];

export = {
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