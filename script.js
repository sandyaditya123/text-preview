// Get output element
const outputName = document.getElementById('output');

// Add event listener for 'input'
document.getElementById('input').addEventListener('input', function (event) {
    // Displays text in the output element
    outputName.textContent = event.target.value;
});

// Add event listener for 'change'
document.getElementById('style-group').addEventListener('change', function (event) {
    // Get value of selected style
    let selectedStyle = event.target.value;

    // Change style when there is a value match
    switch (selectedStyle) {
        case 'uppercase':
            outputName.style.textTransform = 'uppercase';
            outputName.style.fontStyle = 'normal';
            outputName.style.fontWeight = 'normal';
            break;
        case 'italic':
            outputName.style.fontStyle = 'italic';
            outputName.style.textTransform = 'none';
            outputName.style.fontWeight = 'normal';
            break;
        case 'bold':
            outputName.style.fontWeight = 'bold';
            outputName.style.textTransform = 'none';
            outputName.style.fontStyle = 'normal';
            break;
        default:
            outputName.style.textTransform = 'none';
            outputName.style.fontStyle = 'normal';
            outputName.style.fontWeight = 'normal';
    }
});
