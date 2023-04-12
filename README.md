# 🥊 payloadcms-test

The simplest, but most powerful TypeScript-first CMS I've ever seen. It's really good so far.

### How to install

```sh
# 1. Clone
git clone https://github.com/Blankeos/payloadcms-test.git
cd payloadcms-test

# 2. Set the following .env variables appropriately:
MONGODB_URI=mongodb://127.0.0.1:27017/payloadcms-test
PAYLOAD_SECRET=SECRET_HERE

# 3. Run it!
npm run dev

# 4. Or build for production
# Make sure to change `serverURL` in src/payload.config.ts.
npm run build && npm run serve
```

---

<!-- # payloadcms-test

This project was created using create-payload-app using the blank template.

## How to Use

`yarn dev` will start up your application and reload on any changes.

### Docker

If you have docker and docker-compose installed, you can run `docker-compose up`

To build the docker image, run `docker build -t my-tag .`

Ensure you are passing all needed environment variables when starting up your container via `--env-file` or setting them with your deployment.

The 3 typical env vars will be `MONGODB_URI`, `PAYLOAD_SECRET`, and `PAYLOAD_CONFIG_PATH`

`docker run --env-file .env -p 3000:3000 my-tag` -->
