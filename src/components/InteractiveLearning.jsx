import React, { useState, useEffect } from 'react';
import { phases } from '../data/phases/index.js';

// Custom scrollbar styles
const scrollbarStyles = `
  .instructions-scrollbar::-webkit-scrollbar {
    width: 12px;
  }
  
  .instructions-scrollbar::-webkit-scrollbar-track {
    background: rgba(15, 23, 42, 0.5);
  }
  
  .instructions-scrollbar::-webkit-scrollbar-thumb {
    background: #24243a;
    border-radius: 6px;
    border: 2px solid rgba(15, 23, 42, 0.5);
  }
  
  .instructions-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #00e5b8;
  }
`;

// Mobile optimization styles
const mobileStyles = `
  /* Tablet (1024px and below) */
  @media (max-width: 1024px) {
    .tutorial-container {
      grid-template-columns: 1fr !important;
      gap: 24px !important;
    }
  }
  
  /* Mobile (768px and below) */
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
    
    h1 {
      font-size: 24px !important;
    }
    
    h2 {
      font-size: 20px !important;
    }
    
    h3 {
      font-size: 16px !important;
    }
    
    h4 {
      font-size: 14px !important;
    }
    
    button {
      min-height: 44px !important;
      font-size: 14px !important;
      padding: 12px 16px !important;
    }
    
    textarea {
      font-size: 16px !important;
      min-height: 200px !important;
      padding: 12px !important;
    }
    
    .instructions-scrollbar {
      max-height: auto !important;
      padding-right: 8px !important;
      margin-bottom: 24px;
    }
    
    .code-panel {
      flex-direction: column !important;
    }
    
    /* Responsive grids */
    [class*="grid"],
    div[style*="gridTemplateColumns"] {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
  
  /* Small mobile (480px and below) */
  @media (max-width: 480px) {
    * {
      box-sizing: border-box;
    }
    
    body {
      padding: 0;
    }
    
    h1 {
      font-size: 20px !important;
    }
    
    h2 {
      font-size: 18px !important;
    }
    
    h3 {
      font-size: 16px !important;
    }
    
    p {
      font-size: 13px !important;
    }
    
    button {
      width: 100%;
      min-height: 44px !important;
      font-size: 14px !important;
    }
    
    textarea {
      font-size: 16px !important;
      min-height: 150px !important;
      width: 100%;
    }
    
    /* All grids become 1 column */
    [class*="grid"],
    div[style*="gridTemplateColumns"] {
      grid-template-columns: 1fr !important;
      gap: 12px !important;
    }
    
    /* Remove padding on small screens */
    [style*="padding: 40px"] {
      padding: 16px !important;
    }
    
    [style*="padding: 28px"] {
      padding: 16px !important;
    }
    
    [style*="padding: 32px"] {
      padding: 16px !important;
    }
  }
  
  /* Touch-friendly elements - no hover on mobile */
  @media (hover: none) {
    a, button {
      transition: opacity 0.2s, transform 0.1s;
    }
    
    button:active {
      opacity: 0.8;
      transform: scale(0.98);
    }
    
    a:active {
      opacity: 0.7;
    }
  }
  
  /* Landscape mode adjustments */
  @media (max-height: 500px) {
    textarea {
      min-height: 100px !important;
    }
  }
`;


// Inject styles once
if (typeof document !== 'undefined') {
  if (!document.head.querySelector('style[data-scrollbar]')) {
    const scrollbarSheet = document.createElement('style');
    scrollbarSheet.setAttribute('data-scrollbar', 'true');
    scrollbarSheet.textContent = scrollbarStyles;
    document.head.appendChild(scrollbarSheet);
  }
  
  if (!document.head.querySelector('style[data-mobile]')) {
    const mobileSheet = document.createElement('style');
    mobileSheet.setAttribute('data-mobile', 'true');
    mobileSheet.textContent = mobileStyles;
    document.head.appendChild(mobileSheet);
  }
  
  // Ensure viewport meta tag exists
  if (!document.head.querySelector('meta[name="viewport"]')) {
    const viewportMeta = document.createElement('meta');
    viewportMeta.setAttribute('name', 'viewport');
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes');
    document.head.appendChild(viewportMeta);
  }
}

// Quiz Data for all 28 topics
const quizData = {
  "1-0": [{ question: "What is the correct way to declare a variable in Python?", options: ["var x = 5", "x = 5", "int x = 5", "declare x = 5"], correct: 1 }, { question: "Which of the following is NOT a Python data type?", options: ["str", "int", "float", "integer"], correct: 3 }, { question: "What does the ** operator do in Python?", options: ["Multiply", "Exponentiation", "String repetition", "Division"], correct: 1 }, { question: "How do you check the type of a variable?", options: ["var_type(x)", "type(x)", "typeof(x)", "getType(x)"], correct: 1 }, { question: "What is 10 // 3 in Python?", options: ["3.333", "3", "3.0", "4"], correct: 1 }],
  "1-1": [{ question: "Which collection allows duplicate values?", options: ["Set", "Dict", "List", "Tuple (but not List)"], correct: 2 }, { question: "How do you access the first element of a list?", options: ["list[1]", "list[0]", "list.first()", "list.get(0)"], correct: 1 }, { question: "Can you modify a tuple after creation?", options: ["Yes, always", "No, tuples are immutable", "Only with special methods", "Only in Python 3.9+"], correct: 1 }, { question: "What does dict.keys() return?", options: ["List of keys", "Dict keys view object", "Tuple of keys", "Set of keys"], correct: 1 }, { question: "How do you add an item to a set?", options: ["set.add(item)", "set.append(item)", "set.push(item)", "set.insert(item)"], correct: 0 }],
  "1-2": [{ question: "What will this code print? if 5 > 3: print('yes')", options: ["yes", "Error", "Nothing", "5 > 3"], correct: 0 }, { question: "How many times will this loop execute? for i in range(5):", options: ["4 times", "5 times", "6 times", "Until i equals 5"], correct: 1 }, { question: "What does 'break' do in a loop?", options: ["Pauses the loop", "Exits the loop immediately", "Skips to next iteration", "Restarts the loop"], correct: 1 }, { question: "What does 'continue' do?", options: ["Exits the loop", "Restarts the loop", "Skips current iteration", "Pauses execution"], correct: 2 }, { question: "What is the correct syntax for elif?", options: ["elseif:", "elif:", "else if:", "elseIf:"], correct: 1 }],
  "1-3": [{ question: "How do you define a function in Python?", options: ["function myFunc():", "def myFunc():", "func myFunc():", "def myFunc()"], correct: 1 }, { question: "What is the return value if a function has no return statement?", options: ["0", "Empty string", "None", "Error"], correct: 2 }, { question: "Can a function return multiple values?", options: ["No", "Yes, using tuples", "Only in Python 3.8+", "With special syntax only"], correct: 1 }, { question: "What is scope in Python?", options: ["The speed of code", "Where a variable can be accessed", "The size of a function", "Memory allocated to variables"], correct: 1 }, { question: "What is a global variable?", options: ["A variable used everywhere", "A variable declared with 'global' keyword", "A function-level variable", "A built-in variable"], correct: 1 }],
  "1-4": [{ question: "How do you open a file for reading?", options: ["open(file, \"r\")", "open(file, \"read\")", "read(file)", "file.open(\"r\")"], correct: 0 }, { question: "What does 'with' statement do with files?", options: ["Nothing special", "Automatically closes the file", "Encrypts the file", "Compresses the file"], correct: 1 }, { question: "What is the \"w\" mode used for?", options: ["Reading", "Writing (overwrites)", "Appending", "Writing (adds to end)"], correct: 1 }, { question: "How do you read all lines from a file?", options: ["file.read()", "file.readlines()", "Both work", "Neither works"], correct: 2 }, { question: "What happens if you open a non-existent file for reading?", options: ["File is created", "FileNotFoundError is raised", "Returns None", "Returns empty string"], correct: 1 }],
  "1-5": [{ question: "What is the syntax for try-except?", options: ["try: except:", "try-except:", "try { } catch { }", "All are correct"], correct: 0 }, { question: "What does 'finally' block do?", options: ["It's optional", "Always executes", "Only on error", "Only on success"], correct: 1 }, { question: "What happens in: try: x = 1/0 except ZeroDivisionError:", options: ["Program crashes", "Error caught, executes except block", "Prints error", "Restarts program"], correct: 1 }, { question: "Can you have multiple except blocks?", options: ["No", "Yes, for different exceptions", "Only 2", "Only in Python 3.9+"], correct: 1 }, { question: "What is a custom exception?", options: ["Built-in errors", "Errors you define", "Very rare errors", "Critical errors only"], correct: 1 }],
  "1-6": [{ question: "How do you import a module?", options: ["include module", "import module", "load module", "require module"], correct: 1 }, { question: "What does 'pip' stand for?", options: ["Package in Python", "Pip Installs Packages", "Python Install Pack", "Program Installation Package"], correct: 1 }, { question: "How do you install a package with pip?", options: ["pip get package", "pip install package", "pip add package", "pip load package"], correct: 1 }, { question: "What is the difference between 'import X' and 'from X import Y'?", options: ["No difference", "First imports whole module, second imports specific item", "They do opposite things", "First is faster"], correct: 1 }, { question: "Can you create your own module?", options: ["No", "Yes, using .py files", "Only with special tools", "Only built-in modules exist"], correct: 1 }],
  "2-0": [{ question: "What is a class in Python?", options: ["A function", "A blueprint for creating objects", "A type of loop", "A data structure"], correct: 1 }, { question: "What is __init__ method?", options: ["Initialize module", "Constructor of a class", "A built-in function", "An iterator"], correct: 1 }, { question: "What does 'self' represent?", options: ["The module", "The current instance of the class", "The parent class", "A global variable"], correct: 1 }, { question: "What is inheritance?", options: ["Copying code", "Class getting properties from another class", "Making functions", "Creating instances"], correct: 1 }, { question: "What is encapsulation?", options: ["Using loops", "Hiding internal details and controlling access", "Creating objects", "Writing functions"], correct: 1 }],
  "2-1": [{ question: "What does this do: [x*2 for x in range(5)]?", options: ["Creates list [0,2,4,6,8]", "Creates list [0,1,2,3,4]", "Multiplies list", "Error"], correct: 0 }, { question: "Can you use if in list comprehension?", options: ["No", "Yes, for filtering", "Only with else", "Only in Python 3.8+"], correct: 1 }, { question: "What is a dict comprehension?", options: ["Comprehending dictionaries", "Creating dict using similar syntax to list comprehension", "Reading dicts", "Dict method"], correct: 1 }, { question: "Is list comprehension faster than loops?", options: ["No", "Usually yes", "Same speed", "Depends on Python version"], correct: 1 }, { question: "How do you create set comprehension?", options: ["{x for x in range(5)}", "[x for x in range(5)]", "set(x for x in range(5))", "Options 1 and 3"], correct: 3 }],
  "2-2": [{ question: "What is a decorator?", options: ["A style element", "A function that modifies another function", "A class feature", "A Python keyword"], correct: 1 }, { question: "What symbol indicates a decorator?", options: ["#", "$", "@", "%"], correct: 2 }, { question: "What is a context manager?", options: ["Manages code flow", "Handles setup and cleanup", "Manages object creation", "Manages memory"], correct: 1 }, { question: "What is the 'with' statement used for?", options: ["Loops", "Conditionals", "Context management", "Functions"], correct: 2 }, { question: "What methods does a context manager need?", options: ["__init__ and __del__", "__enter__ and __exit__", "__start__ and __stop__", "__begin__ and __end__"], correct: 1 }],
  "2-3": [{ question: "What does API stand for?", options: ["Application Programming Interface", "Application Program Integration", "Applied Programming Interface", "Automated Programming Interface"], correct: 0 }, { question: "What is HTTP?", options: ["A programming language", "A protocol for web communication", "A data format", "A library"], correct: 1 }, { question: "What library is commonly used for HTTP requests in Python?", options: ["urllib", "requests", "http", "All are correct"], correct: 1 }, { question: "What does a 200 status code mean?", options: ["Error", "Success", "Not found", "Server error"], correct: 1 }, { question: "What does GET request do?", options: ["Sends data", "Retrieves data", "Updates data", "Deletes data"], correct: 1 }],
  "2-4": [{ question: "What does JSON stand for?", options: ["Java Source Object Notation", "JavaScript Object Notation", "Java Serialized Object Notation", "None of the above"], correct: 1 }, { question: "How do you convert Python dict to JSON?", options: ["json.dumps()", "json.loads()", "json.parse()", "dict.toJSON()"], correct: 0 }, { question: "How do you convert JSON to Python dict?", options: ["json.dumps()", "json.loads()", "json.parse()", "str.toDict()"], correct: 1 }, { question: "What is valid JSON data type?", options: ["Python set", "Python tuple", "String, number, object, array, boolean, null", "Only strings"], correct: 2 }, { question: "Can JSON contain Python objects?", options: ["Yes", "No, must be serialized", "Only if using dumps()", "Only in Python 3.9+"], correct: 1 }],
  "2-5": [{ question: "What is a virtual environment?", options: ["A remote computer", "Isolated Python environment for a project", "A cloud service", "A Docker container"], correct: 1 }, { question: "Why use virtual environments?", options: ["To go faster", "To isolate dependencies per project", "To store files", "To improve security"], correct: 1 }, { question: "How do you create a virtual environment?", options: ["python -m venv myenv", "venv create myenv", "python venv myenv", "create-venv myenv"], correct: 0 }, { question: "How do you activate a virtual environment on Windows?", options: ["source venv/bin/activate", "venv\\Scripts\\activate", "activate venv", "python venv activate"], correct: 1 }, { question: "What is requirements.txt?", options: ["Project requirements", "List of package dependencies", "Configuration file", "Both B and C"], correct: 1 }],
  "2-6": [{ question: "What does Git do?", options: ["Compiles code", "Tracks changes in code", "Executes code", "Tests code"], correct: 1 }, { question: "What is a commit?", options: ["Running code", "Saving changes with a message", "Pushing code", "Merging branches"], correct: 1 }, { question: "What is a branch?", options: ["A folder", "A separate line of development", "A backup copy", "A version"], correct: 1 }, { question: "What does 'git push' do?", options: ["Saves locally", "Uploads to remote repository", "Creates branch", "Deletes files"], correct: 1 }, { question: "What is a pull request?", options: ["Downloading code", "Request to merge changes", "Pulling from remote", "Backup operation"], correct: 1 }],
  "3-0": [{ question: "What is an LLM?", options: ["Large Language Model", "Local Learning Method", "Link List Model", "Logic Learning Module"], correct: 0 }, { question: "What do you need to use OpenAI API?", options: ["Software license", "API key", "GPU", "Special hardware"], correct: 1 }, { question: "What is Anthropic known for?", options: ["Web hosting", "Creating Claude AI", "Data storage", "Mobile apps"], correct: 1 }, { question: "What is an API key?", options: ["A password", "Unique credential for API access", "Encryption method", "Software license"], correct: 1 }, { question: "What is a token in LLM context?", options: ["A security code", "A word or part of a word", "A file format", "A server"], correct: 1 }],
  "3-1": [{ question: "What is prompt engineering?", options: ["Building systems", "Designing inputs for AI models", "Writing code", "Creating databases"], correct: 1 }, { question: "What is a good prompt?", options: ["Very long", "Clear, specific, and detailed", "Very short", "Vague and open-ended"], correct: 1 }, { question: "What is 'few-shot prompting'?", options: ["Multiple attempts", "Giving examples in the prompt", "Quick responses", "Limited tokens"], correct: 1 }, { question: "What is 'temperature' in LLM?", options: ["Processing speed", "Controls randomness/creativity", "Model size", "Token limit"], correct: 1 }, { question: "What does 'context' mean in prompts?", options: ["Surrounding text", "System background for understanding", "File location", "Code structure"], correct: 1 }],
  "3-2": [{ question: "What is structured output?", options: ["Long text", "Data in defined format like JSON", "Random format", "Encrypted data"], correct: 1 }, { question: "Why use JSON mode with LLMs?", options: ["Faster processing", "Ensures valid JSON output", "Smaller tokens", "Better security"], correct: 1 }, { question: "What is schema in structured outputs?", options: ["Database table", "Template defining expected output format", "API endpoint", "Configuration file"], correct: 1 }, { question: "Can LLMs guarantee JSON validity?", options: ["No", "Yes with JSON mode enabled", "Only sometimes", "Not yet"], correct: 1 }, { question: "What happens if LLM violates JSON schema?", options: ["It's ignored", "Caught and can be handled", "Program crashes", "Retries automatically"], correct: 1 }],
  "3-3": [{ question: "What is prompt chaining?", options: ["Running prompts in sequence", "Combining multiple LLM calls", "Linking APIs", "Both A and B"], correct: 3 }, { question: "Why use chaining instead of one big prompt?", options: ["Faster", "More reliable, easier debugging", "Cheaper tokens", "Easier to read"], correct: 1 }, { question: "What is a 'reasoning chain'?", options: ["Code logic", "Step-by-step thinking process", "API calls", "Variable names"], correct: 1 }, { question: "What is 'chain of thought' prompting?", options: ["Connecting functions", "Asking LLM to explain reasoning", "API chaining", "Code structure"], correct: 1 }, { question: "How do you pass output from one call to next?", options: ["Automatic", "Manually capture and use in next prompt", "Special syntax", "Not possible"], correct: 1 }],
  "3-4": [{ question: "What is LangChain?", options: ["A language", "Framework for building LLM applications", "A protocol", "A database"], correct: 1 }, { question: "What does LangChain help with?", options: ["Web design", "Prompt management, chains, memory", "Cloud hosting", "Database management"], correct: 1 }, { question: "What is a 'chain' in LangChain?", options: ["A connection", "Sequence of components working together", "A variable", "A function"], correct: 1 }, { question: "What is memory in LangChain?", options: ["RAM usage", "Keeping conversation history", "Cache management", "Data storage"], correct: 1 }, { question: "Can LangChain work with multiple LLMs?", options: ["No", "Yes, supports various models", "Only OpenAI", "Only locally"], correct: 1 }],
  "3-5": [{ question: "What is an embedding?", options: ["Embedding HTML", "Vector representation of text", "Image file", "Code snippet"], correct: 1 }, { question: "What is a vector database?", options: ["Normal database", "Stores and searches vectors efficiently", "Image database", "Code repository"], correct: 1 }, { question: "What are embeddings used for?", options: ["Styling", "Semantic search, similarity finding", "Speed up code", "Compress files"], correct: 1 }, { question: "What is similarity in vector context?", options: ["Same text", "Distance between vectors", "Same length", "Same encoding"], correct: 1 }, { question: "Can you search text using embeddings?", options: ["No", "Yes, semantic search", "Only exact matches", "Not efficiently"], correct: 1 }],
  "3-6": [{ question: "What is an AI agent?", options: ["A chatbot", "Autonomous system making decisions", "A tool", "A library"], correct: 1 }, { question: "What do agents need?", options: ["Just prompts", "LLM, tools, decision logic, memory", "Only functions", "Database"], correct: 1 }, { question: "What is 'tool use' in agents?", options: ["Programming", "Agent calling external functions/APIs", "Code tools", "Debugging"], correct: 1 }, { question: "What is 'reasoning' in agents?", options: ["Thinking about code", "LLM deciding next action", "Planning", "Memory retrieval"], correct: 1 }, { question: "Can agents learn from interactions?", options: ["No, static", "Yes, with memory and feedback", "Only with retraining", "Not yet possible"], correct: 1 }],
  "4-0": [{ question: "What is FastAPI?", options: ["A language", "Modern Python web framework", "A database", "A library"], correct: 1 }, { question: "What does FastAPI provide?", options: ["GUI", "Automatic API documentation", "Database", "Hosting"], correct: 1 }, { question: "How do you define a route in FastAPI?", options: ["@app.route()", "@app.get()", "@route", "@api"], correct: 1 }, { question: "What is uvicorn?", options: ["Framework", "ASGI server for running FastAPI", "Database", "Library"], correct: 1 }, { question: "What is ASGI?", options: ["Application Server Gateway Interface", "Not real", "HTML format", "Database type"], correct: 0 }],
  "4-1": [{ question: "What is Streamlit?", options: ["A database", "Framework for building web UIs with Python", "A library", "A server"], correct: 1 }, { question: "How do you run a Streamlit app?", options: ["python app.py", "streamlit run app.py", "npm start", "flask run"], correct: 1 }, { question: "What does st.button() do?", options: ["Creates button element", "Opens file", "Runs command", "Starts server"], correct: 0 }, { question: "Can you use custom CSS with Streamlit?", options: ["No", "Limited, through st.markdown", "Full support", "Via config only"], correct: 1 }, { question: "What is st.session_state?", options: ["HTTP status", "Persistent memory during session", "Global variable", "Database state"], correct: 1 }],
  "4-2": [{ question: "What is Docker?", options: ["Documentation tool", "Containerization platform", "Database", "Server"], correct: 1 }, { question: "What is a container?", options: ["A box", "Isolated environment with app and dependencies", "Virtual machine", "A file"], correct: 1 }, { question: "What is a Dockerfile?", options: ["Data file", "Instructions to build Docker image", "Configuration", "Shell script"], correct: 1 }, { question: "What is the difference between image and container?", options: ["No difference", "Image is template, container is instance", "Image is running, container is stopped", "Containers are images"], correct: 1 }, { question: "Why use Docker?", options: ["Speed", "Consistency across environments", "Smaller files", "Better security"], correct: 1 }],
  "4-3": [{ question: "What are environment variables?", options: ["Global variables", "System configuration settings", "Code variables", "Database fields"], correct: 1 }, { question: "Why not hardcode API keys?", options: ["Slower", "Security risk if code exposed", "Not possible", "Harder to read"], correct: 1 }, { question: "What is a .env file?", options: ["Environment config file", "Executable", "Library", "Source code"], correct: 0 }, { question: "How do you access env vars in Python?", options: ["env.API_KEY", "os.getenv('API_KEY')", "$API_KEY", "%API_KEY%"], correct: 1 }, { question: "Should .env be committed to Git?", options: ["Yes", "No, it contains secrets", "Only in production", "Only locally"], correct: 1 }],
  "4-4": [{ question: "What is logging?", options: ["Recording data", "Tracking application events", "User tracking", "Traffic recording"], correct: 1 }, { question: "What log levels exist in Python?", options: ["Only error", "DEBUG, INFO, WARNING, ERROR, CRITICAL", "Just info and error", "Custom only"], correct: 1 }, { question: "Why monitor applications?", options: ["Track users", "Detect issues, track performance", "Log access", "Improve UI"], correct: 1 }, { question: "What is an error log?", options: ["Bug list", "Record of errors and failures", "User complaints", "Code issues"], correct: 1 }, { question: "What tools are used for monitoring?", options: ["Just logging", "Datadog, New Relic, Prometheus, etc", "Only built-in", "Manual checking"], correct: 1 }],
  "4-5": [{ question: "What should a README contain?", options: ["Anything", "Description, setup, usage, contributing", "Just title", "Installation only"], correct: 1 }, { question: "What is docstring?", options: ["Comment", "Function/class documentation", "README content", "Code note"], correct: 1 }, { question: "Why document code?", options: ["Required by Python", "Helps others understand", "Improves speed", "Required by law"], correct: 1 }, { question: "What is API documentation?", options: ["README file", "Description of API endpoints and usage", "Code comments", "User guide"], correct: 1 }, { question: "Can FastAPI auto-generate docs?", options: ["No", "Yes, via Swagger UI", "Only with extra tools", "Manual only"], correct: 1 }],
  "4-6": [{ question: "What is cloud deployment?", options: ["Uploading files", "Running app on cloud provider servers", "Backup", "Data storage"], correct: 1 }, { question: "What are popular cloud platforms?", options: ["Only AWS", "AWS, Google Cloud, Azure, Heroku", "Only Heroku", "Only local servers"], correct: 1 }, { question: "What is scalability?", options: ["Code size", "App ability to handle increased load", "Server cost", "User count"], correct: 1 }, { question: "What is CI/CD?", options: ["Coding methods", "Continuous Integration/Deployment", "Cloud Interface", "Code standard"], correct: 1 }, { question: "What happens during deployment?", options: ["Testing", "Moving code to production server", "Backup", "Version control"], correct: 1 }]
};

const InteractiveLearningRoadmap = () => {
  const [pyodideReady, setPyodideReady] = useState(false);
  const [view, setView] = useState("roadmap");
  const [activePhaseIdx, setActivePhaseIdx] = useState(0);
  const [activeTopicIdx, setActiveTopicIdx] = useState(0);
  const [userCode, setUserCode] = useState("");
  const [userName, setUserName] = useState("");
  const [terminalOutput, setTerminalOutput] = useState("Loading Python environment...");
  const [showPrevious, setShowPrevious] = useState(false);
  
  // Quiz state
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizScore, setQuizScore] = useState(null);
  const [quizAttempts, setQuizAttempts] = useState({});

  // Hybrid Learning Topics - These need browser + local practice
  const hybridTopics = {
    "1-4": true, // File I/O
    "1-6": true, // Modules & pip
    "2-3": true, // APIs
    "2-5": true, // Virtual Environments
    "2-6": true, // Git
    "3-0": true, // OpenAI & Anthropic APIs
    "3-1": true, // Prompt Engineering
    "3-2": true, // Structured Outputs
    "3-3": true, // Chaining & Multi-Step
    "3-4": true, // LangChain
    "3-5": true, // Vector Databases
    "3-6": true, // AI Agents
    "4-0": true, // FastAPI
    "4-1": true, // Streamlit
    "4-2": true, // Docker
    "4-3": true, // Environment Variables
    "4-5": true, // Documentation
    "4-6": true, // Cloud Deployment
  };

  // Initialize Pyodide
  useEffect(() => {
    const initPyodide = async () => {
      try {
        // Dynamically load Pyodide
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js';
        document.head.appendChild(script);
        
        script.onload = async () => {
          window.pyodide = await window.loadPyodide();
          setPyodideReady(true);
          setTerminalOutput("✅ Python ready!\n$ Ready for input...");
        };
      } catch (error) {
        setTerminalOutput(`❌ Error loading Python: ${error.message}`);
      }
    };
    
    initPyodide();
  }, []);

  const executePythonCode = async (code) => {
    if (!pyodideReady || !window.pyodide) {
      setTerminalOutput("⏳ Python environment still loading...");
      return;
    }

    try {
      setTerminalOutput("⏳ Executing...");
      
      // Capture print output
      let output = "";
      
      // Override print to capture output
      const pythonCode = `
import sys
from io import StringIO

old_stdout = sys.stdout
sys.stdout = mystdout = StringIO()

try:
${code.split('\n').map(line => '    ' + line).join('\n')}
except Exception as e:
    print(f"Error: {e}")

sys.stdout = old_stdout
mystdout.getvalue()
`;

      const result = await window.pyodide.runPythonAsync(pythonCode);
      output = result || "(no output)";
      
      // Display the output
      setTerminalOutput(output === "(no output)" ? "$ Code executed (no print output)" : output);
    } catch (error) {
      setTerminalOutput(`❌ Error: ${error.message}`);
    }
  };

  const runCode = async () => {
    if (!userCode.trim()) {
      setTerminalOutput("❌ Write some code first!");
      return;
    }
    await executePythonCode(userCode);
  };

  const [codeSnippets, setCodeSnippets] = useState(() => {
    try {
      const saved = localStorage.getItem("learning_code_snippets");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  
  const [completedTopics, setCompletedTopics] = useState(() => {
    try {
      const saved = localStorage.getItem("learning_roadmap_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const updateCompleted = (key, value) => {
    const newCompleted = { ...completedTopics, [key]: value };
    setCompletedTopics(newCompleted);
    try {
      localStorage.setItem("learning_roadmap_progress", JSON.stringify(newCompleted));
    } catch (error) {
      console.error("Failed to save progress:", error);
    }
  };

  const saveCodeSnippet = () => {
    if (!userCode.trim()) {
      setTerminalOutput("❌ Code is empty! Write something first.");
      return;
    }

    const topicKey = `${phase.id}-${activeTopicIdx}`;
    const snippetsList = codeSnippets[topicKey] || [];
    
    const newSnippets = {
      ...codeSnippets,
      [topicKey]: [
        ...snippetsList,
        {
          code: userCode,
          timestamp: new Date().toLocaleString(),
          id: Date.now()
        }
      ]
    };
    
    setCodeSnippets(newSnippets);
    try {
      localStorage.setItem("learning_code_snippets", JSON.stringify(newSnippets));
      setTerminalOutput(`✅ Code saved! (${newSnippets[topicKey].length} attempts)`);
    } catch (error) {
      setTerminalOutput("❌ Error saving code");
    }
  };

  const loadSnippet = (snippet) => {
    setUserCode(snippet.code);
    setTerminalOutput("✅ Loaded previous attempt!");
    setShowPrevious(false);
  };

  const totalTopicsCompleted = Object.keys(completedTopics).length;
  const totalTopics = phases.reduce((sum, p) => sum + p.topics.length, 0);
  const progressPct = Math.round((totalTopicsCompleted / totalTopics) * 100);
  const isFullyComplete = progressPct === 100;

  const getPhaseCompletion = (phaseId) => {
    const phaseData = phases.find(p => p.id === phaseId);
    if (!phaseData) return 0;
    const completed = phaseData.topics.filter((_, idx) => completedTopics[`${phaseId}-${idx}`]).length;
    return Math.round((completed / phaseData.topics.length) * 100);
  };

  const getBadges = () => {
    const badges = [];
    if (getPhaseCompletion(1) === 100) badges.push({ emoji: "🌱", name: "Python Master", phase: 1 });
    if (getPhaseCompletion(2) === 100) badges.push({ emoji: "⚙️", name: "Professional Dev", phase: 2 });
    if (getPhaseCompletion(3) === 100) badges.push({ emoji: "🤖", name: "AI Specialist", phase: 3 });
    if (getPhaseCompletion(4) === 100) badges.push({ emoji: "🚀", name: "Full Stack", phase: 4 });
    if (isFullyComplete) badges.push({ emoji: "🏆", name: "Master", phase: 5 });
    return badges;
  };

  const phase = phases[activePhaseIdx];
  const topic = phase.topics[activeTopicIdx];
  const topicKey = `${phase.id}-${activeTopicIdx}`;
  const isHybridTopic = hybridTopics[topicKey];
  const previousAttempts = codeSnippets[topicKey] || [];

  const toggleComplete = (key, currentStatus, shouldAutoNext = true) => {
    const newStatus = !currentStatus;
    updateCompleted(key, newStatus);
    
    if (newStatus && shouldAutoNext && activeTopicIdx < phase.topics.length - 1) {
      setActiveTopicIdx(activeTopicIdx + 1);
      setUserCode("");
      setTerminalOutput("✅ Python ready!\n$ Ready for next lesson...");
    }
  };

  const markComplete = () => {
    setShowQuiz(true);
    setQuizAnswers({});
    setQuizScore(null);
  };

  const submitQuiz = () => {
    const answers = Object.values(quizAnswers);
    if (answers.length < 5) {
      alert("Please answer all questions!");
      return;
    }

    const quiz = quizData[topicKey];
    let correct = 0;
    
    quiz.forEach((q, i) => {
      if (quizAnswers[i] === q.correct) {
        correct++;
      }
    });

    const percentage = (correct / 5) * 100;
    setQuizScore({ correct, total: 5, percentage });

    if (percentage >= 70) {
      // Pass - mark complete and auto advance
      updateCompleted(topicKey, true);
      setTimeout(() => {
        setShowQuiz(false);
        if (activeTopicIdx < phase.topics.length - 1) {
          setActiveTopicIdx(activeTopicIdx + 1);
          setUserCode("");
          setTerminalOutput("✅ Python ready!\n$ Ready for next lesson...");
        }
      }, 1500);
    } else {
      // Fail - show retry message
      const attempts = (quizAttempts[topicKey] || 0) + 1;
      setQuizAttempts({ ...quizAttempts, [topicKey]: attempts });
    }
  };

  return (
    <div style={{
      background: "linear-gradient(135deg, #0f172a 0%, #1a1f35 100%)",
      minHeight: "100vh",
      color: "#e2e8f0",
      fontFamily: '"Outfit", "Inter", sans-serif',
      padding: 0,
      margin: 0,
    }}>
      {/* HEADER */}
      <div style={{
        background: "rgba(15, 23, 42, 0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(100, 116, 139, 0.2)",
        padding: "24px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div>
          <div style={{ fontSize: 11, color: "#64748b", letterSpacing: 3, textTransform: "uppercase", fontFamily: "monospace", marginBottom: 6 }}>
            📚 Interactive Learning
          </div>
          <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700, background: "linear-gradient(135deg, #00d4aa, #3b82f6)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Python → AI Engineer
          </h1>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {[
            { id: "roadmap", label: "📍 Roadmap" },
            { id: "learn", label: "👨‍💻 Learn" },
            { id: "jobs", label: "💼 Jobs" },
            { id: "achievements", label: "🏆 Achievements" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setView(tab.id)}
              style={{
                background: view === tab.id ? "#00d4aa" : "rgba(100, 116, 139, 0.2)",
                color: view === tab.id ? "#0f172a" : "#cbd5e1",
                border: "none",
                borderRadius: 8,
                padding: "12px 24px",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                transition: "all 0.2s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ROADMAP VIEW */}
      {view === "roadmap" && (
        <div style={{ padding: "40px", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 30 }}>
            <div style={{ fontSize: 14, color: "#64748b", marginBottom: 12, fontWeight: 600 }}>Overall Progress: {progressPct}%</div>
            <div style={{ background: "rgba(100, 116, 139, 0.1)", borderRadius: 8, height: 10, overflow: "hidden" }}>
              <div style={{ background: "linear-gradient(90deg, #00d4aa, #3b82f6)", height: "100%", width: `${progressPct}%`, transition: "width 0.3s" }} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {phases.map((p, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setActivePhaseIdx(idx);
                  setView("phase-detail");
                }}
                style={{
                  background: "rgba(30, 45, 69, 0.3)",
                  border: "1px solid rgba(100, 116, 139, 0.2)",
                  borderRadius: 16,
                  padding: 28,
                  cursor: "pointer",
                  transition: "all 0.3s",
                  borderTop: `4px solid ${p.color}`,
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <div style={{ fontSize: 40, marginBottom: 16 }}>{p.icon}</div>
                <h3 style={{ margin: "0 0 10px 0", fontSize: 20, fontWeight: 700 }}>{p.title}</h3>
                <div style={{ fontSize: 14, color: "#64748b", marginBottom: 16 }}>{p.tagline}</div>
                <div style={{ fontSize: 13, color: "#94a3b8", marginBottom: 16 }}>
                  {p.duration} • {p.hours}
                </div>
                <div style={{
                  background: "rgba(100, 116, 139, 0.1)",
                  borderRadius: 6,
                  height: 6,
                  overflow: "hidden",
                  marginBottom: 14,
                }}>
                  <div style={{
                    background: p.color,
                    height: "100%",
                    width: `${getPhaseCompletion(p.id)}%`,
                    transition: "width 0.3s",
                  }} />
                </div>
                <div style={{ fontSize: 13, color: "#cbd5e1", fontWeight: 600 }}>
                  {p.topics.filter((_, i) => completedTopics[`${p.id}-${i}`]).length}/{p.topics.length} topics complete
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PHASE DETAIL VIEW */}
      {view === "phase-detail" && (
        <div style={{ padding: "40px", maxWidth: 1200, margin: "0 auto" }}>
          <button
            onClick={() => setView("roadmap")}
            style={{
              background: "rgba(100, 116, 139, 0.2)",
              color: "#cbd5e1",
              border: "1px solid rgba(100, 116, 139, 0.2)",
              borderRadius: 8,
              padding: "12px 20px",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 600,
              marginBottom: 40,
            }}
          >
            ← Back to Roadmap
          </button>

          <div style={{ marginBottom: 50 }}>
            <div style={{ fontSize: 56, marginBottom: 20 }}>{phase.icon}</div>
            <h1 style={{ margin: "0 0 16px 0", fontSize: 40, fontWeight: 700 }}>{phase.title}</h1>
            <p style={{ margin: 0, color: "#cbd5e1", fontSize: 18, lineHeight: 1.8, marginBottom: 24, maxWidth: 600 }}>
              {phase.description}
            </p>
            <div style={{ fontSize: 14, color: "#94a3b8", fontWeight: 600 }}>
              {phase.duration} • {phase.hours}
            </div>
          </div>

          <div style={{
            background: "rgba(100, 116, 139, 0.1)",
            borderRadius: 8,
            height: 8,
            overflow: "hidden",
            marginBottom: 50,
            maxWidth: 400,
          }}>
            <div style={{
              background: phase.color,
              height: "100%",
              width: `${getPhaseCompletion(phase.id)}%`,
              transition: "width 0.3s",
            }} />
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 28, color: phase.color }}>
            📚 Topics to Master ({phase.topics.filter((_, i) => completedTopics[`${phase.id}-${i}`]).length}/{phase.topics.length})
          </h2>

          <div style={{ display: "grid", gap: 16 }}>
            {phase.topics.map((t, i) => {
              const isCompleted = !!completedTopics[`${phase.id}-${i}`];
              return (
                <div
                  key={i}
                  onClick={() => {
                    setActiveTopicIdx(i);
                    setView("tutorial");
                  }}
                  style={{
                    background: isCompleted ? "rgba(0, 212, 170, 0.08)" : "rgba(30, 45, 69, 0.4)",
                    border: "1px solid " + (isCompleted ? "rgba(0, 212, 170, 0.3)" : "rgba(100, 116, 139, 0.2)"),
                    borderRadius: 14,
                    padding: "24px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    justifyContent: "space-between",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isCompleted) e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.2)";
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: isCompleted ? "#94a3b8" : "#e2e8f0",
                      textDecoration: isCompleted ? "line-through" : "none",
                      marginBottom: 6,
                    }}>
                      {t.name}
                    </div>
                    <div style={{
                      fontSize: 14,
                      color: "#64748b",
                    }}>
                      {t.brief}
                    </div>
                  </div>
                  {isCompleted && (
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleComplete(`${phase.id}-${i}`, isCompleted, false);
                      }}
                      style={{ fontSize: 28, cursor: "pointer", opacity: 0.8, transition: "opacity 0.2s" }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
                      title="Click to uncomplete"
                    >
                      ✅
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 50 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20, color: phase.color }}>
              ⚡ Phase Project
            </h3>
            <div style={{
              background: "rgba(30, 45, 69, 0.3)",
              border: "2px solid " + phase.color,
              borderRadius: 14,
              padding: 28,
            }}>
              <h4 style={{ margin: "0 0 10px 0", fontSize: 18, fontWeight: 700 }}>
                {phase.project.title}
              </h4>
              <p style={{ margin: 0, color: "#cbd5e1", fontSize: 15, lineHeight: 1.7 }}>
                {phase.project.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TUTORIAL VIEW */}
      {view === "tutorial" && (
        <div style={{
          padding: "40px",
          maxWidth: 1600,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          minHeight: "calc(100vh - 100px)",
          alignItems: "start",
        }} className="tutorial-container">
          {/* MODAL: Previous Attempts */}
          {showPrevious && (
            <div style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}>
              <div style={{
                background: "rgba(15, 23, 42, 0.95)",
                border: "1px solid rgba(100, 116, 139, 0.3)",
                borderRadius: 14,
                padding: 32,
                maxWidth: 600,
                maxHeight: "80vh",
                overflowY: "auto",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                  <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>📝 Previous Attempts ({previousAttempts.length})</h3>
                  <button
                    onClick={() => setShowPrevious(false)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#cbd5e1",
                      fontSize: 24,
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    ✕
                  </button>
                </div>

                {previousAttempts.length === 0 ? (
                  <div style={{ color: "#64748b", textAlign: "center", padding: "40px 20px" }}>
                    <div style={{ fontSize: 48, marginBottom: 16 }}>📌</div>
                    <p style={{ margin: 0 }}>No saved attempts yet. Write some code and click "Save Attempt"!</p>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {previousAttempts.map((snippet, idx) => (
                      <div
                        key={snippet.id}
                        style={{
                          background: "rgba(30, 45, 69, 0.3)",
                          border: "1px solid rgba(100, 116, 139, 0.2)",
                          borderRadius: 10,
                          padding: 16,
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 12 }}>
                          <div>
                            <div style={{ fontSize: 13, color: "#64748b", marginBottom: 4 }}>Attempt #{previousAttempts.length - idx}</div>
                            <div style={{ fontSize: 12, color: "#94a3b8" }}>Saved: {snippet.timestamp}</div>
                          </div>
                        </div>

                        <div style={{
                          background: "#0f172a",
                          border: "1px solid rgba(100, 116, 139, 0.2)",
                          borderRadius: 8,
                          padding: 12,
                          marginBottom: 12,
                          maxHeight: 150,
                          overflowY: "auto",
                        }}>
                          <code style={{
                            color: "#00d4aa",
                            fontFamily: "monospace",
                            fontSize: 12,
                            lineHeight: 1.6,
                            whiteSpace: "pre-wrap",
                            wordBreak: "break-word",
                          }}>
                            {snippet.code}
                          </code>
                        </div>

                        <button
                          onClick={() => loadSnippet(snippet)}
                          style={{
                            background: "linear-gradient(135deg, #00d4aa, #00b896)",
                            color: "#0f172a",
                            border: "none",
                            borderRadius: 8,
                            padding: "10px 16px",
                            cursor: "pointer",
                            fontSize: 13,
                            fontWeight: 600,
                            width: "100%",
                          }}
                        >
                          ↻ Load This Attempt
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* QUIZ MODAL */}
          {showQuiz && (
            <div style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2000,
            }}>
              <div style={{
                background: "rgba(15, 23, 42, 0.95)",
                border: "1px solid rgba(100, 116, 139, 0.3)",
                borderRadius: 14,
                padding: 40,
                maxWidth: 700,
                maxHeight: "90vh",
                overflowY: "auto",
                width: "95%",
              }}>
                {!quizScore ? (
                  <>
                    <h2 style={{ margin: "0 0 24px 0", fontSize: 28, fontWeight: 700, color: "#00d4aa" }}>
                      📝 {topic.name} Quiz
                    </h2>
                    <p style={{ color: "#cbd5e1", marginBottom: 24 }}>
                      Answer 4 out of 5 questions correctly (70%) to complete this topic.
                    </p>

                    {quizData[topicKey].map((q, i) => (
                      <div key={i} style={{ marginBottom: 28 }}>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "#e2e8f0", marginBottom: 12 }}>
                          {i + 1}. {q.question}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          {q.options.map((option, optIdx) => (
                            <label
                              key={optIdx}
                              style={{
                                padding: "12px 16px",
                                borderRadius: 8,
                                background: quizAnswers[i] === optIdx ? "rgba(0, 212, 170, 0.2)" : "rgba(30, 45, 69, 0.3)",
                                border: quizAnswers[i] === optIdx ? "1px solid rgba(0, 212, 170, 0.5)" : "1px solid rgba(100, 116, 139, 0.2)",
                                cursor: "pointer",
                                color: "#cbd5e1",
                                fontSize: 14,
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                transition: "all 0.2s",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.4)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = quizAnswers[i] === optIdx ? "rgba(0, 212, 170, 0.5)" : "rgba(100, 116, 139, 0.2)";
                              }}
                            >
                              <input
                                type="radio"
                                name={`q${i}`}
                                value={optIdx}
                                checked={quizAnswers[i] === optIdx}
                                onChange={() => setQuizAnswers({ ...quizAnswers, [i]: optIdx })}
                                style={{ cursor: "pointer" }}
                              />
                              {option}
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}

                    <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
                      <button
                        onClick={submitQuiz}
                        style={{
                          flex: 1,
                          background: "linear-gradient(135deg, #00d4aa, #00b896)",
                          color: "#0f172a",
                          border: "none",
                          borderRadius: 8,
                          padding: "14px 20px",
                          cursor: "pointer",
                          fontSize: 16,
                          fontWeight: 700,
                        }}
                      >
                        Submit Quiz
                      </button>
                      <button
                        onClick={() => setShowQuiz(false)}
                        style={{
                          flex: 1,
                          background: "rgba(100, 116, 139, 0.2)",
                          color: "#cbd5e1",
                          border: "1px solid rgba(100, 116, 139, 0.3)",
                          borderRadius: 8,
                          padding: "14px 20px",
                          cursor: "pointer",
                          fontSize: 16,
                          fontWeight: 600,
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ textAlign: "center", marginBottom: 32 }}>
                      {quizScore.percentage >= 70 ? (
                        <>
                          <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
                          <h2 style={{ margin: "0 0 12px 0", fontSize: 28, fontWeight: 700, color: "#10b981" }}>
                            Congratulations!
                          </h2>
                          <p style={{ color: "#cbd5e1", fontSize: 16, marginBottom: 16 }}>
                            You passed the quiz with {quizScore.percentage.toFixed(0)}%!
                          </p>
                          <div style={{ padding: 16, background: "rgba(16, 185, 129, 0.1)", borderRadius: 8, border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                            <p style={{ color: "#10b981", fontSize: 14, margin: 0 }}>
                              ✓ Topic marked complete! Advancing to next lesson...
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div style={{ fontSize: 64, marginBottom: 16 }}>📚</div>
                          <h2 style={{ margin: "0 0 12px 0", fontSize: 28, fontWeight: 700, color: "#f97316" }}>
                            Not quite there yet
                          </h2>
                          <p style={{ color: "#cbd5e1", fontSize: 16, marginBottom: 16 }}>
                            You scored {quizScore.percentage.toFixed(0)}% ({quizScore.correct}/{quizScore.total} correct)
                          </p>
                          <div style={{ padding: 16, background: "rgba(249, 115, 22, 0.1)", borderRadius: 8, border: "1px solid rgba(249, 115, 22, 0.3)", marginBottom: 20 }}>
                            <p style={{ color: "#fed7aa", fontSize: 14, margin: 0, lineHeight: 1.6 }}>
                              💡 Check the resources provided in the topic and try again. You need 70% to pass!
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              setQuizAnswers({});
                              setQuizScore(null);
                            }}
                            style={{
                              width: "100%",
                              background: "rgba(249, 115, 22, 0.3)",
                              color: "#fed7aa",
                              border: "1px solid rgba(249, 115, 22, 0.5)",
                              borderRadius: 8,
                              padding: "14px 20px",
                              cursor: "pointer",
                              fontSize: 16,
                              fontWeight: 700,
                            }}
                          >
                            ↻ Retry Quiz
                          </button>
                        </>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* LEFT: INSTRUCTIONS */}
          <div style={{
            maxHeight: "calc(100vh - 140px)",
            overflowY: "auto",
            paddingRight: 24,
          }} className="instructions-scrollbar">
            <button
              onClick={() => setView("phase-detail")}
              style={{
                background: "rgba(100, 116, 139, 0.2)",
                color: "#cbd5e1",
                border: "1px solid rgba(100, 116, 139, 0.2)",
                borderRadius: 8,
                padding: "12px 20px",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 24,
              }}
            >
              ← Back to {phase.title}
            </button>

            <div style={{ fontSize: 13, color: "#64748b", letterSpacing: 2, fontFamily: "monospace", marginBottom: 16, fontWeight: 600 }}>
              {phase.title}
            </div>
            <h2 style={{ margin: "0 0 28px 0", fontSize: 32, fontWeight: 700 }}>{topic.name}</h2>

            {/* Hybrid Learning Badge */}
            {isHybridTopic && (
              <div style={{
                background: "rgba(249, 115, 22, 0.1)",
                border: "1px solid rgba(249, 115, 22, 0.4)",
                borderRadius: 8,
                padding: "14px 16px",
                marginBottom: 24,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}>
                <div style={{ fontSize: 20 }}>🔄</div>
                <div>
                  <div style={{ fontWeight: 700, color: "#fed7aa", fontSize: 14, marginBottom: 4 }}>
                    Hybrid Learning Mode
                  </div>
                  <div style={{ fontSize: 13, color: "#fdba74", lineHeight: 1.5 }}>
                    Learn the concepts here, then practice on your computer. See "Local Practice Guide" below.
                  </div>
                </div>
              </div>
            )}

            {/* Instructions */}
            <div style={{
              background: "rgba(30, 45, 69, 0.3)",
              border: "1px solid rgba(100, 116, 139, 0.2)",
              borderRadius: 14,
              padding: 28,
              marginBottom: 24,
            }}>
              <div style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>
                {topic.instruction}
              </div>
            </div>

            {/* Resources */}
            {topic.resources && topic.resources.length > 0 && (
              <div style={{
                background: "rgba(30, 45, 69, 0.3)",
                border: "1px solid rgba(100, 116, 139, 0.2)",
                borderRadius: 14,
                padding: 28,
              }}>
                <h4 style={{ margin: "0 0 18px 0", fontSize: 16, fontWeight: 700 }}>📚 Resources</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {topic.resources.map((res, i) => (
                    <a
                      key={i}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#00d4aa",
                        textDecoration: "none",
                        fontSize: 14,
                        fontWeight: 500,
                        padding: "10px 0",
                        borderBottom: "1px solid rgba(0, 212, 170, 0.1)",
                      }}
                    >
                      🔗 {res.name} →
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Local Practice Guide for Hybrid Topics */}
            {isHybridTopic && (
              <div style={{
                background: "rgba(59, 130, 246, 0.08)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                borderRadius: 14,
                padding: 28,
                marginTop: 24,
              }}>
                <h4 style={{ margin: "0 0 16px 0", fontSize: 16, fontWeight: 700, color: "#93c5fd", display: "flex", alignItems: "center", gap: 8 }}>
                  💻 Local Practice Guide
                </h4>
                <div style={{ fontSize: 14, color: "#dbeafe", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>
                  {topic.instruction.includes("🖥️") ? (
                    <div>ℹ️ Check the instructions above for step-by-step local setup guide</div>
                  ) : (
                    <div>ℹ️ This topic requires local setup. See the "Key Recommendations" below:</div>
                  )}
                  
                  <div style={{ marginTop: 12, fontSize: 13, color: "#bfdbfe", fontStyle: "italic" }}>
                    {topicKey === "1-4" && "1. Create test.txt with sample data\n2. Run file operations on your computer\n3. Practice reading and writing files"}
                    {topicKey === "1-6" && "1. Create virtual environment: python -m venv myenv\n2. Activate and install packages\n3. Create requirements.txt"}
                    {topicKey === "2-3" && "1. Get free API key from OpenWeatherMap or JSONPlaceholder\n2. Make real API requests from your computer\n3. Parse and handle responses"}
                    {topicKey === "2-5" && "1. Open terminal/command prompt\n2. Create and activate virtual environment\n3. Install packages and verify"}
                    {topicKey === "2-6" && "1. Create GitHub account\n2. Create repository via web interface\n3. Install Git locally and practice CLI"}
                    {topicKey === "3-0" && "1. Get API key from OpenAI or Anthropic\n2. Install SDK: pip install openai\n3. Make API calls and get real responses"}
                    {topicKey === "3-1" && "1. Use Claude.ai or ChatGPT for testing\n2. Experiment with different prompts\n3. Learn prompt patterns"}
                    {topicKey === "3-2" && "1. Test JSON mode with actual LLM\n2. Validate structured outputs\n3. Practice with your API key"}
                    {topicKey === "3-3" && "1. Build multi-step prompts\n2. Chain API calls together\n3. Test on real use cases"}
                    {topicKey === "3-4" && "1. pip install langchain\n2. Create chains and agents\n3. Use with real LLM APIs"}
                    {topicKey === "3-5" && "1. Sign up for free embedding service\n2. Create vector database\n3. Implement semantic search"}
                    {topicKey === "3-6" && "1. Install LangChain: pip install langchain\n2. Build agent with tools\n3. Test decision-making"}
                    {topicKey === "4-0" && "1. pip install fastapi uvicorn\n2. Create main.py with API endpoints\n3. Run: uvicorn main:app --reload"}
                    {topicKey === "4-1" && "1. pip install streamlit\n2. Create app.py with UI components\n3. Run: streamlit run app.py"}
                    {topicKey === "4-2" && "1. Install Docker Desktop\n2. Create Dockerfile\n3. Build image: docker build -t myapp ."}
                    {topicKey === "4-3" && "1. Create .env file with variables\n2. pip install python-dotenv\n3. Load with os.getenv()"}
                    {topicKey === "4-5" && "1. Create README.md file\n2. Write clear documentation\n3. Push to GitHub"}
                    {topicKey === "4-6" && "1. Choose platform (Heroku/Railway/Replit)\n2. Deploy your application\n3. Test live version"}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: CODE EDITOR + TERMINAL */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, height: "calc(100vh - 140px)" }}>
            {/* Code Editor */}
            <div style={{
              background: "rgba(30, 45, 69, 0.3)",
              border: "1px solid rgba(100, 116, 139, 0.2)",
              borderRadius: 14,
              padding: 20,
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>💻 Your Code</h4>
                <button
                  onClick={() => setShowPrevious(!showPrevious)}
                  style={{
                    background: previousAttempts.length > 0 ? "rgba(100, 116, 139, 0.3)" : "rgba(100, 116, 139, 0.15)",
                    color: previousAttempts.length > 0 ? "#cbd5e1" : "#475569",
                    border: "1px solid rgba(100, 116, 139, 0.2)",
                    borderRadius: 6,
                    padding: "6px 14px",
                    cursor: previousAttempts.length > 0 ? "pointer" : "not-allowed",
                    fontSize: 12,
                    fontWeight: 600,
                    transition: "all 0.2s",
                  }}
                  disabled={previousAttempts.length === 0}
                  title={previousAttempts.length === 0 ? "Save some code first!" : "View previous attempts"}
                >
                  📝 Previous ({previousAttempts.length})
                </button>
              </div>
              <textarea
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                placeholder="Write your Python code here..."
                style={{
                  flex: 1,
                  background: "#0f172a",
                  border: "1px solid rgba(100, 116, 139, 0.2)",
                  borderRadius: 10,
                  padding: 16,
                  color: "#e2e8f0",
                  fontFamily: "monospace",
                  fontSize: 14,
                  lineHeight: 1.8,
                  resize: "none",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Terminal */}
            <div style={{
              background: "rgba(30, 45, 69, 0.3)",
              border: "1px solid rgba(100, 116, 139, 0.2)",
              borderRadius: 14,
              padding: 20,
              flex: 0.5,
              display: "flex",
              flexDirection: "column",
            }}>
              <h4 style={{ margin: "0 0 16px 0", fontSize: 16, fontWeight: 700 }}>⌨️ Terminal Output</h4>
              <div style={{
                flex: 1,
                background: "#0f172a",
                border: "1px solid rgba(100, 116, 139, 0.2)",
                borderRadius: 10,
                padding: 14,
                color: "#00d4aa",
                fontFamily: "monospace",
                fontSize: 13,
                lineHeight: 1.8,
                overflowY: "auto",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
              }}>
                {terminalOutput}
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                onClick={runCode}
                disabled={!pyodideReady}
                style={{
                  background: !pyodideReady ? "rgba(100, 116, 139, 0.2)" : "rgba(168, 85, 247, 0.3)",
                  color: "#d8b4fe",
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                  borderRadius: 8,
                  padding: "12px 20px",
                  cursor: pyodideReady ? "pointer" : "not-allowed",
                  fontSize: 14,
                  fontWeight: 600,
                  flex: 1,
                }}
              >
                ▶ Run Code {!pyodideReady && "(Loading...)"}
              </button>

              <button
                onClick={saveCodeSnippet}
                style={{
                  background: "rgba(59, 130, 246, 0.3)",
                  color: "#93c5fd",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  borderRadius: 8,
                  padding: "12px 20px",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 600,
                  flex: 1,
                }}
              >
                💾 Save Attempt
              </button>

              <button
                onClick={markComplete}
                disabled={completedTopics[topicKey]}
                style={{
                  background: completedTopics[topicKey] ? "rgba(100, 116, 139, 0.2)" : "linear-gradient(135deg, #00d4aa, #00b896)",
                  color: completedTopics[topicKey] ? "#475569" : "#0f172a",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 20px",
                  cursor: completedTopics[topicKey] ? "not-allowed" : "pointer",
                  fontSize: 14,
                  fontWeight: 700,
                  flex: 1,
                  opacity: completedTopics[topicKey] ? 0.5 : 1,
                }}
              >
                {completedTopics[topicKey] ? "✅ Completed" : "✓ Mark Complete (Quiz)"}
              </button>

              <button
                onClick={() => {
                  if (activeTopicIdx > 0) {
                    setActiveTopicIdx(activeTopicIdx - 1);
                    setUserCode("");
                    setTerminalOutput("✅ Python ready!\n$ Ready for previous lesson...");
                  }
                }}
                disabled={activeTopicIdx === 0}
                style={{
                  background: activeTopicIdx === 0 ? "rgba(100, 116, 139, 0.2)" : "rgba(59, 130, 246, 0.3)",
                  color: activeTopicIdx === 0 ? "#475569" : "#cbd5e1",
                  border: "1px solid " + (activeTopicIdx === 0 ? "rgba(100, 116, 139, 0.2)" : "rgba(59, 130, 246, 0.3)"),
                  borderRadius: 8,
                  padding: "12px 20px",
                  cursor: activeTopicIdx === 0 ? "not-allowed" : "pointer",
                  fontSize: 14,
                  fontWeight: 600,
                  flex: 1,
                }}
              >
                ← Previous
              </button>

              <button
                onClick={() => {
                  if (activeTopicIdx < phase.topics.length - 1) {
                    setActiveTopicIdx(activeTopicIdx + 1);
                    setUserCode("");
                    setTerminalOutput("✅ Python ready!\n$ Ready for next lesson...");
                  }
                }}
                disabled={activeTopicIdx === phase.topics.length - 1}
                style={{
                  background: activeTopicIdx === phase.topics.length - 1 ? "rgba(100, 116, 139, 0.2)" : "rgba(59, 130, 246, 0.3)",
                  color: activeTopicIdx === phase.topics.length - 1 ? "#475569" : "#cbd5e1",
                  border: "1px solid " + (activeTopicIdx === phase.topics.length - 1 ? "rgba(100, 116, 139, 0.2)" : "rgba(59, 130, 246, 0.3)"),
                  borderRadius: 8,
                  padding: "12px 20px",
                  cursor: activeTopicIdx === phase.topics.length - 1 ? "not-allowed" : "pointer",
                  fontSize: 14,
                  fontWeight: 600,
                  flex: 1,
                }}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LEARN VIEW */}
      {view === "learn" && (
        <div style={{ padding: "40px", maxWidth: 1400, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 40 }}>👨‍💻 Learning Resources</h2>
          
          {/* All Topics Section */}
          <div style={{ marginBottom: 60 }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 28, color: "#00d4aa" }}>📚 All Topics</h3>
            
            <div style={{ display: "grid", gap: 40 }}>
              {phases.map((phase) => (
                <div key={phase.id}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                    <div style={{ fontSize: 40 }}>{phase.icon}</div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>{phase.title}</h4>
                      <p style={{ margin: "8px 0 0 0", color: "#cbd5e1", fontSize: 14, lineHeight: 1.5 }}>{phase.description}</p>
                    </div>
                  </div>
                  
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginLeft: 0 }}>
                    {phase.topics.map((topic, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setActivePhaseIdx(phase.id - 1);
                          setActiveTopicIdx(idx);
                          setView("tutorial");
                        }}
                        style={{
                          background: "rgba(30, 45, 69, 0.3)",
                          border: "1px solid rgba(100, 116, 139, 0.2)",
                          borderRadius: 12,
                          padding: 20,
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(30, 45, 69, 0.5)";
                          e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(30, 45, 69, 0.3)";
                          e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.2)";
                        }}
                      >
                        <h5 style={{ margin: "0 0 10px 0", fontSize: 16, fontWeight: 600 }}>{topic.name}</h5>
                        <p style={{ margin: 0, fontSize: 13, color: "#94a3b8", lineHeight: 1.5, marginBottom: 14 }}>{topic.brief}</p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {topic.resources && topic.resources.slice(0, 2).map((res, i) => (
                            <a
                              key={i}
                              href={res.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                fontSize: 11,
                                color: "#00d4aa",
                                textDecoration: "none",
                                padding: "4px 10px",
                                background: "rgba(0, 212, 170, 0.15)",
                                border: "1px solid rgba(0, 212, 170, 0.3)",
                                borderRadius: 4,
                                cursor: "pointer",
                                transition: "all 0.2s",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = "rgba(0, 212, 170, 0.25)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = "rgba(0, 212, 170, 0.15)";
                              }}
                            >
                              🔗 Link
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Categories Section */}
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 28, color: "#00d4aa" }}>🎯 Learning Categories</h3>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
              {[
                { icon: "🎨", title: "Python Fundamentals", desc: "Master Python syntax, data types, functions, and OOP", link: "https://www.w3schools.com/python/" },
                { icon: "🤖", title: "AI & LLM Basics", desc: "Learn to work with AI models, prompts, and embeddings", link: "https://platform.openai.com/docs/" },
                { icon: "🌐", title: "Web Development", desc: "Build APIs with FastAPI and UIs with Streamlit", link: "https://fastapi.tiangolo.com/" },
                { icon: "🚀", title: "Deployment", desc: "Deploy apps to production with Docker and cloud platforms", link: "https://docs.docker.com/" },
                { icon: "🔧", title: "Advanced Topics", desc: "Decorators, testing, async programming, and more", link: "https://docs.python.org/3/" },
                { icon: "📖", title: "Best Practices", desc: "Code organization, documentation, version control", link: "https://www.w3schools.com/git/" }
              ].map((resource, i) => (
                <a
                  key={i}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "rgba(30, 45, 69, 0.3)",
                    border: "1px solid rgba(100, 116, 139, 0.2)",
                    borderRadius: 14,
                    padding: 28,
                    textDecoration: "none",
                    transition: "all 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(30, 45, 69, 0.5)";
                    e.currentTarget.style.borderColor = "rgba(0, 212, 170, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(30, 45, 69, 0.3)";
                    e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.2)";
                  }}
                >
                  <div style={{ fontSize: 48, marginBottom: 16 }}>{resource.icon}</div>
                  <h3 style={{ margin: "0 0 12px 0", fontSize: 18, fontWeight: 700, color: "#e2e8f0" }}>{resource.title}</h3>
                  <p style={{ margin: 0, color: "#cbd5e1", fontSize: 14, lineHeight: 1.6, marginBottom: 12 }}>{resource.desc}</p>
                  <div style={{ marginTop: 12, color: "#00d4aa", fontSize: 12, fontWeight: 500 }}>Learn more →</div>
                </a>
              ))}
            </div>
          </div>

          {/* Project Structure & Organization Section */}
          <div style={{ marginTop: 60 }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 28, color: "#00d4aa" }}>📁 Project Structure & Organization</h3>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
              {[
                { 
                  icon: "🗂️", 
                  title: "Python Project Structure", 
                  desc: "Learn best practices for organizing Python projects with proper folder hierarchy", 
                  link: "https://docs.python-guide.org/writing/structure/" 
                },
                { 
                  icon: "📦", 
                  title: "Large Python Project Structure", 
                  desc: "Real-world guide to organizing large and complex Python projects effectively", 
                  link: "https://realpython.com/python-application-layouts/" 
                },
                { 
                  icon: "🏗️", 
                  title: "Software Architecture Patterns", 
                  desc: "Understand MVC, microservices, and modular design patterns", 
                  link: "https://refactoring.guru/design-patterns" 
                },
                { 
                  icon: "📚", 
                  title: "Structuring Your Curriculum", 
                  desc: "How to organize learning progression and educational content effectively", 
                  link: "https://realpython.com/learning-paths/" 
                },
                { 
                  icon: "🎯", 
                  title: "Project Management Guide", 
                  desc: "Best practices for organizing tasks, deadlines, and team collaboration", 
                  link: "https://www.scrum.org/resources/what-is-scrum" 
                },
                { 
                  icon: "🔐", 
                  title: "Clean Code Organization", 
                  desc: "Best practices for clean code, DRY principle, and maintainability", 
                  link: "https://realpython.com/python-code-quality/" 
                },
                { 
                  icon: "📝", 
                  title: "Documentation Best Practices", 
                  desc: "How to organize and write clear, maintainable project documentation", 
                  link: "https://www.divio.com/blog/documentation/" 
                },
                { 
                  icon: "🚀", 
                  title: "Cookiecutter Project Templates", 
                  desc: "Pre-built scalable folder structures and templates for Python projects", 
                  link: "https://cookiecutter.readthedocs.io/" 
                },
                { 
                  icon: "🔍", 
                  title: "Git Workflow & Repository Organization", 
                  desc: "Git workflows, branching strategies, and repository best practices", 
                  link: "https://www.atlassian.com/git/tutorials/comparing-workflows" 
                }
              ].map((resource, i) => (
                <a
                  key={i}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "rgba(30, 45, 69, 0.3)",
                    border: "1px solid rgba(100, 116, 139, 0.2)",
                    borderRadius: 14,
                    padding: 28,
                    textDecoration: "none",
                    transition: "all 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(30, 45, 69, 0.5)";
                    e.currentTarget.style.borderColor = "rgba(0, 212, 170, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(30, 45, 69, 0.3)";
                    e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.2)";
                  }}
                >
                  <div style={{ fontSize: 48, marginBottom: 16 }}>{resource.icon}</div>
                  <h3 style={{ margin: "0 0 12px 0", fontSize: 18, fontWeight: 700, color: "#e2e8f0" }}>{resource.title}</h3>
                  <p style={{ margin: 0, color: "#cbd5e1", fontSize: 14, lineHeight: 1.6, marginBottom: 12 }}>{resource.desc}</p>
                  <div style={{ marginTop: 12, color: "#00d4aa", fontSize: 12, fontWeight: 500 }}>Learn more →</div>
                </a>
              ))}
            </div>
          </div>

          {/* Free Hosting Alternatives Section */}
          <div style={{ marginTop: 60 }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 28, color: "#00d4aa" }}>☁️ Free Hosting Alternatives</h3>
            <p style={{ color: "#cbd5e1", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>Deploy your Python projects for free! These platforms offer generous free tiers perfect for beginners and hobby projects.</p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
              {[
                { 
                  icon: "⚡", 
                  title: "Vercel", 
                  desc: "Deploy web apps instantly. Free tier includes unlimited deployments. Perfect for FastAPI and Streamlit apps", 
                  link: "https://vercel.com/", 
                  free: "Unlimited free deployments"
                },
                { 
                  icon: "🎯", 
                  title: "Netlify", 
                  desc: "Deploy static sites and serverless functions. Easy GitHub integration. Great for frontend projects", 
                  link: "https://netlify.com/", 
                  free: "300 free build minutes/month"
                },
                { 
                  icon: "🚀", 
                  title: "Railway", 
                  desc: "Modern alternative to Heroku. Deploy Python apps with one click. Free tier includes $5/month credits", 
                  link: "https://railway.app/", 
                  free: "$5/month free credits"
                },
                { 
                  icon: "🎨", 
                  title: "Render", 
                  desc: "Deploy web services, static sites, and databases. Zero-config deployments from GitHub", 
                  link: "https://render.com/", 
                  free: "Always free tier available"
                },
                { 
                  icon: "💻", 
                  title: "Replit", 
                  desc: "Browser-based IDE with instant deployment. Code and host in one place. Perfect for learning", 
                  link: "https://replit.com/", 
                  free: "Always free tier"
                },
                { 
                  icon: "📦", 
                  title: "PythonAnywhere", 
                  desc: "Python-specific hosting. Run Python scripts and web apps. Beginner-friendly console", 
                  link: "https://www.pythonanywhere.com/", 
                  free: "Free tier with limitations"
                },
                { 
                  icon: "🌐", 
                  title: "Heroku", 
                  desc: "Deploy apps with Git push. Previously free, now requires paid plan but worth learning the process", 
                  link: "https://www.heroku.com/", 
                  free: "Paid plans start at $7/month"
                },
                { 
                  icon: "☁️", 
                  title: "AWS Free Tier", 
                  desc: "Amazon Web Services. Most powerful option. EC2, Lambda, and more. Complex but industry-standard", 
                  link: "https://aws.amazon.com/free/", 
                  free: "12 months free, always free options"
                },
                { 
                  icon: "🐧", 
                  title: "DigitalOcean", 
                  desc: "VPS hosting with great documentation. Droplets from $4/month. Free $200 trial for students", 
                  link: "https://www.digitalocean.com/", 
                  free: "$200/month free for students"
                }
              ].map((host, i) => (
                <a
                  key={i}
                  href={host.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "rgba(30, 45, 69, 0.3)",
                    border: "1px solid rgba(100, 116, 139, 0.2)",
                    borderRadius: 14,
                    padding: 28,
                    textDecoration: "none",
                    transition: "all 0.2s",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(30, 45, 69, 0.5)";
                    e.currentTarget.style.borderColor = "rgba(0, 212, 170, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(30, 45, 69, 0.3)";
                    e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.2)";
                  }}
                >
                  <div style={{ fontSize: 48, marginBottom: 16 }}>{host.icon}</div>
                  <h3 style={{ margin: "0 0 12px 0", fontSize: 18, fontWeight: 700, color: "#e2e8f0" }}>{host.title}</h3>
                  <p style={{ margin: 0, color: "#cbd5e1", fontSize: 14, lineHeight: 1.6, marginBottom: 14 }}>{host.desc}</p>
                  <div style={{ marginTop: 14, padding: "10px 0", borderTop: "1px solid rgba(100, 116, 139, 0.2)", color: "#00d4aa", fontSize: 12, fontWeight: 600 }}>
                    ✨ {host.free}
                  </div>
                  <div style={{ marginTop: 12, color: "#00d4aa", fontSize: 12, fontWeight: 500 }}>Get started →</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* JOBS VIEW */}
      {view === "jobs" && (
        <div style={{ padding: "40px", maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 12 }}>💼 Job Opportunities</h2>
          <p style={{ color: "#cbd5e1", fontSize: 16, marginBottom: 40, lineHeight: 1.6 }}>
            Explore career paths and salary ranges for different roles in the Python and AI engineering space.
          </p>
          
          <div style={{ display: "grid", gap: 20 }}>
            {[
              { 
                icon: "🐍",
                title: "Python Developer", 
                level: "Entry-Level", 
                salary: "$60k-$80k", 
                skills: ["Python", "SQL", "Git"],
                description: "Get started with Python development and build your first projects"
              },
              { 
                icon: "🌐",
                title: "Full Stack Developer", 
                level: "Mid-Level", 
                salary: "$80k-$120k", 
                skills: ["Python", "FastAPI", "React", "Docker"],
                description: "Master both backend and frontend development"
              },
              { 
                icon: "🤖",
                title: "AI/ML Engineer", 
                level: "Mid-Level", 
                salary: "$100k-$150k", 
                skills: ["Python", "AI APIs", "Data Science", "Deployment"],
                description: "Build intelligent systems with machine learning"
              },
              { 
                icon: "⚙️",
                title: "DevOps Engineer", 
                level: "Senior", 
                salary: "$120k-$180k", 
                skills: ["Docker", "Cloud", "CI/CD", "Monitoring"],
                description: "Manage infrastructure and deployment pipelines"
              },
              { 
                icon: "✨",
                title: "AI Automation Engineer", 
                level: "Specialist", 
                salary: "$130k-$200k", 
                skills: ["LLMs", "Automation", "Python", "Full Stack"],
                description: "Cutting-edge role building AI-powered automation"
              }
            ].map((job, i) => (
              <div key={i} style={{
                background: "rgba(30, 45, 69, 0.3)",
                border: "1px solid rgba(100, 116, 139, 0.2)",
                borderRadius: 14,
                padding: 24,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(30, 45, 69, 0.4)";
                e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(30, 45, 69, 0.3)";
                e.currentTarget.style.borderColor = "rgba(100, 116, 139, 0.2)";
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 12 }}>
                  <div style={{ display: "flex", gap: 16, alignItems: "start", flex: 1 }}>
                    <div style={{ fontSize: 32 }}>{job.icon}</div>
                    <div>
                      <h3 style={{ margin: "0 0 4px 0", fontSize: 20, fontWeight: 700 }}>{job.title}</h3>
                      <div style={{ fontSize: 12, color: "#94a3b8", fontWeight: 500 }}>{job.level}</div>
                      <p style={{ margin: "8px 0 0 0", fontSize: 13, color: "#cbd5e1", lineHeight: 1.5 }}>{job.description}</p>
                    </div>
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#00d4aa", textAlign: "right", minWidth: 100 }}>{job.salary}</div>
                </div>
                
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
                  {job.skills.map((skill, j) => (
                    <span key={j} style={{
                      background: "rgba(0, 212, 170, 0.15)",
                      border: "1px solid rgba(0, 212, 170, 0.3)",
                      borderRadius: 6,
                      padding: "6px 12px",
                      fontSize: 12,
                      color: "#00d4aa",
                      fontWeight: 500,
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 50, padding: "32px", background: "rgba(0, 212, 170, 0.08)", border: "2px solid rgba(0, 212, 170, 0.2)", borderRadius: 14 }}>
            <div style={{ display: "flex", gap: 16, alignItems: "start" }}>
              <div style={{ fontSize: 40 }}>🎯</div>
              <div>
                <h3 style={{ margin: "0 0 12px 0", fontSize: 20, fontWeight: 700 }}>Path to Success</h3>
                <p style={{ margin: 0, color: "#cbd5e1", fontSize: 14, lineHeight: 1.8 }}>
                  Complete this learning roadmap and build projects to strengthen your portfolio. Showcase your certificate and code samples to land your dream job as a Python or AI Automation Engineer! Every topic you complete brings you closer to these opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ACHIEVEMENTS VIEW */}
      {view === "achievements" && (
        <div style={{ padding: "40px", maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 40 }}>🏆 Your Achievements</h2>

          <div style={{ marginBottom: 50 }}>
            <h3 style={{ fontSize: 16, color: "#00d4aa", letterSpacing: 3, fontFamily: "monospace", textTransform: "uppercase", marginBottom: 28, fontWeight: 700 }}>🏅 Badges</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
              {getBadges().length > 0 ? (
                getBadges().map((badge, i) => (
                  <div key={i} style={{
                    background: "rgba(0, 212, 170, 0.1)",
                    border: "2px solid #00d4aa",
                    borderRadius: 14,
                    padding: 28,
                    textAlign: "center",
                  }}>
                    <div style={{ fontSize: 56, marginBottom: 16 }}>{badge.emoji}</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: "#e2e8f0" }}>{badge.name}</div>
                  </div>
                ))
              ) : (
                <div style={{ color: "#64748b", gridColumn: "1 / -1", fontSize: 16 }}>Complete phases to unlock badges!</div>
              )}
            </div>
          </div>

          {isFullyComplete && (
            <div>
              <h3 style={{ fontSize: 16, color: "#00d4aa", letterSpacing: 3, fontFamily: "monospace", textTransform: "uppercase", marginBottom: 28, fontWeight: 700 }}>📜 Certificate</h3>
              <div style={{
                background: "rgba(30, 45, 69, 0.3)",
                border: "1px solid rgba(100, 116, 139, 0.2)",
                borderRadius: 14,
                padding: 32,
              }}>
                <p style={{ color: "#cbd5e1", fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
                  🎉 Congratulations! You've completed all topics!
                </p>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: 14, color: "#cbd5e1", marginBottom: 12, fontWeight: 600 }}>
                    Enter your name:
                  </label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Your full name"
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      background: "#0f172a",
                      border: "1px solid rgba(100, 116, 139, 0.2)",
                      borderRadius: 8,
                      color: "#e2e8f0",
                      fontSize: 15,
                      boxSizing: "border-box",
                      marginBottom: 20,
                    }}
                  />
                </div>
                <button
                  onClick={() => {
                    if (!userName.trim()) {
                      alert("Please enter your name!");
                      return;
                    }

                    // Get all completed topics
                    const completedTopicsList = phases.map((phase) => 
                      phase.topics.map((topic, idx) => ({
                        phase: phase.title,
                        topic: topic.name
                      }))
                    ).flat();

                    const certId = Math.random().toString(36).substr(2, 9).toUpperCase();
                    const issueDate = new Date().toLocaleDateString();

                    const topicsHtml = completedTopicsList.map((t, i) => 
                      `<div style="padding: 8px 0; border-bottom: 1px solid #e5e5e5; font-size: 13px; color: #333;">
                        <span style="color: #666;">${t.phase}</span> • ${t.topic}
                      </div>`
                    ).join('');

                    const certificateHTML = `
                    <!DOCTYPE html>
                    <html>
                    <head>
                      <meta charset="UTF-8">
                      <title>Certificate - ${userName}</title>
                    </head>
                    <body style="margin: 0; padding: 40px; background: #f9fafb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
                      <div style="max-width: 900px; margin: 0 auto; background: white; padding: 60px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.08);">
                        
                        <!-- Header -->
                        <div style="text-align: center; margin-bottom: 50px;">
                          <div style="font-size: 48px; margin-bottom: 20px;">🎓</div>
                          <h1 style="margin: 0; font-size: 36px; font-weight: 700; color: #1f2937;">Certificate of Completion</h1>
                        </div>

                        <!-- Main Content -->
                        <div style="text-align: center; margin-bottom: 50px;">
                          <p style="margin: 0 0 20px 0; font-size: 16px; color: #6b7280;">This is to certify that</p>
                          <h2 style="margin: 0 0 30px 0; font-size: 42px; font-weight: 700; color: #00d4aa; letter-spacing: 1px;">${userName}</h2>
                          <p style="margin: 0; font-size: 18px; color: #374151; line-height: 1.6;">
                            has successfully completed the<br/>
                            <strong style="font-size: 20px;">Python to AI Automation Engineer Roadmap Course</strong>
                          </p>
                        </div>

                        <!-- Completed Topics Section -->
                        <div style="margin-bottom: 50px; background: #f3f4f6; padding: 30px; border-radius: 8px;">
                          <h3 style="margin: 0 0 20px 0; font-size: 16px; font-weight: 700; color: #1f2937;">✓ Completed Topics (28/28)</h3>
                          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            ${topicsHtml}
                          </div>
                        </div>

                        <!-- Footer Info -->
                        <div style="text-align: center; border-top: 2px solid #e5e7eb; padding-top: 30px; color: #6b7280; font-size: 14px;">
                          <p style="margin: 0 0 10px 0;">Issued on: <strong>${issueDate}</strong></p>
                          <p style="margin: 0;">Certificate ID: <strong>${certId}</strong></p>
                        </div>

                      </div>
                    </body>
                    </html>
                    `;

                    const element = document.createElement("a");
                    const file = new Blob([certificateHTML], { type: 'text/html' });
                    element.href = URL.createObjectURL(file);
                    element.download = `Certificate_${userName.replace(/\s+/g, '_')}.html`;
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                  }}
                  style={{
                    width: "100%",
                    background: "linear-gradient(135deg, #00d4aa, #00b896)",
                    color: "#0f172a",
                    border: "none",
                    borderRadius: 8,
                    padding: "16px 32px",
                    cursor: "pointer",
                    fontSize: 16,
                    fontWeight: 700,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  📥 Download Certificate
                </button>
              </div>
            </div>
          )}

          {!isFullyComplete && (
            <div style={{
              background: "rgba(168, 85, 247, 0.08)",
              border: "1px solid rgba(168, 85, 247, 0.2)",
              borderRadius: 14,
              padding: 32,
              textAlign: "center",
            }}>
              <div style={{ fontSize: 64, marginBottom: 20 }}>📚</div>
              <h3 style={{ margin: "0 0 16px 0", fontSize: 24, fontWeight: 700 }}>Keep Learning!</h3>
              <p style={{ color: "#cbd5e1", margin: 0, fontSize: 16 }}>Complete all topics to unlock your certificate.<br />You're {progressPct}% there!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InteractiveLearningRoadmap;
