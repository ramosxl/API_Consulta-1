import agendasController from  './controller/agendasController.js'


export default function adicionarRotas (servidor){
    servidor.use (agendasController); 
}