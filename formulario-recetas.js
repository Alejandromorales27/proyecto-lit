
import {html,LitElement,css, nothing} from 'lit'



export class FormularioRecetas extends LitElement{

    static styles=css `

    section{
        z-index:2;
    }

    #colorbtn{
    background-color: var(--title);
    }

    input{
    box-shadow: none;
    }

    .side-form button{
    background-color: var(--title);
    box-shadow: 1px 1px 3px rgba(90,90,90,0.2);
    }

    form .input-field{
    margin-top: 30px;
    }

      `

    static properties={
        validador:{type:Boolean},
        datosFormulario:{type:Array}
    }

    constructor(){
        super()
        this.validador=false
        this.text=""
        this.datosFormulario=JSON.parse(localStorage.getItem('datosFormulario'))|| this.enviarDatosFormulario() 

    }

     enviarDatosFormulario(){
        this.datosFormulario=[{
            id:Math.random(),
            title:"risotto",
            ingredientes:"arroz arborio, caldo de res, queso parmesano"
        },
        {   id:Math.random(),
            title:"hamburguesa",
            ingredientes:"bollos, hamburguesa, queso"
        },]; 
        localStorage.setItem('datosFormulario',JSON.stringify(this.datosFormulario))
    }
 

    
 


    
    agregarNuevaReceta(e){
        this.validador=!this.validador
    } 





    render(){
        return html`

        <link rel="stylesheet" href="./node_modules/materialize-css/dist/css/materialize.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <slot name="receta-nueva"></slot>
        <section id="side-form" side-form" >
            <form @submit=${this.enviarDatos} class="add-recipe container section "  >
                <h4>Nueva receta</h4>
                <div class="divider"></div>
                <section class="input-field">
                    <input placeholder="nombre de tu receta" id="title" type="text" class="validate" required>
                </section>
                <section class="input-field">
                    <input  placeholder="ingredientes" id="ingredientes" type="text" class="validate" required>
                    <label for=""></label>
                </section>
                <section class="input-field center">
                    <button  type="submit"  class="btn-small">Agregar</button>
                </section>
             </form>
        </section>

        
        `
    }

    enviarDatos(event){
        event.preventDefault()
        const title=this.shadowRoot.getElementById('title').value;
        const ingredientes=this.shadowRoot.getElementById('ingredientes').value;

        const nuevoDato={
            id:Math.random(),
            title,
            ingredientes
        }
        this.datosFormulario=JSON.parse(localStorage.getItem('datosFormulario'))
        this.datosFormulario.push(nuevoDato) 

        localStorage.setItem('datosFormulario',JSON.stringify(this.datosFormulario)) 
        this.shadowRoot.getElementById('title').value=""
        this.shadowRoot.getElementById('ingredientes').value=""
        const elemento= this.datosFormulario.length-1 
        console.log(this.datosFormulario[elemento]) 
        const evento=new CustomEvent('envioDatos',{
            detail:{data: nuevoDato},
            bubbles:true,
            composed:true
        })
        this.dispatchEvent(evento)

    }


}


customElements.define('formulario-recetas',FormularioRecetas)
