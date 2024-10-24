const grid = document.getElementById('grid');

const imageData = [
    { url: 'https://i.pinimg.com/474x/71/65/9b/71659bab7690d727a28c985b188b238c.jpg', description: 'Beautiful Flowers' },
    { url: 'https://i.pinimg.com/474x/69/9b/2f/699b2feec42cb8e6bf758beb2315ea4f.jpg', description: 'Print Flower' },
    { url: 'https://i.pinimg.com/474x/c5/9e/98/c59e9897c81b31f67a936a9bbae886e3.jpg', description: 'Sunny Beach' },
    { url: 'https://i.pinimg.com/474x/65/c6/38/65c638b81d2ad0f9b208213165f313e7.jpg', description: 'City Landscape' },
    { url: 'https://i.pinimg.com/474x/27/d2/d9/27d2d908864acff9cc985990121b30c5.jpg', description: 'Peaceful Lake' },
    { url: 'https://i.pinimg.com/474x/f6/a3/cc/f6a3cc2fbe4b2ec4f13d5dcdc48f9cce.jpg', description: 'Snowy Peak' },
    { url: 'https://i.pinimg.com/474x/df/db/f6/dfdbf671d87f92ea5ca31caa4f7b81a2.jpg', description: 'Landscape' },
    { url: 'https://i.pinimg.com/474x/1f/61/21/1f612101dc5622f942dccccc775742b7.jpg', description: 'Lavender Field' },
    { url: 'https://i.pinimg.com/474x/d1/b6/73/d1b673329b1842c988d68fb580368984.jpg', description: 'Print Flower' },
    { url: 'https://i.pinimg.com/474x/67/3d/fa/673dfa8a268ad63a434406fbbdffc895.jpg', description: 'Beachy beach' },
    { url: 'https://i.pinimg.com/474x/e4/ab/48/e4ab48f623b1d7b01b86c9c8ae52b20b.jpg', description: 'City Light' },
    { url: 'https://i.pinimg.com/474x/0a/99/22/0a992284a758a0b68dc6621f65a42677.jpg', description: 'Cute Dog' },
];

function loadImages() {
    imageData.forEach(data => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        const img = document.createElement('img');
        img.src = data.url;
        gridItem.appendChild(img);

        const saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save';
        gridItem.appendChild(saveBtn);

        const profileBtn = document.createElement('button');
        profileBtn.classList.add('profile-btn');
        profileBtn.innerHTML = 'Profile <i class="fa-solid fa-chevron-down"></i>';
        gridItem.appendChild(profileBtn);

        const desc = document.createElement('div');
        desc.classList.add('description');
        desc.textContent = data.description;
        gridItem.appendChild(desc);

        grid.appendChild(gridItem);
    });
}

loadImages();
