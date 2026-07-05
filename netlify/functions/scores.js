export default async req => {
 let body = await req.json()
let EnglishAnswers = new Array(60).fill(1)
let ChemistryAnswers = new Array(40).fill(0)
let MathematicsAnswers = new Array(40).fill(0)
let BiologyAnswers = new Array(40).fill(2)
let PhysicsAnswers = new Array(40).fill(0)
let CommerceAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0]

//score params
let sum1
let sum2
let sum3
let sum4
let tsum
//frontend stuff
let uanswers= body.uanswers
let fa = []
let quests = body.quests
let combo= body.combo
let fanswers = [...EnglishAnswers]
//functions
//function 1
//to select answer array based on frontend
function selectAnswer() {
  if (combo.name == 'Biology') {
    fanswers.push(...PhysicsAnswers, ...ChemistryAnswers, ...BiologyAnswers)
  } else if (combo.name == 'Mathematics') {
    fanswers.push(...PhysicsAnswers, ...ChemistryAnswers, ...MathematicsAnswers)
  }
}
//function 2 for making scoring easier
function fill_fa() {
  for (let z = 0; z < quests.length; z++) {
    
    let hinpu = quests[z].id
    let inpu = hinpu - 1
    fa[z] = fanswers[inpu]
    
  }
}
//function2
//main Scoring function
function Scoreuanswer() {
  sum1 = 0
  sum2 = 0
  sum3 = 0
  sum4 = 0
  tsum = 0
  for (let i = 0; i < quests.length; i++) {
    if (uanswers[i] === '') continue;
    if (i >= 0 && i < 60) {
      if (fa[i] == uanswers[i]) {
        sum1 += 100 / 60
      }
    }
    if (i >= 60 && i < 100) {
      if (fa[i] == uanswers[i]) {
        sum2 += 100 / 40
      }
    }
    if (i >= 100 && i < 140) {
      if (fa[i] == uanswers[i]) {
        sum3 += 100 / 40
      }
    }
    if (i >= 140 && i < 180) {
      if (fa[i] == uanswers[i]) {
        sum4 += 100 / 40
      }
    }
  }
  tsum = Math.round(sum1) + Math.round(sum2) + Math.round(sum3) + Math.round(sum4)
  return [tsum, Math.round(sum1), Math.round(sum2), Math.round(sum3), Math.round(sum4)]
}

//function calling must be sequentially called or else logic will break


  
  selectAnswer()
  fill_fa()
  let fscores = Scoreuanswer()
  return new Response(
    JSON.stringify(fscores), {
      status: 200,
      headers: { 'content-type': 'application/json' }
    }
  )
} 