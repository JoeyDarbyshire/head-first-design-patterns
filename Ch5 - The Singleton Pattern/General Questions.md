# The Singleton Pattern

### Brain Power (page 176)
If more than one instance of ChocolateBoiler is created, then the two instances will have different values at run time.  This will mean that the boiler might empty before it even boils!

### Sharpen Your Pencil (page 176)
```private static instance: ChocolateBoiler | null = null
private ChocolateBoiler() {
  empty = true
  boiled = false
}

public static getInstance(): ChocolateBoiler {
  if (this.instance === null) {
    this.instance = new ChocolateBoiler()
  }
  return this.instance
}

// Rest of ChocolateBoiler
```

### Sharpen Your Pencil (page 183)
Synchronize the getInstance() method: \
 - This forces the `getInstance()` method to run synchronously and completely prevents multithreads from being an issue. \
 - Unfortunately, this adds a lot of overhead to the program \
Use eager instantiation: \
 - This creates an instance of the boiler immediately when the class is loaded so the code can never call multiple threads of `getInstance()` \
 - But we may not need an instance immediately \
Double-checked locking: \
 - This synchoronously runs `getInstance()` the first time to prevent multiple instances from being created and only slightly increases overhead. \
 - Isn't supported in older versions of Java. \
 - This feels like the best option as long as we are using a version of Java later than 1.4 \

 ### Answers
 All Sharpen Your Pencils were correct. \