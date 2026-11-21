---
notion-id: 3488935b-cf8a-803e-a6f9-f78841e1fcf9
base: "[[Class Notes (1).base]]"
Tags: []
Column: 2026-04-20T07:20:00
---
# 27 Quantifier-variable notation  

The discussion in the last chapter suggests three desiderata for formal languages apt for exploring the logic of generality. We want to avoid the complicated multiplicity of ordinary-language ways of expressing general claims. We want to devise our notation so that the scope of a quantifying operation is always unambiguous. And we want to clearly fix what our quantifiers range over. This chapter explains how to design our QL languages to meet these requirements.  

27.1 Quantifier prefixes and ‘variables’ as pronouns 

---

**(a) First, how are we going to avoid scope ambiguities? **
    Well, as we saw in §26.3, we can usually keep things unambiguous even in ordinary language by rephrasing using quantifier prefixes like ‘everyone is such that’, ‘some senior Republican senators are such that’, ‘there is some gift such that’, ‘every perceptual experience is such that’, etc., where these are linked to later pronouns such as ‘they’ and ‘it’. For example, we can disambiguate ‘Every student admires a certain book’ by offering the alternative readings  
        (1) (Every student is such that)(there is a book such that) they admire it, 
        (2) (There is a book such that)(every student is such that) they admire it.  
            These paraphrases are unambiguous – 
                the order of the two quantifier prefixes in these sentences determines their relative scope, with the first one having wider scope (and so governing what follows it). 
                So we immediately have an attractive and quite natural model to emulate in designing languages for use in quantificational logic:  
                    In our formal QL languages, we will unambiguously render general propositions by using quantifier prefixes linked to later pronouns.  

---

**(b) How are we going to handle pronouns formally? **
    Note that there are different uses of ordinary-language pronouns. 
        There are, for example, 
            **demonstrative **uses – as when I point across the room and say ‘She is a great logician’ (I could have equivalently used a demonstrative and said** **
                **‘That woman is a great logician’. **
            For my use of the pronoun here to be in good order, I must successfully pick out a particular woman. 
            Contrast the claim **‘No woman is such that she is immortal’.** 
                In this case, ‘she’ plainly doesn’t **denote **a particular woman! Nor does it in ‘**Every woman is such that she is mortal’. **
        In these cases, the pronouns are 
            not doing straightforwardly **referential **work but rather link back to, are ‘bound’ to, **the previous quantifier prefix**. 
                Pronouns like this are classed as one kind of **anaphoric pronoun **(literally, they ‘carry back’). But we will call them simply **bound **pronouns. 
        So let’s sharpen our question: what shall our formal languages use as bound pronouns tied to quantifier prefixes?  

---

**(c) Suppose we want to unambiguously render the more natural reading of  **
    In examples (1) and (2) we could exploit the difference between the person-including ‘they’ and the impersonal ‘it’ to link them to the** personal and impersonal quantifier prefixes respectively**. But what can we do more generally? 
---
    One ordinary-language option is to use something like 
        (3) Everyone loves a certain someone,  
            by using quantifier prefixes linked to later pronouns. Our gender-neutral singular pronoun is ‘they’; but it plainly won’t do to write  
        (4) (Everyone is such that)(there is someone such that) they love them.  
            For that is again ambiguous. 
            Who is doing the loving? We need, therefore, some way to indicate which pronoun is bound to which quantifier prefix. 
---
        (5) (Everyone is such that)(there is someone such that) the former loves the latter.  
            But that’s not a very useful model to adopt – if only because it isn’t easy keeping track of what counts as ‘the former’ or ‘the latter’ as we manipulate propositions while working through an argument. 
            So the following is a neat alternative trick:  
                We will henceforth use single letters as additional pronouns: x, y, z, . . . .  
                We then explicitly tag our quantifier prefixes with these new pronouns – as in ‘(Everyone x is such that)’, 
                ‘(Someone y is such that)’ – in order to make it entirely clear which quantifier is bound to which later pronoun.  
            Hence instead of (5) we can write  
---
        (6) (Everyone x is such that)(there is someone y such that) x loves y.  
            Similarly, the other reading of (3) – as in ‘Everyone loves a certain someone, namely Kylie’ – gets unambiguously rendered as  
        (7) (There is someone y such that)(everyone x is such that) x loves y.  Compare and contrast  
        (8) (There is someone x such that)(everyone y is such that) x loves y.  which unambiguously says that someone (Jesus?) loves us all. 
            Of course, we have borrowed our new pronoun symbols from the mathematicians, following one use they make of so-called variables. 
            Consider, for example, the arithmetical truism  
---
        (9) For every number x, x + 1 = 1 + x.
        What does this say? The same as: ‘every number is such that it plus one equals one plus it’. 
            So we see that in this sort of case the mathematician’s ‘x’ is essentially doing the work of a pronoun like ‘it’. 
            And while using ‘x’s etc. as pronouns tied to more or less explicit quantifier prefixes may be most familiar from the maths classroom, there is nothing irredeemably mathematical about this usage.  

---

---

**(d) Quine wrote “Logic is an old subject, and since 1879 it has been a great one.” **
    Why that date? It is when the Begriffsschrift was published. And it is to Frege there that we owe the key** insight that **
        **we can make the scope of quantifiers unambiguously clear **by 
            **using a quantifier-variable notation where quantifier prefixes get linked to variables-as-pronouns.** 
    This will be our notation too.  

---

### 27.2 Unary vs binary quantifiers  

We have already said in §26.1 that we are going to build just two kinds of quantifiers into our QL languages, corresponding to ‘every/all’ and ‘some/there is’. But we also noted that the ordinary-language versions of these come in two forms, unary and binary. And this still applies when we use quantifier prefixes linked to variables. So compare these two:  
    (Everything x is such that) x is physical, 
    (Every philosopher x is such that) x is wise.  
        Or, generalizing, compare the schematic forms  
---
    (Everything x is such that) x is G, 
    (Every F, x, is such that) x is G.  
        The first quantifier construction takes one general term G, 
        the second takes two general terms F, G to form a sentence. 
---
    Again, we can call the first form of quantifier unary, the second binary. 
    We might also say the second form involves a restricted quantifier, as the role of the F term here is to restrict what the initial quantifier prefix ranges over. 
    What, then, is the relationship between the unary and binary forms of quantifier here? 
        A natural view might be that binary/restricted quantifiers are in fact the basic case. 
        The apparently unary ‘Everything is G’ is really a special case of ‘Every F is G’, where F is replaced by the colourless, all-inclusive, ‘thing’. 
---
    Similarly, for example, 
        ‘Somebody is G’ is a special case of ‘Some F is G’, where F is replaced by ‘body’ (meaning person). 
    However, it seems we can also go in the other direction, 
        and instead treat the unary versions of the ‘every’ and ‘some’ quantifiers as basic. 
---
    Thus consider  
        (1) Every elephant has a trunk,  or the regimented version in quantifier-variable form  
        (2) (Every elephant x is such that) x has a trunk.  These look to be equivalent to the quantified conditional  
        (3) (Everything x is such that)(if x is an elephant, then x has a trunk),  where now the quantifier is unary. 
---
    Likewise, consider the generalization
        (4) Some elephant trampled the grass,  or the regimented version  
        (5) (Some elephant x is such that) x trampled the grass.  These look to be equivalent to the quantified conjunction  
        (6) (Something x is such that)(x is an elephant and x trampled the grass).  
---
    We will need to say more about these claimed equivalences. But for the moment, let’s assume that we can – without mangling content too much – 
		- We can exchange binary ‘every’ and ‘some’ for unary quantifiers plus connectives. 
			- So which way shall we jump? 
			- Do we develop our formal quantifier-variable treatment of ‘every/some’ general propositions in a way that treats the binary versions as basic? 
			- Or do we treat the unary quantifiers as basic? 
			- Taking the second line means being less faithful to the surface forms of natural language. 
			- However, it does keep our formal apparatus particularly simple, and this is the line adopted by most logicians ever since Frege. 
		- So:  We will only build unary quantifiers into our QL languages – just formal versions of ‘(everything x is such that)’ and ‘(something y is such that)’, etc. 
		- We then express restricted quantifications by using conditionals and conjunctions inside the scope of these unary quantifiers.  
			- Note though that treating unary quantifiers as basic is an independent move, over and above the fundamental decision to adopt a quantifier-variable notation.  
---
    ### 27.3 Domains  
    **(a) We have decided then that our formal QL languages will only have built-in ‘every’ and ‘some’ quantifiers in their unary forms. **
        What do these quantifiers range over? 
            As we noted in the last chapter, ordinary discourse often leaves it up to context and interpretative charity to settle what counts as ‘everything’ or ‘everyone’. 
            And the universe of discourse is often allowed to shift as conversation progresses. 
            By contrast, we will want everything in our formal languages to be explicit and stable, with nothing left to guesswork.
        The standard approach is to take the quantifiers in a particular QL language to all run over the same unshifting domain. 
        And a further standard stipulation is that domains always contain at least one object. 
        Hence  To interpret a QL language, we fix at the outset, once and for all, one common non-empty domain for its quantifiers. 
            We do this by giving a description D of the domain in the glossary for the language (where at least one thing satisfies D).  
            For convenience we can think of this domain, the objects the quantifiers of a language run over, as forming a set: but don’t over-interpret the lightweight set talk here (see §25.5). 
---
    **(b) The one-common-domain convention buys us clarity and simplicity, **
        though at the cost of some artificiality, 
            including some departure from mathematical practice. 
        For mathematicians using semi-formal language often use different quantifiers with different domains, associated with different sorts of variables. 
            For example, an arithmetician might typically use lower case variables for numbers, and upper case variables for sets of numbers; an algebraist might typically use letters from early in the alphabet for scalars, and letters from the end of the alphabet for vectors. 
            Simultaneously using quantifiers tied to distinct sorts of variables to range over distinct domains is very natural. 
            However – and to repeat, this is the logician’s initial convention – our QL languages will have just one sort of variable ranging over one inclusive domain. 
            Hence, when we want to quantify over different sorts of things in a single QL language, we will again have to explicitly restrict our all-inclusive quantifiers using connectives.  
---
    **(c) Domains can be small – comprising just, say, the students signed up to the logic class. **
        However, as we said, we will ban completely empty domains. In other words, we assume that a QL language isn’t talking about nothing at all (but see Chapter 34). Domains can also be very large – as when our quantifiers range over everyone now living, or over all elementary particles or all positive integers. The quantifiers of standard set theories range over a wildly infinitary universe of sets (fully caffeinated sets, treated as objects in their own right; compare §25.5). Can we allow a language’s universe of discourse to be absolutely everything every object there is, of any sort? Yes, if that idea makes sense. However, that’s a big ‘if’ ! (To get the flavour of one reason why there might be a problem here, consider this thought, plausible if we take sets seriously. Given any universe of objects, however many there are, there is always another object, namely the set of all the objects collected together so far. So any proposed totality of objects is always further extensible by another object, and so we can never determinately pin down ‘all objects’ in a stable way. Or so one story goes. But we can’t tangle with this troublesome line of argument here.)  
        ### 27.4 Quantifier symbols  
        (a) We now take one more step, moving from stilted-English-using-variables as-pronouns towards something even closer to a standard logical QL language. 
            We introduce the quantifier symbols ∀ and ∃, as follows:  
            Instead of writing ‘(everything/everyone x is such that)’, we will simply use the very terse notation ‘(∀x)’, with the rotated ‘A’ reminding us that this can also informally be read as ‘for all x’.  
            And instead of ‘(something/someone y is such that)’ or ‘(there is something/someone y such that)’ we will use ‘(∃y)’. 
                Here, the rotated ‘E’ reminds us that this can also informally be read as ‘there exists y such that’. 
---
            Assume that we are working in a context where the quantifiers range over, say, all people. Then our three examples from §27.1, there numbered  
                (6) (Everyone x is such that)(there is someone y such that) x loves y 
                (7) (There is someone y such that)(everyone x is such that) x loves y (8) (There is someone x such that)(everyone y is such that) x loves y,  can now be very neatly abbreviated in turn as follows:  
                (6′) (∀x)(∃y) x loves y 
                (7′) (∃y)(∀x) x loves y 
                (8′) (∃x)(∀y) x loves y.  
                    Note that you obviously can’t infer (7′) from (6′). 
                    That would indeed what we called a quantifier shift fallacy in §5.3 – and now it is clear why the label is apt!  
---
            (b) Keeping the same universe of discourse, now consider how we can express restricted generalizations using our new notation. 
                Take for example  
                    (1) Everyone in the class has arrived.  Then, following the suggestion made in §27.2, we can render this as  
                    (2) (Everyone x is such that)(if x is in the class, then x has arrived),  which now becomes  
                    (3) (∀x)(if x is in the class, then x has arrived),  
                        here ‘(∀x)’ still ranges over all people. 
                        Taking another step of symbolization by borrowing the symbol for the material conditional, 
                        this is arguably equivalent to 
                    (4) (∀x)(x is in the class → x has arrived).  
                        The next sentence, however, is potentially ambiguous  
                    (5) Everyone in the class has not arrived.  
                        We can, in some contexts, understand this with ‘not’ having wide scope, i.e. we can understand (5) as conveying the message unambiguously expressed by  
                    (6) ¬(∀x)(x is in the class → x has arrived).  
                        But in other contexts, we will understand (5) as meaning  
---
                    (7) (∀x)(x is in the class → ¬ x has arrived). 
                        In (6) and (7) the relative scopes of the negation and quantifier are now transparently clear. Likewise,  
                    (8) Some footballer deserves great riches,  which we can render using a prefixed unary quantifier as  
                    (9) (Someone x is such that)(x is a footballer and x deserves great riches),  
                        can now be partially symbolized as  
                    (10) (∃x)(x is a footballer ∧ x deserves great riches).  
                        And what about the following sentence, which taken out of context is ambiguous?  254
Unnamed objects  
---
                    (11) Some footballer does not deserve great riches.  We can unambiguously render the two possible readings like this:  
                    (12) (∃x)(x is a footballer ∧ ¬ x deserves great riches),  
                    (13) ¬(∃x)(x is a footballer ∧ x deserves great riches).  
---
            (c) The sort of unholy mixture of English and logical symbolism in our examples in this section is often called Loglish.
                It is easily understood, given a grasp of the connectives and a grasp of the new quantifier symbols in their abbreviatory role.
                As we will see in the coming chapters, going via varieties of Loglish as a halfway house greatly eases the transition between ordinary language and fully formalized QL languages.  
---
        ### 27.5 Unnamed objects  
        Now a simple point, but one that we should stress: not everything in a domain need have a fixed proper name! This has two important implications.  
        (a) Let’s use (∀v)A(v) informally to represent a Loglish sentence starting with the quantifier prefix (∀v), where A(v) is an expression with one or more occurrences of the variable v. Let A(n) be the result of replacing all the occurrences of v in A(v) with the proper name n. Then we will say that A(n) is an instance of the quantified sentence (∀v)A(v). For example ‘(Ludwig is in the class → Ludwig has arrived)’ might be an instance of ‘(∀x)(x is in the class → x has arrived)’. Now, what holds of everything in a domain holds for any particular named thing (we assume names in use do refer to things in the current domain). So from (∀v)A(v) we can infer any corresponding particular instance A(n). But the reverse is false. It could be that for any available name n in the language, A(n) is true but (∀v)A(v) is still false because some unnamed object fails to satisfy the condition expressed by A. For example, it may be that – as the Psalmist sings – the Lord “telleth the number of the stars; he calleth them all by their names”. But we certainly don’t have names for all the stars. And if we say ‘All stars contain iron’ (for example) – i.e. ‘(∀x) x contains iron’, where the quantifier ranges over stars – then our claim wouldn’t be made true just by the fact that the named stars all happen to contain iron.  (b) Similarly, let (∃v)A(v) informally represent a Loglish sentence starting with the quantifier prefix (∃v). And we will say that A(n) is an instance of the quantified sentence (∃v)A(v) too. Now, since what holds of a particular named thing holds of something in the domain (keeping the assumption that names currently in use do refer to things in the current domain), from any instance A(n), we can infer (∃v)A(v). Again the reverse is false. It could be that (∃v)A(v) is true, even if each particular instance A(n) is false (where n is a name already in our language). Consider, for example, the true claim ‘(∃x) x is a nameless star’ !

        ### 27.6 A variant notation 
        **(a) The quantified sentence  **
            (1) (∀x)(∃y) x loves y  corresponds to one reading of ‘Everyone loves a certain someone’. It is now important to emphasize that the particular choice of variables here is quite arbitrary. The role of the variables is simply to tie the quantifier prefixes to the places either side of ‘loves’. To express the same message we could therefore equally well use  
            (2) (∀y)(∃z) y loves z, or (∀y)(∃x) y loves x, or (∀z)(∃y) z loves y, or . . .  Here is a variant notation which ties quantifier prefixes to places graphically. Take the predicate ‘ ̈ loves ≠’. Then instead of (1) or (2) we could write simply  
            (3) ∀ ∃  ̈ loves ≠  And similarly, instead of using  
            (4) (∃y)(∀x) x loves y  to express the other reading of ‘Everyone loves a certain someone’, we could write  
            (5) ∃ ∀  ̈ loves ≠  For another example, consider again  
            (6) (∀x)(if x is in the class, then x has arrived).  We can think of this as involving the complex predicate ‘if  ̈ is in the class, then  ̈ has arrived’ (using a repeated counter to indicate that the gaps are to be filled in the same way – see §25.2(d)). And we could alternatively express the message that everyone satisfies this predicate by writing  
            (7) ∀ (if  ̈ is in the class then  ̈ has arrived)  Of course, this braces-and-gaps graphical notation is difficult to typeset, and it gets difficult to read when more than one prefixed quantifier symbol gets tied to multiple later gaps. No wonder, then, that we will stick to the now conventional quantifier/variable notation. Still, note that the use of a variable to link a quantifier to some place(s) in an expression is really just a variant on our graphical notation. For example,  (1) (∀x)(∃y) x loves y,  (3) ∀ ∃  ̈ loves ≠  are to be explained as ultimately meaning just the same. This re-emphasizes that the particular choice of variable-letters is irrelevant, so long as we keep fixed the pattern of ties from quantifier prefixes to places-occupied-by-variables.  
        **(b) The graphical notation also vividly brings out another important point. In the graphical notation, the quantifier symbol ∀ by itself doesn’t yet implement**
