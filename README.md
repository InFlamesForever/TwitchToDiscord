# Node - Twitch API
This is a package that provides certain functions that allow connecting 
to the twitch API and will return certain processed information from the API.

Installation: npm install twitch-api-lite

Current Functions:

isStreamerLiveByUsername - Takes a client-ID, and a
streamer username and will return whether they're 
currently streaming or not

getStreamDetailsByUsername - Takes a client-ID, and a
streamer username and will return the streamer data that
the Twitch API will return.

getGameByID - Takes a client-ID, and a game-ID and returns
a JSON object of the data that the Twitch API returns.