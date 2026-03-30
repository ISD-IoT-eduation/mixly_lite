#!/usr/bin/env python3
import http.server
import os

PORT = 3000

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        html = '''<!DOCTYPE html>
<html>
<head>
    <title>Mixly Lite</title>
</head>
<body>
    <h1>Mixly Lite Server</h1>
    <p><a href="/index.html">Open Mixly</a></p>
</body>
</html>'''
        self.wfile.write(html.encode())

print(f"Server running at http://localhost:{PORT}/")
print("Open the link above in your browser!")

with http.server.HTTPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
