<template>
    <div>
      <button @click="goToPage(previousPage)">Previous</button>
      <button @click="goToPage(nextPage)">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pageOrder: ['A1', 'A2', 'A2_2'], // Define the order of pages in the array
        currentPageIndex: 0
      };
    },
    computed: {
      currentPage() {
        return this.pageOrder[this.currentPageIndex];
      },
      previousPage() {
        return this.pageOrder[this.currentPageIndex - 1];
      },
      nextPage() {
        return this.pageOrder[this.currentPageIndex + 1];
      }
    },
    methods: {
      goToPage(page) {
        if (page) {
          this.$router.push(`/${page}`); // Use Nuxt's router to navigate to the selected page
          if (page === this.currentPage) return; // Do not update current page index if already on selected page
          this.currentPageIndex = this.pageOrder.indexOf(page);
        }
      }
    }
  };
  </script>
  
  