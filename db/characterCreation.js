'use strict';

let Character = require('./schemas/character.schema.js'),
    Class = require('./schemas/character.class.schema.js'),
    Stats = require('./schemas/character.stats.schema.js');

let  barbStats = new Stats({
      strength:       15,
      constitution:   15,
      dexterity:      15,
      intelligence:   10,
      wisdom:         10,
      charisma: Math.floor(Math.random()*16) + 3
    }),
    wizStats = new Stats({
      strength:       12,
      constitution:   12,
      dexterity:      12,
      intelligence:   16,
      wisdom:         12,
      charisma: Math.floor(Math.random()*16) + 3
    }),
    pallyStats = new Stats({
      strength:       15,
      constitution:   15,
      dexterity:      13,
      intelligence:   10,
      wisdom:         13,
      charisma: Math.floor(Math.random()*11) + 8
    }),
    clericStats = new Stats({
      strength:       13,
      constitution:   13,
      dexterity:      12,
      intelligence:   13,
      wisdom:         16,
      charisma: Math.floor(Math.random()*13) + 6
    }),
    theifStats = new Stats({
      strength:       13,
      constitution:   13,
      dexterity:      16,
      intelligence:   13,
      wisdom:         10,
      charisma: Math.floor(Math.random()*9) + 10
    });

// Barbarian Class
let Barbarian = new Class({
      name: 'Barbarian',
      description: 'The Barbarian is an elite warrior with high hitpoints and is excellent in physical combat. The ultimate warrior which is capable of using any weapon, best used as a tank that can also deal high damage.',
      health: 12,
      stats: { name: barbStats },
      abilities: ['Attack']
    }),
    // Wizard Class
    Wizard = new Class({
      name: 'Wizard',
      description: 'The wizard is a powerful user of magic who is fairly weak in physical combat. The wizard starts off weak but quickly gains power as you level up.',
      health: 6,
      stats: { name: wizStats },
      abilities: ['Cast Spells']
    });
    // Paladin Class
    Paladin = new Class({
      name: 'Paladin',
      description: 'The paladin is a holy warrior who has swore his sword to his/her divine god. The paladin excells in physical combat but has a few extra abilities. They can heal themseleves or an ally for a portion of their max hitpoints, they are immune to disease and gain +2 on all saving throws.',
      health: 10,
      stats: { name: pallyStats },
      abilities: ['Attack', 'Lay-On-Hands']
    }),
    // Cleric
    Cleric = new Class({
      name: 'Cleric',
      description: 'The cleric is a holy healer whom can heal as well as fight. The cleric can only use blunt weapons (i.e. maces, staves, hammers) ',
      health: ,
      stats: { name: clericStats },
      abilities:
    }),
    // Theif
    Theif = new Class({
      name: ,
      description: ,
      health: ,
      stats: { name: theifStats },
      abilities:
    });

    function generateClass(className) {
      var newClass;

      switch(className){
        case 'Barbarian':
          newClass = Barbarian;
          break;
        case 'Wizard':
          newClass = Wizard;
          break;
        case 'Paladin':
          newClass = Paladin;
          break;
        case 'Cleric':
          newClass = Cleric;
          break;
        case 'Theif':
          newClass = Theif;
      }

      return newClass;
    }

    let newCharacter = function createCharacter(name, className){
      let character = new Character({
        name: name,
        class: generateClass(className)
      });

      return character;
    }

module.exports = newCharacter;
