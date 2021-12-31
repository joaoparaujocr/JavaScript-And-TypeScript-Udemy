// 705.484.450-52 070.987.720-03
class ValidaCPF {
    constructor(cpfEnvidado) {
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnvidado.replace(/\D+/g, ''),
            enumerable: false,
            configurable: false,
            writable: false
        });
    }

    valida() {
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencie()) return false;
        if(!this.geraNovoCpf()) return false;

        return true;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + String(digito1));
        const novoCpf = cpfSemDigitos + digito1 + digito2
        return novoCpf === this.cpfLimpo;
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let regressivo = cpfSemDigitos.length + 1;
        for(let i of cpfSemDigitos) {
            total += (Number(i) * regressivo);
            regressivo--;
        }

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }

    isSequencie(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }
}