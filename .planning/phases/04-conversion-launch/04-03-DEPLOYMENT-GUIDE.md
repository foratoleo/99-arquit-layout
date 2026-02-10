# Deployment Guide - RE Arquitetura & Design

**Plan:** 04-03
**Status:** Ready for deployment
**Last Updated:** 2026-02-10

---

## Prerequisites

### 1. Vercel Account
- Create account at https://vercel.com
- Connect to GitHub (or push code manually)

### 2. Domain (Optional but Recommended)
- Purchase domain: `re-arquitetura.com.br` (or similar)
- Access to domain DNS settings

### 3. Google Search Console (Optional)
- For SEO monitoring and verification

---

## Deployment Steps

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Authenticate with Vercel

```bash
vercel login
```

Follow the browser authentication flow.

### Step 3: Link Project to Vercel

```bash
cd /Users/forato/PROJECTS/99-lp-minimalista-gsd
vercel link
```

This creates a `.vercel` directory and links your project.

### Step 4: Deploy to Production

```bash
vercel --prod
```

This will:
- Build the Next.js application
- Deploy to Vercel's edge network
- Provide a production URL (e.g., `re-arquitetura.vercel.app`)

**Expected output:**
```
✔ Build successful
✔ Deployed to production
✔ Production URL: https://re-arquitetura.vercel.app
```

---

## Custom Domain Configuration

### Step 5: Add Custom Domain in Vercel

1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** > **Domains**
4. Click **Add Domain**
5. Enter: `re-arquitetura.com.br`

### Step 6: Configure DNS Records

At your domain registrar (e.g., Google Domains):

**A Record:**
| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 (Vercel's IP) |

**CNAME Record:**
| Type | Name | Value |
|------|------|-------|
| CNAME | www | cname.vercel-dns.com |

**Note:** Vercel will provide the correct IP addresses in the dashboard. Use the values shown there.

### Step 7: Wait for DNS Propagation

- Typical time: 1-2 hours
- Maximum time: 24-48 hours
- Vercel will automatically provision SSL certificate

---

## Environment Variables (Optional)

If you need environment variables, add them in Vercel dashboard:

1. Go to **Settings** > **Environment Variables**
2. Add variable: `NEXT_PUBLIC_SITE_URL`
3. Value: `https://re-arquitetura.com.br`
4. Select: **Production**, **Preview**, **Development**

---

## Post-Deployment Verification

### Check List

- [ ] Visit https://re-arquitetura.com.br
- [ ] Verify all pages load without errors
- [ ] Check SSL certificate (HTTPS works)
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Test WhatsApp button
- [ ] Verify sitemap.xml: `https://re-arquitetura.com.br/sitemap.xml`
- [ ] Verify robots.txt: `https://re-arquitetura.com.br/robots.txt`
- [ ] Check Open Graph tags with https://www.opengraph.xyz
- [ ] Run Lighthouse audit (target: Performance >90)

### Lighthouse Command

```bash
npx lighthouse https://re-arquitetura.com.br --view
```

### Expected Lighthouse Scores

| Metric | Target | Notes |
|--------|--------|-------|
| Performance | 90+ | Optimized images, fonts |
| Accessibility | 95+ | ARIA labels, alt text |
| Best Practices | 95+ | HTTPS, security headers |
| SEO | 95+ | Meta tags, sitemap, robots |

---

## Google Search Console Setup

### Step 1: Add Property

1. Go to https://search.google.com/search-console
2. Click **Add Property**
3. Select **URL prefix**
4. Enter: `https://re-arquitetura.com.br`

### Step 2: Verify Ownership

**Method 1: HTML Meta Tag (Recommended)**

1. Copy the verification meta tag from Search Console
2. Add to `src/app/layout.tsx` in the `<head>` section:
   ```tsx
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
3. Commit and redeploy
4. Click **Verify** in Search Console

**Method 2: DNS Record**

1. Copy TXT record from Search Console
2. Add to domain DNS settings
3. Wait for propagation
4. Click **Verify** in Search Console

### Step 3: Submit Sitemap

1. In Search Console, go to **Sitemaps**
2. Enter: `sitemap.xml`
3. Click **Submit**

---

## Ongoing Maintenance

### Content Updates

To update content without code changes:

1. Edit `src/lib/content.ts`
2. Commit changes
3. Push to GitHub (auto-deploys) or run `vercel --prod`

### Image Updates

1. Place new images in `public/images/`
2. Update paths in `src/lib/content.ts`
3. Test build: `npm run build`
4. Deploy: `vercel --prod`

### Monitoring

- **Vercel Analytics**: Built-in performance monitoring
- **Google Search Console**: Search traffic and indexing
- **Lighthouse CI**: Automated performance tracking

---

## Troubleshooting

### Issue: Build Fails

```bash
# Clean and rebuild locally first
rm -rf .next node_modules/.cache
npm run build
```

### Issue: Images Not Loading

- Check image paths in `src/lib/content.ts`
- Verify images exist in `public/images/`
- Check console for 404 errors

### Issue: DNS Not Propagating

```bash
# Check DNS propagation
dig re-arquitetura.com.br
nslookup re-arquitetura.com.br
```

### Issue: SSL Certificate Not Issued

- Ensure DNS records are correct
- Wait up to 24 hours
- Check Vercel dashboard for SSL status

---

## Contact

For deployment issues:
- Vercel Support: https://vercel.com/support
- Next.js Docs: https://nextjs.org/docs/deployment

---

## Summary Checklist

- [ ] Install Vercel CLI
- [ ] Authenticate with Vercel
- [ ] Link project
- [ ] Deploy to production
- [ ] Configure custom domain
- [ ] Update DNS records
- [ ] Wait for DNS propagation
- [ ] Verify SSL certificate
- [ ] Test all functionality
- [ ] Run Lighthouse audit
- [ ] Set up Google Search Console
- [ ] Submit sitemap

**Total estimated time:** 1-2 hours (excluding DNS propagation)
