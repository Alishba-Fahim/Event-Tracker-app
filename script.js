// Click Event
let btn1 = document.getElementById("clickBtn");
let count = 0;

btn1.addEventListener("click", () => {
    count++;
    console.log("Button was clicked!");
    document.getElementById("result").innerText = `Click Count: ${count}`;
});

// Mouse Event
const mouseArea = document.getElementById('mouseArea');
const message = document.getElementById('message');

mouseArea.addEventListener('mousemove', (event) => {
    message.textContent = `Mouse Position: (X: ${event.offsetX}, Y: ${event.offsetY})`;
});

mouseArea.addEventListener('mouseleave', () => {
    message.textContent = '';
});

// Keyboard Events
function displayKey(event) {
    const message = document.getElementById('keyboard-message');
    if (event.type === 'input') {
        message.textContent = `Last key pressed: ${event.target.value.slice(-1)}`;
    } else if (event.type === 'keydown') {
        message.textContent = `Last key pressed: ${event.key}`;
    }
}

function reset() {
    // Reset the input field
    const inputField = document.getElementById('inputField-keyboard');
    inputField.value = '';

    // Clear the message
    const message = document.getElementById('keyboard-message');
    message.textContent = '';
}

// Focus & Blur Events
const inputField = document.getElementById('focusInput');
const focusMsg = document.getElementById('focusMsg');

inputField.addEventListener('focus', () => {
    inputField.style.backgroundColor = 'yellowgreen';
    focusMsg.textContent = 'Input is Focused!';
});

inputField.addEventListener('blur', () => {
    inputField.style.backgroundColor = 'lightblue';
    focusMsg.textContent = 'Input is Not Focused!';
});

// Window Resize Event
function updateWindowSize() {
    const message = document.getElementById('resize-message');
    message.textContent = `Window size: Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
}

// Initial size display
updateWindowSize();

// Resize
window.addEventListener('resize', updateWindowSize);

// Touch Event
function showTouchPosition(event) {
    const touch = event.touches[0];
    const message = document.getElementById('touch-message');
    message.textContent = `Touch position: X: ${touch.clientX}, Y: ${touch.clientY}`;
}

function resetMessage() {
    const message = document.getElementById('touch-message');
    message.textContent = 'Touch position: None';
}

document.addEventListener('touchstart', showTouchPosition);

// Submit Event
function handleSubmit(event) {
    event.preventDefault();
    const submitStatus = document.getElementById('submitStatus');
    submitStatus.textContent = 'Submission Status: Submitted';
}

function resetForm() {
    document.getElementById('myForm').reset();
    document.getElementById('submitStatus').textContent = 'Submission Status: Not Submitted';
}

// Drag and Drop Event
function handleDragStart() {
    const dragStatus = document.getElementById('dragStatus');
    dragStatus.textContent = 'Drag Status: Dragging';
}

function handleDragEnd() {
    const dragStatus = document.getElementById('dragStatus');
    dragStatus.textContent = 'Drag Status: Ended';
}

function allowDrop(event) {
    event.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();
    const dragStatus = document.getElementById('dragStatus');
    dragStatus.textContent = 'Drag Status: Dropped in the box!';
}

// Media Event
document.getElementById('myVideo').addEventListener('play', () => {
    document.getElementById('mediaStatus').textContent = 'Media Status: Playing';
});

document.getElementById('myVideo').addEventListener('pause', () => {
    document.getElementById('mediaStatus').textContent = 'Media Status: Paused';
});

document.getElementById('myVideo').addEventListener('ended', () => {
    document.getElementById('mediaStatus').textContent = 'Media Status: Ended';
});


// Scroll Event
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.getElementById('scrollPosition').textContent = `Scroll Position: ${scrollY}`;
});

// Paste Event
function handlePaste(event) {
    const pastedData = event.clipboardData.getData('text');
    document.getElementById('paste-result').textContent = `Pasted: ${pastedData}`;
}

function resetFields() {
    document.getElementById('input-paste').value = '';
    document.getElementById('paste-result').textContent = 'Pasted text will appear here.';
}
