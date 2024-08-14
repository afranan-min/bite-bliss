import React from 'react';

function Carousal({ search, setSearch }) {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption" style={{ zIndex: "10" }}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://th.bing.com/th/id/OIP.4PKS2_RBBJLhE7ttUn9KSgHaEK?rs=1&pid=ImgDetMain" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="hi-its-suppose to-be-img" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.pinimg.com/originals/0d/ab/65/0dab65e754c84757d193cc8bae023e8b.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="hi-its-suppose to-be-img" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://th.bing.com/th/id/OIP.AKlEWVEkxeDGOguKQ0puCwHaE7?rs=1&pid=ImgDetMain" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="hi-its-suppose to-be-img" />
                    </div>
                    <div className="carousel-item">
                        <img src="http://ts1.mm.bing.net/th?id=OIP.YRmxbXO8dxw7xyFPRBpzDQHaE7&pid=15.1" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="hi-its-suppose to-be-img" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://th.bing.com/th/id/OIP.nYsGVNV43mMZU4B9HabQDAHaE8?w=255&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="hi-its-suppose to-be-img" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://th.bing.com/th/id/R.6df83d5175de63f0fad734f677df9a80?rik=AvNTNAQJAgz3cg&pid=ImgRaw&r=0" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="hi-its-suppose to-be-img" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://th.bing.com/th/id/OIP.oneVHycUcxWXVLfTs-J8EgAAAA?w=278&h=183&c=7&r=0&o=5&dpr=1.1&pid=1.7" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="hi-its-suppose to-be-img" />
                    </div>
                    <div className="carousel-item">
                        <img src="http://ts2.mm.bing.net/th?id=OIP.trgvc8x9hAO3VSs7z5Q9XwHaLH&pid=15.1" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="hi-its-suppose to-be-img" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://th.bing.com/th/id/OIP.yag1M9SaZvqG6NgC1u4K9wHaFk?w=249&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="hi-its-suppose to-be-img" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="hi-its-suppose to-be-img" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://th.bing.com/th/id/OIP.-lSl6Qr9yxUzbPqD57vlYgAAAA?w=362&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="hi-its-suppose to-be-img" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://th.bing.com/th/id/OIP.yag1M9SaZvqG6NgC1u4K9wHaFk?w=249&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="hi-its-suppose to-be-img" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i2-prod.manchestereveningnews.co.uk/incoming/article26983805.ece/ALTERNATES/s615b/1_36F33AC1-9911-4A0D-9B34-0760FD1186EEjpeg.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="hi-its-suppose to-be-img" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousal;
