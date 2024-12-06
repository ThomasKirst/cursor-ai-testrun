const learningTopics = [
    {
        title: "JavaScript Calculations and Math Operations",
        details: [
            "Implemented mathematical operations in calculate.js and math.js",
            "Created functions for basic arithmetic operations (addition, subtraction, multiplication)",
            "Learned about handling edge cases and input validation",
            "Practiced writing clean, maintainable math-related code"
        ],
        codeExample: "function sum(a, b) { return a + b; }"
    },
    {
        title: "Testing and Quality Assurance",
        details: [
            "Created test files (sum.test.js and math.test.js) to ensure code reliability",
            "Learned about unit testing principles and best practices",
            "Practiced writing test cases for different scenarios",
            "Understanding test-driven development (TDD) approach"
        ],
        codeExample: "test('adds 1 + 2 to equal 3', () => { expect(sum(1, 2)).toBe(3); });"
    },
    {
        title: "Data Filtering and Manipulation",
        details: [
            "Developed filtering functions in filter.js",
            "Learned about array methods like filter(), map(), and reduce()",
            "Practiced handling complex data structures",
            "Implemented efficient filtering algorithms"
        ],
        codeExample: "const filtered = array.filter(item => item.value > 10);"
    },
    {
        title: "Package Management with NPM",
        details: [
            "Configured project dependencies in package.json",
            "Understanding semantic versioning",
            "Managing project scripts and commands",
            "Learning about development vs production dependencies"
        ],
        codeExample: '"dependencies": { "lodash": "^4.17.21" }'
    },
    {
        title: "Modular Code Architecture",
        details: [
            "Organized code into separate functional modules",
            "Implemented proper file structure for better maintainability",
            "Used import/export statements for module communication",
            "Created reusable components and utilities"
        ],
        codeExample: "export const mathUtils = { sum, subtract, multiply };"
    },
    {
        title: "Cursor AI Keyboard Shortcuts",
        details: [
            "Learned essential keyboard shortcuts for increased productivity",
            "Mastered AI-powered features and commands",
            "Understanding context and search capabilities",
            "Practiced using @ symbol commands for better context"
        ],
        shortcuts: {
            "Core Commands": [
                { key: "⌘K / Ctrl+K", desc: "Inline edits" },
                { key: "⌘L / Ctrl+L", desc: "Toggle chat mode" },
                { key: "⌘I / Ctrl+I", desc: "Composer mode" },
                { key: "⌘Enter / Ctrl+Enter", desc: "Accept edits" }
            ],
            "AI Features": [
                { key: "⌘Shift+L / Ctrl+Shift+L", desc: "Add code to Chat" },
                { key: "⌘Shift+K / Ctrl+Shift+K", desc: "Add code to Edit" },
                { key: "⌘Shift+E / Ctrl+Shift+E", desc: "AI fix for linter errors" },
                { key: "⌘Option+L / Ctrl+Alt+L", desc: "View chat history" }
            ],
            "UI Commands": [
                { key: "⌘B / Ctrl+B", desc: "Toggle sidebar" },
                { key: "⌘J / Ctrl+J", desc: "Toggle bottom panel" },
                { key: "⌘, / Ctrl+,", desc: "Open settings" }
            ],
            "Context Commands": [
                { key: "@file", desc: "Reference a file" },
                { key: "@folder", desc: "Reference a folder" },
                { key: "@symbol", desc: "Reference a symbol" },
                { key: "@branch", desc: "Reference a git branch" }
            ],
            "Navigation": [
                { key: "⌘P / Ctrl+P", desc: "Quick file open" },
                { key: "⌘Shift+P / Ctrl+Shift+P", desc: "Command palette" },
                { key: "⌘Shift+O / Ctrl+Shift+O", desc: "Go to symbol" },
                { key: "⌘\\ / Ctrl+\\", desc: "Split editor" }
            ]
        }
    }
];

const quizQuestions = [
    {
        question: "Which command is used to toggle chat mode in Cursor AI?",
        options: [
            "⌘K / Ctrl+K",
            "⌘L / Ctrl+L",
            "⌘I / Ctrl+I",
            "⌘B / Ctrl+B"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of package.json?",
        options: [
            "To write JavaScript functions",
            "To store test cases",
            "To manage project dependencies and scripts",
            "To filter arrays"
        ],
        correct: 2
    },
    {
        question: "Which symbol is used to reference a file in Cursor AI?",
        options: [
            "@file",
            "#file",
            "$file",
            "&file"
        ],
        correct: 0
    },
    {
        question: "What method would you use to filter an array based on a condition?",
        options: [
            "array.map()",
            "array.reduce()",
            "array.filter()",
            "array.forEach()"
        ],
        correct: 2
    },
    {
        question: "In test-driven development (TDD), what do you write first?",
        options: [
            "Documentation",
            "Implementation",
            "Test cases",
            "Comments"
        ],
        correct: 2
    }
]; 