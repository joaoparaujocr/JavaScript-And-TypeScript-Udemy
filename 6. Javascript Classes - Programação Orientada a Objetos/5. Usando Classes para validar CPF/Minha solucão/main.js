// 705.484.450-52 070.987.720-03
/*

7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0 40 28 48 20 16 15  0 = 237
11 - (237 % 11) = 5 (Primeiro digito) se > 9 == 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = 284
11 - (284 % 11) = 2 (segundo digito) se > 9 == 0
*/

class ValidateCPF {
    constructor(cpfInput){
        Object.defineProperty(this, 'cpfValue', {
            enumerable: true,
            get: function(){
                return cpfInput.replace(/\D+/g, '');
            }
        })
    }
    
    startValidation() {
        if(typeof this.cpfValue === 'undefined') return false;
        if(this.cpfValue.length !== 11) return false;
        if(this.isSequencie()) return false;

        const cpfPartial = this.cpfValue.slice(0, -2);;
        const firstDigit = this.createType(cpfPartial);
        const secondDigit = this.createType(cpfPartial + String(firstDigit));
        const cpfFinally = String(cpfPartial) + String(firstDigit) + String(secondDigit);

        return cpfFinally === this.cpfValue;
    }

    isSequencie() {
        return this.cpfValue[0].repeat(this.cpfValue.length) === this.cpfValue;
    }

    createType(numberCPF) {
        const arrayCPF = Array.from(numberCPF)
        let regressive = arrayCPF.length + 1;

        const total = arrayCPF.reduce((accumulator, value) => {
            accumulator += (Number(value) * regressive);
            regressive --;
            return accumulator;
        }, 0);

        const digit = 11 - (total % 11);

        return digit > 9 ? 0 : digit;
    }
}

const cpf = new ValidateCPF('070.987.720-03');
if (cpf.startValidation()){
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}
