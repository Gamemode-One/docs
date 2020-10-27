---
description: ''
sidebar: 'docs'
prev: '/docs/general/animations-and-controllers/'
next: '/docs/bp/functions/'
---

# Entities

## Files

### Naming

-   The file should be named in the form "identifier.b.json"

    -   Exception: If you are overiding a default file, replace the idenfier with a more suitable name

### Types

-   Creatures
    -   Entities with animal-like behaviours
        -   E.G Wolf
-   Humanoids
    -   NPC entities
        -   E.G Quest Giver
    -   May or may not be agressive
-   Boss
    -   Important unique entities
        -   E.G Sir Improbable
-   World
    -   Static entities
        -   E.G A chair
-   Interactive
    -   Inanimate entities that the player interacts with
        -   E.G Vehicle
-   Misc
    -   Technically entities and the player
        -   E.G Marker

## Component Groups

### Rules

-   All Component Groups should be prefaced with the project namespace
-   Component Groups should be in the orders: Statics, States, Functions

### Types

-   Static
    -   Static Component Groups are added when an entity is spawned
        -   E.G A Variant
    -   They should be in the form "namespace:static_X"
-   State
    -   State Component Groups are added for changing the behaviours of an entity
        -   E.G Chase player
    -   They should be in the form "namespace:state_X"
-   Function
    -   Functional Component Groups are added for a one time action
        -   E.G Spawn another entity
    -   They should be in the form "namespace:func_X"

## Events

### Rules

-   All Events should be prefaced with the project namespace

### Types

-   Reaction
    -   Events which are ran due to an external stimulus E.G A target acquired
    -   They should be in the form "namespace:on_X"
-   Other
    -   Other events are all events which are not reactionary E.G Timer ended
    -   They should be in the form "namespace:add_X" or "namespace:remove_X"
