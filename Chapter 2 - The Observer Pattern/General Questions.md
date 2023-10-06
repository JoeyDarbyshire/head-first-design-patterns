# The Observer Pattern

### Sharpen Your Pencil (page 42)
Based on our first implementation, which of the following apply? \
Answers (Choose all that apply) - \
A.\) We are coding to concrete implementations, not interfaces. \
B.\) For every new display we'll need to alter this code. \
C.\) We have no way to add (or remove) display elements at runtime. \
E.\) We haven't encaptsulated the part that changes. \ 

### Sharpen Your Pencil (Page 55)
Sketch out the classes you'll need to implement the Weather Station \
See './example_models.ts' \

### Brain Power (Page 58)
Without rewritting the entire question, generally speaking I think the best method would be for the displays to subscribe to specific data that they need instead of being sent the data.  That way if they need the temp and humidity, they don't need to be informed about the pressure as well.

### Answers
I got all of the correct options for Sharpen Your Pencil (page 42) \
There were no other answers for the other questions I answered