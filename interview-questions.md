# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

## 1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  **Your answer:** 
  - Without foreign key, we cannot set up connection from one form to another form, that means no matter what kind of data we created or input, we only got a isolated data for only one form, we cannot use that data referenced with the relationship from another form. 
  - How to fix it? Delete and recreate with the foreign key, or set up column attribute with foreign key(which provide the links to data of other table).
  - Foreign key is normally named with _id at the end by convention.(`modelname_id`)
  - (Yes, the foreign key will be part of the Animal model and Sightings model), so that it can connect two tables. -->Wrong, the foreign key always goes on the belongs_to side. A sighting cannot exist unless it is attached to a animal. To give a animal a sighting, create a animal_id, using this foreign key to give a animal a sighting. `animal_id` here will be same as one animal's primary id in the animal table.
  
  **Researched answer:**
  - To create the association between the Animal and the Sightings table we had to assign a foreign key to Sightings. 
  - The foreign key always goes on the belongs_to side. 
  - By convention the foreign key should always be the `modelname_id` and the data type should be integer. 
  - The `has_many` model is singular, the `belongs_to` model is plural. A animal (singular) has_many sightings (plural).

## 2. Which RESTful API routes must always be passed params? Why?

  **Your answer:**
  - There are 7 different RESTful routes pattern to follow when creating an application or web service that will interact with the server: index, new, create, show, eidt, update, and destroy.'edit\update\destroy' must always be passed params property.
  - Why? Accessing resource doesn't need params or not necessary but manipulating the information(resource) going to and coming from the database of the application.

  **Researched answer:**
  - RESTful routing is a set of standards used in many different languages to create efficient, reusable routes. It aims to map HTTP methods (GET, POST, PATCH, DELETE) and CRUD actions (Create, Read, Update, Destroy) together in a conventional pattern.
  - API parameters are the variable parts of a resource. They determine the type of action you want to take on the resource. Each parameter has a name, value type and optional description. Whenever you want to build a RESTful API, you have to decide which parameters should be present in the API endpoint.
  - RESTful is a pattern to follow when structring routes between the server and client. Restful routes are attempt to bring the operations that can be applied to an object into HTTP requests. Instead of relying solely on the URL to indicate what to visit, a RESTful route depends on **the HTTP verb and the URL.** Parameters are variables that passed to API routes, without params, you cannot take that action on the resource.
  - REST APIs have several types of parameters:
    1. *Header parameters*: Parameters included in the request header, usually related to authorization.
    2. *Path parameters*: Parameters within the path of the endpoint, before the query string (?). These are usually set off within curly braces.
    3. *Query string parameters*: Parameters in the query string of the endpoint, after the ?.

## 3. Name three rails generator commands. What is created by each?

  **Your answer:** 
  ```
  Generate model
  $ rails g model
  Generate controller
  $ rails g controller
  Generate resource--magically create: model, controller, routes...
  $ rails g resource
  ```

  **Researched answer:**
  - The rails generate command, or rails g(short cut). By running rails generate with no arguments, we can see all of the generators that come baked-in.
  - The simplest and most lightweight of the three is the model generator.
  - Using the resource generator gives us even more to start with — running rails generate resource magically (not actually magically) create the: migrations, model, routes, controller, and asset pipeline files.
  - When we really want to see the power of Rails generators, we can generate a scaffold. Rails scaffolding is a quick way to generate some of the major pieces of an application.


## 4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students  Controller#Action: students#index      

method="POST"   /students  Controller#Action: students#create

method="GET"    /students/new  Controller#Action: students#new

method="GET"    /students/2  Controller#Action: students#eidt

method="GET"    /students/edit/2  Controller#Action: students#create

method="PATCH"  /students/2  Controller#Action: students#update   

method="DELETE" /students/2  Controller#Action: students#destroy


## 5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a developer, I want to create my to do list, so I can manage my tasks and workflow.

As a developer, I need to create a template or set up the format for my to do list, so it is easy to been tracked.

As a developer, I want to be able to update my to do list, so I can better schedule or arrange my daily success and failures.

As a developer, I am able to archive my to do list once I finish all tasks.

As a developer, I will get alarm when I reached the time scheduled for my task on the to do list.

As a developer, I am able to manage my to do list not only one day but for a period of time, e.g. one week or one month or longer by changing the time frame.

As a developer, I can set up constraints for break time on my to do list to get work-life balance.

As a developer, I can track my to do list by certain category, e.g. collaborative, properties.

As a developer, I can make priorities by using different colors or symbols.

As a developer, I am able to connect my to do list with my email and Google calendar.