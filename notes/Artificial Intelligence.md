if you can learn, reason, understand or problem-solve, then you are intelligent.

artificial intelligence - making intelligent machines or programs.

![[Pasted image 20240920161719.png]]

	if you are merely applying rules to data, you are not doing intelligent work. you should understand the semantics.

Review Literature of existing techniques

Games can simulate real world

![[Pasted image 20240920234937.png]]

## agent & environment

the environment gives the problem and the agent gives the solution

the agent within an environment will take actions to achieve a particular goal

the agent first perceives the environment and then it takes some actions, that updates the environment, the updated environment is observed and perceived by the agent and then again takes actions. (Like reactive programming)

the agent's current perception of the environment -> Percept

Percept Sequence -> Complete history of everything the agent has perceived

![[Pasted image 20240922002537.png]]
left -> percept
right -> percept sequence

sometimes percept sequence matters, sometimes only the percept does.

like in chess, only the percept matters.


Performance measure of an AI - done through an Evaluation Function. 

if you have a long game and then if your only performance measure is to 'win the game', how would you know whether the actions you are taking are good or not?

	you can take the right decision and still lose.


State space - number of possible configurations of the environment for a given problem
Action space - number of actions possible from a state

Deterministic - No randomness involved in the environment
Stochastic - There's some uncertainity, eg: dice roll

Dynamic environment - changes while agent decides what action to take. Real time games
Static environment - only changes on agent action. Turn based games

## asdasd