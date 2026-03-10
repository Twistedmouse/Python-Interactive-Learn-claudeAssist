export const phase2 = {
  id: 2,
  title: "Intermediate Python",
  duration: "Weeks 5–9",
  hours: "6–9 hrs/week",
  color: "#3b82f6",
  icon: "⚙️",
  tagline: "Level up your skills",
  description: "OOP, decorators, APIs, and advanced patterns.",
  topics: [
    {
      name: "OOP — Classes & Objects",
      brief: "Create reusable blueprints with classes",
      instruction: `## 🏗️ Object-Oriented Programming

Classes are blueprints for creating objects. They help organize code and avoid repetition.

---

## Basic Class Definition

\`\`\`python
class Dog:
    def __init__(self, name):
        self.name = name
    
    def bark(self):
        return f"{self.name} says Woof!"

dog = Dog("Rex")
print(dog.bark())  # "Rex says Woof!"
\`\`\`

---

## Class vs Instance

- **Class** - The blueprint
- **Instance** - A specific object created from the blueprint

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name

dog = Animal("Dog")
cat = Animal("Cat")
# dog and cat are different instances
\`\`\`

---

## Attributes and Methods

- **Attributes** - Data/variables stored in the object
- **Methods** - Functions that belong to the object

---

## Inheritance: Reusing Code

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"
\`\`\`

---

## ✅ Key Points to Remember

- Classes are blueprints for objects
- \`__init__\` is the constructor
- \`self\` refers to the current object
- Methods define behaviors
- Inheritance lets you reuse code
- Attributes store data

---

## ❌ Common Mistakes to Avoid

- **Forgetting \`self\`:** All methods need self as first parameter
- **Forgetting colon:** \`class Dog\` ❌ should be \`class Dog:\`
- **Not initializing:** Use __init__ to set up state
- **Wrong inheritance syntax:** \`class Dog(Animal):\` is correct
- **Confusing class and instance:** \`Dog.name\` vs \`dog.name\``,
      challenge: `class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def info(self):
        return f"{self.name} is {self.age} years old"

cat = Cat("Whiskers", 3)
print(cat.info())`,
      resources: [
        { name: "Python Classes", url: "https://www.w3schools.com/python/python_classes.asp" },
        { name: "Inheritance", url: "https://www.w3schools.com/python/python_inheritance.asp" },
        { name: "Magic Methods", url: "https://docs.python.org/3/reference/datamodel.html" }
      ],
      expectedOutput: "Whiskers is 3 years old"
    },
    {
      name: "List Comprehensions",
      brief: "Create lists efficiently",
      instruction: `## ⚡ List Comprehensions

Create lists in one line with powerful syntax.

---

## Basic List Comprehension

\`\`\`python
squares = [x**2 for x in range(5)]
# [0, 1, 4, 9, 16]
\`\`\`

---

## With Conditions

\`\`\`python
evens = [x for x in range(10) if x % 2 == 0]
# [0, 2, 4, 6, 8]
\`\`\`

---

## Nested Comprehensions

\`\`\`python
matrix = [[i+j for j in range(3)] for i in range(3)]
# [[0, 1, 2], [1, 2, 3], [2, 3, 4]]
\`\`\`

---

## Traditional vs Comprehension

**Traditional:**
\`\`\`python
squares = []
for x in range(5):
    squares.append(x**2)
\`\`\`

**Comprehension:**
\`\`\`python
squares = [x**2 for x in range(5)]
\`\`\`

---

## 📚 Step-by-Step

1. Start with square brackets \`[]\`
2. Write the expression \`x**2\`
3. Add for loop \`for x in range(5)\`
4. Optionally add condition \`if x % 2 == 0\`

---

## ✅ Key Points to Remember

- More concise than for loops
- More readable (when not too complex)
- Generally faster than for loops
- Can be nested for complex operations
- Filters with if conditions

---

## ❌ Common Mistakes to Avoid

- **Too complex:** Nested more than 2 levels = use for loop
- **Wrong order:** Expression comes FIRST, then for/if
- **Confusing syntax:** \`[x for x in range(5) if x % 2]\` not \`if x % 2 == 0\` for checking
- **Forgetting outer brackets:** Must be surrounded by \`[]\`
- **Variable scope:** Variables defined in comprehension don't leak out`,
      challenge: `squares = [x**2 for x in range(1, 6)]
evens = [x for x in range(20) if x % 2 == 0]

print(squares)
print(evens)`,
      resources: [
        { name: "List Comprehensions", url: "https://www.w3schools.com/python/python_lists_comprehension.asp" },
        { name: "Python Docs", url: "https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions" }
      ],
      expectedOutput: "[1, 4, 9, 16, 25]\n[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]"
    },
    {
      name: "Decorators & Context Managers",
      brief: "Advanced function patterns",
      instruction: `## 🎯 Decorators

Decorators wrap functions to modify their behavior.

---

## Basic Decorator

\`\`\`python
def my_decorator(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
\`\`\`

Output:
\`\`\`
Before
Hello!
After
\`\`\`

---

## Decorator with Arguments

\`\`\`python
def uppercase_decorator(func):
    def wrapper(name):
        return func(name).upper()
    return wrapper

@uppercase_decorator
def greet(name):
    return f"hello {name}"

print(greet("alice"))  # "HELLO ALICE"
\`\`\`

---

## Context Managers

\`\`\`python
with open("file.txt", "r") as f:
    content = f.read()
# File automatically closes
\`\`\`

---

## ✅ Key Points to Remember

- Decorators modify function behavior
- Use @ symbol to apply decorator
- Useful for logging, timing, validation
- Context managers (\`with\` statement) handle setup/cleanup
- \`with\` ensures resources are properly closed

---

## ❌ Common Mistakes to Avoid

- **Forgetting to return wrapper:** Decorator must return the wrapper function
- **Forgetting @ symbol:** Use @decorator_name to apply
- **Incorrect wrapper signature:** Wrapper must match original function signature
- **Not closing resources:** Always use \`with\` for file/database operations
- **Complex nested decorators:** Hard to debug`,
      challenge: `def uppercase_decorator(func):
    def wrapper(name):
        return func(name).upper()
    return wrapper

@uppercase_decorator
def greet(name):
    return f"hello {name}"

print(greet("alice"))`,
      resources: [
        { name: "Python Decorators", url: "https://www.w3schools.com/python/python_decorators.asp" },
        { name: "Context Managers", url: "https://docs.python.org/3/library/stdtypes.html#context-manager-types" }
      ],
      expectedOutput: "HELLO ALICE"
    },
    {
      name: "APIs & HTTP Requests",
      brief: "Call web services and get data",
      instruction: `## 🌐 APIs & HTTP Requests

**🔄 HYBRID LEARNING MODE** - Learn API concepts in browser, test with real APIs locally!

The browser has security limitations for making real API calls (CORS issues, credential handling). But we can learn the concepts and test locally!

---

## HTTP Methods

- **GET** - Retrieve data (read-only)
- **POST** - Send data (create)
- **PUT** - Update data
- **DELETE** - Remove data

---

## Making Requests

\`\`\`python
import requests

# GET request
response = requests.get("https://api.example.com/users")
data = response.json()

# POST request
payload = {"name": "John", "age": 25}
response = requests.post("https://api.example.com/users", json=payload)
\`\`\`

---

## Response Handling

\`\`\`python
response = requests.get("https://api.example.com")

print(response.status_code)  # 200, 404, 500, etc.
print(response.json())       # Parse JSON
print(response.text)         # Raw text
print(response.headers)      # Response headers
\`\`\`

---

## ✅ Key Points to Remember

- \`requests\` library makes HTTP easy
- Always check \`status_code\`
- \`json()\` parses JSON responses
- Use proper HTTP methods
- Handle errors gracefully

---

## ❌ Common Mistakes to Avoid

- **Not checking status:** Always verify response.status_code == 200
- **Assuming valid JSON:** Use try-except with json()
- **Ignoring timeouts:** Add timeout parameter to avoid hanging
- **Hardcoding URLs:** Use environment variables
- **Not handling rate limits:** APIs have request limits

---

## 🖥️ LOCAL PRACTICE GUIDE

### Option 1: Free Public API (Recommended for Learning!)

\`\`\`python
import requests

# Uses a free public API - no credentials needed!
response = requests.get("https://jsonplaceholder.typicode.com/posts/1")
print(response.status_code)  # 200 = success
data = response.json()
print(f"Title: {data['title']}")
print(f"Body: {data['body']}")
\`\`\`

### Option 2: OpenWeather API (Free Tier)

1. Sign up: https://openweathermap.org/api
2. Get free API key
3. Make your first request:

\`\`\`python
import requests

API_KEY = "your_api_key_here"
city = "London"
url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}"

response = requests.get(url)
data = response.json()
print(f"Temperature: {data['main']['temp']}K")
\`\`\`

### Option 3: GitHub API (No Auth for Basic Requests)

\`\`\`python
import requests

response = requests.get("https://api.github.com/users/github")
data = response.json()
print(f"Name: {data['name']}")
print(f"Repos: {data['public_repos']}")
\`\`\`

---

## 📚 Free APIs Perfect for Learning

- **JSONPlaceholder** - Fake data for testing (https://jsonplaceholder.typicode.com)
- **OpenWeather** - Weather data (https://openweathermap.org/api)
- **GitHub** - User/repo data (https://api.github.com)
- **REST Countries** - Country data (https://restcountries.com/api)
- **Coindesk** - Bitcoin prices (https://api.coindesk.com)

---

## 🔐 Security Tips

- Never hardcode API keys in code
- Use environment variables (.env files)
- Keep API keys secret from Git commits
- Rotate keys regularly
- Use HTTPS only

---

## 📚 Resources
- [Requests Library](https://requests.readthedocs.io/)
- [HTTP Methods](https://www.w3schools.com/whatis/whatis_http.asp)
- [REST APIs](https://www.restapitutorial.com/)
- [Free APIs List](https://github.com/public-apis/public-apis)`,
      challenge: `# BROWSER SIMULATION: Parse a mock API response
import json

# Simulate what an API returns
mock_api_response = '''
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "status": 200
}
'''

# Parse the response
data = json.loads(mock_api_response)

# Access the data
print(f"User: {data['name']}")
print(f"Email: {data['email']}")
print(f"Status: {data['status']}")`,
      resources: [
        { name: "Requests Library", url: "https://requests.readthedocs.io/" },
        { name: "HTTP Methods", url: "https://www.w3schools.com/whatis/whatis_http.asp" },
        { name: "REST APIs", url: "https://www.restapitutorial.com/" },
        { name: "Public APIs", url: "https://github.com/public-apis/public-apis" }
      ],
      expectedOutput: 'User: John Doe\nEmail: john@example.com\nStatus: 200'
    },
    {
      name: "JSON Handling",
      brief: "Parse and create JSON data",
      instruction: `## 📄 Working with JSON

JSON is the standard format for API data.

---

## Reading JSON

\`\`\`python
import json

json_string = '{"name": "John", "age": 25}'
data = json.loads(json_string)  # String to Python dict

print(data["name"])  # "John"
\`\`\`

---

## Creating JSON

\`\`\`python
import json

person = {"name": "Alice", "age": 30, "city": "NYC"}
json_string = json.dumps(person)  # Python dict to JSON string

print(json_string)
# {"name": "Alice", "age": 30, "city": "NYC"}
\`\`\`

---

## Pretty Printing

\`\`\`python
import json

data = {"name": "John", "hobbies": ["reading", "coding"]}
pretty_json = json.dumps(data, indent=2)
print(pretty_json)
\`\`\`

---

## Handling Nested Data

\`\`\`python
data = {
    "users": [
        {"name": "John", "age": 25},
        {"name": "Jane", "age": 30}
    ]
}

for user in data["users"]:
    print(user["name"])
\`\`\`

---

## ✅ Key Points to Remember

- \`json.loads()\` converts JSON string to Python
- \`json.dumps()\` converts Python to JSON string
- \`indent\` parameter makes output readable
- JSON supports: strings, numbers, arrays, objects, booleans, null
- Always validate JSON data

---

## ❌ Common Mistakes to Avoid

- **Confusing loads vs dumps:** loads = string→Python, dumps = Python→string
- **Single vs double quotes:** JSON requires double quotes only
- **Not handling errors:** Use try-except for parsing
- **Assuming structure:** Validate data before accessing
- **Using single quotes in JSON:** JSON only accepts double quotes`,
      challenge: `import json
data = {"items": ["apple", "banana"], "count": 2}
json_str = json.dumps(data)
parsed = json.loads(json_str)
print(parsed["count"])`,
      resources: [
        { name: "JSON in Python", url: "https://www.w3schools.com/python/python_json.asp" },
        { name: "JSON Format", url: "https://www.json.org/" }
      ],
      expectedOutput: "2"
    },
    {
      name: "Virtual Environments (venv)",
      brief: "Isolate project dependencies",
      instruction: `## 📦 Virtual Environments

**🔄 HANDS-ON LOCAL PROJECT** - This must be done on your computer!

Virtual environments are a terminal/CLI feature. This is essential knowledge for real Python development, so complete this on your computer.

---

## Why Virtual Environments Matter

Imagine:
- Project A needs Django 3.0
- Project B needs Django 4.0
- Both on same computer = **CONFLICT!**

Solution: Virtual environments keep dependencies isolated!

---

## Creating a Virtual Environment

\`\`\`bash
python -m venv myenv
\`\`\`

---

## Activating Virtual Environment

**Mac/Linux:**
\`\`\`bash
source myenv/bin/activate
\`\`\`

**Windows:**
\`\`\`bash
myenv\\Scripts\\activate
\`\`\`

---

## Installing Packages

\`\`\`bash
pip install requests
pip install pandas
pip list  # Show installed packages
\`\`\`

---

## Creating Requirements File

\`\`\`bash
pip freeze > requirements.txt
\`\`\`

---

## Installing from Requirements

\`\`\`bash
pip install -r requirements.txt
\`\`\`

---

## ✅ Key Points to Remember

- Each project should have its own venv
- Isolates dependencies and prevents conflicts
- Use requirements.txt to share dependencies
- Always activate before installing packages
- Different projects can use different package versions

---

## ❌ Common Mistakes to Avoid

- **Forgetting to activate:** Always activate before installing/running
- **Installing globally:** Use venv instead of pip install globally
- **Not using requirements.txt:** Makes sharing projects harder
- **Committing venv to git:** Add venv/ to .gitignore
- **Using wrong Python version:** Check python --version

---

## 🖥️ LOCAL HANDS-ON SETUP

### Step 1: Open Terminal/Command Prompt

Navigate to your project folder:
\`\`\`bash
cd my-python-project
\`\`\`

### Step 2: Create Virtual Environment

**Windows:**
\`\`\`bash
python -m venv myenv
\`\`\`

**Mac/Linux:**
\`\`\`bash
python3 -m venv myenv
\`\`\`

### Step 3: Activate It

**Windows:**
\`\`\`bash
myenv\\Scripts\\activate
\`\`\`

**Mac/Linux:**
\`\`\`bash
source myenv/bin/activate
\`\`\`

You should see \`(myenv)\` in your terminal prompt!

### Step 4: Install Packages

\`\`\`bash
pip install requests
pip install pandas
\`\`\`

### Step 5: Create requirements.txt

\`\`\`bash
pip freeze > requirements.txt
\`\`\`

### Step 6: Verify

\`\`\`bash
pip list
cat requirements.txt  # Mac/Linux
type requirements.txt  # Windows
\`\`\`

### Step 7: Deactivate (when done)

\`\`\`bash
deactivate
\`\`\`

---

## 📚 Resources
- [Virtual Environments](https://docs.python.org/3/tutorial/venv.html)
- [pip User Guide](https://pip.pypa.io/en/stable/user_guide/)
- [Why Virtual Environments Matter](https://realpython.com/python-virtual-environments-a-primer/)`,
      challenge: `# CONCEPTUAL LEARNING
print("✓ Virtual environments prevent dependency conflicts")
print("✓ Each project has isolated packages")
print("✓ requirements.txt documents dependencies")
print()
print("Complete the setup on your computer:")
print("python -m venv myenv")
print("Activate it and install packages!")`,
      resources: [
        { name: "Virtual Environments", url: "https://docs.python.org/3/tutorial/venv.html" },
        { name: "pip User Guide", url: "https://pip.pypa.io/en/stable/user_guide/" },
        { name: "Python Virtual Environments Primer", url: "https://realpython.com/python-virtual-environments-a-primer/" }
      ],
      expectedOutput: "✓ Virtual environments prevent dependency conflicts\n✓ Each project has isolated packages\n✓ requirements.txt documents dependencies\n\nComplete the setup on your computer:\npython -m venv myenv\nActivate it and install packages!"
    },
    {
      name: "Git & Version Control",
      brief: "Track changes and collaborate",
      instruction: `## 🔀 Git Version Control

**🔄 HYBRID LEARNING MODE** - Learn on GitHub (browser) + Git CLI (local)!

You'll learn Git in two ways:
1. **GitHub Web Interface** (browser) - Perfect for beginners
2. **Git CLI** (local computer) - Professional workflow

---

## Basic Git Workflow

\`\`\`bash
git init              # Initialize repository
git add .             # Stage all changes
git commit -m "message"  # Commit with message
git push origin main  # Push to remote
\`\`\`

---

## Checking Status

\`\`\`bash
git status      # Show file status
git log         # Show commit history
git diff        # Show changes
\`\`\`

---

## Branches

\`\`\`bash
git branch              # List branches
git branch new-feature  # Create new branch
git checkout new-feature  # Switch branch
git merge new-feature   # Merge into main
\`\`\`

---

## Undoing Changes

\`\`\`bash
git restore file.py      # Discard changes
git reset HEAD~1         # Undo last commit
git revert HASH          # Revert specific commit
\`\`\`

---

## ✅ Key Points to Remember

- Commit often with clear messages
- Use branches for new features
- Pull before pushing
- Review changes before committing
- Keep history clean

---

## ❌ Common Mistakes to Avoid

- **Large commits:** Make small, focused commits
- **Bad commit messages:** Write clear, descriptive messages
- **Force pushing:** Avoid \`git push -f\` unless necessary
- **Committing secrets:** Use .gitignore for API keys
- **Not pulling:** Always pull before pushing

---

## 🖥️ HYBRID LEARNING ACTIVITIES

### Activity 1: GitHub Web Interface (Browser-Based!)

Perfect for understanding Git concepts without CLI:

1. **Create a GitHub Account**
   - Go to https://github.com
   - Sign up (free!)

2. **Create a Repository**
   - Click "+" icon → "New repository"
   - Name it \`python-learning\`
   - Check "Add README"
   - Click "Create"

3. **Add Files via Web UI**
   - Click "Add file" → "Create new file"
   - Name: \`hello.py\`
   - Content: \`print("Hello from GitHub!")\`
   - Click "Commit new file"

4. **Make Changes**
   - Click the file
   - Click edit icon (pencil)
   - Change code
   - Click "Commit changes"

5. **View History**
   - Click "Commits" tab
   - See all changes and messages

✅ **Advantage:** No installation needed, visual, great for learning!

---

### Activity 2: Git CLI (Local Computer!)

After learning concepts, practice CLI:

1. **Install Git**
   - Download: https://git-scm.com/download
   - Install for your platform
   - Verify: \`git --version\`

2. **Configure Git**
   \`\`\`bash
   git config --global user.name "Your Name"
   git config --global user.email "your@email.com"
   \`\`\`

3. **Create Local Repository**
   \`\`\`bash
   mkdir my-project
   cd my-project
   git init
   \`\`\`

4. **Make First Commit**
   \`\`\`bash
   echo "print('Hello')" > hello.py
   git add hello.py
   git commit -m "Initial commit"
   \`\`\`

5. **Check History**
   \`\`\`bash
   git log
   git status
   \`\`\`

6. **Create and Merge Branches**
   \`\`\`bash
   git branch feature
   git checkout feature
   # Make changes...
   git add .
   git commit -m "Add feature"
   git checkout main
   git merge feature
   \`\`\`

---

## 📚 Resources
- [Git Tutorial](https://www.w3schools.com/git/)
- [GitHub Guide](https://guides.github.com/)
- [Pro Git Book](https://git-scm.com/book/)
- [Git for Beginners](https://www.youtube.com/watch?v=RGOj5yH7evk) (Video)

---

## 🎯 Practice Challenge

1. Create a GitHub account and repo (if you haven't)
2. Add a Python file via web interface
3. Make a commit with a good message
4. Take a screenshot of your repository
5. Later: Clone a repo locally and practice Git CLI`,
      challenge: `# CONCEPTUAL LEARNING
print("✓ Git tracks changes over time")
print("✓ Branches allow parallel development")
print("✓ Commits create a history")
print()
print("Next steps:")
print("1. Create GitHub account")
print("2. Create repository")
print("3. Add files via web interface")
print("4. Practice Git CLI locally")`,
      resources: [
        { name: "Git Tutorial", url: "https://www.w3schools.com/git/" },
        { name: "GitHub Guides", url: "https://guides.github.com/" },
        { name: "Pro Git Book", url: "https://git-scm.com/book/" },
        { name: "Git for Beginners Video", url: "https://www.youtube.com/watch?v=RGOj5yH7evk" }
      ],
      expectedOutput: "✓ Git tracks changes over time\n✓ Branches allow parallel development\n✓ Commits create a history\n\nNext steps:\n1. Create GitHub account\n2. Create repository\n3. Add files via web interface\n4. Practice Git CLI locally"
    }
  ],
  project: { title: "API Data Tool", desc: "Build a tool that fetches and processes API data" }
};
