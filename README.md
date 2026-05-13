# Launch Signal Dashboard

Launch Signal is a static dashboard prototype for identifying recently funded companies whose product launch posts underperformed on social channels. It was built for the Remote AI Engineer assessment and focuses on the core workflow: ingest launch/fundraising signals, normalize them into a lead model, rank opportunities, enrich contacts, and draft outreach for weak launches.

## Demo

Open `index.html` directly in a browser, or run a local static server:

```bash
python3 -m http.server 4173
```

Then visit:

```text
http://127.0.0.1:4173/index.html
```

No package install or build step is required.

## Features

- Launch intelligence table with company, founder, stage, amount raised, X likes, LinkedIn likes, and source links.
- Opportunity scoring that prioritizes high-funding companies with comparatively weak launch engagement.
- Enriched contact box with email, phone, LinkedIn, and X contact methods.
- DM draft generator for launches below the selected X-like threshold.
- Search, stage filtering, sorting, and editable weak-launch threshold.
- CSV import/export for moving between prototype data and real ingestion jobs.

## Data Model

Each launch record is normalized into this shape:

```js
{
  company: "Gradient",
  founder: "Gradient team",
  stage: "Series A",
  raised: 56000000,
  xLikes: 235,
  linkedinLikes: 1120,
  launchUrl: "https://x.com/gradient_hq/status/...",
  fundraiseSource: "Crunchbase-style database",
  email: "sales@gradient.ai",
  phone: "+1 617 555 0193",
  linkedin: "https://www.linkedin.com/company/gradientai/",
  x: "https://x.com/gradient_hq"
}
```

The seeded records are assessment-safe examples modeled from the launch-post references provided in `Launch Video Refs`. Live API credentials and scraped private data are intentionally not embedded in the client.

## CSV Import

The dashboard accepts CSV files with these headers:

```csv
company,founder,stage,raised,xLikes,linkedinLikes,launchUrl,email,phone,linkedin,x,summary
```

See `sample_launches.csv` for an importable example.

## Production Architecture

The current app is client-only so reviewers can run it immediately. A production version would separate the system into four layers:

1. **Ingestion jobs**
   - X API or approved social listening provider for launch post metadata, author, video URL, likes, reposts, replies, and timestamp.
   - LinkedIn API or approved data partner for company launch posts and reactions.
   - Crunchbase, YC, company blogs, investor announcements, SEC/Form D, and Google News for fundraising amount, round, investors, and announcement date.

2. **Normalization and scoring**
   - Deduplicate company names and domains.
   - Resolve launch posts to companies and founders.
   - Compute opportunity score from capital raised, engagement gap, recency, stage, and contact completeness.

3. **Contact enrichment**
   - Use verified enrichment sources such as Apollo, People Data Labs, Clearbit-style APIs, or domain-based discovery.
   - Store provenance and confidence per contact method.

4. **AI outreach**
   - Generate DM drafts from the launch copy, fundraising context, product category, founder role, and measured engagement gap.
   - Keep drafts editable, short, and source-grounded.

## Compliance Notes

- The prototype avoids embedding credentials or bypassing platform restrictions.
- X, LinkedIn, and enrichment sources should be accessed through official APIs or approved providers.
- Contact data should include source provenance, confidence, and opt-out handling before production use.

## Files

- `index.html` - app shell and dashboard layout
- `styles.css` - responsive dashboard styling
- `app.js` - seeded data, ranking logic, filters, CSV import/export, and DM generation
- `sample_launches.csv` - import example
