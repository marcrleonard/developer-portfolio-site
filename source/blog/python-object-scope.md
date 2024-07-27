Title: Python Object Scope and Reference Counting
Date: 2024-07-27 08:00:00 MST
Category: Python
Tags: python
Slug: Python-Object-Scope
Authors: Marc Leonard
Summary: Using Object scope to your advantage.


# Understanding Python Object Scope Lifecycle

In Python, understanding how objects are managed in memory can be crucial for writing efficient and bug-free code. One aspect of this management involves the lifecycle of objects—specifically, when they are created, used, and deleted. Using the object lifetime in regards to it's scope can be incredibly useful, but also comes with a pitfall.

## Example: Timing Execution with a Class

Consider the following class `FuncTime`, which measures the execution time of a block of code:

```python
import time

class FuncTime:
	def __init__(self):
		self.start = time.time()

	def __del__(self):
		ex_time = time.time() - self.start
		print(f"Execution Time (sec) - {ex_time}")

```

The `FuncTime` class records the start time when an instance is created and calculates the elapsed time when the instance is destroyed. 

## Working Code Example

Here’s a function `something` that demonstrates how this class can be used to time nested function calls:

```python
import time

class FuncTime:
	def __init__(self):
		self.start = time.time()

	def __del__(self):
		ex_time = time.time() - self.start
		print(f"Execution Time (sec) - {ex_time}")

def another():
	a = FuncTime()
	time.sleep(2)

def something():
	b = FuncTime()
	time.sleep(1)
	another()

if __name__ == "__main__":
	something()
```

In this example, the `FuncTime` instances are assigned to variables (`a` and `b`). When the functions `another` and `something` exit, the variables go out of scope, and the instances are destroyed. This triggers the `__del__` method, printing the execution time:

```
Execution Time (sec) - 2.0050549507141113
Execution Time (sec) - 3.0054609775543213
```

## What Happens When We Don't Assign Variables?

Let’s modify the code slightly by removing the variable assignments:

```python
def another():
    FuncTime()
    time.sleep(2)

def something():
    FuncTime()
    time.sleep(1)
    another()

if __name__ == "__main__":
    something()
```

```
Execution Time (sec) - 5e-06
Execution Time (sec) - 2.2e-05
```

You might expect the same output, but it's a little different... Why? The answer lies in Python's garbage collection. Since the object are not assigned explicitly to variables, the garbage collector will be responsible for picking up the stay objects, and hence the timers can not be trusted.

## Conclusion

Understanding the lifecycle of objects in Python is key to managing resources effectively. The first example works because the objects remain in scope until the variables are no longer needed. The second example fails to print execution times immediately due to the indeterminate timing of garbage collection.

For more predictable resource management, consider using context managers (`with` statements), which provide deterministic cleanup of resources.

By grasping these concepts, you can write more robust and efficient Python code, ensuring that resources are managed properly.
