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
                    <input type="search" placeholder="Search">
                </div>
                <button type="submit" class="media_scan">Scan Library</button>
            </nav>
            <div class="media__box">
                <div class="box__content"></div>
                <div class="box__content"></div>
                <div class="box__content"></div>
                <div class="box__content"></div>
                <div class="box__content"></div>
                <div class="box__content"></div>
                <div class="box__content"></div>
                <div class="box__content"></div>
                <div class="box__content"></div>
                <div class="box__content"></div>
                <div class="box__content"></div>
                <div class="box__content"></div>
                <div class="box__content"></div>
                <div class="box__content"></div>
                <div class="box__content"></div>
            </div>
        </div>
    `;
}