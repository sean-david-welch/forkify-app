import View from './View.js';
import icons from 'url:../../img/icons.svg';

class resultsView extends View {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipes found for your query! Please try again :)';
    _message = '';

    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join('');
    }

    _generateMarkupPreview(result) {
        return `
        <li>
            <a class="results__link" href="#${result.id}">
                <figure class="results__fig">
                    <img src="${result.image}" alt="${result.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${result.title}</h4>
                    <p class="results__author">${result.publisher}</p>
                </div>
            </a>
        </li>`;
    }
}

export default new resultsView();
