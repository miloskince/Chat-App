import { User } from "../components/user";
import { MessageList } from "../components/messageList";
import { getAllMessagesForUser , addMessage, getAllMessages } from "../utilities/services";
import { NewMessage } from "../components/newMessage";
import { MyMessages } from "../components/myMessages";

class Content{
    constructor(){
        this.korisnik = this.korisnik;
        let user = new User();
        let message = new MessageList();
        let myMessage = new MyMessages();
        let addNewMessage = new NewMessage();


        this.node = document.createElement('main');
        this.node.appendChild(user.getNode());
        this.node.appendChild(message.getNode());
        this.node.appendChild(addNewMessage.getNode());
        this.node.appendChild(myMessage.getNode());

        user.setBtnAddLoginOnClick(()=>{
            if(user.txtInput.value == ""){return alert("UserName can not be empty")}
            if(user.txtInput.value !== user.txtInput.value.trim(" "))
            {return alert("UserName can not start or end with space")}
           this.korisnik = user.txtInput.value;
           user.span.innerHTML = `[ ${user.txtInput.value} ] Loged-In`;
           user.txtInput.value = '';
        })

        addNewMessage.addMessage(()=>{
            if(this.korisnik == undefined && user.txtInput.value == "")
            {return alert("Can Not Add Message Without Loged-In User")}
            if(addNewMessage.message.value == "" && user.txtInput.value == "")
            {return alert("Message can not be empty!")}
            addMessage(this.korisnik,addNewMessage.message.value)
            .then(data=>{console.log(data)
            message.emptyList();
            getAllMessages()
            .then(data => {
                data.data.forEach(element => {
                
                    let z = document.createElement('li');
                    let x = element.username;
                    let y = element.message;
                    let j = new Date(element.timestamp).toLocaleTimeString();
                
                    z.textContent = `[${j}] [User:${x}] [Message]:"${y}"`;
                    message.list.appendChild(z);
                });
            })
            addNewMessage.message.value = '';
        })})

        addNewMessage.listMyMessages(()=>{
            if(this.korisnik == undefined && user.txtInput.value == "")
            {return alert("Can Not List UserMessages Without Loged-In User")}
            myMessage.emptyList();
            getAllMessagesForUser(this.korisnik).then(data=>{
                data.messages.forEach(element => {
                    let z = document.createElement('li');
                    let x = element.username;
                    let y = element.message;
                    let j = new Date(element.timestamp).toLocaleTimeString();
                    
                    z.textContent = `[${j}] [User:${x}] [Message]:"${y}"`;
                    myMessage.list.appendChild(z);
                });});
        })
    }
    getNode(){
        return this.node
    }
}

export{
    Content
}