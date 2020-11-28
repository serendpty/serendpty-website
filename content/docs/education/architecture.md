---
title: Education > Architecture
---

# Architecture

## Overview

The education project comprises of several `microservices` specialized in providing REST APIs for each aspect of the project. These work in unison to provide the overall functionality of the `Education REST API` presented to the outside world. A service discovery layer is used to manage the overall REST API (authentication, etc.)

![Overall Architecture](/images/overall_architecture.svg#center)

---
## Basic Architecture of a Microservice

These microservices have 3 distinct layers

**Facilitation Layer**

This layer contains all the necessary parts to glue all other aspects of the microservice together. Such as.
- Configuration parser
- Dependency injection container
- Middleware
- Router
- Request handler
- Request data unpacker
- Validator
- Response handler and transformer
- Error handler

**Domain Layer**

This is where all business logic is placed. Since we are using the `Clean Architecture` approach this is the only layer that business logic is written in. Everything needed to process business logic (like data fetching mechanisms from databases and from third party web services) are injected into the domain.

**Externals (Implementation) Layer**

This where actual implementations to use third party libraries (by using `Adapters`), access data from databases (by using `Repositories`) and access to external web services (by using `WebClients`) are written in.

![Microservice Architecture](/images/microservices_architecture.svg#center)

---
## Request Response Cycle

Each request sent to a REST service in the DDS goes through the following request response cycle.

![Request Response Cycle](/images/req_res_cycle.svg#center)

---
## Internal Dataflow

`Entities` that are defined inside the domain are used to communicate to and from the domain. This is done to decouple the domain from all other layers surrounding it and to make the domain **pluggable**. These `Entities` are simple structures defined inside the domain itself.

![Internal Data Flow](/images/data_flow_between_layers.svg#center)
