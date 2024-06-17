
import {html,LitElement,css} from 'lit'



export class MenuHeader extends LitElement{

    static styles=css `
    ul{
        text-align: center;
    }  
      `

    static properties={
    }

    constructor(){
        super()
    }



    render(){
        return html`

            <ul>
                <li><a href="/">Comida ninja</a></li>
                <li><a href="/" >Home</a></li>
                <li><a href="/"">acerca de</a></li>
            </ul>
        `
    }


}


customElements.define('menu-header',MenuHeader)