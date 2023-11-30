class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

export class Trie {
  #root: TrieNode;

  constructor(words: string[] = []) {
    if (words && Array.isArray(words)) {
      this.#root = new TrieNode();
      for (const word of words.filter((item) => typeof item === "string")) {
        this.add(word);
      }
    } else {
      throw new Error("Please pass a valid non-empty Array of strings");
    }
  }

  add(word: string): void {
    if (!word || typeof word !== "string") {
      throw new Error("Invalid input: Word must be a non-empty string.");
    }

    let node = this.#root;

    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }

    node.isEndOfWord = true;
  }

  delete(word: string): void {
    if (typeof word !== 'string' || word.length === 0) {
        throw new Error('Invalid input: Word must be a non-empty string.');
    }

    let node = this.#root;
    const stack: [TrieNode, number][] = [];
    let index = 0;

    // Traverse the Trie to find the node corresponding to the last character of the word
    while (index < word.length) {
        const char = word[index];
        if (!node.children.has(char)) {
           return;
        }

        stack.push([node, index]);
        node = node.children.get(char)!;
        index++;
    }

    // Mark the endOfWord as false to "delete" the word
    node.isEndOfWord = false;

    // Process the stack to remove nodes with no children after the word is deleted
    while (stack.length > 0) {
        const [currentNode, currentIndex] = stack.pop()!;
        const currentChar = word[currentIndex];

        if (currentNode.children.size === 0 && !currentNode.isEndOfWord) {
            // Delete the current node if it has no children and is not the end of another word
            currentNode.children.delete(currentChar);
        } else {
            // Break the loop if a node with children or the end of another word is encountered
            break;
        }
    }
}

  contains(word: string): boolean {
    if (!word || typeof word !== "string") {
      throw new Error("Invalid input: Word must be a non-empty string.");
    }

    let node = this.#root;

    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char)!;
    }

    return node.isEndOfWord;
  }
}
