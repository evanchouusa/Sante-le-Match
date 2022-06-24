import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useState} from 'react';
import { ScrollView } from 'react-native';
import ImageContainer from './ImageContainer';
import RollDice from "./RollDice";
import RollDiceTwo from "./RollDiceTwo";
import RollDiceThree from "./RollDiceThree";
import homescreenimage from "./assets/images/homescreenimage.png";
import questionsBackground from "./assets/images/questionsBackground.png";
import Background from "./assets/images/Background.png";
import boardgame from "./assets/images/boardgame.png";
import lesson2boardgame from "./assets/images/lesson2boardgame.png";
import lesson3boardgame from "./assets/images/lesson3boardgame.png";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GameInstructions" component={GameInstructions} />
        <Stack.Screen name="Boardgame" component={Boardgame} />
        <Stack.Screen name="LessonTwoBoardgame" component={LessonTwoBoardgame} />
        <Stack.Screen name="LessonThreeBoardgame" component={LessonThreeBoardgame} />
        <Stack.Screen name="Modules" component={Modules} />
        <Stack.Screen name="LessonOne" component={LessonOne} />
        <Stack.Screen name="LessonTwo" component={LessonTwo} />
        <Stack.Screen name="LessonThree" component={LessonThree} />
        <Stack.Screen name="LessonOneReview" component={LessonOneReview} />
        <Stack.Screen name="LessonTwoReview" component={LessonTwoReview} />
        <Stack.Screen name="LessonThreeReview" component={LessonThreeReview} />
        <Stack.Screen name="Questions" component={Questions} />
        <Stack.Screen name="QuestionsTwo" component={QuestionsTwo} />
        <Stack.Screen name="QuestionsThree" component={QuestionsThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <Text style={{color: '#1E90FF', fontSize:70, marginBottom: 20, fontFamily: "Times New Roman", fontWeight: "bold"}}>
        Sante lé Match
      </Text>

      <img src={homescreenimage} style={{width: 500, marginBottom: 50}}/>
    
      <Button
        title="Play"
        onPress={() => navigation.navigate('GameInstructions')}
      /> <br/>
      
      <Button
        title="Modules"
        onPress={() => navigation.navigate('Modules')}
      />
    </View>
  );
}

function Modules({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{color: '#1E90FF', fontSize: 50, marginBottom: 30, fontFamily: "Times New Roman", fontWeight: "bold"}}>
          Modules
      </Text> <br/>
      
      <div style={{marginBottom: "20px"}}>
        <Button
            title="Lesson 1"
            onPress={() => navigation.push('LessonOne')}
        /> <br/>
      </div>
      
      <div style={{marginBottom: "20px"}}>
        <Button
            title="Lesson 2"
            onPress={() => navigation.push('LessonTwo')}
        /> <br/>
      </div>
      
      <div style={{marginBottom: "20px"}}>
        <Button
            title="Lesson 3"
            onPress={() => navigation.push('LessonThree')}
        /> <br/>
      </div>
      
      <div>
        <Button
            title="Go to Home"
            onPress={() => navigation.push('Home')}
        />
      </div>
    </View>
  );
}

function LessonOne({ navigation }) {
  return (
    <ScrollView
        horizontal={true}
        pagingEnabled={true}
    >
        <ImageContainer source={require('./assets/images/moduleone/Scene1.jpg')}/>
        <ImageContainer source={require('./assets/images/moduleone/Scene2.jpg')}/>
        <ImageContainer source={require('./assets/images/moduleone/Scene3.jpg')}/>
        <ImageContainer source={require('./assets/images/moduleone/Scene4.jpg')}/>
        <ImageContainer source={require('./assets/images/moduleone/Scene5.jpg')}/>
        <ImageContainer source={require('./assets/images/moduleone/Scene6.jpg')}/>
        <ImageContainer source={require('./assets/images/moduleone/Scene7.jpg')}/>
        <ImageContainer source={require('./assets/images/moduleone/Scene8.jpg')}/>
        <ImageContainer source={require('./assets/images/moduleone/Scene9.jpg')}/>
        <ImageContainer source={require('./assets/images/moduleone/Scene10.jpg')}/>
    </ScrollView>
  );
}

function LessonOneReview({ navigation, route }) {

  return (
    <View style={styles.homeContainer}>
        <h2 style={{color: 'red'}}>Your answer was wrong!</h2>
        <img src={require('./assets/images/moduleone/Scene' + route.params.scene + '.jpg')} style={{width: 700, marginBottom: 20}}/>
        <Button title="Continue Back To Game" onPress={() => navigation.navigate('Boardgame', { passStep: route.params.passStep, backStep: route.params.backStep, backFrom: 'review' })} />
    </View>
  );
}

function LessonTwo({ navigation }) {
  return (
    <ScrollView
        horizontal={true}
        pagingEnabled={true}
    >
        <ImageContainer source={require('./assets/images/moduletwo/Scene1.jpg')}/>
        <ImageContainer source={require('./assets/images/moduletwo/Scene2.jpg')}/>
        <ImageContainer source={require('./assets/images/moduletwo/Scene3.jpg')}/>
        <ImageContainer source={require('./assets/images/moduletwo/Scene4.jpg')}/>
        <ImageContainer source={require('./assets/images/moduletwo/Scene5.jpg')}/>
        <ImageContainer source={require('./assets/images/moduletwo/Scene6.jpg')}/>
        <ImageContainer source={require('./assets/images/moduletwo/Scene7.jpg')}/>
        <ImageContainer source={require('./assets/images/moduletwo/Scene8.jpg')}/>
        <ImageContainer source={require('./assets/images/moduletwo/Scene9.jpg')}/>
        <ImageContainer source={require('./assets/images/moduletwo/Scene10.jpg')}/>
        <ImageContainer source={require('./assets/images/moduletwo/Scene11.jpg')}/>
    </ScrollView>
  );
}

function LessonTwoReview({ navigation, route }) {

  return (
    <View style={styles.homeContainer}>
        <h2 style={{color: 'red'}}>Your answer was wrong!</h2>
        <img src={require('./assets/images/moduletwo/Scene' + route.params.scene + '.jpg')} style={{width: 700, marginBottom: 20}}/>
        <Button title="Continue Back To Game" onPress={() => navigation.navigate('LessonTwoBoardgame', { passStep: route.params.passStep, backStep: route.params.backStep, backFrom: 'review' })} />
    </View>
  );
}

function LessonThree({ navigation }) {
  return (
    <ScrollView
        horizontal={true}
        pagingEnabled={true}
    >
        <ImageContainer source={require('./assets/images/modulethree/Scene1.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene2.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene3.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene4.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene5.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene6.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene7.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene8.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene9.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene10.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene11.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene12.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene13.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene14.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene15.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene16.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene17.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene18.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene19.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene20.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene21.jpg')}/>
        <ImageContainer source={require('./assets/images/modulethree/Scene22.jpg')}/>
    </ScrollView>
  );
}

function LessonThreeReview({ navigation, route }) {

  return (
    <View style={styles.homeContainer}>
        <h2 style={{color: 'red'}}>Your answer was wrong!</h2>
        <img src={require('./assets/images/modulethree/Scene' + route.params.scene + '.jpg')} style={{width: 700, marginBottom: 20}}/>
        <Button title="Continue Back To Game" onPress={() => navigation.navigate('LessonThreeBoardgame', { passStep: route.params.passStep, backStep: route.params.backStep, backFrom: 'review' })} />
    </View>
  );
}

function GameInstructions({ navigation }) {
  return (
    <View style={styles.gameInstructionsContainer}>
      <Text style={{color: '#1E90FF', fontSize: 50, marginBottom: 20, fontFamily: "Times New Roman", fontWeight: "bold", marginTop: 30}}>
        How to Play:
      </Text>
      
      <h3>
            As a single player, you will be able to enhance your learning through repetition of playing this game.
      </h3>
        
      <div style={{width: 550, marginBottom: 10, marginTop: 10, textAlign: 'left', lineHeight: 1.0}}>
        <p>
            *Make sure you study and read through the corresponding lessons to each board game before playing!*
        </p>
        <p>
            Start by rolling the dice next to the board game. You will either roll 1-6, which will determine the amount of spaces you move. Once you land on a space, your character should ask you to tap on him.
        </p>
        <p>
            Tap on your character to be led to a question, where you will need to answer correctly. Should you fail to answer the question, you will move back to your original spot before rolling the dice.
        </p>
        <p>
            The game will be complete once you have completed the board game. Do not worry about the few number of spots! Our questions are different and random on every spot, so if you finish the game, you can play again with a set of different questions!
        </p>
        <p>
            Tap on a button below to start playing.
        </p>
      </div>
      <div style={{marginBottom: 10}}>
        <Button
            title="Lesson 1 Game"
            onPress={() => navigation.push('Boardgame')}
        />
      </div>
      <div style={{marginBottom: 10}}>
        <Button
            title="Lesson 2 Game"
            onPress={() => navigation.push('LessonTwoBoardgame')}
        />
      </div>
      <div style={{marginBottom: 30}}>
        <Button
            title="Lesson 3 Game"
            onPress={() => navigation.push('LessonThreeBoardgame')}
        />
      </div>
    </View>
  );
}

function Boardgame({ navigation, route }) {
  return (
    <View style={styles.boardgameContainer}>
    
      <div style={{
        position: 'absolute',
        left: 110,
        top: 120,
      }}>
       {route.params != null ? (<RollDice passStep = {route.params.passStep} backStep = {route.params.backStep} backFrom = {route.params.backFrom} />) : (<RollDice />)}
      </div> <br/>
   
      <div style={{
        position: 'absolute',
        bottom: 50,
        left: 167,
      }}>
        <Button
          title="Go to Home"
          onPress={() => navigation.push('Home')}
        />
      </div>

    </View>
  );
}

function LessonTwoBoardgame({ navigation, route }) {
  return (
    <View style={styles.lesson2BoardgameContainer}>
    
      <div style={{
        position: 'absolute',
        left: 110,
        top: 120,
      }}>
       {route.params != null ? (<RollDiceTwo passStep = {route.params.passStep} backStep = {route.params.backStep} backFrom = {route.params.backFrom} />) : (<RollDiceTwo />)}
      </div> <br/>
   
      <div style={{
        position: 'absolute',
        bottom: 50,
        left: 167,
      }}>
        <Button
          title="Go to Home"
          onPress={() => navigation.push('Home')}
        />
      </div>

    </View>
  );
}

function LessonThreeBoardgame({ navigation, route }) {
  return (
    <View style={styles.lesson3BoardgameContainer}>
    
      <div style={{
        position: 'absolute',
        left: 110,
        top: 120,
      }}>
       {route.params != null ? (<RollDiceThree passStep = {route.params.passStep} backStep = {route.params.backStep} backFrom = {route.params.backFrom} />) : (<RollDiceThree />)}
      </div> <br/>
   
      <div style={{
        position: 'absolute',
        bottom: 50,
        left: 167,
      }}>
        <Button
          title="Go to Home"
          onPress={() => navigation.push('Home')}
        />
      </div>

    </View>
  );
}

function Questions({ navigation, route }) {

    const randomNum = Math.floor(Math.random() * 20);
    const [currentQuestion, setCurrentQuestion] = useState(randomNum);
    const questions = [
        {
            text: "How many times should you brush your teeth?",
            options: [
                {id: 0, text: "a. 3x a day", isCorrect: false},
                {id: 1, text: "b. 2x a day", isCorrect: true},
                {id: 2, text: "c. 1x a day", isCorrect: false},
                {id: 3, text: "d. 6x a day", isCorrect: false},
            ],
            scene: 3,
        },
        {
            text: "When should you wash your hands?",
            options: [
                {id: 0, text: "a. After you use the bathroom", isCorrect: true},
                {id: 1, text: "b. After you tell a joke", isCorrect: false},
                {id: 2, text: "c. After you fart", isCorrect: false},
                {id: 3, text: "d. After you sleep", isCorrect: false},
            ],
            scene: 8,
        },
        {
            text: "When you wash your hands, you should...",
            options: [
                {id: 0, text: "a. Not use any soap", isCorrect: false},
                {id: 1, text: "b. Leave the soap on", isCorrect: false},
                {id: 2, text: "c. Wash the soap off", isCorrect: true},
                {id: 3, text: "d. Pour the soap in the sink", isCorrect: false},
            ],
            scene: 6,
        },
        {
            text: "How should you wash your hands?",
            options: [
                {id: 0, text: "a. Wipe them on your pants", isCorrect: false},
                {id: 1, text: "b. Wash with soap and water for 20 seconds", isCorrect: true},
                {id: 2, text: "c. Wash with water for 5 seconds", isCorrect: false},
                {id: 3, text: "d. Don't wash your hands", isCorrect: false},
            ],
            scene: 6,
        },
        {
            text: "If you feel sick, you should NOT",
            options: [
                {id: 0, text: "a. Play with friends", isCorrect: true},
                {id: 1, text: "b. Stay home and rest", isCorrect: false},
                {id: 2, text: "c. Tell your parents", isCorrect: false},
                {id: 3, text: "d. Drink water", isCorrect: false},
            ],
            scene: 4,
        },
        {
            text: "What should you use to dry your hands after washing?",
            options: [
                {id: 0, text: "a. Wet rag", isCorrect: false},
                {id: 1, text: "b. Dry cloth or paper towel", isCorrect: true},
                {id: 2, text: "c. Socks", isCorrect: false},
                {id: 3, text: "d. Your clothes", isCorrect: false},
            ],
            scene: 6,
        },
        {
            text: "Where can germs be found?",
            options: [
                {id: 0, text: "a. On the floor", isCorrect: false},
                {id: 1, text: "b. On your hands", isCorrect: false},
                {id: 2, text: "c. On food (eggs, chicken, fish)", isCorrect: false},
                {id: 3, text: "d. All of the above", isCorrect: true},
            ],
            scene: 8,
        },
        {
            text: "For how long should you wash your hands?",
            options: [
                {id: 0, text: "a. 1 minute", isCorrect: false},
                {id: 1, text: "b. 2 minutes", isCorrect: false},
                {id: 2, text: "c. 20 seconds", isCorrect: true},
                {id: 3, text: "d. 2 seconds", isCorrect: false},
            ],
            scene: 6,
        },
        {
            text: "What should you use when washing your hands?",
            options: [
                {id: 0, text: "a. Only water", isCorrect: false},
                {id: 1, text: "b. Water and dirt", isCorrect: false},
                {id: 2, text: "c. Water and soap", isCorrect: true},
                {id: 3, text: "d. We don't need to wash our hands", isCorrect: false},
            ],
            scene: 6,
        },
        {
            text: "For how long should you brush your teeth?",
            options: [
                {id: 0, text: "a. 2 minutes", isCorrect: true},
                {id: 1, text: "b. 3 minutes", isCorrect: false},
                {id: 2, text: "c. 1 minute", isCorrect: false},
                {id: 3, text: "d. 30 seconds", isCorrect: false},
            ],
            scene: 3,
        },
        {
            text: "If you feel sick, you should...",
            options: [
                {id: 0, text: "a. Tell your parents", isCorrect: false},
                {id: 1, text: "b. Stay at home and rest", isCorrect: false},
                {id: 2, text: "c. Don't meet your friends", isCorrect: false},
                {id: 3, text: "d. All of the above", isCorrect: true},
            ],
            scene: 4,
        },
        {
            text: "Before you go to sleep, what should you do?",
            options: [
                {id: 0, text: "a. Sing a bedtime song", isCorrect: false},
                {id: 1, text: "b. Dance around your house", isCorrect: false},
                {id: 2, text: "c. Brush your teeth", isCorrect: true},
                {id: 3, text: "d. Watch TV", isCorrect: false},
            ],
            scene: 10,
        },
        {
            text: "Why should you brush your teeth?",
            options: [
                {id: 0, text: "a. No stinky breath", isCorrect: false},
                {id: 1, text: "b. Get germs off teeth", isCorrect: false},
                {id: 2, text: "c. Both A and B", isCorrect: true},
                {id: 3, text: "d. None of the above", isCorrect: false},
            ],
            scene: 3,
        },
        {
            text: "What should you do when you sneeze or cough?",
            options: [
                {id: 0, text: "a. Cough in your friend's face", isCorrect: false},
                {id: 1, text: "b. Spin in a circle", isCorrect: false},
                {id: 2, text: "c. Hold it in", isCorrect: false},
                {id: 3, text: "d. Cover your mouth", isCorrect: true},
            ],
            scene: 5,
        },
        {
            text: "Which food is UNHEALTHY?",
            options: [
                {id: 0, text: "a. Mangoes", isCorrect: false},
                {id: 1, text: "b. Eggs", isCorrect: false},
                {id: 2, text: "c. Candy", isCorrect: true},
                {id: 3, text: "d. Black eyed peas", isCorrect: false},
            ],
            scene: 9,
        },
        {
            text: "Which food is healthy?",
            options: [
                {id: 0, text: "a. Potato", isCorrect: false},
                {id: 1, text: "b. Carrot", isCorrect: false},
                {id: 2, text: "c. Lettuce", isCorrect: false},
                {id: 3, text: "d. All of the above", isCorrect: true},
            ],
            scene: 9,
        },
        {
            text: "Why is it important to eat healthy foods?",
            options: [
                {id: 0, text: "a. They help us grow", isCorrect: false},
                {id: 1, text: "b. They help us grow and make us strong", isCorrect: true},
                {id: 2, text: "c. They have no effect", isCorrect: false},
                {id: 3, text: "d. It is not important", isCorrect: false},
            ],
            scene: 9,
        },
        {
            text: "When should you eat unhealthy food?",
            options: [
                {id: 0, text: "a. All the time", isCorrect: false},
                {id: 1, text: "b. Sometimes", isCorrect: true},
                {id: 2, text: "c. Every day", isCorrect: false},
                {id: 3, text: "d. Never", isCorrect: false},
            ],
            scene: 9,
        },
        {
            text: "Is candy a healthy food?",
            options: [
                {id: 0, text: "Yes", isCorrect: false},
                {id: 1, text: "No", isCorrect: true},
                {id: 2, text: "Sometimes", isCorrect: false},
                {id: 3, text: "Don't know", isCorrect: false},
            ],
            scene: 9,
        },
        {
            text: "Sugar, candy, and soda are...",
            options: [
                {id: 0, text: "a. Healthy!", isCorrect: false},
                {id: 1, text: "b. Unhealthy", isCorrect: true},
                {id: 2, text: "c. Yummy!", isCorrect: false},
                {id: 3, text: "d. None of the above", isCorrect: false},
            ],
            scene: 9,
        },
    ];
    
    //Checks if option clicked is correct
    const optionClicked = (isCorrect) => {
        //we will tell the user that they are correct and they will stay on the spot they landed on. Also redirected back to boardgame
        if (isCorrect) {
             navigation.navigate('Boardgame', { passStep: route.params.passStep, backStep: 0, backFrom: 'question' })
        }
        //we will have the user move back to their original spot and show them the correct module location. Also redirected back to boardgame}
        else {
             navigation.navigate('LessonOneReview', {passStep: route.params.passStep, backStep: route.params.backStep, scene: questions[currentQuestion].scene})
        }
    }
    
    return (
     <View style={styles.questionsContainer}>
        <div style={{textAlign: "center", margin: "0 auto", padding: "16px", borderRadius: "16px", color: "white", boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,\n        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px", width: "80%", height: "auto"}}>
            <h2 style={{color: "black", fontSize: "24px"}}>{questions[currentQuestion].text}</h2>
            
            <ul style={{listStyle: "none"}}>
                {questions[currentQuestion].options.map((option) => {
                    return (
                        <li style={{backgroundColor: "darkgray", padding: "16px", border: "3px solid white", borderRadius: "20px", fontSize: "20px", marginTop: "8px", textDecoration: "none"}} onClick = {() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                    );
                })}
            </ul>
        </div>
     </View>
    );

}

function QuestionsTwo({ navigation, route }) {

    const randomNum = Math.floor(Math.random() * 20);
    const [currentQuestion, setCurrentQuestion] = useState(randomNum);
    const questions = [
        {
            text: "What should you do if you get hurt while playing?",
            options: [
                {id: 0, text: "a. Tell an adult", isCorrect: true},
                {id: 1, text: "b. Continue playing", isCorrect: false},
                {id: 2, text: "c. Run around in a circle", isCorrect: false},
                {id: 3, text: "d. Sit down and sleep it off", isCorrect: false},
            ],
            scene: 1,
        },
        {
            text: "What can you use to clean your cut?",
            options: [
                {id: 0, text: "a. Banana", isCorrect: false},
                {id: 1, text: "b. Soap", isCorrect: true},
                {id: 2, text: "c. Your shirt", isCorrect: false},
                {id: 3, text: "d. You friend's shirt", isCorrect: false},
            ],
            scene: 2,
        },
        {
            text: "What should you do after you get a cut?",
            options: [
                {id: 0, text: "a. Wash and cover the cut", isCorrect: true},
                {id: 1, text: "b. Roll in the dirt", isCorrect: false},
                {id: 2, text: "c. Show it to your friends", isCorrect: false},
                {id: 3, text: "d. Leave it as is", isCorrect: false},
            ],
            scene: 1,
        },
        {
            text: "Why should you wash your cut?",
            options: [
                {id: 0, text: "a. To make it smell good", isCorrect: false},
                {id: 1, text: "b. To get rid of germs", isCorrect: true},
                {id: 2, text: "c. You don't have to wash your cut", isCorrect: false},
                {id: 3, text: "d. None of the above", isCorrect: false},
            ],
            scene: 1,
        },
        {
            text: "What does NOT happen when a cut gets infected?",
            options: [
                {id: 0, text: "a. Takes longer to heal", isCorrect: false},
                {id: 1, text: "b. Turns red", isCorrect: false},
                {id: 2, text: "c. Turns blue", isCorrect: true},
                {id: 3, text: "d. Hurts more", isCorrect: false},
            ],
            scene: 1,
        },
        {
            text: "What should you use to cover your cut?",
            options: [
                {id: 0, text: "a. Clean bandage or piece of cloth", isCorrect: true},
                {id: 1, text: "b. Candy wrapper", isCorrect: false},
                {id: 2, text: "c. Dirty sock", isCorrect: false},
                {id: 3, text: "d. None of the above", isCorrect: false},
            ],
            scene: 2,
        },
        {
            text: "How can you clean your water?",
            options: [
                {id: 0, text: "a. Boil water", isCorrect: true},
                {id: 1, text: "b. Drinking from a puddle", isCorrect: false},
                {id: 2, text: "c. You don't have to clean water!", isCorrect: false},
                {id: 3, text: "d. All of the above", isCorrect: false},
            ],
            scene: 4,
        },
        {
            text: "How can you clean your water?",
            options: [
                {id: 0, text: "a. Use soap", isCorrect: false},
                {id: 1, text: "b. Collect rainwater", isCorrect: true},
                {id: 2, text: "c. You don't have to clean water!", isCorrect: false},
                {id: 3, text: "d. None of the above", isCorrect: false},
            ],
            scene: 4,
        },
        {
            text: "Who should be with you when you boil water?",
            options: [
                {id: 0, text: "a. Your pet", isCorrect: false},
                {id: 1, text: "b. Only you", isCorrect: false},
                {id: 2, text: "c. An adult", isCorrect: true},
                {id: 3, text: "d. Your friend", isCorrect: false},
            ],
            scene: 4,
        },
        {
            text: "What should you do when collecting rainwater?",
            options: [
                {id: 0, text: "a. Cover the bucket once it stop raining", isCorrect: true},
                {id: 1, text: "b. Mix dirt in the water", isCorrect: false},
                {id: 2, text: "c. Put soap in it to make it clean", isCorrect: false},
                {id: 3, text: "d. Drink the water", isCorrect: false},
            ],
            scene: 4,
        },
        {
            text: "Why do you need to cover your rain bucket?",
            options: [
                {id: 0, text: "a. Bugs can get into it", isCorrect: true},
                {id: 1, text: "b. You don't want too much water", isCorrect: false},
                {id: 2, text: "c. So no one steals your water", isCorrect: false},
                {id: 3, text: "d. So it won't overflow", isCorrect: false},
            ],
            scene: 4,
        },
        {
            text: "Before you start cooking, you should clean...",
            options: [
                {id: 0, text: "a. Your hands", isCorrect: true},
                {id: 1, text: "b. Your room", isCorrect: false},
                {id: 2, text: "c. Soccer ball", isCorrect: false},
                {id: 3, text: "d. Your feet", isCorrect: false},
            ],
            scene: 5,
        },
        {
            text: "Which of the following is a diary?",
            options: [
                {id: 0, text: "a. Fish", isCorrect: false},
                {id: 1, text: "b. Pasta", isCorrect: false},
                {id: 2, text: "c. Milk", isCorrect: true},
                {id: 3, text: "d. Potato", isCorrect: false},
            ],
            scene: 10,
        },
        {
            text: "What are the 5 food groups?",
            options: [
                {id: 0, text: "a. Grains, Starches, Dairy, Protein", isCorrect: false},
                {id: 1, text: "b. Grains, Vegetables, Fruits, Dairy", isCorrect: false},
                {id: 2, text: "c. Grains, Vegetables, Fruits, Dairy, Protein", isCorrect: true},
                {id: 3, text: "d. None of the above", isCorrect: false},
            ],
            scene: 6,
        },
        {
            text: "Which of the following is a fruit?",
            options: [
                {id: 0, text: "a. Mango", isCorrect: false},
                {id: 1, text: "b. Coconut", isCorrect: false},
                {id: 2, text: "c. Banana", isCorrect: false},
                {id: 3, text: "d. All of the above", isCorrect: true},
            ],
            scene: 9,
        },
        {
            text: "What food category is rice in?",
            options: [
                {id: 0, text: "a. Grains and starches", isCorrect: true},
                {id: 1, text: "b. Fruits and vegetables", isCorrect: false},
                {id: 2, text: "c. Protein foods", isCorrect: false},
                {id: 3, text: "d. Dairy", isCorrect: false},
            ],
            scene: 7,
        },
        {
            text: "Which of the following is NOT a dairy?",
            options: [
                {id: 0, text: "a. Milk", isCorrect: false},
                {id: 1, text: "b. Yogurt", isCorrect: false},
                {id: 2, text: "c. Cheese", isCorrect: false},
                {id: 3, text: "d. Bread", isCorrect: true},
            ],
            scene: 10,
        },
        {
            text: "Which of the following is a protein?",
            options: [
                {id: 0, text: "a. Chicken", isCorrect: true},
                {id: 1, text: "b. Potato", isCorrect: false},
                {id: 2, text: "c. Papaya", isCorrect: false},
                {id: 3, text: "d. Candy", isCorrect: false},
            ],
            scene: 11,
        },
        {
            text: "Why is it important to eat healthy foods?",
            options: [
                {id: 0, text: "a. To become a strong soccer player", isCorrect: false},
                {id: 1, text: "b. Because they taste good!", isCorrect: false},
                {id: 2, text: "c. To make sure you eat grains and starches, fruits and vegetables, protein foods, and dairy", isCorrect: false},
                {id: 3, text: "d. All of the above", isCorrect: true},
            ],
            scene: 6,
        },
        {
            text: "Which of the following is a vegetable?",
            options: [
                {id: 0, text: "a. Cheese", isCorrect: false},
                {id: 1, text: "b. Carrot", isCorrect: true},
                {id: 2, text: "c. Pasta", isCorrect: false},
                {id: 3, text: "d. Egg", isCorrect: false},
            ],
            scene: 8,
        },
    ];

    
    //Checks if option clicked is correct
    const optionClicked = (isCorrect) => {
        //we will tell the user that they are correct and they will stay on the spot they landed on. Also redirected back to boardgame
        if (isCorrect) {
             navigation.navigate('LessonTwoBoardgame', { passStep: route.params.passStep, backStep: 0, backFrom: 'question' })
        }
        //we will have the user move back to their original spot and show them the correct module location. Also redirected back to boardgame}
        else {
             navigation.navigate('LessonTwoReview', {passStep: route.params.passStep, backStep: route.params.backStep, scene: questions[currentQuestion].scene})
        }
    }
    
    return (
     <View style={styles.questionsContainer}>
        <div style={{textAlign: "center", margin: "0 auto", padding: "16px", borderRadius: "16px", color: "white", boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,\n        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px", width: "80%", height: "auto"}}>
            <h2 style={{color: "black", fontSize: "24px"}}>{questions[currentQuestion].text}</h2>
            
            <ul style={{listStyle: "none"}}>
                {questions[currentQuestion].options.map((option) => {
                    return (
                        <li style={{backgroundColor: "darkgray", padding: "16px", border: "3px solid white", borderRadius: "20px", fontSize: "20px", marginTop: "8px", textDecoration: "none"}} onClick = {() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                    );
                })}
            </ul>
        </div>
     </View>
    );

}

function QuestionsThree({ navigation, route }) {

    const randomNum = Math.floor(Math.random() * 20);
    const [currentQuestion, setCurrentQuestion] = useState(randomNum);
    const questions = [
        {
            text: "Which one is NOT a mosquito borne disease?",
            options: [
                {id: 0, text: "a. Malaria", isCorrect: false},
                {id: 1, text: "b. Flu", isCorrect: true},
                {id: 2, text: "c. Dengue", isCorrect: false},
                {id: 3, text: "d. Chikungunya", isCorrect: false},
            ],
            scene: 1,
        },
        {
            text: "What can you wear to best protect you from mosquito bites?",
            options: [
                {id: 0, text: "a. Long sleeves and long pants", isCorrect: true},
                {id: 1, text: "b. Hat and gloves", isCorrect: false},
                {id: 2, text: "c. Socks and shoes", isCorrect: false},
                {id: 3, text: "d. Shirt and shorts", isCorrect: false},
            ],
            scene: 2,
        },
        {
            text: "What are the chemicals in mosquito repellent/on mosquito bed nets called?",
            options: [
                {id: 0, text: "a. Repellor", isCorrect: false},
                {id: 1, text: "b. Bet net juice", isCorrect: false},
                {id: 2, text: "c. Insecticides", isCorrect: true},
                {id: 3, text: "d. Coronavirus", isCorrect: false},
            ],
            scene: 2,
        },
        {
            text: "What is an antibody?",
            options: [
                {id: 0, text: "a. Person who gives vaccines", isCorrect: false},
                {id: 1, text: "b. Another name for coronavirus", isCorrect: false},
                {id: 2, text: "c. Particle that immune system makes to recognize germ in the future", isCorrect: true},
                {id: 3, text: "d. Particle that helps germs take over the body", isCorrect: false},
            ],
            scene: 8,
        },
        {
            text: "What is an inactivated virus?",
            options: [
                {id: 0, text: "a. Smaller version of virus", isCorrect: false},
                {id: 1, text: "b. Weaker or dead virus", isCorrect: true},
                {id: 2, text: "c. Sleeping virus", isCorrect: false},
                {id: 3, text: "d. Virus that only infects animals", isCorrect: false},
            ],
            scene: 8,
        },
        {
            text: "What can you do to prevent COVID from spreading outside?",
            options: [
                {id: 0, text: "a. Social distance", isCorrect: true},
                {id: 1, text: "b. Hug all of your friends", isCorrect: false},
                {id: 2, text: "c. Cough without covering your mouth", isCorrect: false},
                {id: 3, text: "d. Hold hands with your friends", isCorrect: false},
            ],
            scene: 4,
        },
        {
            text: "What can you do to prevent COVID from spreading inside?",
            options: [
                {id: 0, text: "a. Walk around the room", isCorrect: false},
                {id: 1, text: "b. Close the windows", isCorrect: false},
                {id: 2, text: "c. Talk to your family", isCorrect: false},
                {id: 3, text: "d. Wear a mask", isCorrect: true},
            ],
            scene: 4,
        },
        {
            text: "What can you do to prevent COVID from spreading inside?",
            options: [
                {id: 0, text: "a. Talk to your friends", isCorrect: false},
                {id: 1, text: "b. Open the windows", isCorrect: true},
                {id: 2, text: "c. Eat snacks", isCorrect: false},
                {id: 3, text: "d. Take your mask off", isCorrect: false},
            ],
            scene: 6,
        },
        {
            text: "When should you get your vaccine?",
            options: [
                {id: 0, text: "a. Before you get sick", isCorrect: true},
                {id: 1, text: "b. While you are sick", isCorrect: false},
                {id: 2, text: "c. After you get sick", isCorrect: false},
                {id: 3, text: "d. Never", isCorrect: false},
            ],
            scene: 9,
        },
        {
            text: "What does a vaccine do?",
            options: [
                {id: 0, text: "a. Make you run super fast", isCorrect: false},
                {id: 1, text: "b. Help your body fight off germs that can give you a disease", isCorrect: true},
                {id: 2, text: "c. Give you super vision", isCorrect: false},
                {id: 3, text: "d. Make you sleepy", isCorrect: false},
            ],
            scene: 8,
        },
        {
            text: "What does the BRAT diet stand for?",
            options: [
                {id: 0, text: "a. Banana, Rats, Apple, Tea", isCorrect: false},
                {id: 1, text: "b. Banana, Rice, Applesauce, Toast", isCorrect: true},
                {id: 2, text: "c. Blueberry, Rye, Apple, Tangerine", isCorrect: false},
                {id: 3, text: "d. Bacon, Rice, Avocado, Tomato", isCorrect: false},
            ],
            scene: 12,
        },
        {
            text: "If you don't wash your hands and food, which of the following diseases could you get?",
            options: [
                {id: 0, text: "a. Hepatitis A and Diarrhea", isCorrect: true},
                {id: 1, text: "b. COVID", isCorrect: false},
                {id: 2, text: "c. Malaria and Dengue", isCorrect: false},
                {id: 3, text: "d. All of the above", isCorrect: false},
            ],
            scene: 10,
        },
        {
            text: "What symptoms might you experience if you have hepatitis A or travelers diarrhea?",
            options: [
                {id: 0, text: "a. You might have a fever, cough, or runny nose", isCorrect: false},
                {id: 1, text: "b. You feel happy", isCorrect: false},
                {id: 2, text: "c. You might have fever, stomach pain, feel tired and have nausea", isCorrect: true},
                {id: 3, text: "d. All of the above", isCorrect: false},
            ],
            scene: 11,
        },
        {
            text: "What foods contain high amounts of Vitamin A?",
            options: [
                {id: 0, text: "a. Spinach, lettuce, sweet potatoes, red bell peppers, and carrots", isCorrect: true},
                {id: 1, text: "b. Lettuce, sweet potatoes, green bell pepper, and corn", isCorrect: false},
                {id: 2, text: "c. There aren't any foods with Vitamin A", isCorrect: false},
                {id: 3, text: "d. All foods have Vitamin A", isCorrect: false},
            ],
            scene: 14,
        },
        {
            text: "How does Vitamin A help your immune system?",
            options: [
                {id: 0, text: "a. It kills all the germs and bacteria", isCorrect: false},
                {id: 1, text: "b. It helps create a mucus barrier", isCorrect: true},
                {id: 2, text: "c. It makes antibodies", isCorrect: false},
                {id: 3, text: "d. All of the above", isCorrect: false},
            ],
            scene: 14,
        },
        {
            text: "Vitamin B converts food into...",
            options: [
                {id: 0, text: "a. Glucose", isCorrect: true},
                {id: 1, text: "b. Vegetables", isCorrect: false},
                {id: 2, text: "c. Protein", isCorrect: false},
                {id: 3, text: "d. Nothing", isCorrect: false},
            ],
            scene: 15,
        },
        {
            text: "What are the four food groups?",
            options: [
                {id: 0, text: "a. Grains, Starches, Dairy, Protein", isCorrect: false},
                {id: 1, text: "b. Grains, Vegetables, Fruits, Dairy", isCorrect: false},
                {id: 2, text: "c. Grains, Vegetables, Fruits, Dairy, Protein", isCorrect: true},
                {id: 3, text: "d. None of the above", isCorrect: false},
            ],
            scene: 17,
        },
        {
            text: "What foods have complex carbohydrates?",
            options: [
                {id: 0, text: "a. Fruits and vegetables", isCorrect: false},
                {id: 1, text: "b. Grains", isCorrect: true},
                {id: 2, text: "c. Dairy", isCorrect: false},
                {id: 3, text: "d. Starches", isCorrect: false},
            ],
            scene: 18,
        },
        {
            text: "What foods contain Vitamin C?",
            options: [
                {id: 0, text: "a. Citrus fruits only", isCorrect: false},
                {id: 1, text: "b. Green leafy vegetables", isCorrect: false},
                {id: 2, text: "c. Oranges, kiwi, guava, kale, and broccoli", isCorrect: true},
                {id: 3, text: "d. Kiwi, blueberry, spinach, and lettuce", isCorrect: false},
            ],
            scene: 16,
        },
        {
            text: "Calcium helps your body...",
            options: [
                {id: 0, text: "a. Grow bigger", isCorrect: false},
                {id: 1, text: "b. Grow stronger bones and teeth", isCorrect: true},
                {id: 2, text: "c. Eat more food", isCorrect: false},
                {id: 3, text: "d. All of the above", isCorrect: false},
            ],
            scene: 21,
        },
    ];

    
    //Checks if option clicked is correct
    const optionClicked = (isCorrect) => {
        //we will tell the user that they are correct and they will stay on the spot they landed on. Also redirected back to boardgame
        if (isCorrect) {
             navigation.navigate('LessonThreeBoardgame', { passStep: route.params.passStep, backStep: 0, backFrom: 'question' })
        }
        //we will have the user move back to their original spot and show them the correct module location. Also redirected back to boardgame}
        else {
             navigation.navigate('LessonThreeReview', {passStep: route.params.passStep, backStep: route.params.backStep, scene: questions[currentQuestion].scene})
        }
    }
    
    return (
     <View style={styles.questionsContainer}>
        <div style={{textAlign: "center", margin: "0 auto", padding: "16px", borderRadius: "16px", color: "white", boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,\n        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px", width: "80%", height: "auto"}}>
            <h2 style={{color: "black", fontSize: "24px"}}>{questions[currentQuestion].text}</h2>
            
            <ul style={{listStyle: "none"}}>
                {questions[currentQuestion].options.map((option) => {
                    return (
                        <li style={{backgroundColor: "darkgray", padding: "16px", border: "3px solid white", borderRadius: "20px", fontSize: "20px", marginTop: "8px", textDecoration: "none"}} onClick = {() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                    );
                })}
            </ul>
        </div>
     </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '85% 80%',
  },
  module: {
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameInstructionsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
  },
  boardgameContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
    backgroundImage: `url(${boardgame})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '85% 75%',
    backgroundSize: '900px 600px',
  },
  lesson2BoardgameContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
    backgroundImage: `url(${lesson2boardgame})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '85% 75%',
    backgroundSize: '900px 600px',
  },
  lesson3BoardgameContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
    backgroundImage: `url(${lesson3boardgame})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '85% 75%',
    backgroundSize: '900px 600px',
  },
  questionsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${questionsBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
});


export default App;
