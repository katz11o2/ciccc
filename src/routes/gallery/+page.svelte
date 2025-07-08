<script>
    import { fade, fly } from "svelte/transition";

    let selectedImage = null;
    let filterMonth = "";
    let filterYear = "";

    // 🔽 Paste your scraped data here
    let images = [
        {
            src: "https://engg.cambridge.edu.in/wp-content/uploads/2023/10/photo1.jpg",
            title: "Event Name",
            description: "Description goes here",
            month: "October",
            year: "2023"
        },
        {
            src: "https://engg.cambridge.edu.in/wp-content/uploads/2024/01/photo2.jpg",
            title: "Tech Fest",
            description: "Exciting tech event",
            month: "January",
            year: "2024"
        },
        // Add more entries after scraping
    ];

    function openImage(image) {
        selectedImage = image;
    }

    function closeImage() {
        selectedImage = null;
    }
</script>

<main class="container mx-auto p-8 bg-gradient-to-b from-indigo-600 to-purple-500 min-h-screen font-sans text-gray-100">
    <div class="text-center mb-12">
        <h1 class="text-6xl font-extrabold text-white drop-shadow-lg mb-4">Gallery</h1>
    </div>

    <div class="flex justify-center gap-8 mb-8">
        <select bind:value={filterMonth} class="p-3 border-2 border-gray-300 rounded-lg text-gray-900 bg-white shadow-md focus:ring-2 focus:ring-indigo-500 transition-all">
            <option value="">Filter by Month</option>
            {#each ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] as month}
                <option value={month}>{month}</option>
            {/each}
        </select>
        <select bind:value={filterYear} class="p-3 border-2 border-gray-300 rounded-lg text-gray-900 bg-white shadow-md focus:ring-2 focus:ring-indigo-500 transition-all">
            <option value="">Filter by Year</option>
            {#each ["2022", "2023", "2024"] as year}
                <option value={year}>{year}</option>
            {/each}
        </select>
    </div>

    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {#each images as image (image.src)}
            {#if (!filterMonth || image.month === filterMonth) && (!filterYear || image.year === filterYear)}
                <div 
                    class="relative overflow-hidden rounded-lg shadow-2xl cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-xl bg-white p-5"
                    in:fade={{ duration: 400 }}
                    on:click={() => openImage(image)}
                >
                    <img 
                        src={image.src} 
                        alt={image.title} 
                        class="w-full h-52 object-cover rounded-lg transition-all duration-300 hover:opacity-90"
                        loading="lazy"
                    />
                    <div class="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-3 text-center text-white font-bold text-lg">
                        {image.title}
                    </div>
                </div>
            {/if}
        {/each}
    </div>

    {#if selectedImage}
        <div 
            class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6 backdrop-blur-md" 
            on:click={closeImage} 
            transition:fade
        >
            <div class="bg-white p-8 rounded-2xl shadow-xl relative max-w-4xl w-full border-4 border-indigo-600 transform scale-105 hover:scale-110 transition-all duration-300"
                transition:fly={{ y: 20, duration: 300 }}
                on:click|stopPropagation
            >
                <button 
                    on:click={closeImage} 
                    class="absolute top-3 right-3 text-gray-700 text-3xl hover:text-red-600 focus:outline-none"
                >
                    &times;
                </button>
                <img src={selectedImage.src} alt={selectedImage.title} class="w-full rounded-lg shadow-md mb-4" />
                <h2 class="text-4xl font-semibold text-gray-900 text-center">
                    {selectedImage.title}
                </h2>
                <p class="text-gray-600 text-center mt-3 text-lg">{selectedImage.description}</p>
            </div>
        </div>
    {/if}
</main>

<style>
    main {
        min-height: 100vh;
        max-width: 1280px;
    }
    
    .container {
        max-width: 1320px;
        min-height: 100vh;
    }

    @media (max-width: 768px) {
        main {
            padding: 4rem 1rem;
        }
        .container {
            padding: 2rem;
        }
    }
</style>
