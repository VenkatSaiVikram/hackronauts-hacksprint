import os
# import requests
# from goo import id_token
from dependencies.bottle import Bottle, request, response, static_file, run as bottleRun, redirect, template, TEMPLATE_PATH

TEMPLATE_PATH.insert(0, os.path.join(os.path.dirname(__file__), "../static"))
STATIC_ROOT = os.path.join(os.path.dirname(__file__), "../static")

server = Bottle()


@server.route("/")
def index():
    return template("index.tpl", root=STATIC_ROOT, config={})

# @server.post("/auth")
# def auth():
#     token = request.forms.get("token")
#     response = requests.get(f"https://oauth2.googleapis.com/tokeninfo?id_token={token}")
#     if response.status_code == 200:
#         user_info = response.json()
#         print(user_info)
#         # Perform further validation and processing as needed
#         return {"status": "success", "user_info": user_info}
#     else:
#         return {"status": "error", "message": "Invalid token"}

@server.route("/<path:path>")
def default(path=""):
    file_path = os.path.join(STATIC_ROOT, path)
    if os.path.exists(file_path):
        return static_file(path, root=STATIC_ROOT)
    return redirect("/")


if __name__ == "__main__":
    listen_port = int(os.getenv("X_ZOHO_CATALYST_LISTEN_PORT", 9000))
    bottleRun(server, host="0.0.0.0", port=listen_port, debug=True, reloader=True)
