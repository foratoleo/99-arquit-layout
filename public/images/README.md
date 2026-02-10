# Image Documentation - RE Arquitetura & Design

## Current Status

**As of:** 2026-02-10
**Status:** Using high-quality placeholder images (Unsplash) for portfolio
**Action Required:** Client to provide final project photography

---

## Image Directory Structure

```
public/images/
├── hero/
│   └── hero-bg.jpg                    # Hero background (465KB - needs compression)
├── portfolio/
│   ├── (to be added)                  # Project photography
│   └── (to be added)
└── materiality/
    ├── materiality-1.jpg              # 0 bytes - EMPTY FILE
    ├── materiality-2.jpg              # 0 bytes - EMPTY FILE
    └── materiality-3.jpg              # 0 bytes - EMPTY FILE
```

---

## Required Images

### 1. Hero Section
| File | Required | Current | Notes |
|------|----------|---------|-------|
| `hero/hero-bg.jpg` | Yes | Present (465KB) | Needs compression (<200KB) |

**Optimization Required:**
- Current: 465KB (too large)
- Target: <200KB
- Action: Compress with TinyPNG or ImageOptim before production deployment

### 2. Portfolio Projects (8 projects × 3 images each = 24 images)

Current: Using Unsplash placeholder URLs (external)

**Required deliverables:**
- 24 project photos minimum
- Format: JPG or PNG
- Resolution: 1920px width minimum (for responsive scaling)
- Quality: 80-90% to balance file size and visual quality
- Naming convention: `project-id-01.jpg`, `project-id-02.jpg`, etc.

**Project List:**
1. `residencial-jardins-01.jpg` to `residencial-jardins-03.jpg`
2. `edificio-corporativo-pinheiros-01.jpg` to `edificio-corporativo-pinheiros-03.jpg`
3. `apartamento-higienopolis-01.jpg` to `apartamento-higienopolis-03.jpg`
4. `casa-vinhedo-01.jpg` to `casa-vinhedo-03.jpg`
5. `loft-vila-madalena-01.jpg` to `loft-vila-madalena-03.jpg`
6. `torre-office-itaim-01.jpg` to `torre-office-itaim-03.jpg`
7. `casa-lago-das-acacias-01.jpg` to `casa-lago-das-acacias-03.jpg`
8. `galeria-contemporanea-01.jpg` to `galeria-contemporanea-03.jpg`

### 3. Materiality Section (3 images)

Current: Empty files (0 bytes)

**Required deliverables:**
- 3 macro photography images showing craftsmanship details
- Focus areas:
  - `materiality-1.jpg`: Marcenaria/wood joinery details
  - `materiality-2.jpg`: Natural stone (granite, marble, quartzite)
  - `materiality-3.jpg`: Artisanal craftsmanship/metalwork

**Specs:**
- Format: JPG or PNG
- Resolution: 1920px width minimum
- Aspect ratio: 4:5 vertical (for card layout)
- Quality: 85-90% for macro detail preservation

---

## Image Preparation Guidelines

### For Photography Team
1. **Shoot Requirements:**
   - Natural lighting preferred (avoid harsh flash)
   - Clean, uncluttered backgrounds
   - Include wide shots + detail shots
   - Consistent color temperature across all images

2. **Post-Processing:**
   - Color correction for consistency
   - Sharpness: Medium-high for architectural details
   - Export settings: JPG, Quality 85, Progressive

3. **File Organization:**
   ```
   RE-Arquitetura-Images/
   ├── 01-Hero/
   │   └── hero-bg-final.jpg
   ├── 02-Portfolio/
   │   ├── Residencial-Jardins/
   │   │   ├── RJ-01.jpg
   │   │   ├── RJ-02.jpg
   │   │   └── RJ-03.jpg
   │   └── [other projects...]
   └── 03-Materiality/
       ├── marcenaria.jpg
       ├── pedras.jpg
       └── artesanato.jpg
   ```

### Optimization Before Delivery
Use these free tools:
- **TinyPNG** (https://tinypng.com) - Smart lossy compression
- **ImageOptim** (Mac) - Lossless compression
- **Squoosh** (Google) - Advanced compression with preview

**Target file sizes:**
- Hero: <200KB
- Portfolio images: <150KB each
- Materiality images: <120KB each

---

## Delivery Instructions

### Method 1: Google Drive (Recommended)
1. Create folder: `RE Arquitetura - Final Images`
2. Organize as per structure above
3. Share link with: contato@re-arquitetura.com.br

### Method 2: WeTransfer
1. Compress all images into ZIP
2. Send to: contato@re-arquitetura.com.br
3. Include project reference in message

### Method 3: Dropbox
1. Create shared folder
2. Invite: contato@re-arquitetura.com.br

---

## Post-Delivery Process

After receiving final images:
1. Replace placeholders in `public/images/`
2. Update `src/lib/content.ts` with new image paths
3. Test build: `npm run build`
4. Verify image optimization with Lighthouse
5. Deploy to production

**Estimated time for integration:** 1-2 business days

---

## Current Unsplash Placeholders

The following Unsplash images are being used temporarily:

| Location | Unsplash URL | Credit |
|----------|--------------|--------|
| Various | images.unsplash.com | Various photographers |

**Note:** Unsplash images are high-quality architecture photos suitable for production use. However, they must be replaced with actual project photography for authenticity and copyright compliance.

---

## Questions?

Contact: contato@re-arquitetura.com.br
Subject: Image Delivery - RE Arquitetura Website
