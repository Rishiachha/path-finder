import calmImg from "@/assets/path-calm.jpg";
import strongImg from "@/assets/path-strong.jpg";
import beginImg from "@/assets/path-begin.jpg";
import innerImg from "@/assets/path-inner.jpg";
import livingImg from "@/assets/path-living.jpg";

export type Practice = { name: string; description: string };

export type JourneyPathData = {
  id: string;
  title: string;
  seeking: string[];
  image: string;
  line: string;
  statement: string;
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
    practices: [
      {
        name: "Breath Meditation",
        description:
          "Using awareness of breath to develop calm, steady attention.",
      },
      {
        name: "Yoga Nidra",
        description:
          "A guided practice for deep relaxation and conscious rest.",
      },
      {
        name: "Mindfulness Meditation",
        description:
          "Learning to observe thoughts and emotions with clarity.",
      },
      {
        name: "Restorative Yoga",
        description:
          "Slow supported postures that let the nervous system soften.",
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
    practices: [
      {
        name: "Asanas",
        description:
          "Foundational postures that build alignment, balance and ease.",
      },
      {
        name: "Hatha Yoga",
        description:
          "Held postures and breath, developing strength with patience.",
      },
      {
        name: "Vinyasa Yoga",
        description: "Movement linked to breath, building warmth and flow.",
      },
      {
        name: "Pranayama",
        description:
          "Breath practices that expand capacity and steady energy.",
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
    practices: [
      {
        name: "What Is Yoga",
        description:
          "Understanding yoga as a path of union, not merely exercise.",
      },
      {
        name: "What Is Meditation",
        description:
          "Meeting the simple art of sitting with your own attention.",
      },
      {
        name: "Basic Practices",
        description:
          "A gentle first sequence of breath, posture and stillness.",
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
    practices: [
      {
        name: "Mantra Meditation",
        description: "Sound and repetition used to gather a scattered mind.",
      },
      {
        name: "Silent Meditation",
        description:
          "Resting in stillness without technique, effort or expectation.",
      },
      {
        name: "Philosophy Of Yoga",
        description:
          "The teachings that give practice its direction and depth.",
      },
      {
        name: "Spiritual Meditation",
        description:
          "Devotional attention that opens the heart toward the infinite.",
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
    practices: [
      {
        name: "Daily Yoga",
        description:
          "A short sustainable practice that fits inside real life.",
      },
      {
        name: "Meditation Practice",
        description:
          "A steady daily sitting, however brief, held with sincerity.",
      },
      {
        name: "Conscious Living",
        description:
          "Bringing awareness to food, rest, speech and rhythm of the day.",
      },
    ],
  },
];
