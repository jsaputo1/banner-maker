$(document).ready(function () {
    const generateRating = (rating) => {
        for (let i = 0; i < rating; i++) {
            $('#stars').append(
                `<img src="star-solid.svg" />`
            );
        }
    };

    const generateGenres = (input) => {
        const genres = [input.split(',')];
        genres[0].forEach(genre => {
            $('#category-wrapper').append(
                `<span class="category">${genre}</span>`
            );
        });
    };

    const generateImage = (input) => {
        $('#display-image').css('background-image', `url(${input})`);
    };

    $('#file').on("change", function () {
        const [imageUrl] = this.files;
        $("#submit").on("click", function () {
            $('.banner-wrap').removeClass('d-none');
            $('.banner-wrap').empty();
            $('.banner-wrap').append(
                `<div class="d-flex flex-wrap flex-column justify-content-center align-items-center">
                    <figure class="mb-0" id="display-image"></figure>
                    <img id="output" width="200" />	            
                    </figure>
                    <h1 class="text-uppercase mb-0" id="header">${$('#heading-input').val()}</h1>
                    <h2 class="text-uppercase" id="sub-header">${$('#sub-heading-input').val()}</h2>
                    <div class="stars mb-3" id="stars"></div>
                    <div class="category-wrapper" id="category-wrapper"></div>
                    <hr>
                    <div class="year" id="year">
                        <span>${$('#year-input').val()}</span>
                    </div>
                </div>`
            );
            generateImage(URL.createObjectURL(imageUrl));
            generateRating($('#rating-input').val());
            generateGenres($('#genre-input').val());
        });
    });

});
