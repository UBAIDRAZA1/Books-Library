# 🕌 Halal Ads Setup Guide - Urdu Sharah Library

## ✅ Best Ad Networks for Islamic/Educational Websites

### **1. Google AdSense (RECOMMENDED)** ⭐⭐⭐⭐⭐

**Why Best?**
- ✅ Full control over ad categories
- ✅ Block haram/inappropriate ads
- ✅ High earnings ($0.10 - $2 per click)
- ✅ Education/Books related ads
- ✅ Automatic optimization

**Apply Here:** https://www.google.com/adsense/start/

---

### **2. Ezoic (Alternative)** ⭐⭐⭐⭐

**Why Good?**
- ✅ AI optimization
- ✅ Higher earnings than AdSense
- ✅ Ad blocking controls
- ✅ Minimum $20 payout

**Apply Here:** https://www.ezoic.com/

**Requirements:**
- At least 10,000 monthly visitors (or use Ezoic Access Now)

---

### **3. Media.net (Yahoo/Bing Ads)** ⭐⭐⭐

**Why Consider?**
- ✅ Good for educational content
- ✅ Contextual ads
- ✅ $100 minimum payout

**Apply Here:** https://www.media.net/

---

## 🚫 **How to Block Haram/Inappropriate Ads**

### **Google AdSense - Blocking Settings:**

#### **Step 1: Go to Blocking Controls**
1. Login to AdSense
2. Click **Settings** (gear icon)
3. Select **Blocking Controls**

#### **Step 2: Block These Categories** ❌

**General Categories - BLOCK:**
- Dating
- Gambling
- Alcohol
- Tobacco
- Pharmaceuticals
- Weight Loss
- Politics
- Entertainment (Music, Movies, Celebrities)
- Fashion & Beauty
- Food & Drink (non-halal)

**Sensitive Categories - BLOCK:**
- All except:
  - ✅ Education
  - ✅ Books & Literature
  - ✅ Religion & Spirituality

#### **Step 3: Block Specific Advertisers**

**Review & Block:**
- Music streaming services
- Dating apps
- Gaming companies
- Movie/TV show promotions
- Any non-Islamic religious content

#### **Step 4: Allow These Categories** ✅

- Education
- Books & Literature
- Islamic products
- Technology
- Business services
- Islamic finance/banking
- Office supplies
- Software

---

## 📍 **Ad Placement Strategy**

### **Homepage Layout:**

```
┌─────────────────────────────┐
│         NAVBAR              │
├─────────────────────────────┤
│        HERO SECTION         │
├─────────────────────────────┤
│   📢 AD BANNER (728x90)    │  ← After Hero
├─────────────────────────────┤
│      BOOKS SECTION          │
│   [Book] [Book] [Book]     │
│   [Book] [Book] [Book]     │
├─────────────────────────────┤
│   📢 IN-FEED AD             │  ← Every 6 books
├─────────────────────────────┤
│      MORE BOOKS             │
│   [Book] [Book] [Book]     │
├─────────────────────────────┤
│   📢 AD BANNER (728x90)    │  ← Before Footer
├─────────────────────────────┤
│         FOOTER              │
└─────────────────────────────┘
```

### **Year Pages Layout:**

```
┌─────────────────────────────┐
│         NAVBAR              │
├─────────────────────────────┤
│      YEAR HEADER            │
├─────────────────────────────┤
│   📢 AD (Leaderboard)       │  ← Below header
├─────────────────────────────┤
│      TEXTBOOKS              │
│   [Book] [Book] [Book]     │
├─────────────────────────────┤
│   📢 IN-FEED AD             │  ← Every 4 books
├─────────────────────────────┤
│      SHARAHS                │
├─────────────────────────────┤
│   📢 AD (Responsive)        │
├─────────────────────────────┤
│      PAST PAPERS            │
└─────────────────────────────┘
```

---

## 💻 **Implementation Steps**

### **Step 1: Get AdSense Approval**

1. **Apply at:** https://www.google.com/adsense/start/
2. **Fill form:**
   - Website: `https://books-library-ashy.vercel.app`
   - Account type: Individual
   - Country: Pakistan
   - Name, address, phone
3. **Wait for approval** (2-7 days)
4. **You'll get:**
   - Publisher ID (format: `pub-1234567890123456`)
   - Ad unit codes

---

### **Step 2: Add AdSense Script**

**File:** `src/app/layout.tsx`

Add this in `<head>` section (after Google Analytics):

```typescript
{/* Google AdSense */}
{process.env.NEXT_PUBLIC_ADSENSE_ID && (
  <script
    async
    src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
    crossOrigin="anonymous"
  />
)}
```

---

### **Step 3: Create Environment Variable**

**In Vercel Dashboard:**

1. Go to: https://vercel.com
2. Select your project
3. **Settings > Environment Variables**
4. **Add:**
   - Key: `NEXT_PUBLIC_ADSENSE_ID`
   - Value: `pub-1234567890123456` (your AdSense ID)
5. **Save & Redeploy**

---

### **Step 4: Place Ads in Pages**

**Example - Homepage:**

```tsx
import AdBanner from '@/components/AdBanner';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      
      {/* Ad after Hero */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <AdBanner 
          adSlot="1234567890" 
          className="text-center"
        />
      </div>
      
      <BooksSection />
      
      {/* Ad between sections */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <AdBanner 
          adSlot="0987654321" 
          className="text-center"
        />
      </div>
      
      <PapersSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
```

---

## 📊 **Expected Earnings**

### **Pakistan Traffic:**
- **Per Click:** $0.05 - $0.30
- **Per 1000 Views (RPM):** $1 - $3
- **Monthly (1000 visitors):** $10 - $30
- **Monthly (10,000 visitors):** $100 - $300
- **Monthly (50,000 visitors):** $500 - $1500

### **Factors Affecting Earnings:**
- ✅ **Niche:** Education/Islamic = Higher CPC
- ✅ **Location:** Pakistan = Lower CPC, but high volume
- ✅ **Ad Placement:** More placements = More earnings
- ✅ **Content Quality:** Better content = More clicks

---

## 🎯 **Ad Types to Use**

### **1. Display Ads (Best for Homepage)**
- **Size:** 728x90 (Leaderboard)
- **Position:** Top, middle, bottom
- **Earnings:** Medium

### **2. In-Feed Ads (Best for Book Lists)**
- **Style:** Matches your design
- **Position:** Every 4-6 books
- **Earnings:** High (native look)

### **3. In-Article Ads (For Book Pages)**
- **Style:** Appears within content
- **Position:** Between book descriptions
- **Earnings:** High

### **4. Multiplex Ads (Related Content)**
- **Style:** Grid of related books/ads
- **Position:** Bottom of pages
- **Earnings:** Medium

---

## ⚠️ **Important Rules**

### **DO's** ✅
- ✅ Only show education/Islamic related ads
- ✅ Max 3 ad units per page
- ✅ Make sure ads don't block content
- ✅ Use responsive ad units
- ✅ Test on mobile devices
- ✅ Monitor ad performance weekly

### **DON'Ts** ❌
- ❌ Don't click your own ads
- ❌ Don't ask others to click ads
- ❌ Don't place ads too close to buttons
- ❌ Don't show more than 3 ads per page
- ❌ Don't hide ads with CSS
- ❌ Don't modify ad code

---

## 🔧 **Ad Blocking Setup (After Approval)**

### **Week 1: Monitor**
- Let ads run for 1 week
- Check what types of ads appear
- Note any inappropriate ads

### **Week 2: Block**
1. Go to **Blocking Controls**
2. **Block inappropriate categories**
3. **Block specific advertisers** showing bad ads
4. **Review weekly**

### **Ongoing: Maintain**
- Check ads every week
- Block new inappropriate advertisers
- Optimize placements based on performance

---

## 📱 **Alternative: Direct Sponsorships**

**Instead of AdSense, you can:**

### **1. Islamic Book Publishers**
- Contact publishers directly
- Show their book ads
- Charge monthly fee

### **2. Madaris/Institutions**
- Advertise admission
- Promote courses
- Monthly sponsorship

### **3. Islamic E-commerce**
- Islamic clothing stores
- Halal product shops
- Book stores

**Benefits:**
- ✅ 100% control over ads
- ✅ No haram content
- ✅ Higher earnings (fixed monthly)

---

## 🚀 **Quick Start Checklist**

- [ ] Apply for Google AdSense
- [ ] Wait for approval (2-7 days)
- [ ] Get Publisher ID
- [ ] Add to Vercel environment variables
- [ ] Add AdSense script to layout.tsx
- [ ] Create ad units in AdSense dashboard
- [ ] Place ads in pages
- [ ] Deploy to Vercel
- [ ] Configure blocking controls
- [ ] Block haram categories
- [ ] Monitor weekly

---

## 📞 **Need Help?**

**AdSense Support:**
- https://support.google.com/adsense

**Blocking Guide:**
- https://support.google.com/adsense/answer/3073292

**Ad Placement Best Practices:**
- https://support.google.com/adsense/answer/6222928

---

## 💡 **Pro Tips**

1. **Start with 2-3 ad units** per page
2. **Increase gradually** based on user feedback
3. **A/B test placements** for best earnings
4. **Focus on content** - more books = more traffic = more earnings
5. **Mobile optimization** - 70% users on mobile
6. **Don't overdo it** - too many ads = bad user experience

---

**Best of luck! May Allah make this project halal and beneficial! 🤲**
