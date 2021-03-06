![Image of the last ciricle of Hell](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fad%2FDVinfernoLuciferKingOfHell_m.jpg%2F1200px-DVinfernoLuciferKingOfHell_m.jpg&f=1&nofb=1)
###### High resolution scan of engraving by Gustave Doré illustrating Canto XXXIV of Divine Comedy, Inferno, by Dante Alighieri. Caption: Lucifer, King of Hell

# **Dante Ipsum**

**https://dante-ipsum.herokuapp.com/**

### **Audience:** The audience for this API is programers that are tired of using Lorum Ipsum text. Those who are looking for a more engageing dummy text and appricate classic litrature can find novelty in this project.


### **Definition Statement**: Dante Ipsum is a RESTfull API that provides an alternative dummy text to Lorum Ipsum. This API used an open domain version of the first three sections of  Dante Alighieri's epic poem Divine Comedy. The selection is separated by line. The dummy text is formed by randomly picking lines from the selection and combining them into a small paragraph.


## *API Paths:*

### *```"/random_passage_generator/:num"```*  : This path will return an object that contains randomly generated dummy text from the selected text. The path requires a number at the end. For instance,  ```/random_passage_generator/1```  will return an object containing one random passage.

### *Acceptable Numbers:*
  ```1, 5, 10, 15, 20, 40```

### *```"/list_passages"```* : This path will return an object that contains all the lines of the first three sections with their unique ids.

### *```"/get_passage/:id"```* : This path will return an object that corresponds with the id number you use at the end of the call (ex.the call ```"/get_passage/1"``` will return the first passage in the data set.) If you would like to pull a specific passage use the ```"/list_passages"``` call to see which passage is assigned to which id.
