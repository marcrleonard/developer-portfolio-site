# SERVICES

I'm adding a 'services' backend piece to my site. This is where I can add backend code and have the front end access them.

Services in progress

1. Timelines
    - I want to keep a running list of side projects I am working on. This will allow me to drop notes to myself about where I'm at.
    - I may even hook in github repos so I can correspond commits with the projects
    

2. Snippets
    - This will be another small repo of random things I want to keep in mind. 
    - I'm viewing this as a 'micro blog'... Musings and things I've stumbled over. 
    - I also want to have this aggregate my stackoverflow 'favorites' and starred projects in github.
    
### Innerworkings

I'm going to make a small framewkr to make this easily extensible in the future. 
Steps:

1. Make a `Service` baseclass
2. Each service will inherit the base class

This will allow my flask endpoint to automagically redirect to the correct class. It will also make payload validation very easy.
