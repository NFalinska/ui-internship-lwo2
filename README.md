# uiinternship
IT-32899

### Project installation

To install dependencies run:
 
```npm install```
 
### Basic commands

```npm run test``` - to execute unit tests

### How to update your fork from upstream

First in your forked repo add this repositiry as an upstream (upstream is just an alias):

```git remote add upstream https://github.com/griddynamics/ui-internship-lwo2```

Then on your master branch run:

1. ``` git fetch upstream ``` *(get all updates from the upstream)*

2. ```git rebase upstream/master```

3. ```git push```

Then you master branch will be up-to-date with upstream

***To update specific branch:***

1. Checkout your branch

2. git fetch upstream

3. git rebase upstream/master or git merge upstream/master

4. git push
