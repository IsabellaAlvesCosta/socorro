import { cadastrarConsulta ,alterarConsulta, deletarConsulta, visualizarConsulta} from '../repository/agendamentoRepository.js'
import multer from 'multer'


import { Router } from 'express'

const server = Router();


server.post('/consulta', async (req, resp) => {

    try {

        const novaConsulta = req.body

        if (!novaConsulta.paciente)

            throw new erro('Necessário nome do paciente');

        if (!novaConsulta.cpf)

            throw new erro('cpf do paciemte necessário');

        if (!novaConsulta.nascimento)

            throw new erro('nascimento do paciente necessário');

        if (!novaConsulta.agendamento)

            throw new erro('dia da consulta nescessária');

        if (!novaConsulta.agendamento)

            throw new erro('hora da consulta nescessária');
        
        if (!novaConsulta.telefone)

            throw new erro('telefone do paciente é nescessário');
            
        if (!novaConsulta.situacao)

            throw new erro('situaçao nescessária');

    } catch (err) {

        resp.status(400).send({

            erro: err.message

        })

    }

})

server.delete('/consulta/:id', async (req, resp) => {

    try {

        const { id } = req.params;

        const resposta = await deletarConsulta(id);

        if (resposta != 1)

            throw new Error('Consulta não foi removida');

        resp.status(204).send();

    } catch (err) {

        resp.status(400).send({

            erro: err.message

        })
    }
    })

    server.put('/consulta/:id', async (req, resp) => {

        try {
            const { id } = req.params;
    
            const consulta = req.body;
    
            const resposta = await alterarConsulta(id, consulta);
    
            if (resposta != 1)
    
                throw new Error('Consulta não pode ser alterada');
    
            if (!consulta.paciente)
    
                throw new erro('Nome do paciente necessário');
    
    
            if (!consulta.cpf)
    
                throw new erro('cpf necessário');
    
            if (!consulta.nascimento)
    
                throw new erro('Data de nascimento do paciente é nescessário');

            if (!consulta.agendamento)
    
                throw new erro('Hora do agendamento é nescessário');
            
            if (!consulta.agendamento)
    
                throw new erro('Dia do agendamento é nescessário');

            if (!consulta.telefone)
    
                throw new erro('Telefone do paciente é nescessário');

            if (!consulta.situacao)
    
                throw new erro('Situação do agendamento é nescessário');
    
            else
    
                resp.status(204).send();
    
        } catch (err) {
    
            resp.status(400).send({
    
                erro: err.message
    
            })
        }
        })

        server.get('/consulta', async (req, resp) => {

            try {
        
                const resposta = await visualizarConsulta();
        
            } catch (err) {
        
                resp.status(400).send({
        
                    erro: err.message
        
                })
        
            }
        
        })

    
        export default server

    