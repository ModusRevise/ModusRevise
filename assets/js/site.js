
    // ── FLASHCARD DATA ──
    const flashcardData = {
      characters: [
        { q: "Who is Macbeth?", a: "The tragic protagonist of the play and a brave Scottish warrior whose ambition leads to his downfall." },
        { q: "What causes Macbeth to murder Duncan?", a: "The witches' prophecies, Lady Macbeth's persuasion and his own ambition." },
        { q: "How does Macbeth change throughout the play?", a: "He transforms from a loyal hero into a ruthless tyrant." },
        { q: "How does Macbeth die?", a: "He is killed by Macduff in the final act." },
        { q: "Who is Lady Macbeth?", a: "Macbeth's ambitious wife who encourages him to murder Duncan." },
        { q: "How does Lady Macbeth challenge gender expectations?", a: "She rejects traditional female qualities and embraces ruthlessness and power." },
        { q: "What happens to Lady Macbeth by the end of the play?", a: "She is consumed by guilt, suffers mental breakdowns and dies." },
        { q: "What theme is Lady Macbeth most associated with?", a: "Ambition and guilt." },
        { q: "Who is King Duncan?", a: "The King of Scotland and the victim of Macbeth's murder." },
        { q: "How is Duncan presented?", a: "As a kind, generous and rightful king." },
        { q: "Why is Duncan important to Jacobean audiences?", a: "He represents the Divine Right of Kings." },
        { q: "Who is Banquo?", a: "Macbeth's friend, fellow soldier and a noble thane." },
        { q: "How does Banquo react to the witches?", a: "He is curious but does not act on their prophecies." },
        { q: "Why is Banquo important?", a: "He acts as Macbeth's moral opposite and moral compass." },
        { q: "What happens to Banquo?", a: "Macbeth hires murderers to kill him." },
        { q: "Who is Fleance?", a: "Banquo's son." },
        { q: "Why is Fleance significant?", a: "He escapes Macbeth's assassins and may continue Banquo's royal line." },
        { q: "Who is Malcolm?", a: "King Duncan's eldest son and rightful heir to the throne." },
        { q: "What does Malcolm do after Duncan's murder?", a: "He flees to England for safety." },
        { q: "How does Malcolm help restore order?", a: "He returns with an army to defeat Macbeth and become king." },
        { q: "Who is Donalbain?", a: "Duncan's younger son." },
        { q: "What does Donalbain do after Duncan's murder?", a: "He flees Scotland because he fears for his life." },
        { q: "Who are Ross, Angus and Lennox?", a: "Scottish thanes who comment on events throughout the play." },
        { q: "Why are Ross, Angus and Lennox important?", a: "They show how Macbeth's actions affect Scotland as a whole." },
        { q: "Who are the Weird Sisters?", a: "The three witches who make prophecies about Macbeth's future." },
        { q: "What do the witches represent?", a: "The supernatural, temptation and evil." },
        { q: "How do the witches influence Macbeth?", a: "Their prophecies encourage his ambition and help trigger his downfall." },
        { q: "What do the witches predict about Macbeth?", a: "That he will become Thane of Cawdor and then King of Scotland." },
        { q: "Who is Macduff?", a: "The Thane of Fife and Macbeth's main opponent." },
        { q: "Why does Macduff distrust Macbeth?", a: "He suspects Macbeth was responsible for Duncan's murder." },
        { q: "What motivates Macduff to seek revenge?", a: "Macbeth orders the murder of his wife and children." },
        { q: "What role does Macduff play in the ending?", a: "He kills Macbeth and helps restore Scotland." },
        { q: "Who is Lady Macduff?", a: "Macduff's wife." },
        { q: "What happens to Lady Macduff?", a: "She and her son are murdered by Macbeth's assassins." },
        { q: "Why is Lady Macduff's death important?", a: "It highlights Macbeth's cruelty and tyranny." },
        { q: "Which character is the tragic hero?", a: "Macbeth." },
        { q: "Which character is the moral compass of the play?", a: "Banquo." },
        { q: "Which character represents the ideal king?", a: "Duncan." },
        { q: "Which character restores order at the end of the play?", a: "Malcolm." },
        { q: "Which character defeats Macbeth?", a: "Macduff." },
      ],
      themes: [
        { q: "How is ambition presented in Macbeth?", a: "Shakespeare presents excessive ambition as a dangerous flaw that leads to Macbeth's downfall." },
        { q: "Which character acts as a foil to Macbeth's ambition?", a: "Banquo, who resists temptation and remains loyal." },
        { q: "What warning does Shakespeare give about power?", a: "Power can corrupt those who pursue it selfishly." },
        { q: "How is loyalty presented in Macbeth?", a: "Loyalty is shown as a noble and admirable quality." },
        { q: "Which characters represent loyalty?", a: "Banquo and Macduff." },
        { q: "How does Macbeth betray loyalty?", a: "By murdering Duncan and betraying his king, country and friends." },
        { q: "How is the struggle between good and evil shown in Macbeth?", a: "Macbeth battles with his conscience and knows his actions are wrong." },
        { q: "What does Shakespeare suggest about evil?", a: "Evil actions lead to suffering, guilt and destruction." },
        { q: "What role does fate play in Macbeth?", a: "The witches predict events, but Macbeth's own choices cause the tragedy." },
        { q: "What does Shakespeare suggest about fate?", a: "People still have responsibility for their actions despite predictions." },
        { q: "How is Duncan presented as a king?", a: "As wise, fair, generous and legitimate." },
        { q: "How is Macbeth presented as a king?", a: "As a tyrant whose rule brings fear, violence and disorder." },
        { q: "What message about kingship does Shakespeare convey?", a: "A good ruler should be just, loyal and act for the good of the nation." },
        { q: "How is the supernatural presented?", a: "As dangerous, deceptive and untrustworthy." },
        { q: "What role do the witches play?", a: "They tempt Macbeth and encourage his destructive ambition." },
        { q: "What does Macbeth call the witches at the end of the play?", a: "\"Juggling fiends.\"" },
        { q: "How is masculinity explored in Macbeth?", a: "Shakespeare questions traditional ideas about what it means to be a man." },
        { q: "How does Lady Macbeth challenge masculinity?", a: "She suggests masculinity is linked to violence, courage and determination." },
        { q: "Which characters present positive masculinity?", a: "Banquo and Macduff, who combine strength with loyalty and compassion." },
        { q: "What is the theme of appearance versus reality?", a: "Things are often not what they seem." },
        { q: "How does Lady Macbeth use appearance versus reality?", a: "She tells Macbeth to appear loyal while secretly planning Duncan's murder." },
        { q: "What does the play suggest about deception?", a: "Deception creates mistrust, confusion and chaos." },
        { q: "How is guilt presented in Macbeth?", a: "As a powerful force that destroys peace of mind." },
        { q: "How does guilt affect Macbeth?", a: "He becomes paranoid, fearful and increasingly violent." },
        { q: "How does guilt affect Lady Macbeth?", a: "It drives her into madness and contributes to her death." },
        { q: "What overall message does Shakespeare give about guilt?", a: "Wrongdoing cannot be escaped because guilt eventually punishes the guilty." },
        { q: "Which theme is most closely linked to Macbeth's downfall?", a: "Ambition." },
        { q: "Which theme links to the witches?", a: "The supernatural." },
        { q: "Which theme links to Duncan and Macbeth as rulers?", a: "Kingship." },
        { q: "Which theme links to Banquo and Macduff?", a: "Loyalty." },
        { q: "Which theme links to Lady Macbeth's sleepwalking?", a: "Guilt." },
        { q: "Which theme links to \"Look like the innocent flower, but be the serpent under't\"?", a: "Appearance and reality." },
      ],
      context: [
        { q: "What period was Macbeth written in?", a: "The Jacobean era, during the reign of King James I (1603–1625)." },
        { q: "Who succeeded Queen Elizabeth I in 1603?", a: "James VI of Scotland, who became James I of England." },
        { q: "What was the Great Chain of Being?", a: "A belief that God organised all living things into a strict hierarchy. Disturbing this order would cause chaos." },
        { q: "How does Macbeth link to the Great Chain of Being?", a: "Macbeth disrupts the natural order by murdering King Duncan, causing disorder throughout Scotland." },
        { q: "What was the Divine Right of Kings?", a: "The belief that kings were chosen by God and ruled with divine authority." },
        { q: "Why is Macbeth's murder of Duncan especially serious?", a: "It is both regicide (killing a king) and a crime against God." },
        { q: "What were Jacobean attitudes towards witchcraft?", a: "Many people believed witches were real and dangerous." },
        { q: "Why was King James I interested in witchcraft?", a: "He believed in witches and wrote a book called Daemonologie in 1597." },
        { q: "Why did Shakespeare include witches in Macbeth?", a: "They appealed to King James I's interest in the supernatural and reflected contemporary beliefs." },
        { q: "What was the Gunpowder Plot?", a: "A failed Catholic conspiracy to blow up Parliament and kill James I in 1605." },
        { q: "How does Macbeth reflect fears after the Gunpowder Plot?", a: "Through themes of treason, betrayal, assassination and political instability." },
        { q: "When was Macbeth written?", a: "Around 1606, shortly after the Gunpowder Plot." },
        { q: "Who was Banquo in relation to King James I?", a: "James I believed Banquo was one of his ancestors, so Shakespeare portrays him positively." },
        { q: "What is a tragic hero?", a: "A noble character whose downfall is caused by a tragic flaw." },
        { q: "What is Macbeth's tragic flaw (hamartia)?", a: "His ambition." },
        { q: "What factors contribute to Macbeth's downfall?", a: "Ambition, supernatural influence and poor judgement." },
        { q: "What type of play is Macbeth?", a: "A Shakespearean tragedy influenced by Greek tragedy." },
        { q: "What acting company did Shakespeare belong to?", a: "The Lord Chamberlain's Men, later renamed The King's Men." },
        { q: "Why was Shakespeare's company renamed The King's Men?", a: "Because King James I became their patron." },
        { q: "What is a patron?", a: "A wealthy supporter who helps artists financially." },
        { q: "What was the Globe Theatre?", a: "Shakespeare's theatre, built in 1599, where many of his plays were performed." },
        { q: "Name two key contextual themes in Macbeth.", a: "Witchcraft and regicide." },
        { q: "Name three important context points examiners expect students to know for Macbeth.", a: "The Divine Right of Kings, the Great Chain of Being, and the Gunpowder Plot." },
        { q: "What was the Jacobean era?", a: "The period of King James I's reign (1603–1625), named after the Latin for James." },
      ],
      terms: [
        { q: "What is iambic pentameter?", a: "A line of ten syllables with five pairs of unstressed and stressed syllables." },
        { q: "Which characters usually speak in iambic pentameter?", a: "Noble and high-status characters." },
        { q: "Why does Shakespeare use iambic pentameter?", a: "To create rhythm, emphasis and natural-sounding speech." },
        { q: "What can short exchanges of iambic pentameter reveal?", a: "Tension, panic or emotional intensity." },
        { q: "What is trochaic tetrameter?", a: "A rhythm of four stressed syllables followed by unstressed syllables." },
        { q: "Which characters often speak in trochaic tetrameter?", a: "The witches." },
        { q: "Why does Shakespeare use trochaic tetrameter for the witches?", a: "To make them sound unnatural, unsettling and supernatural." },
        { q: "What is a paradox?", a: "A statement containing two opposite ideas that reveals a truth." },
        { q: "What is the most famous paradox in Macbeth?", a: "\"Fair is foul, and foul is fair.\"" },
        { q: "What does the paradox \"Fair is foul, and foul is fair\" suggest?", a: "Appearance and reality are often different." },
        { q: "What is equivocation?", a: "Language that has more than one meaning and can mislead people." },
        { q: "Which characters frequently use equivocation?", a: "Macbeth and Lady Macbeth." },
        { q: "Why is equivocation important in Macbeth?", a: "It highlights deception, dishonesty and uncertainty." },
        { q: "What is pathetic fallacy?", a: "When weather reflects emotions or events in a text." },
        { q: "How does Shakespeare use pathetic fallacy in Macbeth?", a: "Storms, thunder and darkness often accompany violence and disorder." },
        { q: "What do storms often symbolise in Macbeth?", a: "Chaos and disruption of the natural order." },
        { q: "What is imagery?", a: "Descriptive language that creates pictures in the reader's mind." },
        { q: "What is symbolism?", a: "When an object, image or action represents a deeper idea." },
        { q: "What does blood symbolise in Macbeth?", a: "Guilt and violence." },
        { q: "What does a dagger symbolise in Macbeth?", a: "Betrayal and murder." },
        { q: "What do swords symbolise in Macbeth?", a: "Honour and bravery." },
        { q: "What do birds often symbolise in Macbeth?", a: "Omens and warnings." },
        { q: "What does weather symbolise in Macbeth?", a: "Disorder and unrest in Scotland." },
        { q: "What do dead children symbolise in Macbeth?", a: "Concerns about innocence, inheritance and the future." },
        { q: "What is hyperbole?", a: "Deliberate exaggeration used for dramatic effect." },
        { q: "Why does Shakespeare use hyperbole after Duncan's murder?", a: "To emphasise Macbeth's horror and emotional turmoil." },
        { q: "What is foreshadowing?", a: "A hint or warning about future events." },
        { q: "How do the witches use foreshadowing?", a: "Their prophecies hint at future events and Macbeth's downfall." },
        { q: "How does Lady Macbeth's sleepwalking foreshadow events?", a: "It hints at the destructive effects of guilt." },
        { q: "What is dramatic irony?", a: "When the audience knows something that characters do not." },
        { q: "Why does Shakespeare use dramatic irony?", a: "To build tension and engage the audience." },
        { q: "Give an example of dramatic irony in Macbeth.", a: "The audience knows Macbeth is guilty while other characters trust him." },
        { q: "What is a soliloquy?", a: "A speech in which a character speaks their thoughts aloud when alone." },
        { q: "Why are soliloquies important in Macbeth?", a: "They reveal Macbeth's inner thoughts and conflicts." },
        { q: "What do Macbeth's soliloquies often reveal?", a: "His struggle between ambition and morality." },
        { q: "Which theme is most closely linked to paradox?", a: "Appearance versus reality." },
        { q: "Which technique is most closely linked to the witches?", a: "Trochaic tetrameter." },
        { q: "Which technique helps the audience understand Macbeth's thoughts?", a: "Soliloquy." },
        { q: "Which technique uses weather to reflect events?", a: "Pathetic fallacy." },
        { q: "Which technique gives clues about future events?", a: "Foreshadowing." },
      ],
    };

    flashcardData.quotes = [
      { q: "Complete the quote: \"That is a step / On which I must fall down, or else ________\"", a: "o'erleap" },
      { q: "Complete the quote: \"Stars, hide your fires; / Let not light see my black and deep ________\"", a: "desires" },
      { q: "Complete the quote: \"I have no spur / To prick the sides of my intent, but only / Vaulting ________\"", a: "ambition" },
      { q: "Complete the quote: \"There's no art / To find the mind's construction in the ________\"", a: "face" },
      { q: "Complete the quote: \"False face must hide what the false heart doth ________\"", a: "know" },
      { q: "Complete the quote: \"There's daggers in men's ________\"", a: "smiles" },
      { q: "Complete the quote: \"This supernatural soliciting / Cannot be ill; cannot be ________\"", a: "good" },
      { q: "Complete the quote: \"So foul and fair a ________ I have not seen\"", a: "day" },
      { q: "Complete the quote: \"Bloody instructions, which being taught, return / To plague th'________\"", a: "inventor" },
      { q: "Complete the quote: \"For brave Macbeth (well he deserves that ________)\"", a: "name" },
      { q: "Complete the quote: \"If chance will have me king, why, chance may crown me, / Without my ________\"", a: "stir" },
      { q: "Complete the quote: \"Fear not, Macbeth, no man that's born of ________\"", a: "woman" },
      { q: "Complete the quote: \"His silver skin laced with his golden ________\"", a: "blood" },
      { q: "Complete the quote: \"In his royalty of nature reigns that / Which would be ________\"", a: "feared" },
      { q: "Complete the quote: \"Hang loose about him, like a giant's robe / Upon a dwarfish ________\"", a: "thief" },
      { q: "Complete the quote: \"Fair is foul and foul is fair / Hover through the fog and filthy ________\"", a: "air" },
      { q: "Complete the quote: \"The instruments of darkness tell us truths — to betray's in deepest ________\"", a: "consequence" },
      { q: "Complete the quote: \"Double, double, toil and trouble, / Fire burn and cauldron ________\"", a: "bubble" },
      { q: "Complete the quote: \"Brave Macbeth — well he deserves that ________\"", a: "name" },
      { q: "Complete the quote: \"For valiant cousin, worthy ________\"", a: "gentleman" },
      { q: "Complete the quote: \"With his brandished steel, / Which smoked with bloody ________\"", a: "execution" },
      { q: "Complete the quote: \"When you durst do it, then you were a ________\"", a: "man" },
      { q: "Complete the quote: \"Unsex me here. Take my milk for ________\"", a: "gall" },
      { q: "Complete the quote: \"I dare do all that may become a man; / Who dares do more is ________\"", a: "none" },
      { q: "Complete the quote: \"But I must also feel it as a ________\"", a: "man" },
      { q: "Complete the quote: \"Look like the innocent flower / But be the ________ under't\"", a: "serpent" },
      { q: "Complete the quote: \"Will all great Neptune's ocean wash this blood / Clean from my ________\"", a: "hand" },
      { q: "Complete the quote: \"Out, damned ________! out, I say!\"", a: "spot" },
      { q: "Complete the quote: \"Will these hands ne'er be ________?\"", a: "clean" },
      { q: "Complete the quote: \"Fair is ________ and foul is fair\"", a: "foul" },
      { q: "Complete the quote: \"There's no art / To find the mind's construction in the ________\"", a: "face" },
      { q: "Complete the quote: \"False face must hide what the false ________ doth know\"", a: "heart" },
    ];

    flashcardData.all = [
      ...flashcardData.context,
      ...flashcardData.characters,
      ...flashcardData.themes,
      ...flashcardData.terms,
      ...flashcardData.quotes,
    ];

    let currentDeck = [...flashcardData.all];
    let currentIndex = 0;
    let isFlipped = false;

    function loadCards(category, btn) {
      document.querySelectorAll('.fc-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDeck = [...flashcardData[category]];
      currentIndex = 0;
      isFlipped = false;
      renderCard();
    }

    function renderCard() {
      const card = currentDeck[currentIndex];
      document.getElementById('fc-front').textContent = card.q;
      document.getElementById('fc-back').textContent = card.a;
      document.getElementById('fc-counter').textContent = `${currentIndex + 1} / ${currentDeck.length}`;
      const inner = document.getElementById('fc-inner');
      inner.classList.remove('flipped');
      isFlipped = false;
      document.getElementById('fc-hint').style.display = 'block';
    }

    function flipCard() {
      const inner = document.getElementById('fc-inner');
      isFlipped = !isFlipped;
      inner.classList.toggle('flipped', isFlipped);
      document.getElementById('fc-hint').style.display = isFlipped ? 'none' : 'block';
    }

    function nextCard() {
      currentIndex = (currentIndex + 1) % currentDeck.length;
      renderCard();
    }

    function prevCard() {
      currentIndex = (currentIndex - 1 + currentDeck.length) % currentDeck.length;
      renderCard();
    }

    function shuffleCards() {
      for (let i = currentDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentDeck[i], currentDeck[j]] = [currentDeck[j], currentDeck[i]];
      }
      currentIndex = 0;
      renderCard();
    }

    // Init flashcards when section first shown
    const origShowSection = window.showSection;
    document.addEventListener('DOMContentLoaded', () => {
      if (document.getElementById('fc-card')) renderCard();
      if (document.getElementById('sec-exam-practice')) initEP();
    });

    function showMacbethSection(sectionId) {
      if (sectionId === 'sec-exam-practice') initEP();
      document.getElementById('home-page').style.display = 'none';
      document.getElementById('macbeth-page').style.display = 'block';
      document.getElementById('sidebar').style.display = 'block';
      document.querySelectorAll('.section-content').forEach(s => s.classList.remove('active'));
      document.getElementById(sectionId).classList.add('active');
      document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
      const target = document.querySelector(`.sidebar a[onclick*="${sectionId}"]`);
      if (target) target.classList.add('active');
    }

    function toggleAccordion(btn) {
      const block = btn.closest('.qa-block');
      block.classList.toggle('open');
    }

    function showSection(e, id) {
      e.preventDefault();
      document.querySelectorAll('.section-content').forEach(s => s.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
      e.currentTarget.classList.add('active');
      if (id === 'sec-exam-practice') initEP();
    }

    function toggle(id) {
      document.querySelectorAll('.nav-item[id]').forEach(item => {
        if (item.id !== id) item.classList.remove('open');
      });
      document.getElementById(id).classList.toggle('open');
    }

    document.addEventListener('click', function(e) {
      if (!e.target.closest('.nav-item')) {
        document.querySelectorAll('.nav-item[id]').forEach(i => i.classList.remove('open'));
      }
    });

    function showMacbeth(e) {
      e.preventDefault();
      document.getElementById('home-page').style.display = 'none';
      document.getElementById('macbeth-page').style.display = 'block';
      ['contact-page','about-page','privacy-page','cookie-page','exam-tips-page'].forEach(id => { const el=document.getElementById(id); if(el) el.style.display='none'; });
      document.getElementById('sidebar').style.display = 'block';
      document.querySelectorAll('.nav-item[id]').forEach(i => i.classList.remove('open'));
      // Default to Overview
      document.querySelectorAll('.section-content').forEach(s => s.classList.remove('active'));
      document.getElementById('sec-overview').classList.add('active');
      document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
      document.querySelector('.sidebar a[onclick*="sec-overview"]').classList.add('active');
    }

    // ── EXAM PRACTICE DATA ──
    const epQuestions = [
      // ── REAL PAST PAPERS ──
      {
        id: 0,
        year: "June 2017",
        scene: "Act 1 Scene 5",
        context: "At this point in the play, Lady Macbeth is speaking. She has just read Macbeth\u2019s letter telling her about his meeting with the three witches.",
        extract: [
          "LADY MACBETH",
          "Glamis thou art, and Cawdor, and shalt be",
          "What thou art promised; yet do I fear thy nature,",
          "It is too full o\u2019th\u2019milk of human kindness",
          "To catch the nearest way. Thou wouldst be great,",
          "Art not without ambition, but without",
          "The illness should attend it. What thou wouldst highly,",
          "That wouldst thou holily; wouldst not play false,",
          "And yet wouldst wrongly win. Thou\u2019dst have, great Glamis,",
          "That which cries, \u2018Thus thou must do\u2019 if thou have it;",
          "And that which rather thou dost fear to do,",
          "Than wishest should be undone. Hie thee hither,",
          "That I may pour my spirits in thine ear",
          "And chastise with the valour of my tongue",
          "All that impedes thee from the golden round,",
          "Which fate and metaphysical aid doth seem",
          "To have thee crowned withal."
        ],
        question: "Starting with this speech, explore how Shakespeare presents ambition in <em>Macbeth</em>.",
        sub: "Write about:<br>\u2022 how Shakespeare presents ambition in this speech<br>\u2022 how Shakespeare presents ambition in the play as a whole.",
        marks: "30 marks + 4 marks (AO4) \u00b7 ~50 minutes",
        ms: {
          ao1: [
            "Ambition in terms of status and role \u2014 Lady Macbeth\u2019s ambition is for herself <em>and</em> Macbeth",
            "Lady Macbeth as the driving force for Macbeth\u2019s ambition at the start of the play \u2014 she is aware of her influence over him",
            "Her recognition that she must give Macbeth her qualities to achieve the prophecy: \u201cpour my spirits in thine ear\u201d",
            "Macbeth hints she has a masculine soul due to her ambition \u2014 link to masculinity and the power of women",
            "She later asks to have female qualities stripped to achieve ambition: \u201cunsex me here\u201d",
            "The consequences of ambition explored through the rest of the play \u2014 Macbeth\u2019s downfall, Lady Macbeth\u2019s breakdown"
          ],
          ao2: [
            "<strong>\u201ctoo full o\u2019th\u2019milk of human kindness\u201d</strong> \u2014 imagery linking femininity with weakness; she rejects this quality",
            "Ambition linked to rhetoric and manipulation \u2014 Lady Macbeth\u2019s soliloquy adds dramatic tension; she thinks and acts alone",
            "Lady Macbeth as a pivotal structural character who drives the plot forward",
            "Her soliloquy form gives the audience direct, unfiltered access to her ambition before Macbeth even arrives"
          ],
          ao3: [
            "Ideas about women with power and ambition \u2014 contemporary reception to Lady Macbeth\u2019s behaviour would be shocking",
            "Ideas about equality, status, and usurping \u2014 Machiavellian ambition and its dangers",
            "Ideas about the supernatural and fate \u2014 does ambition drive the witches\u2019 prophecy or vice versa?"
          ]
        }
      },
      {
        id: 1,
        year: "June 2018",
        scene: "Act 1 Scene 3",
        context: "At this point in the play, after receiving the Witches\u2019 prophecies, Macbeth and Banquo have just been told that Duncan has made Macbeth Thane of Cawdor.",
        extract: [
          "BANQUO",
          "But \u2019tis strange,",
          "And oftentimes, to win us to our harm,",
          "The instruments of darkness tell us truths;",
          "Win us with honest trifles, to betray\u2019s",
          "In deepest consequence. \u2013 Cousins, a word,",
          "I pray you.",
          "---",
          "MACBETH  [Aside]",
          "Two truths are told,",
          "As happy prologues to the swelling act",
          "Of the imperial theme. \u2013 I thank you, gentlemen. \u2013",
          "This supernatural soliciting",
          "Cannot be ill, cannot be good. If ill,",
          "Why hath it given me earnest of success,",
          "Commencing in a truth? I am Thane of Cawdor.",
          "If good, why do I yield to that suggestion,",
          "Whose horrid image doth unfix my hair",
          "And make my seated heart knock at my ribs",
          "Against the use of nature? Present fears",
          "Are less than horrible imaginings.",
          "My thought, whose murder yet is but fantastical,",
          "Shakes so my single state of man that function",
          "Is smothered in surmise, and nothing is,",
          "But what is not."
        ],
        question: "Starting with this moment in the play, explore how Shakespeare presents the attitudes of Macbeth and Banquo towards the supernatural.",
        sub: "Write about:<br>\u2022 how Shakespeare presents the attitudes of Macbeth and Banquo towards the supernatural in this extract<br>\u2022 how Shakespeare presents the attitudes of Macbeth and Banquo towards the supernatural in the play as a whole.",
        marks: "30 marks + 4 marks (AO4) \u00b7 ~50 minutes",
        ms: {
          ao1: [
            "The duality of Macbeth\u2019s feelings \u2014 he doesn\u2019t know whether to believe the witches: \u201cCannot be ill, cannot be good\u201d",
            "Banquo is realistic about the \u2018instruments of Darkness\u2019 and the danger of what they can lead to",
            "Banquo is keen to hear prophecies for himself; Macbeth is keen to know more",
            "As the play progresses, Banquo does not act upon his prophecies whereas Macbeth becomes embroiled in them, returning to the witches and believing them completely"
          ],
          ao2: [
            "<strong>\u201cCannot be ill, cannot be good\u201d</strong> \u2014 paradox and contradiction reveal Macbeth\u2019s confused feelings; his use of questions mirrors his uncertainty",
            "The prophetic nature of what Banquo says and the witches\u2019 persuasive, equivocal power",
            "Fearful images (\u201chorid image doth unfix my hair\u201d) suggest Macbeth\u2019s instinctive horror at what he is considering",
            "Dramatic devices such as the dagger (2.1) and Banquo\u2019s ghost (3.4) show how supernatural forces have overcome Macbeth",
            "The supernatural drives the plot and Macbeth: it functions as a structural device throughout"
          ],
          ao3: [
            "Ideas about the supernatural across time and audience reception \u2014 Jacobean audiences genuinely feared witchcraft",
            "King James I\u2019s <em>Daemonologie</em> \u2014 written by the king himself; the play would resonate with contemporary anxieties",
            "Supernatural vs natural \u2014 ideas about the theme of deception; the witches \u2018win with honest trifles\u2019",
            "Dramatic context \u2014 the spectacle of the supernatural would be enjoyed and feared by a Jacobean audience"
          ]
        }
      },
      {
        id: 2,
        year: "June 2019",
        scene: "Act 1 Scene 2",
        context: "At this point in the play, the Captain tells Duncan about Macbeth\u2019s part in the recent battle.",
        extract: [
          "CAPTAIN",
          "Doubtful it stood,",
          "As two spent swimmers that do cling together",
          "And choke their art. The merciless Macdonald \u2013",
          "Worthy to be a rebel, for to that",
          "The multiplying villainies of nature",
          "Do swarm upon him \u2013 from the Western Isles",
          "Of kerns and galloglasses is supplied,",
          "And Fortune on his damn\u00e8d quarrel smiling,",
          "Show\u2019d like a rebel\u2019s whore. But all\u2019s too weak,",
          "For brave Macbeth \u2013 well he deserves that name \u2013",
          "Disdaining Fortune, with his brandish\u2019d steel,",
          "Which smoked with bloody execution,",
          "Like Valour\u2019s minion carved out his passage",
          "Till he faced the slave,",
          "Which ne\u2019er shook hands, nor bade farewell to him,",
          "Till he unseam\u2019d him from the nave to th\u2019chaps",
          "And fix\u2019d his head upon our battlements."
        ],
        question: "Starting with this speech, explore how far Shakespeare presents Macbeth as a violent character.",
        sub: "Write about:<br>\u2022 how Shakespeare presents Macbeth in this extract<br>\u2022 how far Shakespeare presents Macbeth as a violent character in the play as a whole.",
        marks: "30 marks + 4 marks (AO4) \u00b7 ~50 minutes",
        ms: {
          ao1: [
            "Macbeth as a brave and violent warrior for his country \u2014 violence here is presented as heroic and admired",
            "Macbeth\u2019s violent tendencies later, e.g. his brutal murder of Duncan and the two guards",
            "Macbeth distances himself from the murders of Banquo and the Macduffs despite being ultimately responsible",
            "Macbeth\u2019s conscience and the loss of it \u2014 e.g. he has \u2018forgot the taste of fears\u2019",
            "The role of Lady Macbeth in encouraging Macbeth\u2019s violence \u2014 but Macbeth does retain free will"
          ],
          ao2: [
            "<strong>\u201cUnseam\u2019d him from the nave to th\u2019chaps\u201d</strong> \u2014 graphic imagery of violence presented positively; the audience\u2019s first impression of Macbeth is favourable despite the brutality",
            "<strong>\u201cValour\u2019s minion\u201d</strong> \u2014 personification elevates Macbeth to an ideal of martial courage; violence is glorified",
            "Images of blood used to represent Macbeth\u2019s guilt about his violence in later scenes",
            "Use of soliloquies to reveal Macbeth\u2019s conscience as his violence becomes more personal and corrupt",
            "Before he appears, the audience receives a favourable impression of Macbeth through the Captain\u2019s report"
          ],
          ao3: [
            "Ideas about violence accepted and admired in the context of war and defence of Scotland",
            "Ideas about regicide \u2014 the Divine Right of Kings; violence against a king is a sin against God",
            "Macbeth\u2019s immorality in embroiling others in his violence \u2014 the murder of innocents (Lady Macduff, her son)",
            "Evidence of a conscience \u2014 connections to religious belief; Macbeth struggles to say \u2018Amen\u2019 after the murder"
          ]
        }
      },
      {
        id: 3,
        year: "June 2020",
        scene: "Act 5 Scene 1",
        context: "At this point in the play, the Doctor and the Gentlewoman watch Lady Macbeth sleepwalking.",
        extract: [
          "LADY MACBETH",
          "Out, damned spot! Out, I say! One, two. Why then",
          "\u2019tis time to do\u2019t. Hell is murky. Fie, my lord, fie,",
          "a soldier, and afeard? What need we fear who knows it,",
          "when none can call our power to account? Yet who would",
          "have thought the old man to have had so much blood in him.",
          "---",
          "DOCTOR  Do you mark that?",
          "---",
          "LADY MACBETH  The Thane of Fife had a wife. Where is she",
          "now? What, will these hands ne\u2019er be clean? No more o\u2019",
          "that, my Lord, no more o\u2019that. You mar all with this starting.",
          "---",
          "DOCTOR  Go to, go to; you have known what you should not.",
          "---",
          "GENTLEWOMAN  She has spoke what she should not, I am sure",
          "of that. Heaven knows what she has known.",
          "---",
          "LADY MACBETH  Here\u2019s the smell of the blood still; all the",
          "perfumes of Arabia will not sweeten this little hand. O, O, O.",
          "---",
          "DOCTOR  What a sigh is there! The heart is sorely charged.",
          "---",
          "GENTLEWOMAN  I would not have such a heart in my bosom for",
          "the dignity of the whole body.",
          "---",
          "DOCTOR  Well, well, well \u2013",
          "---",
          "GENTLEWOMAN  Pray God it be, sir.",
          "---",
          "DOCTOR  This disease is beyond my practice; yet I have known",
          "those which have walked in their sleep who have died holily",
          "in their beds.",
          "---",
          "LADY MACBETH  Wash your hands, put on your night-gown, look",
          "not so pale. I tell you yet again, Banquo\u2019s buried; he cannot",
          "come out on\u2019s grave.",
          "---",
          "LADY MACBETH  To bed, to bed; there\u2019s knocking at the gate.",
          "Come, come, come, come, give me your hand; what\u2019s done",
          "cannot be undone. To bed, to bed, to bed."
        ],
        question: "\u2018Lady Macbeth is a female character who changes during the play.\u2019 Starting with this moment in the play, explore how far you agree with this view.",
        sub: "Write about:<br>\u2022 how Shakespeare presents Lady Macbeth in this extract<br>\u2022 how far Shakespeare presents Lady Macbeth as a female character who changes in the play as a whole.",
        marks: "30 marks + 4 marks (AO4) \u00b7 ~50 minutes",
        ms: {
          ao1: [
            "Details of Lady Macbeth\u2019s sleepwalking and the specific references she makes (Duncan, Lady Macduff, Banquo)",
            "First impressions of Lady Macbeth as a strong and determined woman \u2014 her ambition in Act 1",
            "Lady Macbeth as the driving force behind Macbeth and also his support after the murder (2.2)",
            "After suppressing her conscience and feelings, she changes dramatically by the end of the play"
          ],
          ao2: [
            "<strong>\u201cOut, damned spot!\u201d</strong> \u2014 Lady Macbeth\u2019s disjointed, fragmented speech patterns contrast sharply with her earlier controlled rhetoric",
            "<strong>\u201call the perfumes of Arabia will not sweeten this little hand\u201d</strong> \u2014 echoes of past events; the hand imagery reverses her earlier dismissal of guilt",
            "Shocking images she used to \u2018unsex herself\u2019 earlier contrast with her helplessness here",
            "Her strength shown through dialogue with Macbeth in earlier scenes (1.7, 2.2) \u2014 she has lost all that power",
            "Prose replacing blank verse signals her mental breakdown; in Shakespeare, prose often denotes madness"
          ],
          ao3: [
            "Gender issues: Lady Macbeth not a stereotypical female of the time \u2014 contemporary audiences would find her transgression and her punishment resonant",
            "Attitudes to psychological disturbance \u2014 the Doctor\u2019s helplessness reflects Jacobean limits on mental health treatment",
            "Lady Macbeth\u2019s role in her marriage \u2014 her relationship with Macbeth has collapsed by this point",
            "Ideas about conscience, evil and religion \u2014 her breakdown as divine punishment"
          ]
        }
      },
      {
        id: 4,
        year: "June 2023",
        scene: "Act 5 Scene 3",
        context: "At this point in the play, Macbeth hears that the English army is approaching and asks the Doctor for a report about Lady Macbeth.",
        extract: [
          "MACBETH",
          "Seyton! \u2013 I am sick at heart,",
          "When I behold \u2013 Seyton, I say! \u2013 this push",
          "Will cheer me ever or disseat me now.",
          "I have lived long enough. My way of life",
          "Is fall\u2019n into the sere, the yellow leaf,",
          "And that which should accompany old age,",
          "As honour, love, obedience, troops of friends,",
          "I must not look to have; but in their stead,",
          "Curses, not loud but deep, mouth-honour, breath",
          "Which the poor heart would fain deny, and dare not.",
          "Seyton!",
          "---",
          "[Enter SEYTON]",
          "---",
          "SEYTON  What\u2019s your gracious pleasure?",
          "---",
          "MACBETH  What news more?",
          "---",
          "SEYTON  All is confirmed, my lord, which was reported.",
          "---",
          "MACBETH  I\u2019ll fight till from my bones my flesh be hacked.",
          "Give me my armour.",
          "---",
          "SEYTON  \u2019Tis not needed yet.",
          "---",
          "MACBETH  I\u2019ll put it on;",
          "Send out more horses; skirr the country round.",
          "Hang those that talk of fear. Give me mine armour.",
          "How does your patient, doctor?",
          "---",
          "DOCTOR  Not so sick, my lord,",
          "As she is troubled with thick-coming fancies",
          "That keep her from her rest.",
          "---",
          "MACBETH  Cure her of that.",
          "Canst thou not minister to a mind diseased,",
          "Pluck from the memory a rooted sorrow,",
          "Raze out the written troubles of the brain,",
          "And with some sweet oblivious antidote",
          "Cleanse the stuff\u2019d bosom of that perilous stuff",
          "Which weighs upon the heart?"
        ],
        question: "Starting with this conversation, explore how far Shakespeare presents Macbeth as a male character who changes during the play.",
        sub: "Write about:<br>\u2022 how Shakespeare presents Macbeth in this conversation<br>\u2022 how far Shakespeare presents Macbeth as a male character who changes in the play as a whole.",
        marks: "30 marks + 4 marks (AO4) \u00b7 ~50 minutes",
        ms: {
          ao1: [
            "Comments on Macbeth\u2019s despair in the extract \u2014 \u2018I have lived long enough\u2019; he has lost everything he killed for",
            "Comments on Macbeth before he appears \u2014 a brave warrior celebrated by Duncan and the Captain (1.2)",
            "Details of his brutality and violence: murder of Duncan, ordering the deaths of Banquo and the Macduffs",
            "References to his conscience throughout the play \u2014 hallucinations, inability to say \u2018Amen\u2019, Banquo\u2019s ghost",
            "Details about Macbeth at the end of the play \u2014 his defiant last stand and the restoration of order"
          ],
          ao2: [
            "<strong>\u201cI have lived long enough\u201d</strong> and <strong>\u201cthe sere, the yellow leaf\u201d</strong> \u2014 imagery of decay and autumn; he sees himself as past his prime and purposeless",
            "<strong>\u201cmouth-honour, breath / Which the poor heart would fain deny\u201d</strong> \u2014 he knows his followers\u2019 loyalty is false; isolation is complete",
            "Use of soliloquies throughout the play to reveal Macbeth\u2019s inner thoughts and track his changing character",
            "The changing relationship with Lady Macbeth \u2014 they have drifted entirely apart by this scene",
            "Language of desperation and aggression (\u201cHang those that talk of fear\u201d) contrasts with his earlier moral uncertainty"
          ],
          ao3: [
            "Macbeth\u2019s use of violence in the context of war vs his later violence to fulfil personal ambition",
            "Role of the witches and the supernatural on Macbeth\u2019s changing character and decisions",
            "Macbeth\u2019s attitude to religious issues at different points \u2014 cannot say \u2018Amen\u2019 early on; increasingly godless by Act 5",
            "Kingship and expectations thereof \u2014 Macbeth fails every quality of a good king (as outlined in 4.3)"
          ]
        }
      },
      {
        id: 5,
        year: "June 2024",
        scene: "Act 1 Scene 7",
        context: "At this point in the play, Macbeth has decided that he is no longer prepared to carry out the plan to murder King Duncan.",
        extract: [
          "LADY MACBETH",
          "Was the hope drunk",
          "Wherein you dressed yourself? Hath it slept since?",
          "And wakes it now to look so green and pale",
          "At what it did so freely? From this time,",
          "Such I account thy love. Art thou afeard",
          "To be the same in thine own act and valour,",
          "As thou art in desire? Wouldst thou have that",
          "Which thou esteem\u2019st the ornament of life,",
          "And live a coward in thine own esteem,",
          "Letting I dare not wait upon I would,",
          "Like the poor cat i\u2019th\u2019adage?",
          "---",
          "MACBETH  Prithee, peace.",
          "I dare do all that may become a man;",
          "Who dares do more is none.",
          "---",
          "LADY MACBETH  What beast was\u2019t then",
          "That made you break this enterprise to me?",
          "When you durst do it, then you were a man.",
          "And to be more than what you were, you would",
          "Be so much more the man. Nor time, nor place",
          "Did then adhere, and yet you would make both.",
          "They have made themselves and that their fitness now",
          "Does unmake you. I have given suck and know",
          "How tender \u2019tis to love the babe that milks me:",
          "I would, while it was smiling in my face,",
          "Have pluck\u2019d my nipple from his boneless gums",
          "And dash\u2019d the brains out, had I so sworn",
          "As you have done to this.",
          "---",
          "MACBETH  If we should fail?",
          "---",
          "LADY MACBETH  We fail?",
          "But screw your courage to the sticking-place,",
          "And we\u2019ll not fail."
        ],
        question: "Starting with this conversation, explore how far Shakespeare presents Lady Macbeth as a strong female character.",
        sub: "Write about:<br>\u2022 how far Shakespeare presents Lady Macbeth as a strong female character in this conversation<br>\u2022 how far Shakespeare presents Lady Macbeth as a strong female character in the play as a whole.",
        marks: "30 marks + 4 marks (AO4) \u00b7 ~50 minutes",
        ms: {
          ao1: [
            "Comments on Lady Macbeth\u2019s strength as she persuades Macbeth to kill Duncan \u2014 she reverses his decision",
            "Ideas about her determination to murder Duncan \u2014 even before Macbeth returns she has already committed (1.5)",
            "Comments on her resolve and strength in the banquet scene \u2014 covering for Macbeth\u2019s breakdown (3.4)",
            "Comments on her support for Macbeth immediately after Duncan\u2019s murder (2.2) \u2014 she is the practical one",
            "Comments on Lady Macbeth\u2019s lack of strength in the sleepwalking scene (5.1) \u2014 her eventual collapse"
          ],
          ao2: [
            "<strong>\u201cWas the hope drunk / Wherein you dressed yourself?\u201d</strong> \u2014 rhetorical questions and metaphor challenge Macbeth\u2019s masculinity; she completely controls the exchange",
            "<strong>\u201cI have given suck\u2026 / And dash\u2019d the brains out\u201d</strong> \u2014 extreme image; she weaponises motherhood to shame Macbeth into action; deeply shocking even to modern audiences",
            "<strong>\u201cScrew your courage to the sticking-place\u201d</strong> \u2014 mechanical metaphor; she is practical, confident and dominant",
            "Lady Macbeth\u2019s repeated challenges to his masculinity \u2014 \u2018When you durst do it, then you were a man\u2019",
            "Lady Macbeth\u2019s gradual decline in strength and power over Macbeth as the play progresses"
          ],
          ao3: [
            "Ideas about gender expectations \u2014 Lady Macbeth subverts the Jacobean ideal of the obedient, passive wife",
            "Ideas about relationships, marriage and motherhood \u2014 her willingness to kill her own baby is the ultimate transgression",
            "References to Lady Macbeth calling on \u2018spirits\u2019 (1.5) \u2014 she aligns herself with the supernatural to gain power",
            "Comments on Lady Macbeth\u2019s mental health and eventual suicide \u2014 her strength is ultimately unsustainable"
          ]
        }
      },
      {
        id: 6,
        year: "Specimen Paper",
        scene: "Act 1 Scene 5",
        context: "At this point in the play Lady Macbeth is speaking. She has just received the news that King Duncan will be spending the night at her castle.",
        extract: [
          "LADY MACBETH",
          "The raven himself is hoarse",
          "That croaks the fatal entrance of Duncan",
          "Under my battlements. Come, you spirits",
          "That tend on mortal thoughts, unsex me here,",
          "And fill me from the crown to the toe topfull",
          "Of direst cruelty; make thick my blood,",
          "Stop up th\u2019access and passage to remorse",
          "That no compunctious visitings of nature",
          "Shake my fell purpose nor keep peace between",
          "Th\u2019effect and it. Come to my woman\u2019s breasts,",
          "And take my milk for gall, you murd\u2019ring ministers,",
          "Wherever in your sightless substances",
          "You wait on nature\u2019s mischief. Come, thick night,",
          "And pall thee in the dunnest smoke of hell,",
          "That my keen knife see not the wound it makes",
          "Nor heaven peep through the blanket of the dark,",
          "To cry \u2018Hold, hold!\u2019"
        ],
        question: "Starting with this speech, explain how far you think Shakespeare presents Lady Macbeth as a powerful woman.",
        sub: "Write about:<br>\u2022 how Shakespeare presents Lady Macbeth in this speech<br>\u2022 how Shakespeare presents Lady Macbeth in the play as a whole.",
        marks: "30 marks + 4 marks (AO4) \u00b7 ~50 minutes",
        ms: {
          ao1: [
            "Power in terms of status and Lady Macbeth\u2019s power within her relationship with Macbeth",
            "Lady Macbeth as a powerful and effective character who drives the plot in Acts 1\u20132",
            "How Lady Macbeth changes as the play develops \u2014 contrast between Act 1 and Act 5",
            "Her power erodes as Macbeth becomes increasingly independent and tyrannical"
          ],
          ao2: [
            "<strong>\u201cUnsex me here\u201d</strong> \u2014 imperative verb; she commands the supernatural; rejects femininity as an obstacle to power",
            "<strong>\u201ctake my milk for gall\u201d</strong> \u2014 imagery inverts natural, nurturing femininity; she seeks to replace it with cruelty",
            "<strong>\u201cNor heaven peep through the blanket of the dark\u201d</strong> \u2014 she asks darkness to hide her actions from God; suggests awareness that what she plans is sinful",
            "The use and effect of pronouns (\u2018my\u2019, \u2018me\u2019) to suggest individual power and control throughout the soliloquy",
            "Shakespeare uses Lady Macbeth\u2019s language of desperation for power to show the lengths she is willing to go to"
          ],
          ao3: [
            "Ideas about the role of women \u2014 Lady Macbeth\u2019s behaviour would be seen as deeply transgressive by a Jacobean audience",
            "Attitudes towards the supernatural \u2014 invoking spirits aligns her with witchcraft",
            "Ideas about the soul, heaven and hell \u2014 she explicitly asks God not to witness her actions",
            "Contemporary reception towards Lady Macbeth\u2019s behaviour in this speech: fear, fascination, and moral condemnation"
          ]
        }
      },
      {
        id: 7,
        year: "November 2021",
        scene: "Act 2 Scene 2",
        context: "At this point in the play, Macbeth has murdered Duncan and has returned to Lady Macbeth.",
        extract: [
          "MACBETH",
          "Methought I heard a voice cry, \u2018Sleep no more:",
          "Macbeth does murder sleep\u2019, the innocent sleep,",
          "Sleep that knits up the ravell\u2019d sleeve of care,",
          "The death of each day\u2019s life, sore labour\u2019s bath,",
          "Balm of hurt minds, great nature\u2019s second course,",
          "Chief nourisher in life\u2019s feast.",
          "---",
          "LADY MACBETH  What do you mean?",
          "---",
          "MACBETH  Still it cried, \u2018Sleep no more\u2019 to all the house;",
          "\u2018Glamis hath murdered sleep\u2019, and therefore Cawdor",
          "Shall sleep no more: Macbeth shall sleep no more.",
          "---",
          "LADY MACBETH  Who was it, that thus cried? Why, worthy thane,",
          "You do unbend your noble strength to think",
          "So brain-sickly of things. Go get some water",
          "And wash this filthy witness from your hand.",
          "Why did you bring these daggers from the place?",
          "They must lie there. Go carry them and smear",
          "The sleepy grooms with blood.",
          "---",
          "MACBETH  I\u2019ll go no more.",
          "I am afraid to think what I have done;",
          "Look on\u2019t again, I dare not.",
          "---",
          "LADY MACBETH  Infirm of purpose!",
          "Give me the daggers. The sleeping and the dead",
          "Are but as pictures; \u2019tis the eye of childhood",
          "That fears a painted devil. If he do bleed,",
          "I\u2019ll gild the faces of the grooms withal,",
          "For it must seem their guilt."
        ],
        question: "Starting with this conversation, explore how Shakespeare presents the relationship between Macbeth and Lady Macbeth.",
        sub: "Write about:<br>\u2022 how Shakespeare presents their relationship in this extract<br>\u2022 how Shakespeare presents the relationship between Macbeth and Lady Macbeth in the play as a whole.",
        marks: "30 marks + 4 marks (AO4) \u00b7 ~50 minutes",
        ms: {
          ao1: [
            "Details of Lady Macbeth taking control of the situation in the extract and elsewhere \u2014 she is the dominant partner here",
            "Lady Macbeth\u2019s determination that Macbeth should be king \u2014 she would go to any lengths",
            "Macbeth shielding Lady Macbeth from the planned murder of Banquo/Fleance \u2014 the relationship begins to shift",
            "The relationship drifting apart towards the end \u2014 Macbeth barely reacts to her death (5.5)"
          ],
          ao2: [
            "<strong>\u201cInfirm of purpose!\u201d</strong> \u2014 Lady Macbeth\u2019s contemptuous language contrasts sharply with Macbeth\u2019s fragmented, guilty speech; she is decisive where he is paralysed",
            "<strong>\u201cMacbeth does murder sleep\u201d</strong> \u2014 personification; Macbeth has destroyed something innocent and restorative; immediate psychological consequence",
            "Contrast between the language of Macbeth and Lady Macbeth: his verse is fragmented; hers is controlled and purposeful",
            "Tracking the change in their relationship \u2014 they almost switch roles as the play progresses",
            "The persuasion scene (1.7) reveals the strength of her influence; by Act 3 he no longer confides in her"
          ],
          ao3: [
            "Gender issues and roles within their relationship: the shifts of power and control subvert Jacobean expectations",
            "Ideas about conscience in relation to Macbeth and Lady Macbeth \u2014 connected to religious belief",
            "Ideas about marriage and stereotypical roles \u2014 she leads and he follows, inverting expected norms",
            "Role of love in their relationship \u2014 his letter (1.5) suggests genuine affection; their isolation from each other in Act 5 is tragic"
          ]
        }
      },
      // ── AQA-STYLE NEW QUESTIONS ──
      {
        id: 8,
        year: "AQA Style",
        scene: "Act 2 Scene 1",
        context: "At this point in the play, Macbeth is alone and prepares to murder King Duncan. He sees a vision of a dagger.",
        extract: [
          "MACBETH",
          "Is this a dagger which I see before me,",
          "The handle toward my hand? Come, let me clutch thee.",
          "I have thee not, and yet I see thee still.",
          "Art thou not, fatal vision, sensible",
          "To feeling as to sight? or art thou but",
          "A dagger of the mind, a false creation,",
          "Proceeding from the heat-oppressed brain?",
          "I see thee yet, in form as palpable",
          "As this which now I draw.",
          "Thou marshall\u2019st me the way that I was going;",
          "And such an instrument I was to use.",
          "Mine eyes are made the fools o\u2019the other senses,",
          "Or else worth all the rest; I see thee still,",
          "And on thy blade and dudgeon gouts of blood,",
          "Which was not so before. There\u2019s no such thing:",
          "It is the bloody business which informs",
          "Thus to mine eyes. Now o\u2019er the one half-world",
          "Nature seems dead, and wicked dreams abuse",
          "The curtain\u2019d sleep; witchcraft celebrates",
          "Pale Hecate\u2019s offerings, and wither\u2019d Murder,",
          "Alarum\u2019d by his sentinel, the wolf,",
          "Whose howl\u2019s his watch, thus with his stealthy pace,",
          "With Tarquin\u2019s ravishing strides, towards his design",
          "Moves like a ghost."
        ],
        question: "Starting with this speech, explore how Shakespeare presents Macbeth\u2019s state of mind in the play.",
        sub: "Write about:<br>\u2022 how Shakespeare presents Macbeth\u2019s state of mind in this speech<br>\u2022 how Shakespeare presents Macbeth\u2019s state of mind in the play as a whole.",
        marks: "30 marks + 4 marks (AO4) \u00b7 ~50 minutes",
        ms: {
          ao1: [
            "Macbeth hallucinates a dagger guiding him toward Duncan \u2014 his mind is breaking under the weight of his intent",
            "He questions his own sanity: \u201ca dagger of the mind, a false creation\u201d \u2014 self-awareness does not stop him",
            "He recognises the evil atmosphere around him: nature \u201cseems dead\u201d, witchcraft is active",
            "He presses on despite the hallucination \u2014 showing how ambition overpowers conscience",
            "Wider play: cannot say \u2018Amen\u2019 after the murder (2.2), hears voices (2.2), sees Banquo\u2019s ghost (3.4), his soliloquies become increasingly fragmented"
          ],
          ao2: [
            "<strong>\u201cA dagger of the mind\u201d</strong> \u2014 metaphor; the dagger is psychological, born of guilt and ambition; raises the question of internal vs external evil",
            "<strong>\u201cheat-oppressed brain\u201d</strong> \u2014 physical imagery suggesting fever; his mind is diseased by ambition",
            "<strong>\u201cgouts of blood\u201d</strong> \u2014 the vision grows more disturbing; his guilt is anticipatory, before the murder has even occurred",
            "<strong>\u201cwither\u2019d Murder \u2026 moves like a ghost\u201d</strong> \u2014 personification; murder has taken possession of him",
            "Rhetorical questions throughout reflect his fractured, uncertain mental state",
            "Soliloquy form traps the audience inside his deteriorating mind, creating intimacy and unease"
          ],
          ao3: [
            "Jacobean beliefs \u2014 hallucinations could be sent by the devil to tempt people into sin (<em>Daemonologie</em>)",
            "Hecate and witchcraft \u2014 invoking supernatural forces signals Macbeth has stepped outside divine protection",
            "Tarquin \u2014 a Roman tyrant and rapist; Shakespeare aligns Macbeth with historical evil and the violation of trust",
            "Aristotelian tragedy \u2014 this is hamartia in action; ambition actively overrides his moral judgement"
          ]
        }
      },
      {
        id: 9,
        year: "AQA Style",
        scene: "Act 3 Scene 1",
        context: "At this point in the play, Macbeth is alone and reflects on Banquo\u2019s prophecy. He then meets with the murderers he has hired to kill Banquo.",
        extract: [
          "MACBETH",
          "To be thus is nothing,",
          "But to be safely thus. Our fears in Banquo",
          "Stick deep, and in his royalty of nature",
          "Reigns that which would be fear\u2019d: \u2019tis much he dares,",
          "And to that dauntless temper of his mind",
          "He hath a wisdom that doth guide his valour",
          "To act in safety. There is none but he",
          "Whose being I do fear: and under him",
          "My genius is rebuk\u2019d, as it is said",
          "Mark Antony\u2019s was by Caesar. He chid the sisters,",
          "When first they put the name of King upon me,",
          "And bade them speak to him; then, prophet-like,",
          "They hail\u2019d him father to a line of kings.",
          "Upon my head they plac\u2019d a fruitless crown,",
          "And put a barren sceptre in my gripe,",
          "Thence to be wrench\u2019d with an unlineal hand,",
          "No son of mine succeeding. If \u2019t be so,",
          "For Banquo\u2019s issue have I fil\u2019d my mind,",
          "For them the gracious Duncan have I murdered,",
          "Put rancours in the vessel of my peace",
          "Only for them, and mine eternal jewel",
          "Given to the common enemy of man",
          "To make them kings \u2013 the seeds of Banquo kings!",
          "Rather than so, come, Fate, into the list,",
          "And champion me to th\u2019utterance."
        ],
        question: "Starting with this speech, explore how Shakespeare presents Macbeth\u2019s growing ruthlessness in the play.",
        sub: "Write about:<br>\u2022 how Shakespeare presents Macbeth\u2019s ruthlessness in this speech<br>\u2022 how Shakespeare presents Macbeth\u2019s growing ruthlessness in the play as a whole.",
        marks: "30 marks + 4 marks (AO4) \u00b7 ~50 minutes",
        ms: {
          ao1: [
            "Macbeth has killed Duncan but immediately fears Banquo \u2014 the cycle of violence is self-perpetuating",
            "He recognises Banquo\u2019s moral strength: \u201croyalty of nature\u201d \u2014 Banquo is the foil to his own corruption",
            "He is furious at the idea of killing for Banquo\u2019s heirs \u2014 his ruthlessness is now driven by resentment as well as ambition",
            "He challenges Fate itself: \u201ccome, Fate, into the list\u201d \u2014 he has become reckless and defiant",
            "Wider play: orders murder of Banquo and Fleance (3.1), murders Lady Macduff and her children (4.2), returns to the witches (4.1)"
          ],
          ao2: [
            "<strong>\u201ca fruitless crown\u201d / \u201ca barren sceptre\u201d</strong> \u2014 images of sterility; the crown gives him nothing permanent; he has gained power but not legacy",
            "<strong>\u201cmine eternal jewel / Given to the common enemy of man\u201d</strong> \u2014 he has sold his soul to the devil; he knows it and presses on anyway",
            "<strong>\u201cFor them the gracious Duncan have I murdered\u201d</strong> \u2014 he names the murder plainly; his earlier hesitation has hardened into cold logic",
            "Soliloquy form reveals his ruthless inner reasoning; the audience sees a man rationalising further violence",
            "The listing of what he has sacrificed (\u201cfil\u2019d my mind\u2026 murdered\u2026 put rancours\u2026 given\u201d) creates a momentum toward the decision to kill Banquo"
          ],
          ao3: [
            "The Divine Right of Kings \u2014 Macbeth has already committed regicide; adding fratricide compounds his damnation",
            "Machiavellian power \u2014 Macbeth calculates that Banquo must die for purely strategic reasons; violence has become political",
            "Banquo as a moral foil \u2014 his \u2018royalty of nature\u2019 implicitly indicts Macbeth\u2019s corrupt version of kingship",
            "Aristotelian tragedy \u2014 each violent act traps Macbeth further; he cannot return to moral order"
          ]
        }
      },
      {
        id: 10,
        year: "AQA Style",
        scene: "Act 5 Scene 5",
        context: "At this point in the play, Macbeth learns of Lady Macbeth\u2019s death and receives news that Birnam Wood appears to be moving.",
        extract: [
          "MACBETH",
          "She should have died hereafter;",
          "There would have been a time for such a word.",
          "To-morrow, and to-morrow, and to-morrow,",
          "Creeps in this petty pace from day to day",
          "To the last syllable of recorded time,",
          "And all our yesterdays have lighted fools",
          "The way to dusty death. Out, out, brief candle!",
          "Life\u2019s but a walking shadow, a poor player",
          "That struts and frets his hour upon the stage",
          "And then is heard no more: it is a tale",
          "Told by an idiot, full of sound and fury,",
          "Signifying nothing.",
          "---",
          "[Enter a MESSENGER]",
          "---",
          "MESSENGER  Gracious my lord,",
          "I should report that which I say I saw,",
          "But know not how to do\u2019t.",
          "---",
          "MACBETH  Well, say, sir.",
          "---",
          "MESSENGER  As I did stand my watch upon the hill,",
          "I look\u2019d toward Birnam, and anon, methought,",
          "The wood began to move.",
          "---",
          "MACBETH  Liar and slave!",
          "---",
          "MESSENGER  Let me endure your wrath, if\u2019t be not so.",
          "Within this three mile may you see it coming.",
          "I say, a moving grove.",
          "---",
          "MACBETH  If thou speak\u2019st false,",
          "Upon the next tree shalt thou hang alive,",
          "Till famine cling thee: if thy speech be sooth,",
          "I care not if thou dost for me as much.",
          "I pull in resolution, and begin",
          "To doubt th\u2019equivocation of the fiend",
          "That lies like truth."
        ],
        question: "Starting with this extract, explore how Shakespeare presents the idea that Macbeth has brought about his own downfall.",
        sub: "Write about:<br>\u2022 how Shakespeare presents Macbeth\u2019s downfall in this extract<br>\u2022 how Shakespeare presents the idea that Macbeth brings about his own downfall in the play as a whole.",
        marks: "30 marks + 4 marks (AO4) \u00b7 ~50 minutes",
        ms: {
          ao1: [
            "Macbeth\u2019s nihilistic reaction to Lady Macbeth\u2019s death \u2014 he has lost the capacity to feel; his downfall has already cost him everything",
            "He begins to recognise he has been deceived: \u201cthe equivocation of the fiend / That lies like truth\u201d",
            "He still threatens the Messenger with death \u2014 his tyranny continues even as his power collapses",
            "His overconfidence in the witches\u2019 prophecies directly causes him to under-prepare for Malcolm\u2019s army",
            "Wider play: murder of Duncan, ordering Banquo\u2019s death, massacre of the Macduffs \u2014 each decision accelerates his downfall"
          ],
          ao2: [
            "<strong>\u201cTo-morrow, and to-morrow, and to-morrow\u201d</strong> \u2014 triple repetition; time stretches forward pointlessly; life is endless and meaningless",
            "<strong>\u201ca poor player / That struts and frets his hour upon the stage\u201d</strong> \u2014 extended metaphor; life (and kingship) is mere performance with no lasting meaning",
            "<strong>\u201cfull of sound and fury, / Signifying nothing\u201d</strong> \u2014 paradox; Macbeth\u2019s reign has been loud and violent but ultimately empty",
            "<strong>\u201cthe equivocation of the fiend / That lies like truth\u201d</strong> \u2014 he finally understands the witches\u2019 deception; echoes \u2018Fair is foul\u2019 from the opening",
            "The speech slows pace before the final battle \u2014 structurally it is his anagnorisis (moment of recognition)"
          ],
          ao3: [
            "Aristotelian anagnorisis and catastrophe \u2014 Macbeth recognises the futility of his ambition at the moment he cannot reverse it",
            "The witches\u2019 equivocation \u2014 Jacobean audiences would recognise this as diabolical deception; he was warned by Banquo in 1.3",
            "Christian context \u2014 a Jacobean audience would understand his nihilism as the consequence of cutting himself off from God",
            "Shakespeare\u2019s theatrical self-reference \u2014 comparing life to a \u2018poor player\u2019 draws attention to the theatrical artifice itself"
          ]
        }
      },
      {
        id: 11,
        year: "AQA Style",
        scene: "Act 3 Scene 4",
        context: "At this point in the play, Macbeth sees the ghost of Banquo at the royal banquet. Lady Macbeth tries to manage the situation in front of the guests.",
        extract: [
          "MACBETH",
          "Avaunt! and quit my sight! let the earth hide thee!",
          "Thy bones are marrowless, thy blood is cold;",
          "Thou hast no speculation in those eyes",
          "Which thou dost glare with!",
          "---",
          "LADY MACBETH  Think of this, good peers,",
          "But as a thing of custom: \u2019tis no other;",
          "Only it spoils the pleasure of the time.",
          "---",
          "MACBETH  What man dare, I dare:",
          "Approach thou like the rugged Russian bear,",
          "The arm\u2019d rhinoceros, or the Hyrcan tiger;",
          "Take any shape but that, and my firm nerves",
          "Shall never tremble: or be alive again,",
          "And dare me to the desert with thy sword;",
          "If trembling I inhabit then, protest me",
          "The baby of a girl. Hence, horrible shadow!",
          "Unreal mockery, hence!",
          "---",
          "[Ghost vanishes]",
          "---",
          "MACBETH  Why, so: being gone,",
          "I am a man again. Pray you, sit still.",
          "---",
          "LADY MACBETH  You have displac\u2019d the mirth, broke the good meeting,",
          "With most admir\u2019d disorder.",
          "---",
          "MACBETH  Can such things be,",
          "And overcome us like a summer\u2019s cloud,",
          "Without our special wonder? You make me strange",
          "Even to the disposition that I owe,",
          "When now I think you can behold such sights,",
          "And keep the natural ruby of your cheeks,",
          "When mine is blanch\u2019d with fear."
        ],
        question: "Starting with this extract, explore how Shakespeare presents the theme of guilt in <em>Macbeth</em>.",
        sub: "Write about:<br>\u2022 how Shakespeare presents guilt in this extract<br>\u2022 how Shakespeare presents the theme of guilt in the play as a whole.",
        marks: "30 marks + 4 marks (AO4) \u00b7 ~50 minutes",
        ms: {
          ao1: [
            "Macbeth is visibly terrified by Banquo\u2019s ghost \u2014 guilt manifests as hallucination; his conscience cannot be suppressed",
            "\u201cI am a man again\u201d \u2014 his sense of masculinity and identity is being eroded by guilt",
            "\u201cmine is blanch\u2019d with fear\u201d \u2014 he is physically affected; guilt is inscribed on his body",
            "Lady Macbeth tries to dismiss his behaviour publicly but is herself suppressing guilt",
            "Wider play: dagger hallucination (2.1), cannot say \u2018Amen\u2019 (2.2), Lady Macbeth\u2019s sleepwalking (5.1), \u201cOut, damned spot\u201d (5.1)"
          ],
          ao2: [
            "<strong>\u201cHorrible shadow! Unreal mockery!\u201d</strong> \u2014 exclamatory language reflects panic; he knows the ghost is unreal but cannot control his reaction",
            "<strong>\u201cRugged Russian bear \u2026 Hyrcan tiger\u201d</strong> \u2014 hyperbole and listing; Macbeth would face any natural danger, but guilt makes him powerless",
            "<strong>\u201cblanch\u2019d with fear\u201d</strong> \u2014 colour imagery; white (bloodlessness) contrasts with the blood-red guilt motif throughout the play",
            "<strong>\u201cbaby of a girl\u201d</strong> \u2014 emasculating image; guilt undermines the very masculinity he tried to prove through violence",
            "Prose vs verse \u2014 Lady Macbeth\u2019s prose to the guests suggests control; Macbeth\u2019s verse fractures, reflecting breakdown"
          ],
          ao3: [
            "Jacobean belief in ghosts \u2014 audiences would debate whether the ghost was real or diabolic illusion; both readings amplify guilt",
            "Aristotelian tragedy \u2014 the ghost scene marks peripeteia; Macbeth\u2019s irreversible decline begins here",
            "Regicide and divine punishment \u2014 Jacobean audiences understood the ghost as evidence of God\u2019s judgement",
            "Timothy Bright\u2019s <em>Treatise on Melancholie</em> \u2014 guilt-induced hallucinations understood as a form of illness caused by sin"
          ]
        }
      }
    ];


    // ── EXAM PRACTICE STATE ──
    let epAttempted = new Set();
    let epCurrentId = null;
    let epQueue = [];

    function epShuffle(arr) {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    function epGetNext() {
      const remaining = epQuestions.filter(q => !epAttempted.has(q.id));
      if (remaining.length === 0) return null;
      if (epQueue.length === 0) epQueue = epShuffle(remaining.map(q => q.id));
      // skip already-attempted from queue
      while (epQueue.length > 0 && epAttempted.has(epQueue[0])) epQueue.shift();
      if (epQueue.length === 0) return null;
      const nextId = epQueue.shift();
      return epQuestions.find(q => q.id === nextId);
    }

    function epUpdateProgress() {
      const pct = (epAttempted.size / epQuestions.length) * 100;
      document.getElementById('ep-progress-fill').style.width = pct + '%';
      document.getElementById('ep-progress-label').textContent = epAttempted.size + ' / ' + epQuestions.length + ' attempted';
    }


    let epTimerInterval = null;
    let epTimerRemaining = 50 * 60;

    function epFormatTime(totalSeconds) {
      const mins = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
      const secs = (totalSeconds % 60).toString().padStart(2, '0');
      return mins + ':' + secs;
    }

    function epResetTimerDisplay() {
      if (epTimerInterval) {
        clearInterval(epTimerInterval);
        epTimerInterval = null;
      }
      epTimerRemaining = 50 * 60;
      const display = document.getElementById('ep-countdown');
      const btn = document.getElementById('ep-start-timer-btn');
      if (display) display.textContent = epFormatTime(epTimerRemaining);
      if (btn) {
        btn.disabled = false;
        btn.textContent = 'Start Timer';
      }
    }

    function epStartTimer() {
      const display = document.getElementById('ep-countdown');
      const btn = document.getElementById('ep-start-timer-btn');
      if (!display || !btn || epTimerInterval) return;
      btn.disabled = true;
      btn.textContent = 'Timer Running';
      display.textContent = epFormatTime(epTimerRemaining);
      epTimerInterval = setInterval(() => {
        epTimerRemaining -= 1;
        display.textContent = epFormatTime(Math.max(epTimerRemaining, 0));
        if (epTimerRemaining <= 0) {
          clearInterval(epTimerInterval);
          epTimerInterval = null;
          btn.textContent = 'Time Up';
        }
      }, 1000);
    }

    function epRender(q) {
      if (!q) {
        document.getElementById('ep-display').innerHTML = `
          <div class="ep-all-done">
            <div class="ep-all-done-icon">🎓</div>
            <h3>All questions attempted!</h3>
            <p>You've worked through all ${epQuestions.length} practice questions. Hit reset to start again or revisit any question.</p>
            <button class="ep-all-done-btn" onclick="epReset()">↺ Start Again</button>
          </div>`;
        return;
      }
      epCurrentId = q.id;
      epResetTimerDisplay();
      const extractHtml = q.extract.map(line =>
        line === '---' ? '<br>' : `<p>${line}</p>`
      ).join('');
      const doneTag = epAttempted.has(q.id) ? '<span class="ep-done-badge">✓ Attempted</span>' : '';
      document.getElementById('ep-display').innerHTML = `
        <div class="ep-card">
          <div class="ep-top-bar">
            <div class="ep-meta">
              <span class="ep-badge">AQA Style</span>
              ${doneTag}
              <span class="ep-marks">${q.marks}</span>
            </div>
            <button class="ep-shuffle-btn" onclick="epNext()">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>
              Different Question
            </button>
          </div>
          <div class="ep-prompt">
            <p>Read the following extract from <strong>${q.scene}</strong> and then answer the question below.</p>
            <p style="margin-top:0.5rem;">${q.context}</p>
          </div>
          <div class="ep-extract">
            <div class="ep-extract-label">Extract — ${q.scene}</div>
            <div class="ep-extract-body">${extractHtml}</div>
          </div>
          <div class="ep-question-text">
            ${q.question}
            <span class="ep-question-sub">${q.sub}</span>
          </div>
          <div class="ep-timer-row">💡 Suggested time: <strong>50 minutes</strong> &nbsp;|&nbsp; Aim for at least 4–5 paragraphs.</div>
          <div class="ep-timer-control">
            <button class="ep-start-timer-btn" id="ep-start-timer-btn" onclick="epStartTimer()">Start Timer</button>
            <span class="ep-countdown" id="ep-countdown">50:00</span>
          </div>
          <textarea class="ep-textarea" id="ep-ta-${q.id}" placeholder="Write your answer here…"></textarea>
          <div class="ep-actions">
            <button class="ep-submit-btn" onclick="epShowMS(${q.id})">Show Mark Scheme ↓</button>
          </div>
          <div class="ep-markscheme" id="ep-ms-${q.id}">
            <div class="ep-ms-header">
              <span>📋 Mark Scheme</span>
              <span class="ep-ms-grade-label">Self-assess your response below</span>
            </div>
            <div class="ep-ms-section">
              <div class="ep-ms-title">AO1 — Read, understand &amp; respond (12 marks)</div>
              <ul class="ep-ms-list">${q.ms.ao1.map(p => `<li>${p}</li>`).join('')}</ul>
            </div>
            <div class="ep-ms-section">
              <div class="ep-ms-title">AO2 — Language, structure &amp; form (12 marks)</div>
              <ul class="ep-ms-list">${q.ms.ao2.map(p => `<li>${p}</li>`).join('')}</ul>
            </div>
            <div class="ep-ms-section">
              <div class="ep-ms-title">AO3 — Contexts (6 marks)</div>
              <ul class="ep-ms-list">${q.ms.ao3.map(p => `<li>${p}</li>`).join('')}</ul>
            </div>
            <div class="ep-ms-section" style="background:#f0f4ff;border-color:#c5d5f5;">
              <div class="ep-ms-title" style="color:#002366;">Level Descriptors</div>
              <div class="ep-levels">
                <div class="ep-level"><span class="ep-level-badge l4">Level 4</span><span><strong>22–30 marks:</strong> Perceptive, detailed analysis. Convincing and insightful. Judicious use of quotations. Sophisticated understanding of writer's methods.</span></div>
                <div class="ep-level"><span class="ep-level-badge l3">Level 3</span><span><strong>15–21 marks:</strong> Clear and explained response. Relevant use of quotations. Understands effects of writer's choices. Some context.</span></div>
                <div class="ep-level"><span class="ep-level-badge l2">Level 2</span><span><strong>8–14 marks:</strong> Some understanding of text. Attempts to comment on language. Limited or general quotations.</span></div>
                <div class="ep-level"><span class="ep-level-badge l1">Level 1</span><span><strong>1–7 marks:</strong> Simple or retelling. Little analysis. Quotations not always relevant.</span></div>
              </div>
            </div>
            <div class="ep-upgrade-banner">
              <span>✨</span>
              <div><strong>Want personalised feedback?</strong> Upgrade to <em>Modus Pro</em> for AI-powered marking — get a grade band, detailed comments on your specific answer, and tips to reach the next level.</div>
              <button class="ep-upgrade-btn" disabled>Coming Soon</button>
            </div>
          </div>
        </div>`;
    }

    function epShowMS(id) {
      const ms = document.getElementById('ep-ms-' + id);
      if (ms) {
        ms.classList.add('visible');
        ms.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      epAttempted.add(id);
      epUpdateProgress();
      // refresh done badge if present
      const meta = document.querySelector('.ep-meta');
      if (meta && !meta.querySelector('.ep-done-badge')) {
        const badge = document.createElement('span');
        badge.className = 'ep-done-badge';
        badge.textContent = '✓ Attempted';
        meta.insertBefore(badge, meta.children[1]);
      }
    }

    function epNext() {
      const q = epGetNext();
      if (!q) {
        epRender(null);
      } else {
        epRender(q);
      }
    }

    function epReset() {
      epAttempted.clear();
      epQueue = [];
      epCurrentId = null;
      epUpdateProgress();
      epNext();
    }

    // Init when exam practice section first shown — hook into showSection
    const _origShowSection = window.showSection;
    let epInited = false;
    function initEP() {
      if (!epInited) {
        epInited = true;
        epNext();
        epUpdateProgress();
      }
    }

        function showHome(e) {
      e.preventDefault();
      document.getElementById('home-page').style.display = 'block';
      ['macbeth-page','contact-page','about-page','privacy-page','cookie-page','exam-tips-page'].forEach(id => {
        const el = document.getElementById(id); if(el) el.style.display='none';
      });
      document.getElementById('sidebar').style.display = 'none';
    }

    function showExamTipsPage(e) {
      e.preventDefault();
      const _et0 = document.getElementById('home-page'); if(_et0) _et0.style.display='none';
      const _et1 = document.getElementById('macbeth-page'); if(_et1) _et1.style.display='none';
      const _et2 = document.getElementById('contact-page'); if(_et2) _et2.style.display='none';
      const _et3 = document.getElementById('about-page'); if(_et3) _et3.style.display='none';
      const _et4 = document.getElementById('privacy-page'); if(_et4) _et4.style.display='none';
      const _et5 = document.getElementById('cookie-page'); if(_et5) _et5.style.display='none';
      const _et6 = document.getElementById('exam-tips-page'); if(_et6) _et6.style.display='none';
      document.getElementById('exam-tips-page').style.display = 'block';
      document.getElementById('sidebar').style.display = 'none';
      document.querySelectorAll('.nav-item[id]').forEach(i => i.classList.remove('open'));
    }

    function showAboutPage(e) {
      e.preventDefault();
      ['home-page','macbeth-page','contact-page','privacy-page','cookie-page'].forEach(id => {
        const el = document.getElementById(id); if(el) el.style.display='none';
      });
      document.getElementById('about-page').style.display = 'block';
      document.getElementById('sidebar').style.display = 'none';
      document.querySelectorAll('.nav-item[id]').forEach(i => i.classList.remove('open'));
    }

    function showPrivacyPage(e) {
      e.preventDefault();
      ['home-page','macbeth-page','contact-page','about-page','cookie-page'].forEach(id => {
        const el = document.getElementById(id); if(el) el.style.display='none';
      });
      document.getElementById('privacy-page').style.display = 'block';
      document.getElementById('sidebar').style.display = 'none';
      document.querySelectorAll('.nav-item[id]').forEach(i => i.classList.remove('open'));
    }

    function showCookiePage(e) {
      e.preventDefault();
      ['home-page','macbeth-page','contact-page','about-page','privacy-page'].forEach(id => {
        const el = document.getElementById(id); if(el) el.style.display='none';
      });
      document.getElementById('cookie-page').style.display = 'block';
      document.getElementById('sidebar').style.display = 'none';
      document.querySelectorAll('.nav-item[id]').forEach(i => i.classList.remove('open'));
    }

    function showContactPage(e) {
      e.preventDefault();
      document.getElementById('home-page').style.display = 'none';
      document.getElementById('macbeth-page').style.display = 'none';
      document.getElementById('contact-page').style.display = 'block';
      document.getElementById('sidebar').style.display = 'none';
      document.querySelectorAll('.nav-item[id]').forEach(i => i.classList.remove('open'));
    }
  
document.addEventListener('DOMContentLoaded', () => {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.split('#')[0] === current) link.classList.add('active-page');
  });
});
