<template>
  <Layout>
    <div class="container min-h-screen flex justify-center items-center">
      <div>
        <div>
          <div
            class="
              h-auto
              w-full
              flex flex-col
              lg:flex-row
              space-y-10
              lg:space-x-10
              justify-center
              items-center
            "
          >
            <div
              class="
                h-full
                w-1/3
                flex flex-col
                space-y-3
                items-center
                justify-center
              "
            >
              <div>
                <img
                  src="https://res.cloudinary.com/ortigan/image/upload/v1649844204/Group_858_cck4yw.svg"
                  alt=""
                  class="h-64"
                />
              </div>
              <div
                class="
                  uppercase
                  text-center text-2xl
                  tracking-widest
                  text-yellow-600
                "
              >
                <p class="font-bold">explorer</p>
                <p>badge</p>
              </div>
            </div>
            <div class="h-full w-2/3 text-4xl text-center lg:text-justify">
              <p class="text-red-900 font-medium">
                btw, this website is developed by
              </p>
              <div class="text-red-300 font-bold">
                <p class="">
                  Ortigan Interns
                  <span class="text-red-900 font-medium">who underwent</span>
                </p>
                <p>Ortigan Learning programs.</p>
                <vs-button> Default </vs-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
