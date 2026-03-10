# 🚀 Template: How to Add Missing Topics

This guide shows you how to add the 12 missing topics back into the interactive learning roadmap.

---

## Quick Add Template

Copy this template and paste it into the appropriate phase's `topics` array:

```javascript
{
  name: "Topic Name",
  brief: "One-sentence explanation of what this teaches and why it matters.",
  instruction: `## Step-by-Step

1. **First step** with clear action
2. **Second step** with clear action
3. **Third step** with clear action
4. **Fourth step** with clear action
5. **Fifth step** with clear action`,
  challenge: `# Write your code here:
# Example template or partial code
# to get them started`,
  resources: [
    { name: "Resource Title", url: "https://example.com/docs" },
    { name: "Another Resource", url: "https://example.com/tutorial" }
  ],
  expectedOutput: "What the user's code output should show or demonstrate"
}
```

---

## Missing Topics to Add (Priority Order)

### Priority 1: Phase 2 - APIs & HTTP Requests ⭐
**Location:** Phase 2, after OOP topic

```javascript
{
  name: "APIs & HTTP Requests (requests library)",
  brief: "Learn to call external APIs using Python's requests library—just like fetch() in JavaScript but simpler.",
  instruction: `## Step-by-Step

1. **Install requests**: \`pip install requests\`
2. **Import the library**: \`import requests\`
3. **Make a GET request** to a public API (JSONPlaceholder is good for practice)
4. **Check the response status**: \`response.status_code\` should be 200
5. **Parse the JSON response**: \`response.json()\`
6. **Print specific data** from the response`,
  challenge: `import requests

# Make a GET request to JSONPlaceholder
url = "https://jsonplaceholder.typicode.com/posts/1"
response = requests.get(url)

# Check if successful
if response.status_code == 200:
    # Parse and print the data
    data = response.json()
    # Print the title of the post`,
  resources: [
    { name: "Python requests Library", url: "https://docs.python-requests.org/" },
    { name: "JSONPlaceholder (Test API)", url: "https://jsonplaceholder.typicode.com/" }
  ],
  expectedOutput: "JSON data from the API, with title printed: 'sunt aut facere repellat provident...'"
}
```

---

### Priority 2: Phase 3 - Prompt Engineering ⭐
**Location:** Phase 3, after API Basics topic

```javascript
{
  name: "Prompt Engineering",
  brief: "Learn to craft prompts that get reliable, structured outputs from LLMs. The difference between 'good' and 'bad' results is all in how you ask.",
  instruction: `## Step-by-Step

1. **Write a basic prompt** for the Claude API
2. **Test it** and note the response quality
3. **Make it more specific** by adding context and constraints
4. **Add role-playing**: 'You are a...'
5. **Request specific format**: 'Return as JSON', 'Use bullet points'
6. **Test again** and compare results`,
  challenge: `from anthropic import Anthropic

client = Anthropic(api_key="YOUR_API_KEY")

# Bad prompt (vague)
# prompt_bad = "Tell me about Python"

# Good prompt (specific, structured, has context)
prompt_good = """You are a technical educator explaining Python concepts.
I'm a JavaScript developer learning Python.
Explain Python lists compared to JavaScript arrays.
Format your response as:
- Similarities
- Key Differences  
- Code Example (show in both languages)"""

response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=500,
    messages=[
        {"role": "user", "content": prompt_good}
    ]
)

print(response.content[0].text)`,
  resources: [
    { name: "Anthropic Prompt Engineering Guide", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" },
    { name: "Prompt Examples", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/examples" }
  ],
  expectedOutput: "Structured response comparing Python lists to JS arrays with code examples"
}
```

---

### Priority 3: Phase 2 - JSON Handling
**Location:** Phase 2, after APIs topic

```javascript
{
  name: "JSON Handling",
  brief: "Parse and create JSON data—essential when working with APIs and LLMs. Python makes this super simple.",
  instruction: `## Step-by-Step

1. **Import json module**: \`import json\`
2. **Parse JSON from a string** using \`json.loads()\`
3. **Access data** from the parsed object
4. **Create a Python dict/list**
5. **Convert to JSON** using \`json.dumps()\`
6. **Pretty-print** with indentation`,
  challenge: `import json

# JSON string (like you'd get from an API)
json_string = '{"name": "John", "age": 30, "city": "NYC"}'

# Parse it
data = json.loads(json_string)
print(data["name"])  # Should print: John

# Create Python data
my_data = {"name": "Alice", "skills": ["Python", "JavaScript"]}

# Convert to JSON string
json_output = json.dumps(my_data, indent=2)
print(json_output)`,
  resources: [
    { name: "Python json Module", url: "https://docs.python.org/3/library/json.html" },
    { name: "JSON in Python Tutorial", url: "https://www.w3schools.com/python/python_json.asp" }
  ],
  expectedOutput: "Parsed data printed, then formatted JSON output with indentation"
}
```

---

### Phase 2 - List Comprehensions
**Location:** Phase 2, early in topics

```javascript
{
  name: "List Comprehensions",
  brief: "Python's elegant one-liner way to transform lists. It's like .map() in JavaScript but more powerful.",
  instruction: `## Step-by-Step

1. **Create a list of numbers**: [1, 2, 3, 4, 5]
2. **Use a regular for loop** to square each number
3. **Convert to a list comprehension** (one line!)
4. **Filter with a condition**: only even numbers
5. **Add a transformation**: square only even numbers`,
  challenge: `# Traditional way (multiple lines)
numbers = [1, 2, 3, 4, 5]
squared = []
for num in numbers:
    squared.append(num ** 2)

# List comprehension way (one line!)
# squared = [num ** 2 for num in numbers]

# Now try it yourself:
# 1. Filter for only even numbers
# 2. Square them
# evens_squared = ...`,
  resources: [
    { name: "Python List Comprehensions", url: "https://www.w3schools.com/python/python_lists_comprehension.asp" },
    { name: "Real Python Guide", url: "https://realpython.com/list-comprehensions-and-generator-expressions/" }
  ],
  expectedOutput: "[4, 16] (squares of 2 and 4 only)"
}
```

---

## How to Add These to Your Code

1. **Open `learning-roadmap.jsx`** in your editor
2. **Find the phase** where you want to add the topic (e.g., `id: 2` for Phase 2)
3. **Locate the `topics` array** inside that phase
4. **Copy the template above** and paste it into the `topics` array
5. **Adjust the content** as needed for your learning goals
6. **Save the file** and refresh your browser

Example location in code:
```javascript
{
  id: 2,
  title: "Intermediate Python",
  topics: [
    { name: "OOP — Classes & Objects", ... },
    // ← PASTE NEW TOPIC HERE
  ]
}
```

---

## Topics Still Missing (You Can Add Later)

**Phase 2:**
- Decorators & Context Managers
- Virtual Environments (venv)
- Git & Version Control

**Phase 3:**
- Structured Outputs (JSON mode)
- Chaining prompts & multi-step flows
- LangChain basics
- Vector databases & embeddings
- Building simple AI agents

**Phase 4:**
- Environment variables & secrets management
- Logging & error monitoring
- Writing a README & documentation
- Deploying to the cloud

---

## Tips for Writing Good Challenges

1. **Keep it realistic**: Make the challenge something they'd actually do
2. **Build on previous knowledge**: Assume they know the previous topics
3. **Progressive difficulty**: Start simple, end with a bonus challenge
4. **Clear expected output**: Show exactly what success looks like
5. **Provide resources**: Link to official docs, not random tutorials

---

## Example: A Well-Written Challenge Structure

**Good:**
- Brief concept (1-2 sentences)
- 5-6 clear steps (numbered, action-oriented)
- Starting code template (scaffolding)
- Realistic expected output (copy-pasteable)
- 2-3 high-quality resource links

**Avoid:**
- Vague instructions ("learn about X")
- Too many steps (>7)
- No code template
- Expected output like "whatever you want"
- Links to random blogs/YouTube

---

## Next Steps

1. **Add Priority 1 topics first**: APIs, Prompt Engineering, JSON
2. **Test each one**: Make sure the code actually works
3. **Add to other phases**: Gradually fill in the gaps
4. **Expand Phase 1**: Complete the 4 topics that exist but need challenges

You now have everything you need to complete the roadmap! 🚀
