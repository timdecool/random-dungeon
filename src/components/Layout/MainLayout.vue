<template>
    <div class="container">
        <header 
            v-if="$slots.header"
            class="p-3 mb-3 border-bottom"
        >
            <slot name="header">
               
            </slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer v-if="$slots.footer">
            <slot name="footer">
                
            </slot>
        </footer>
    </div>
</template>
