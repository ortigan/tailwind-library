<template>
  <div class="flex w-80 h-96 justify-center items-center">
      <span v-for="(item,index) in items" :key="index" class="w-full h-full">
          <div :class="`flex flex-col space-y-2 overflow-hidden group w-full h-full rounded-xl ${item.shadowColor} ${item.hoverShadow} ${item.textColor} ${item.bgColor} ${item.border} ${item.hoverTextColor} ${item.hoverBgColor}`">
              <div class="h-1/2 w-full z-20">
                  <img class="h-full w-full object-cover rounded-xl group-hover:scale-110 transition-all duration-100 ease-in" src="https://res.cloudinary.com/pranav1421/image/upload/v1652079979/Tailwind-Component-library/Human%20avatar/payton-tuttle-RFFR1JjkJx8-unsplash_wglk5e.jpg" alt="">
              </div>
             <div class="h-1/2 flex flex-col items-center  w-full rounded-xl overflow-hidden">
            
                     <div :class="`text-2xl font-semibold ${item.textColor}`">{{item.title}}</div>
                     <div :class="`text-xxs font-normal ${item.textColor}`">{{item.subTitle}}</div>
                     <div :class="`text-base font-normal mt-2 ${item.textColor}`">{{item.collegeName}}</div>
                    <div class="flex space-x-2 mt-4 items-center justify-center">
                         <div><svg width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 17V13.5V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 7.01L7.01 6.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div><svg width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M17.5 6.51L17.51 6.49889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div><svg width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 21C11 18 11 15 11 12C11 9.8125 11.5 8 15 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 13H11H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div><svg width="18" height="18" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div><svg width="20" height="20" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.6726 20.8435C15.5 14 12.5 8.00003 8.5 2.62964" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.06653 10.8406C6.00004 11 15.2829 10.5 19.1415 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.9677 12.81C15.3438 10.8407 7.50002 14.0001 5.23145 19.3613" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
                     </div> 
                
                 
             </div>
                 <div class="text-gray-100 w-full flex justify-center py-3 font-semibold tracking-tight bg-black">View profile</div>
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
                id: 1,
                textColor:"text-gray-700",
                bgColor:"bg-white",
                shadowColor:"shadow-lg",
                hoverShadow:"hover:shadow-3xl",
                title:"Elvis Ray",
                subTitle:"Devops engineer",
                collegeName:"Harvard University",
                type:"Type 1",
               
                },
             
            ]
        }
    }
}
</script>

<style scoped>


</style> 