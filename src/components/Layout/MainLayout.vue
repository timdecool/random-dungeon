<script>

    export default {
        name: "MainLayout",
        props: {
            headerClass : {
                type: String,
                required: false,
                default: function() {
                    return null
                }
            },
            bodyClass : {
                type: String,
                required: false,
                default: function() {
                    return null
                }
            },
            footerClass : {
                type: String,
                required: false,
                default: function() {
                    return null
                }
            }
        }
    }
</script>

<template>
    <div >
        <header 
            v-if="$slots.header"
            :class="headerClass"
        >
            <slot name="header">
               
            </slot>
        </header>
        <main
            class="container"
            :class="bodyClass"
        >
            <slot></slot>
        </main>
        <footer
            v-if="$slots.footer"
            :class="footerClass"
        >
            <slot name="footer">
                
            </slot>
        </footer>
    </div>
</template>

<style scoped>
    footer {
        width: 100vw;
        position: fixed;
        left: 0;
        bottom: 0;
    }
</style>
