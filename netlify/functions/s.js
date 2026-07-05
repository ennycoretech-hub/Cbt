import {Mathematics,Physics,Chemistry,English,Biology} from './questsbk.js'


export default async req => {
let body= await req.json()
let combo = body.combo
let quests = []
let quest1 = []
let quest2 = []
let quest3 = []
let quest4 = []

//function 1 
function pickQuests() {
  for (let i = 0; i < English.length; i++) {
    quest1[i] = {
      id: i + 1,
      quest: English[i].quest,
      options: English[i].options,
      answer: Math.floor(Math.random() * 3),
      img: English[i].img,
      imga: English[i].imga,
      imgu: English[i].imgu
      
    }
    console.log(`${quest1[i].id}`)
  }
  quests.push(...quest1)
  if (combo.name == 'Biology') {
    for (let i = 0; i < Physics.length; i++) {
      quest2[i] = {
        id: i + 61,
        quest: Physics[i].quest,
        options: Physics[i].options,
        answer: Math.floor(i / 4),
        img: Physics[i].img,
        imga: Physics[i].imga,
        imgu: Physics[i].imgu
      }
    }
    for (let i = 0; i < Chemistry.length; i++) {
      quest3[i] = {
        id: i + 101,
        quest: Chemistry[i].quest,
        options: Chemistry[i].options,
        answer: Math.floor(i / 4),
        img: Chemistry[i].img,
        imga: Chemistry[i].imga,
        imgu: Chemistry[i].imgu
      }
    }
    
    for (let i = 0; i < Biology.length; i++) {
      quest4[i] = {
        id: i + 141,
        quest: Biology[i].quest,
        options: Biology[i].options,
        answer: Math.floor(i / 4),
        img: Biology[i].img,
        imga: Biology[i].imga,
        imgu: Biology[i].imgu
      }
      
    }
    quests.push(...quest2, ...quest3, ...quest4)
    
  }
  else if (combo.name == 'Mathematics') {
    for (let i = 0; i < Physics.length; i++) {
      quest2[i] = {
        id: i + 61,
        quest: Physics[i].quest,
        options: Physics[i].options,
        answer: Math.floor(i / 4),
        img: Physics[i].img,
        imga: Physics[i].imga,
        imgu: Physics[i].imgu
      }
    }
    for (let i = 0; i < Chemistry.length; i++) {
      quest3[i] = {
        id: i + 101,
        quest: Chemistry[i].quest,
        options: Chemistry[i].options,
        answer: Math.floor(i / 4),
        img: Chemistry[i].img,
        imga: Chemistry[i].imga,
        imgu: Chemistry[i].imgu
      }
    }
    
    for (let i = 0; i < Mathematics.length; i++) {
      quest4[i] = {
        id: i + 141,
        quest: Mathematics[i].quest,
        options: Mathematics[i].options,
        answer: Math.floor(i / 4),
        img: Mathematics[i].img,
        imga: Mathematics[i].imga,
        imgu: Mathematics[i].imgu
      }
     
    }
    quests.push(...quest2, ...quest3, ...quest4)
    
  }
}

//-------------------------------------
//function calling

  pickQuests()
  
  return new Response(
    JSON.stringify(
      quests
    ),
    {
      status:200,
      headers:{
        'content-type':'application/json'
      }
    }
  )
}

