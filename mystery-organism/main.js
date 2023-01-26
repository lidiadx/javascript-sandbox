/*
Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. 
Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. 
The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. 
However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. 
Your job is to create objects that simulate the DNA of P. aequor for your research team to study.
*/
// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// A factory to construct pAequor objects
const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    // Changes a random base in the dna
    mutate() {
      let baseInd = Math.floor(Math.random() * this.dna.length);
      //console.log('Mutating dna at index ' + baseInd);
      let base = this.dna[baseInd];
      let newBase = base;
      while (base === newBase) {
        newBase = returnRandBase();
      }

     this.dna[baseInd] = newBase;
      //console.log(this.dna);
      return this.dna;
    },
    // Returns percentage of similarity to another dna
    compareDNA(pAequor) {
      const dna1 = this.dna;
      const dna2 = pAequor.dna;
      let countEqual = 0;
      for (let i = 0; i < dna1.length; i++) {
        if (dna1[i] === dna2[i]) {
          countEqual++;
        }
      }
      const percentage = Math.floor(countEqual / dna1.length * 100);
      console.log(`Specimen #${this.specimenNum} and Specimen #${pAequor.specimenNum} have ${percentage}% DNA in common.`);
      return percentage;
    },
    // Returns true if Cs and Gs are more than 60%
    willLikelySurvive() {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          count += 1;
        }
      }
      let percentage = count / this.dna.length;
      if (percentage >= 0.6) {
        return true;
      } 
      return false;
    },
    // Returns a dna compliment to the current species
    complementStrand() {
      const bases = ['A', 'T', 'C', "G"];
      const compliments = ['T', 'A', 'G', 'C'];
      const complimentDNA = this.dna.map(letter => {
        return compliments[bases.indexOf(letter)];
      });
      return complimentDNA;
    }
  }
}

// Generates an array comtaining num pAequor objects
const generatePack = (num) => {
  const survivalPack = [];
  for (let i = 0; i < 30; i++) {
    let arr = mockUpStrand();
    let peqTest = pAequorFactory(i + 1, arr);
    const peqTestOld = Object.assign({}, peqTest);
  
    while( !peqTest.willLikelySurvive() ) {
      peqTest.mutate();
    }
  
    console.log(peqTest);
    peqTestOld.compareDNA(peqTest); 
    survivalPack.push(peqTest);
  }
  return survivalPack;
}

// Looks through a pack of pAequor objects to find a pair with the most similar dnas
const findSimilar = (pack) => {
  let max = 0;
  let best1 = {};
  let best2 = {};
  for (let i = 0; i < survivalPack.length; i++) {
    for (let j = i + 1; j < survivalPack.length; j++) {
      const specimen1 = survivalPack[i];
      const specimen2 = survivalPack[j];
      const percentage = specimen1.compareDNA(specimen2);
      if (percentage > max) {
        max = percentage;
        best1 = specimen1;
        best2 = specimen2;
      } 
    }
  }
  console.log('Best similarity species found:');
  best1.compareDNA(best2);
}

/////////// TESTS ///////////////
/*
let arr = mockUpStrand();
const peq1 = pAequorFactory(0, arr);
console.log(peq1);

console.log(peq1.complementStrand());

peq1.mutate();
console.log(peq1);

arr = mockUpStrand();
const peq2 = pAequorFactory(2, arr);
console.log(peq2);

peq1.compareDNA(peq2);

console.log(peq1.willLikelySurvive());
console.log(peq2.willLikelySurvive());

let myDNA = 'C C C C C C C C G G G A A T T';
const peq3 = pAequorFactory(3, myDNA.split(' '));
console.log(peq3);

console.log(peq3.willLikelySurvive());

*/

const survivalPack = generatePack(30);
console.log(survivalPack);

findSimilar(survivalPack);
