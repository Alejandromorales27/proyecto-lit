
import {html,LitElement,css} from 'lit'



export class Menu extends LitElement{

    static styles=css `
    ul{
        margin-left:0;
        background-color: white;
        border: 1px solid black;
        text-align: center;
        border-radius: 20px;

    }

    li{
    display:flex;
    justify-content:center;
    align-item:center;
 
    border-bottom:1px solid black ;
    transition:0.2s;
    }

    #primer-elemento{
        border-radius: 20px 20px 0 0;

    }

    #contacto{
        display:flex;
        justify-content:center;
        align-item:center;
        border-radius: 0 0 20px 20px;
        
    }



    li:hover{
        background-color:#f0bf00;
         
    }
        
    a{
        color:black;
        list-style: none;
    }
      `

    static properties={
        sideId:{type:String}
    }

    constructor(){
        super()
        this.sideId="side-menu"
    }



    render(){
        return html`

        <link rel="stylesheet" href="./node_modules/materialize-css/dist/css/materialize.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

            <ul class="side-menu">
                <li id="primer-elemento"><a href="/">Recetas Niponas</a></li>
                <li><a href="/" class="waves-effect">Home</a></li>
                <li><a href="../about.html" class="waves-effect">acerca de</a></li>
                <li id="contacto"><a href="../contacto.html" class="waves-effect">
                    contacto<i class="material-icons">mail_outline</i>
                </a></li>
            </ul>
        `
    }


}


customElements.define('menu-lateral',Menu)



















