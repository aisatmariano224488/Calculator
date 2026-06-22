const Buttons = (onButtonClick) => {

    const button = ['AC', '%', '÷', '7', '8', '9','x', '4', '5', '6','-', '1', '2', '3', '+', '0', '.', '='];
    const wideButton = ['AC', '0'];
    const op = ['+', '-', 'x', '÷', '=', '%'];
    const valueMap = {
        '÷': '/',
        'x': '*',
        'AC': 'clear'
    }

    return `
        <section class="grid grid-cols-4 gap-2">
            ${button.map(btn => {
                const value = valueMap[btn] || btn;
                const span = wideButton.includes(btn) ? 'col-span-2 bg-tertiary' : '';
                const operations = op.includes(btn) ? 'bg-primary' : 'bg-neutral text-white';

                return `
                    <button 
                        onClick="onButtonClick('${value}')" 
                        class='${span} ${operations} rounded-full py-6 px-7'>
                        ${btn}
                    </button>
                `

            }).join('')}

        </section>
    `;
}
 
export default Buttons;