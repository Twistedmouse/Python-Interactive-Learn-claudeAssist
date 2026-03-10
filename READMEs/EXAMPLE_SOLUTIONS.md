# 📚 Example Solutions – Reference Only

These are example solutions for the first few topics. **Try to solve them yourself first!** Only look here if you get stuck.

---

## Phase 1: Python Foundations

### Topic 1: Variables, Types & Operators

**Challenge:** Create variables for name, age, calculate future age, and print all three.

**Example Solution:**
```python
name = "John"
age = 25
future_age = age + 5

print(name)
print(age)
print(future_age)
```

**Output:**
```
John
25
30
```

**Alternative (More Pythonic with f-strings):**
```python
name = "John"
age = 25
future_age = age + 5

print(f"Name: {name}")
print(f"Current age: {age}")
print(f"Age in 5 years: {future_age}")
```

**Output:**
```
Name: John
Current age: 25
Age in 5 years: 30
```

---

### Topic 2: Lists, Dicts, Tuples, Sets

**Challenge:** Create a list of fruits, a dict with person info, access items, and append to the list.

**Example Solution:**
```python
# Create a list
fruits = ["apple", "banana", "orange"]

# Create a dict
person = {
    "name": "John",
    "age": 25,
    "city": "New York"
}

# Access items
print(fruits[0])        # First fruit
print(person["age"])    # Person's age

# Add a new fruit
fruits.append("mango")

# Print the updated list
print(fruits)
```

**Output:**
```
apple
25
['apple', 'banana', 'orange', 'mango']
```

**Alternative using different collections:**
```python
# Tuple (immutable - can't change)
coordinates = (10, 20)

# Set (unique values only)
colors = {"red", "blue", "green"}

# Combining
print(coordinates)  # (10, 20)
print(colors)       # Unordered, but unique
```

---

### Topic 3: Loops & Conditionals

**Challenge:** Loop through numbers, check if even/odd, and a countdown loop.

**Example Solution:**
```python
# For loop with if/else
for num in [1, 2, 3, 4, 5]:
    if num % 2 == 0:
        print(f"{num} is even")
    else:
        print(f"{num} is odd")

# While loop countdown
count = 5
while count > 0:
    print(count)
    count -= 1
```

**Output:**
```
1 is odd
2 is even
3 is odd
4 is even
5 is odd
5
4
3
2
1
```

**Alternative with range():**
```python
# Using range() is more Pythonic
for num in range(1, 6):
    status = "even" if num % 2 == 0 else "odd"
    print(f"{num} is {status}")
```

---

## Phase 2: Intermediate Python

### Topic 1: OOP — Classes & Objects

**Challenge:** Create a Car class with brand/model and a describe() method.

**Example Solution:**
```python
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def describe(self):
        return f"{self.brand} {self.model}"

# Create an instance
my_car = Car("Toyota", "Camry")

# Call the method
print(my_car.describe())
```

**Output:**
```
Toyota Camry
```

**Alternative (More Detailed):**
```python
class Car:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
    
    def describe(self):
        return f"{self.year} {self.brand} {self.model}"
    
    def honk(self):
        return f"{self.brand} goes HONK!"

my_car = Car("Toyota", "Camry", 2023)
print(my_car.describe())
print(my_car.honk())
```

**Output:**
```
2023 Toyota Camry
Toyota goes HONK!
```

---

## Phase 3: AI & LLM Fundamentals

### Topic 1: OpenAI / Anthropic API Basics

**Challenge:** Use the Anthropic API to ask Claude a simple question.

**Example Solution:**
```python
from anthropic import Anthropic

# Initialize the client
client = Anthropic(api_key="your-api-key-here")

# Create a message
response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=100,
    messages=[
        {"role": "user", "content": "What is 2+2?"}
    ]
)

# Extract and print the response
print(response.content[0].text)
```

**Output:**
```
2 + 2 = 4
```

**Alternative with Multiple Turns (Conversation):**
```python
from anthropic import Anthropic

client = Anthropic(api_key="your-api-key-here")

# Keep conversation history
messages = []

# First message
messages.append({"role": "user", "content": "What is Python?"})
response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=200,
    messages=messages
)
assistant_message = response.content[0].text
print(f"Claude: {assistant_message}")

# Add assistant's response to history
messages.append({"role": "assistant", "content": assistant_message})

# Follow-up question
messages.append({"role": "user", "content": "Tell me one cool thing about it"})
response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=200,
    messages=messages
)
print(f"Claude: {response.content[0].text}")
```

---

## Key Concepts to Remember

### Variables & Types
- In Python, types are assigned automatically
- Use `type(variable)` to check the type
- Common types: `int`, `str`, `float`, `list`, `dict`, `bool`

### Collections Comparison
| Type | Ordered | Mutable | Duplicates |
|------|---------|---------|-----------|
| List | ✓ | ✓ | ✓ |
| Dict | ✓ (Python 3.7+) | ✓ | Keys: no |
| Tuple | ✓ | ✗ | ✓ |
| Set | ✗ | ✓ | ✗ |

### Loop Patterns
```python
# For loop with range
for i in range(5):  # 0 to 4
    print(i)

# For loop with items
for item in my_list:
    print(item)

# While loop
while condition:
    # Do something
    condition = update()
```

### OOP Core Concepts
- **Class**: Blueprint for objects
- **`__init__`**: Constructor method (runs when you create an instance)
- **`self`**: Reference to the instance (like `this` in JavaScript)
- **Attributes**: Data (variables) that belong to the object
- **Methods**: Functions that belong to the object

### API Pattern
```python
from anthropic import Anthropic

client = Anthropic(api_key="...")

response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=100,
    messages=[
        {"role": "user", "content": "Your prompt here"}
    ]
)

result = response.content[0].text
```

---

## How to Use This File

1. **Try to solve challenges yourself first**
2. **Only look here if you're stuck** for 15+ minutes
3. **Study the solution** – understand why it works
4. **Try it again from scratch** without looking
5. **Explore the alternatives** – there are often multiple ways to solve the same problem

---

## Common Mistakes to Avoid

### Variables
❌ Using reserved words: `class`, `def`, `return`, `import`
✅ Use descriptive names: `user_name`, `total_price`

### Lists
❌ Forgetting that indexing starts at 0
❌ Trying to modify a tuple (it's immutable)
✅ Use `.append()` to add items, `.pop()` to remove

### Loops
❌ Infinite loops (while True without a break)
❌ Modifying a list while looping over it
✅ Use `enumerate()` if you need both index and value

### Classes
❌ Forgetting `self` in method definitions
❌ Not calling `__init__` properly (Python does it automatically)
✅ Always use `self.` for attributes

### API Calls
❌ Hardcoding API keys in code
❌ Not handling errors (network failures happen)
✅ Use environment variables: `os.getenv("ANTHROPIC_API_KEY")`

---

## Ready to Solve Your Own?

Go back to the tutorial and try the challenges! You've got this. 🚀
