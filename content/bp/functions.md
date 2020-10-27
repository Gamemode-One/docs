---
description: ''
sidebar: 'docs'
prev: '/bp/entities/'
next: '/bp/scoreboards/'
---

# Functions

## Root Core Files

-   main.mcfunction
    -   This is the main game loop file
    -   Any code which should be ran every tick is ran from here
    -   Module controllers will generally be ran in here
-   reset.mcfunction
    -   This is the main reset file
    -   This will call the reset function in each module
    -   It will also run any other miscellaneous commands required to reset the project
-   init.mcfunction
    -   This is the main init file
    -   This will call the init function in each module
-   Modules
    -   A module is simply a folder with all the functions relating to one aspect of a project

## Module Core Files

-   controller.mcfunction
    -   This is the primary controller of the module
    -   It is a looping function that controls the aspects of each module
    -   It is often called within main.mcfunction
    -   It often calls other controllers within the module
-   reset.mcfunction
    -   This should reset each aspect of the module
    -   It can be called within the main reset file or elsewhere
-   init.mcfunction

    -   This is the first time setup function for a module
    -   It is **not** a reset function
    -   It should do things such as creating scoreboard objectives and spawning permanent entities

## Function Types

-   Controllers
    -   Controllers are looping files which control an aspect of a module
    -   They will often detect something and call an event as a result
    -   E.G The "display_controller.mcfunction" function controls the display of something within a module
    -   These are usually **not** called relative to an entity
    -   File names are suffixed with "\_controller"
-   Events
    -   Events are non looping functions which are called as a result of something happening
    -   They are often called from a controller (function or animation)
    -   These can be called relative to an entity
    -   File names are preffixed with "on\_"
-   Loops
    -   Loops are looping functions which are called while certain criteria are met, or for a fixed period of time
    -   These are similar to events
    -   File names are preffixed with "while\_"
-   Other
    -   These are functions that don't with into the above categories
    -   They don't have strict naming rules, just have a descriptive name

## Misc

-   Functions do not require a namespace
-   If you execute a function relative to an entity, you can use @s within the function to refer to the entity
    -   This can be a very powerful way to make your functions dynamic so use it to your advantage!
-   It is good practise not to include the name of the module within the names of files in a module
    -   E.G It is a lot cleaner to write "/function region/display_controller" vs "/function region/region_display_controller"
