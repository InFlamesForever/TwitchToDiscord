const request = require("request");

module.exports = {

    /**
     * Returns true or false depending on whether the streamer is live
     *
     * @param clientID your twitch app client id
     * @param streamerUsername the users stream url extension eg: twitch.tv/inflamesforever
     * @returns {Promise<Boolean>}
     */
    isStreamerLiveByUsername(clientID, streamerUsername)
    {
        return new Promise(function (fulfill, reject)
        {
            try
            {
                request({
                    headers: {
                        'Client-ID': clientID
                    }, uri: 'https://api.twitch.tv/helix/streams?user_login=' + streamerUsername, method: 'GET'
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
    },

    /**
     * Returns the public data for a streamer queried by their username. An empty array will
     * be returned if the streamer is not live
     *
     * @param clientID your twitch app client id
     * @param streamerUsername the users stream url extension eg: twitch.tv/inflamesforever
     * @returns {Promise<JSON Object>}
     */
    getStreamDetailsByUsername(clientID, streamerUsername)
    {
        return new Promise(function (fulfill, reject)
        {
            try
            {
                request({
                    headers: {
                        'Client-ID': clientID
                    }, uri: 'https://api.twitch.tv/helix/streams?user_login=' + streamerUsername, method: 'GET'
                }, function (url, res, body)
                {
                    fulfill(JSON.parse(body).data)
                })
            }
            catch (ex)
            {
                reject(ex)
            }
        })
    }

};