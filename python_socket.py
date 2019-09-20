# first of all import the socket library 
from pynput.keyboard import Key, Controller

import socket	

keyboard = Controller()

		 

# next create a socket object 
s = socket.socket()		 
print("Socket successfully created")

# reserve a port on your computer in our 
# case it is 12345 but it can be anything 
port = 12345				

# Next bind to the port 
# we have not typed any ip in the ip field 
# instead we have inputted an empty string 
# this makes the server listen to requests 
# coming from other computers on the network 
s.bind(('', port))		 
print("socket binded to %s" %(port))

# put the socket into listening mode 
s.listen(5)	 
print("socket is listening")			

# a forever loop until we interrupt it or 
# an error occurs 
c, addr = s.accept()
print('Got connection from', addr)

while(True): 
	# Establish connection with client. 
	try:
		data = c.recv(1024)	
		#print('Data recd',data)
		
		if(data == b'1'):
			#press up
			print("pressing up")
			keyboard.press(Key.up)
			keyboard.release(Key.up)			
		elif(data == b'2'):
			#press down
			print("pressing down")
			keyboard.press(Key.down)
			keyboard.release(Key.down)
			
		elif(data == b'3'):
			#press left
			print("pressing left")
			keyboard.press(Key.left)
			keyboard.release(Key.left)
			
		elif(data == b'4'):
			#press right
			print("pressing right")
			keyboard.press(Key.right)
			keyboard.release(Key.right)
			
		else:
			#keyboard.press('x')
			#keyboard.release('x')
			a=1
			
			
		
	except KeyboardInterrupt:
		print("Keyboard Interrupt")
		c.close()
	

	finally:
		s.close()
