## Development

```
git clone https://github.com/Resend1298/bookdb-midterm-frontend
cd bookdb-midterm-frontend
npm install
npm start
```

## Deployment

```
docker run -d --name bookdb-midterm-frontend -p 10002:80 --restart=unless-stopped ghcr.io/resend1298/bookdb-midterm-frontend
```