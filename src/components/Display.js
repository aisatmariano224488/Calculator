const Display = (value = '0') => {
    return `
        <section class="px-4 bg-neutral">
            <div class="p-4 text-white text-end text-4xl">${value}</div>
        </section>
    `;
}
 
export default Display;