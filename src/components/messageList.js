import { getAllMessages } from "../utilities/services";



class MessageList{
    constructor(){
        this.list = document.createElement('ul');
        this.list.id = 'message';
        
        getAllMessages()
            .then(data => {
                data.data.forEach(element => {
                
                    let z = document.createElement('li');
                    let x = element.username;
                    let y = element.message;
                    let j = new Date(element.timestamp).toLocaleTimeString();
                
                    z.textContent = `[${j}] [User:${x}] [Message]:"${y}"`;
                    this.list.appendChild(z);
                });
            })

        setInterval(()=>{
            this.emptyList()
            getAllMessages()
            .then(data => {
                data.data.forEach(element => {
                
                    let z = document.createElement('li');
                    let x = element.username;
                    let y = element.message;
                    let j = new Date(element.timestamp).toLocaleTimeString();
                
                    z.textContent = `[${j}] [User:${x}] [Message]:"${y}"`;
                    this.list.appendChild(z);
                });
            })
        },10000);
    }

    emptyList(){
        this.list.innerHTML="";
    }

    getNode(){
        return this.list;
    }
}

export{
    MessageList
}