import ConsultasController from  './controller/ConsultasController.js'


export default function adicionarRotas (servidor){
    servidor.use (ConsultasController); 
}