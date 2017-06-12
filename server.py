import socket
import urllib
import os.path

def sendPolicy(policy):
	sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
	s_addr = ("127.0.0.1", 8000)

	sent = sock.sendto(policy, s_addr)	

s_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

s_addr = ('127.0.0.1', 9500)
s_socket.bind(s_addr)

s_socket.listen(1)

while True:
	c_socket, c_addr = s_socket.accept()
	request = c_socket.recv(1024).split()
	
	if not request:
		continue

	if request[0] == "GET":
		filename = request[1]

		if filename.startswith("/policy.asp"):
			filename = filename.split("?")
			policy = urllib.unquote(filename[1]).decode('utf8')
			sendPolicy(policy)
		else:

			http_response = """\
		HTTP/1.1 200 OK

		"""
			if filename != "/" and os.path.exists(filename[1:]):
				with open(filename[1:]) as f:
					http_response += f.read()
				c_socket.sendall(http_response)
			c_socket.close()
