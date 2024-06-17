import {html,LitElement,css, nothing} from 'lit'
import { state } from 'lit/decorators.js';


export class Boton extends LitElement{

    static styles=css `

     #menu-sandwich{
        color:white;
        transform:scale(1.2);
     }
    #menu-sandwich:hover{        
    cursor:pointer;

    }


      `

    static properties={
        dataTarget:{type:Boolean,state:true} 
    }



    constructor(){
        super();
        this.dataTarget=true
    }

    escuchaDocumento(){
        super.connectedCallback()
        document.addEventListener('click',()=>{
            if(!this.dataTarget){
                this.dataTarget=true
            }
        })
    }

    lanzarMenu(){
      
        this.dataTarget=!this.dataTarget;
        const evento=new CustomEvent('dataTarget',{
            detail:{data:this.dataTarget},
            bubbles:true,
            composed:true
        })
        this.dispatchEvent(evento)
    }

    escucharClickMenu(){
        window.addEventListener('click-menu-boton',(e)=>{
            this.dataTarget=true
            console.log(e)
        })
    }

    render(){
        return html`
        <link rel="stylesheet" href="./node_modules/materialize-css/dist/css/materialize.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <p ${this.escucharClickMenu()}></p>
            ${this.dataTarget? html`<i id="menu-sandwich" data-target="${this.dataTarget}" @click=${this.lanzarMenu} id="menu" class="material-icons sidenav-trigger" >menu</i>`:nothing}
            
        `
    }


}


customElements.define('button-menu',Boton)