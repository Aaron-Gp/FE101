<template>
  <q-layout view="lHh LpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          FE101
        </q-toolbar-title>
        <q-select v-model="locale" :options="localeOptions" borderless emit-value map-options class="lang-bar">
          <template v-slot:prepend>
            <q-icon name="language" />
          </template>
        </q-select>
        <q-btn aria-label="Dark theme toggle" flat round class="tw-ml-4"
          :icon="$q.dark.isActive ? 'brightness_2' : 'brightness_5'" @click="$q.dark.toggle()"></q-btn>
        <div class="q-mx-lg">v{{ version }}</div>
      </q-toolbar>

      <q-tabs inline-label outside-arrows mobile-arrows align="left" class="bg-primary text-white shadow-2 q-pl-xl">
        <q-route-tab :to="`/${mainPath}/${item}`" icon="code" :label="item"
          v-for="(item, index) in nav[mainPath as keyof typeof nav]" :key="index" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Navigation
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <!-- <q-drawer v-if="store.toc.length > 0" ref="drawer" v-model="rightDrawerOpen" show-if-above side="right"
      aria-label="Table of Contents" class="toc markdown__scroll">
      <q-scroll-area class="fit">
        <q-list dense>
          <q-item v-for="item in store.toc" :key="item.id" v-ripple clickable dense :active="activeToc === item.id"
            class="toc" @click="scrollTo(item.id)">
            <q-item-section v-if="item.level > 2" side>
              »
            </q-item-section>
            <q-item-section>{{ item.label }}</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer> -->

    <q-page-container>
      <component :is="currentPage"></component>
    </q-page-container>

    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab padding="sm" icon="keyboard_arrow_up"
        :class="{ 'text-black bg-grey-4': $q.dark.isActive, 'text-white bg-primary': !$q.dark.isActive }" />
    </q-page-scroller>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, shallowRef } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n'
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';
import { useNavStore } from 'stores/store';
import { version } from 'src/version'

const { locale } = useI18n({ useScope: 'global' })
const localeOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'zh-CN', label: '中文' }
]

const store = useNavStore()
const { nav } = storeToRefs(store)
const route = useRoute()
const router = useRouter()

const mainPath = ref(route.fullPath.split('/')[1])
// console.log(mainPath.value)

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'HTML101',
    icon: 'html',
    link: '/html101/1'
  },
  {
    title: 'CSS101',
    icon: 'css',
    link: '/css101/1'
  },
  {
    title: 'JS101',
    icon: 'javascript',
    link: '/js101/1'
  },
  {
    title: 'AST101',
    icon: 'javascript',
    link: '/ast101/1'
  }
];

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const currentPage = shallowRef()
const modules = import.meta.glob('pages/**/*.vue')

function loadPage() {
  // console.log(route.fullPath)
  mainPath.value = route.fullPath.split('/')[1]
  // console.log(mainPath.value)
  const id = route.fullPath.split('/')[2]
  // console.log(id)
  const boundary = store.length(mainPath.value)
  if (parseInt(id) > boundary) {
    // console.log('redirect to 404')
    router.replace('/404')
  } else {
    // for (const path in modules) {
    //   modules[path]().then((mod) => {
    //     console.log(path, mod)
    //   })
    // }
    const name = '../pages/' + mainPath.value + '/' + id + 'Page.vue'
    // console.log(name)
    try {
      modules[name]().then((mod) => {
        // console.log(name, mod)
        currentPage.value = mod.default
      })
    } catch (error) {
      console.error(error)
      router.replace('/404')
    }
  }
}

watch(
  () => route.fullPath,
  () => loadPage()
)

onMounted(() => {
  loadPage()
})

</script>

<style lang="scss">
.q-tabs {
  padding-left: 20px !important;
}

.lang-bar {
  .q-field__marginal {
    color: inherit;
  }

  .q-field__control {
    color: inherit;
  }

  .q-field__native {
    color: inherit;
  }
}
</style>
