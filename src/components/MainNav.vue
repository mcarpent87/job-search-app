<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 m-8"
      >
        <a href="" class="flex h-full items-center text-xl">
          {{ company }}
        </a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="ml-9 h-full first:ml-0"
            >
              <a href="" class="flex h-full items-center py-2.5">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
      </div>
      <SubNav v-if="!isLoggedIn" />
    </div>
  </header>
</template>

<script>
import SubNav from "@/components/SubNav.vue";
export default {
  name: "MainNav",
  components: {
    SubNav,
  },
  data() {
    return {
      company: "Poolitix Careers",
      url: "https://careers.google.com",
      menuItems: [
        "Teams",
        "Locations",
        "Life at Poolitix",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
