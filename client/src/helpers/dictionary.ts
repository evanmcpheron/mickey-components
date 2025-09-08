export async function getRandomWordFromLetter(letter: string): Promise<string> {
  const res = await fetch(`../../DICTIONARY/${letter} words.txt`);
  const text = await res.text();
  const words = text.split("\n").filter(Boolean);
  return words[Math.floor(Math.random() * words.length)];
}

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Text copied to clipboard successfully!");
    return true;
  } catch (err) {
    console.error("Failed to copy text: ", err);
    return false;
  }
};

export const generateRandomWords = async ({
  length,
  separator = "-",
  useCapitalLetters = false,
  useDigits = false,
}: {
  length: number;
  separator?: string;
  useCapitalLetters?: boolean;
  useDigits?: boolean;
}) => {
  const letter = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const digitMap: Record<string, string> = {
    a: "4",
    A: "4",
    e: "3",
    E: "3",
    i: "1",
    I: "1",
    l: "1",
    L: "1",
    o: "0",
    O: "0",
    s: "5",
    S: "5",
    t: "7",
    T: "7",
  };

  const words: string[] = [];

  for (let i = 0; i < length; i++) {
    let word = await getRandomWordFromLetter(
      letter[Math.floor(Math.random() * letter.length)]
    );
    if (useCapitalLetters) {
      word = [...word]
        .map((ch) => (Math.random() < 0.2 ? ch.toUpperCase() : ch))
        .join("");
    }

    if (useDigits) {
      word = [...word]
        .map((ch) => (digitMap[ch] && Math.random() < 0.2 ? digitMap[ch] : ch))
        .join("");
    }

    words.push(word);
  }

  console.log(words);
  return words.join(separator);
};

export const generateRandomString = ({
  length,
  useCapitalLetters = true,
  useDigits = true,
  useSymbols = true,
  required = [],
  omit = [],
}: {
  length: number;
  useCapitalLetters?: boolean;
  useDigits?: boolean;
  useSymbols?: boolean;
  required?: string[];
  omit?: string[];
}) => {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const symbols = "@!$%&*<>^#";

  let pool = lowercase;

  if (useCapitalLetters) pool += uppercase;
  if (useDigits) pool += digits;
  if (useSymbols) pool += symbols;

  if (omit && omit.length > 0) {
    pool = [...pool].filter((ch) => !omit.includes(ch)).join("");
  }

  if (pool.length === 0) {
    throw new Error("No characters available for string generation.");
  }

  const result: string[] = [];

  if (required && required.length > 0) {
    for (const req of required) {
      if (omit.includes(req)) {
        throw new Error(`Required character "${req}" is also in omit list.`);
      }
      result.push(req);
    }
  }

  while (result.length < length) {
    const randomChar = pool[Math.floor(Math.random() * pool.length)];
    result.push(randomChar);
  }

  // Shuffle the result so required chars aren't always at the front
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result.join("");
};
