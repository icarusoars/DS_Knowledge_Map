# Data Science Knowledge Map

Website located here: 

The motivation for this product can be read on the website.

This website is a mono-repo where both the frontend and backend are included.
- frontend: `/client`
- backend: `/api`

Click into `/frontend` or `/api` for more specific design considerations.

# Frontend
Frontend is designed using these technologies:
- react
- ant-design
- D3.js

# Backend
Backend is designed using these technolgoies:
- flask
- flask-restplus
- swagger api
- markdown

# Deployment
Both the frontend and backend are deployed using **vercel now**. The `now.json` file in the root folder specifies both how 
the frontend and backend are deployed.
The frontend uses commands specified in `/client/package.json` to build the React app into `/client/build`. Now then deploys this static
folder.
The backend uses Now's python builder to build up a flask WSGI server specified in `/api/index.py`.
