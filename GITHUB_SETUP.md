# How to Push Your Project to GitHub

Follow these steps to upload your project to GitHub and submit it.

## Step 1: Create GitHub Account (if you don't have one)

1. Go to https://github.com
2. Click "Sign up"
3. Complete the registration

## Step 2: Create New Repository on GitHub

1. Log in to GitHub
2. Click the "+" icon in the top-right corner
3. Select "New repository"
4. Fill in the details:
   - **Repository name**: `taskflow-assignment` (or any name you prefer)
   - **Description**: "Full-stack task management app with authentication - Frontend Developer Assignment"
   - **Visibility**: ✅ Public (so recruiters can see it)
   - **DO NOT** initialize with README (we already have one)
5. Click "Create repository"

## Step 3: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

### Option A: If you see the setup page

Copy the repository URL (should look like):
```
https://github.com/YOUR_USERNAME/taskflow-assignment.git
```

### Option B: Run these commands in your terminal

Open terminal in the project folder and run:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/taskflow-assignment.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 4: Verify Upload

1. Refresh your GitHub repository page
2. You should see all your files uploaded
3. Check that README.md displays properly

## Step 5: Get Your Repository Link

Your repository URL will be:
```
https://github.com/YOUR_USERNAME/taskflow-assignment
```

Copy this link - you'll need it for submission!

## Step 6: Prepare Email Submission

### Create Email with:

**To**: 
- saami@bajarangs.com
- nagasai@bajarangs.com  
- chetan@bajarangs.com

**CC**: 
- sonika@primetrade.ai

**Subject**: 
```
Frontend Developer Task
```

**Email Body Template**:

```
Dear Hiring Team,

I am writing to submit my completed Frontend Developer assignment.

Project Details:
- GitHub Repository: https://github.com/YOUR_USERNAME/taskflow-assignment
- Live Demo: [If deployed, add link here]

Assignment Deliverables:
✅ Full-stack application (React + Node.js + MongoDB)
✅ JWT-based authentication (register/login/logout)
✅ Complete CRUD operations on tasks
✅ Responsive dashboard with search and filters
✅ API documentation and Postman collection
✅ Scalability notes for production deployment

Technology Stack:
- Frontend: React 18, TailwindCSS, Vite
- Backend: Express.js, MongoDB, JWT
- Security: bcrypt, helmet, rate-limiting

All code is well-documented with comprehensive README files in the repository.

Key Features:
- Secure authentication with password hashing
- Protected routes with middleware
- Real-time search and filtering
- Task statistics dashboard
- User profile management
- Fully responsive design
- Production-ready scalable architecture

Please find my resume attached.

Repository Link: https://github.com/YOUR_USERNAME/taskflow-assignment

I look forward to discussing the implementation in detail.

Best regards,
[Your Name]
[Your Email]
[Your Phone Number]
```

### Attachments:
1. ✅ Your Resume (PDF)
2. ✅ Log files (if you have any from testing)
3. ✅ Optional: Screenshots of the application

## Step 7: Optional - Deploy Your App

To make an even better impression, deploy your app:

### Frontend Deployment (Vercel - Free)

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework: Vite
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Deploy!

You'll get a live URL like: `https://taskflow-assignment.vercel.app`

### Backend Deployment (Railway - Free)

1. Go to https://railway.app
2. Sign up with GitHub
3. Create new project
4. Deploy from GitHub repo
5. Set environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: Your secret key
   - `NODE_ENV`: production
6. Deploy!

Update frontend API URL to point to Railway backend URL.

## Step 8: Update SUBMISSION.md

Before finalizing, update the GitHub URL in SUBMISSION.md:

```bash
# Open SUBMISSION.md and replace [GITHUB_URL] with your actual URL
# Then commit the change
git add SUBMISSION.md
git commit -m "Update GitHub repository link"
git push
```

## ✅ Final Checklist

- [ ] Created GitHub account
- [ ] Created public repository
- [ ] Pushed all code to GitHub
- [ ] Verified all files are uploaded
- [ ] README.md displays correctly
- [ ] Updated SUBMISSION.md with GitHub URL
- [ ] Prepared resume
- [ ] Drafted email with proper subject line
- [ ] Added all recipient emails
- [ ] (Optional) Deployed frontend and backend
- [ ] Ready to send!

## 🎯 Important Notes

1. **DO NOT** commit the `.env` file (it's already in .gitignore)
2. Make sure the repository is **PUBLIC** so recruiters can access it
3. Test that all links in your README work
4. Consider adding screenshots to your README
5. Make sure your commit messages are professional

## 📧 Need Help?

If you get stuck:
1. Check GitHub's documentation: https://docs.github.com
2. Search for errors on Stack Overflow
3. GitHub Support: support@github.com

---

**Good luck with your submission! 🚀**
