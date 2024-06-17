import {html,LitElement,css, nothing} from 'lit'
import {map} from 'lit/directives/map.js';


export class Receta extends LitElement{
    static styles=css `.recipes{
        
      }
    .card-panel.recipe{
    border-radius: 8px;
        padding: 10px;
        box-shadow: 0 1px 3px rgba(90,90,90,0.1);
        display: grid;
        grid-template-columns: 2fr 6fr 1fr;
        grid-template-areas:"image details delete";

    }
    .recipe img{
    grid-area: image;
    max-width: 60px;
    }

   .recipe-details{
    grid-area: details;
    margin: 6px;
    }

    .recipe-details{
    grid-area: details;
    margin: 6px;
    }

    i{
      transition:0.5s;
    }

    i:hover{
      transform:scale(1.1);
      cursor:pointer;
    }

    
      `

      static properties={
        recetas:{},
        actualizacionLista:{type:Boolean,state:true}
      }

      constructor(){
        super();
        this.recetas= []


        
      }





      verEventoBorrar(e){
        let primerSection=e.target.closest('section')
        let sectionPader=primerSection.parentNode.closest('section')
        let elementoElimitar=sectionPader.id;
   

        this.recetas=JSON.parse(localStorage.getItem('datosFormulario')).filter((receta)=>receta.id!=elementoElimitar)
        console.log(this.recetas)
        localStorage.setItem('datosFormulario',JSON.stringify(this.recetas))
        this.requestUpdate()
      }

      actualizardatos(){
        this.addEventListener('envioDatos',(e)=>{
            if(e.detail.data){
              this.recetas=JSON.parse(localStorage.getItem('datosFormulario'))

                this.requestUpdate() 
              }


            })
  
      }
      



      listaRecetas(){
                    this.actualizardatos()
        return html`

            ${this.recetas.map(receta =>{
               return html `
        <section  id=${receta.id} class="card-panel recipe white row">  
            <img src="./img/dish.png" alt="tazon comida">
            <section class="recipe-details">
                <div class="recipe-title">${receta.title}</div>
                 <div class="recipe-ingredients">${receta.ingredientes}</div>
            </section>
            <section class="recipe-delete">
                    <i @click=${this.verEventoBorrar} class="material-icons">delete_outline</i>
            </section>
        </section>
                `
            })}`
        
      }



       connectedCallback(){
        super.connectedCallback();
        this.recetas=JSON.parse(localStorage.getItem('datosFormulario'))
      } 

       disconnectedCallback(){
        super.disconnectedCallback();
        this.recetas=JSON.parse(localStorage.getItem('datosFormulario')).disconnectedCallback()
      } 





    render(){

        return html`

                <link rel="stylesheet" href="./node_modules/materialize-css/dist/css/materialize.min.css">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <section  class="recipes container grey-text text-darken-1" $>
             ${this.listaRecetas()}
        </section>
        <slot name="agregar"></slot>
        `
    }


}


customElements.define('receta-nueva',Receta)