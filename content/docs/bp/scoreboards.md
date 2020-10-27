---
description: ''
sidebar: 'docs'
prev: '/docs/bp/functions/'
next: '/docs/bp/tags/'
---

# Scoreboards

## Constants

-   Constants used in operations should be stored in the objective "const"
    -   They should be in the form "nX" where X is the value of the constant
        -   E.G n5 is 5

## Objectives

-   It is preferred (but not necessary) to name objectives in the form "x_y"
    -   X is the general aspect of the project the scoreboard is relating to
    -   Y is more specifically what the scoreboard is storing
    -   E.G spell_id, spell_cooldown etc
-   If an objective is used to temporally store data for an operation, it should be suffixed with a "\_tmp"
