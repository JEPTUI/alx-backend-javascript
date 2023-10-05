// Define the MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: "MajorCredits";
}

// Define the MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: "MinorCredits";
}

// Create a function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: "MajorCredits" };
}

// Create a function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: "MinorCredits" };
}

const majorSubject1: MajorCredits = { credits: 60, brand: "MajorCredits" };
const majorSubject2: MajorCredits = { credits: 40, brand: "MajorCredits" };

const minorSubject1: MinorCredits = { credits: 20, brand: "MinorCredits" };
const minorSubject2: MinorCredits = { credits: 30, brand: "MinorCredits" };

const resultMajor = sumMajorCredits(majorSubject1, majorSubject2);
const resultMinor = sumMinorCredits(minorSubject1, minorSubject2);

console.log(resultMajor);
console.log(resultMinor);
