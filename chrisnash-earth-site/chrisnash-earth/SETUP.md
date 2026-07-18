# Go-live checklist for chrisnash.earth

## 1. GitHub Pages custom domain (one time, ~1 minute)
After the first deploy succeeds: repo **Settings → Pages**. Source should read
"GitHub Actions". In **Custom domain**, enter `chrisnash.earth`, Save, and once the
check passes tick **Enforce HTTPS**.

## 2. DNS at Porkbun (one time, ~3 minutes)
Porkbun → Domain Management → chrisnash.earth → DNS. Remove any parked/default
A or CNAME records, then add:

| Type  | Host | Answer              |
|-------|------|---------------------|
| A     | (blank / @) | 185.199.108.153 |
| A     | (blank / @) | 185.199.109.153 |
| A     | (blank / @) | 185.199.110.153 |
| A     | (blank / @) | 185.199.111.153 |
| CNAME | www  | chrisnash-432.github.io |

DNS can take up to an hour to propagate (usually minutes).

## 3. Email forwarding (one time, ~2 minutes)
Porkbun → chrisnash.earth → Email Forwarding: forward `chris@chrisnash.earth`
(and optionally `letters@`, `hello@`) to the Gmail you check.

## 4. Kit (when ready to open subscriptions)
1. Create a free account at kit.com (free to 10,000 subscribers).
2. Create an inline form; copy the form action URL.
3. Paste it into `src/config.ts` as `kitFormAction`; set the form's success redirect
   to `https://chrisnash.earth/thanks/`.
4. In Kit settings, verify the sending domain (add the DKIM/SPF DNS records Kit
   shows you at Porkbun) and set the from address, e.g. `letters@chrisnash.earth`.
5. Push the config change; the site switches from the personal-subscribe fallback
   to the real form automatically.

## 5. Later (phase 2)
Speaking page · Work With Me · Field Work case studies · curated photo selects
replacing contour art · the KB-to-newsletter pipeline (see project memory) ·
optional truncated Substack mirror for discovery · podcast feed.
