# For the frontend framework, I opted for Vue3 with typescript, vuex, vue-router for easier debugging, also I opted for tailwind css between the given two options i.e., tailwind css and vanilla css. For writing unit test cases I went with the combination of jest with test-utils.

# Architecture:

# Folder Structure:

# components -> Contains both resuable and page specific components.

# views -> Contains the page views.

# tests -> Contains unit test cases.

# store -> Contains vuex global state.

# shared -> Contains type definition, constants and utility functions.

# Instead of managing 4 seperate views with one state on a single page, instead I went with the approach to create seperate page view, to make sure in case of reload or sharing of link, user doesn't have to start over again from the initial welcome step.

# Since the data was distributed between two seperate pages, and was shared between Summary and Policy form page, I created state in the vuex store to make sure the calculations for amount, rate and some other values come from a single source of truth and are consistent and can be reused.

# Unit test cases: I've added 3 test suites, one for store and 2 for components (Button and Welcome).
