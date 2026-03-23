# 🚀 Portfolio Deployment Guide

## Recommended: Deploy to Vercel (2 Minutes)

### Prerequisites
- Git installed on your computer
- GitHub account
- Your code pushed to GitHub

---

## Step 1: Push Code to GitHub

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit - Portfolio website"

# Push to GitHub
git remote add origin https://github.com/brijeshku007/portfolio.git
git branch -M main
git push -u origin main
```

**Or use GitHub Desktop:**
1. Open GitHub Desktop
2. Add your repository: `File > Add Local Repository`
3. Select folder: `c:\Users\91770\OneDrive\Desktop\portfolio`
4. Commit and push to GitHub

---

## Step 2: Deploy to Vercel

### Method A: Deploy via Vercel Dashboard (Easiest)

1. **Go to Vercel**: https://vercel.com
2. **Sign Up/Login**: Use your GitHub account
3. **Click "Add New Project"**
4. **Import Git Repository**:
   - Select "Import Git Repository"
   - Find your portfolio repo: `brijeshku007/portfolio`
   - Click "Import"
5. **Configure Project**:
   - Framework Preset: **Vite**
   - Root Directory: `./client` (IMPORTANT!)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. **Click "Deploy"**
7. **Done!** Your site will be live at: `https://portfolio-brijeshkumar.vercel.app`

### Method B: Deploy via CLI (Advanced)

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to client folder
cd client

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name? portfolio
# - Directory? ./client
# - Override settings? N
```

---

## Step 3: Add Custom Domain (Optional)

If you want `brijeshkumar.dev` or similar:

1. **Buy Domain**: Namecheap, GoDaddy, or Google Domains
2. **In Vercel Dashboard**:
   - Go to your project settings
   - Click "Domains"
   - Add your domain: `brijeshkumar.dev`
3. **Update DNS Records** at your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: Auto
   ```
4. **Wait 24-48 hours** for DNS propagation

---

## Alternative: Deploy to Netlify

### Quick Steps:

1. **Go to**: https://netlify.com
2. **Sign up** with GitHub
3. **Click "Add new site" > "Import an existing project"**
4. **Connect to GitHub** and select your repo
5. **Build Settings**:
   - Base directory: `client`
   - Build command: `npm run build`
   - Publish directory: `client/dist`
6. **Click "Deploy site"**

**Netlify Bonus**: They offer built-in forms (100 submissions/month free) - you could replace Formspree!

---

## Pre-Deployment Checklist

✅ **Update Contact Form**: Replace Formspree ID with actual one
✅ **Test Locally**: Run `npm run build` in client folder
✅ **Check Images**: Ensure all project images are in public folder
✅ **Remove Sensitive Data**: No API keys or passwords in code
✅ **Update Meta Tags**: In `client/index.html` for SEO

---

## Post-Deployment Testing

1. **Test All Sections**:
   - Navigation links work
   - Smooth scrolling works
   - Mobile menu functions
   - Contact form submits

2. **Check Performance**:
   - Load time under 3 seconds
   - Images load properly
   - No console errors

3. **Mobile Testing**:
   - Test on phone/tablet
   - Responsive design works
   - Touch interactions smooth

---

## Environment Variables (If Needed)

If you add backend later:

1. **In Vercel Dashboard**:
   - Go to Project Settings > Environment Variables
   - Add variables like:
     - `VITE_FORMSPREE_ID=xpqygkwg`
     - `VITE_API_URL=https://your-api.com`
2. **Update code** to use: `import.meta.env.VITE_FORMSPREE_ID`

---

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch = automatic deployment
- View deployment logs in Vercel dashboard
- Rollback to previous versions if needed

---

## Troubleshooting

### Build Fails?
```bash
# Test build locally first
cd client
npm run build

# Fix any errors shown
```

### Images Not Loading?
- Check paths: Should be `/Aireal1.png` not `./Aireal1.png`
- Ensure files are in `client/public` folder

### Styles Broken?
- Verify Tailwind config is correct
- Check if CSS files are imported in main.jsx

### Contact Form Not Working?
- Verify Formspree ID is correct
- Check browser console for errors
- Ensure CORS is enabled in Formspree settings

---

## Quick Deploy Commands Summary

```bash
# 1. Navigate to project
cd c:\Users\91770\OneDrive\Desktop\portfolio

# 2. Push to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main

# 3. Deploy to Vercel (if using CLI)
cd client
vercel --prod
```

---

## Live Demo Links

After deployment, share these:
- **Live URL**: `https://portfolio-brijeshkumar.vercel.app`
- **GitHub Repo**: `https://github.com/brijeshku007/portfolio`

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Vite Deploy Guide: https://vitejs.dev/guide/static-deploy.html
