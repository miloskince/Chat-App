
class NewMessage{
    constructor(){
        this.message = document.createElement('input');
        this.message.type = "text";
        this.message.id = "newMessage";
        this.message.placeholder = "New Message";

        this.button = document.createElement('input');
        this.button.type = "submit";
        this.button.id = "btn";
        this.button.value = "Add-Message";

        this.myMsg = document.createElement('input');
        this.myMsg.type = "submit";
        this.myMsg.id = "btn";
        this.myMsg.value = "My-Messages";

        this.node = document.createElement('footer');
        this.node.appendChild(this.message);
        this.node.appendChild(this.button);
        this.node.appendChild(this.myMsg);
    }
    getNode(){
        return this.node;
    }
    addMessage(onClick){
        this.button.addEventListener('click', onClick);
    }
    listMyMessages(onClick){
        this.myMsg.addEventListener('click',onClick);
    }
}

export{
    NewMessage
}