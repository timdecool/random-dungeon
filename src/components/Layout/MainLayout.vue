<script setup>
    import MainNav from '@/components/Layout/MainNav.vue'
    
</script>

<template>
    <div class="container">
        <header class="p-3 mb-3 border-bottom">
            <slot name="header">
                <main-nav />
            </slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
