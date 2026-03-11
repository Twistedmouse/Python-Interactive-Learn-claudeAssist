// Package Organization with __init__.py Topic
export const packageOrganization = {
  name: "Package Organization with __init__.py",
  brief: "Organize Python code into packages using __init__.py for shallow and deep imports",
  instruction: `
## Package Organization with __init__.py

The **__init__.py** file makes a folder a Python package and controls what gets imported. It's essential for organizing large projects.

### What is __init__.py?

Every folder with an __init__.py becomes a **package**:

\`\`\`
my_project/
├── __init__.py           # Makes my_project a package
├── utils/
│   ├── __init__.py       # Makes utils a package
│   ├── helpers.py
│   └── validators.py
├── models/
│   ├── __init__.py       # Makes models a package
│   └── user.py
└── main.py
\`\`\`

### Shallow vs Deep Imports

**Deep import** (what you normally do):
\`\`\`python
from my_project.utils.helpers import validate_email
from my_project.models.user import User
\`\`\`

**Shallow import** (using __init__.py):
\`\`\`python
from my_project.utils import validate_email
from my_project.models import User
\`\`\`

Much cleaner! Users don't need to know the file structure.

### How to Use __init__.py

**Before** (without __init__.py):
\`\`\`
my_app/
├── helpers/
│   └── validation.py
└── main.py

# In main.py - deep and ugly
from my_app.helpers.validation import check_email
\`\`\`

**After** (with __init__.py):
\`\`\`
my_app/
├── helpers/
│   ├── __init__.py          # ← Add this
│   └── validation.py
└── main.py

# my_app/helpers/__init__.py
from .validation import check_email, check_phone

# In main.py - shallow and clean
from my_app.helpers import check_email
\`\`\`

### Real-World Example

**Project structure:**
\`\`\`
ecommerce/
├── __init__.py
├── api/
│   ├── __init__.py
│   ├── routes.py
│   └── auth.py
├── database/
│   ├── __init__.py
│   ├── models.py
│   └── queries.py
└── main.py
\`\`\`

**ecommerce/__init__.py**
\`\`\`python
# Make key things available at package level
from .api import get_app
from .database import init_db

__all__ = ["get_app", "init_db"]
\`\`\`

**ecommerce/api/__init__.py**
\`\`\`python
from .routes import router
from .auth import authenticate_user

__all__ = ["router", "authenticate_user"]
\`\`\`

**Now users can do:**
\`\`\`python
# Shallow imports - clean and simple!
from ecommerce import get_app, init_db
from ecommerce.api import router, authenticate_user
\`\`\`

### Why __init__.py Matters

✅ **Cleaner imports** - Hide internal structure  
✅ **Better API** - Control what users access  
✅ **Easier refactoring** - Change internals without breaking imports  
✅ **Professional** - Standard practice in production code  
✅ **Package initialization** - Run setup code when package loads  

### Real Example: Django/FastAPI

Django and FastAPI use this heavily:

\`\`\`python
# You don't see the file structure
from django.shortcuts import render
from fastapi import FastAPI

# They use __init__.py to expose simple APIs
\`\`\`

### Special Variables

**__all__** - Controls what gets imported with *:
\`\`\`python
# mypackage/__init__.py
__all__ = ["function_a", "function_b"]

# Only function_a and function_b imported
from mypackage import *
\`\`\`

**__version__** - Version number:
\`\`\`python
# mypackage/__init__.py
__version__ = "1.0.0"

# Users can check version
from mypackage import __version__
print(__version__)  # "1.0.0"
\`\`\`

### Key Takeaway

__init__.py creates a clean interface for your package. Users see a simple API, while your code can be as organized as needed internally!

## 🖥️ LOCAL PRACTICE GUIDE

1. **Create a package structure**
   - Make folders with __init__.py files
   - Define functions in separate modules
   - Import them in __init__.py

2. **Create shallow imports**
   - Use __init__.py to re-export functions
   - Test importing from package root
   - Verify cleaner than deep imports

3. **Build a small library**
   - Create myutils/ package
   - Add multiple modules (math.py, strings.py)
   - Use __init__.py to create simple API
   - Test from another project

4. **Check real projects**
   - Look at numpy, requests, flask source
   - See how they use __init__.py
   - Understand professional patterns
  `,
  resources: [
    { 
      url: "https://docs.python.org/3/tutorial/modules.html#packages", 
      name: "Python Packages Tutorial"
    },
    { 
      url: "https://realpython.com/python-modules-packages/", 
      name: "Real Python Modules & Packages"
    },
    { 
      url: "https://github.com/requests/requests/tree/main/requests", 
      name: "Real Example: Requests Library"
    }
  ]
};
