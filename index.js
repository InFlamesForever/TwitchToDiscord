const request = require("request");

module.exports = {

    /**
     * Returns true or false depending on whether the streamer is live
     *
     * @param clientID your twitch app client id
     * @param user_login the users stream url extension eg: twitch.tv/inflamesforever
     * @returns {Promise<Boolean>}
     */
    isTwitchUserLive(clientID, user_login)
    {
        return new Promise(
            function (fulfill, reject)
            {
                try
                {
                    request({
                        headers: {
                            'Client-ID': clientID
                        },
                        uri: 'https://api.twitch.tv/helix/streams?user_login=' + user_login,
                        method: 'GET'
                    }, function (url, res, body)
                    {
                        fulfill(JSON.parse(body).data.length !== 0)
                    })
                }
                catch (ex)
                {
                    reject(ex)
                }
            })
    }

};