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

Nginx config template:

```
server {
        listen 80;
        server_name example.com;

        location / {
                proxy_pass http://192.168.0.51:10002;
        }

        location /api/ {
                proxy_pass http://192.168.0.51:10001/;
        }
}
```
