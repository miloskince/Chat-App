
class User{
    constructor(){

        this.txtInput = document.createElement('input');
        this.txtInput.type = "text";
        this.txtInput.placeholder = "Enter UserName";
        this.txtInput.id = 'user';

        this.btnAddLogin = document.createElement('input');
        this.btnAddLogin.type = 'submit';
        this.btnAddLogin.id = 'btn';
        this.btnAddLogin.value = 'Log-In';

        this.span = document.createElement('span');
    

        this.form = document.createElement('section');
        this.form.appendChild(this.txtInput);
        this.form.appendChild(this.btnAddLogin);
        this.form.appendChild(this.span);
    }

    getNode(){
        return this.form;
    }   
    setBtnAddLoginOnClick(onClick){
        this.btnAddLogin.addEventListener('click',onClick);
    }
   
}

export{
    User
}