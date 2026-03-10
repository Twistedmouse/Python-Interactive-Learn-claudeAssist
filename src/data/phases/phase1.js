export const phase1 = {
  id: 1,
  title: "Python Foundations",
  duration: "Weeks 1–4",
  hours: "5–8 hrs/week",
  color: "#00d4aa",
  icon: "🌱",
  tagline: "Master the basics",
  description: "Learn Python syntax, data structures, and control flow.",
  topics: [
    { name: "Variables, Types & Operators", brief: "Understand data types and basic operations", instruction: `## 💡 Concept: Variables and Data Types

In Python, you assign values without declaring types. The language figures it out automatically.

### Python vs JavaScript

**JavaScript:**
\`\`\`javascript
let age = 25;  // Need 'let' keyword
let name = "Alice";  // Type explicitly set
\`\`\`

**Python:**
\`\`\`python
age = 25  // No type declaration!
name = "Alice"  // Python knows it's a string
\`\`\`

Python automatically determines the type (int, str, float, bool, etc.)

---

## 📚 Step-by-Step Instructions

### Step 1: Create a variable called 'name'
Assign it your name as a string (use quotes)
\`\`\`python
name = "John"
\`\`\`

### Step 2: Create a variable called 'age'
Assign it your age as a number (integer)
\`\`\`python
age = 25
\`\`\`

### Step 3: Create a variable called 'height'
Assign it your height as a float (decimal number)
\`\`\`python
height = 5.9
\`\`\`

### Step 4: Use operators
Add 5 to your age and store in a new variable
\`\`\`python
future_age = age + 5
\`\`\`

### Step 5: Print all variables
Use print() to display each one
\`\`\`python
print(name)
print(age)
print(height)
print(future_age)
\`\`\`

### Step 6: Run and verify
Click "▶ Run Code" and check the terminal output

---

## 🎯 Expected Output

You should see four lines:
\`\`\`
John
25
5.9
30
\`\`\`

---

## ✅ Key Points to Remember

- Variables are containers for storing values
- Python auto-detects types (you don't declare them)
- Common operators: +, -, *, /, //, %, **
- No need for 'var', 'let', or 'const' like JavaScript
- Variable names are case-sensitive: \`Name\` ≠ \`name\`
- Use descriptive variable names: \`user_age\` better than \`ua\`

---

## ❌ Common Mistakes to Avoid

- **Forgetting quotes around strings:** \`name = John\` ❌ (won't work!)
- **Using spaces in variable names:** \`my age = 25\` ❌ (invalid)
- **Starting with numbers:** \`2fast = 100\` ❌ (invalid)
- **Using Python keywords as names:** \`class = 5\` ❌ (reserved word)
- **Confusing = with ==:** \`x = 5\` (assignment) vs \`x == 5\` (comparison)`, challenge: `name = "John"
age = 25
height = 5.9
future_age = age + 5

print(name)
print(age)
print(height)
print(future_age)`, resources: [{ name: "Python Variables", url: "https://www.w3schools.com/python/python_variables.asp" }, { name: "Python Data Types", url: "https://www.w3schools.com/python/python_datatypes.asp" }, { name: "Python Operators", url: "https://www.w3schools.com/python/python_operators.asp" }], expectedOutput: "John\n25\n5.9\n30" },
    { name: "Lists, Dicts, Tuples, Sets", brief: "Work with collections of data", instruction: `## 📦 Collections: Storing Multiple Values

Python provides four main collection types. Each serves a different purpose.

---

## Lists: Ordered, Changeable \`[]\`

Lists are like arrays in JavaScript.
- Can add/remove items ✅
- Can change items ✅
- Duplicates allowed ✅
- Order matters ✅

\`\`\`python
fruits = ["apple", "banana", "orange"]
print(fruits[0])  # "apple" (index 0 is first)
fruits.append("grape")  # Add item
fruits[0] = "mango"  # Change first item
\`\`\`

---

## Dictionaries: Key-Value Pairs \`{}\`

Dictionaries are like objects in JavaScript.
- Access by key, not index
- Perfect for structured data
- Fast lookups
- Keys should be unique

\`\`\`python
person = {"name": "John", "age": 25, "city": "NYC"}
print(person["name"])  # "John"
person["age"] = 26  # Update value
person["job"] = "Developer"  # Add new key-value
\`\`\`

---

## Tuples: Ordered, Unchangeable \`()\`

Tuples are like lists but immutable (can't change).
- Like lists but immutable
- Faster than lists
- Can't add/remove/change
- Used when you want "locked" data

\`\`\`python
coordinates = (10, 20, 30)
print(coordinates[0])  # 10
# coordinates[0] = 5  # ERROR! Can't change
\`\`\`

---

## Sets: Unordered, Unique \`{}\`

Sets store unique values only.
- No duplicates
- No index access
- Fast membership checking
- Order doesn't matter

\`\`\`python
colors = {"red", "blue", "green"}
colors.add("yellow")
print(colors)  # {"red", "blue", "green", "yellow"}
\`\`\`

---

## When to Use Each

| Type | Use When | Example |
|------|----------|---------|
| List | Need ordered, changeable data | Shopping list, scores |
| Dict | Need key-value mapping | User profile, config |
| Tuple | Need immutable data | Coordinates, RGB values |
| Set | Need unique values only | Tags, categories |

---

## ✅ Key Points to Remember

- Lists are flexible and most commonly used
- Dicts are perfect for structured data with names
- Tuples are great for protecting data from changes
- Sets are useful for removing duplicates
- All can be nested inside each other

---

## ❌ Common Mistakes to Avoid

- **Using == instead of assignment:** \`list[0] == 5\` (comparison) vs \`list[0] = 5\` (assignment)
- **Forgetting dict keys need quotes:** \`person[name]\` ❌ should be \`person["name"]\`
- **Trying to modify tuples:** Tuples are immutable, you can't change them!
- **Thinking sets maintain order:** They don't - use lists if you need order
- **Forgetting dict keys must be unique:** Last value wins if you repeat a key`, challenge: `fruits = ["apple", "banana", "orange"]
person = {"name": "Alice", "age": 30}
numbers = (1, 2, 3)
colors = {"red", "blue", "green"}

print(fruits[0])
print(person["name"])
print(numbers[1])
print(len(colors))`, resources: [{ name: "Python Lists", url: "https://www.w3schools.com/python/python_lists.asp" }, { name: "Python Dicts", url: "https://www.w3schools.com/python/python_dictionaries.asp" }, { name: "Python Tuples", url: "https://www.w3schools.com/python/python_tuples.asp" }, { name: "Python Sets", url: "https://www.w3schools.com/python/python_sets.asp" }], expectedOutput: "apple\nAlice\n2\n3" },
    { name: "Loops & Conditionals", brief: "Control program flow with if/for/while", instruction: `## 🔀 Control Flow: Making Decisions & Repeating

Control flow lets your program make decisions and repeat actions based on conditions.

---

## IF Statements: Make Decisions

Use IF to check conditions and execute code based on the result.

\`\`\`python
age = 20

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")
\`\`\`

---

## FOR Loops: Repeat a Fixed Number of Times

Loop through a collection or repeat a specific number of times.

\`\`\`python
# Loop through a list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(fruit)

# Loop a number of times
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)
\`\`\`

---

## WHILE Loops: Repeat Until Condition is False

Keeps looping as long as a condition is true.

\`\`\`python
count = 0
while count < 5:
    print(count)
    count = count + 1
\`\`\`

---

## IF-ELIF-ELSE: Multiple Conditions

Check multiple conditions in order.

\`\`\`python
grade = 85

if grade >= 90:
    print("A")
elif grade >= 80:
    print("B")
elif grade >= 70:
    print("C")
else:
    print("F")
\`\`\`

---

## BREAK: Exit Loop Early

Stop looping immediately.

\`\`\`python
for i in range(10):
    if i == 5:
        break  # Stop looping
    print(i)  # Prints 0, 1, 2, 3, 4
\`\`\`

---

## CONTINUE: Skip to Next Iteration

Skip the current iteration and go to the next.

\`\`\`python
for i in range(5):
    if i == 2:
        continue  # Skip this one
    print(i)  # Prints 0, 1, 3, 4
\`\`\`

---

## ✅ Key Points to Remember

- \`if\` checks one condition
- \`elif\` checks additional conditions
- \`else\` executes if no conditions are true
- \`for\` loops over items in a collection
- \`while\` loops while condition is true
- \`break\` exits the loop early
- \`continue\` skips to next iteration
- Indentation is CRITICAL in Python!

---

## ❌ Common Mistakes to Avoid

- **Forgetting the colon:** \`if age >= 18\` ❌ should be \`if age >= 18:\`
- **Wrong indentation:** Python requires proper indentation for blocks
- **Using = instead of ==:** \`if age = 18\` ❌ should be \`if age == 18\`
- **Infinite loops:** Make sure your while condition eventually becomes false
- **Off-by-one errors:** \`range(5)\` goes 0-4, not 1-5`, challenge: `numbers = [2, 4, 6, 8, 10]

for num in numbers:
    if num > 5:
        print(f"{num} is greater than 5")
    else:
        print(f"{num} is 5 or less")`, resources: [{ name: "Python If Else", url: "https://www.w3schools.com/python/python_conditions.asp" }, { name: "Python For Loops", url: "https://www.w3schools.com/python/python_for_loops.asp" }, { name: "Python While Loops", url: "https://www.w3schools.com/python/python_while_loops.asp" }], expectedOutput: "2 is 5 or less\n4 is 5 or less\n6 is greater than 5\n8 is greater than 5\n10 is greater than 5" },
    { name: "Functions & Scope", brief: "Write reusable code blocks", instruction: `## 🔧 Functions: Reusable Code Blocks

Functions let you write code once and use it many times.

---

## Basic Function

\`\`\`python
def greet(name):
    return f"Hello, {name}!"

result = greet("Alice")
print(result)  # "Hello, Alice!"
\`\`\`

---

## Parameters & Return Values

\`\`\`python
def add(a, b):
    return a + b

sum = add(5, 3)  # 8
\`\`\`

---

## Default Parameters

\`\`\`python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("John"))  # "Hello, John!"
print(greet("Jane", "Hi"))  # "Hi, Jane!"
\`\`\`

---

## Multiple Return Values

\`\`\`python
def get_name_and_age():
    return "John", 25

name, age = get_name_and_age()
\`\`\`

---

## Scope: Local vs Global

\`\`\`python
global_var = 10  # Global scope

def my_function():
    local_var = 5  # Local scope
    print(global_var)  # Can access global

my_function()
# print(local_var)  # ERROR - doesn't exist outside function
\`\`\`

---

## 📚 Step-by-Step Instructions

### Step 1: Define a function
Use \`def\` keyword followed by function name and parentheses

### Step 2: Add parameters
List what inputs the function needs

### Step 3: Write the function body
Indented code that does the work

### Step 4: Return a value
Use \`return\` to send back the result

### Step 5: Call the function
Use the function name with arguments

---

## ✅ Key Points to Remember

- Functions avoid repetition
- Parameters are inputs
- Return values are outputs
- Local variables only exist in function
- Global variables accessible everywhere
- Use meaningful function names
- Keep functions focused on one task

---

## ❌ Common Mistakes to Avoid

- **Forgetting the colon:** \`def greet(name)\` ❌ should be \`def greet(name):\`
- **Forgetting to return:** Function returns \`None\` if no return statement
- **Using undefined variables:** Variables defined in function don't exist outside
- **Wrong number of arguments:** Function expects exact number of parameters
- **Confusing parameters with arguments:** Parameters are in definition, arguments are when calling`, challenge: `def calculate_age(birth_year):
    current_year = 2024
    return current_year - birth_year

age = calculate_age(2000)
print(age)`, resources: [{ name: "Python Functions", url: "https://www.w3schools.com/python/python_functions.asp" }, { name: "Python Scope", url: "https://www.w3schools.com/python/python_scope.asp" }], expectedOutput: "24" },
    { name: "File I/O", brief: "Read and write files", instruction: `## 📁 File Operations

**🔄 HYBRID LEARNING MODE** - This topic works best with both browser simulation AND local practice!

---

## Why Browser + Local?

The browser has a **sandboxed filesystem** - we can't create real files. But you can:
1. Learn concepts and practice logic in the browser
2. Do hands-on practice with REAL files on your computer

This hybrid approach gives you both theoretical understanding AND practical experience!

---

## Reading Files

\`\`\`python
with open("file.txt", "r") as f:
    content = f.read()
    print(content)
\`\`\`

---

## Writing Files

\`\`\`python
with open("file.txt", "w") as f:
    f.write("Hello World")
\`\`\`

---

## Appending to Files

\`\`\`python
with open("file.txt", "a") as f:
    f.write("\\nNew line")
\`\`\`

---

## Reading Line by Line

\`\`\`python
with open("file.txt", "r") as f:
    for line in f:
        print(line.strip())
\`\`\`

---

## 📚 File Modes

- **"r"** - Read (default, file must exist)
- **"w"** - Write (creates new file, overwrites if exists)
- **"a"** - Append (adds to end of file)
- **"x"** - Create (creates new file, errors if exists)

---

## ✅ Key Points to Remember

- Always use \`with\` statement
- \`with\` auto-closes file
- "r" = read, "w" = write, "a" = append
- Use \`.strip()\` to remove whitespace
- Always close files when done

---

## ❌ Common Mistakes to Avoid

- **Forgetting to close files:** Always use \`with\` statement
- **Using "w" when you meant "a":** Will overwrite the file!
- **Not handling missing files:** Use try-except for error handling
- **Forgetting the newline:** Use "\\n" to create new lines
- **Reading without checking if file exists:** Use try-except

---

## 🖥️ LOCAL PRACTICE GUIDE

After completing the browser simulation below, practice with REAL files on your computer:

### Step 1: Create test.txt
Create a file named \`test.txt\` with these contents:
\`\`\`
Apple
Banana
Orange
\`\`\`

### Step 2: Read the file
\`\`\`python
with open("test.txt", "r") as f:
    content = f.read()
    print(content)
\`\`\`

### Step 3: Write to a new file
\`\`\`python
fruits = ["Apple", "Banana", "Orange"]
with open("output.txt", "w") as f:
    for fruit in fruits:
        f.write(fruit + "\\n")
\`\`\`

### Step 4: Append to existing file
\`\`\`python
with open("output.txt", "a") as f:
    f.write("Grape\\n")
\`\`\`

### Step 5: Verify
Check that output.txt now has 4 fruits!

---

## 📚 Resources for Local Practice
- [Python File Handling](https://www.w3schools.com/python/python_file_handling.asp)
- [Working with Files (Real Python)](https://realpython.com/read-write-files-python/)`, challenge: `# BROWSER SIMULATION: File operations with strings
# In the browser, we simulate files using string data

# Simulate reading a file
file_content = "Apple\\nBanana\\nOrange"
print("File content:")
print(file_content)
print()

# Simulate processing lines
lines = file_content.split("\\n")
print(f"Number of lines: {len(lines)}")
print("First line: " + lines[0])
print()

# Simulate appending
updated_content = file_content + "\\nGrape"
print("After appending Grape:")
print(updated_content)`, resources: [{ name: "Python File Handling", url: "https://www.w3schools.com/python/python_file_handling.asp" }, { name: "Working with Files", url: "https://realpython.com/read-write-files-python/" }], expectedOutput: "File content:\nApple\nBanana\nOrange\n\nNumber of lines: 3\nFirst line: Apple\n\nAfter appending Grape:\nApple\nBanana\nOrange\nGrape" },
    { name: "Error Handling", brief: "Try/except for error management", instruction: `## 🛡️ Exception Handling

Handling errors gracefully makes programs robust.

---

## Try/Except

\`\`\`python
try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
\`\`\`

---

## Multiple Except Blocks

\`\`\`python
try:
    x = int("abc")
except ValueError:
    print("Invalid number")
except ZeroDivisionError:
    print("Division by zero")
\`\`\`

---

## Finally Block

\`\`\`python
try:
    file = open("data.txt")
except FileNotFoundError:
    print("File not found")
finally:
    print("Cleanup code")
\`\`\`

---

## Raising Exceptions

\`\`\`python
if age < 0:
    raise ValueError("Age cannot be negative")
\`\`\`

---

## Common Exception Types

- **ValueError** - Wrong type of value
- **TypeError** - Wrong data type
- **KeyError** - Key not found in dict
- **IndexError** - Index out of range
- **FileNotFoundError** - File doesn't exist
- **ZeroDivisionError** - Division by zero

---

## ✅ Key Points to Remember

- \`try\` block contains risky code
- \`except\` catches specific errors
- \`finally\` always runs
- Catch specific exceptions, not generic ones
- Use error messages to help debug

---

## ❌ Common Mistakes to Avoid

- **Too broad except clauses:** Catch specific exceptions
- **Not handling specific errors:** Use \`except ValueError:\` not \`except:\`
- **Ignoring exceptions silently:** Always log or report errors
- **Catching Exception base class:** Too broad
- **Not using finally for cleanup:** Always close resources`, challenge: `try:
    x = 10 / 2
    print(f"Result: {x}")
except ZeroDivisionError:
    print("Cannot divide by zero")`, resources: [{ name: "Python Try Except", url: "https://www.w3schools.com/python/python_try_except.asp" }], expectedOutput: "Result: 5.0" },
    { name: "Modules & pip", brief: "Import modules and use pip", instruction: `## 📦 Modules & Packages

**🔄 HYBRID LEARNING MODE** - Browser learning + Local pip practice!

The browser environment has limited external package support. But many built-in modules ARE available!

---

## Importing Modules

\`\`\`python
import math
print(math.sqrt(16))  # 4.0
\`\`\`

---

## From Import

\`\`\`python
from datetime import datetime
now = datetime.now()
\`\`\`

---

## Available in Browser (Practice These!)

✅ These modules work in the browser:
- **math** - Mathematical functions
- **datetime** - Date and time
- **json** - JSON handling
- **random** - Random number generation
- **re** - Regular expressions
- **collections** - Advanced data structures

---

## pip - Package Manager

On your computer, install packages with:

\`\`\`bash
pip install requests
pip install pandas
pip list
\`\`\`

---

## Using External Packages (Local Practice)

Once installed on your computer:

\`\`\`python
import requests
response = requests.get("https://api.example.com")
\`\`\`

---

## Creating Your Own Module

\`\`\`python
# math_utils.py
def add(a, b):
    return a + b

# main.py
import math_utils
print(math_utils.add(5, 3))
\`\`\`

---

## ✅ Key Points to Remember

- Modules extend Python functionality
- \`import\` brings entire module
- \`from X import Y\` brings specific item
- pip installs third-party packages
- Installed packages go to site-packages

---

## 🖥️ LOCAL PRACTICE GUIDE

### Step 1: Create a Virtual Environment
\`\`\`bash
# Windows
python -m venv myenv
myenv\\Scripts\\activate

# Mac/Linux
python3 -m venv myenv
source myenv/bin/activate
\`\`\`

### Step 2: Install a Package
\`\`\`bash
pip install requests
\`\`\`

### Step 3: Use It in Your Code
\`\`\`python
import requests

response = requests.get("https://jsonplaceholder.typicode.com/posts/1")
data = response.json()
print(data['title'])
\`\`\`

### Step 4: Check Installed Packages
\`\`\`bash
pip list
pip show requests
\`\`\`

### Step 5: Create requirements.txt
\`\`\`bash
pip freeze > requirements.txt
\`\`\`

---

## 📚 Resources
- [pip Documentation](https://pip.pypa.io/)
- [Creating Virtual Environments](https://docs.python.org/3/tutorial/venv.html)
- [Popular Python Packages](https://pypi.org/)

---

## ❌ Common Mistakes to Avoid

- **Forgetting to install before importing:** Use \`pip install\` first
- **Wrong import syntax:** \`import X\` vs \`from X import Y\`
- **Circular imports:** Don't import A from B and B from A
- **Module name conflicts:** Don't name your file same as library
- **Forgetting module prefix:** \`math.sqrt()\` not just \`sqrt()\``, challenge: `import math
import random
import datetime

# Browser-available modules
radius = 5
area = math.pi * radius ** 2

random_num = random.randint(1, 100)
now = datetime.datetime.now()

print(f"Area: {area:.2f}")
print(f"Random: {random_num}")
print(f"Time: {now.strftime('%H:%M:%S')}")`, resources: [{ name: "Python Modules", url: "https://www.w3schools.com/python/python_modules.asp" }, { name: "pip documentation", url: "https://pip.pypa.io/" }, { name: "Virtual Environments", url: "https://docs.python.org/3/tutorial/venv.html" }], expectedOutput: "Area: 78.50\nRandom: " },
  ],
  project: { title: "Calculator App", desc: "Build a simple calculator" }
};
