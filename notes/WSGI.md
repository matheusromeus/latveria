
in dev mode, the simple in-built web server is enough.

but in prod/staging, we need something more robust.

Enter WSGI (Web Server Gateway Interface). This acts as an interface between the web server and the python app.

WSGI is a group of web servers?

so gunicorn is not a web server. its a wsgi server.

the server (maybe nginx) forwards the requests that contain dynamic assets to the WSGI.

WSGI or whiskey server can deploy more than 1 workers which has parallel processing.