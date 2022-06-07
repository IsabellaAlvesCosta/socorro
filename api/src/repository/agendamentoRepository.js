import { con } from '../repository/connections.js';

export async function cadastrarConsulta(consulta) {

const comando = 

    ` insert into TB_AGENDAMENTO (ID_AGENDAMENTO, NM_PACIENTE, DS_CPF, DT_NASCIMENTO, HR_AGENDAMENTO, DT_AGENDAMENTO, DS_TELEFONE, DS_SITUACAO)

         values (?, ?, ?, ?, ?, ?, ?, ?)`;

const [resposta] = await con.query (comando,[consulta.paciente, consulta.cpf, consulta.nascimento, consulta.agendamento, consulta.agendamento, consulta.telefone, consulta.situacao]);
consulta.id = resposta.insertId;

return consulta;

}

export async function solicitarConsulta(consulta) {

    const comando = 
    
        ` insert into TB_AGENDAMENTO (ID_AGENDAMENTO, NM_PACIENTE, DS_CPF, DT_NASCIMENTO, HR_AGENDAMENTO, DT_AGENDAMENTO, DS_TELEFONE)
    
             values (?, ?, ?, ?, ?, ?, ?, ?)`;
    
    const [resposta] = await con.query (comando,[consulta.paciente, consulta.cpf, consulta.nascimento, consulta.agendamento, consulta.agendamento, consulta.telefone]);
    consulta.id = resposta.insertId;
    
    return consulta;
    
    }


export async function visualizarConsulta() {

const comando = 

    `SELECT ID_AGENDAMENTO       AGENDAMENTO,
            NM_PACIENTE             PACIENTE,
            DS_CPF                       CPF,
            DT_NASCIMENTO         NASCIMENTO,
            HR_AGENDAMENTO       AGENDAMENTO,
            DT_AGENDAMENTO       AGENDAMENTO,
            DS_TELEFONE             TELEFONE,
            DS_SITUACAO             SITUACAO,
       FROM TB_AGENDAMENTO`;

const [linhas] = await con.query (comando);

return linhas;

}





export async function deletarConsulta(id) {

const comando = 

    `DELETE FROM TB_AGENDAMENTO
            WHERE ID_AGENDAMENTO = ?`;

const [resposta] = await con.query (comando, [id]);

return resposta.affectedRows;

}

export async function alterarConsulta(id, consulta){

const comando = 

    `UPDATE TB_AGENDAMENTO
    SET NM_PACIENTE       = ?,
        DS_CPF            = ?,
        DT_NASCIMENTO     = ?,
        HR_AGENDAMENTO    = ?,   
        DT_AGENDAMENTO    = ?,  
        DS_TELEFONE       = ?,   
        DS_SITUACAO       = ?,
     WHERE ID_AGENDAMENTO = ? `

const [resposta] = await con.query(comando, [consulta.paciente, consulta.cpf, consulta.nascimento,consulta.agendamento,consulta.agendamento, consulta.telefone, consulta.situacao, id]);

return resposta.affectedRows;

}

