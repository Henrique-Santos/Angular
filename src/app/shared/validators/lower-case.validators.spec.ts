import { isLowerCase } from './lower-case.validators'

describe('A função isLowerCase', () => {
    it('Deve confirmar quando recebe um texto em caixa baixa', () => {
        const valor = 'mario'
        expect(isLowerCase(valor)).toBeTruthy()
        
    })

    it('Deve validar quando o valor enviado não for caixa baixa', () => {
        expect(isLowerCase('Mario')).toBeFalsy()
    })
})