let  readlineSync  =  require('readline-sync');
console.log("Welcome to Codebreakers!");
console.log("Will you rise to the challange and defeat the enemy?!");
if (readlineSync.keyInYN('Yes?....or No?')) {

  console.log('Alright!  Onward we march!');

} else {

  console.log('Too bad!  Winston Garrison marked your response as incorrect!');
}
let userName = readlineSync.question("What is your name?");
console.log('Howdy ' + userName + '!  What would you like to do?  ');
let option = readlineSync.question( "Options: advance, look around" );
switch(option) {
  case "advance":
    console.log( "You can see an outline of the enemy in the distance." );
    break;
  case "look around":
    console.log( "You sense a dark presence in the area." );
    break;
  default:
    console.log( "You'll never win if you don't start moving!" );
}
let option2 = readlineSync.question( "Options: advance, look around" );
switch(option2) {
  case "advance":
    console.log( "You approach an outline of the enemy in the distance." );
    break;
  case "look around":
    console.log( "You sense a dark presence in the area." );
    break;
  }
  console.log("A large figure approaches you...");
  let option3 = readlineSync.question( "Options: Fight!, Outsmart!" );
  switch(option3) {
    case "Fight!":
      console.log( "Winston Garrison: Prepare for battle..." );
      let options = ['short-circuit ', 'punch ', 'rm-rf '];

      let play = true;

      let score = {
      	userScore: 0,
      	computerScore: 0
      }

      while(play) {

      	let choiceIndex =
      		readlineSync
      		.question("Choose your attack! 1: Punch, 2: rm-rf, 3: short-circuit ");

      	while(!(choiceIndex > 0 && choiceIndex <=3)) {
      		console.log("It has no effect!  Try again!");
      		choiceIndex =
      		readlineSync
      		.question("Choose your attack! 1: Punch, 2: rm-rf, 3: short-circuit ");
      	}

      	let userChoice = options[choiceIndex - 1];

      	let computerIndex = Math.random() * 3;

      	computerIndex = Math.floor(computerIndex);

      	let computerChoice = options[computerIndex];

      	if(computerChoice === userChoice) {
      		console.log('Winston Garrison resists!');
      	} else if(userChoice === 'rm-rf ' && computerChoice === 'punch ' || userChoice==='punch ' && computerChoice==='short-circuit ' || userChoice==='short-circuit ' && computerChoice==='rm-rf ') {
      		console.log("You successfully submitted your code!  Winston Garrison was defeated!");
      		console.log('You chose: ', userChoice);
      		console.log('Winston Garrison chose: ', computerChoice);
      		score.userScore++;
      		console.log(`Winston Garrison: ${score.computerScore} You: ${score.userScore}`)
      	} else {
      		console.log("You were defeated by Winston Garrison.");
      		console.log('You chose: ', userChoice);
      		console.log('Winston Garrison chose: ', computerChoice);
      		score.computerScore++;
      		console.log(`Winston Garrison: ${score.computerScore} You: ${score.userScore}`)
      	}

      	let playAgain = readlineSync.question('Continue? y/n ');

      	if(playAgain.toLowerCase() === 'n') {
      		play = false;
      	}

      } break;
    case "Outsmart!":
      console.log( "You sense a dark presence in the area." );
      // console.log("Your task is to correctly respond to Mr. Garrison.");
      console.log("It is impossible to outsmart Mr. Garrison!")

// let optionstwo = ['0', 'Pedro', 17, null];
//
// let playbool = true;
//
// let score2 = {
// 	userScore: 0,
// 	computerScore: 0
// }
//
// while(playbool) {
//
// 	let choiceIndex2 =
// 		readlineSync
// 		.question("Which of the following values return a Boolean result of false? 1. \'0\', 2.\'Pedro\', 3. 17, 4. null");
//
// 	while(!(choiceIndex2 > 0 && choiceIndex2 <=4)) {
// 		console.log("That was not an option!");
// 		choiceIndex2 =
// 		readlineSync
// 		.question("Which value returns a Boolean result of false?");
// 	}
//
// 	let userChoice2 = optionstwo[choiceIndex2 - 1];
//
//
//   let computerIndex2 = Math.random() * 4;
//   console.log(computerIndex2);
//
//   computerIndex2 = Math.floor(computerIndex2);
//   let computerChoice2 = optionstwo[computerIndex2];
//   console.log(computerIndex2);
//
//   if(computerChoice2 === userChoice2) {
// 		console.log('You and Mr. Garrison both answered the same!');
// 	}
//     else if((userChoice2 === 4 && computerChoice2 === 1) || (userChoice2 === 4 && computerChoice2 === 2) || (userChoice2 === 4 && computerChoice2 === 3)) {
//       console.log("You defeated Mr. Garrison!");
//       console.log('You chose: ', userChoice2);
//       console.log('Mr. Garrison chose: ', computerChoice2);
//       score2.userScore++;
//       console.log(`Mr. Garrison: ${score2.computerScore} Your score: ${score2.userScore}`)
//   }
//   // else if(userChoice2 === 'null' && computerChoice2 === 'Pedro') {
//   //     console.log("You defeated Mr. Garrison!");
//   //     console.log('You chose: ', userChoice2);
//   //     console.log('Mr. Garrison chose: ', computerChoice2);
//   //     score2.userScore++;
//   //     console.log(`Mr. Garrison: ${score2.computerScore} Your score: ${score2.userScore}`)
//   // }
//   // else if(userChoice2 === 'null' && computerChoice2 === '17') {
//   //     console.log("You defeated Mr. Garrison!");
//   //     console.log('You chose: ', userChoice2);
//   //     console.log('Mr. Garrison chose: ', computerChoice2);
//   //     score2.userScore++;
//   //     console.log(`Mr. Garrison: ${score2.computerScore} Your score: ${score2.userScore}`)
//   // }
//     else if((userChoice2 === 1 && computerChoice2 === 4) || (userChoice2 === 2 && computerChoice2 === 4) || (userChoice2 === 3 && computerChoice2 === 4)) {
//     console.log("Mr. Garrison marked your code as incorrect!  You were defeated!")
//     console.log('You chose: ', userChoice2);
//     console.log('Mr. Garrison chose: ', computerChoice2);
//     score2.userScore++;
//     console.log(`Mr. Garrison: ${score2.computerScore} Your score: ${score2.userScore}`)
//   }
//   // else if(userChoice2 === 'Pedro' && computerChoice2 === 'null') {
//   //   console.log("Mr. Garrison marked your code as incorrect!  You were defeated!")
//   //   console.log('You chose: ', userChoice2);
//   //   console.log('Mr. Garrison chose: ', computerChoice2);
//   //   score2.userScore++;
//   //   console.log(`Mr. Garrison: ${score2.computerScore} Your score: ${score2.userScore}`)
//   // }
//   // else if(userChoice2 === '17' && computerChoice2 === 'null') {
//   //   console.log("Mr. Garrison marked your code as incorrect!  You were defeated!")
//   //   console.log('You chose: ', userChoice2);
//   //   console.log('Mr. Garrison chose: ', computerChoice2);
//   //   score2.userScore++;
//   //   console.log(`Mr. Garrison: ${score2.computerScore} Your score: ${score2.userScore}`)
//
//     else {
//     console.log("Not quite!  Check your code and try again!");
//     console.log('You chose: ', userChoice2);
//     console.log('Mr. Garrison chose: ', computerChoice2);
//     score2.computerScore++;
//     console.log(`Mr. Garrison: ${score2.computerScore} Your score: ${score2.userScore}`)
//   }
//
// 	let playAgain2 = readlineSync.question('Want to play again? y/n ');
//
// 	if(playAgain2.toLowerCase() === 'n') {
// 		playbool = false;
// 	}
//
// }
      break;
    default:
      console.log( "You were attacked by Winston Garrison." );
  }
