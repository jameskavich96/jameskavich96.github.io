# Deploying to the VPS

The site is fully static — `npm run build` produces `dist/`, and any web server can serve it.

## One-time setup (on the VPS, needs sudo)

1. `sudo mkdir -p /var/www/james-portfolio && sudo chown $USER /var/www/james-portfolio`
2. Copy `deploy/nginx.conf` to `/etc/nginx/sites-available/james-portfolio`,
   fix `server_name` + `root` if different, then:
   `sudo ln -s /etc/nginx/sites-available/james-portfolio /etc/nginx/sites-enabled/ && sudo nginx -t && sudo systemctl reload nginx`
3. Point the domain's DNS A record at the VPS IP.
4. HTTPS: `sudo certbot --nginx -d <domain>` — then uncomment the HSTS header in the nginx config.

## Every deploy (from this machine)

```bash
DEPLOY_HOST=user@vps-ip ./deploy/deploy.sh
```

That builds locally and rsyncs `dist/` up. Nothing runs on the server — no Node, no process manager.

## Before the first deploy

- [ ] Buy the domain and set `SITE_URL` in `src/data/profile.ts` (fixes canonical URLs, OG links, sitemap).
- [ ] Update `server_name` in the nginx config to match.
- [ ] If `src/layouts/Base.astro`'s inline `html.js` gate script ever changes, recompute its CSP hash:
      `python3 -c "import hashlib,base64;print('sha256-'+base64.b64encode(hashlib.sha256(open(0,'rb').read()).digest()).decode())" <<< '<exact script body>'`
