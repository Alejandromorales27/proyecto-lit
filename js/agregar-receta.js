
import {html,LitElement,css, nothing} from 'lit'



export class ButonAgregar extends LitElement{

    static styles=css `


      `

    static properties={
        isButton:{type:Boolean}
    }

    constructor(){
        super()
        this.isButton=false
    }

    abrirFormulario(){
        this.isButton=!this.isButton
        const evento=new CustomEvent('agregar-nuevo',{
            detail:{data:this.isButton},
            bubbles:true,
            composed:true
        })
        this.dispatchEvent(evento)
        console.log("se hizo click")
    }



    render(){
        return html`

        <link rel="stylesheet" href="./node_modules/materialize-css/dist/css/materialize.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        <section class="center">
            <a id="colorbtn"class="btn-floating btn-small btn-large add-btn sidenav-trigger" data-target="side-form" >
                <i class="material-icons"  @click=${this.abrirFormulario}>add</i>
            </a>
        </section>
        ${this.isButton?html`<slot></slot>`:nothing}
        `
    }


}


customElements.define('agregar-receta',ButonAgregar)
