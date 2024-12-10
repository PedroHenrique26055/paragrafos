const inputText = document.getElementById('input-text');
const addButton = document.getElementById('add-button');
const container = document.getElementById('container');
let paragraphCount = 0;

addButton.addEventListener('click', () => {
    const text = inputText.value.trim();
    if (text) {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        container.appendChild(paragraph);
        paragraphCount++;
        inputText.value = '';
        alert(`${paragraphCount} linha(s) foram adicionada(s).`);
    } else {
        alert('Por favor, insira algum texto antes de adicionar!');
    }
});
