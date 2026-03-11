// Type Hints & Pydantic Validation Topic
export const typeHintsAndPydantic = {
  name: "Type Hints & Pydantic Validation",
  brief: "Master type hints for better code and use Pydantic for automatic data validation",
  instruction: `
## Type Hints & Pydantic Validation

**Type hints** tell Python what type a variable should be. **Pydantic** validates that data matches the expected types automatically.

### Why Type Hints Matter

Without type hints, Python doesn't care:
\`\`\`python
# No validation - could be anything!
def add(a, b):
    return a + b

result = add("hello", "world")  # Works, but weird!
result = add(5, "ten")  # Works, but wrong!
\`\`\`

With type hints:
\`\`\`python
# Clear intention
def add(a: int, b: int) -> int:
    return a + b

result = add(5, 10)  # ✓ Correct
result = add("5", "10")  # ✗ Wrong type (IDE warns)
\`\`\`

### Basic Type Hints

\`\`\`python
# Simple types
name: str = "Alice"
age: int = 25
score: float = 95.5
active: bool = True

# Collections
numbers: list[int] = [1, 2, 3]
pairs: dict[str, int] = {"a": 1, "b": 2}
items: tuple[str, int] = ("apple", 5)

# Functions
def greet(name: str) -> str:
    return f"Hello, {name}!"

def calculate(x: float, y: float) -> float:
    return x + y
\`\`\`

### Pydantic for Data Validation

Pydantic automatically validates data when creating objects:

\`\`\`python
from pydantic import BaseModel, ValidationError

class User(BaseModel):
    name: str
    age: int
    email: str

# ✓ Valid
user = User(name="Alice", age=25, email="alice@example.com")

# ✗ Invalid - age is string, not int
try:
    user = User(name="Bob", age="twenty", email="bob@example.com")
except ValidationError as e:
    print(f"Error: {e}")
\`\`\`

### Real-World Example

API request validation:

\`\`\`python
from pydantic import BaseModel, EmailStr

class SignupRequest(BaseModel):
    name: str
    email: EmailStr
    age: int
    
    # Validation rules
    class Config:
        validate_assignment = True

# Data from form
data = {
    "name": "John",
    "email": "john@example.com",
    "age": 30
}

# Automatically validated
request = SignupRequest(**data)
print(request.name)  # "John"
\`\`\`

### Benefits

✅ **Catches errors early** - Wrong types fail immediately  
✅ **Better IDE support** - Auto-complete and type checking  
✅ **Self-documenting code** - Types show what's expected  
✅ **Production-ready** - Essential for APIs and services  
✅ **Less debugging** - Know exactly what went wrong  

### Key Takeaway

Type hints + Pydantic = **safer, cleaner, professional code** that catches bugs before users see them!

## 🖥️ LOCAL PRACTICE GUIDE

1. **Install Pydantic**
   \`\`\`bash
   pip install pydantic
   \`\`\`

2. **Create a user validation script**
   - Define a Pydantic model for users
   - Test with valid data
   - Test with invalid data
   - See validation errors

3. **Build a simple API validator**
   - Create models for requests
   - Validate incoming data
   - Return errors for bad data

4. **Try FastAPI** (uses Pydantic!)
   - FastAPI automatically validates requests
   - See Pydantic in action
   - Test with curl or Postman
  `,
  resources: [
    { 
      url: "https://docs.python.org/3/library/typing.html", 
      name: "Python Type Hints Docs"
    },
    { 
      url: "https://docs.pydantic.dev/", 
      name: "Pydantic Official Docs"
    },
    { 
      url: "https://realpython.com/python-type-checking/", 
      name: "Real Python Type Checking Guide"
    }
  ]
};
