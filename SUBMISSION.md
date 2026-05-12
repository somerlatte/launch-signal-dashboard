# Submission Notes

## Recommended Submission Format

The most professional way to submit this assessment is:

1. Create a GitHub repository named `launch-signal-dashboard`.
2. Push these files to the repository:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`
   - `SUBMISSION.md`
   - `sample_launches.csv`
3. Enable GitHub Pages for the repository so reviewers can open a live demo.
4. Send both links:
   - Live demo URL
   - GitHub repository URL

If a repository is not possible, send the generated zip file as an attachment and mention that it is a static app that can be opened through `index.html`.

## Suggested Recruiter Message

Hi,

Thanks again for the opportunity. I completed the launch intelligence assessment and built a working dashboard prototype.

Links:

- Demo: `[PASTE GITHUB PAGES OR LOCAL DEMO LINK]`
- Repository: `[PASTE GITHUB REPO LINK]`

What I built:

- A dashboard that maps launch posts to fundraising data, X likes, LinkedIn likes, stage, source, and contact enrichment.
- Lead ranking based on a simple opportunity score that surfaces funded companies with weak launch engagement.
- Enriched contact panels with email, phone, LinkedIn, and X.
- A DM draft generator for underperforming launches.
- CSV import/export so real API or scraped data can be loaded without changing the UI.

Implementation note:

The prototype uses assessment-safe seeded records based on the provided launch-video references. In production, I would connect the same normalized data model to official or approved data sources such as X, LinkedIn, Crunchbase, YC, Google News, and contact enrichment APIs. I documented that production ingestion plan in the README.

Best,
Lorrayne

## Reviewer Talking Points

- I optimized for a usable workflow instead of a static mockup.
- I separated the UI from the normalized launch data shape so production connectors can replace the seeded data.
- I included compliance assumptions because X, LinkedIn, and enrichment data need API/provider access rather than credential-free client scraping.
- I added import/export so the dashboard can be tested with real data quickly.
- The DM draft feature is intentionally source-grounded: it references funding amount and measured engagement gap.
