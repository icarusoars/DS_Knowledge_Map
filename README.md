# Data Science Knowledge Map

Website located here: \
https://ds-knowledge-map.now.sh/

The motivation for this product can be read on the website.

This website is a mono-repo where both the frontend and backend are included.
- frontend: `/client`
- backend: `/api`

Click into `/client` or `/api` for more details.

# Frontend
Frontend is built using these technologies:
- react
- ant-design
- D3.js

# Backend
Backend is built using these technolgoies:
- flask
- flask-restplus
- swagger api
- markdown

# Deployment
Both the frontend and backend are deployed using **vercel now**. The `now.json` file in the root folder specifies both how 
the frontend and backend are deployed.

**frontend**: Now uses commands specified in `/client/package.json` to build the React app into `/client/build`. Now then deploys this static folder.

**backend**: Now uses its python builder to build up a flask WSGI server specified in `/api/index.py` and exposes all the endpoints specified by flask.
