# Form & Fire Personal Training — FireWorks Handoff

## Template

- Primary industry: Personal training
- Related industries: Strength coach, wellness coach, fitness studio, online coach, small-group training
- Demo brand: Form & Fire Personal Training (fictional)
- Primary CTA: Start with a conversation
- Recommended build price: **$1,499**
- Hosting: **$499/year** (primary) or **$59.99/month**
- Domain: **$20/year**

## Included pages

1. Home
2. Coaching
3. About the coach
4. Pricing (three vertically stacked demo tiers)
5. Results / gallery placeholder
6. FAQ
7. Start / inquiry

## Inquiry fields

Name, email, phone, primary goal, experience level, preferred training format, area, coaching option, and message. All forms remain in safe demo mode: browser validation only, with no transmission, storage, booking, or payment.

## Proposed integrations

- Stripe Payment Links or Checkout for session packages: priced separately after package confirmation
- Calendly, Acuity, Vagaro, Mindbody, Trainerize, or the client’s existing provider: priced separately after provider confirmation
- Email/CRM delivery: requires the client’s destination and credentials
- External photo gallery or Instagram: requires client-owned link and usage approval

## Required customization

Real business name and logo, verified trainer biography and certifications, approved photos, actual prices, training address/service area, hours, phone/email, policies, payment/booking provider, verified testimonials, and written consent for any client images or stories.

## SEO foundation

Editable titles, descriptions, canonicals, headings, internal links, sitemap, robots, optimized hero image, and demo ProfessionalService structured data. Initial location copy covers Pittsburgh, the South Hills, Canonsburg, and Washington, PA without creating thin city-duplicate pages.

## Hero and future variations

The first hero is an original AI-generated image of an adult trainer coaching an adult client in a dark charcoal gym with magenta lighting. It does not use Lynn Sambuco or her photos. Future variants can feature a male trainer, a more inclusive mixed-gender session, older-adult strength training, online coaching, or a brighter boutique-studio direction.

## Deployment

- Preview: https://form-and-fire-personal-training.vercel.app
- Storefront slug: `form-fire-personal-training`
- Source: `templates/personal-trainer/` in `colonnamedia/AGENT-FIREWORKS`


## Build and verification

- Source build commit: `59e6047f339269ea056700af23364b512b5d0bd2`
- Storefront publication commit: `0ea3dd258f3378ca6e6b0f00336cdc6729ac72c7`
- Vercel production project: `form-and-fire-personal-training`
- Automated test: passed for seven pages, internal routes, metadata, safe-demo language, stacked pricing, and optimized hero
- Live HTTP verification: Home, Coaching, About, Pricing, Results, FAQ, Start, and hero image returned 200
- Browser verification: desktop hero, navigation, stacked price presentation, completed safe inquiry result, storefront Featured/Available state, preview image, detail modal, and checkout pricing
