$(document).ready(function () {
    const books = [
        {
            "id": 1,
            "image": "images/book1.jpg",
            "name": "The Lightning Thief",
            "Author": "Rick Riordan",
            "description": "Join Percy Jackson, a demigod with a knack for trouble, as he discovers his true identity and embarks on a thrilling adventure to prevent a war among the gods. With his trusty friends by his side, Percy faces mythical monsters and uncovers secrets that will change his life forever.",
            "genre": "Fantasy",
            "ratings": 4.5,
            "availability": "Available"
        },
        {
            "id": 2,
            "image": "images/book2.jpg",
            "name": "The Sea of Monsters",
            "Author": "Rick Riordan",
            "description": "In the second installment of the Percy Jackson series, our hero sets sail on the treacherous Sea of Monsters to retrieve the Golden Fleece and save Camp Half-Blood from an impending disaster. Facing new challenges and old enemies, Percy proves that even the son of Poseidon can't escape the twists of destiny.",
            "genre": "Fantasy",
            "ratings": 4.7,
            "availability": "Available"
        },
        {
            "id": 3,
            "image": "images/book3.jpg",
            "name": "The Titan's Curse",
            "Author": "Rick Riordan",
            "description": "The third adventure unfolds as Percy Jackson and his companions embark on a quest to rescue Artemis and prevent the awakening of a formidable Titan. With allies turning into adversaries and the line between friend and foe blurring, Percy must navigate the challenges of the Titan's curse to ensure the safety of the gods and demigods alike.",
            "genre": "Fantasy",
            "ratings": 4.6,
            "availability": "Available"
        },
        {
            "id": 4,
            "image": "images/book4.jpg",
            "name": "The Battle of The Labyrinth",
            "Author": "Rick Riordan",
            "description": "As the war between the Olympians and the Titans looms, Percy Jackson delves into the mysterious Labyrinth to thwart a plot that could tip the scales in favor of the Titans. Navigating twists and turns, both literal and metaphorical, Percy and his friends face their most daunting challenge yet in this fourth installment of the series.",
            "genre": "Fantasy",
            "ratings": 4.8,
            "availability": "Available"
        },
        {
            "id": 5,
            "image": "images/book5.jpg",
            "name": "The Last Olympian",
            "Author": "Rick Riordan",
            "description": "In the epic conclusion to the Percy Jackson series, the prophecy unfolds, and the battle for Olympus reaches its climax. Percy faces the ultimate choice – save his loved ones or save the gods. With the fate of the world hanging in the balance, the Last Olympian must rise to fulfill his destiny and confront the challenges that will shape his legacy.",
            "genre": "Fantasy",
            "ratings": 4.9,
            "availability": "Available"
        },

        {
            "id": 6,
            "image": "images/book6.jpg",
            "name": "The Screaming Staircase",
            "Author": "Jonathan Stroud",
            "description": "Jonathan Stroud introduces readers to a thrilling world where ghosts and spirits pose a constant threat. Enter Lockwood & Co., a ghost-hunting agency led by the charismatic Anthony Lockwood and his talented associates. In this chilling tale, the team tackles the mystery of the Screaming Staircase, revealing secrets that will send shivers down your spine.",
            "genre": "Fantasy/Mystery",
            "ratings": 4.2,
            "availability": "Available"
        },
        {
            "id": 7,
            "image": "images/book7.jpg",
            "name": "The Whispering Skull",
            "Author": "Jonathan Stroud",
            "description": "Lockwood & Co. returns for another spine-tingling adventure. This time, the team encounters a mysterious skull with a penchant for whispering secrets from beyond. As they delve into the supernatural mysteries surrounding the skull, Lockwood, Lucy, and George must navigate the fine line between the living and the dead.",
            "genre": "Fantasy/Mystery",
            "ratings": 4.4,
            "availability": "Available"
        },
        {
            "id": 8,
            "image": "images/book8.jpg",
            "name": "The Hollow Boy",
            "Author": "Jonathan Stroud",
            "description": "Lockwood & Co. faces new challenges as they investigate a haunted and hollowed-out boy. The stakes are higher, the ghosts are more menacing, and the team's abilities are put to the test. In the heart of London's spectral underworld, Lockwood's agency must confront the darkness that lurks within and around them.",
            "genre": "Fantasy/Mystery",
            "ratings": 4.6,
            "availability": "Available"
        },
        {
            "id": 9,
            "image": "images/book9.jpg",
            "name": "The Creeping Shadow",
            "Author": "Jonathan Stroud",
            "description": "Lockwood & Co. returns to tackle a creeping shadow that threatens to engulf London in darkness. With tensions rising within the team and a dangerous adversary on the loose, the stakes have never been higher. The Creeping Shadow explores the thin line between the paranormal and the human, testing the resilience of Lockwood and his associates.",
            "genre": "Fantasy/Mystery",
            "ratings": 4.5,
            "availability": "Available"
        },
        {
            "id": 10,
            "image": "images/book10.jpg",
            "name": "The Empty Grave",
            "Author": "Jonathan Stroud",
            "description": "In the riveting conclusion to the Lockwood & Co. series, the team faces their most perilous challenge yet – the secrets of the empty grave. As the boundaries between the living and the dead blur, Lockwood, Lucy, and George must unravel the mysteries that have haunted them throughout their ghost-hunting career.",
            "genre": "Fantasy/Mystery",
            "ratings": 4.7,
            "availability": "Available"
        },
        {
            "id": 11,
            "image": "images/book11.jpg",
            "name": "Thirteen Days of Midnight",
            "Author": "Leo Hunt",
            "description": "Leo Hunt introduces us to a world where magic and mystery collide. Meet Luke Manchett, who inherits his father's ghost-summoning powers along with a sinister curse. In Thirteen Days of Midnight, Luke must navigate the dangerous world of the supernatural, facing vengeful spirits and dark forces that threaten to consume him.",
            "genre": "Fantasy/Horror",
            "ratings": 3.9,
            "availability": "Available"
        },
        {
            "id": 12,
            "image": "images/book12.jpg",
            "name": "Eight Rivers of Shadow",
            "Author": "Leo Hunt",
            "description": "Leo Hunt continues Luke Manchett's supernatural journey in the sequel to Thirteen Days of Midnight. As Luke grapples with his newfound powers and the consequences of his actions, he discovers a deeper connection to the magical world. Eight Rivers of Shadow takes readers on a thrilling ride through the mystical realms where danger lurks at every turn.",
            "genre": "Fantasy/Horror",
            "ratings": 4.0,
            "availability": "Available"
        },
        {
            "id": 13,
            "image": "images/book13.jpg",
            "name": "Seven Trees of Stone",
            "Author": "Leo Hunt",
            "description": "The gripping conclusion to Leo Hunt's supernatural trilogy unfolds as Luke Manchett confronts the ultimate challenge – the seven trees of stone. With the fate of both the living and the dead hanging in the balance, Luke must harness his powers and face ancient forces to save those he cares about. Seven Trees of Stone is a spellbinding finale to an epic tale of magic, courage, and sacrifice.",
            "genre": "Fantasy/Horror",
            "ratings": 4.1,
            "availability": "Available"
        }
    ];
    const fetchAndDisplayBooks = () => {
        const bookDisplayContainer = $('.book-display-container');
        let out = "";

        $.each(books, function (_, book) {
            out += `
                    <div class="book-item" data-book-id="${book.id}">
                        <img src="${book.image}" alt="${book.name} Cover">
                        <h6>${book.name}</h6>
                        <p>${book.Author}</p>
                        <button class="reserve-button" data-toggle="modal" data-target="#bookModal">Reserve</button>
                    </div>
                `;
        });

        bookDisplayContainer.empty().html(out);

        // Initialize Tippy.js for book cards
        $('.book-item').each(function () {
            const bookId = $(this).data('book-id');
            const clickedBook = books.find(book => book.id === parseInt(bookId));

            tippy(this, {
                content: ` ${clickedBook.genre}`,
                placement: 'top',
            });
        });

        $('.book-display-container').on('click', '.book-item img', function () {
            const bookId = $(this).closest('.book-item').data('book-id');
            const clickedBook = books.find(book => book.id === parseInt(bookId));
            openModal(clickedBook);
        });

        $('.book-display-container').on('click', '.reserve-button', function () {
            const bookId = $(this).closest('.book-item').data('book-id');
            const clickedBookIndex = books.findIndex(book => book.id === parseInt(bookId));

            // Update book availability to "Reserved"
            if (clickedBookIndex !== -1) {
                books[clickedBookIndex].availability = 'Reserved';
                // Update the DataTable with the new data
                refreshDataTable();
            }

            // Prevent multiple clicks
            $(this).prop('disabled', true).addClass('reserved').text('Reserved');
        });

        function refreshDataTable() {
            const table = $('#bookTable').DataTable();
            // Clear the existing table data
            table.clear();
            // Add the updated data
            table.rows.add(books);
            // Redraw the DataTable to reflect changes
            table.draw();
        }
    };

    const openModal = (book) => {
        $('#modalTitle').text(book.name);
        $('#modalAuthor').text(`Author: ${book.Author}`);
        $('#modalDescription').text(book.description);
        $('#modalRatings').text(`Ratings: ${book.ratings}`);
        $('#bookModal').addClass('show');
        $('#modalOverlay').css('display', 'block');
        $('body').addClass('modal-open');
        $('body').css('overflow', 'hidden');
    };

    $('#closeModal').on('click', () => {
        closeModal();
    });

    $(document).on('click', (event) => {
        const modal = $('#bookModal');
        if (event.target === modal[0]) {
            closeModal();
        }
    });

    function closeModal() {
        $('#bookModal').removeClass('show');
        $('#modalOverlay').css('display', 'none');
        $('body').removeClass('modal-open');
        $('body').css('overflow', 'auto');
    }

    const tagInput = $('#search');
    const tagSuggestions = $('<div id="tagSuggestions"></div>').appendTo('body');

    const searchTags = Array.from(new Set([
        ...books.flatMap(book => [book.name, book.Author, book.genre]),
    ]));

    tagInput.on('input', function () {
        const inputValue = tagInput.val().toLowerCase();
        const suggestions = searchTags.filter(tag => tag.toLowerCase().includes(inputValue));

        displaySuggestions(suggestions);
    });

    function updateSuggestionPosition() {
        const rect = tagInput[0].getBoundingClientRect();
        tagSuggestions.css({
            top: rect.bottom + 'px',
            left: rect.left + 'px',
            width: rect.width + 'px',
        });
    }

    function displaySuggestions(suggestions) {
        if (suggestions.length > 0) {
            tagSuggestions.html('');
            $.each(suggestions, function (_, suggestion) {
                const suggestionElement = $('<div class="suggestion"></div>')
                    .text(suggestion)
                    .on('click', function () {
                        tagInput.val(suggestion);
                        tagSuggestions.css('display', 'none');
                    });
                tagSuggestions.append(suggestionElement);
            });

            updateSuggestionPosition();

            tagSuggestions.css({
                position: 'fixed',
                zIndex: '1000',
                display: 'block',
            });

            function animate() {
                updateSuggestionPosition();
                requestAnimationFrame(animate);
            }

            animate();
        } else {
            tagSuggestions.css('display', 'none');
        }
    }

    $(document).on('click', function (event) {
        if (!$(event.target).closest('#search').length && !$(event.target).closest('#tagSuggestions').length) {
            tagSuggestions.css('display', 'none');
        }
    });

    $('#searchForm').on('submit', event => {
        event.preventDefault();
        const searchTerm = $('#search').val().toLowerCase();

        const filteredBooks = books.filter(book =>
            book.name.toLowerCase().includes(searchTerm) ||
            book.Author.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm)
        );

        const bookDisplayContainer = $('.book-display-container');
        let out = "";

        $.each(filteredBooks, function (_, book) {
            out += `
                     <div class="book-item" data-book-id="${book.id}">
                        <img src="${book.image}" alt="${book.name} Cover">
                        <h6>${book.name}</h6>
                        <p>Author: ${book.Author}</p>
                        <p>Genre: ${book.genre}</p>
                        <button class="reserve-button">Reserve</button>
                    </div>
                `;
        });

        anime({
            targets: '.book-display-container .book-item',
            opacity: 0,
            scale: 0.8,
            duration: 500,
            easing: 'easeOutQuad',
            complete: function () {
                bookDisplayContainer.html(out);

                anime({
                    targets: '.book-item',
                    opacity: [0, 1],
                    scale: [0.95, 1],
                    duration: 800,
                    delay: anime.stagger(100, { start: 200 }),
                    easing: 'easeInOutQuad',
                });

                // Initialize Tippy.js for book cards
                $('.book-item').each(function () {
                    const bookId = $(this).data('book-id');
                    const clickedBook = books.find(book => book.id === parseInt(bookId));

                    tippy(this, {
                        content: ` ${clickedBook.genre}`,
                        placement: 'top',
                    });
                });
            },
        });
    });
    fetchAndDisplayBooks();


    function generateGenreChart() {
        const genres = Array.from(new Set(books.map(book => book.genre)));
        const genreCounts = genres.map(genre => books.filter(book => book.genre === genre).length);

        const ctx = document.getElementById('genreChart').getContext('2d');
        const genreChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: genres,
                datasets: [{
                    label: 'Number of Books',
                    data: genreCounts,
                    backgroundColor: '#28a745',
                }]
            },
            options: {
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            color: 'white'
                        },
                        grid: {
                            color: '#28a745' // Change the color of y-axis grid lines
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'white'
                        },
                        grid: {
                            color: '#28a745' // Change the color of y-axis grid lines
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });


    }


    // Call the function to generate the genre chart
    generateGenreChart();

    $('#bookTable').DataTable({
        data: books,
        columns: [
            { data: 'id', title: 'ID' },
            { data: 'name', title: 'Name' },
            { data: 'Author', title: 'Author' },
            { data: 'genre', title: 'Genre' },
            { data: 'ratings', title: 'Ratings' },
            { data: 'availability', title: 'Availability' },
        ],
        displayLength: 10,
        responsive: true,
        initComplete: function () {
        }
    });

    const bannerAnimation = anime({
        targets: '.banner-img',
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 1000,
        easing: 'easeInOutQuad'
    });

    const navbarAnimation = anime({
        targets: '.navbar',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuad',
    });

    const searchBarAnimation = anime({
        targets: '.search-bar-container',
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 800,
        delay: 200,
        easing: 'easeOutQuad',
    });

    const bookItemAnimation = anime({
        targets: '.book-item',
        opacity: [0, 1],
        scale: [0.95, 1],
        duration: 800,
        delay: anime.stagger(100, { start: 200 }),
        easing: 'easeInOutQuad',
    });
});