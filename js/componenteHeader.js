import {html,LitElement,css, nothing} from 'lit'


export class Header extends LitElement{

    static styles=css `

    nav{
    background-color: #C7823F;
    border-bottom: 10px solid var(--secondary);
            height: 80px;
    }
    #nav-menu{
        width:100%;

        display:flex;
        align-items: center;
       justify-content: end;
       gap:30px

    }

    nav a{
    text-transform: uppercase;
    color:#FFC0CB;
    font-family: "Shojumaru";
    font-weight: 400;
    }
    
    menu-lateral{
    margin-top:250px;
    width:200px;
    }

    span{
        margin-right: 10px;
    }
    `

    static properties={
        verMenu:{type:Boolean}
    }

    constructor(){
        super();
        this.verMenu=false
    }

    escucharEventoMenu(e){
        if(e){
            this.verMenu=!this.verMenu
        }else{
            this.escucharClick()
        }

    }

    escucharClick(){
        document.addEventListener('click',(e)=>{
            if(this.verMenu && e.target.id!="boton"){
                this.verMenu=!this.verMenu
                const evento= new CustomEvent("click-menu-boton",{
                    detail:{data:"texto"},
                    bubbles:true,
                    composed:true
                })
                this.dispatchEvent(evento)
            }

/*             this.verMenu=e.isTrusted
            console.log("se hizo click", e.isTrusted)
            const event= new CustomEvent(e.isTrusted,{
                detail:{data:"Se hizo click"},
                bubbles:true,
                composed:true,
            })
            this.dispatchEvent(event) */
        }
        )
    } 




    render(){
        return html`

                <link rel="stylesheet" href="./node_modules/materialize-css/dist/css/materialize.min.css">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <nav class="z-depth-0" ${this.escucharClick()}>
            <section id="nav-menu" class="nav-wrapper container"  @dataTarget=${this.escucharEventoMenu}>
                <a id="titulo-header" href="/">Recetas Niponas</a>
                ${this.verMenu? html` <menu-lateral></menu-lateral>`: nothing}

                <span class="right grey-text text-darken-1">
                    <slot name="menu"><slot>
                </span>   
            </section>
            
        </nav>
        `
    }


}




customElements.define('componente-header',Header)