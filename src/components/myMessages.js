class MyMessages{
    constructor(){
        this.list = document.createElement('ul');
        this.list.id = 'myMessage';
    }

    emptyList(){
        this.list.innerHTML="";
    }

    getNode(){
        return this.list;
    }
}

export{
    MyMessages
}