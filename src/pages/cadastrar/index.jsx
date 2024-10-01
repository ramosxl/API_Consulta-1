import { useState } from 'react'
import './index.scss'
import axios from 'axios'


export default function RegistrarConsultas() {
    const [IDconsulta, setId] = useState('');
    const [Procedimento, setProcedimento] = useState('');
    const [Medicamentos, setMedicamentos] = useState('');
    const [Custo, setCusto] = useState('');


    async function salvarConsulta() {
        let paramCorpo = {
            "ID": ID,
            "Procedimento": Procedimento,
            "Medicamento": Medicamento,
            "Custo": Custo,
        }

        const url = 'http://localhost:5010/TCC';
        let resp = await axios.post(url, paramCorpo);

        alert('Consulta adicionada na agenda. Id: ' + resp.data.novoId);
    }


    return (
        <div className='pagina-cadastrar'>
            <h1> Inserir Consulta </h1>


            <div className='form'>
                <div>
                    <label>Nome:</label>
                    <input type='text' value={ID} onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <label>Motivo:</label>
                    <input type='text' value={Procedimento} onChange={e => setMotivo(e.target.value)}/>
                </div>
                <div>
                    <label>Vingança:</label>
                    <input type='date' value={Medicamentos} onChange={e => setVinganca(e.target.value)} />
                </div>
                <div>
                    <label>Nota de Ódio</label>
                    <input type='text' value={Custo} onChange={e => setNota(e.target.value)} />
                </div>
            </div>
            <button onClick={salvar}> SAVE </button>

        </div>
    )
}