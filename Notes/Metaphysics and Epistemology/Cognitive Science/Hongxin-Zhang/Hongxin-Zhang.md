Hongxin Zhang, Weihua Du, Jiaming Shan, Qinhong Zhou, Yilun Du, Joshua B Tenenbaum,  Tianmin Shu, and Chuang Gan. Building cooperative embodied agents modularly with large language models. arXiv preprint arXiv:2307.02485, 2023.

# Abstract

Addresses challenging multi-agent communication problems.
- decentralized control
- raw sensory observations
- costly communication
- multi-objective tasks
	- instantiated in various embodied environments

Harnesses
	- Commonsense knowledge
	- reasoning ability
	- language comprehension
	- text generation
- into cognitive-inspired modular framework that integrates with perception, memory, and execution.

# Introduction

Humans cooperate and communicate when solving problems
- [ ] Wooley et al, 2010

For it to be effective, llms require the ability to also cooperate and communicate
- [ ] Deitke et al, 2022

# Related Work

Multiagent cooperation and communication have a long history.

For embodied intelligence, 
- [ ] Puig et al. (2021; 2023) explored the social perception of the agents during their cooperation.

There has also been a line of work utilizing multiple LLMs to cooperate or debate with each other "in mind" to strengthen the single agent’s capability to solve complex tasks (Li et al., 2023b; Du et al., 2023; Wang et al., 2023c), different from their "free self-talk" setting, our decentralized language agents must plan about when and what to communicate carefully since it’s costly in real-life. 

Effective communication relies on theories of mind
- [ ] There has also been a line of work utilizing multiple LLMs to cooperate or debate with each other "in mind" to strengthen the single agent’s capability to solve complex tasks (Li et al., 2023b; Du et al., 2023; Wang et al., 2023c), different from their "free self-talk" setting, our decentralized language agents must plan about when and what to communicate carefully since it’s costly in real-life.
	- [ ] Li et al., 2023b; 
	- [ ] Du et al., 2023; 
	- [ ] Wang et al., 2023c

# Building Cooperative Embodied Agents Modularly with LLMs

Cognitive Architectures

CoELA
	Langley et al., 2009; Laird, 2019; 2022

Cooperative Embodied Language Agent with novel modular framework
	- consists of five key modules:
		- a. Perception
		- b. Memory
		- c. Communication
		- d. Planning
		- e. Raw Sensory Observation

a $\rightarrow$ b
	stores its knowledge and experience of the world and others
		1. Decide what to send
		2. Decide this message or another (c)
			1. b $\rightarrow$ c
			2. Then LLM generates message + d
				1. d takes related information from b, and available actions, updates b2, (episodic memory)
				2. e, executes retrieval from b3 into primitive actions.

# Bibliography

- [ ] Anita Williams Woolley, Christopher F Chabris, Alex Pentland, Nada Hashmi, and Thomas W Malone. Evidence for a collective intelligence factor in the performance of human groups. science, 330(6004):686–688, 2010.
- [ ] Matt Deitke, Dhruv Batra, Yonatan Bisk, Tommaso Campari, Angel X Chang, Devendra Singh Chaplot, Changan Chen, Claudia Pérez D’Arpino, Kiana Ehsani, Ali Farhadi, et al. Retrospectives on the embodied ai workshop. arXiv preprint arXiv:2210.06849, 2022.
- [ ] Xavier Puig, Kevin Ra, Marko Boben, Jiaman Li, Tingwu Wang, Sanja Fidler, and Antonio Torralba. Virtualhome: Simulating household activities via programs. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR), June 2018.
- [ ] Shuang Li, Xavier Puig, Chris Paxton, Yilun Du, Clinton Wang, Linxi Fan, Tao Chen, De-An Huang, Ekin Akyürek, Anima Anandkumar, et al. Pre-trained language models for interactive decision-making. Advances in Neural Information Processing Systems, 35:31199–31212, 2022.
- [ ] Yilun Du, Shuang Li, Antonio Torralba, Joshua B Tenenbaum, and Igor Mordatch. Improving factuality and reasoning in language models through multiagent debate. arXiv preprint arXiv:2305.14325, 2023.
- [ ] Zhenhailong Wang, Shaoguang Mao, Wenshan Wu, Tao Ge, Furu Wei, and Heng Ji. Unleashing cognitive synergy in large language models: A task-solving agent through multi-persona selfcollaboration. arXiv preprint arXiv:2307.05300, 2023c.
- [ ] Pat Langley, John E Laird, and Seth Rogers. Cognitive architectures: Research issues and challenges. Cognitive Systems Research, 10(2):141–160, 2009.
- [ ] John E Laird. The Soar cognitive architecture. MIT press, 2019. 
- [ ] John E Laird. Introduction to soar. arXiv preprint arXiv:2205.03854, 2022.