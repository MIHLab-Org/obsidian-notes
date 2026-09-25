---
notion-id: 3358935b-cf8a-81de-a569-e7b19bb9c985
base: "[[Class Notes (1).base]]"
Tags:
  - lecture
Column: 2026-04-01T08:17:00
---
“Here we are, of course, deploying a reductio ad absurdum (RAA) inference of the kind we first met back in §4.5. In other words, we are making a temporary assumption or supposition S for the sake of argument.” (Smith, 2021, p. 177)

![[hyp-derivation-and.png]]

<!-- Column 1 -->
“So when we make a new supposition or additional temporary assumption for the sake of argument, we mark this by indenting the line of argument one column to the right. We thereby start a derivation-within-a-derivation, i.e. a subproof, as at (2).” (Smith, 2021, p. 177)

<!-- Column 2 -->
“We have decorated the proof by using another vertical line to mark the new column for our indented subproof. This line starts against our new supposition, and continues for as long as the supposition remains in play.” (Smith, 2021, p. 178)

<!-- Column 3 -->
“In our proof, we reach a blatant contradiction, with a pair of wffs of the form α and ¬α both in play. So we have reached an absurdity. We highlight this by adding ⊥ to our derivation.” (Smith, 2021, p. 178)

<!-- Column 4 -->
“D Popper is from Vienna. It isn’t the case that both Popper and Quine are Viennese. The same goes for Popper and Russell: they aren’t both from Vienna. Hence both Quine and Russell are not Viennese.” (Smith, 2021, p. 178)

---

D′

D Popper is from Vienna. It isn’t the case that both Popper and Quine are Viennese. The same goes for Popper and Russell: they aren’t both from Vienna. Hence both Quine and Russell are not Viennese.  

### P, ¬(P ∧ Q), ¬(P ∧ R) 6 (¬Q ∧ ¬R).

“(1) P (Prem)

---

(1) P (Prem)

(2) ¬(P ∧ Q) (Prem)

---

(1) P (Prem)

(2) ¬(P ∧ Q) (Prem)

(3) ¬(P ∧ R) (Prem)

---

(1) P (Prem)

(2) ¬(P ∧ Q) (Prem)

(3) ¬(P ∧ R) (Prem)

(4)          |      Q (Supp) 

---

(1)          |      P (Prem)

(2)          |      ¬(P ∧ Q) (Prem)

(3)          |      ¬(P ∧ R) (Prem)

(4)           |     Q (Supp) 

(5) (P ∧ Q) (∧I 1, 4) 

---

(1) P (Prem)

(2) ¬(P ∧ Q) (Prem)

(3) ¬(P ∧ R) (Prem)

(4)               |          Q (Supp) 

(5)                       (P ∧ Q) (∧I 1, 4) 

(6)                        ⊥ (Abs 5, 2) 

---

(1)                P (Prem)

(2)               ¬(P ∧ Q) (Prem)

(3)               ¬(P ∧ R) (Prem)

(4)                          Q (Supp) 

(5) (                        P ∧ Q) (∧I 1, 4) 

(6)                         ⊥ (Abs 5, 2) 

(7)               ¬Q (RAA 4–6) 

---

(1)                P (Prem)

(2)               ¬(P ∧ Q) (Prem)

(3)               ¬(P ∧ R) (Prem)

(4)                          Q (Supp) 

(5)                         (P ∧ Q) (∧I 1, 4) 

(6)                         ⊥ (Abs 5, 2) 

(7)               ¬Q (RAA 4–6) 

(8)                R (Supp)

---

(1)                P (Prem)

(2)               ¬(P ∧ Q) (Prem)

(3)               ¬(P ∧ R) (Prem)

(4)                          Q (Supp) 

(5)                         (P ∧ Q) (∧I 1, 4) 

(6)                         ⊥ (Abs 5, 2) 

(7)               ¬Q (RAA 4–6) 

(8)                          R (Supp)

(9)                              (P ∧ R) (∧I 1, 8)

---

(1)                P (Prem)

(2)               ¬(P ∧ Q) (Prem)

(3)               ¬(P ∧ R) (Prem)

(4)                          Q (Supp) 

(5)                         (P ∧ Q) (∧I 1, 4) 

(6)                         ⊥ (Abs 5, 2) 

(7)               ¬Q (RAA 4–6) 

(8)                          R (Supp)

(9)                           (P ∧ R) (∧I 1, 8)

(10)                        ⊥ (Abs 9, 3) 

---

(1)                P (Prem)

(2)               ¬(P ∧ Q) (Prem)

(3)               ¬(P ∧ R) (Prem)

(4)                          Q (Supp) 

(5)                         (P ∧ Q) (∧I 1, 4) 

(6)                         ⊥ (Abs 5, 2) 

(7)               ¬Q (RAA 4–6) 

(8)                          R (Supp)

(9)                           (P ∧ R) (∧I 1, 8)

(10)                        ⊥ (Abs 9, 3) 

(11)              ¬R (RAA 8–10)

---

(1)                P (Prem)

(2)               ¬(P ∧ Q) (Prem)

(3)               ¬(P ∧ R) (Prem)

(4)                          Q (Supp) 

(5)                         (P ∧ Q) (∧I 1, 4) 

(6)                         ⊥ (Abs 5, 2) 

(7)               ¬Q (RAA 4–6) 

(8)                          R (Supp)

(9)                           (P ∧ R) (∧I 1, 8)

(10)                        ⊥ (Abs 9, 3) 

(11)              ¬R (RAA 8–10)

(12) (¬Q ∧ ¬R) (∧I 7, 11)

(Smith, 2021, p. 179)

---

- **Such sequences, as exemplified above, are called proofs. **
- **Modus ponens is not the only pattern used in proofs. **
- **We shall construct proofs in propositional logic by the so-called "natural deduction" method, which utilizes ten distinct patterns of reasoning, or rules of inference ( or inference rules), of which modus ponens is one.**

---

**sound**—that is, that if we start with assumptions true on some valuation, we shall always, no matter how many times we apply these rules, arrive at conclusions that are likewise true on that valuation.

**complete**, i.e., capable of providing a proof for every valid sequent of propositional logic.

---

[https://redapemusic35.github.io/course.phil.intro-mw.github.io/2026_intro/weeks/week07/slides.html#/6/3](https://redapemusic35.github.io/course.phil.intro-mw.github.io/2026_intro/weeks/week07/slides.html#/6/3)