import React, { useState, useEffect } from "react";
import { Container, Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';

const Fragments = () => {
  // Hard-coded philosophical quote journal entries (date removed)
  const entries = [
  { author: "Socrates", quote: ["The unexamined life is not worth living.", "— Socrates"] },
  { author: "Friedrich Nietzsche", quote: ["He who has a why to live can bear almost any how.", "— Friedrich Nietzsche"] },
  { author: "Aristotle", quote: ["We are what we repeatedly do. Excellence, then, is not an act, but a habit.", "— Aristotle"] },
  { author: "Marcus Aurelius", quote: ["You have power over your mind — not outside events. Realize this, and you will find strength.", "— Marcus Aurelius"] },
  { author: "Lao Tzu", quote: ["A good traveler has no fixed plans and is not intent on arriving.", "— Lao Tzu"] },
  { author: "Rumi", quote: ["Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.", "— Rumi"] },
  { author: "Confucius", quote: ["It does not matter how slowly you go as long as you do not stop.", "— Confucius"] },
  { author: "René Descartes", quote: ["Cogito, ergo sum. (I think, therefore I am.)", "— René Descartes"] },
  { author: "Søren Kierkegaard", quote: ["Life can only be understood backwards; but it must be lived forwards.", "— Søren Kierkegaard"] },
  { author: "Epictetus", quote: ["It's not what happens to you, but how you react to it that matters.", "— Epictetus"] },
  { author: "Plato", quote: ["Wise men speak because they have something to say; fools because they have to say something.", "— Plato"] },
  { author: "Immanuel Kant", quote: ["Science is organized knowledge. Wisdom is organized life.", "— Immanuel Kant"] },
  { author: "Jean-Paul Sartre", quote: ["Man is condemned to be free.", "— Jean-Paul Sartre"] },
  { author: "Simone de Beauvoir", quote: ["One's life has value so long as one attributes value to the life of others, by means of love, friendship, devotion.", "— Simone de Beauvoir"] },
  { author: "Thomas Aquinas", quote: ["Beware the man of one book.", "— Thomas Aquinas"] },
  { author: "John Locke", quote: ["Reading furnishes the mind only with materials of knowledge; it is thinking that makes what we read ours.", "— John Locke"] },
  { author: "Blaise Pascal", quote: ["All of humanity's problems stem from man's inability to sit quietly in a room alone.", "— Blaise Pascal"] },
  { author: "David Hume", quote: ["Beauty in things exists in the mind which contemplates them.", "— David Hume"] },
  { author: "Michel de Montaigne", quote: ["A man who fears suffering is already suffering from what he fears.", "— Michel de Montaigne"] },
  { author: "Seneca", quote: ["We suffer more often in imagination than in reality.", "— Seneca"] },
  { author: "Aristotle", quote: ["Happiness depends upon ourselves.", "— Aristotle"] },
  { author: "George Berkeley", quote: ["To be is to be perceived.", "— George Berkeley"] },
  { author: "Socrates", quote: ["The only thing I know is that I know nothing.", "— Socrates"] },
  { author: "Buddha", quote: ["Nothing can harm you as much as your own thoughts unguarded.", "— Buddha"] },
  { author: "Immanuel Kant", quote: ["Act only according to that maxim whereby you can at the same time will that it should become a universal law.", "— Immanuel Kant"] },
  { author: "Plato", quote: ["The greatest wealth is to live content with little.", "— Plato"] },
  { author: "Albert Einstein", quote: ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "— Albert Einstein"] },
  { author: "Epicurus", quote: ["Do what you will, but harm no one.", "— Epicurus"] },
  { author: "Socrates", quote: ["The only real wisdom is knowing you know nothing.", "— Socrates"] },
  { author: "Marcus Aurelius", quote: ["Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.", "— Marcus Aurelius"] },
  { author: "Heraclitus", quote: ["No man ever steps in the same river twice, for it's not the same river and he's not the same man.", "— Heraclitus"] },
  { author: "John Stuart Mill", quote: ["Liberty consists in doing what one desires.", "— John Stuart Mill"] },
  { author: "Seneca", quote: ["The greatest remedy for anger is delay.", "— Seneca"] },
  { author: "Rumi", quote: ["If you are irritated by every rub, how will your mirror be polished?", "— Rumi"] },
  { author: "Denis Diderot", quote: ["The first step toward philosophy is incredulity.", "— Denis Diderot"] },
  { author: "Friedrich Nietzsche", quote: ["One must still have chaos in oneself to be able to give birth to a dancing star.", "— Friedrich Nietzsche"] },
  { author: "Pierre Teilhard de Chardin", quote: ["We are not human beings having a spiritual experience; we are spiritual beings having a human experience.", "— Pierre Teilhard de Chardin"] },
  { author: "Aristotle", quote: ["To enjoy the things we ought and to hate the things we ought has the greatest bearing on excellence of character.", "— Aristotle"] },
  { author: "Leonardo da Vinci", quote: ["Simplicity is the ultimate sophistication.", "— Leonardo da Vinci"] },
  { author: "Aristotle", quote: ["The good for man is an activity of the soul in conformity with excellence or virtue.", "— Aristotle"] },
  { author: "Voltaire", quote: ["The more I read, the more I acquire, the more certain I am that I know nothing.", "— Voltaire"] },
  { author: "Marcus Aurelius", quote: ["The soul becomes dyed with the color of its thoughts.", "— Marcus Aurelius"] },
  { author: "Aristotle", quote: ["Knowing yourself is the beginning of all wisdom.", "— Aristotle"] },
  { author: "John Dewey", quote: ["We do not learn from experience; we learn from reflecting on experience.", "— John Dewey"] },
  { author: "Epictetus", quote: ["Freedom is secured not by the fulfilling of one's desires, but by the removal of desire.", "— Epictetus"] },
  { author: "Confucius", quote: ["He who conquers himself is the mightiest warrior.", "— Confucius"] },
  { author: "Buddha", quote: ["To understand everything is to forgive everything.", "— Buddha"] },
  { author: "Aristotle", quote: ["Patience is bitter, but its fruit is sweet.", "— Aristotle"] },
  { author: "Plato", quote: ["The measure of a man is what he does with power.", "— Plato"] },
  { author: "Epicurus", quote: ["Do not spoil what you have by desiring what you have not.", "— Epicurus"] },
  { author: "Sigmund Freud", quote: ["Out of your vulnerabilities will come your strength.", "— Sigmund Freud"] },
  { author: "Aristotle", quote: ["The energy of the mind is the essence of life.", "— Aristotle"] },
  { author: "Seneca", quote: ["We are more often frightened than hurt; and we suffer more in imagination than in reality.", "— Seneca"] },
  { author: "Socrates", quote: ["The secret of change is to focus all your energy not on fighting the old, but on building the new.", "— Socrates"] },
  { author: "Henry David Thoreau", quote: ["The price of anything is the amount of life you exchange for it.", "— Henry David Thoreau"] },
  { author: "Voltaire", quote: ["Faith consists in believing when it is beyond the power of reason to believe.", "— Voltaire"] },
  { author: "Victor Hugo", quote: ["He who opens a school door, closes a prison.", "— Victor Hugo"] },
  { author: "Leonardo da Vinci", quote: ["Nothing strengthens authority so much as silence.", "— Leonardo da Vinci"] },
  { author: "Buddha", quote: ["The mind is everything. What you think you become.", "— Buddha"] },
  { author: "Plato", quote: ["Be kind, for everyone you meet is fighting a harder battle.", "— Plato"] },
  { author: "Lao Tzu", quote: ["Time is a created thing. To say 'I don't have time' is to say 'I don't want to.'", "— Lao Tzu"] },
  { author: "Kurt Vonnegut", quote: ["We are what we pretend to be, so we must be careful what we pretend to be.", "— Kurt Vonnegut"] },
  { author: "Franklin D. Roosevelt", quote: ["The only limit to our realization of tomorrow will be our doubts of today.", "— Franklin D. Roosevelt"] },
  { author: "Aristotle", quote: ["It is the mark of an educated mind to be able to entertain a thought without accepting it.", "— Aristotle"] },
  { author: "Confucius", quote: ["When anger rises, think of the consequences.", "— Confucius"] },
  { author: "George Washington", quote: ["The harder the conflict, the greater the triumph.", "— George Washington"] },
  { author: "William Shakespeare", quote: ["There is nothing either good or bad, but thinking makes it so.", "— William Shakespeare"] },
  { author: "Albert Einstein", quote: ["The true sign of intelligence is not knowledge but imagination.", "— Albert Einstein"] },
  { author: "Seneca", quote: ["He who is brave is free.", "— Seneca"] },
  { author: "Ludwig Wittgenstein", quote: ["Whereof one cannot speak, thereof one must be silent.", "— Ludwig Wittgenstein"] },
  { author: "Socrates", quote: ["Not life, but good life, is to be chiefly valued.", "— Socrates"] },
  { author: "Oscar Wilde", quote: ["To live is the rarest thing in the world. Most people exist, that is all.", "— Oscar Wilde"] },
  { author: "Anaïs Nin", quote: ["We do not see things as they are, we see them as we are.", "— Anaïs Nin"] },
  { author: "Viktor Frankl", quote: ["When we are no longer able to change a situation, we are challenged to change ourselves.", "— Viktor Frankl"] },
  { author: "Marcus Aurelius", quote: ["Be tolerant with others and strict with yourself.", "— Marcus Aurelius"] },
  { author: "Epictetus", quote: ["The essence of philosophy is that a man should so live that his happiness shall depend as little as possible on external things.", "— Epictetus"] },
  { author: "Socrates", quote: ["There is only one good, knowledge, and one evil, ignorance.", "— Socrates"] },
  { author: "René Descartes", quote: ["Doubt is the origin of wisdom.", "— René Descartes"] },
  { author: "Buddha", quote: ["Peace comes from within. Do not seek it without.", "— Buddha"] },
  { author: "Friedrich Nietzsche", quote: ["To live is to suffer, to survive is to find some meaning in the suffering.", "— Friedrich Nietzsche"] },
  { author: "Anton Chekhov", quote: ["Man is what he believes.", "— Anton Chekhov"] },
  { author: "Lao Tzu", quote: ["He who is contented is rich.", "— Lao Tzu"] },
  { author: "Aristotle", quote: ["You will never do anything in this world without courage.", "— Aristotle"] },
  { author: "Marcus Aurelius", quote: ["It is not death that a man should fear, but never beginning to live.", "— Marcus Aurelius"] },
  { author: "John Locke", quote: ["The mind is furnished with ideas by experience alone.", "— John Locke"] },
  { author: "Thomas Edison", quote: ["The most certain way to succeed is always to try just one more time.", "— Thomas Edison"] },
  { author: "Gertrude Stein", quote: ["We are always the same age inside.", "— Gertrude Stein"] },
  { author: "Ernest Hemingway", quote: ["Courage is grace under pressure.", "— Ernest Hemingway"] },
  { author: "Socrates", quote: ["The greatest way to live with honor is to be what we pretend to be.", "— Socrates"] },
  { author: "Mahatma Gandhi", quote: ["Truth never damages a cause that is just.", "— Mahatma Gandhi"] },
  { author: "Immanuel Kant", quote: ["Happiness is not an ideal of reason but of imagination.", "— Immanuel Kant"] },
  { author: "Confucius", quote: ["He who depends on himself will attain the greatest happiness.", "— Confucius"] },
  { author: "Zen Proverb", quote: ["To be calm is the highest achievement of the self.", "— Zen Proverb"] },
  { author: "African Proverb", quote: ["If you want to go fast, go alone. If you want to go far, go together.", "— African Proverb"] },
  { author: "Bonnie Friedman", quote: ["An unhurried sense of time is in itself a form of wealth.", "— Bonnie Friedman"] },
  { author: "Lao Tzu", quote: ["Silence is a source of great strength.", "— Lao Tzu"] },
  { author: "Marcus Aurelius", quote: ["The obstacle is the way.", "— Marcus Aurelius"] },
  { author: "Plato", quote: ["You can discover more about a person in an hour of play than in a year of conversation.", "— Plato"] },
  { author: "Ernest Hemingway", quote: ["The world breaks everyone, and afterward, many are strong at the broken places.", "— Ernest Hemingway"] },
  { author: "Ralph Waldo Emerson", quote: ["Adopt the pace of nature: her secret is patience.", "— Ralph Waldo Emerson"] },
  { author: "Honoré de Balzac", quote: ["The more one judges, the less one loves.", "— Honoré de Balzac"] },
  { author: "Friedrich Nietzsche", quote: ["There are no facts, only interpretations.", "— Friedrich Nietzsche"] },
  { author: "Rumi", quote: ["The wound is the place where the Light enters you.", "— Rumi"] },
  { author: "Viktor Frankl", quote: ["Between stimulus and response there is a space. In that space is our power to choose our response.", "— Viktor Frankl"] },
  { author: "Heraclitus", quote: ["You cannot step twice into the same river.", "— Heraclitus"] },
  { author: "Mark Twain", quote: ["Kindness is the language which the deaf can hear and the blind can see.", "— Mark Twain"] },
  { author: "Ralph Waldo Emerson", quote: ["Do not go where the path may lead, go instead where there is no path and leave a trail.", "— Ralph Waldo Emerson"] },
  { author: "Paramahansa Yogananda", quote: ["He who has peace in his heart has everything.", "— Paramahansa Yogananda"] },
  { author: "David Viscott", quote: ["To love and be loved is to feel the sun from both sides.", "— David Viscott"] },
  { author: "Nikola Tesla", quote: ["Be alone, that is the secret of invention; be alone, that is when ideas are born.", "— Nikola Tesla"] },
  { author: "Albert Einstein", quote: ["In the middle of difficulty lies opportunity.", "— Albert Einstein"] },
  { author: "Oscar Wilde", quote: ["Be yourself; everyone else is already taken.", "— Oscar Wilde"] },
  { author: "Mahatma Gandhi", quote: ["You must be the change you wish to see in the world.", "— Mahatma Gandhi"] },
  { author: "Confucius", quote: ["The man who moves a mountain begins by carrying away small stones.", "— Confucius"] },
  { author: "Steve Maraboli", quote: ["The greatest step toward a life of simplicity is to learn to let go.", "— Steve Maraboli"] },
  { author: "James Baldwin", quote: ["Not everything that is faced can be changed, but nothing can be changed until it is faced.", "— James Baldwin"] },
  { author: "Albert Einstein", quote: ["A calm and modest life brings more happiness than the pursuit of success combined with constant restlessness.", "— Albert Einstein"] }
];

  // Pick n unique random items from an array
  const pickRandom = (arr, n) => {
    if (!Array.isArray(arr)) return [];
    if (n >= arr.length) return [...arr];
    const res = [];
    const taken = new Set();
    while (res.length < n) {
      const idx = Math.floor(Math.random() * arr.length);
      if (!taken.has(idx)) {
        taken.add(idx);
        res.push(arr[idx]);
      }
    }
    return res;
  };

  const [visible, setVisible] = useState(() => pickRandom(entries, 5));

  useEffect(() => {
    // select 5 random entries when component mounts
    setVisible(pickRandom(entries, 5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRefresh = () => setVisible(pickRandom(entries, 5));

  return (
    <Container
      sx={{
        pb: 3,
        alignItems: "center",
        background: "linear-gradient(135deg, #f8fafc 0%, #e3e9f3 100%)",
        border: "none",
        borderRadius: 5,
        boxShadow: 6,
        minWidth: { xs: "100%", sm: 0 },
        pt: 4,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            color: "primary.main",
          }}
        >
          Fragments
        </Typography>
        <IconButton aria-label="refresh fragments" onClick={handleRefresh} sx={{ ml: 1 }}>
          <RefreshIcon />
        </IconButton>
      </Box>
      {visible.map((entry, idx) => (
        <Card
          key={entry.author + idx}
          sx={{
            minWidth: 275,
            mt: idx === 0 ? 0 : 3,
            borderRadius: 4,
            boxShadow: 4,
            background: "rgba(255,255,255,0.95)",
            px: 2,
            py: 1,
            maxWidth: 700,
            mx: "auto",
          }}
        >
          <CardContent>
            <Box sx={{ mt: 0 }}>
              {entry.quote.map((c, i) => (
                <Typography key={i} sx={{ mb: 1 }}>
                  {c}
                </Typography>
              ))}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Fragments;
