<script setup>
    import MainNav from '@/components/Layout/MainNav.vue'
    import FooterView from '@/components/Layout/FooterView.vue'
    
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
            <slot name="footer">
                <footer-view />
            </slot>
        </footer>
    </div>
</template>
