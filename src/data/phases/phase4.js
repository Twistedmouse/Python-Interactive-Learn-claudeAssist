export const phase4 = {
  id: 4,
  title: "Production & Deployment",
  duration: "Weeks 17–22",
  hours: "8–12 hrs/week",
  color: "#f59e0b",
  icon: "🚀",
  tagline: "Ship to production",
  description: "Deploy applications to production and monitor them.",
  topics: [
    {
      name: "FastAPI Basics",
      brief: "Build fast modern web APIs",
      instruction: `## 🌐 FastAPI Web Framework

**🔄 HYBRID LEARNING MODE** - Learn FastAPI syntax in browser, run servers locally!

FastAPI makes building APIs simple and fast. Requires running a web server, which we can't do in browser.

---

## What is FastAPI?

FastAPI is a modern Python web framework:
- ⚡ Fast (high performance)
- 📝 Easy to write
- 📚 Auto-generated docs
- ✅ Built-in validation

---

## Basic FastAPI App

\`\`\`python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_available: bool = True

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}

@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id}

@app.post("/items/")
def create_item(item: Item):
    return item
\`\`\`

---

## Decorators

- **@app.get()** - HTTP GET request
- **@app.post()** - HTTP POST request
- **@app.put()** - HTTP PUT request
- **@app.delete()** - HTTP DELETE request

---

## Request & Response

\`\`\`python
from typing import Optional

@app.get("/users/{user_id}")
def get_user(user_id: int, skip: int = 0, limit: int = 10):
    return {"user_id": user_id, "skip": skip, "limit": limit}
\`\`\`

---

## ✅ Key Points

- FastAPI combines multiple Python libraries
- Pydantic for data validation
- Automatic API documentation
- Type hints for clarity
- Easy to deploy

---

## 🖥️ LOCAL PRACTICE GUIDE

### Step 1: Install FastAPI & Uvicorn

\`\`\`bash
pip install fastapi
pip install uvicorn
pip install pydantic
\`\`\`

### Step 2: Create main.py

\`\`\`python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="My API", version="1.0")

class User(BaseModel):
    name: str
    email: str
    age: int

@app.get("/")
def root():
    return {"message": "Welcome to My API"}

@app.get("/users/{user_id}")
def get_user(user_id: int):
    return {"user_id": user_id, "name": "John Doe"}

@app.post("/users/")
def create_user(user: User):
    return {"message": f"User {user.name} created", "user": user}
\`\`\`

### Step 3: Run the Server

\`\`\`bash
uvicorn main:app --reload
\`\`\`

Your API is now live at:
- http://localhost:8000
- Docs: http://localhost:8000/docs (interactive!)
- ReDoc: http://localhost:8000/redoc

### Step 4: Test Your API

**Using curl:**
\`\`\`bash
curl http://localhost:8000/

curl http://localhost:8000/users/1

curl -X POST http://localhost:8000/users/ \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Alice","email":"alice@example.com","age":30}'
\`\`\`

**Using Python:**
\`\`\`python
import requests

response = requests.get("http://localhost:8000/users/1")
print(response.json())
\`\`\`

### Step 5: Add More Features

\`\`\`python
# Error handling
from fastapi import HTTPException

@app.get("/items/{item_id}")
def get_item(item_id: int):
    if item_id < 0:
        raise HTTPException(status_code=400, detail="Invalid item ID")
    return {"item_id": item_id}

# Query parameters
@app.get("/search/")
def search(q: str, skip: int = 0, limit: int = 10):
    return {"query": q, "skip": skip, "limit": limit}
\`\`\`

---

## 📚 Resources
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Uvicorn Server](https://www.uvicorn.org/)
- [Pydantic Models](https://docs.pydantic.dev/)`,
      challenge: `# BROWSER: Understand FastAPI structure
api_endpoints = {
    "/": {"method": "GET", "returns": "Welcome message"},
    "/users/{id}": {"method": "GET", "returns": "User data"},
    "/users": {"method": "POST", "returns": "Created user"}
}

for path, details in api_endpoints.items():
    print(f"{details['method']} {path} -> {details['returns']}")`,
      resources: [
        { name: "FastAPI Docs", url: "https://fastapi.tiangolo.com/" },
        { name: "Uvicorn", url: "https://www.uvicorn.org/" },
        { name: "Pydantic", url: "https://docs.pydantic.dev/" }
      ],
      expectedOutput: "GET / -> Welcome message\nGET /users/{id} -> User data\nPOST /users -> Created user"
    },
    {
      name: "Streamlit for UIs",
      brief: "Build data apps and dashboards",
      instruction: `## 📊 Streamlit Web UI Framework

**🔄 HYBRID LEARNING MODE** - Learn Streamlit syntax in browser, build apps locally!

Streamlit turns Python scripts into web apps instantly!

---

## What is Streamlit?

Streamlit:
- Converts Python scripts to web apps
- No HTML/CSS/JavaScript needed
- Automatic layout and widgets
- Perfect for data apps and dashboards

---

## Basic Structure

\`\`\`python
import streamlit as st

st.title("My App")
st.header("Welcome")
st.write("Hello World!")
\`\`\`

---

## Widgets (User Input)

\`\`\`python
# Text input
name = st.text_input("Enter name:")

# Slider
age = st.slider("Age:", 0, 100, 25)

# Button
if st.button("Click me"):
    st.write("Button clicked!")

# Select box
choice = st.selectbox("Pick one:", ["A", "B", "C"])
\`\`\`

---

## Display Data

\`\`\`python
import pandas as pd

df = pd.DataFrame({
    "name": ["Alice", "Bob"],
    "age": [25, 30]
})

st.dataframe(df)
st.json({"key": "value"})
\`\`\`

---

## ✅ Key Points

- Pure Python, no web development needed
- Hot reload (auto-refresh on save)
- Great for prototyping
- Deploy easily
- Perfect for data visualization

---

## 🖥️ LOCAL PRACTICE GUIDE

### Step 1: Install Streamlit

\`\`\`bash
pip install streamlit
\`\`\`

### Step 2: Create app.py

\`\`\`python
import streamlit as st
import pandas as pd

# App title
st.set_page_config(page_title="My App", layout="wide")

st.title("💬 Chat App")
st.write("Built with Streamlit!")

# Sidebar
st.sidebar.header("Settings")
model = st.sidebar.selectbox("Model:", ["GPT-4", "Claude", "Local"])

# Main content
st.subheader("Features")
col1, col2 = st.columns(2)

with col1:
    st.metric("Messages", 42)

with col2:
    st.metric("Users", 5)

# Interactive widget
user_input = st.text_input("Your message:")
if st.button("Send"):
    st.write(f"You said: {user_input}")

# Display data
data = pd.DataFrame({
    "message": ["Hello", "Hi"],
    "sender": ["You", "Bot"]
})
st.dataframe(data)
\`\`\`

### Step 3: Run the App

\`\`\`bash
streamlit run app.py
\`\`\`

Your app opens at:
- http://localhost:8501

### Step 4: Add Dashboard Elements

\`\`\`python
import plotly.express as px

# Charts
df = pd.DataFrame({
    "month": ["Jan", "Feb", "Mar"],
    "sales": [100, 120, 150]
})

fig = px.bar(df, x="month", y="sales")
st.plotly_chart(fig)

# Metrics
col1, col2, col3 = st.columns(3)
col1.metric("Users", 1234)
col2.metric("Growth", "+5%")
col3.metric("Revenue", "\$5000")
\`\`\`

### Step 5: Deploy

\`\`\`bash
# Install deployment tool
pip install streamlit-cloud

# Or use Streamlit Cloud (free!)
# Push to GitHub, connect to Streamlit Cloud
\`\`\`

---

## 📚 Resources
- [Streamlit Docs](https://docs.streamlit.io/)
- [Components Gallery](https://streamlit.io/components)
- [Deployment Guide](https://docs.streamlit.io/streamlit-cloud/deploy-your-app)`,
      challenge: `# BROWSER: Understand Streamlit widgets
widgets = {
    "st.button": "Creates clickable button",
    "st.text_input": "Text input field",
    "st.slider": "Slider for numbers",
    "st.selectbox": "Dropdown selection",
    "st.dataframe": "Display table data"
}

for widget, description in widgets.items():
    print(f"{widget:20} -> {description}")`,
      resources: [
        { name: "Streamlit Docs", url: "https://docs.streamlit.io/" },
        { name: "Components", url: "https://streamlit.io/components" },
        { name: "Deployment", url: "https://docs.streamlit.io/streamlit-cloud/deploy-your-app" }
      ],
      expectedOutput: "st.button              -> Creates clickable button\nst.text_input         -> Text input field\nst.slider             -> Slider for numbers\nst.selectbox          -> Dropdown selection\nst.dataframe          -> Display table data"
    },
    {
      name: "Docker Basics",
      brief: "Containerize applications",
      instruction: `## 🐳 Docker Containerization

**🔄 HYBRID LEARNING MODE** - Learn Docker syntax in browser, build containers locally!

Docker packages your app with all dependencies into a container.

---

## What is Docker?

Docker:
- Packages app + dependencies
- Runs same everywhere
- Lightweight alternative to VMs
- Easy to scale

---

## Docker Concepts

- **Image** - Blueprint (like a recipe)
- **Container** - Running instance (like a cooked meal)
- **Dockerfile** - Instructions to build image
- **Registry** - Repository of images

---

## Basic Dockerfile

\`\`\`dockerfile
FROM python:3.11

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD ["python", "main.py"]
\`\`\`

---

## Docker Commands

\`\`\`bash
docker build -t myapp .           # Build image
docker run myapp                  # Run container
docker ps                         # List running
docker stop <container_id>        # Stop container
docker logs <container_id>        # View logs
\`\`\`

---

## ✅ Key Points

- Dockerfile defines the image
- Images are templates
- Containers are running instances
- Layer-based for efficiency
- Easy sharing and deployment

---

## 🖥️ LOCAL PRACTICE GUIDE

### Step 1: Install Docker

Download Docker Desktop:
- [Mac](https://www.docker.com/products/docker-desktop/)
- [Windows](https://www.docker.com/products/docker-desktop/)
- [Linux](https://docs.docker.com/engine/install/)

Verify:
\`\`\`bash
docker --version
docker run hello-world
\`\`\`

### Step 2: Create Dockerfile

\`\`\`dockerfile
FROM python:3.11-slim

WORKDIR /app

# Copy requirements
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy app
COPY . .

# Port
EXPOSE 8000

# Run
CMD ["python", "main.py"]
\`\`\`

### Step 3: Create requirements.txt

\`\`\`bash
fastapi==0.104.1
uvicorn==0.24.0
pydantic==2.5.0
\`\`\`

### Step 4: Create main.py

\`\`\`python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Hello from Docker!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
\`\`\`

### Step 5: Build Image

\`\`\`bash
docker build -t myapp:1.0 .
\`\`\`

### Step 6: Run Container

\`\`\`bash
docker run -p 8000:8000 myapp:1.0
\`\`\`

Visit: http://localhost:8000

### Step 7: Manage Containers

\`\`\`bash
# List running containers
docker ps

# List all containers
docker ps -a

# View logs
docker logs <container_id>

# Stop container
docker stop <container_id>

# Remove image
docker rmi myapp:1.0
\`\`\`

---

## 📚 Resources
- [Docker Docs](https://docs.docker.com/)
- [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)
- [Docker Hub](https://hub.docker.com/)`,
      challenge: `# BROWSER: Understand Docker layers
dockerfile_steps = [
    ("FROM python:3.11", "Base image"),
    ("WORKDIR /app", "Set working directory"),
    ("COPY . .", "Copy files"),
    ("RUN pip install", "Install dependencies"),
    ("EXPOSE 8000", "Expose port"),
    ("CMD python", "Run command")
]

for step, description in dockerfile_steps:
    print(f"{step:25} -> {description}")`,
      resources: [
        { name: "Docker Docs", url: "https://docs.docker.com/" },
        { name: "Dockerfile Reference", url: "https://docs.docker.com/engine/reference/builder/" },
        { name: "Docker Hub", url: "https://hub.docker.com/" }
      ],
      expectedOutput: "FROM python:3.11          -> Base image\nWORKDIR /app              -> Set working directory\nCOPY . .                  -> Copy files\nRUN pip install           -> Install dependencies\nEXPOSE 8000               -> Expose port\nCMD python                -> Run command"
    },
    {
      name: "Environment Variables & Secrets",
      brief: "Manage configuration securely",
      instruction: `## 🔐 Environment Variables & Secrets

**🔄 HYBRID LEARNING MODE** - Learn concepts in browser, manage secrets locally!

Never hardcode API keys! Use environment variables instead.

---

## What are Environment Variables?

Variables stored outside your code:
- API keys
- Database passwords
- Configuration settings
- Secrets

---

## .env File Format

\`\`\`
DATABASE_URL=postgresql://user:pass@localhost/db
API_KEY=sk-abc123xyz789
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
\`\`\`

---

## Loading .env Files

\`\`\`python
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv("API_KEY")
db_url = os.getenv("DATABASE_URL")
\`\`\`

---

## Best Practices

✅ Store .env in .gitignore
✅ Use different .env for different environments
✅ Never commit secrets
✅ Rotate keys regularly
✅ Log access to secrets

---

## ✅ Key Points

- Never hardcode secrets
- Use environment variables
- .env files for development
- Secrets management for production
- Rotate keys regularly

---

## 🖥️ LOCAL PRACTICE GUIDE

### Step 1: Install python-dotenv

\`\`\`bash
pip install python-dotenv
\`\`\`

### Step 2: Create .env File

\`\`\`.env
# API Keys
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/mydb

# Configuration
DEBUG=True
ENVIRONMENT=development
\`\`\`

### Step 3: Add to .gitignore

\`\`\`.gitignore
.env
.env.local
.env.*.local
\`\`\`

### Step 4: Load in Your Code

\`\`\`python
from dotenv import load_dotenv
import os

# Load .env file
load_dotenv()

# Access variables
api_key = os.getenv("OPENAI_API_KEY")
db_url = os.getenv("DATABASE_URL")
debug = os.getenv("DEBUG", "False") == "True"

print(f"API Key: {api_key[:10]}...")  # Show first 10 chars
print(f"Database: {db_url}")
print(f"Debug mode: {debug}")
\`\`\`

### Step 5: Use with FastAPI

\`\`\`python
from fastapi import FastAPI
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

API_KEY = os.getenv("OPENAI_API_KEY")
ENVIRONMENT = os.getenv("ENVIRONMENT", "development")

@app.startup_event
async def startup():
    print(f"Starting in {ENVIRONMENT} mode")

@app.get("/config")
def get_config():
    return {
        "environment": ENVIRONMENT,
        "api_key_exists": API_KEY is not None
    }
\`\`\`

### Step 6: Different Environments

**Development (.env):**
\`\`\`
DEBUG=True
DATABASE_URL=sqlite:///local.db
\`\`\`

**Production (via platform):**
Set environment variables through:
- Heroku Config Vars
- Docker --env flag
- Kubernetes secrets
- Cloud provider UI

### Step 7: Verify Not Committed

\`\`\`bash
# Check if .env is in .gitignore
cat .gitignore | grep .env

# Verify it's not tracked
git status
\`\`\`

---

## 📚 Resources
- [python-dotenv](https://github.com/theskumar/python-dotenv)
- [Security Best Practices](https://docs.python-guide.org/writing/security/)
- [12 Factor App](https://12factor.net/config)`,
      challenge: `# BROWSER: Understand secret management
variables = {
    "API_KEY": "sk-...",
    "DATABASE_URL": "postgresql://...",
    "ENVIRONMENT": "production",
    "DEBUG": "False"
}

print("Environment Variables (loaded from .env):")
for key, value in variables.items():
    # Show masked value for secrets
    if "KEY" in key or "PASSWORD" in key:
        print(f"{key}: {value[:5]}...{value[-5:]}")
    else:
        print(f"{key}: {value}")`,
      resources: [
        { name: "python-dotenv", url: "https://github.com/theskumar/python-dotenv" },
        { name: "Security Best Practices", url: "https://docs.python-guide.org/writing/security/" },
        { name: "12 Factor App", url: "https://12factor.net/config" }
      ],
      expectedOutput: "Environment Variables (loaded from .env):\nAPI_KEY: sk-...y789\nDATABASE_URL: postgr...odb\nENVIRONMENT: production\nDEBUG: False"
    },
    {
      name: "Logging & Monitoring",
      brief: "Track and debug applications",
      instruction: `## 📊 Logging & Monitoring

**✅ FULLY BROWSER COMPATIBLE** - This works perfectly in the browser!

Logging helps you understand what your code is doing and debug issues.

---

## Python Logging Levels

\`\`\`
DEBUG    - Detailed info for debugging
INFO     - General info (app started, etc)
WARNING  - Something unexpected happened
ERROR    - Serious problem (function failed)
CRITICAL - System is shutting down
\`\`\`

---

## Basic Logging

\`\`\`python
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)

# Create logger
logger = logging.getLogger(__name__)

# Log messages
logger.debug("This is a debug message")
logger.info("App started")
logger.warning("This is a warning")
logger.error("An error occurred")
\`\`\`

---

## Log Format

\`\`\`python
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)
\`\`\`

---

## Logging to File

\`\`\`python
logging.basicConfig(
    filename='app.log',
    level=logging.INFO
)
\`\`\`

---

## ✅ Key Points

- Log to understand behavior
- Use appropriate levels
- Include timestamps
- Track errors
- Monitor in production

---

## 🖥️ LOCAL PRACTICE GUIDE

### Step 1: Basic Setup

\`\`\`python
import logging

# Configure
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

logger = logging.getLogger(__name__)

# Use it
logger.info("Application started")
\`\`\`

### Step 2: Different Loggers

\`\`\`python
# Logger per module
logger_db = logging.getLogger("database")
logger_api = logging.getLogger("api")

logger_db.info("Connected to database")
logger_api.info("API request received")
\`\`\`

### Step 3: File & Console Logging

\`\`\`python
# Handler for file
file_handler = logging.FileHandler("app.log")
file_handler.setLevel(logging.ERROR)

# Handler for console
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.INFO)

# Add both
logger.addHandler(file_handler)
logger.addHandler(console_handler)
\`\`\`

### Step 4: Structured Logging

\`\`\`python
import json

def log_structured(level, message, **kwargs):
    log_entry = {
        "level": level,
        "message": message,
        **kwargs
    }
    logger.log(getattr(logging, level), json.dumps(log_entry))

# Use it
log_structured("INFO", "User login", user_id=123, email="user@example.com")
\`\`\`

### Step 5: Monitor FastAPI

\`\`\`python
from fastapi import FastAPI
import logging

app = FastAPI()
logger = logging.getLogger(__name__)

@app.middleware("http")
async def log_requests(request, call_next):
    logger.info(f"Request: {request.method} {request.url}")
    response = await call_next(request)
    logger.info(f"Response status: {response.status_code}")
    return response

@app.get("/")
def root():
    logger.info("Root endpoint called")
    return {"message": "Hello"}
\`\`\`

### Step 6: Production Monitoring

Use cloud monitoring:
- **CloudWatch** (AWS)
- **Stackdriver** (Google Cloud)
- **Azure Monitor** (Microsoft)
- **DataDog** (Third-party)

---

## 📚 Resources
- [Python Logging Docs](https://docs.python.org/3/library/logging.html)
- [Logging Best Practices](https://docs.python-guide.org/writing/logging/)
- [FastAPI Logging](https://fastapi.tiangolo.com/deployment/concepts/#logging)`,
      challenge: `# BROWSER: Logging demonstration
import logging
from io import StringIO

# Capture logs
log_capture = StringIO()
handler = logging.StreamHandler(log_capture)
formatter = logging.Formatter('%(levelname)s: %(message)s')
handler.setFormatter(formatter)

logger = logging.getLogger('app')
logger.addHandler(handler)
logger.setLevel(logging.INFO)

# Log messages
logger.debug("Debug message (won't show)")
logger.info("Application started")
logger.warning("Warning message")
logger.error("Error occurred")

# Print captured logs
logs = log_capture.getvalue()
print(logs)`,
      resources: [
        { name: "Python Logging", url: "https://docs.python.org/3/library/logging.html" },
        { name: "Logging Best Practices", url: "https://docs.python-guide.org/writing/logging/" },
        { name: "FastAPI Logging", url: "https://fastapi.tiangolo.com/deployment/concepts/#logging" }
      ],
      expectedOutput: "INFO: Application started\nWARNING: Warning message\nERROR: Error occurred\n"
    },
    {
      name: "Documentation & README",
      brief: "Write clear project documentation",
      instruction: `## 📚 Writing Great Documentation

**🔄 HYBRID LEARNING MODE** - Learn docs structure in browser, write actual docs locally!

Good documentation makes your project usable and professional.

---

## README Sections

1. **Title & Badge** - Project name and status
2. **Description** - What does it do?
3. **Installation** - How to install?
4. **Usage** - How to use?
5. **Examples** - Real usage examples
6. **API Docs** - Function reference
7. **Contributing** - How to contribute
8. **License** - Project license

---

## Markdown Basics

\`\`\`markdown
# Title (H1)
## Subtitle (H2)
- Bullet point
- Another point
\`\`\`

---

## Good README Example

\`\`\`markdown
# My Python Package

[![License](badge)](license)

Describe what your project does.

## Installation

\`\`\`bash
pip install mypackage
\`\`\`

## Quick Start

\`\`\`python
from mypackage import MyClass

obj = MyClass()
result = obj.do_something()
\`\`\`

## API Reference

### MyClass

Description...

## License

MIT License
\`\`\`

---

## ✅ Key Points

- Clear and concise
- Show examples
- Easy to follow
- Keep updated
- Good formatting

---

## 🖥️ LOCAL PRACTICE GUIDE

### Step 1: Create README.md

\`\`\`bash
touch README.md
\`\`\`

### Step 2: Write Title & Description

\`\`\`markdown
# ChatBot API

A simple REST API for building chatbots with LLMs.
\`\`\`

### Step 3: Add Installation Section

\`\`\`markdown
## Installation

Requirements:
- Python 3.11+
- pip

\`\`\`bash
git clone https://github.com/yourname/chatbot-api
cd chatbot-api
pip install -r requirements.txt
\`\`\`
\`\`\`

### Step 4: Add Usage Examples

\`\`\`markdown
## Usage

### Starting the Server

\`\`\`bash
python main.py
\`\`\`

### Making API Calls

\`\`\`python
import requests

response = requests.post(
    "http://localhost:8000/chat",
    json={"message": "Hello!"}
)
print(response.json())
\`\`\`
\`\`\`

### Step 5: Document Features

\`\`\`markdown
## Features

- ✅ Fast API responses
- ✅ Multiple AI models
- ✅ Conversation history
- ✅ Error handling
- ✅ Logging & monitoring
\`\`\`

### Step 6: Add Contributing Section

\`\`\`markdown
## Contributing

1. Fork the repo
2. Create feature branch
3. Make changes
4. Write tests
5. Submit pull request
\`\`\`

### Step 7: Push to GitHub

\`\`\`bash
git add README.md
git commit -m "Add documentation"
git push origin main
\`\`\`

GitHub renders the README automatically!

---

## 📚 Resources
- [Markdown Guide](https://www.markdownguide.org/)
- [README Best Practices](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)
- [Write the Docs](https://www.writethedocs.org/)`,
      challenge: `# BROWSER: README structure
readme_sections = {
    "Title": "# Project Name",
    "Description": "What does this do?",
    "Installation": "How to install",
    "Usage": "How to use",
    "Examples": "Real world examples",
    "Contributing": "How to contribute",
    "License": "License info"
}

print("README Structure:")
for section, content in readme_sections.items():
    print(f"- {section:15} -> {content}")`,
      resources: [
        { name: "Markdown Guide", url: "https://www.markdownguide.org/" },
        { name: "README Best Practices", url: "https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md" },
        { name: "Write the Docs", url: "https://www.writethedocs.org/" }
      ],
      expectedOutput: "README Structure:\n- Title           -> # Project Name\n- Description     -> What does this do?\n- Installation    -> How to install\n- Usage           -> How to use\n- Examples        -> Real world examples\n- Contributing    -> How to contribute\n- License         -> License info"
    },
    {
      name: "Cloud Deployment",
      brief: "Deploy applications to the cloud",
      instruction: `## ☁️ Cloud Deployment

**🔄 HYBRID LEARNING MODE** - Learn deployment concepts in browser, deploy locally and to cloud!

Deploy your application to the cloud and make it accessible to the world!

---

## Cloud Platforms

- **Heroku** - Simple, free tier available
- **Railway** - Modern alternative to Heroku
- **Render** - Free hosting with easy deployment
- **AWS** - Powerful but complex
- **Google Cloud** - Good documentation
- **Azure** - Enterprise option

---

## Deployment Process

1. **Prepare** - Create Dockerfile or requirements.txt
2. **Push** - Push code to GitHub
3. **Connect** - Connect platform to your GitHub repo
4. **Deploy** - Platform auto-deploys on push
5. **Monitor** - Check logs and metrics

---

## General Deployment Steps

\`\`\`bash
# 1. Create requirements.txt
pip freeze > requirements.txt

# 2. Add Procfile (for Heroku)
echo "web: uvicorn main:app --host 0.0.0.0 --port \$PORT" > Procfile

# 3. Push to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main

# 4. Platform deploys automatically!
\`\`\`

---

## ✅ Key Points

- Different platforms have pros/cons
- Most offer free tier for learning
- Auto-deployment from GitHub
- Environment variables in cloud
- Monitor logs and performance

---

## 🖥️ LOCAL PRACTICE GUIDE

### Option 1: Deploy to Railway (Recommended!)

**Step 1: Sign up**
1. Go to https://railway.app
2. Sign up with GitHub
3. Authorize Railway

**Step 2: Create project**
1. Click "New Project"
2. Select "Deploy from GitHub"
3. Choose your repository
4. Railway detects Python app automatically

**Step 3: Add environment variables**
1. Click on your project
2. Go to Variables
3. Add your environment vars:
   - OPENAI_API_KEY
   - DATABASE_URL
   - etc.

**Step 4: Deploy**
Railway deploys automatically when you push to GitHub!

**Step 5: View live app**
- Railway provides public URL
- App is live and accessible!

---

### Option 2: Deploy to Render

**Step 1: Create main.py**
\`\`\`python
from fastapi import FastAPI
import os

app = FastAPI()

@app.get("/")
def root():
    env = os.getenv("ENVIRONMENT", "production")
    return {"message": f"Running in {env}"}
\`\`\`

**Step 2: Create requirements.txt**
\`\`\`
fastapi==0.104.1
uvicorn==0.24.0
\`\`\`

**Step 3: Sign up**
- Go to https://render.com
- Sign up with GitHub

**Step 4: New Web Service**
- Click "New Web Service"
- Choose GitHub repository
- Set Build Command: \`pip install -r requirements.txt\`
- Set Start Command: \`uvicorn main:app --host 0.0.0.0 --port 8000\`

**Step 5: Deploy**
- Click Deploy
- Watch the logs
- Your app is live!

---

### Option 3: Deploy to Heroku (Classic)

**Step 1: Install Heroku CLI**
\`\`\`bash
# Mac
brew install heroku

# Windows
# Download from heroku.com/download
\`\`\`

**Step 2: Create Procfile**
\`\`\`
web: uvicorn main:app --host 0.0.0.0 --port \$PORT
\`\`\`

**Step 3: Login**
\`\`\`bash
heroku login
\`\`\`

**Step 4: Create app**
\`\`\`bash
heroku create myapp
\`\`\`

**Step 5: Deploy**
\`\`\`bash
git push heroku main
\`\`\`

**Step 6: Set environment variables**
\`\`\`bash
heroku config:set OPENAI_API_KEY=sk-...
\`\`\`

---

### Step 6: Monitor Your App

\`\`\`bash
# View logs (Heroku)
heroku logs --tail

# Check app status
heroku ps

# Restart app
heroku restart
\`\`\`

---

## 📚 Resources
- [Railway Docs](https://docs.railway.app/)
- [Render Docs](https://render.com/docs)
- [Heroku Docs](https://devcenter.heroku.com/)
- [AWS Deployment](https://aws.amazon.com/getting-started/)`,
      challenge: `# BROWSER: Deployment overview
platforms = {
    "Railway": {"free_tier": "Yes", "ease": "Very Easy", "url": "railway.app"},
    "Render": {"free_tier": "Yes", "ease": "Easy", "url": "render.com"},
    "Heroku": {"free_tier": "Limited", "ease": "Medium", "url": "heroku.com"},
    "AWS": {"free_tier": "Yes", "ease": "Hard", "url": "aws.amazon.com"}
}

print("Cloud Deployment Platforms:")
for platform, info in platforms.items():
    print(f"{platform:12} - Free: {info['free_tier']:8} | Ease: {info['ease']:10} | {info['url']}")`,
      resources: [
        { name: "Railway", url: "https://railway.app/" },
        { name: "Render", url: "https://render.com/" },
        { name: "Heroku", url: "https://www.heroku.com/" },
        { name: "AWS Getting Started", url: "https://aws.amazon.com/getting-started/" }
      ],
      expectedOutput: "Cloud Deployment Platforms:\nRailway    - Free: Yes        | Ease: Very Easy  | railway.app\nRender     - Free: Yes        | Ease: Easy       | render.com\nHeroku     - Free: Limited    | Ease: Medium     | heroku.com\nAWS        - Free: Yes        | Ease: Hard       | aws.amazon.com"
    }
  ],
  project: { title: "Full Stack AI App", desc: "Deploy a complete AI-powered application to production" }
};
