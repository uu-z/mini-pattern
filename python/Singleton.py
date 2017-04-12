class Singleton(object):
	__instance = None
	
	def __init__(self):
		if not Singleton.__instance:
			print("__init__ method called.")
		else:
			print("Instance already created: ", self.getInstance())
		
	@classmethod
	def getInstance(cls):
		if not hasattr(cls, 'instance'):
			cls.instance = super(Singleton, cls).__new__(cls)
		return cls.instance
		

s = Singleton()
print("Object created", s)

s1 = Singleton()
print("Object created", s1)