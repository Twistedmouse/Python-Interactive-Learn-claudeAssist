// Import new topic
import { llmsVsSlms } from './llmsVsSlms.js';

export const phase3 = {
  id: 3,
  title: "AI & LLM Fundamentals",
  duration: "Weeks 10–16",
  hours: "7–10 hrs/week",
  color: "#a855f7",
  icon: "🤖",
  tagline: "Enter the AI world",
  description: "Work with AI models, LLMs, and intelligent agents.",
  topics: [
    {
      name: "LLMs vs SLMs: Choosing the Right Model",
      brief: "Understand the tradeoffs between Large and Small Language Models for your projects",
      instruction: `
## LLMs vs SLMs: Choosing the Right Model

The AI landscape has two camps: **Large Language Models (LLMs)** and **Small Language Models (SLMs)**. Choosing right saves money and improves performance.

### What's the Difference?

**LLM (Large Language Model)**
- **Size:** 7B - 175B+ parameters (billions!)
- **Examples:** GPT-4, Claude 3, Gemini Ultra
- **Speed:** Slower (seconds to minutes)
- **Cost:** Expensive ($0.01-$0.10 per request)
- **Quality:** Highest reasoning, best at complex tasks
- **Where:** Cloud APIs (OpenAI, Anthropic, Google)

**SLM (Small Language Model)**
- **Size:** 1B - 7B parameters
- **Examples:** Mistral 7B, Phi-3, TinyLLaMA, Llama 2 7B
- **Speed:** Fast (milliseconds)
- **Cost:** Free (run locally)
- **Quality:** Good for specific tasks, limited reasoning
- **Where:** Your laptop, local servers

### Size Comparison

\`\`\`
Model Size vs Capability:

GPT-4 (Largest)    ████████████████████ 175B+ params
Claude 3 Opus      ███████████████░░░░░ 100B+ params
Mistral Large      ██████████░░░░░░░░░░ 72B params
Llama 2 70B        ██████████░░░░░░░░░░ 70B params
Llama 2 13B        ████░░░░░░░░░░░░░░░░ 13B params
Phi-3              ██░░░░░░░░░░░░░░░░░░ 3.8B params
TinyLLaMA          █░░░░░░░░░░░░░░░░░░░ 1.1B params
\`\`\`

### When to Use Each

**Use LLMs when:**
✓ You need best-in-class reasoning  
✓ Complex multi-step tasks  
✓ General-purpose AI assistants  
✓ You don't care about cost  
✓ You need latest capabilities  

**Example:**
\`\`\`python
# Complex reasoning task
from anthropic import Anthropic

response = client.messages.create(
    model="claude-3-opus-20240229",
    max_tokens=1024,
    messages=[{
        "role": "user",
        "content": "Explain quantum computing vs classical computing"
    }]
)
# Cost: $0.015 per 1K tokens
\`\`\`

**Use SLMs when:**
✓ Running locally (privacy!)  
✓ Budget is tight  
✓ Need real-time responses  
✓ Simple classification/extraction  
✓ Specific domain tasks  

**Example:**
\`\`\`python
# Running Llama 2 locally
from llama_cpp import Llama

llm = Llama(model_path="./llama-2-7b.gguf")
response = llm("Summarize this:", max_tokens=100)
# Cost: $0 (your computer!)
\`\`\`

### Real-World Scenarios

**E-commerce Product Tags**
- Task: Auto-tag products
- SLM: Perfect fit ✓
- Cost comparison: Free (local) vs $1000/month (API calls)

**Customer Support Chatbot**
- Task: Answer FAQ
- SLM: Good enough ✓
- Privacy: Data stays local ✓

**Medical Diagnosis Assistant**
- Task: Complex reasoning
- LLM: Better accuracy ✓
- Cost: Worth it for accuracy

**Spam Detection**
- Task: Binary classification
- SLM: Excellent ✓
- Speed: Real-time ✓

### Cost Comparison

For 100K requests/month:

\`\`\`
LLM (OpenAI GPT-4):
100,000 requests × $0.03 = $3,000/month

SLM (Run Llama 2 locally):
One GPU: $500 (one-time)
Electricity: $50/month
Total: $50/month
Savings: 98%! 💰
\`\`\`

### Quality Tradeoff

**LLM Strengths:**
- Complex reasoning
- Code generation
- Writing
- Creative tasks
- Rare/hard problems

**SLM Strengths:**
- Fast inference
- Specific domains (after fine-tuning)
- Privacy-critical tasks
- Cost-effective at scale
- Edge devices (phones, IoT)

### How to Decide

\`\`\`
Does it need complex reasoning?
├─ YES → Use LLM (GPT-4, Claude)
└─ NO  → Consider SLM

Is budget tight?
├─ YES → Use SLM (Mistral, Phi)
└─ NO  → Could use either

Need to run offline?
├─ YES → Use SLM only
└─ NO  → Could use either

Need absolute best quality?
├─ YES → Use LLM
└─ NO  → SLM might work

Decision Tree:
Complex + Budget = LLM
Complex + Limited Budget = SLM + fine-tuning
Simple + Budget = LLM (overkill but fine)
Simple + Limited Budget = SLM ✓
\`\`\`

### Future Trend

SLMs are getting SMARTER:
- Phi-3 (3.8B) ≈ GPT-3.5 (175B) quality
- Each month: better SLM models
- Prediction: SLMs will handle 80% of use cases by 2025

### Key Takeaway

**Best strategy:** Start with SLM locally, upgrade to LLM if needed.

Don't pay for GPT-4 when Phi-3 solves your problem! 💡

## 🖥️ LOCAL PRACTICE GUIDE

1. **Try Ollama (easiest)**
   - Download Ollama from ollama.ai
   - Run: ollama run llama2
   - Chat with model locally
   - Zero cost!

2. **Compare models**
   - Ask same question to LLM API (costs $)
   - Ask same question to local SLM (free)
   - Compare quality vs cost

3. **Fine-tune an SLM**
   - Download Mistral 7B
   - Fine-tune on your data
   - See how specific it becomes
   - Amazing results on domain tasks

4. **Build cost calculator**
   - Calculate monthly LLM API costs
   - Calculate local SLM costs
   - See when SLM makes sense
   - Make informed decisions
      `,
      challenge: `# Understanding LLMs vs SLMs

# This is conceptual learning - no Python execution needed
# But let's analyze the decision!

print("=" * 50)
print("LLM vs SLM Decision Framework")
print("=" * 50)

# Scenario 1: Building chatbot
print("\n📱 Scenario: Customer Support Chatbot")
print("Complexity: Medium (FAQ answering)")
print("Budget: Limited")
print("Privacy: Important (internal data)")
print("Recommendation: SLM (local deployment)")
print()

# Scenario 2: Research assistant
print("🔬 Scenario: Research Paper Analyzer")
print("Complexity: High (complex reasoning)")
print("Budget: Generous")
print("Privacy: Less critical")
print("Recommendation: LLM (OpenAI/Anthropic API)")
print()

# Scenario 3: Content moderation
print("⚠️ Scenario: Real-time Content Moderation")
print("Complexity: Low (classification)")
print("Budget: Limited")
print("Privacy: Critical")
print("Speed: Must be instant (<100ms)")
print("Recommendation: SLM (local, quantized)")
print()

print("Key Insight:")
print("→ Not all AI needs GPT-4!")
print("→ Choose the right tool for the job")
print("→ Save 99% on costs with smart choices")`,
      resources: [
        { 
          url: "https://ollama.ai", 
          name: "Ollama - Run LLMs Locally"
        },
        { 
          url: "https://github.com/Microsoft/Phi-3", 
          name: "Microsoft Phi-3 (Small Model)"
        },
        { 
          url: "https://www.huggingface.co/models?sort=trending&search=llm", 
          name: "HuggingFace Model Hub"
        }
      ],
      expectedOutput: "LLM vs SLM Decision Framework\n\n📱 Scenario: Customer Support Chatbot\nComplexity: Medium (FAQ answering)\nBudget: Limited\nPrivacy: Important (internal data)\nRecommendation: SLM (local deployment)\n\n🔬 Scenario: Research Paper Analyzer\nComplexity: High (complex reasoning)\nBudget: Generous\nPrivacy: Less critical\nRecommendation: LLM (OpenAI/Anthropic API)\n\n⚠️ Scenario: Real-time Content Moderation\nComplexity: Low (classification)\nBudget: Limited\nPrivacy: Critical\nSpeed: Must be instant (<100ms)\nRecommendation: SLM (local, quantized)\n\nKey Insight:\n→ Not all AI needs GPT-4!\n→ Choose the right tool for the job\n→ Save 99% on costs with smart choices"
    },
    {
      name: "OpenAI & Anthropic APIs",
      brief: "Call AI models and get intelligent responses",
      instruction: `## 🤖 AI Model APIs

**🔄 HYBRID LEARNING MODE** - Learn API concepts in browser, use real APIs locally!

---

## What is an LLM API?

APIs let you send text to Claude or ChatGPT and get intelligent responses back.

---

## OpenAI API

\`\`\`python
from openai import OpenAI

client = OpenAI(api_key="sk-...")

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)
\`\`\`

---

## Anthropic API (Claude)

\`\`\`python
from anthropic import Anthropic

client = Anthropic(api_key="sk-ant-...")

message = client.messages.create(
    model="claude-3-sonnet-20240229",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(message.content[0].text)
\`\`\`

---

## Getting API Keys (Free Tier!)

**OpenAI:**
1. Visit https://platform.openai.com/api-keys
2. Sign up or login
3. Create new secret key
4. Get $5 free credit

**Anthropic:**
1. Visit https://console.anthropic.com/
2. Sign up with GitHub
3. Create API key
4. Free tier available

---

## ✅ Key Points

- Both APIs have generous free tiers
- API keys should be kept secret
- Check pricing to avoid surprises
- Always use environment variables for keys
- Rate limits apply to free tier

---

## 🖥️ LOCAL PRACTICE GUIDE

### Step 1: Get Your API Keys

**OpenAI:**
1. Go to https://platform.openai.com/api-keys
2. Create new secret key
3. Save it safely (only shown once!)

**Anthropic:**
1. Go to https://console.anthropic.com/
2. Create API key
3. Copy and save

### Step 2: Install SDKs

\`\`\`bash
pip install openai
pip install anthropic
\`\`\`

### Step 3: Create .env File

\`\`\`bash
OPENAI_API_KEY=sk-...your-key...
ANTHROPIC_API_KEY=sk-ant-...your-key...
\`\`\`

### Step 4: Make Your First API Call

**OpenAI:**
\`\`\`python
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": "Say hello!"}]
)

print(response.choices[0].message.content)
\`\`\`

**Anthropic:**
\`\`\`python
from anthropic import Anthropic
import os
from dotenv import load_dotenv

load_dotenv()
client = Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

message = client.messages.create(
    model="claude-3-sonnet-20240229",
    max_tokens=100,
    messages=[{"role": "user", "content": "Say hello!"}]
)

print(message.content[0].text)
\`\`\`

### Step 5: Monitor Your Usage

- Check API usage on dashboard
- Set spending limits if needed
- Track costs regularly

---

## 📚 Resources
- [OpenAI API Docs](https://platform.openai.com/docs)
- [Anthropic API Docs](https://docs.anthropic.com/)
- [Security Best Practices](https://platform.openai.com/docs/guides/production-best-practices)`,
      challenge: `# BROWSER SIMULATION: Parse API response
import json

# Simulate what an API returns
mock_response = {
    "choices": [{
        "message": {
            "content": "Hello! I'm Claude, an AI assistant made by Anthropic."
        }
    }],
    "usage": {
        "input_tokens": 10,
        "output_tokens": 20
    }
}

# Extract the response
content = mock_response["choices"][0]["message"]["content"]
tokens = mock_response["usage"]["output_tokens"]

print(f"Response: {content}")
print(f"Tokens used: {tokens}")`,
      resources: [
        { name: "OpenAI API Docs", url: "https://platform.openai.com/docs" },
        { name: "Anthropic API Docs", url: "https://docs.anthropic.com/" },
        { name: "API Key Security", url: "https://platform.openai.com/docs/guides/production-best-practices" }
      ],
      expectedOutput: "Response: Hello! I'm Claude, an AI assistant made by Anthropic.\nTokens used: 20"
    },
    {
      name: "Prompt Engineering",
      brief: "Write effective prompts for AI models",
      instruction: `## ✍️ Crafting Effective Prompts

**🔄 HYBRID LEARNING MODE** - Learn techniques in browser, test with real LLMs locally!

The quality of your prompt determines the quality of the response.

---

## Prompt Best Practices

1. **Be Specific** - Clear, detailed instructions
2. **Provide Context** - Background information
3. **Give Examples** - Show what you want
4. **Set Constraints** - Length, format, etc.
5. **Use Roles** - "Act as a Python expert"

---

## Good vs Bad Prompts

**Bad:**
\`\`\`
Tell me about Python
\`\`\`

**Good:**
\`\`\`
Explain Python list comprehensions to a beginner.
Show one example with explanation.
Keep it under 150 words.
\`\`\`

---

## Prompt Techniques

**Few-Shot Learning:**
\`\`\`
Translate English to French:
Dog -> Chien
Cat -> Chat
Bird -> ?
\`\`\`

**Chain of Thought:**
\`\`\`
Solve step by step:
If there are 5 apples and I take 2...
\`\`\`

**Role-Based:**
\`\`\`
Act as a senior Python developer.
Review this code for bugs.
[code here]
\`\`\`

---

## ✅ Key Points

- Clarity is crucial
- Examples help models understand
- Specify format and constraints
- Different models respond differently
- Test and iterate

---

## 🖥️ LOCAL PRACTICE GUIDE

### Step 1: Access ChatGPT or Claude

**Option A: Claude.ai (Free!)**
1. Visit https://claude.ai
2. No account needed initially
3. Start chatting

**Option B: ChatGPT Free (Free!)**
1. Visit https://chat.openai.com
2. Sign up
3. Chat with GPT-3.5

### Step 2: Test Prompt Techniques

**Try This Bad Prompt:**
\`\`\`
What is programming?
\`\`\`
(Short, generic response)

**Try This Good Prompt:**
\`\`\`
Explain programming in simple terms for someone with 
no technical background. Use a real-world analogy. 
Keep it to 3-4 sentences.
\`\`\`
(Much better response!)

### Step 3: Experiment with Roles

\`\`\`
You are a Python tutor. A student asks: 
"How do I sort a list?"

Provide a clear explanation with code example.
\`\`\`

### Step 4: Build Your Prompt Template

Create a file with your best prompts:

\`\`\`python
# prompt_templates.py

PYTHON_EXPERT = """You are a senior Python developer.
Be concise but thorough.
Provide code examples when relevant."""

TUTOR = """You are a patient teacher.
Explain concepts simply.
Use analogies when helpful."""

CODE_REVIEW = """Review this code.
Comment on:
1. Bugs or issues
2. Performance
3. Code style"""
\`\`\`

### Step 5: Use in Your Code

\`\`\`python
from anthropic import Anthropic
import os
from dotenv import load_dotenv

load_dotenv()
client = Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

response = client.messages.create(
    model="claude-3-sonnet-20240229",
    max_tokens=500,
    system=PYTHON_EXPERT,
    messages=[
        {"role": "user", "content": "How do I write better Python code?"}
    ]
)

print(response.content[0].text)
\`\`\`

---

## 📚 Resources
- [Prompt Engineering Guide](https://www.promptingguide.ai/)
- [OpenAI Best Practices](https://platform.openai.com/docs/guides/prompt-engineering)
- [Claude Prompting](https://docs.anthropic.com/claude/docs/prompting-best-practices)`,
      challenge: `# BROWSER: Analyze prompt quality
prompts = {
    "bad": "Tell me about Python",
    "good": "Explain list comprehensions in Python with one example. Keep under 100 words."
}

for quality, prompt in prompts.items():
    length = len(prompt)
    specific = "specific" in prompt or "example" in prompt or "word" in prompt
    print(f"{quality.upper()}: {prompt}")
    print(f"Length: {length}, Specific: {specific}\\n")`,
      resources: [
        { name: "Prompting Guide", url: "https://www.promptingguide.ai/" },
        { name: "OpenAI Prompting", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
        { name: "Claude Prompting", url: "https://docs.anthropic.com/claude/docs/prompting-best-practices" }
      ],
      expectedOutput: "BAD: Tell me about Python\nLength: 24, Specific: false\n\nGOOD: Explain list comprehensions in Python with one example. Keep under 100 words.\nLength: 94, Specific: true\n"
    },
    {
      name: "Structured Outputs (JSON Mode)",
      brief: "Get reliable JSON responses from AI",
      instruction: `## 📋 Structured Output Mode

**🔄 HYBRID LEARNING MODE** - Learn JSON concepts in browser, test with APIs locally!

Get reliable, machine-readable JSON responses from AI.

---

## Why JSON Mode?

Without JSON mode, models might return:
- Partial JSON
- Invalid syntax
- Mixed formats

With JSON mode, you get:
- Valid JSON guaranteed
- Predictable structure
- Easy parsing

---

## OpenAI JSON Mode

\`\`\`python
response = client.chat.completions.create(
    model="gpt-4",
    response_format={"type": "json_object"},
    messages=[{
        "role": "user",
        "content": "Extract name and age from: John is 25 years old"
    }]
)
\`\`\`

---

## Anthropic Structured Output

\`\`\`python
response = client.messages.create(
    model="claude-3-sonnet-20240229",
    max_tokens=1024,
    messages=[{
        "role": "user",
        "content": """Return JSON with format:
{
  "name": "",
  "age": 0
}

Extract from: John is 25 years old"""
    }]
)
\`\`\`

---

## Define Your Schema

\`\`\`python
from pydantic import BaseModel

class Person(BaseModel):
    name: str
    age: int
    email: str

# Use this as your expected format
\`\`\`

---

## ✅ Key Points

- JSON mode guarantees valid JSON
- Define schema clearly
- Test parsing before production
- Handle errors gracefully
- Validate against schema

---

## 🖥️ LOCAL PRACTICE GUIDE

### Step 1: Install Pydantic (for validation)

\`\`\`bash
pip install pydantic
pip install openai
\`\`\`

### Step 2: Define Your Data Model

\`\`\`python
from pydantic import BaseModel

class User(BaseModel):
    name: str
    email: str
    age: int

class PersonInfo(BaseModel):
    person: User
    country: str
\`\`\`

### Step 3: Use JSON Mode with OpenAI

\`\`\`python
from openai import OpenAI
import json
import os
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

response = client.chat.completions.create(
    model="gpt-4",
    response_format={"type": "json_object"},
    messages=[{
        "role": "user",
        "content": """Extract person info as JSON:
{
  "name": "",
  "email": "",
  "age": 0
}

From: John Smith, john@email.com, 30 years old"""
    }]
)

# Parse and validate
data = json.loads(response.choices[0].message.content)
user = User(**data)  # Validates against schema
print(user)
\`\`\`

### Step 4: Test with Anthropic

\`\`\`python
from anthropic import Anthropic
import json

client = Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

response = client.messages.create(
    model="claude-3-sonnet-20240229",
    max_tokens=500,
    messages=[{
        "role": "user",
        "content": """Return valid JSON with this structure:
{
  "extracted_name": "",
  "extracted_age": 0,
  "extracted_city": ""
}

From: Alice Johnson, 28, from New York"""
    }]
)

# Parse JSON
output = json.loads(response.content[0].text)
print(output)
\`\`\`

### Step 5: Validate Always

\`\`\`python
try:
    result = User(**json_data)
    print(f"Valid: {result}")
except ValidationError as e:
    print(f"Invalid: {e}")
\`\`\`

---

## 📚 Resources
- [OpenAI JSON Mode](https://platform.openai.com/docs/guides/structured-outputs)
- [Pydantic Docs](https://docs.pydantic.dev/)
- [JSON Schema](https://json-schema.org/)`,
      challenge: `# BROWSER: Parse and validate JSON
import json

# Simulate API response
api_response = '''{"name": "John", "age": 30, "email": "john@example.com"}'''

# Parse JSON
data = json.loads(api_response)

# Validate structure
required_fields = ["name", "age", "email"]
is_valid = all(field in data for field in required_fields)

print(f"Parsed: {data}")
print(f"Valid: {is_valid}")
print(f"Name: {data['name']}")`,
      resources: [
        { name: "OpenAI JSON Mode", url: "https://platform.openai.com/docs/guides/structured-outputs" },
        { name: "Pydantic Validation", url: "https://docs.pydantic.dev/" },
        { name: "JSON Schema", url: "https://json-schema.org/" }
      ],
      expectedOutput: "Parsed: {'name': 'John', 'age': 30, 'email': 'john@example.com'}\nValid: True\nName: John"
    },
    {
      name: "Chaining & Multi-Step Prompts",
      brief: "Break complex tasks into sequences",
      instruction: `## 🔗 Prompt Chaining

**🔄 HYBRID LEARNING MODE** - Learn chaining concepts in browser, build chains locally!

Break complex problems into step-by-step prompts.

---

## Why Chaining?

Single prompt for complex task:
- May be confusing
- Models might miss details
- Results less reliable

Multiple prompts in sequence:
- Each step is clear
- Better reasoning
- More reliable results

---

## Example: Translate & Explain

Instead of:
\`\`\`
Translate this Spanish text to English and explain idioms
\`\`\`

Use chain:
\`\`\`
Step 1: Translate Spanish to English
Step 2: Identify idioms in original
Step 3: Explain what each idiom means
\`\`\`

---

## Chain of Thought

Ask model to think step-by-step:

\`\`\`
Let's think step by step:
1. First, we need to...
2. Then, we should...
3. Finally, we can...

What is the answer?
\`\`\`

---

## ✅ Key Points

- Break complex tasks into steps
- Each step feeds to next
- Models reason better with structure
- Use clear transitions
- Collect outputs at each stage

---

## 🖥️ LOCAL PRACTICE GUIDE

### Step 1: Plan Your Chain

Before coding, write out the steps:

\`\`\`python
# Task: Write product review analyzer

chain_steps = [
    "Step 1: Extract sentiment (positive/negative/neutral)",
    "Step 2: Identify key topics mentioned",
    "Step 3: Rate quality 1-5",
    "Step 4: Suggest improvements",
]
\`\`\`

### Step 2: Build the Chain

\`\`\`python
from anthropic import Anthropic
import json
import os
from dotenv import load_dotenv

load_dotenv()
client = Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

review = "This product is great but the packaging could be better."

# Step 1: Sentiment
response1 = client.messages.create(
    model="claude-3-sonnet-20240229",
    max_tokens=100,
    messages=[{
        "role": "user",
        "content": f"Sentiment (positive/negative/neutral): {review}"
    }]
)
sentiment = response1.content[0].text
print(f"Sentiment: {sentiment}")

# Step 2: Topics
response2 = client.messages.create(
    model="claude-3-sonnet-20240229",
    max_tokens=100,
    messages=[{
        "role": "user",
        "content": f"What topics are mentioned: {review}"
    }]
)
topics = response2.content[0].text
print(f"Topics: {topics}")

# Step 3: Rating
response3 = client.messages.create(
    model="claude-3-sonnet-20240229",
    max_tokens=50,
    messages=[{
        "role": "user",
        "content": f"Rate 1-5: {review}"
    }]
)
rating = response3.content[0].text
print(f"Rating: {rating}")
\`\`\`

### Step 3: Pass Context Forward

\`\`\`python
# Get Step 1 result
sentiment = "positive"

# Use in Step 2 with context
response2 = client.messages.create(
    model="claude-3-sonnet-20240229",
    max_tokens=200,
    messages=[{
        "role": "user",
        "content": f"""The review sentiment is {sentiment}.
        
Given this, what improvements would you suggest?
Review: {review}"""
    }]
)
\`\`\`

### Step 4: Use LangChain for Complex Chains

\`\`\`bash
pip install langchain
\`\`\`

\`\`\`python
from langchain_anthropic import ChatAnthropic
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

llm = ChatAnthropic(model="claude-3-sonnet-20240229")

# Create chain
prompt = ChatPromptTemplate.from_template(
    "Analyze this review: {review}"
)

chain = prompt | llm | StrOutputParser()

# Run
result = chain.invoke({"review": "Great product!"})
print(result)
\`\`\`

### Step 5: Collect All Results

\`\`\`python
results = {
    "sentiment": sentiment,
    "topics": topics,
    "rating": rating,
    "suggestions": suggestions,
    "summary": summary
}

print(json.dumps(results, indent=2))
\`\`\`

---

## 📚 Resources
- [Chain of Thought Prompting](https://www.promptingguide.ai/techniques/cot)
- [LangChain Chains](https://python.langchain.com/docs/modules/chains/)
- [Sequential Processing](https://docs.anthropic.com/claude/docs/prompt-engineering)`,
      challenge: `# BROWSER: Design a chain
chain = {
    "task": "Analyze restaurant review",
    "steps": [
        {"step": 1, "name": "Extract sentiment", "output": "positive/negative/neutral"},
        {"step": 2, "name": "List dishes mentioned", "output": "list"},
        {"step": 3, "name": "Rate quality", "output": "1-5"}
    ]
}

for step in chain["steps"]:
    print(f"Step {step['step']}: {step['name']} -> {step['output']}")`,
      resources: [
        { name: "Chain of Thought", url: "https://www.promptingguide.ai/techniques/cot" },
        { name: "LangChain", url: "https://python.langchain.com/" },
        { name: "Sequential Processing", url: "https://docs.anthropic.com/claude/docs/prompt-engineering" }
      ],
      expectedOutput: "Step 1: Extract sentiment -> positive/negative/neutral\nStep 2: List dishes mentioned -> list\nStep 3: Rate quality -> 1-5"
    },
    {
      name: "LangChain Basics",
      brief: "Framework for building LLM applications",
      instruction: `## 🔗 LangChain Framework

**🔄 HYBRID LEARNING MODE** - Study framework in browser, build applications locally!

LangChain makes building LLM apps easier and more organized.

---

## What is LangChain?

LangChain provides:
- **Chains** - Sequences of operations
- **Memory** - Conversation history
- **Agents** - LLMs making decisions
- **Tools** - Functions for agents to use
- **Loaders** - Load data from various sources

---

## Basic Structure

\`\`\`python
from langchain_anthropic import ChatAnthropic
from langchain_core.prompts import ChatPromptTemplate

# Initialize model
llm = ChatAnthropic(model="claude-3-sonnet-20240229")

# Create prompt template
prompt = ChatPromptTemplate.from_template(
    "You are a helpful assistant. {question}"
)

# Create chain
chain = prompt | llm

# Run it
response = chain.invoke({"question": "What is Python?"})
\`\`\`

---

## Chains: Sequence of Steps

\`\`\`python
from langchain_core.output_parsers import StrOutputParser

# Pipe operations together
chain = prompt | llm | StrOutputParser()

result = chain.invoke({"question": "Explain OOP"})
\`\`\`

---

## Memory: Remember Conversation

\`\`\`python
from langchain.memory import ConversationBufferMemory

memory = ConversationBufferMemory()

# Add to chain with memory
chain_with_memory = create_chain_with_memory(
    llm=llm,
    memory=memory
)
\`\`\`

---

## ✅ Key Points

- Chains make code modular
- Easy to combine components
- Memory for conversations
- Agents for intelligent decisions
- Large ecosystem of tools

---

## 🖥️ LOCAL PRACTICE GUIDE

### Step 1: Install LangChain

\`\`\`bash
pip install langchain
pip install langchain-anthropic
\`\`\`

### Step 2: Create Simple Chain

\`\`\`python
from langchain_anthropic import ChatAnthropic
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
import os
from dotenv import load_dotenv

load_dotenv()

# Initialize
llm = ChatAnthropic(
    model="claude-3-sonnet-20240229",
    api_key=os.getenv("ANTHROPIC_API_KEY")
)

# Create prompt template
prompt = ChatPromptTemplate.from_template(
    "Explain {topic} in simple terms"
)

# Combine into chain
chain = prompt | llm | StrOutputParser()

# Run it
result = chain.invoke({"topic": "Machine Learning"})
print(result)
\`\`\`

### Step 3: Build Multi-Step Chain

\`\`\`python
from langchain_core.prompts import ChatPromptTemplate

# First step
translate_prompt = ChatPromptTemplate.from_template(
    "Translate to French: {text}"
)
translate_chain = translate_prompt | llm

# Second step
explain_prompt = ChatPromptTemplate.from_template(
    "Explain this French text: {french_text}"
)
explain_chain = explain_prompt | llm

# Run both
english = "Hello, how are you?"
french = translate_chain.invoke({"text": english})
explanation = explain_chain.invoke({"french_text": french})

print(f"French: {french}")
print(f"Explanation: {explanation}")
\`\`\`

### Step 4: Create a Chain with Memory

\`\`\`python
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationChain

memory = ConversationBufferMemory()

# Chain that remembers conversation
conversation = ConversationChain(
    llm=llm,
    memory=memory,
    verbose=True
)

# Each call remembers previous context
response1 = conversation.run("Hi! I'm interested in Python")
response2 = conversation.run("What are the main uses?")
response3 = conversation.run("How do I get started?")

# The LLM remembers the context!
\`\`\`

### Step 5: Build Reusable Components

\`\`\`python
# Create a "summarizer" chain
summary_chain = ChatPromptTemplate.from_template(
    "Summarize in 2 sentences: {text}"
) | llm | StrOutputParser()

# Create a "translator" chain
translation_chain = ChatPromptTemplate.from_template(
    "Translate to Spanish: {text}"
) | llm | StrOutputParser()

# Reuse them
document = "Python is a programming language..."
summary = summary_chain.invoke({"text": document})
spanish = translation_chain.invoke({"text": document})
\`\`\`

---

## 📚 Resources
- [LangChain Documentation](https://python.langchain.com/)
- [Chains & Composition](https://python.langchain.com/docs/modules/chains/)
- [Anthropic Integration](https://python.langchain.com/docs/integrations/llms/anthropic)`,
      challenge: `# BROWSER: Understand LangChain concepts
concepts = {
    "Chain": "Sequence of operations piped together",
    "Prompt Template": "Reusable template with variables",
    "Memory": "Stores conversation history",
    "Agent": "LLM that makes decisions",
    "Tool": "Function an agent can call"
}

for concept, description in concepts.items():
    print(f"{concept}: {description}")`,
      resources: [
        { name: "LangChain Docs", url: "https://python.langchain.com/" },
        { name: "Chains", url: "https://python.langchain.com/docs/modules/chains/" },
        { name: "Anthropic in LangChain", url: "https://python.langchain.com/docs/integrations/llms/anthropic" }
      ],
      expectedOutput: "Chain: Sequence of operations piped together\nPrompt Template: Reusable template with variables\nMemory: Stores conversation history\nAgent: LLM that makes decisions\nTool: Function an agent can call"
    },
    {
      name: "Vector Databases & Embeddings",
      brief: "Search and retrieve similar content",
      instruction: `## 🔍 Vector Databases & Embeddings

**🔄 HYBRID LEARNING MODE** - Learn concepts in browser, build search systems locally!

Embeddings let you find similar text using math!

---

## What are Embeddings?

Embeddings convert text to numbers (vectors):
- "dog" → [0.2, 0.5, -0.3, ...]
- "puppy" → [0.1, 0.6, -0.2, ...]
- Similarity = distance between vectors

---

## How to Create Embeddings

\`\`\`python
from openai import OpenAI

client = OpenAI(api_key="sk-...")

response = client.embeddings.create(
    input="The quick brown fox",
    model="text-embedding-3-small"
)

embedding = response.data[0].embedding
print(embedding)  # List of numbers
\`\`\`

---

## Vector Databases

Store and search embeddings:
- **Pinecone** - Cloud-based
- **Weaviate** - Open source
- **Milvus** - Open source
- **FAISS** - Facebook AI Similarity Search

---

## Semantic Search

Find similar documents:
1. Convert query to embedding
2. Search vector database
3. Get similar documents
4. Return to user

---

## ✅ Key Points

- Embeddings = vectors of numbers
- Similar text = close vectors
- Databases index vectors efficiently
- Semantic search finds meaning
- Essential for RAG (Retrieval Augmented Generation)

---

## 🖥️ LOCAL PRACTICE GUIDE

### Step 1: Install Libraries

\`\`\`bash
pip install openai
pip install pinecone-client  # or weaviate-client
\`\`\`

### Step 2: Create Embeddings

\`\`\`python
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Create embedding
texts = [
    "Python is a programming language",
    "Dogs are loyal animals",
    "Coffee is a popular beverage"
]

embeddings = []
for text in texts:
    response = client.embeddings.create(
        input=text,
        model="text-embedding-3-small"
    )
    embedding = response.data[0].embedding
    embeddings.append(embedding)
    print(f"Created embedding for: {text}")
\`\`\`

### Step 3: Calculate Similarity

\`\`\`python
import math

def cosine_similarity(vec1, vec2):
    """Calculate similarity between two vectors"""
    dot_product = sum(a*b for a,b in zip(vec1, vec2))
    mag1 = math.sqrt(sum(a*a for a in vec1))
    mag2 = math.sqrt(sum(b*b for b in vec2))
    return dot_product / (mag1 * mag2)

# Compare embeddings
for i in range(len(embeddings)):
    for j in range(i+1, len(embeddings)):
        similarity = cosine_similarity(embeddings[i], embeddings[j])
        print(f"Similarity {i}-{j}: {similarity:.2f}")
\`\`\`

### Step 4: Setup Pinecone (Free Tier)

\`\`\`bash
pip install pinecone-client
\`\`\`

\`\`\`python
import pinecone

# Initialize Pinecone
pinecone.init(api_key="YOUR_API_KEY", environment="gcp-starter")

# Create index
pinecone.create_index(
    "documents",
    dimension=1536,  # Size of embeddings
    metric="cosine"
)

# Get index
index = pinecone.Index("documents")

# Store embeddings
for i, embedding in enumerate(embeddings):
    index.upsert([(f"doc_{i}", embedding, {"text": texts[i]})])
\`\`\`

### Step 5: Semantic Search

\`\`\`python
# Query embedding
query = "Programming languages"
query_response = client.embeddings.create(
    input=query,
    model="text-embedding-3-small"
)
query_embedding = query_response.data[0].embedding

# Search
results = index.query(query_embedding, top_k=2, include_metadata=True)

for match in results["matches"]:
    print(f"Match: {match['metadata']['text']} (score: {match['score']})")
\`\`\`

---

## 📚 Resources
- [OpenAI Embeddings](https://platform.openai.com/docs/guides/embeddings)
- [Pinecone Docs](https://docs.pinecone.io/)
- [Vector Database Comparison](https://www.databricks.com/blog/2023/04/04/vector-databases.html)`,
      challenge: `# BROWSER: Understand vector similarity
import math

def similarity(a, b):
    """Simplified similarity calculation"""
    return sum(x*y for x,y in zip(a, b))

vec1 = [1, 0, 1]  # Programming language
vec2 = [1, 0, 0.9]  # Similar - programming
vec3 = [0, 1, 0]  # Different - animals

print(f"Similar vectors: {similarity(vec1, vec2):.1f}")
print(f"Different vectors: {similarity(vec1, vec3):.1f}")`,
      resources: [
        { name: "OpenAI Embeddings", url: "https://platform.openai.com/docs/guides/embeddings" },
        { name: "Pinecone", url: "https://docs.pinecone.io/" },
        { name: "Vector Databases", url: "https://www.databricks.com/blog/2023/04/04/vector-databases.html" }
      ],
      expectedOutput: "Similar vectors: 1.9\nDifferent vectors: 0.0"
    },
    {
      name: "Building AI Agents",
      brief: "Create autonomous AI agents with tools",
      instruction: `## 🤖 AI Agents

**🔄 HYBRID LEARNING MODE** - Learn agent concepts in browser, build agents locally!

Agents are AI systems that can use tools to accomplish goals.

---

## What is an Agent?

An agent:
1. **Receives** a goal/question
2. **Thinks** about what to do
3. **Decides** to use a tool
4. **Uses** the tool
5. **Observes** the result
6. **Repeats** until goal is reached

---

## Agent Loop

\`\`\`
User: "What's the weather in London?"
  ↓
Agent: "I need to use a weather tool"
  ↓
Agent Uses: weather_forecast(city="London")
  ↓
Tool Returns: "Sunny, 25°C"
  ↓
Agent: "The weather in London is sunny and 25°C"
\`\`\`

---

## Agent Components

- **LLM** - Makes decisions
- **Tools** - Functions it can call
- **Memory** - Remembers context
- **Loop** - Repeats until done

---

## ✅ Key Points

- Agents are decision-makers
- Tools extend agent capabilities
- Memory helps with context
- Multiple agents can work together
- Essential for complex tasks

---

## 🖥️ LOCAL PRACTICE GUIDE

### Step 1: Install LangChain AgentToolkit

\`\`\`bash
pip install langchain
pip install langchain-anthropic
pip install langchain-community
\`\`\`

### Step 2: Define Agent Tools

\`\`\`python
from langchain_core.tools import tool

@tool
def add(a: int, b: int) -> int:
    """Add two numbers"""
    return a + b

@tool
def multiply(a: int, b: int) -> int:
    """Multiply two numbers"""
    return a * b

@tool
def get_current_time() -> str:
    """Get the current time"""
    from datetime import datetime
    return datetime.now().strftime("%H:%M:%S")

tools = [add, multiply, get_current_time]
\`\`\`

### Step 3: Create Agent

\`\`\`python
from langchain_anthropic import ChatAnthropic
from langchain.agents import create_tool_calling_agent, AgentExecutor
from langchain_core.prompts import ChatPromptTemplate
import os
from dotenv import load_dotenv

load_dotenv()

# Initialize LLM
llm = ChatAnthropic(
    model="claude-3-sonnet-20240229",
    api_key=os.getenv("ANTHROPIC_API_KEY")
)

# Create prompt
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant with access to tools."),
    ("human", "{input}"),
])

# Create agent
agent = create_tool_calling_agent(llm, tools, prompt)

# Create executor
executor = AgentExecutor(agent=agent, tools=tools, verbose=True)
\`\`\`

### Step 4: Run Agent

\`\`\`python
# Ask agent to do something
result = executor.invoke({
    "input": "What time is it? Also, multiply 5 by 7 and add 10"
})

print(result["output"])
\`\`\`

### Step 5: Complex Agent Example

\`\`\`python
@tool
def search_database(query: str) -> str:
    """Search product database"""
    # Simulate search
    products = {
        "laptop": "MacBook Pro - $1999",
        "phone": "iPhone 14 - $999",
        "tablet": "iPad - $599"
    }
    return products.get(query.lower(), "Not found")

@tool
def calculate_discount(price: float, percent: float) -> float:
    """Calculate discounted price"""
    return price * (1 - percent/100)

# Add to tools
tools.extend([search_database, calculate_discount])

# Agent can now:
# 1. Search for products
# 2. Calculate discounts
# 3. Do math
# 4. Tell time
# All automatically!
\`\`\`

### Step 6: Run Complex Task

\`\`\`python
result = executor.invoke({
    "input": "Find a laptop, apply 20% discount, and tell me the new price"
})

# Agent will:
# 1. Use search_database tool
# 2. Parse the price
# 3. Use calculate_discount tool
# 4. Return final answer
\`\`\`

---

## 📚 Resources
- [LangChain Agents](https://python.langchain.com/docs/modules/agents/)
- [Tool Calling](https://docs.anthropic.com/claude/docs/tool-use)
- [Agent Patterns](https://github.com/langchain-ai/langchain/tree/master/templates)`,
      challenge: `# BROWSER: Understand agent architecture
agent_components = {
    "LLM": "Makes decisions and reasoning",
    "Tools": ["search", "calculate", "send_email"],
    "Memory": "Conversation history",
    "Loop": "Think -> Decide -> Use Tool -> Observe -> Repeat"
}

print("Agent Components:")
print(f"- LLM: {agent_components['LLM']}")
print(f"- Tools: {', '.join(agent_components['Tools'])}")
print(f"- Memory: {agent_components['Memory']}")`,
      resources: [
        { name: "LangChain Agents", url: "https://python.langchain.com/docs/modules/agents/" },
        { name: "Tool Calling", url: "https://docs.anthropic.com/claude/docs/tool-use" },
        { name: "Agent Patterns", url: "https://github.com/langchain-ai/langchain/tree/master/templates" }
      ],
      expectedOutput: "Agent Components:\n- LLM: Makes decisions and reasoning\n- Tools: search, calculate, send_email\n- Memory: Conversation history"
    }
  ],
  project: { title: "AI Assistant", desc: "Build an AI-powered assistant with LLMs and tools" }
};
