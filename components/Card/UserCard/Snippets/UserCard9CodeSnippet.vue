<template>
<pre><code class="language-markup"><script type="prism-html-markup">
<div class="flex w-full items-center justify-center">
  <span v-for="(item, index) in items" :key="index" class="h-full w-full">
    <div class="w-96 group flex space-x-4 rounded-xl bg-white px-6 py-6 shadow-lg">
      <!-- img -->
      <div class="h-40 w-56 overflow-hidden rounded-xl">
        <img class="h-full w-full rounded-xl object-cover group-hover:scale-105" src="https://res.cloudinary.com/pranav1421/image/upload/v1652079979/Tailwind-Component-library/Human%20avatar/payton-tuttle-RFFR1JjkJx8-unsplash_wglk5e.jpg" alt="" />
      </div>
      <!-- side content -->
      <div class="flex w-full flex-col justify-between">
        <div>
          <div class="flex justify-between">
            <div class="font-bold text-gray-700">Louis Royce</div>
            <div class="flex items-center justify-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div class="font-semibold text-gray-700">4.5</div>
            </div>
          </div>
          <!-- bio -->
          <div class="text-xs text-gray-700">Looking for entry level full stack developer job</div>
        </div>
        <!-- tags -->
        <div>
          <div class="text-xxs flex space-x-1 pb-3 font-semibold text-gray-700">
            <div class="rounded-lg bg-gray-100 px-2.5 py-1">Vue</div>
            <div class="rounded-lg bg-gray-100 px-2.5 py-1">Laravel</div>
            <div class="rounded-lg bg-gray-100 px-2.5 py-1">Tailwind</div>
          </div>
          <div class="flex items-center justify-between">
            <div class="item-center flex justify-center space-x-1">
              <div class="rounded-full text-gray-700">
                <svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div class="text-xxs text-gray-700 hover:cursor-pointer">Github</div>
            </div>
            <div class="text-xxs rounded-lg bg-pink-600 px-3 py-1.5 font-semibold text-pink-100">View profile</div>
          </div>
        </div>
      </div>
    </div>
  </span>
</div>
</script></code></pre>
</template>

<script>
export default {};
</script>

<style></style>
