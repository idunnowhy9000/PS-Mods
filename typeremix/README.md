Type Remix
================================
Type Remix is an OM on Smogon's forum's Other Meta's section.
Introduction
--------------------------------
Have you ever wondered what will happen if Pokemon get new typing combinations? New STABs or even strategies will arise. I think you already know where we're going with this...
Type Remix is a metagame in which all Pokemon have a completely randomized typing. They are guaranteed to get not 1, but 2 types, and every forme that is coded into the simulator has a different typing! *[(directly from original thread)][1]*

  [1]: http://www.smogon.com/forums/threads/3510949/
  
Installing
--------------------------------
Type Remix installs like most mods in this repo (consult repo's README). However, Type Remix requires you to edit the ```team-validator.js``` file on your main server's folder. Just copy the code in this folder's ```team-validator.js``` file **after** line ~584 (that contains ```alreadyChecked[template.speciesid] = true;```) and **before** the line ~587 (that contains ```if (template.learnset)```)