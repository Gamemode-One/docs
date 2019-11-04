# Entities

## File
### General Rules
- File names should be in lower snake case
- The file should be named in the form "identifier.entity.json"
  - Exception: If you are overiding a default file, replace the idenfier with a more suitable name
  
### Types
- Creatures
  - These are entities with animal-like behaviours E.G Wolf
- Humanoids
  - These are generally npc entities E.G Quest Giver
  - May or may not be agressive
- Boss
  - These are important unique entities that you fight E.G Sir Improbable 
- World
  - These are static entities E.G A chair
- Interactive
  - These are inanimate entities that the player interacts with E.G Vehicle
- Misc
  - These are technically entities E.G Marker

## Component Groups
### General Rules
- All Component Groups should be prefaced with the project namespace
- Component Group names should be in lower snake case
- Component Groups should be in the orders: Statics, States, Functions

### Types
- Static
  - Static Component Groups are added when an entity is spawned E.G A Variant
  - They should be in the form "namespace:static_X"
- State
  - State Component Groups are added for changing the behaviours of an entity E.G Chase player
  - They should be in the form "namespace:state_X"
- Function
  - Functional Component Groups are added for a one time action E.G Spawn another entity
  - They should be in the form "namespace:func_X"

  
## Events
### General Rules
- All Events should be prefaced with the project namespace
- Event names should be in lower snake case

### Types
- Reaction
  - Reaction Events are events which are ran due to an external stimulus E.G A target acquired
  - They should be in the form "namespace:on_X"
 - Other
   - Other events are events which are not reactionary E.G Timer ended
   - They should be in the form "namespace:add_X" or "namespace:remove_X"
