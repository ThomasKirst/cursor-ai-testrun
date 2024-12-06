// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    
    // Save preference
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

// Load saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    body.classList.toggle('light-mode', !isDarkMode);
    body.classList.toggle('dark-mode', isDarkMode);
});

// Set current date
const dateElement = document.getElementById('currentDate');
const today = new Date();
dateElement.textContent = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
});

// Create and append learning sections
const container = document.getElementById('learningContainer');

learningTopics.forEach(topic => {
    const section = document.createElement('div');
    section.className = 'summary-item';
    
    const title = document.createElement('h2');
    title.className = 'topic';
    title.textContent = topic.title;
    
    const detailsList = document.createElement('ul');
    detailsList.className = 'details';
    
    topic.details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        detailsList.appendChild(li);
    });
    
    section.appendChild(title);
    section.appendChild(detailsList);

    if (topic.shortcuts) {
        Object.entries(topic.shortcuts).forEach(([category, shortcuts]) => {
            const categoryTitle = document.createElement('h3');
            categoryTitle.textContent = category;
            categoryTitle.style.marginTop = '20px';
            
            const shortcutsGrid = document.createElement('div');
            shortcutsGrid.className = 'shortcuts-grid';
            
            shortcuts.forEach(shortcut => {
                const shortcutItem = document.createElement('div');
                shortcutItem.className = 'shortcut-item';
                
                const keySpan = document.createElement('span');
                keySpan.className = 'shortcut';
                keySpan.textContent = shortcut.key;
                
                const descSpan = document.createElement('span');
                descSpan.textContent = shortcut.desc;
                
                shortcutItem.appendChild(descSpan);
                shortcutItem.appendChild(keySpan);
                shortcutsGrid.appendChild(shortcutItem);
            });
            
            section.appendChild(categoryTitle);
            section.appendChild(shortcutsGrid);
        });
    } else if (topic.codeExample) {
        const codeBlock = document.createElement('pre');
        codeBlock.innerHTML = `<code>${topic.codeExample}</code>`;
        section.appendChild(codeBlock);
    }
    
    container.appendChild(section);
}); 

// Create and append quiz section
function createQuiz() {
    const quizSection = document.createElement('div');
    quizSection.className = 'quiz-section';
    
    const quizTitle = document.createElement('h2');
    quizTitle.className = 'quiz-title';
    quizTitle.textContent = 'Test Your Knowledge!';
    
    const quizContent = document.createElement('div');
    quizContent.id = 'quiz-content';
    
    quizSection.appendChild(quizTitle);
    quizSection.appendChild(quizContent);
    
    container.appendChild(quizSection);
    
    startQuiz();
}

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const quizContent = document.getElementById('quiz-content');
    const question = quizQuestions[currentQuestion];
    
    quizContent.innerHTML = `
        <div class="quiz-question">
            <div style="color: var(--text-primary)">Question ${currentQuestion + 1} of ${quizQuestions.length}</div>
            <div style="color: var(--text-secondary); margin-top: 10px">${question.question}</div>
            <div class="quiz-options">
                ${question.options.map((option, index) => `
                    <div class="quiz-option" onclick="selectAnswer(${index})">
                        ${option}
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="quiz-score">Score: ${score}/${quizQuestions.length}</div>
    `;
}

function selectAnswer(selectedIndex) {
    const question = quizQuestions[currentQuestion];
    const options = document.querySelectorAll('.quiz-option');
    
    options.forEach(option => option.style.pointerEvents = 'none');
    
    if (selectedIndex === question.correct) {
        options[selectedIndex].classList.add('correct');
        score++;
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[question.correct].classList.add('correct');
    }
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

function showResults() {
    const quizContent = document.getElementById('quiz-content');
    const percentage = (score / quizQuestions.length) * 100;
    
    quizContent.innerHTML = `
        <div class="quiz-question">
            <div style="color: var(--text-secondary); text-align: center; margin-bottom: 20px">
                Quiz Complete!
            </div>
            <div style="color: var(--text-primary); text-align: center; margin-bottom: 20px">
                Final Score: ${score}/${quizQuestions.length} (${percentage}%)
            </div>
            <div class="quiz-controls">
                <button class="quiz-button" onclick="startQuiz()">Try Again</button>
            </div>
        </div>
    `;
}

// Call createQuiz after all content is loaded
createQuiz(); 