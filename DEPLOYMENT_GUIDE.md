# Deployment Guide - Separate CI/CD Pipelines for Wardrobe & Closet

## Overview
This repository now uses separate GitHub Actions workflows for each application:
- **Wardrobe** (Next.js Frontend) - deploys via `deploy/wardrobe` branch
- **Closet** (Java Backend) - deploys via `deploy/closet` branch

---

## ✅ Changes Made

### 1. GitHub Branches Created
- `deploy/closet` - Entry point for Java app deployments
- `deploy/wardrobe` - Entry point for Next.js app deployments

### 2. Updated Workflows
- **`.github/workflows/main_closet.yml`**
  - Now triggers only on `deploy/closet` branch
  - Includes Java 17, Maven build, and JAR packaging
  
- **`.github/workflows/main_wardrobe.yml`**
  - Now triggers only on `deploy/wardrobe` branch
  - Includes Node.js setup, npm install, and Next.js build

---

## 🚀 How to Deploy

### For Closet (Java Backend):
```bash
# Make your changes to closet/ folder
# Then merge into deploy/closet branch

git checkout deploy/closet
git merge main  # or cherry-pick specific commits
git push origin deploy/closet

# GitHub Actions will automatically:
# 1. Build with Maven
# 2. Generate JAR file
# 3. Deploy to Azure App Service "closet"
```

### For Wardrobe (Next.js Frontend):
```bash
# Make your changes to wardrobe/ folder
# Then merge into deploy/wardrobe branch

git checkout deploy/wardrobe
git merge main  # or cherry-pick specific commits
git push origin deploy/wardrobe

# GitHub Actions will automatically:
# 1. Install dependencies
# 2. Build Next.js app
# 3. Deploy to Azure App Service "wardrobe"
```

---

## 🔧 Azure Configuration Steps

### For Both Apps:

#### Step 1: Verify Azure Secrets in GitHub
Go to **GitHub Repo Settings → Secrets and variables → Actions** and confirm these secrets exist:

**For Closet:**
- `AZUREAPPSERVICE_CLIENTID_79187E44309B42EEBCF334C8CD567A47`
- `AZUREAPPSERVICE_TENANTID_B7808DED37D1412F850F285F1274A881`
- `AZUREAPPSERVICE_SUBSCRIPTIONID_EDDB20E9A7D14455915E1EC213EA1BD5`

**For Wardrobe:**
- `AZUREAPPSERVICE_CLIENTID_B44DE2EEA19F47D4A50EF4F105FD4E27`
- `AZUREAPPSERVICE_TENANTID_E4097A4D4E20444EBA1AE1212477A12C`
- `AZUREAPPSERVICE_SUBSCRIPTIONID_D6D20173DDD341F68C101F13DBD1F3AF`

If any secrets are missing, regenerate them from Azure:
1. Go to **Azure Portal → App Service (closet/wardrobe)**
2. Select **Deployment Center**
3. Choose **GitHub Actions**
4. Follow the steps to create new secrets

#### Step 2: Configure App Service Deployment Source

**For Closet (Java):**
1. Go to **Azure Portal → App Service → closet**
2. Navigate to **Deployment Center**
3. Set:
   - **Source:** GitHub
   - **Organization:** Your GitHub org
   - **Repository:** pulseflow
   - **Branch:** `deploy/closet`
4. Save configuration

**For Wardrobe (Next.js):**
1. Go to **Azure Portal → App Service → wardrobe**
2. Navigate to **Deployment Center**
3. Set:
   - **Source:** GitHub
   - **Organization:** Your GitHub org
   - **Repository:** pulseflow
   - **Branch:** `deploy/wardrobe`
4. Save configuration

#### Step 3: Configure App Settings (Azure)

**For Closet (Java):**
1. Go to **App Service → closet → Configuration**
2. Add these if missing:
   - `JAVA_VERSION`: 17
   - `JAVA_OPTS`: (as needed for your app)

**For Wardrobe (Next.js):**
1. Go to **App Service → wardrobe → Configuration**
2. Add these if missing:
   - `NODE_ENV`: production
   - `NPM_CONFIG_PRODUCTION`: true
3. Ensure startup command is correct (should auto-detect Next.js)
4. If not set, manually set: `npm run start`

#### Step 4: Startup Command (Wardrobe Only)

For Next.js on Azure App Service:
1. Go to **App Service → wardrobe → Settings → General**
2. Set **Startup Command** to:
   ```
   npm run start
   ```

#### Step 5: Enable Continuous Deployment (Optional)

If you want automatic deployments when you push to the deploy branches:
1. Go to each App Service → **Deployment Center**
2. Toggle **"Continuous deployment"** to **ON**

---

## 📋 Deployment Workflow Diagram

```
Your Code Changes
       ↓
   main branch (development)
       ↓
(Cherry-pick or merge specific commits)
       ↓
   ┌─────────────────────────────────┐
   │   deploy/closet   deploy/wardrobe│
   │   (Java backend)  (Next.js UI)   │
   └────────┬──────────────┬──────────┘
            ↓              ↓
      GitHub Actions  GitHub Actions
            ↓              ↓
      Build JAR       Build Next.js
            ↓              ↓
      Azure Deploy   Azure Deploy
```

---

## ⚠️ Important Notes

### Branch Strategy
- **`main`**: Used for development and code reviews (PRs)
- **`deploy/closet`**: Automatically synced for Java deployments
- **`deploy/wardrobe`**: Automatically synced for Next.js deployments

### To Deploy a Change Today:

1. **Make changes** on `main` branch (or in a feature branch merged to `main`)
2. **Test locally** to ensure the build works
3. **Cherry-pick or merge** the changes to the appropriate deploy branch

**Example:**
```bash
# You have changes on main for wardrobe frontend
git checkout deploy/wardrobe
git pull origin main
# OR selectively merge: git cherry-pick <commit-hash>
git push origin deploy/wardrobe
```

### Troubleshooting

**GitHub Actions failing?**
- Check **Actions** tab → select the failed workflow
- Look for build errors in logs
- Common issues:
  - Missing dependencies: Ensure `pom.xml` (Java) or `package.json` (Node.js) are correct
  - Java version mismatch: Verify `pom.xml` target Java version
  - Node version: Workflows default to Node 20

**Azure Deployment failing?**
- Check **Deployment Center** logs
- Verify secrets are set correctly
- Check **App Service Logs** → **Application logs** (stdout/stderr)
- Ensure startup command and environment variables are correct

**Different apps deploying when they shouldn't?**
- Workflows only trigger on their specific branches
- Make sure you're pushing to the correct deploy branch
- Check GitHub workflow triggers in `.github/workflows/`

---

## 📝 Next Steps

1. ✅ Verify all GitHub secrets are in place
2. ✅ Configure Azure App Services' deployment sources
3. ✅ Set startup commands and environment variables in Azure
4. ✅ Test by pushing a change to one of the deploy branches
5. ✅ Monitor **GitHub Actions** and **Azure Deployment Center** logs

For questions or issues, refer to this guide or check the GitHub Actions logs!
