
import {html,LitElement,css} from 'lit'



export class Contacto extends LitElement{

    static styles=css `
 
      `

    static properties={
    }

    constructor(){
        super()

    }



    render(){
        return html`

        <link rel="stylesheet" href="./node_modules/materialize-css/dist/css/materialize.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        <section class="container grey-text">
            <h4 class="center">Acerca de nosotros</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing eli</p>
        </section>
        `
    }


}


customElements.define('pagina-contacto',Contacto)