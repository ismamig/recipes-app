<script lang="ts">
    import { page } from '$app/stores';

    const pages = [
        {
            name: 'La Couisine !',
            path: '/',
        },
        {
            name: 'Nouvelle recette',
            path: '/new',
        },
        {
            name: 'Toutes les recettes',
            path: '/recipes',
        }
    ];

    $: currentPage = pages.find(page => page.path === $page.url.pathname);
    $: currentPageName = currentPage ? currentPage.name : '';
</script>
<nav class="p-4 flex flex-col gap-4">
    <div class="">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
        </svg>
    </div>
    <div>
        <h1 class="text-4xl font-bold">{currentPageName}</h1>
    </div>
</nav>