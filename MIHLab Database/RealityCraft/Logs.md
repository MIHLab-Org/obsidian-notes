Hi all!

I wanted to send you an update.

Apparently, there is a mod called "mindcraft-ce" which is a fork of a more previous mod called "mindcraft". 

LLMs generally consist of several LLM-powered modules used jointly: reasoning, memory, planning, and tool use.
    
[49] Lei Wang, Chen Ma, Xueyang Feng, Zeyu Zhang, Hao Yang, Jingsen Zhang, Zhiyuan Chen, Jiakai Tang, Xu Chen, Yankai Lin, et al. A survey on large language model based autonomous agents. Frontiers of Computer Science, 18(6):186345, 2024.
Sihao Hu, Tiansheng Huang, Fatih Ilhan, Selim Tekin, Gaowen Liu, Ramana Kompella, and Ling Liu. A survey on large language model-based game agents. arXiv preprint arXiv:2404.02039, 2024.
Junlin Xie, Zhihong Chen, Ruifei Zhang, Xiang Wan, and Guanbin Li. Large multimodal agents:  A survey. arXiv preprint arXiv:2402.15116, 2024.
Xu Huang, Weiwen Liu, Xiaolong Chen, Xingmei Wang, Hao Wang, Defu Lian, Yasheng Wang,  Ruiming Tang, and Enhong Chen. Understanding the planning of llm agents: A survey. arXiv preprint arXiv:2402.02716, 2024.
Zeyu Zhang, Xiaohe Bo, Chen Ma, Rui Li, Xu Chen, Quanyu Dai, Jieming Zhu, Zhenhua Dong,  and Ji-Rong Wen. A survey on the memory mechanism of large language model based agents. arXiv preprint arXiv:2404.13501, 2024.

When giving a llm a task, a good llm will generally split that task into subtasks. 

As of now, we have a minecraft server inhabited by a llm-agent named Andy who does what we ask him. Hopefully we can introduce the next agent, Jill, soon. 

Andy is backed by the llm: https://andy.mindcraft-ce.com/. However, it is possible to use other models instead.

Purpose:

We do not specifically have a purpose yet. However, there is some inspiration available: https://www.youtube.com/watch?v=9piFiQJ-mnU

We might want to read this research project and see if there are any of the experiments listed that we would want to recreate: https://arxiv.org/abs/2411.00114.

Some possibilities include:

Today we modified Andy's persona file to see how that would change Andy's actions. 

Some points that were made were that Andy does not seem to be all that autonomous. So, we gave Andy the task of defeating the Ender-dragon. I will report that such a task does seem to have exhausted my meager Andy api credits. However, before Andy returned the dreaded "mind disconnected" message, he was able to procure iron and was in the process of crafting an iron pickaxe.

This is fairly remarkable since he started with only his bare hands, meaning that he had to source wood, craft a crafting table, create wood ax, etc.

I have attached his current persona file here, and also a log of all his activities.

Going Forward:

If you have ideas about what Andy should do next, please share them. Next Friday, we can run Andy and test out those ideas. My credits will have renewed by then.

But of course, each of you can also create a free account which would give us even more api usage and we can probably have different agents as well.