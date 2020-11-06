import mensagens from "./mensagens";

export default {
    nome: {
        required: mensagens.required, 
        maxLength: {value: 5, message: mensagens.maxLength + ' (5) caracteres'},
    },
    cnpj: {
        required: mensagens.required,
    },
    telefone: {
        required: mensagens.required,
        minLength: {value: 14, message: mensagens.minLength + ' (14) caracteres'},
        maxLength: {value: 15, message: mensagens.maxLength + ' (15) caracteres'},
    },
    endereco: {
        required: mensagens.required,
    },
}