# Animations and Animation Controllers

## Animation Controllers
### Files
- The file names should be in lower snake case
- They should be in the form "X.ac.json"
- The X should not be too specific
  - It should relate to a broad aspect of the project or to an entity
- It should contain all controllers related to the entity or the part of the project

### Structure
- Each Animation Controller should be named in the form "controller.animation.X.Y"
  - X is the X in the file name and Y is more specifically what it is controlling
  - Lower snake case
- State names should be in the lower snake case
- The first state should be the "default" state
- If the controller is structured in such a way that one state can go to any other state, it should transition back to the "default" state first, to reduce repitition
- If you are running more than 5 commands in an animation controller, you should place the commands in a function and call the function instead
  
## Animations
### Files
- The file names should be in lower snake case
- They should be in the form "X.a.json"
- The X should not be too specific
  - It should relate to a broad aspect of the project or to an entity
  
### Structure
- Each Animation should be named in the form "animation.X.Y"
  - X is the X in the file name and Y is more specifically what it is controlling
  - Lower snake case
- If you are running more than 5 commands in an animation, you should place the commands in a function and call the function instead
