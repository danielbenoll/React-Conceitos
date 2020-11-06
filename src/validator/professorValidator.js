import mensagens from "./mensagens";

export default {
    nome: {
        required: mensagens.required, 
        maxLength: {value: 5, message: mensagens.maxLength + ' (5) caracteres'},
    },
    cpf: {
        required: mensagens.required,
    },
    matricula: {
        required: mensagens.required,
    },
    email: {
        required: mensagens.required,
    },
    telefone: {
        required: mensagens.required,
        minLength: {value: 14, message: mensagens.minLength + ' (14) caracteres'},
        maxLength: {value: 15, message: mensagens.maxLength + ' (15) caracteres'},
    },
    cep: {
        required: mensagens.required,
    },
    uf: {
        required: mensagens.required,
    },
    municipio: {
        required: mensagens.required,
    },
    numero: {
        required: mensagens.required,
    },
}