# Deployment Quick Guide

## Required environment variables

Set these on your hosting platform:

```text
MONGO_URL=mongodb+srv://<username>:<password>@<cluster-url>/wanderLust?retryWrites=true&w=majority
NODE_ENV=production
```

Do not commit your real Atlas URL to GitHub.

## Start command

```bash
npm start
```

## Render settings

Use these values:

```text
Build Command: npm install
Start Command: npm start
Root Directory: WanderLust
```
