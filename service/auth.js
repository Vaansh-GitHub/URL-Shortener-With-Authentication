const sessionMapToUser = new Map();

function setUser(sessionId,user_object)
{
    sessionMapToUser.set(sessionId,user_object);
}

function getUser(sessionId)
{
    return sessionMapToUser.get(sessionId);
}

module.exports={setUser,getUser};