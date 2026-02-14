// Product Modal System
// Product data for each brand
const brandProducts = {
    'Kuvvet': {
        tagline: 'More Power To You',
        description: 'kuVvet by BEREKET FOODS is a high-performance cereal range engineered through advanced R&D to deliver elite nutrition and a superior flavor profile. Each variety is precision-fortified with essential vitamins and minerals, specifically formulated to support physical strength and sustained energy throughout the day.',
        products: [
            {
                name: 'Prime Flakes',
                weight: '500g',
                weightValue: 500,
                description: 'Toasted corn flakes with Nutribond fortification for sustained energy and nutrition.',
                image: 'assets/images/products/kuvvet/prime-flakes-500g.png'
            },
            {
                name: 'Frosted Flakes',
                weight: '250g',
                weightValue: 250,
                description: 'Sugar-coated corn flakes with Nutribond vitamins for a sweet, nutritious start.',
                image: 'assets/images/products/kuvvet/frosted-flakes-250g.png'
            },
            {
                name: 'Choco Shells',
                weight: '500g',
                weightValue: 500,
                description: 'Deep cocoa intensity with precision-fortified vitamins and minerals for sustained energy.',
                image: 'assets/images/products/kuvvet/choco-shells-500g.jpg'
            },
            {
                name: 'Choco Rocks',
                weight: '500g',
                weightValue: 500,
                description: 'Chocolate corn balls engineered for elite nutrition and superior flavor.',
                image: 'assets/images/products/kuvvet/choco-rocks.jpg'
            },
            {
                name: 'Choco Rocks',
                weight: '250g',
                weightValue: 250,
                description: 'Chocolate corn balls engineered for elite nutrition and superior flavor.',
                image: 'assets/images/products/kuvvet/choco-rocks.jpg'
            },
            {
                name: 'Choco Vanilla Assorted',
                weight: '500g',
                weightValue: 500,
                description: 'Perfectly balanced blend of chocolate and vanilla shells for a powerful breakfast.',
                image: 'assets/images/products/kuvvet/choco-vanilla-assorted.jpg'
            },
            {
                name: 'Choco Vanilla Assorted',
                weight: '250g',
                weightValue: 250,
                description: 'Perfectly balanced blend of chocolate and vanilla shells for a powerful breakfast.',
                image: 'assets/images/products/kuvvet/choco-vanilla-assorted.jpg'
            },
            {
                name: 'Berry Rocks',
                weight: '500g',
                weightValue: 500,
                description: 'Vibrant strawberry corn balls bursting with fruity flavor and nutrition.',
                image: 'assets/images/products/kuvvet/berry-rocks.jpg'
            },
            {
                name: 'Berry Rocks',
                weight: '250g',
                weightValue: 250,
                description: 'Vibrant strawberry corn balls bursting with fruity flavor and nutrition.',
                image: 'assets/images/products/kuvvet/berry-rocks.jpg'
            }
        ]
    },
    'Kuvvet Porridge': {
        tagline: 'Wholesome Breakfast',
        description: 'Start your day with the goodness of whole grains. Our porridge range combines traditional nutrition with modern convenience, delivering fiber-rich breakfast options that fuel your morning.',
        products: [
            {
                name: 'Barley Porridge Box',
                weight: '250g',
                weightValue: 250,
                description: '100% whole grain Barley Porridge in a convenient 250g box.',
                image: 'assets/images/products/kuvvet/barley-porridge-box.jpg'
            },
            {
                name: 'Barley Porridge Box',
                weight: '175g',
                weightValue: 175,
                description: 'Rolled & flaked Barley Porridge, rich in fiber and nutrition.',
                image: 'assets/images/products/kuvvet/barley-porridge-box.jpg'
            },
            {
                name: 'Barley Porridge Box',
                weight: '100g',
                weightValue: 100,
                description: 'Perfect portion of wholesome Barley Porridge for a healthy start.',
                image: 'assets/images/products/kuvvet/barley-porridge-box.jpg'
            },
            {
                name: 'Barley Porridge Pouch',
                weight: '300g',
                weightValue: 300,
                description: '100% whole grain Barley Porridge in a convenient 300g pouch.',
                image: 'assets/images/products/kuvvet/barley-porridge-pouch.jpg'
            },
            {
                name: 'Wheat Porridge Box',
                weight: '250g',
                weightValue: 250,
                description: '100% whole grain Wheat Porridge, packed with natural goodness.',
                image: 'assets/images/products/kuvvet/wheat-porridge-box.jpg'
            },
            {
                name: 'Wheat Porridge Box',
                weight: '175g',
                weightValue: 175,
                description: 'Classic Wheat Porridge for improved digestion and energy.',
                image: 'assets/images/products/kuvvet/wheat-porridge-box.jpg'
            },
            {
                name: 'Wheat Porridge Box',
                weight: '100g',
                weightValue: 100,
                description: 'Nutritious Wheat Porridge in a convenient 100g pack.',
                image: 'assets/images/products/kuvvet/wheat-porridge-box.jpg'
            },
            {
                name: 'Wheat Porridge Pouch',
                weight: '300g',
                weightValue: 300,
                description: '100% whole grain Wheat Porridge in a convenient 300g pouch.',
                image: 'assets/images/products/kuvvet/wheat-porridge.jpg'
            }
        ]
    },
    'Major Grains': {
        tagline: "Kids' Favorite",
        description: 'Making breakfast fun and nutritious for kids! Major Grains offers colorful, flavorful cereals that children love, while parents appreciate the balanced nutrition in every bowl.',
        products: [
            {
                name: 'Choco Balls',
                weight: '300g',
                weightValue: 300,
                description: 'Crunchy chocolate-flavored cereal balls, fortified with Iron, Zinc and Vitamins.',
                image: 'assets/images/products/major-grains/choco-balls-new.png'
            },
            {
                name: 'Choco Shells',
                weight: '300g',
                weightValue: 300,
                description: 'Delicious chocolate-flavored shell shaped cereal, enriched with essential nutrients.',
                image: 'assets/images/products/major-grains/choco-shells-new.png'
            },
            {
                name: 'Choco Loops',
                weight: '300g',
                weightValue: 300,
                description: 'Ring shaped chocolate cereal that turns milk into a chocolaty treat.',
                image: 'assets/images/products/major-grains/choco-loops-new.png'
            },
            {
                name: 'Moons & Stars',
                weight: '300g',
                weightValue: 300,
                description: 'Vanilla and Chocolate flavored moon & star shaped cereal for a magical breakfast.',
                image: 'assets/images/products/major-grains/moons-and-stars-new.png'
            }
        ]
    },
    'Jhat Hazam': {
        tagline: 'Instant Digestion',
        description: 'Experience instant digestive relief with our range of flavorful digestive tablets. Formulated with natural ingredients and Himalayan pink salt, Jhat Hazam provides quick and effective digestive support in delicious flavors.',
        products: [
            {
                name: 'Jhat Hazam Amrud',
                weight: '120 tablets',
                weightValue: 120,
                description: 'Guava-flavored digestive tablets with Himalayan pink salt for instant relief.',
                image: 'assets/images/products/jhat-hazam/amrud.jpg'
            },
            {
                name: 'Jhat Hazam Cola',
                weight: '120 tablets',
                weightValue: 120,
                description: 'Cola-flavored digestive tablets for quick and effective digestion.',
                image: 'assets/images/products/jhat-hazam/cola.jpg'
            },
            {
                name: 'Jhat Hazam Aamchoor',
                weight: '120 tablets',
                weightValue: 120,
                description: 'Tangy mango powder flavored digestive tablets for digestive wellness.',
                image: 'assets/images/products/jhat-hazam/aamchoor.jpg'
            },
            {
                name: 'Jhat Hazam Imlee',
                weight: '120 tablets',
                weightValue: 120,
                description: 'Tamarind-flavored digestive tablets with natural ingredients.',
                image: 'assets/images/products/jhat-hazam/imlee.jpg'
            },
            {
                name: 'Jhat Hazam Anaar',
                weight: '120 tablets',
                weightValue: 120,
                description: 'Pomegranate-flavored digestive tablets for instant comfort.',
                image: 'assets/images/products/jhat-hazam/anaar.jpg'
            }
        ]
    },
    'Jarfull': {
        tagline: 'Joy in a Jar',
        description: 'Jarfull by BEREKET FOODS is a premium line of culinary sauces designed to bring restaurant-quality flavors directly to your home kitchen. Each jar is packed with the finest ingredients and a perfect balance of spices, ensuring that every meal you prepare is rich, authentic, and "full" of natural zest.\n\nCrafted for convenience without compromising on taste, Jarfull sauces serve as the ultimate kitchen companion for quick stir-fries, marinades, or dipping. From traditional favorites to bold, modern blends, our sauces are meticulously prepared to deliver a consistent, gourmet experience in every pour. Whether you are simmering, glazing, or dressing, Jarfull ensures your dishes are never short on character or quality.\n\nWhy Choose Jarfull?\nRich Consistency: Thick, flavor-dense sauces that coat your food perfectly.\nPremium Ingredients: Sourced with the signature Bereket commitment to purity.\nVersatile Use: Ideal for home cooks looking to elevate simple ingredients into extraordinary meals.',
        products: [
            {
                name: 'Chilli Garlic Ketchup',
                weight: '1kg',
                weightValue: 1000,
                description: 'Zesty blend of tomatoes and garlic for a spicy kick.',
                image: 'assets/images/products/jarfull/tomato-ketchup-green.jpg'
            },
            {
                name: 'Tomato Ketchup',
                weight: '1kg',
                weightValue: 1000,
                description: 'Classic tomato ketchup with perfect consistency and taste.',
                image: 'assets/images/products/jarfull/tomato-ketchup-red.jpg'
            },
            {
                name: 'Green Chilli Paste',
                weight: '300g',
                weightValue: 300,
                description: 'Spicy and aromatic green chilli paste to spice up your cooking.',
                image: 'assets/images/products/jarfull/green-chilli-paste.jpg'
            },
            {
                name: 'Mango Elaichi Seed Chutney',
                weight: '300g',
                weightValue: 300,
                description: 'Traditional mango chutney with a delightful hint of cardamom seeds.',
                image: 'assets/images/products/jarfull/mango-chutney.jpg'
            },
            {
                name: 'Mixed Pickle',
                weight: '300g',
                weightValue: 300,
                description: 'Traditional mixed pickle made with selected vegetables and aromatic spices.',
                image: 'assets/images/products/jarfull/mixed-pickle.jpg'
            },
            {
                name: 'Mixed Pickle (Special)',
                weight: '300g',
                weightValue: 300,
                description: 'Authentic mixed vegetable pickle with a rich blend of spices.',
                image: 'assets/images/products/jarfull/mixed-pickle-2.jpg'
            },
            {
                name: 'Plum Chutney',
                weight: '300g',
                weightValue: 300,
                description: 'Sweet and tangy plum chutney, perfect as a dip or spread.',
                image: 'assets/images/products/jarfull/plum-chutney.jpg'
            }
        ]
    },
    'Riverdale': {
        tagline: 'Real Fruit Goodness',
        description: 'Riverdale Jams by BEREKET FOODS captures the essence of sun-ripened orchards in every jar. Crafted using high-quality fruit and premium ingredients, these jams deliver a vibrant burst of natural flavor and a smooth, spreadable texture that elevates any breakfast or snack.\n\nWhether spread on warm toast, layered in pastries, or used as a gourmet topping, Riverdale Jams provide a touch of nature’s sweetness with the quality and purity you expect from Bereket Foods.',
        products: [
            {
                name: 'Apple Jam',
                weight: '400g',
                weightValue: 400,
                description: 'Crisp, sweet, and timelessly refreshing apple jam made from selected orchard fruits.',
                image: 'assets/images/products/riverdale/apple-jam.jpg'
            },
            {
                name: 'Peach Jam',
                weight: '400g',
                weightValue: 400,
                description: 'Delicate, velvety peach jam full of summer warmth and natural sweetness.',
                image: 'assets/images/products/riverdale/peach-jam.jpg'
            },
            {
                name: 'Mango Jam',
                weight: '400g',
                weightValue: 400,
                description: 'Rich, exotic, and intensely flavorful mango jam—the true taste of the tropics.',
                image: 'assets/images/products/riverdale/mango-jam.jpg'
            },
            {
                name: 'Tropical Tango',
                weight: '400g',
                weightValue: 400,
                description: 'A sun-drenched blend of exotic fruits for a uniquely vibrant and fruity experience.',
                image: 'assets/images/products/riverdale/tropical-tango.jpg'
            }
        ]
    },
    'Niwala': {
        tagline: 'The Gold Standard of Tradition',
        description: 'Niwala by BEREKET FOODS brings the comfort of traditional, wholesome meals to your table with the perfect blend of high-quality Rice and Lentils. Inspired by the classic "Daal Chawal" heritage, Niwala is crafted for those who value both nutrition and authentic taste in their daily diet.\n\nEvery serving provides a complete protein profile and essential dietary fiber, making it an ideal, energy-packed meal for the entire family. By sourcing the finest grains and pulses, Niwala ensures a consistent texture and rich, natural flavor that reflects the purity of home-cooked food. Convenient, nutritious, and deeply satisfying—Niwala is the gold standard for a balanced, traditional meal.',
        products: [
            {
                name: 'Royal Kainat Basmati Rice',
                weight: '1kg',
                weightValue: 1000,
                description: 'Premium Royal Kainat Basmati Rice, 100% natural and farm sourced with exceptional aroma.',
                image: 'assets/images/products/niwala/royal-kainat-1kg.jpg'
            },
            {
                name: 'Golden Sella Basmati Rice',
                weight: '1kg',
                weightValue: 1000,
                description: 'Superior quality Golden Sella Basmati Rice, parboiled to perfection for separate, fluffy grains.',
                image: 'assets/images/products/niwala/golden-sella-1kg.jpg'
            },
            {
                name: 'Daily Sella Basmati Rice',
                weight: '1kg',
                weightValue: 1000,
                description: 'High-quality Sella Basmati Rice for your daily nutritional needs and authentic taste.',
                image: 'assets/images/products/niwala/daily-sella-1kg.jpg'
            },
            {
                name: 'Budget Everyday Sella Rice',
                weight: '1kg',
                weightValue: 1000,
                description: 'Value-packed Everyday Sella Rice, bringing quality and nutrition to every household.',
                image: 'assets/images/products/niwala/budget-everyday-1kg.jpg'
            },
            {
                name: 'Golden Daal Masoor',
                weight: '1kg',
                weightValue: 1000,
                description: '100% Natural and Farm Sourced. Golden Daal Masoor.',
                image: 'assets/images/products/niwala/golden-daal-masoor.png'
            },
            {
                name: 'Golden Daal Chana',
                weight: '1kg',
                weightValue: 1000,
                description: '100% Natural and Farm Sourced. Golden Daal Chana.',
                image: 'assets/images/products/niwala/golden-daal-chana.png'
            },
            {
                name: 'Golden Kabuli Channa',
                weight: '1kg',
                weightValue: 1000,
                description: '100% Natural and Farm Sourced. Golden Kabuli Channa.',
                image: 'assets/images/products/niwala/golden-kabuli-channa.png'
            },
            {
                name: 'Golden Daal Mong',
                weight: '1kg',
                weightValue: 1000,
                description: '100% Natural and Farm Sourced. Golden Daal Mong.',
                image: 'assets/images/products/niwala/golden-daal-mong.png'
            }
        ]
    },
    'Liffest': {
        tagline: 'Chocolate Flavored Fun',
        description: 'Indulge in the chocolatey goodness that makes breakfast exciting! Lifest cereals combine rich chocolate flavor with essential nutrients, creating a breakfast experience kids love and parents trust.',
        products: [
            {
                name: 'Choco Balls',
                weight: '450g',
                weightValue: 450,
                description: 'Crunchy chocolate-flavored cereal balls, fortified with vitamins and minerals.',
                image: 'assets/images/products/lifest/choco-balls-450g.png'
            },
            {
                name: 'Choco Balls',
                weight: '250g',
                weightValue: 250,
                description: 'Crunchy chocolate-flavored cereal balls, fortified with vitamins and minerals.',
                image: 'assets/images/products/lifest/choco-balls-450g.png'
            },
            {
                name: 'Choco Balls',
                weight: '150g',
                weightValue: 150,
                description: 'Crunchy chocolate-flavored cereal balls, fortified with vitamins and minerals.',
                image: 'assets/images/products/lifest/choco-balls-450g.png'
            },
            {
                name: 'Choco Balls (Pouch)',
                weight: '100g',
                weightValue: 100,
                description: 'Crunchy chocolate-flavored cereal balls in a convenient pouch.',
                image: 'assets/images/products/lifest/choco-balls-450g.png'
            },
            {
                name: 'Choco Loops',
                weight: '450g',
                weightValue: 450,
                description: 'Ring shaped chocolate cereal that turns milk into a chocolaty treat.',
                image: 'assets/images/products/lifest/choco-loops-250g.png'
            },
            {
                name: 'Choco Loops',
                weight: '250g',
                weightValue: 250,
                description: 'Ring shaped chocolate cereal that turns milk into a chocolaty treat.',
                image: 'assets/images/products/lifest/choco-loops-250g.png'
            },
            {
                name: 'Choco Loops',
                weight: '150g',
                weightValue: 150,
                description: 'Ring shaped chocolate cereal that turns milk into a chocolaty treat.',
                image: 'assets/images/products/lifest/choco-loops-250g.png'
            },
            {
                name: 'Choco Loops (Pouch)',
                weight: '100g',
                weightValue: 100,
                description: 'Convenient pouch of chocolate loops for a quick, delicious breakfast.',
                image: 'assets/images/products/lifest/choco-loops-100g.png'
            },
            {
                name: 'Choco Shells',
                weight: '450g',
                weightValue: 450,
                description: 'Delicious chocolate-flavored shell shaped cereal, enriched with essential nutrients.',
                image: 'assets/images/products/lifest/choco-shells-150g.png'
            },
            {
                name: 'Choco Shells',
                weight: '250g',
                weightValue: 250,
                description: 'Delicious chocolate-flavored shell shaped cereal, enriched with essential nutrients.',
                image: 'assets/images/products/lifest/choco-shells-150g.png'
            },
            {
                name: 'Choco Shells',
                weight: '150g',
                weightValue: 150,
                description: 'Delicious chocolate-flavored shell shaped cereal, enriched with essential nutrients.',
                image: 'assets/images/products/lifest/choco-shells-150g.png'
            },
            {
                name: 'Choco Shells (Pouch)',
                weight: '100g',
                weightValue: 100,
                description: 'Chocolate-flavored shells in a convenient 100g pouch.',
                image: 'assets/images/products/lifest/choco-shells-100g.png'
            },
            {
                name: 'Choco Stars',
                weight: '450g',
                weightValue: 450,
                description: 'Chocolate flavored star shaped cereal, enriched with essential nutrients.',
                image: 'assets/images/products/lifest/choco stars.png'
            },
            {
                name: 'Choco Stars',
                weight: '250g',
                weightValue: 250,
                description: 'Chocolate flavored star shaped cereal, enriched with essential nutrients.',
                image: 'assets/images/products/lifest/choco stars.png'
            },
            {
                name: 'Choco Stars',
                weight: '150g',
                weightValue: 150,
                description: 'Chocolate flavored star shaped cereal, enriched with essential nutrients.',
                image: 'assets/images/products/lifest/choco stars.png'
            },
            {
                name: 'Choco Stars (Pouch)',
                weight: '100g',
                weightValue: 100,
                description: 'Chocolate flavored stars in a convenient 100g pouch.',
                image: 'assets/images/products/lifest/choco stars.png'
            }
        ]
    }
};

// Modal functionality
const modal = document.getElementById('productModal');
const modalBrandName = document.getElementById('modalBrandName');
const modalBrandTagline = document.getElementById('modalBrandTagline');
const modalBrandDescription = document.getElementById('modalBrandDescription');
const modalProductGrid = document.getElementById('modalProductGrid');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.product-modal .modal-overlay');

// View Containers
const modalGridView = document.getElementById('modalGridView');
const modalDetailView = document.getElementById('modalDetailView');
const backToGridBtn = document.getElementById('backToGrid');

// Detail View Elements
const detailProductImage = document.getElementById('detailProductImage');
const detailProductName = document.getElementById('detailProductName');
const detailProductDescription = document.getElementById('detailProductDescription');
const detailProductPackagings = document.getElementById('detailProductPackagings');

let currentBrandName = '';

// Function to sort products by weight (heaviest to lightest)
function sortProductsByWeight(products) {
    return products.sort((a, b) => b.weightValue - a.weightValue);
}

// Function to open modal
function openProductModal(brandName) {
    const brandData = brandProducts[brandName];
    if (!brandData) {
        console.error('Brand not found:', brandName);
        return;
    }

    currentBrandName = brandName;

    // Reset view to Grid
    modalGridView.classList.add('active');
    modalDetailView.classList.remove('active');

    // Set brand header
    modalBrandName.textContent = brandName;
    modalBrandTagline.textContent = brandData.tagline;
    modalBrandDescription.textContent = brandData.description;

    // Sort products
    const sortedProducts = sortProductsByWeight([...brandData.products]);

    // Deduplicate products by base name (show only one card per type)
    const uniqueProducts = [];
    const seenNames = new Set();

    sortedProducts.forEach(product => {
        // Clean name to get base (e.g. "Barley Porridge (Large)" -> "Barley Porridge")
        const baseName = product.name.split(' (')[0].trim();
        if (!seenNames.has(baseName)) {
            seenNames.add(baseName);
            uniqueProducts.push(product);
        }
    });

    // Clear and build grid
    modalProductGrid.innerHTML = '';
    uniqueProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.onclick = () => showProductDetail(product);

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.className = 'product-image';

        const infoDiv = document.createElement('div');
        infoDiv.className = 'product-info';

        const nameH3 = document.createElement('h3');
        nameH3.className = 'product-name';
        // Show clean name in grid (e.g., "Barley Porridge" instead of "Barley Porridge (Large)")
        nameH3.textContent = product.name.split(' (')[0].trim();

        // Weight removed from grid view - only shown in detail view
        // const weightSpan = document.createElement('span');
        // weightSpan.className = 'product-weight';
        // weightSpan.textContent = product.weight;

        infoDiv.appendChild(nameH3);
        // infoDiv.appendChild(weightSpan);
        productCard.appendChild(img);
        productCard.appendChild(infoDiv);
        modalProductGrid.appendChild(productCard);
    });

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function showProductDetail(product) {
    const brandData = brandProducts[currentBrandName];

    // Switch view
    modalGridView.classList.remove('active');
    modalDetailView.classList.add('active');

    // Set details
    detailProductImage.src = product.image;
    detailProductImage.alt = product.name;
    detailProductName.textContent = product.name;
    detailProductDescription.textContent = product.description;

    // Find other packaging (sharing similar name)
    // We normalize names slightly for better matching (e.g. removing " (Pouch)")
    const baseName = product.name.split(' (')[0].toLowerCase();
    const packagings = brandData.products.filter(p =>
        p.name.toLowerCase().startsWith(baseName)
    );

    detailProductPackagings.innerHTML = '';
    packagings.forEach(p => {
        const badge = document.createElement('span');
        badge.className = 'packaging-badge';
        badge.textContent = p.weight;
        // Optionally make it clickable to switch to that variant
        badge.onclick = () => {
            detailProductImage.src = p.image;
            detailProductName.textContent = p.name;
            detailProductDescription.textContent = p.description;
        };
        detailProductPackagings.appendChild(badge);
    });
}

function backToGrid() {
    modalDetailView.classList.remove('active');
    modalGridView.classList.add('active');
}

// Function to close modal
function closeProductModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners
modalClose.addEventListener('click', closeProductModal);
modalOverlay.addEventListener('click', closeProductModal);
backToGridBtn.addEventListener('click', backToGrid);

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProductModal();
    }
});

// Add click event to all brand cards
// Event delegation for brand clicks (handles static and potentially cloned elements)
document.addEventListener('click', (e) => {
    const slide = e.target.closest('.brand-slide');
    if (slide) {
        e.preventDefault();
        const brandNameElement = slide.querySelector('.brand-name');
        if (brandNameElement) {
            const brandName = brandNameElement.textContent.trim();
            if (brandProducts[brandName]) {
                openProductModal(brandName);
            } else {
                console.warn(`Brand data not found for: "${brandName}"`);
            }
        }
    }
});
