# ODISEE Student Progression - Project Guide

## 📁 Folder Structure Overview

```
odisee-student-progression/
├── index.html                 # Main website homepage
├── problem.html               # Problem analysis page
├── systems.html               # Systems model documentation
├── interventions.html         # Intervention strategies page
├── roadmap.html               # Implementation roadmap
├── team.html                  # Team information
├── README.md                  # Project documentation
├── PROJECT_GUIDE.md           # This file
│
├── css/
│   └── styles.css             # Main stylesheet for all pages
│
├── js/                        # (Create as needed)
│   ├── nav.js                 # Navigation enhancements
│   └── analytics.js           # Future analytics features
│
├── assets/
│   ├── images/                # Website and presentation images
│   │   ├── logo.png
│   │   ├── hero-image.jpg
│   │   └── team-photos/
│   │
│   ├── documents/             # Thesis and research documents
│   │   ├── ODISSEE_Thesis_Proposal.docx
│   │   ├── Literature_Review.docx
│   │   ├── Institutional_Analysis.docx
│   │   ├── Interview_Guides.pdf
│   │   ├── Research_Ethics_Approval.pdf
│   │   └── References.bib
│   │
│   └── data/                  # Research data and analysis
│       ├── student_progression_data.xlsx
│       ├── stakeholder_feedback_summary.docx
│       ├── causal_loop_diagrams/
│       └── implementation_metrics/
│
└── .gitignore                 # Git ignore file
```

## 🚀 Getting Started

### 1. Open the Website
- Open `index.html` in a web browser to view the complete project website
- Navigate through all pages to understand the project structure
- Test responsiveness on mobile devices

### 2. Customize Your Content
All HTML pages are pre-built but ready for your specific content:

**Key customizations needed:**
- [ ] Add your VUB logo to `assets/images/logo.png`
- [ ] Add Odisee logo to `assets/images/`
- [ ] Update research team information in `team.html`
- [ ] Add actual student progression data
- [ ] Include your specific interventions and timeline
- [ ] Update GitHub repository link in footer

### 3. Add Research Materials
Place your thesis documents in `assets/documents/`:
- Thesis proposal
- Literature review
- Institutional analysis
- Interview guidelines
- Ethics approval documents
- Reference bibliography

### 4. Organize Data
Place research data in `assets/data/`:
- Student progression statistics (CSV/Excel)
- Causal loop diagrams (images/Mermaid diagrams)
- Implementation tracking
- Stakeholder feedback summaries

## 📝 Website Pages Explained

| Page | Purpose | Content |
|------|---------|---------|
| **index.html** | Landing page | Project overview, quick navigation, key information |
| **problem.html** | Context setting | Problem analysis, current challenges, research questions |
| **systems.html** | Theoretical framework | Systems model, feedback loops, key components |
| **interventions.html** | Solution design | Proposed interventions across three levels |
| **roadmap.html** | Implementation plan | Phased approach with timelines and milestones |
| **team.html** | People & partnerships | Team information, affiliations, contact |

## 🎨 Customizing Design

### Colors
The website uses a professional academic color scheme. To customize, edit in `css/styles.css`:

```css
:root {
  --primary: #1e5a96;       /* Main blue */
  --accent: #d4a574;        /* Gold accent */
  --bg: #f5f3f0;            /* Background */
  /* ... other colors */
}
```

### Fonts
Currently using Google Fonts: Playfair Display, Cormorant Garamond
Update in `css/styles.css` if you prefer different fonts

### Logo
Replace placeholder with your actual logos:
- `assets/images/logo.png` - Website header logo
- `assets/images/vub-logo.png` - VUB official logo
- `assets/images/odisee-logo.png` - Odisee official logo

## 💾 Version Control Setup

### First-time Git Setup
```bash
cd odisee-student-progression
git status              # Check status
git add .              # Stage all files
git commit -m "Initial project framework setup"
git push origin main   # Push to GitHub
```

### Regular Updates
```bash
# After making changes
git add .
git commit -m "Describe what you changed"
git push origin main
```

### Recommended Commit Messages
- `Update thesis content` - When revising thesis material
- `Add research data` - When uploading new data files
- `Update website with findings` - When publishing new results
- `Add team member information` - When adding new people

## 📊 Data Management

### Where to Store What

**In GitHub (version control):**
- HTML/CSS/JS files
- README and documentation
- Small reference documents
- `.gitignore` configuration

**In OneDrive (alongside GitHub repo):**
- Large thesis documents (.docx)
- Large datasets
- Backups of important files
- Research materials (interviews, notes)

**Not in GitHub (per .gitignore):**
- Excel files with sensitive data
- Personal/confidential documents
- Large binary files
- System files

## 🔄 Workflow Suggestions

### Weekly Updates
1. Update content on website as you progress
2. Commit changes to GitHub with clear messages
3. Store backup of important documents in OneDrive

### Before Major Milestones
1. Review all website content for accuracy
2. Update roadmap with actual progress
3. Commit all changes with milestone tag
4. Push to GitHub

### For Thesis Submission
1. Ensure README.md is complete and current
2. Verify all links work on website
3. Check data files are properly documented
4. Push final version to GitHub with version tag

## 🔗 Important Links

- **GitHub Repository:** https://github.com/ChithraRaniJayaraman/odisee-student-progression
- **VUB Website:** https://www.vub.be
- **OneDrive Folder:** C:\Users\venpa\OneDrive - Vrije Universiteit Brussel\...

## 📚 Next Steps

1. ✅ **Framework Created** - Basic folder and website structure complete
2. 📝 **Add Content** - Customize with your actual research findings
3. 📊 **Add Data** - Upload student progression data to assets/data/
4. 👥 **Update Team** - Add real team member information
5. 🖼️ **Add Media** - Add logos, images, diagrams
6. 🔍 **Test Website** - Review all pages in different browsers
7. 📤 **Push to GitHub** - Commit all changes and push to repository
8. 📋 **Regular Updates** - Keep content fresh as research progresses

## 💡 Tips for Success

- **Keep GitHub synced** - Push updates regularly
- **Use descriptive commit messages** - Makes tracking changes easier
- **Maintain OneDrive backup** - Important documents stay safe
- **Test before committing** - Ensure all links and pages work
- **Document your process** - Update README as you learn
- **Engage stakeholders** - Share website progress with Odisee

## ⚠️ Important Reminders

- Keep sensitive Odisee data private (don't commit to public GitHub)
- Maintain regular backups in OneDrive
- Test website responsiveness on mobile devices
- Update copyright year and author information as needed
- Review and update content regularly

---

**Created:** April 2026  
**Framework Version:** 1.0  
**For:** ODISSEE Student Progression Research Team
