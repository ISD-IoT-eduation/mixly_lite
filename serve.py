#!/usr/bin/env python3
import http.server
import os

PORT = 3000

os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler

print(f"Server running at http://localhost:{PORT}/")
print("Open the link above in your browser!")

with http.server.HTTPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
