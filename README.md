# **Dante Ipsum**

### **Audience:** The audience for this API is programers that are tired of using Lorum Ipsum text. Those who are looking for a more engageing dummy text and appricate classic litrature can find novelty in this project.


### **Definition Statement**: Dante Ipsum is API that provides an alternative dummy text to Lorum Ipsum. This API used an open domain version of the first three sections of  Dante Alighieri's epic poem Divine Comedy. The selection is separated by line. The dummy text is formed by randomly picking lines from the selection and combining them into a small paragraph.


## *API Paths:*

### *```/random_passage_generator/:num```*  : This path will return an object that contains randomly generated dummy text from the first act. The path requires a number at the end. For instance,  ```/random_passage_generator/1```  will return an object containing one random passage.

### *Acceptable Numbers*
  ```1, 5, 10, 15, 20, 40```

### *```/list_passages```* : This path will return an object that contains all the lines of the first act with their unique ids.

### *```/get_passage/:id```* : This path will return an object that corresponds with the id number you use at the end of the call (ex.the call ```/get_passage/1``` will return the first passage in the data set.) If you would like to pull a specific passage use the ```/list_passages``` call to see which passage is assigned to which id.
