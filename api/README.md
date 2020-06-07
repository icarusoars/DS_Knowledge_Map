
# Repo Structure


# Using Flask Restplus
Flask-restplus is a great package to quickly build out a RESTful API. It has several advantages:
- automatically documents all your endpoints with Swagger API
- has namespaces to organize endpoints. Endpoints are grouped by namespace in documentation automatically.
- uses the idea of Resources to organize CRUD operations ['GET','POST','PUT', 'DELETE'] as functions within a class. One no longer needs to use if statements to check for http method

This article was very helpful to quickstart flask-restplus development: \
https://medium.com/@preslavrachev/designing-well-structured-rest-apis-with-flask-restplus-part-1-7e96f2da8850


# Markdown Converter
https://dev.to/mrprofessor/rendering-markdown-from-flask-1l41

https://www.youtube.com/watch?v=-g3ubRHpOEs

# Testing Locally
```shell
python3 -m venv {virtual env name}
source {virtual env name}/bin/activate
pip install -r requirements.txt
python index.py
```
