import calmImg from "@/assets/path-calm.jpg";
import strongImg from "@/assets/path-strong.jpg";
import beginImg from "@/assets/path-begin.jpg";
import innerImg from "@/assets/path-inner.jpg";
import livingImg from "@/assets/path-living.jpg";

export type Practice = { name: string; description: string; duration: string };

export type Phase = { label: string; title: string; text: string };

export type JourneyPathData = {
  id: string;
  title: string;
  seeking: string[];
  image: string;
  line: string;
  statement: string;
  overview: string;
  facts: { rhythm: string; session: string; suitedTo: string };
  phases: Phase[];
  outcomes: string[];
  practices: Practice[];
};

export const PATHS: JourneyPathData[] = [
  {
    id: "calm-mind",
    title: "Calm Mind",
    seeking: ["Reduce Stress", "Sleep Better"],
    image: calmImg,
    line: "For the mind that has been carrying too much.",
    statement: "Your journey begins with creating space.",
    overview:
      "This path works with the nervous system before it works with the body. You are taught to slow the breath, release held effort, and let attention rest — so that stress has somewhere to unwind instead of accumulating. Nothing is strenuous; almost all of it can be practised lying down or seated.",
    facts: {
      rhythm: "5 days a week",
      session: "20 – 30 minutes",
      suitedTo: "Overworked, restless or sleepless minds",
    },
    phases: [
      {
        label: "Week 1 – 2",
        title: "Arriving",
        text: "You learn to sit and follow the breath without changing it. Most people notice how busy the mind is — this is not failure, it is the first honest look.",
      },
      {
        label: "Week 3 – 6",
        title: "Softening",
        text: "Yoga Nidra and restorative postures are added in the evening. Sleep usually deepens here, and the body begins to let go of guarding it had forgotten it was doing.",
      },
      {
        label: "Week 7 onward",
        title: "Steadying",
        text: "Calm stops being something you do on a mat and becomes a place you can return to during an ordinary difficult day.",
      },
    ],
    outcomes: [
      "A breath you can lengthen at will",
      "Easier falling asleep and fewer night wakings",
      "Distance between a trigger and your reaction",
    ],
    practices: [
      {
        name: "Breath Meditation",
        description:
          "Using awareness of breath to develop calm, steady attention.",
        duration: "10 min, daily",
      },
      {
        name: "Yoga Nidra",
        description:
          "A guided practice for deep relaxation and conscious rest.",
        duration: "25 min, evenings",
      },
      {
        name: "Mindfulness Meditation",
        description: "Learning to observe thoughts and emotions with clarity.",
        duration: "15 min, daily",
      },
      {
        name: "Restorative Yoga",
        description:
          "Slow supported postures that let the nervous system soften.",
        duration: "30 min, twice weekly",
      },
    ],
  },
  {
    id: "strong-body",
    title: "Strong Body",
    seeking: ["Build Flexibility", "Increase Strength", "Feel Energetic"],
    image: strongImg,
    line: "For the body asking to move again.",
    statement: "Your journey begins with steadiness in the body.",
    overview:
      "Strength here is built through alignment and breath rather than force. You begin with foundational postures held long enough for the body to understand them, then gradually link them into flow. Energy rises not from pushing harder but from moving more accurately.",
    facts: {
      rhythm: "4 – 6 days a week",
      session: "35 – 50 minutes",
      suitedTo: "Stiff, sedentary or under-energised bodies",
    },
    phases: [
      {
        label: "Week 1 – 3",
        title: "Foundation",
        text: "Standing postures, hips and spine. You learn where your weight actually falls and how to breathe while working.",
      },
      {
        label: "Week 4 – 8",
        title: "Building",
        text: "Holds lengthen, sequences join together. Flexibility arrives as a by-product of strength, not stretching alone.",
      },
      {
        label: "Week 9 onward",
        title: "Flowing",
        text: "Vinyasa and pranayama combine. The practice becomes vigorous yet unhurried, and stamina carries into the rest of your day.",
      },
    ],
    outcomes: [
      "Noticeably more open hips, shoulders and spine",
      "Core and leg strength that holds posture upright",
      "Steady energy without stimulants",
    ],
    practices: [
      {
        name: "Asanas",
        description:
          "Foundational postures that build alignment, balance and ease.",
        duration: "20 min, daily",
      },
      {
        name: "Hatha Yoga",
        description:
          "Held postures and breath, developing strength with patience.",
        duration: "45 min, 3× weekly",
      },
      {
        name: "Vinyasa Yoga",
        description: "Movement linked to breath, building warmth and flow.",
        duration: "40 min, 2× weekly",
      },
      {
        name: "Pranayama",
        description:
          "Breath practices that expand capacity and steady energy.",
        duration: "10 min, daily",
      },
    ],
  },
  {
    id: "begin-practice",
    title: "Begin Your Practice",
    seeking: ["Learn Yoga", "Learn Meditation", "Beginner Journey"],
    image: beginImg,
    line: "For the one standing at the very beginning.",
    statement: "Your journey begins exactly where you are.",
    overview:
      "Nothing is assumed. You are shown what yoga is beyond exercise, what meditation actually asks of you, and a first sequence simple enough to keep. The aim of these weeks is not achievement but continuity — that you are still practising in a month.",
    facts: {
      rhythm: "Every day, briefly",
      session: "10 – 20 minutes",
      suitedTo: "Complete beginners with no prior practice",
    },
    phases: [
      {
        label: "Week 1",
        title: "Understanding",
        text: "Short teachings on what yoga and meditation are, followed by five minutes of simply sitting and breathing.",
      },
      {
        label: "Week 2 – 3",
        title: "First Practices",
        text: "A gentle sequence of six postures with breath. You learn how to begin and how to close a practice.",
      },
      {
        label: "Week 4",
        title: "Making It Yours",
        text: "You choose your time, your place and your length. The practice stops depending on motivation and starts depending on habit.",
      },
    ],
    outcomes: [
      "A clear idea of what you are practising and why",
      "A repeatable 15-minute daily sequence",
      "Confidence to step into any beginner class",
    ],
    practices: [
      {
        name: "What Is Yoga",
        description:
          "Understanding yoga as a path of union, not merely exercise.",
        duration: "Short teachings",
      },
      {
        name: "What Is Meditation",
        description:
          "Meeting the simple art of sitting with your own attention.",
        duration: "5 min, daily",
      },
      {
        name: "Basic Practices",
        description:
          "A gentle first sequence of breath, posture and stillness.",
        duration: "15 min, daily",
      },
    ],
  },
  {
    id: "inner-awareness",
    title: "Inner Awareness",
    seeking: ["Spiritual Journey", "Self Discovery"],
    image: innerImg,
    line: "For the seeker turning inward.",
    statement: "Your journey begins with listening.",
    overview:
      "This is the contemplative path. Practice is mostly seated, supported by study, and it asks for honesty rather than effort. Mantra gathers a scattered mind, silence lets it settle, and the teachings give what you experience a language and a direction.",
    facts: {
      rhythm: "Daily, with weekly study",
      session: "30 – 45 minutes",
      suitedTo: "Those already practising, seeking depth",
    },
    phases: [
      {
        label: "Month 1",
        title: "Gathering",
        text: "Mantra repetition gives the mind one thing to hold. Scatter reduces before stillness is even attempted.",
      },
      {
        label: "Month 2 – 3",
        title: "Listening",
        text: "Silent sitting lengthens. Technique falls away and you learn to remain without managing the experience.",
      },
      {
        label: "Ongoing",
        title: "Understanding",
        text: "Study of yoga philosophy alongside practice, so insight is grounded in a tradition rather than in mood.",
      },
    ],
    outcomes: [
      "A sustained daily sitting of 30 minutes or more",
      "Familiarity with the core teachings and their meaning",
      "Less identification with passing thought and emotion",
    ],
    practices: [
      {
        name: "Mantra Meditation",
        description: "Sound and repetition used to gather a scattered mind.",
        duration: "20 min, daily",
      },
      {
        name: "Silent Meditation",
        description:
          "Resting in stillness without technique, effort or expectation.",
        duration: "30 min, daily",
      },
      {
        name: "Philosophy Of Yoga",
        description:
          "The teachings that give practice its direction and depth.",
        duration: "Weekly study",
      },
      {
        name: "Spiritual Meditation",
        description:
          "Devotional attention that opens the heart toward the infinite.",
        duration: "As drawn to it",
      },
    ],
  },
  {
    id: "mindful-living",
    title: "Mindful Living",
    seeking: ["Healthy Lifestyle"],
    image: livingImg,
    line: "For a life lived with attention.",
    statement: "Your journey begins in the ordinary day.",
    overview:
      "Here the practice is not separate from your life. A short daily yoga and sitting anchor the day, and awareness is then extended into food, sleep, speech and work — the places where wellbeing is actually decided.",
    facts: {
      rhythm: "Woven through each day",
      session: "20 minutes, plus daily life",
      suitedTo: "Busy people wanting balance, not intensity",
    },
    phases: [
      {
        label: "Week 1 – 2",
        title: "An Anchor",
        text: "One short morning practice, the same time each day. Small enough that no day can excuse it.",
      },
      {
        label: "Week 3 – 5",
        title: "Extending",
        text: "Attention is carried into eating, walking and speaking. You start noticing the habits that quietly drain you.",
      },
      {
        label: "Week 6 onward",
        title: "Rhythm",
        text: "Sleep, meals and rest settle into a rhythm. Practice and life stop competing for the same hour.",
      },
    ],
    outcomes: [
      "A daily practice that survives busy weeks",
      "Calmer eating, sleeping and working patterns",
      "Awareness available in ordinary moments",
    ],
    practices: [
      {
        name: "Daily Yoga",
        description:
          "A short sustainable practice that fits inside real life.",
        duration: "15 min, mornings",
      },
      {
        name: "Meditation Practice",
        description:
          "A steady daily sitting, however brief, held with sincerity.",
        duration: "10 min, daily",
      },
      {
        name: "Conscious Living",
        description:
          "Bringing awareness to food, rest, speech and rhythm of the day.",
        duration: "Throughout the day",
      },
    ],
  },
];
