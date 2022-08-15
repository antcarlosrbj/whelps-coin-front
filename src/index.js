import ReactDOM from 'react-dom';
import App from './components/App.js';

import './css/reset.css';
import './css/style.css';
import './css/animation.css';

window.addEventListener('scroll', () => {
    document.querySelectorAll('.content').forEach(content => {
        if (content.getBoundingClientRect().top < window.innerHeight*.75) {
            content.classList.remove("hidden");
            content.classList.add("visible");
        };
    })
});

ReactDOM.render(<App />, document.querySelector('.root'));

