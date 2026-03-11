// Infrastructure: Cloud vs Local Compute Topic
export const infrastructureDecisions = {
  name: "Infrastructure: Cloud vs Local Compute",
  brief: "Make informed decisions about deploying code: run locally, on servers, or in the cloud",
  instruction: `
## Infrastructure: Cloud vs Local Compute

Every app must run somewhere. Understanding where to run your code is critical for cost, security, and performance.

### Three Options

**1. Local Machine**
- Your laptop/desktop
- Cost: Free (hardware only)
- Control: 100%
- Scalability: Limited (single machine)
- Availability: Only when you turn it on

**2. Self-Hosted Server**
- Your own server/VPS
- Cost: $5-$100/month
- Control: High
- Scalability: Limited (single server)
- Availability: You manage uptime

**3. Cloud Provider**
- AWS, Google Cloud, Azure, Vercel, Railway
- Cost: Pay-as-you-go
- Control: Medium
- Scalability: Unlimited
- Availability: 99.99% uptime SLAs

### Cost Comparison

**Local Development:**
\`\`\`
Laptop: $1000 (one-time)
Electricity: $10/month
Running apps: Free (laptop already on)
If broken: DIY fix
═══════════════════════════════════════════
Total: $10/month for already-owned hardware
\`\`\`

**Self-Hosted Server (DigitalOcean):**
\`\`\`
Basic Droplet: $6/month
IP Address: Included
Bandwidth: 1TB/month
If broken: You restart it manually
═══════════════════════════════════════════
Total: $6/month
(But responsibility falls on you)
\`\`\`

**Cloud Serverless (Vercel/Railway):**
\`\`\`
Free Tier: Deploy code instantly
Hobby Plan: $7/month
Auto-scaling: Included
If broken: Auto-recovery
Support: Professional team
═══════════════════════════════════════════
Total: $7/month (with managed service)
\`\`\`

**Enterprise Cloud (AWS):**
\`\`\`
EC2 Instance: $50-$500/month
Database: $20-$100/month
Storage: $0.10/GB
If broken: Your responsibility to fix
═══════════════════════════════════════════
Total: $100-$1000+/month
(But can handle millions of users)
\`\`\`

### Decision Matrix

\`\`\`
Personal project?
├─ YES → Local or Vercel Free ✓
└─ NO  → Move to next question

Privacy critical (healthcare/finance)?
├─ YES → Self-hosted ✓
└─ NO  → Could use cloud

Traffic predictable?
├─ YES → VPS ✓
└─ NO  → Serverless ✓

Need auto-scaling?
├─ YES → Cloud ✓
└─ NO  → VPS or Local OK

Global audience?
├─ YES → Cloud with CDN ✓
└─ NO  → Local/VPS fine

Thousands of users?
├─ YES → Must use Cloud
└─ NO  → VPS OK
\`\`\`

### Real-World Examples

**Scenario 1: Personal Portfolio**
- Traffic: 100 visitors/month
- Uptime: Don't care
- Cost: Minimal
- **Choose:** Vercel Free ✓

**Scenario 2: Startup MVP**
- Traffic: Growing (100-10K users)
- Uptime: Important
- Cost: Limited budget
- **Choose:** Railway or Render ✓

**Scenario 3: Production SaaS**
- Traffic: Growing fast (100K+ users)
- Uptime: Critical (99.99%)
- Cost: Acceptable
- **Choose:** AWS or Azure ✓

**Scenario 4: Private Data App**
- Traffic: Internal (100 people)
- Privacy: Critical
- Control: Must be yours
- **Choose:** Self-hosted VPS ✓

### Deployment Examples

**Local (Development):**
\`\`\`bash
# Just run on your machine
python main.py
# Access at: http://localhost:8000
\`\`\`

**Cloud Serverless (Vercel):**
\`\`\`bash
# One command deploy
npm install -g vercel
vercel
# Deployed at: https://project.vercel.app
# Auto-scaling, HTTPS, CDN included
\`\`\`

**VPS (DigitalOcean):**
\`\`\`bash
# Manual setup required
ssh user@your-server.com
cd /app
python main.py &  # Run in background
# Access at: http://your-ip-address
\`\`\`

**Cloud (AWS):**
\`\`\`bash
# Complex setup with AWS CLI
aws ec2 run-instances ...
aws rds create-db-instance ...
# Requires DevOps knowledge
\`\`\`

### Hidden Costs

**Local:**
- Your time (24/7 monitoring)
- Internet reliability
- Computer reliability

**Self-Hosted:**
- Setup time
- Maintenance time
- Security patches
- Backup strategy

**Cloud:**
- Learning curve
- Configuration complexity
- Potential overspending

### Hybrid Approach (Best of Both)

\`\`\`
Development: Local on laptop
Testing: GitHub Actions (free CI/CD)
Staging: Vercel preview
Production: Railway or AWS
Database: Managed service (MongoDB Atlas, Supabase)
\`\`\`

This gives you:
✓ Fast local development
✓ Automated testing
✓ Easy staging/production
✓ No database administration

### Scaling Story

\`\`\`
Month 1: Local laptop development
Month 2: Deploy to Vercel Free
Month 3: Move to Railway Hobby ($7/month)
Month 6: Traffic grows, upgrade to Railroad ($20/month)
Month 12: 10K daily users, move to AWS ($100/month)
\`\`\`

Each step just scales up, no rewrite needed!

### Key Takeaway

**Start small, scale up only when needed.**

Don't pay for AWS enterprise features when Vercel free works fine! 💰

## 🖥️ LOCAL PRACTICE GUIDE

1. **Deploy to Vercel Free**
   - Take your React app
   - Connect to GitHub
   - Click Deploy
   - Get global URL, HTTPS, CDN
   - Totally free! ($0)

2. **Deploy to Railway**
   - Sign up at railway.app
   - Deploy Python app
   - See automatic scaling
   - Experience managed service

3. **Set up simple VPS**
   - Get $5/month DigitalOcean Droplet
   - Learn SSH and server basics
   - Deploy manually
   - See trade-offs vs cloud

4. **Compare costs**
   - Calculate your traffic
   - Estimate monthly costs
   - Local vs cloud vs VPS
   - Make informed decisions
  `,
  resources: [
    { 
      url: "https://vercel.com", 
      name: "Vercel - Deploy Free/Fast"
    },
    { 
      url: "https://railway.app", 
      name: "Railway - Generous Free Tier"
    },
    { 
      url: "https://www.digitalocean.com", 
      name: "DigitalOcean - Affordable VPS"
    }
  ]
};
