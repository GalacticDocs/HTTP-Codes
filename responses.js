// =|=|= ARRAYS =|=|=
const InformationalArray = require("./arrays/informational_res");
const SuccessfulArray = require("./arrays/successful_res");
const RedirectionMessagesArray = require("./arrays/redirection_res");
const ClientErrorArray = require("./arrays/client_error_res");
const ServerErrorArray = require("./arrays/server_error_res");

// =|=|= OBJECTS =|=|=
const InformationalObject = require("./objects/informational_res");
const SuccessfulObject = require("./objects/successful_res");
const RedirectionMessagesObject = require("./objects/redirection_res");
const ClientErrorObject = require("./objects/client_error_res");
const ServerErrorObject = require("./objects/server_error_res");

module.exports = {
    /** Responses */
    Responses: {
        Array: {
            Informational: InformationalArray.Informational,
            Successful: SuccessfulArray.Successful,
            RedirectionMessages: RedirectionMessagesArray.RedirectionMessages,
            ClientError: ClientErrorArray.ClientError,
            ServerError: ServerErrorArray.ServerError
        },
        Enums: {
            Informational: InformationalObject.Informational,
            Successful: SuccessfulObject.Successful,
            RedirectionMessages: RedirectionMessagesObject.RedirectionMessages,
            ClientError: ClientErrorObject.ClientError,
            ServerError: ServerErrorObject.ServerError
        }
    }
};

/*
        state: string,
        message: string,
        code: number,
        status: string,
        deprecated: boolean,
        experimental: boolean
*/
