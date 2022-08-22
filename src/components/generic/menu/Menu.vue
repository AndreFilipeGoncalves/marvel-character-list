<template>
    <Menubar class="menu-wrapper" :model="menuStructure">
        <template #start>
            <router-link
            :to="logoRoute">
                <img
                class="menu-logo"
                src="@/assets/icons/logo.png"
                :alt="t('logo')">
            </router-link>
        </template>
    </Menubar>
</template>

<script setup>
import Menubar from 'primevue/menubar/sfc'
import { menuStructure } from '@/assets/constants/menuStructure'
import { routesMapper } from '@/router/helpers/routes.map'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const logoRoute = routesMapper.INITIAL_PAGE

</script>

<style lang="scss">
.p-menubar {
    &.menu-wrapper {
        background-color: var(--black);
        .menu-logo {
            width:120px;
            height:60px;
            margin-right:60px;
            cursor:pointer;
        }

        .p-menubar-root-list {
            background-color: var(--black);
            .p-menuitem {
                .p-menuitem-link {
                    &:focus, &:active, &:hover {
                        outline:unset !important;
                        box-shadow: unset !important;
                    }
                    &.router-link-active {
                        border:none;
                        .p-menuitem-text {
                            font-weight:bold;
                        }
                    }
                    .p-menuitem-text {
                        color: var(--white);
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 960px) {
    .p-menubar {
        &.menu-wrapper {
            .p-menubar-button {
                width:calc(100% - 120px);
                justify-content:flex-end;
                padding-right:20px;
                text-decoration:none;
                &:hover {
                    color: var(--white);
                    background: var(--black);
                    box-shadow:none;
                }

            }
        }
    }
}

</style>
