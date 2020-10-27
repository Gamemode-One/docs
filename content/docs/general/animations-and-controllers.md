---
description: ''
sidebar: 'docs'
next: '/docs/bp/entities/'
prev: '/docs/misc/'
---

# Animations Controllers

## Files

-   They should be in the form "X.ac.json" or "X.cac.json"
-   The X should not be too specific
    -   It should relate to a broad aspect of the project or to an entity
-   It should contain all controllers related to the entity or the part of the project
    -   E.G player_armor_handler.ac.json

### Structure

-   Each Animation Controller should be named in the form "controller.animation.X.Y"
    -   X is the X in the file name and Y is more specifically what it is controlling
        -   E.G controller.animation.player_armor_handler.chestplate
-   The first state should always be the "default" state
-   If the controller is structured in such a way that one state can go to any other state, it should transition back to the "default" state first, to reduce repitition in transitions
-   If you are running more than 5 commands in a single state, you should place the commands in a function and call the function instead

# Animations

### Files

-   They should be in the form "X.a.json" or "X.ca.json"
-   The X should not be too specific
    -   It should relate to a broad aspect of the project or to an entity
-   It should contain all animations related to the entity or the part of the project
    -   E.G player.a.json

### Structure

-   Each Animation should be named in the form "animation.X.Y"
    -   X is the X in the file name and Y is more specifically what it is controlling
        -   E.G animation.player.armor
-   If you are running more than 5 commands in an animation, you should place the commands in a function and call the function instead
