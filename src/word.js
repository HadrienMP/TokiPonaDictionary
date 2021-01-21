export class WordElement {
  constructor(word, meanings) {
    this._word = word;
    this._meanings = meanings;
  }

  asHTMLElement() {
    if (!this._element) this._buildHTMLElement();

    return this._element;
  }

  _buildHTMLElement() {
    const word = document.createElement('div');
    word.className = 'speech-type';
    word.textContent = this._word;

    let meanings;
    for (const speechType in this._meanings) {
      const speechTypeElement = document.createElement('span');
      speechTypeElement.className = 'speech-type';
      speechTypeElement.textContent = speechType;

      meanings.append(speechTypeElement);

      const meaningElement = document.createElement('span');
      speechTypeElement.textContent = this._meanings[speechType];

      meanings.append(meaningElement);
    }

    meanings.forEach(meaningElement => word.appendChild(meaningElement));

    this._element = word;
  }
}
