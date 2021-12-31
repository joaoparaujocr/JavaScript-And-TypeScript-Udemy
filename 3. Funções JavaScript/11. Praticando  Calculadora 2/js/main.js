function Calculadora() {
    const view = document.querySelector('#view');

    const doCalculation = () => {
        let viewValue = view.value.replace(/×/g, '*').replace(/÷/g, '/');
        try {
            viewValue = eval(viewValue);
            if(viewValue === 0) view.value = '0';
            if(!viewValue) view.value = 'ERROR';
            view.value = viewValue;
        } catch (error) {
            view.value = 'ERROR';
        }
    }

    const clickButtons = () => {
        document.addEventListener('click', e => {
            view.focus();
            const element = e.target;
            if (element.classList.contains('btn-number')) view.value += element.innerText;
            switch (element.getAttribute('id')) {
                case 'clear':
                    view.value = '';
                    break;
                case 'backspace':
                    view.value = view.value.slice(0, -1);
                    break;
                case 'plus':
                    view.value += '+';
                    break;
                case 'minus':
                    view.value += '-';
                    break;
                case 'times':
                    view.value += '×';
                    break;
                case 'divide':
                    view.value += '÷';
                    break;
                case 'percentage':
                    view.value += '%';
                    break;
                case 'parenthese-open':
                    view.value += element.innerText;
                    break;

                case 'parenthese-close':
                    view.value += element.textContent;
                    break;

                case 'equals':
                    return doCalculation();

                default:
                    break;
            }
        })
    }
    this.pressKey = () => {
        document.addEventListener('keypress', e => {
            if(e.keyCode === 13) doCalculation();
        })
    }
    this.start = () => {
        clickButtons();
        this.pressKey();
    }
}
const calculator = new Calculadora();
calculator.start();