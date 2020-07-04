# Data Driven FE Base
A boilerplate for data driven front project

# Tech stack
- React
- Apollo Graphql
- Graphql code generator

# Structure
> ***ui-comps***  
Unit of UI components

> ***widgets***  
Group of UI components is either bound or not bound to graphql operations (query, mutation, subscription)

> ***pages***  
Widget or group of widgets that match to at least an url for navigation purpose

> ***shell***  
Skeleton for pages and navigation

# Requirements
- [ ] Script
  - [ ] Dev script
    - [x] Serve dev bundle
    - [ ] Bundle dev
    - [ ] Generate graphql operations
  - [ ] Build script
- [ ] I18N
- [x] Routing
- [x] Data driven
- [ ] Query caching
- [ ] Share UI Component
