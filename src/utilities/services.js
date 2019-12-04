var URL = "http://coetus.herokuapp.com";
var API = "/api";



function getAllMessagesForUser(user) {
    let res = fetch(`${URL}${API}/message`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
          username: user
        })
    })
    .then(response => response.json()
        , (error) => {
            console.log(error);
        })
    return res;
}

function addMessage(username,message) {
    let res = fetch(`${URL}${API}/message`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify({
          username: username,
          message: message
        })
    })
    .then(response => response.json()
        , (error) => {
            console.log(error);
        })
    return res;
}

function getAllMessages() {
    let res = fetch(`${URL}${API}/message`,{
        method: 'GET'
    })
    .then(response => response.json()
        , (error) => {
            console.log(error);
        })
    return res;
}

export {
    getAllMessages,
    getAllMessagesForUser,
    addMessage
}