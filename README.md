# Data Driven FE Base
A data driven front end project boilerplate

# Tech stack
- React
- Apollo Graphql
- Graphql code generator
- Recoil

# Structure
> ***ui-comps***  
Unit of UI components

> ***widgets***  
Group of UI components is either bound or not bound to graphql operations (query, mutation, subscription)

> ***pages***  
Widget or group of widgets that match to at least an url for navigation purpose

> ***shell***  
Skeleton for pages and navigation

> ***hooks***  
For sharing common react component logics

> ***atoms__unstable***  
Local state management

> ***services__unstable***  
Do interactions that cannot done via graphql

# Requirements
- [ ] Script
  - [ ] Dev scripts
  - [ ] Build script
- [x] Routing
- [x] Local state management
- [ ] Query caching
- [ ] I18N
- [ ] Pagination & listing
- [ ] Layout
  - [ ] Vertical
  - [ ] Side left/right
