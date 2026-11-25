export function renderMediaPlayer() {
    return `
        <div class="media__container">
            <nav class="media__navbar">
                <div class="media__feature">
                    <div class="media__button media__all media--active" data-filter="all">
                        <span>All</span>
                    </div>
                    <div class="media__button media__movie" data-filter="movie">
                        <span>Movie</span>
                    </div>
                    <div class="media__button media__tvShow" data-filter="tvShow">
                        <span>Tv Show</span>
                    </div>
                    <div class="media__button media__music" data-filter="music">
                        <span>Music</span>
                    </div>
                </div>
                <div class="media__search">
                    <input type="search" id="mediaSearch" placeholder="Search">
                </div>
                <button type="submit" class="media_scan">Scan Library</button>
            </nav>
            <div class="media__box">
                <div class="box__content" data-category="tvShow">
                    <img src=../img/tvShow/Cyberpunk_Edgerunners/Cyberpunk_Edgerunners_poster.jpg>
                    <span class="media__title">Cyberpunk: Edgerunners</span>
                </div>
                <div class="box__content" data-category="movie">
                    <img src=../img/movie/suzume/suzume.jpg>
                    <span class="media__title">Suzume</span>
                </div>
                <div class="box__content" data-category="music">
                    <img src=../img/music/ado/usseewa.jpg>
                    <span class="media__title">Ado - Usseewa</span>
                </div>
                <div class="box__content" data-category="tvShow">
                    <img src=../img/tvShow/yaniNeko/yani.jpg>
                    <span class="media__title">Yani Neko (Chainsmoker Cat)</span>
                </div>
                <div class="box__content" data-category="tvShow">
                    <img src=../img/tvShow/frieren/frie.jpg>
                    <span class="media__title">Sousou no Frieren</span>
                </div>
                <div class="box__content" data-category="movie">
                    <img src=../img/movie/chainshow/reze.jpg>
                    <span class="media__title">Chainsaw Man Movie: Reze-hen</span>
                </div>
                <div class="box__content" data-category="movie">
                    <img src=../img/movie/avenger/thanos.jpg>
                    <span class="media__title">Avengers: Infinity War</span>
                </div>
                <div class="box__content" data-category="music">
                    <img src=../img/music/yorushika/ghost_in_a_flower.jpg>
                    <span class="media__title">Ghost In A Flower</span>
                </div>
                <div class="box__content" data-category="music">
                    <img src=../img/music/one_direction/take_me_home.jpg>
                    <span class="media__title">Take Me Home</span>
                </div>
                <div class="box__content" data-category="tvShow">
                    <img src=../img/tvShow/fgo/babylonia.jpg>
                    <span class="media__title">Fate/Grand Order: Zettai Majuu Sensen Babylonia</span>
                </div>
                <div class="box__content" data-category="movie">
                    <img src=../img/movie/type_moon/Mahoutsukai_no_Yoru.jpg>
                    <span class="media__title">Mahoutsukai no Yoru</span>
                </div>
                <div class="box__content" data-category="tvShow">
                    <img src=../img/tvSHow/bocchi/rock.jpg>
                    <span class="media__title">bocchi the rock</span>
                </div>
                <div class="box__content" data-category="tvShow">
                    <img src=../img/tvSHow/neko/herb.jpg>
                    <span class="media__title">The Apothecary Diaries</span>
                </div>
                <div class="box__content" data-category="tvShow">
                    <img src=../img/tvSHow/violet/garden.jpg>
                    <span class="media__title">Violet Evergarden</span>
                </div>
                <div class="box__content" data-category="tvShow">
                    <img src=../img/tvShow/tensura/rimuru.jpg>
                    <span class="media__title">Tensei shitara Slime Datta Ken 2nd Season</span>
                </div>
            </div>
        </div>
    `;
}

export function initMediaListeners() {
    const filterButtons = document.querySelectorAll('.media__feature .media__button[data-filter]');
    const searchInput = document.getElementById('mediaSearch');
    const mediaBoxes = document.querySelectorAll('.media__box .box__content');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('media--active'));
            button.classList.add('media--active');

            const filterValue = button.getAttribute('data-filter');

            mediaBoxes.forEach(box => {
                const category = box.getAttribute('data-category');

                if (filterValue === 'all') {
                    box.style.display = '';
                } else if (filterValue === category) {
                    box.style.display = '';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();

            mediaBoxes.forEach(box => {
                const titleSpan = box.querySelector('.media__title');
                const titleText = titleSpan ? titleSpan.textContent.toLowerCase() : '';

                if (titleText.includes(searchTerm)) {
                    box.style.display = '';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    }
}