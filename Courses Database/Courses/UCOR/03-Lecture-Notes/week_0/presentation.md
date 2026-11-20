---
output: 
  xaringan::moon_reader:
    css: ["xaringan-themer.css", "mycss.css"]
    seal: false 
---

```{r setup, include=FALSE}
library(knitr)
knitr::opts_chunk$set(echo = FALSE)
```

```{r xaringan-themer, include=FALSE, warning=FALSE}
library(xaringanthemer)
style_mono_light(
  base_color = "#23395b",
  header_font_google = google_font("News Cycle"),
  text_font_google   = google_font("Noto serif", "300", "300i"),
  code_font_google   = google_font("Fira Mono"),
  base_font_size = "20px",
  text_font_size = "1.4rem", # increased from 1rem in default
  header_h1_font_size = "2.75rem",
  header_h2_font_size = "2.25rem",
  header_h3_font_size = "1.75rem",
  # save colors so you can check text color inline (e.g. ".red[this text will be red]")
  colors = c(
  red = "#f34213",
  purple = "#3e2f5b",
  orange = "#ff8811",
  green = "#136f63",
  white = "#FFFFFF")
)
# save additional CSS
# this is a container used to align details (Name/Date) to bottom-right on the title slide
extra_css <- list(
  ".bottom" = list(
    "position" = "fixed",
    "text-align" = "right",
    "font-family" = "\"Fira Mono\"", 
    "line-height" = 0.7,
    "right" = 0,
    "bottom" = 0,
    "padding-right" = "100px",
    "padding-bottom" = "100px"
    )
  )
# save to a CSS file (note: include in YAML)
style_extra_css(css = extra_css, outfile = "mycss.css")
```

class: title-slide

# Introduction

???

Ultimate Questions: Philosophy is one of 19 Core Components. The University Core SLO(s) that
this component is designed to intentionally advance are listed below:
• SLO 1: Examine their actions and vocations in dialogue with the Catholic, Jesuit tradition.
• SLO 2: Integrate knowledge from multiple disciplines to address complex questions.
• SLO 3: Assess evidence and draw reasoned conclusions.
Additionally, the Core Component-level Student Learning Outcomes are listed below.
Students who complete this course will be able to:
• Explain and evaluate arguments for philosophical answers, including those in the Catholic tradition, to ultimate quetsions concerning the nature of humanity, reality and God, knowl-
edge, and/or the good life.

---

## Methods

???

• Apply an array of analytic methods, and conceptual tools, logical principles, and other re-
sources to their own inquiry into ultimate questions.

• Articulate and reflect on their own worldview and practices in dialogue with different an-
swers to ultimate questions, including answers in the Catholic tradition.

---

## Some Formal Class Objectives

--

* Examining one's own actions and vocations methods in the Catholic, Jesuit tradition.

--

* Integrating knowledge from multiple disciplines to address complex questions

--

* Drawing reasoned conclusions from available evidence

???

This course invites students to explore enduring philosophical questions and to reflectively eval-
uate the various answers given them by thinkers from a range of social, historical, and religious

contexts. Students will tackle ultimate questions in a range of philosophical domains, including
issues 

such as the nature of self and ultimate reality, morality and human meaning, rationality and
the pursuit of truth. 

The aim of the course is to give students an opportunity to critically examine
their own beliefs and commitments in dialogue with each other and with great thinkers past and
present. (Offered Fall, Spring, and Summer)

---

* Therefore, at the end of this course you will be able to:

???

1. Learn what great thinkers have to say in response to enduring philosophical questions and

how their answers represent philosophically and dialectically distinct answers to such ques-
tions. Students will consider a range of philosophical voices and perspectives–including

---



???

classic texts from Plato and Aristotle, texts from thinkers in the Catholic tradition, and texts
by thinkers historically underrepresented in the western canon. In reading and discussing

such thinkers and texts students will be encouraged to consider and assess both the philo-
sophical merits and costs of the various views they encounter.

---

* Analysis

???

2. Learn to explain, analyze, and evaluate arguments for philosophical answers to ultimate
questions. Students will learn to give a close reading of philosophical texts with a view
toward being able to explain and analyze the arguments they contain. By the end of the semester, students should be able to 

---

* (i) identify the key premises, assumptions, and conclu-
sions present the texts they encounter and 

* (ii) explain the content of the arguments premises

in a way that 

* (iii) illuminates how these premises support an inference to the conclusion. Fi-
nally, students will learn to evaluate the arguments they encounter by, among other things,

assessing them according to logical notions of validity and soundness.

---

3. Begin to shape their own answers to ultimate questions by applying distinctively logical and philosophical ways of thinking to them.

???

* Why am I a Christian, Hindu, Buddhist?
* If I am atheist, does this mean I do not have belief?

---

* What reasons do I have? 

???

4. Learn to articulate their own worldview and practices in dialogue with different answers to
ultimate questions. Students will be provided with opportunities to reflect on the way in
which their own commitments, values, and practices may overlap with or diverge from the
perspectives they encounter in their readings, in lectures, and in dialogue with one another.e
 
---

## How will we proceed?

???

We will be looking at these questions which have yet to be answered conclusively using various 

* analytic methods
* conceptual tools
* logical principles

And whatever other resources are available to us

---

2. What this means for us

???

2. In this course, we will look at many examples of philosophy. We will also look at other forms of argument as well and ask the question whether or not these other forms fail the necessary and sufficient conditions of philosophical discourse? To do this, we will first have to determine what the argument being made is.

---

# The Broad Outline of the course

---


1. What is philosophical dialogue?:

???

1. On the one hand, philosophical dialogue consists in argumentation, structured premises, conclusions which are necessarily entailed by their premises. Many people might say that there is a normative standard about what forms such dialogues should take. It is just this question which our first reading asks; whether it is plausible that philosophy takes other forms, can it be done through literature? Film?, Music? In order to answer this question however, we must first concern ourselves with another question, what exactly is philosophy?

2. Meta-philosophy

We will look at

1. What is philosophical dialogue and how does it differ from other forms of discourse
2. What is an argument:
  1. How should we recognize it?
  2. What are its parts
  3. When does it become difficient
  4. Why is it important?

---

2.  Formal Language

???

We will look at and analyze language, asking such questions as 

Including a seemingly non-intuitive approach to language called logic.

We will attempt to symbolize language in an approach to understand language's attempt at communicating meaning.

---

3. Logic

???

Logic is the study of reasoning

Its the study of using arguments as an important component of reasoning

* an argument is a sequence of declarative sentences, sentences which make a declaration of some type.

If things go well, some of these sentences (premises) will provide supporting evidence for a final sentence known (conclusion).

---

4. Ultimate questions

???

This will be only one way which we go about analyzing the questions which will be the subject of this course.

Questions such as:

1. Do we a stable or unstable identities, do they remain the same over time (immutable), or do they change?
2. Is there a difference between personal and other forms of identity?
3. Are their possible worlds where fictional characters exist? Where you have a different identity?
4. What is the nature of knowledge? When does someone have it, when do they not? What is knowledge and what is understanding?

???

For instance, there are a number of issues raised in *Excerpt from Theuth*. Principally, many of these involves questions such as the ethics of human enhancement, the nature of knowledge, the limits of copy-write, what should and should not be copy-written.

---

* E.g., knowledge transfer

???

Is it enough to merely be fed information and be capable of recalling that information? When does this no longer count as knowledge? For instance is knowledge based on the source? The ability of the source etc.

---

* The Existence and Nature of God

???


5. Does God exist? Why or why not? How do we know that God exist? Is this knowledge experiential, evident, propositional?

---

* Values

???
6. We will be asking questions about value? What constitutes the right values? The wrong ones? Should we value close relationships more than impartial ones?
7. What is love? An action? A feeling? A commitment? How ought we recognize it? Is it wrong to love one person if that means not loving another? Why?

---

* The nature of reality

???

8. Is the world real? A simulation? is love real?

* What exists? Realism and anti-realism

---

# The Course

--

## Some Specific objectives:

???

We will mostly be reading *Philosophy Through Science Fiction* edited by Helen De Cruz and Johan De Smedt. 

However, there is an open debate whether philosophy can be done rightfully through stories. 

This is primarily the reason why I thought that it would be interesting to begin an introductory class using a disputable method.

---

# Additional Readings

???

You will not get anything from our time together, I think, unless we also do philosophy the traditional way in addition. 

As such, each of our readings in PSF will be supplemented with what I am calling their formal counter parts. These will be formal philosophical queries by traditional authors, of the topics raised in the science fiction stories. 

--

## Office Hours

???

You will not need an appointment to come in during office hours, just stop by. Reasons for coming to office hours include clarifying lecture points, assignments, if you want to bounce ideas off me for an approach to an assignment, that is also an option.
   
---

# 3. Why?

???

3. Why is this important? One possible way to define philosophical dialogue, or the philosophical discipline, is to say that it is solely concerned with giving arguments and evaluating arguments. Why is this important? Because argument is primary point of human discourse. Further more, it is everywhere around us happening all the time. It is important to recognize when it is happening so that we may evaluate the arguments that are constantly thrown in our faces. As such, philosophy is not merely understanding how to have conversations traditionally conceived of as philosophical, e.g., the existence of God, problem of evil, what Aquinas said and didn't say, but we should also be able to evaluate arguments such as the moral justification of lockdowns, whether or not it is acceptable for media publications to display bias in their reporting? When is it permissible for private media platforms to silence political descent?

---

4. Some Examples

???

4. In one of our earlier readings, we will look at possible distinctions between persuasion and argument. In the *Phaedros*, colloquially known as *The art of argument*, Socrates attempts to instruct Phaedrus on why a speech he receives from another individual named Lysias is not a convincing one.

---

# Class Schedule

???

Hopefully the class schedule is fairly intuitive. This course is an 8 week course as opposed to a 16 week course. As such, the far left corner includes the week and broad topic for that week. The column after is obviously the date, and under topics are the more specific topics we will be covering that week. You can think of the more specific topics as questions we will be covering. The far right column includes the readings you will have read to prepare you for the assignments.