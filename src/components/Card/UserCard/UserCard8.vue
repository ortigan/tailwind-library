<template>
  <div class="flex w-80 justify-center items-center">
    <span v-for="(item, index) in items" :key="index" class="w-full h-full">
      <div
        class="w-full group flex flex-col justify-center items-center bg-white rounded-2xl shadow-lg px-6 pt-8 pb-6 group relative"
      >
        <!-- image -->
        <div class="w-full flex items-center justify-center">

        <div
          class="absolute h-16 w-16 rounded-full -top-8 flex justify-center overflow-hidden"
        >
          <img
            class="rounded-full shadow-md group-hover:scale-110"
            src="https://res.cloudinary.com/pranav1421/image/upload/v1651821816/Tailwind-Component-library/Human%20avatar/pexels-andrea-piacquadio-3767410_kur6zy.jpg"
            alt=""
          />
        </div>
        </div>
        <!-- header -->
        <div class="text-gray-700 text-lg font-bold">
          Claire M. Giles
        </div>
                <!-- location  -->

        <div class="flex text-xxs text-gray-600">

          <div class="flex">
            <div>
             <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
            </div>
            <div>
              Sydney,Australia
            </div>
          </div>
        </div>
<!-- bio -->
<div class="text-xs mt-4 text-center text-gray-700">
    Clair is a Australia bases Ux designer and front-end developer. She loves building new websites and design creative web pages
</div>
<!-- socials -->
<div class="flex text-gray-100 space-x-1 mt-2">
    <div class="rounded-full bg-gray-700 p-1"><svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div class="rounded-full bg-gray-700 p-1"><svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div class="rounded-full bg-gray-700 p-1"><svg width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 15V21H5V15" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 17L8 17" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.9126 14.6633L8.0874 13" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.7127 12.3809L9.46228 9" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.1728 10.6423L12.0444 5.5" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0338 8.80409L15.1085 2.5" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div class="rounded-full bg-gray-700 p-1">
    <svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 17V13.5V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 7.01L7.01 6.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div class="rounded-full bg-gray-700 p-1"><svg width="16" height="16" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 9V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 15V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15L3 9L12 3L21 9L12 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21L3 15L12 9L21 15L12 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
</div>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
     
        },
      ],
    };
  },
};
</script>

<style scoped></style>
