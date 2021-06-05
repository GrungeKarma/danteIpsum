# **Dante Ipsum**

### **Audience:** The audience for this API is programers that are tired of using Lorum Ipsum text. Those who are looking for a more engageing dummy text and appricate classic litrature can find novelty in this project.


### **Definition Statement**: Dante Ipsum is API that provides an alternative dummy text to Lorum Ipsum. This API used an open domain version of the first act of Dante Alighieri's epic poem Divine Comedy. The act is separated by line. The dummy text is formed by randomly picking lines from the first act and combining them into a small paragraph.


## **API Paths:**

### *```/random_passage_generator```* : This path will return an objet that contains randomly generated dummy text from four random lines of the first act.

### *```/list_passages```* : This path will return an object that contains all the lines of the first act with their unique ids.

### *```/get_passage/:id```* : This path will return an object that coresponds with the id number you use at the end of the call (ex.the call ```/get_passage/1``` will return the first passage in the data set.) If you would like to pull a specific passage use the ```/list_passages``` call to see which passage is assigned to which id.
